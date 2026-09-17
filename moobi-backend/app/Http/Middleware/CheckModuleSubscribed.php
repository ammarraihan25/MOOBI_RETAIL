<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckModuleSubscribed
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $moduleKey): Response
    {
        $user = $request->user();

        if (!$user || !$user->merchant) {
            return response()->json([
                'status' => 'error',
                'error_code' => 'UNAUTHORIZED_MERCHANT',
                'message' => 'Akun pengguna tidak terhubung dengan Merchant mana pun.',
            ], 401);
        }

        $hasModule = $user->merchant->modules()
            ->where('module_key', $moduleKey)
            ->where('status', 'active')
            ->where(function ($query) {
                $query->whereNull('expired_at')
                    ->orWhere('expired_at', '>', now());
            })
            ->exists();

        if (!$hasModule) {
            return response()->json([
                'status' => 'forbidden',
                'error_code' => 'MODULE_NOT_SUBSCRIBED',
                'message' => "Modul '{$moduleKey}' belum aktif pada akun Anda. Silakan berlangganan terlebih dahulu.",
                'upgrade_url' => "/marketplace-modules/{$moduleKey}"
            ], 403);
        }

        return $next($request);
    }
}