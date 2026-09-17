<?php

use App\Http\Controllers\AgenticInvoiceController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MonitoringController;
use Illuminate\Support\Facades\Route;

// Auth Routes
Route::prefix('v1/auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/me', [AuthController::class, 'me']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });
});

// Protected Business Routes
Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    
    // Agentic Invoice Module
    Route::middleware(['module.subscribed:invoice'])->prefix('invoices')->group(function () {
        Route::post('/publish', [AgenticInvoiceController::class, 'publish']);
        Route::get('/', [AgenticInvoiceController::class, 'index']);
        Route::get('/{id}', [AgenticInvoiceController::class, 'show']);
    });

    // Commercial Monitoring Module
    Route::middleware(['module.subscribed:monitoring'])->prefix('monitoring')->group(function () {
        Route::get('/overview-kpi', [MonitoringController::class, 'overviewKpi']);
        Route::get('/shipping-tracking', [MonitoringController::class, 'trackShipping']);
    });

});

// Webhook Routes
Route::middleware(['verify.webhook:payment'])->prefix('v1/webhooks')->group(function () {
    Route::post('/payment', [AgenticInvoiceController::class, 'handlePaymentWebhook']);
});