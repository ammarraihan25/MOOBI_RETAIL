<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class VerifyWebhookSignature
{
/**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next, string $gatewayType = 'payment'): Response
    {
        $signature = $request->header('X-Signature') ?? $request->header('X-Hub-Signature-256');
        $secret = config("services.{$gatewayType}.webhook_secret", env('PAYMENT_WEBHOOK_SECRET', 'secret_key_demo'));

        if (!$signature) {
            return response()->json([
                'status' => 'error',
                'message' => 'Missing webhook signature header.'
            ], 401);
        }

        $computed = hash_hmac('sha256', $request->getContent(), $secret);

        if (!hash_equals($computed, (string) $signature)) {
            Log::warning("Unauthorized Webhook attempt from IP: " . $request->ip());
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid webhook signature.'
            ], 401);
        }

        return $next($request);
    }
}