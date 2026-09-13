import React from 'react';
import { Link } from 'react-router-dom';

export default function PenawaranMonitoring() {
  return (
    <div className="w-full bg-[#faf8ff] pb-24">
      {/* HERO SECTION PENAWARAN */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f9ff] via-white to-[#faf8ff] pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/product" className="hover:text-blue-600 transition-colors">Produk &amp; Solusi</Link>
            <span>/</span>
            <span className="text-[#0057cd]">Pilar 05 • Manajemen Marketplace &amp; Monitoring Bisnis</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0057cd] text-xs font-extrabold uppercase">
                <span className="w-2 h-2 rounded-full bg-[#0057cd] animate-pulse"></span>
                <span>PENAWARAN SOLUSI PILAR 05</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Pusat Kontrol Operasional, <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057cd] via-[#0d6efd] to-[#06b6d4]">
                  Monitoring Omzet &amp; Laporan Laba Bersih
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Ambil keputusan berbasis data akurat. Pantau performa GMV, laba per produk, margin keuntungan, dan performa pesanan dari seluruh cabang toko dalam satu layar visual interaktif.
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/workspace/monitoring"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#0057cd] to-[#06b6d4] hover:from-[#0048ab] hover:to-[#0057cd] shadow-lg shadow-blue-500/25 transition-all text-sm sm:text-base active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-[22px]">monitoring</span>
                  <span>Coba Live Demo Analytics</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined text-[20px] text-emerald-600">chat</span>
                  <span>Konsultasi Dashboard Eksekutif</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0057cd] text-white flex items-center justify-center font-bold shadow-md">
                      <span className="material-symbols-outlined text-[24px]">view_sidebar</span>
                    </div>
                    <div>
                      <h2 className="font-bold text-slate-900 text-lg">Modul Monitoring Eksekutif</h2>
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                        Real-Time Financial Telemetry
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-blue-600 text-[20px] mt-0.5">insights</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Perhitungan Net Profit Otomatis</div>
                      <div className="text-[11px] text-slate-500">Omzet kotor dikurangi biaya admin marketplace, ongkir subsidi, dan COGS.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5">inventory</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Slow-Moving &amp; Best Seller Alert</div>
                      <div className="text-[11px] text-slate-500">Notifikasi otomatis stok yang hampir habis atau barang yang menumpuk di gudang.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-purple-600 text-[20px] mt-0.5">download</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Ekspor Laporan Pajak &amp; Akuntansi</div>
                      <div className="text-[11px] text-slate-500">Format kompatibel dengan Jurnal, Zahir, Accurate, dan Excel CSV.</div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/workspace/monitoring"
                  className="w-full py-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0057cd] font-bold text-sm text-center block transition-colors"
                >
                  Buka Dasbor Finansial →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEUNGGULAN MONITORING */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 mt-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Transparansi Finansial Toko di Ujung Jari</h2>
          <p className="text-slate-600 text-sm sm:text-base">Ketahui kesehatan bisnis Anda kapan saja tanpa harus menunggu rekap bulanan staf admin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057cd] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">query_stats</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Live GMV &amp; Order Tracker</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Pantau detik demi detik order masuk dari seluruh marketplace dan website toko dalam grafik interaktif.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#0891b2] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">leaderboard</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Top Performing Channels</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bandingkan channel mana yang memberikan ROI margin keuntungan tertinggi (Shopee vs TikTok Shop vs Web).
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Audit &amp; Rekonsiliasi Payout</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Cocokkan pencairan dana dari marketplace ke rekening koran bank Anda tanpa selisih sepeser pun.
            </p>
          </div>
        </div>

        {/* BOTTOM CTA BAR */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0057cd] via-[#0d6efd] to-[#06b6d4] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">Coba Dasbor Monitoring Interaktif</h3>
            <p className="text-white/80 text-xs sm:text-sm">Uji coba simulasi live metrik finansial, omzet, dan laporan laba bersih bisnis.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link to="/workspace/monitoring" className="px-6 py-3.5 rounded-xl bg-white text-[#0057cd] font-bold text-sm hover:bg-slate-50 transition shadow-sm">
              Buka Live Demo →
            </Link>
            <Link to="/contact" className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition">
              Konsultasi Setup
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
