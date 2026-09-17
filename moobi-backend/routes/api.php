<?php

use App\Http\Controllers\AgenticInvoiceController;
use App\Http\Controllers\AuthController;
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

    // Agentic Invoice Module (Protected by License Middleware)
    Route::middleware(['module.subscribed:invoice'])->prefix('invoices')->group(function () {
        Route::post('/publish', [AgenticInvoiceController::class, 'publish']);
        Route::get('/', [AgenticInvoiceController::class, 'index']);
        Route::get('/{id}', [AgenticInvoiceController::class, 'show']);
    });

});

// Webhook Routes (Protected by Webhook Signature Middleware)
Route::middleware(['verify.webhook:payment'])->prefix('v1/webhooks')->group(function () {
    Route::post('/payment', [AgenticInvoiceController::class, 'handlePaymentWebhook']);
});