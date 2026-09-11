import React from 'react';
import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-10 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[#0d6efd] text-xs font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-[#0d6efd] animate-pulse"></span> SUITE LENGKAP E-COMMERCE &amp; OMNICHANNEL
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Suite Solusi E-Commerce &amp; <span className="text-[#0d6efd]">Operasional Bisnis Online</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Satu ekosistem terpadu untuk menaikkan penjualan dan efisiensi operasional toko Anda di berbagai saluran penjualan.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a href="#pricing" className="inline-flex items-center gap-2 bg-[#0d6efd] hover:bg-[#0057cd] text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-blue-500/25 transition">
                  <span>Lihat Paket Layanan</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-full border border-slate-200 shadow-sm transition">
                  <span className="material-symbols-outlined text-[#0d6efd] text-[18px]">chat</span>
                  <span>Konsultasi Kebutuhan Gratis</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-[#0d6efd] rounded-full shadow-2xl shadow-blue-500/30 -z-10"></div>
              <div className="relative z-10 w-full max-w-sm sm:max-w-md flex justify-center">
                <img alt="Moobi Development" className="w-auto max-h-[460px] object-contain drop-shadow-2xl" src="moobi ecosystem/assets/assets pose2.png" onError={(e) => { e.target.src='https://lh3.googleusercontent.com/aida-public/AB6AXuCHdMqcYL3wyHZqExF4m92Y9yH6qBjWvFL6DVAeiLzG1yYhJyjBwneZUEVxTeNq836aYXaioIjR0F_Jl3uJ0GNSyL8iAlKoqBoIP9O0OY93eB1AHdKmmWomTftD4seCDV17qJLspv4va2eLZisvCehPd7e3dOkrQkcoSqkN8rcghBji9R735emHTrOkL1Ryj9SRP_TBYt-4uuCMwjEHvhRd2vFjfmIiAGWEWSqGR8_ftRGAWCQc3M58Arvw-xoe5MvcRA'; }} />
              </div>
            </div>

          </div>

          {/* Quick Estimator Bar */}
          <div className="mt-12 bg-white border border-blue-100 shadow-md rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#0d6efd] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[22px]">flash_on</span>
              </div>
              <div>
                <div className="text-[11px] font-extrabold text-[#0d6efd] uppercase tracking-wider">LAYANAN ESTIMASI CEPAT</div>
                <div className="text-sm md:text-base font-bold text-slate-900">Audit Integrasi Toko Online, Sinkronisasi Stok &amp; Estimasi Setup Sistem dalam 24 Jam</div>
              </div>
            </div>
            <Link to="/contact" className="bg-white hover:bg-blue-50 text-[#0d6efd] border border-[#0d6efd] text-xs md:text-sm font-bold px-6 py-2.5 rounded-full shadow-sm transition">
              Minta Penawaran Proyek →
            </Link>
          </div>

          {/* Metrics */}
          <div className="mt-4 bg-white border border-blue-100 shadow-md rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3.5 px-2">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0d6efd] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">devices</span>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">250+</div>
                <div className="text-xs font-semibold text-slate-500">Website &amp; Aplikasi Rilis</div>
              </div>
            </div>
            <div className="flex items-center gap-3.5 px-2">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-[#7e37c7] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">speed</span>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">3–6 Pekan</div>
                <div className="text-xs font-semibold text-slate-500">Rata-Rata Waktu Rilis</div>
              </div>
            </div>
            <div className="flex items-center gap-3.5 px-2">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">verified_user</span>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">100%</div>
                <div className="text-xs font-semibold text-slate-500">Garansi Bug &amp; SLA</div>
              </div>
            </div>
            <div className="flex items-center gap-3.5 px-2">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">support_agent</span>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">24/7</div>
                <div className="text-xs font-semibold text-slate-500">Dukungan Teknis Siaga</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0d6efd]">PAKET HARGA TRANSPARAN</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Investasi Pembuatan Website &amp; Aplikasi</h2>
            <p className="text-sm text-slate-500 mt-2">Pilih paket pengembangan yang terukur dan sesuai dengan fase kebutuhan bisnis Anda saat ini.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">UMKM &amp; BRAND BARU</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">Paket Starter Online</h3>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px]">Solusi tepat untuk mulai go-digital dengan toko online mandiri &amp; penagihan otomatis.</p>
                <div className="my-6 pb-6 border-b border-slate-100 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900">Rp 5.500.000</span>
                  <span className="text-xs text-slate-400 font-medium">/ paket setup</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span><span>Website Toko Online Mandiri &amp; Katalog Responsif</span></li>
                  <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span><span>Invoice &amp; Pembayaran QRIS / Virtual Account</span></li>
                  <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span><span>Koneksi Ekspedisi Lokal &amp; Cek Ongkir Otomatis</span></li>
                  <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span><span>Garansi Maintenance 3 Bulan</span></li>
                </ul>
              </div>
              <Link to="/contact" className="w-full text-center py-3 px-4 rounded-full border border-slate-300 font-bold text-xs text-slate-700 hover:bg-blue-50 transition">Pilih Starter Online</Link>
            </div>

            <div className="bg-white rounded-3xl border-2 border-[#0d6efd] p-8 shadow-xl relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0d6efd] text-white text-[10px] font-extrabold uppercase px-4 py-1 rounded-full tracking-wider shadow">PALING DIMINATI • BEST VALUE</div>
              <div>
                <span className="text-[11px] font-bold tracking-wider text-[#0d6efd] uppercase">GROWING BRAND &amp; RETAIL</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">Pro E-Commerce Multi-Marketplace</h3>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px]">Integrasi menyeluruh marketplace, sinkronisasi stok, logistik massal &amp; chatbot AI.</p>
                <div className="my-6 pb-6 border-b border-slate-100 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900">Rp 16.500.000</span>
                  <span className="text-xs text-slate-400 font-medium">/ paket setup</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-700 mb-8 font-medium">
                  <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[#0d6efd] text-[18px]">check_circle</span><span>Sinkronisasi Stok Real-Time (Shopee, Tokopedia, TikTok, Web)</span></li>
                  <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[#0d6efd] text-[18px]">check_circle</span><span>Manajemen Logistik &amp; Cetak Label Resi Massal Cepat</span></li>
                  <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[#0d6efd] text-[18px]">check_circle</span><span>Chatbot CRM Cerdas WhatsApp AI (24/7)</span></li>
                  <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[#0d6efd] text-[18px]">check_circle</span><span>Invoice &amp; Rekonsiliasi Kas Pembayaran Otomatis</span></li>
                  <li className="flex items-start gap-2.5 text-[#0057cd] font-bold bg-blue-50/70 p-2 rounded-lg"><span className="material-symbols-outlined text-[#0057cd] text-[18px]">verified</span><span>6 Pilar E-Commerce Terintegrasi &amp; Garansi 6 Bulan</span></li>
                </ul>
              </div>
              <Link to="/contact" className="w-full text-center py-3.5 px-4 rounded-full bg-[#0d6efd] hover:bg-[#0057cd] text-white font-bold text-xs shadow-lg transition">Mulai Pro E-Commerce</Link>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-purple-600 uppercase">DISTRIBUTOR &amp; ENTERPRISE</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">Enterprise Omnichannel &amp; Custom ERP</h3>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px]">Automasi total multi-gudang, B2B wholesale, integrasi POS offline &amp; sistem ERP kustom.</p>
                <div className="my-6 pb-6 border-b border-slate-100 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900">Rp 32.000.000</span>
                  <span className="text-xs text-slate-400 font-medium">/ custom scope</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span><span>Multi-Warehouse &amp; Outlet Offline POS Synchronization</span></li>
                  <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span><span>B2B Wholesale Portal &amp; Harga Bertingkat</span></li>
                  <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span><span>Custom ERP Accounting &amp; Audit Log</span></li>
                  <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span><span>Full Source Code Handover &amp; Cloud Support</span></li>
                </ul>
              </div>
              <Link to="/contact" className="w-full text-center py-3 px-4 rounded-full border border-[#0d6efd] text-[#0d6efd] hover:bg-blue-50 font-bold text-xs transition">Diskusikan Enterprise ERP</Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
