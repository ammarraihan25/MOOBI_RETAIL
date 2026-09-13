import React from 'react';
import { Link } from 'react-router-dom';

export default function PenawaranMarketplace() {
  return (
    <div className="w-full bg-[#faf8ff] pb-24">
      {/* HERO SECTION PENAWARAN */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f4ff] via-white to-[#faf8ff] pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/product" className="hover:text-blue-600 transition-colors">Produk &amp; Solusi</Link>
            <span>/</span>
            <span className="text-[#0057cd]">Pilar 01 • Marketplace &amp; Toko Online</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0057cd] text-xs font-extrabold uppercase">
                <span className="w-2 h-2 rounded-full bg-[#0057cd] animate-pulse"></span>
                <span>PENAWARAN SOLUSI PILAR 01</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Integrasi Marketplace Multi&#8209;Channel &amp; <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057cd] via-[#0d6efd] to-[#7e37c7]">
                  Website Toko Online Mandiri
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Tingkatkan penjualan hingga 300% dengan satu dasbor terpusat untuk kelola inventori, upload massal ke Shopee, Tokopedia, TikTok Shop, serta nikmati web store mandiri tanpa potongan komisi pihak ketiga.
              </p>

              {/* ACTION BUTTONS (DIRECT TO DEMO & CONSULTATION) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/workspace/marketplace"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#0057cd] to-[#0d6efd] hover:from-[#0048ab] hover:to-[#0057cd] shadow-lg shadow-blue-500/25 transition-all text-sm sm:text-base active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-[22px]">play_circle</span>
                  <span>Coba Live Demo Modul Ini</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined text-[20px] text-emerald-600">chat</span>
                  <span>Konsultasi &amp; Dapatkan Penawaran</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0057cd] text-white flex items-center justify-center font-bold shadow-md">
                      <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
                    </div>
                    <div>
                      <h2 className="font-bold text-slate-900 text-lg">Modul Marketplace &amp; Web Store</h2>
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                        Siap Digunakan &amp; Terintegrasi
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-blue-600 text-[20px] mt-0.5">sync_alt</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Sinkronisasi Stok Real-Time</div>
                      <div className="text-[11px] text-slate-500">Mencegah overselling di Shopee, Tokopedia, dan TikTok Shop sekaligus.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5">flash_on</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Website Toko Kilat 0.3s</div>
                      <div className="text-[11px] text-slate-500">PWA super cepat dengan integrasi checkout otomatis via WhatsApp.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-purple-600 text-[20px] mt-0.5">dataset</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Katalog Produk Massal</div>
                      <div className="text-[11px] text-slate-500">Upload 1.000+ SKU sekali klik dengan varian warna dan ukuran.</div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/workspace/marketplace"
                  className="w-full py-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0057cd] font-bold text-sm text-center block transition-colors"
                >
                  Buka Simulator Interaktif →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RINCIAN FITUR PENAWARAN */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 mt-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Apa yang Anda Dapatkan di Paket Ini?</h2>
          <p className="text-slate-600 text-sm sm:text-base">Seluruh infrastruktur telah disiapkan lengkap mulai dari API konektor hingga panel admin manajemen order.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057cd] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">store</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Web Toko Brand Mandiri</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Domain kustom gratis (.com / .id), payment gateway QRIS/VA otomatis, checkout kilat, dan mobile-first UI premium.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">hub</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Multi-Channel Hub</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Koneksi API resmi Shopee Open Platform &amp; TikTok Shop API dengan automasi penerimaan order dan status pesanan.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7e37c7] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">price_change</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Smart Pricing &amp; Promo</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ubah harga serentak di seluruh toko, atur flash sale terjadwal, dan buat kupon diskon loyalitas otomatis.
            </p>
          </div>
        </div>

        {/* BOTTOM CTA BAR */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0057cd] to-[#0d6efd] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">Tertarik Menerapkan Modul Ini di Toko Anda?</h3>
            <p className="text-white/80 text-xs sm:text-sm">Uji coba simulasi langsung sekarang atau jadwalkan sesi demo gratis bersama tim arsitek kami.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link to="/workspace/marketplace" className="px-6 py-3.5 rounded-xl bg-white text-[#0057cd] font-bold text-sm hover:bg-slate-50 transition shadow-sm">
              Buka Live Demo →
            </Link>
            <Link to="/contact" className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition">
              Hubungi Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
