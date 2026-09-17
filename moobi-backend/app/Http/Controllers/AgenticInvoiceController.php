<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AgenticInvoiceController extends Controller
{
    /**
     * Confirm & Publish Invoice (Menyimpan Invoice, Items, dan Generate Dynamic QRIS).
     */
    public function publish(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'customer_id' => 'nullable|uuid',
            'raw_chat_source' => 'nullable|string',
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'nullable|uuid',
            'items.*.product_name' => 'required|string',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.unit_price' => 'required|numeric|min:0',
            'shipping_cost' => 'nullable|numeric|min:0',
            'discount' => 'nullable|numeric|min:0',
            'due_date' => 'nullable|date',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'fail',
                'errors' => $validator->errors()
            ], 422);
        }

        $merchant = $request->user()->merchant;

        DB::beginTransaction();
        try {
            // 1. Kalkulasi Nilai Finansial
            $subtotal = 0;
            $itemsData = [];

            foreach ($request->items as $item) {
                $itemSubtotal = $item['quantity'] * $item['unit_price'];
                $subtotal += $itemSubtotal;

                $itemsData[] = [
                    'id' => (string) Str::uuid(),
                    'product_id' => $item['product_id'] ?? null,
                    'product_name' => $item['product_name'],
                    'quantity' => $item['quantity'],
                    'unit_price' => $item['unit_price'],
                    'subtotal' => $itemSubtotal,
                ];
            }

            $shippingCost = $request->shipping_cost ?? 0;
            $discount = $request->discount ?? 0;
            $grandTotal = ($subtotal + $shippingCost) - $discount;

            // 2. Generate Nomor Faktur Unik
            $invoiceNo = 'INV-' . date('Ymd') . '-' . strtoupper(Str::random(4));

            // 3. Simpan Invoice
            $invoice = Invoice::create([
                'merchant_id' => $merchant->id,
                'customer_id' => $request->customer_id,
                'invoice_no' => $invoiceNo,
                'raw_chat_source' => $request->raw_chat_source,
                'subtotal' => $subtotal,
                'shipping_cost' => $shippingCost,
                'discount' => $discount,
                'grand_total' => $grandTotal,
                'payment_status' => 'unpaid',
                'payment_link' => "https://pay.moobi.id/inv/{$invoiceNo}",
                'qris_payload' => "00020101021226680016ID.CO.QRIS.WWW0118936009140000000000520458125303360540" . sprintf('%012d', $grandTotal),
                'due_date' => $request->due_date ?? now()->addDays(1),
            ]);

            // 4. Simpan Invoice Items
            foreach ($itemsData as $item) {
                $item['invoice_id'] = $invoice->id;
                InvoiceItem::create($item);
            }

            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'Invoice berhasil diterbitkan.',
                'data' => [
                    'invoice' => $invoice->load('items'),
                ]
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal menerbitkan invoice: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Ambil daftar invoice milik Merchant.
     */
    public function index(Request $request): JsonResponse
    {
        $merchant = $request->user()->merchant;

        $invoices = Invoice::where('merchant_id', $merchant->id)
            ->with(['items', 'shippingTracking'])
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return response()->json([
            'status' => 'success',
            'data' => $invoices
        ]);
    }

    /**
     * Detail Invoice berdasarkan ID.
     */
    public function show(Request $request, string $id): JsonResponse
    {
        $merchant = $request->user()->merchant;

        $invoice = Invoice::where('merchant_id', $merchant->id)
            ->where('id', $id)
            ->with(['items', 'shippingTracking'])
            ->first();

        if (!$invoice) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Invoice tidak ditemukan.'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => [
                'invoice' => $invoice
            ]
        ]);
    }

    /**
     * Webhook Auto-Reconcile Pembayaran.
     */
    public function handlePaymentWebhook(Request $request): JsonResponse
    {
        $invoiceNo = $request->input('invoice_no');
        $paymentStatus = $request->input('status'); // paid, expired, failed
        $paymentMethod = $request->input('payment_method', 'qris');

        $invoice = Invoice::where('invoice_no', $invoiceNo)->first();

        if (!$invoice) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Invoice tidak ditemukan.'
            ], 404);
        }

        if ($paymentStatus === 'paid') {
            $invoice->update([
                'payment_status' => 'paid',
                'payment_method' => $paymentMethod,
                'paid_at' => now(),
            ]);
        } else if (in_array($paymentStatus, ['expired', 'failed'])) {
            $invoice->update([
                'payment_status' => $paymentStatus,
            ]);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Status pembayaran berhasil diperbarui.',
            'data' => [
                'invoice_no' => $invoice->invoice_no,
                'payment_status' => $invoice->payment_status
            ]
        ]);
    }
}