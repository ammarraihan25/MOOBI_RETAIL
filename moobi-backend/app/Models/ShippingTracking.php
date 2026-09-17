<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShippingTracking extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'invoice_id',
        'courier_name',
        'tracking_no',
        'status',
        'tracking_history',
    ];

    protected $casts = [
        'tracking_history' => 'array',
    ];

    public function invoice(): BelongsTo
    {
        return $this->belongsTo(Invoice::class);
    }
}