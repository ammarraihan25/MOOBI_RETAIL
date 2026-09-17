<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Merchants Table
        Schema::create('merchants', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('business_name');
            $table->string('phone_number')->unique();
            $table->string('email')->unique();
            $table->text('encrypted_api_keys')->nullable();
            $table->timestamps();
        });

        // 2. Update Users Table
        Schema::table('users', function (Blueprint $table) {
            $table->foreignUuid('merchant_id')->nullable()->after('id')->constrained('merchants')->onDelete('cascade');
            $table->string('role')->default('admin')->after('email');
        });

        // 3. Merchant Modules Table (À la Carte Licensing)
        Schema::create('merchant_modules', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('merchant_id')->constrained('merchants')->onDelete('cascade');
            $table->string('module_key');
            $table->string('status')->default('active');
            $table->timestamp('start_date')->useCurrent();
            $table->timestamp('expired_at')->nullable();
            $table->timestamps();

            $table->unique(['merchant_id', 'module_key']);
        });

        // 4. Products Table
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('merchant_id')->constrained('merchants')->onDelete('cascade');
            $table->string('sku')->nullable();
            $table->string('name');
            $table->decimal('price', 15, 2);
            $table->integer('stock')->default(0);
            $table->integer('weight_gram')->default(0);
            $table->timestamps();
        });

        // 5. Invoices Table
        Schema::create('invoices', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('merchant_id')->constrained('merchants')->onDelete('cascade');
            $table->foreignUuid('customer_id')->nullable();
            $table->string('invoice_no')->unique();
            $table->text('raw_chat_source')->nullable();
            $table->decimal('subtotal', 15, 2)->default(0);
            $table->decimal('shipping_cost', 15, 2)->default(0);
            $table->decimal('discount', 15, 2)->default(0);
            $table->decimal('grand_total', 15, 2)->default(0);
            $table->string('payment_status')->default('unpaid');
            $table->string('payment_link')->nullable();
            $table->text('qris_payload')->nullable();
            $table->string('payment_method')->nullable();
            $table->timestamp('due_date')->nullable();
            $table->timestamp('paid_at')->nullable();
            $table->timestamps();
        });

        // 6. Invoice Items Table
        Schema::create('invoice_items', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('invoice_id')->constrained('invoices')->onDelete('cascade');
            $table->foreignUuid('product_id')->nullable()->constrained('products')->onDelete('set null');
            $table->string('product_name');
            $table->integer('quantity');
            $table->decimal('unit_price', 15, 2);
            $table->decimal('subtotal', 15, 2);
            $table->timestamps();
        });

        // 7. Shipping Trackings Table
        Schema::create('shipping_trackings', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('invoice_id')->constrained('invoices')->onDelete('cascade');
            $table->string('courier_name');
            $table->string('tracking_no');
            $table->string('status')->default('pending');
            $table->json('tracking_history')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shipping_trackings');
        Schema::dropIfExists('invoice_items');
        Schema::dropIfExists('invoices');
        Schema::dropIfExists('products');
        Schema::dropIfExists('merchant_modules');
        
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['merchant_id']);
            $table->dropColumn(['merchant_id', 'role']);
        });

        Schema::dropIfExists('merchants');
    }
};