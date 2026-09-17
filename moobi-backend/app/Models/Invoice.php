<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Invoice extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'merchant_id',
        'customer_id',
        'invoice_no',
        'raw_chat_source',
        'subtotal',
        'shipping_cost',
        'discount',
        'grand_total',
        'payment_status',
        'payment_link',
        'qris_payload',
        'payment_method',
        'due_date',
        'paid_at',
    ];

    protected $casts = [
        'due_date' => 'datetime',
        'paid_at' => 'datetime',
        'subtotal' => 'decimal:2',
        'shipping_cost' => 'decimal:2',
        'discount' => 'decimal:2',
        'grand_total' => 'decimal:2',
    ];

    public function merchant(): BelongsTo
    {
        return $this->belongsTo(Merchant::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(InvoiceItem::class);
    }

    public function shippingTracking(): HasOne
    {
        return $this->hasOne(ShippingTracking::class);
    }
}