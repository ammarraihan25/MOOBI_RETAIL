import React from 'react';
import { Link } from 'react-router-dom';

export default function PenawaranInvoice() {
  return (
    <div className="w-full bg-[#faf8ff] pb-24">
      {/* HERO SECTION PENAWARAN */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdf4] via-white to-[#faf8ff] pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
            <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/product" className="hover:text-emerald-600 transition-colors">Produk &amp; Solusi</Link>
            <span>/</span>
            <span className="text-emerald-600">Pilar 02 • Invoice &amp; Penagihan Otomatis</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>PENAWARAN SOLUSI PILAR 02</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Sistem Invoicing Otomatis, <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-[#0d6efd] to-[#0057cd]">
                  Payment QRIS/VA &amp; Rekonsiliasi Kas
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Hentikan pengecekan mutasi manual yang memakan waktu. Terbitkan tagihan instan dengan link bayar otomatis, kirim via WhatsApp, dan pantau status lunas secara real-time.
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/workspace/invoice"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-emerald-600 shadow-lg shadow-emerald-500/25 transition-all text-sm sm:text-base active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-[22px]">receipt_long</span>
                  <span>Coba Live Demo Invoicing</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined text-[20px] text-emerald-600">chat</span>
                  <span>Konsultasi &amp; Penawaran Harga</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md">
                      <span className="material-symbols-outlined text-[24px]">description</span>
                    </div>
                    <div>
                      <h2 className="font-bold text-slate-900 text-lg">Modul Auto Invoicing</h2>
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                        Otomasi WhatsApp &amp; Email
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5">qr_code_2</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">QRIS Dinamis &amp; Virtual Account</div>
                      <div className="text-[11px] text-slate-500">Mendukung BCA, Mandiri, BRI, BNI, Permata, serta e-Wallet.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-blue-600 text-[20px] mt-0.5">mark_chat_read</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Pengingat Tagihan Otomatis</div>
                      <div className="text-[11px] text-slate-500">Kirim reminder H-3, H-1, dan hari H via WhatsApp template resmi.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-purple-600 text-[20px] mt-0.5">account_balance</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Auto Rekonsiliasi Bank</div>
                      <div className="text-[11px] text-slate-500">Status langsung berubah LUNAS begitu pelanggan mentransfer dana.</div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/workspace/invoice"
                  className="w-full py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-sm text-center block transition-colors"
                >
                  Buka Generator Invoice →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEUNGGULAN MODUL */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 mt-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Efisiensi Finansial Tanpa Human-Error</h2>
          <p className="text-slate-600 text-sm sm:text-base">Membantu ribuan UMKM dan enterprise mempercepat perputaran piutang (Cash Flow Acceleration).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">send_time_extension</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Penerbitan Tagihan Kilat</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Buat invoice profesional berlogo brand Anda dalam 10 detik dan langsung kirimkan PDF resmi via WhatsApp.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057cd] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">notifications_active</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Smart Follow-up Robot</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Otomatis ingatkan pelanggan tanpa perlu staf admin mengetik manual satu per satu setiap hari.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7e37c7] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">bar_chart</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Laporan Laba &amp; Arus Kas</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Grafik omzet, tagihan tertunda, dan rekonsiliasi kas bank harian tersaji rapi siap ekspor Excel/PDF.
            </p>
          </div>
        </div>

        {/* BOTTOM CTA BAR */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">Coba Pembuatan Invoice Sekarang</h3>
            <p className="text-white/80 text-xs sm:text-sm">Uji coba simulasi live modul invoice untuk melihat alur terbitan instan dan QRIS.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link to="/workspace/invoice" className="px-6 py-3.5 rounded-xl bg-white text-emerald-700 font-bold text-sm hover:bg-slate-50 transition shadow-sm">
              Buka Live Demo →
            </Link>
            <Link to="/contact" className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition">
              Konsultasi Harga
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
