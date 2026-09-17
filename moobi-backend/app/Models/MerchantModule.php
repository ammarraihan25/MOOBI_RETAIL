<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MerchantModule extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'merchant_id',
        'module_key',
        'status',
        'start_date',
        'expired_at',
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'expired_at' => 'datetime',
    ];

    public function merchant(): BelongsTo
    {
        return $this->belongsTo(Merchant::class);
    }
}