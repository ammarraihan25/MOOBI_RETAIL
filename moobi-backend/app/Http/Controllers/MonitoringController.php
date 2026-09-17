<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\ShippingTracking;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MonitoringController extends Controller
{
    /**
     * Aggregation KPI: Omzet, Jumlah Invoice Paid/Unpaid, dan Closing Rate.
     */
    public function overviewKpi(Request $request): JsonResponse
    {
        $merchant = $request->user()->merchant;

        // 1. Total Omzet Hari Ini & Bulan Ini
        $todayRevenue = Invoice::where('merchant_id', $merchant->id)
            ->where('payment_status', 'paid')
            ->whereDate('paid_at', now()->today())
            ->sum('grand_total');

        $monthlyRevenue = Invoice::where('merchant_id', $merchant->id)
            ->where('payment_status', 'paid')
            ->whereMonth('paid_at', now()->month)
            ->whereYear('paid_at', now()->year)
            ->sum('grand_total');

        // 2. Count Invoices by Status
        $totalInvoices = Invoice::where('merchant_id', $merchant->id)->count();
        $paidInvoices = Invoice::where('merchant_id', $merchant->id)->where('payment_status', 'paid')->count();
        $unpaidInvoices = Invoice::where('merchant_id', $merchant->id)->where('payment_status', 'unpaid')->count();
        $expiredInvoices = Invoice::where('merchant_id', $merchant->id)->where('payment_status', 'expired')->count();

        // 3. Closing Rate CS Calculation (%)
        $closingRate = $totalInvoices > 0 ? round(($paidInvoices / $totalInvoices) * 100, 2) : 0;

        return response()->json([
            'status' => 'success',
            'data' => [
                'revenue' => [
                    'today' => (float) $todayRevenue,
                    'monthly' => (float) $monthlyRevenue,
                ],
                'invoices_summary' => [
                    'total' => $totalInvoices,
                    'paid' => $paidInvoices,
                    'unpaid' => $unpaidInvoices,
                    'expired' => $expiredInvoices,
                ],
                'closing_rate_percentage' => $closingRate,
            ]
        ]);
    }

    /**
     * Live Tracking Resi Kurir (JNE, J&T, SiCepat).
     */
    public function trackShipping(Request $request): JsonResponse
    {
        $request->validate([
            'courier_name' => 'required|string',
            'tracking_no' => 'required|string',
            'invoice_id' => 'nullable|uuid',
        ]);

        $courier = strtoupper($request->courier_name);
        $trackingNo = $request->tracking_no;

        // Simulasi Integrasi Third-Party Logistics API (Bisa disesuaikan dengan Binderbyte / RajaOngkir API)
        $mockHistory = [
            [
                'date' => now()->subHours(5)->toDateTimeString(),
                'location' => 'JAKARTA HUB',
                'description' => "Paket telah diterima oleh $courier cabang Jakarta",
            ],
            [
                'date' => now()->subHours(2)->toDateTimeString(),
                'location' => 'TRANSIT WAREHOUSE',
                'description' => 'Paket sedang transit menuju kota tujuan',
            ]
        ];

        // Opsional: Simpan/Update ke database jika invoice_id dilampirkan
        if ($request->invoice_id) {
            ShippingTracking::updateOrCreate(
                ['invoice_id' => $request->invoice_id],
                [
                    'courier_name' => $courier,
                    'tracking_no' => $trackingNo,
                    'status' => 'on_delivery',
                    'tracking_history' => $mockHistory,
                ]
            );
        }

        return response()->json([
            'status' => 'success',
            'data' => [
                'courier_name' => $courier,
                'tracking_no' => $trackingNo,
                'status' => 'on_delivery',
                'history' => $mockHistory,
            ]
        ]);
    }
}