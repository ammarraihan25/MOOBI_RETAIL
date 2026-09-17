<?php

namespace App\Http\Controllers;

use App\Models\Merchant;
use App\Models\MerchantModule;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Register Merchant beserta Admin User-nya.
     */
    public function register(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'business_name' => 'required|string|max:255',
            'phone_number' => 'required|string|unique:merchants,phone_number',
            'email' => 'required|email|unique:merchants,email|unique:users,email',
            'name' => 'required|string|max:255',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'fail',
                'errors' => $validator->errors()
            ], 422);
        }

        DB::beginTransaction();
        try {
            // 1. Buat Merchant Baru
            $merchant = Merchant::create([
                'business_name' => $request->business_name,
                'phone_number' => $request->phone_number,
                'email' => $request->email,
            ]);

            // 2. Berikan Lisensi Modul Default (misal: Agentic Invoice aktif secara default)
            MerchantModule::create([
                'merchant_id' => $merchant->id,
                'module_key' => 'invoice',
                'status' => 'active',
                'start_date' => now(),
            ]);

            // 3. Buat Admin User untuk Merchant tersebut
            $user = User::create([
                'merchant_id' => $merchant->id,
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role' => 'owner',
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;

            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'Registrasi merchant berhasil.',
                'data' => [
                    'user' => $user->load('merchant'),
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                ]
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal melakukan registrasi: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Login User & Generate Sanctum Token.
     */
    public function login(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'fail',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Kredensial login tidak valid.'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Login berhasil.',
            'data' => [
                'user' => $user->load('merchant.modules'),
                'access_token' => $token,
                'token_type' => 'Bearer',
            ]
        ]);
    }

    /**
     * Get profile user yang sedang login.
     */
    public function me(Request $request): JsonResponse
    {
        $user = $request->user()->load('merchant.modules');

        return response()->json([
            'status' => 'success',
            'data' => [
                'user' => $user
            ]
        ]);
    }

    /**
     * Logout & Revoke Token.
     */
    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Logout berhasil.'
        ]);
    }
}