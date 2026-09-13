import React from 'react';
import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#f8faff] via-white to-[#faf8ff] border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[560px] lg:min-h-[620px]">

            <div className="lg:col-span-7 xl:col-span-6 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#0057cd] text-xs font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-[#0d6efd] animate-pulse"></span>
                <span>SUITE LENGKAP E-COMMERCE &amp; OMNICHANNEL</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[58px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Suite Solusi E-Commerce &amp; <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057cd] via-[#0d6efd] to-[#7e37c7] inline-block">
                  Operasional Bisnis Online
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                Satu ekosistem terpadu untuk menaikkan penjualan dan efisiensi operasional toko Anda di berbagai saluran penjualan.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a href="#pricing" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0057cd] to-[#0d6efd] hover:from-[#0048ab] hover:to-[#0057cd] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-500/25 transition text-sm sm:text-base">
                  <span>Lihat Paket Layanan</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold px-7 py-4 rounded-2xl border border-slate-200 shadow-sm transition text-sm sm:text-base">
                  <span className="material-symbols-outlined text-[#0057cd] text-[18px]">chat</span>
                  <span>Konsultasi Kebutuhan Gratis</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-6 relative w-full min-h-[540px] lg:min-h-[620px] flex items-center justify-center">

              {/* Subtle Tech Dot-Matrix Mesh in Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-35 pointer-events-none -z-20"></div>

              {/* 1. Large Expansive Background Glow Mesh */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[580px] lg:w-[640px] xl:w-[700px] h-[480px] sm:h-[580px] lg:h-[640px] xl:h-[700px] bg-gradient-to-tr from-[#4f46e5]/20 via-[#2563eb]/20 to-[#06b6d4]/25 rounded-full blur-3xl pointer-events-none -z-10"></div>

              {/* 2. Primary Large Dynamic Tech Wave Morphing Blob - Pure & Borderless */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] xl:w-[560px] xl:h-[560px] rounded-[45%_55%_70%_30%/50%_35%_65%_50%] bg-gradient-to-tr from-[#3730a3] via-[#4f46e5] via-[#2563eb] to-[#06b6d4] animate-morph-squircle pointer-events-none z-0"></div>

              {/* 3. Model Image with Soft Natural Bottom Gradient Mask */}
              <div className="relative z-10 w-full flex items-end justify-center pt-4">
                <img
                  alt="Moobi E-Commerce Suite"
                  className="w-auto h-[460px] sm:h-[510px] lg:h-[550px] xl:h-[580px] object-contain z-10 relative pointer-events-none transition-transform duration-700 ease-out hover:scale-[1.02] [mask-image:linear-gradient(to_bottom,black_68%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,black_68%,transparent_96%)]"
                  src="/assets/assets%20pose2.png"
                  onError={(e) => { e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHdMqcYL3wyHZqExF4m92Y9yH6qBjWvFL6DVAeiLzG1yYhJyjBwneZUEVxTeNq836aYXaioIjR0F_Jl3uJ0GNSyL8iAlKoqBoIP9O0OY93eB1AHdKmmWomTftD4seCDV17qJLspv4va2eLZisvCehPd7e3dOkrQkcoSqkN8rcghBji9R735emHTrOkL1Ryj9SRP_TBYt-4uuCMwjEHvhRd2vFjfmIiAGWEWSqGR8_ftRGAWCQc3M58Arvw-xoe5MvcRA'; }}
                />
              </div>

              {/* --- FLOATING HUD BADGES (Tightly Integrated with Character & Background Blob) --- */}

              {/* 1. TOP-LEFT: Mini KPI Sync Sparkline */}
              <div className="absolute top-6 left-2 sm:left-4 lg:left-6 z-30 p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100/90 flex items-center gap-3 animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Sinkronisasi Stok</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] sm:text-[15px] font-black text-slate-900 tracking-tight">3 Marketplace</span>
                    {/* Indigo SVG Sparkline */}
                    <svg className="w-8 h-3.5 sm:w-9 sm:h-4 text-indigo-500" fill="none" viewBox="0 0 40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12 Q 10 2, 20 8 T 38 4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 2. TOP-RIGHT: Social Proof Card with Avatar Stack & Floating Cyan Pill */}
              <div className="absolute top-4 right-2 sm:right-4 lg:right-6 z-30 p-3 sm:p-4 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-100/90 flex flex-col gap-1.5 sm:gap-2 min-w-[155px] sm:min-w-[165px] animate-float-delayed hover:-translate-y-1 transition-transform duration-300">
                {/* Floating Cyan Icon Pill */}
                <div className="absolute -top-2.5 -right-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white flex items-center justify-center shadow-md shadow-indigo-500/30">
                  <span className="material-symbols-outlined text-[15px] sm:text-[16px]">bolt</span>
                </div>
                <div>
                  <div className="text-[16px] sm:text-[18px] font-black text-slate-900 leading-none">100+ Fitur</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-1">Shopee, Toko &amp; TikTok</div>
                </div>
                {/* Overlapping Avatar Stack */}
                <div className="flex items-center -space-x-2 pt-0.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-600 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">SH</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">TK</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-slate-900 to-slate-700 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">TT</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">LZ</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900 text-cyan-300 font-extrabold text-[8px] sm:text-[9px] flex items-center justify-center ring-2 ring-white shadow-xs">+99</div>
                </div>
              </div>

              {/* 3. MID-LEFT: Live Sync Notification Bubble (Clear of Face, Hugging Blob) */}
              <div className="absolute top-[48%] -translate-y-1/2 left-0 sm:left-2 lg:left-3 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex flex-col gap-1 max-w-[175px] sm:max-w-[190px] animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">- Auto Sync Inventori -</span>
                <div className="p-2 px-2.5 rounded-2xl rounded-tl-xs bg-indigo-50/90 border border-indigo-100/80 text-indigo-950 font-bold text-[10.5px] sm:text-[11px] leading-snug">
                  "120 SKU terupdate otomatis di semua toko"
                </div>
                <div className="flex items-center justify-end gap-1 text-[8.5px] sm:text-[9px] text-slate-400 font-medium">
                  <span>0.4s Respon</span>
                  <span className="material-symbols-outlined text-[11px] sm:text-[12px] text-indigo-500">done_all</span>
                </div>
              </div>

              {/* 4. MID-RIGHT: Speed Checkout Trend Card */}
              <div className="absolute top-[54%] right-0 sm:right-2 lg:right-4 z-30 p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex items-center justify-between gap-3 sm:gap-4 animate-float-reverse hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Kecepatan Sync</span>
                  <span className="text-[14px] sm:text-[15px] font-black text-slate-900 tracking-tight">&lt; 0.4s</span>
                </div>
                <svg className="w-8 h-3.5 sm:w-9 sm:h-4 text-indigo-500 shrink-0" fill="none" viewBox="0 0 40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 14 Q 12 2, 22 8 T 38 3" />
                </svg>
              </div>

              {/* 5. BOTTOM-CENTER: SLA & Uptime Pill */}
              <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 lg:left-12 z-30 p-2 sm:p-2.5 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-indigo-100 flex items-center gap-2.5 sm:gap-3 animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">verified_user</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">Uptime Sistem</span>
                  <span className="text-[13px] sm:text-[14px] font-black text-slate-900 leading-tight">99.99% SLA</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Estimator Bar */}
          <div className="mt-14 bg-white border border-blue-100 shadow-sm rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0d6efd] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[24px]">flash_on</span>
              </div>
              <div>
                <div className="text-xs font-extrabold text-[#0d6efd] uppercase tracking-wider">LAYANAN ESTIMASI CEPAT</div>
                <div className="text-sm md:text-base font-bold text-slate-900">Audit Integrasi Toko Online, Sinkronisasi Stok &amp; Estimasi Setup Sistem dalam 24 Jam</div>
              </div>
            </div>
            <Link to="/contact" className="bg-white hover:bg-blue-50 text-[#0d6efd] border border-[#0d6efd] text-xs md:text-sm font-bold px-7 py-3 rounded-full shadow-sm transition whitespace-nowrap">
              Minta Penawaran Proyek →
            </Link>
          </div>

          {/* Metrics */}
          <div className="mt-6 bg-white border border-blue-100 shadow-sm rounded-3xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 px-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0d6efd] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">devices</span>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">250+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">Website &amp; Aplikasi Rilis</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-2">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7e37c7] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">speed</span>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">3–6 Pekan</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">Rata-Rata Waktu Rilis</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">verified_user</span>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">100%</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">Garansi Bug &amp; SLA</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">support_agent</span>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">24/7</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">Dukungan Teknis Siaga</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
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
