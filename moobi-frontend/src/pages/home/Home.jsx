import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8faff] via-white to-[#faf8ff] pt-10 pb-16 lg:pb-20 border-b border-slate-200/80">
        {/* Subtle Background Mesh Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[600px] lg:min-h-[640px]">

            {/* Left Copy */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col gap-6 z-10 py-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 w-fit shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0d6efd]"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0057cd]">EKOSISTEM E-COMMERCE &amp; RETAIL TERPADU</span>
              </div>

              <div className="flex flex-col gap-3.5">
                <h1 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[60px] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                  Solusi Kebutuhan <br className="hidden sm:inline" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057cd] via-[#0d6efd] to-[#7e37c7] inline-block">
                    Bisnis Online &amp; E&#8209;Commerce
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed">
                  Otomasi seluruh operasional bisnis online Anda: integrasi marketplace, invoice instan, manajemen stok multi-channel, ekspedisi pengiriman, dan chatbot CRM cerdas dalam satu ekosistem Moobi.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link to="/product" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#0057cd] to-[#0d6efd] hover:from-[#0048ab] hover:to-[#0057cd] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/25">
                  <span className="material-symbols-outlined text-[22px]">terminal</span>
                  <span>Mulai Bangun Solusi Web</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <a href="https://wa.me/6281299887720" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm sm:text-base text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98] transition-all border border-slate-200 shadow-sm">
                  <span className="material-symbols-outlined text-[22px] text-emerald-600">chat</span>
                  <span>Hubungi Kami</span>
                </a>
              </div>

              {/* Badges & Trust Metrics */}
              <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-200/70">
                <div className="flex -space-x-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0057cd] text-white text-[10px] font-extrabold shadow-sm ring-2 ring-white">WEB</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0d6efd] text-white text-[10px] font-extrabold shadow-sm ring-2 ring-white">APP</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#7e37c7] text-white text-[10px] font-extrabold shadow-sm ring-2 ring-white">ERP</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-cyan-300 text-[10px] font-extrabold shadow-sm ring-2 ring-white">API</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600 text-xs sm:text-sm font-medium">
                  <span className="material-symbols-outlined text-[#0057cd] text-[20px]">verified</span>
                  <span>Terpercaya oleh <strong className="text-slate-900 font-bold">500+ sistem &amp; bisnis aktif</strong></span>
                </div>
              </div>
            </div>

            {/* Right Visual Banner - Rich Interactive HUD Tech Showcase */}
            <div className="lg:col-span-5 xl:col-span-6 relative w-full min-h-[540px] lg:min-h-[620px] flex items-center justify-center">

              {/* Subtle Tech Dot-Matrix Mesh in Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#93c5fd_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-35 pointer-events-none -z-20"></div>

              {/* 1. Large Expansive Background Glow Mesh */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[580px] lg:w-[640px] xl:w-[700px] h-[480px] sm:h-[580px] lg:h-[640px] xl:h-[700px] bg-gradient-to-tr from-[#0057cd]/20 via-[#0d6efd]/20 to-[#38bdf8]/25 rounded-full blur-3xl pointer-events-none -z-10"></div>

              {/* 2. Primary Large Organic Morphing Fluid Blob */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] xl:w-[560px] xl:h-[560px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-tr from-[#004bb8] via-[#0d6efd] to-[#38bdf8] animate-morph-blob pointer-events-none z-0"></div>

              {/* 3. Model Image with Soft Natural Bottom Gradient Mask */}
              <div className="relative z-10 w-full flex items-end justify-center pt-4">
                <img
                  alt="Moobi Specialist"
                  className="w-auto h-[460px] sm:h-[510px] lg:h-[550px] xl:h-[580px] object-contain z-10 relative pointer-events-none transition-transform duration-700 ease-out hover:scale-[1.02] [mask-image:linear-gradient(to_bottom,black_68%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,black_68%,transparent_96%)]"
                  src="/assets/assets%20pose1.png"
                  onError={(e) => { e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuADVwpEZ-TYbqLqGxYqrDycAWZ7Wm3S8tjs-1aZGcR5sOKy8whE7o4c9ZzGU1NcMmGrcKNNmjqOpHVgK5Su4eplBZV74K145yEH3kcxiPCUalR0M72DlteNKk85IUgZPSuSspyQszp4p4jVCrkJd3S4TSUi7L-z_w8mlbRrvHh6w3k5hehNkmzobadxLz4f2VxGkvTWp1yxxAoFxJwQ5p6mdaReivHJc2hPA-p3LVNSW2nV9ZRo1NEcAK4LLfNqmfV_rQ'; }}
                />
              </div>

              {/* --- FLOATING HUD BADGES (Tightly Integrated with Character & Background Blob) --- */}

              {/* 1. TOP-LEFT: Mini KPI Order Sparkline */}
              <div className="absolute top-6 left-2 sm:left-4 lg:left-6 z-30 p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100/90 flex items-center gap-3 animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Order Hari Ini</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] sm:text-[15px] font-black text-slate-900 tracking-tight">1.850+ Order</span>
                    {/* Orange SVG Sparkline */}
                    <svg className="w-8 h-3.5 sm:w-9 sm:h-4 text-orange-500" fill="none" viewBox="0 0 40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12 Q 10 2, 20 8 T 38 4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 2. TOP-RIGHT: Social Proof Card with Avatar Stack & Floating Cyan Pill */}
              <div className="absolute top-4 right-2 sm:right-4 lg:right-6 z-30 p-3 sm:p-4 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-100/90 flex flex-col gap-1.5 sm:gap-2 min-w-[155px] sm:min-w-[165px] animate-float-delayed hover:-translate-y-1 transition-transform duration-300">
                {/* Floating Cyan Icon Pill */}
                <div className="absolute -top-2.5 -right-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 text-white flex items-center justify-center shadow-md shadow-cyan-500/30">
                  <span className="material-symbols-outlined text-[15px] sm:text-[16px]">favorite</span>
                </div>
                <div>
                  <div className="text-[16px] sm:text-[18px] font-black text-slate-900 leading-none">10k+</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-1">Merchant Indonesia</div>
                </div>
                {/* Overlapping Avatar Stack */}
                <div className="flex items-center -space-x-2 pt-0.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">AR</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">MR</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-600 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">SK</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">DH</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900 text-cyan-300 font-extrabold text-[8px] sm:text-[9px] flex items-center justify-center ring-2 ring-white shadow-xs">+5k</div>
                </div>
              </div>

              {/* 3. MID-LEFT: WhatsApp Live Interaction Chat Bubble (Clear of Face, Hugging Blob) */}
              <div className="absolute top-[48%] -translate-y-1/2 left-0 sm:left-2 lg:left-3 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex flex-col gap-1 max-w-[175px] sm:max-w-[190px] animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">- Buyer dari Surabaya -</span>
                <div className="p-2 px-2.5 rounded-2xl rounded-tl-xs bg-blue-50/90 border border-blue-100/80 text-blue-950 font-bold text-[10.5px] sm:text-[11px] leading-snug">
                  "Invoice &amp; Resi Otomatis Ready?"
                </div>
                <div className="flex items-center justify-end gap-1 text-[8.5px] sm:text-[9px] text-slate-400 font-medium">
                  <span>04:45 WIB</span>
                  <span className="material-symbols-outlined text-[11px] sm:text-[12px] text-blue-500">done_all</span>
                </div>
              </div>

              {/* 4. MID-RIGHT: Pelanggan Baru Trend Card */}
              <div className="absolute top-[54%] right-0 sm:right-2 lg:right-4 z-30 p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex items-center justify-between gap-3 sm:gap-4 animate-float-reverse hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Buyer Baru</span>
                  <span className="text-[14px] sm:text-[15px] font-black text-slate-900 tracking-tight">3.258</span>
                </div>
                <svg className="w-8 h-3.5 sm:w-9 sm:h-4 text-orange-500 shrink-0" fill="none" viewBox="0 0 40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 14 Q 12 2, 22 8 T 38 3" />
                </svg>
              </div>

              {/* 5. BOTTOM-CENTER: Omset Transaksi Pill */}
              <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 lg:left-12 z-30 p-2 sm:p-2.5 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-blue-100 flex items-center gap-2.5 sm:gap-3 animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-100 text-[#0057cd] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">trending_up</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">Omset Terhubung</span>
                  <span className="text-[13px] sm:text-[14px] font-black text-slate-900 leading-tight">10M++</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: 4-COLUMN METRIC IMPACT BANNER */}
      <section className="w-full bg-[#f0f4ff] py-12">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">500+</span>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-[24px]">devices</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-1">Proyek Selesai</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Membantu UMKM, startup, &amp; enterprise di berbagai sektor</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">15+</span>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-[24px]">domain</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-1">Sektor Industri</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Retail, Fintech, Logistik, Kesehatan, Manufaktur &amp; SaaS</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">98%</span>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-[24px]">thumb_up</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-1">Tingkat Kepuasan</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Klien aktif &amp; repeat order dengan SLA terjamin</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">24/7</span>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-1">Dukungan Teknis</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Tim teknis standby siap penanganan cepat &amp; SLA bug-free</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: 6 PILAR SOLUSI */}
      <section className="w-full py-16 lg:py-20 bg-[#faf8ff]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0057cd] uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[16px]">storefront</span>
                <span>Ekosistem E-Commerce All-in-One</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Solusi Lengkap Kebutuhan Bisnis Onlinemu</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">Moobi menyediakan ekosistem terpadu untuk mengelola seluruh aspek operasional toko online Anda.</p>
            </div>
            <Link to="/product" className="inline-flex items-center gap-1.5 text-[#0057cd] font-bold text-sm hover:underline">
              <span>Pelajari Seluruh Solusi Kami</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Pilar 01 */}
            <Link to="/penawaran/marketplace" className="group relative overflow-hidden p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-500/40 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,87,205,0.3)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer">
              {/* Smooth Blue Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0057cd] via-[#0060e6] to-[#0d6efd] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

              <div className="relative z-10 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0057cd] group-hover:bg-white/20 text-white flex items-center justify-center shadow-md transition-all duration-500 ease-out">
                    <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 group-hover:bg-white/20 text-[#0057cd] group-hover:text-white text-[10px] font-extrabold uppercase transition-all duration-500 ease-out">Pilar 01</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-500 ease-out">Marketplace &amp; Toko Online</h3>
                <p className="text-sm text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500 ease-out">Integrasi multi-channel, sinkronisasi katalog produk terpusat, website toko mandiri berkinerja tinggi serta checkout kilat.</p>
              </div>
              <div className="relative z-10 pt-5 mt-6 border-t border-slate-100 group-hover:border-white/20 space-y-2 text-xs sm:text-sm font-medium text-slate-700 group-hover:text-white transition-all duration-500 ease-out">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 group-hover:text-emerald-300 text-[18px] transition-colors duration-500 ease-out">check_circle</span><span>Katalog Terpusat &amp; Web Store Mandiri</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 group-hover:text-emerald-300 text-[18px] transition-colors duration-500 ease-out">check_circle</span><span>Sinkronisasi Multi-Channel Instan</span></div>
              </div>
            </Link>

            {/* Pilar 02 */}
            <Link to="/penawaran/invoice" className="group relative overflow-hidden p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-500/40 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,87,205,0.3)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer">
              {/* Smooth Blue Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0057cd] via-[#0060e6] to-[#0d6efd] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

              <div className="relative z-10 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 group-hover:bg-white/20 text-white flex items-center justify-center shadow-md transition-all duration-500 ease-out">
                    <span className="material-symbols-outlined text-[24px]">description</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 group-hover:bg-white/20 text-emerald-600 group-hover:text-white text-[10px] font-extrabold uppercase transition-all duration-500 ease-out">Pilar 02</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-500 ease-out">Invoice &amp; Penagihan Otomatis</h3>
                <p className="text-sm text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500 ease-out">Penerbitan invoicing instan via WhatsApp/Email, pengingat jatuh tempo otomatis, rekonsiliasi kas bank real-time, dan laporan laba bersih.</p>
              </div>
              <div className="relative z-10 pt-5 mt-6 border-t border-slate-100 group-hover:border-white/20 space-y-2 text-xs sm:text-sm font-medium text-slate-700 group-hover:text-white transition-all duration-500 ease-out">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 group-hover:text-emerald-300 text-[18px] transition-colors duration-500 ease-out">check_circle</span><span>Invoicing Instan &amp; QRIS/VA Otomatis</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 group-hover:text-emerald-300 text-[18px] transition-colors duration-500 ease-out">check_circle</span><span>Pengingat Bayar &amp; Rekonsiliasi Kas</span></div>
              </div>
            </Link>

            {/* Pilar 03 */}
            <Link to="/penawaran/marketing" className="group relative overflow-hidden p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-500/40 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,87,205,0.3)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer">
              {/* Smooth Blue Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0057cd] via-[#0060e6] to-[#0d6efd] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

              <div className="relative z-10 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0057cd] group-hover:bg-white/20 text-white flex items-center justify-center shadow-md transition-all duration-500 ease-out">
                    <span className="material-symbols-outlined text-[24px]">groups</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 group-hover:bg-white/20 text-[#0057cd] group-hover:text-white text-[10px] font-extrabold uppercase transition-all duration-500 ease-out">Pilar 03</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-500 ease-out">CRM &amp; Manajemen Pelanggan</h3>
                <p className="text-sm text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500 ease-out">Segmentasi pembeli loyal vs churn, riwayat transaksi 360°, program loyalty &amp; point reward, serta optimasi Customer Lifetime Value (CLV).</p>
              </div>
              <div className="relative z-10 pt-5 mt-6 border-t border-slate-100 group-hover:border-white/20 space-y-2 text-xs sm:text-sm font-medium text-slate-700 group-hover:text-white transition-all duration-500 ease-out">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 group-hover:text-emerald-300 text-[18px] transition-colors duration-500 ease-out">check_circle</span><span>Segmentasi Pembeli &amp; Riwayat Transaksi</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 group-hover:text-emerald-300 text-[18px] transition-colors duration-500 ease-out">check_circle</span><span>Program Loyalty &amp; Optimasi CLV</span></div>
              </div>
            </Link>

            {/* Pilar 04 */}
            <Link to="/penawaran/logistics" className="group relative overflow-hidden p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-500/40 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,87,205,0.3)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer">
              {/* Smooth Blue Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0057cd] via-[#0060e6] to-[#0d6efd] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

              <div className="relative z-10 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#f97316] group-hover:bg-white/20 text-white flex items-center justify-center shadow-md transition-all duration-500 ease-out">
                    <span className="material-symbols-outlined text-[24px]">sync_alt</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-orange-50 group-hover:bg-white/20 text-[#f97316] group-hover:text-white text-[10px] font-extrabold uppercase transition-all duration-500 ease-out">Pilar 04</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-500 ease-out">Pengiriman &amp; Logistik Terpadu</h3>
                <p className="text-sm text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500 ease-out">Koneksi ekspedisi (JNE, SiCepat, J&amp;T, GoSend, Grab), cetak resi massal thermal A6, tracking otomatis, dan request pick up instan.</p>
              </div>
              <div className="relative z-10 pt-5 mt-6 border-t border-slate-100 group-hover:border-white/20 space-y-2 text-xs sm:text-sm font-medium text-slate-700 group-hover:text-white transition-all duration-500 ease-out">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 group-hover:text-emerald-300 text-[18px] transition-colors duration-500 ease-out">check_circle</span><span>Koneksi Multi-Kurir JNE/SiCepat/J&amp;T</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 group-hover:text-emerald-300 text-[18px] transition-colors duration-500 ease-out">check_circle</span><span>Pick Up Otomatis &amp; Resi Massal</span></div>
              </div>
            </Link>

            {/* Pilar 05 */}
            <Link to="/penawaran/monitoring" className="group relative overflow-hidden p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-500/40 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,87,205,0.3)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer">
              {/* Smooth Blue Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0057cd] via-[#0060e6] to-[#0d6efd] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

              <div className="relative z-10 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0057cd] group-hover:bg-white/20 text-white flex items-center justify-center shadow-md transition-all duration-500 ease-out">
                    <span className="material-symbols-outlined text-[24px]">view_sidebar</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 group-hover:bg-white/20 text-[#0057cd] group-hover:text-white text-[10px] font-extrabold uppercase transition-all duration-500 ease-out">Pilar 05</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-500 ease-out">Manajemen Marketplace Terpusat</h3>
                <p className="text-sm text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500 ease-out">Stok tersinkronisasi otomatis antar toko (anti-overselling), pembaruan harga massal, dan pemrosesan pesanan satu pintu.</p>
              </div>
              <div className="relative z-10 pt-5 mt-6 border-t border-slate-100 group-hover:border-white/20 space-y-2 text-xs sm:text-sm font-medium text-slate-700 group-hover:text-white transition-all duration-500 ease-out">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 group-hover:text-emerald-300 text-[18px] transition-colors duration-500 ease-out">check_circle</span><span>Stok Tersinkronisasi Otomatis Antar Toko</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 group-hover:text-emerald-300 text-[18px] transition-colors duration-500 ease-out">check_circle</span><span>Manajemen Pesanan Satu Pintu</span></div>
              </div>
            </Link>

            {/* Pilar 06 */}
            <Link to="/penawaran/chatbot" className="group relative overflow-hidden p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-500/40 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,87,205,0.3)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer">
              {/* Smooth Blue Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0057cd] via-[#0060e6] to-[#0d6efd] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

              <div className="relative z-10 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#7e37c7] group-hover:bg-white/20 text-white flex items-center justify-center shadow-md transition-all duration-500 ease-out">
                    <span className="material-symbols-outlined text-[24px]">chat</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-50 group-hover:bg-white/20 text-[#7e37c7] group-hover:text-white text-[10px] font-extrabold uppercase transition-all duration-500 ease-out">Pilar 06</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-500 ease-out">Chatbot CRM Cerdas AI</h3>
                <p className="text-sm text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500 ease-out">Auto-reply WhatsApp bertenaga AI, rekomendasi produk personal, panduan pembayaran instan, dan closing penjualan otomatis 24/7.</p>
              </div>
              <div className="relative z-10 pt-5 mt-6 border-t border-slate-100 group-hover:border-white/20 space-y-2 text-xs sm:text-sm font-medium text-slate-700 group-hover:text-white transition-all duration-500 ease-out">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 group-hover:text-emerald-300 text-[18px] transition-colors duration-500 ease-out">check_circle</span><span>Auto-Reply WhatsApp AI 24/7</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 group-hover:text-emerald-300 text-[18px] transition-colors duration-500 ease-out">check_circle</span><span>Closing &amp; Rekomendasi Barang Otomatis</span></div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* SECTION 4: SHOWCASE KARYA DIGITAL */}
      <section className="w-full py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 text-[#7e37c7] text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[16px]">folder_special</span>
                <span>PORTOFOLIO &amp; STUDI KASUS UNGGULAN</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Karya Digital &amp; Solusi Teknologi Moobi Eco</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">Produk website dan aplikasi terbukti yang telah membantu ratusan pelaku bisnis meningkatkan omset dan efisiensi operasional.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-200 text-xs text-slate-700 font-semibold">Terkurasi Moobi QA</span>
              <span className="px-3.5 py-1.5 rounded-xl bg-blue-50 text-xs text-[#0057cd] font-semibold">Ready for Quotation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img className="w-full h-full object-cover" alt="Agro Logistics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKFnDq8rPB1yGXQAifcw_IPArmtviqJ7sm1f8t-kJdVzTNGzNFweMzlY3N7sFszCUBotOaB_FRCxUDkwHLZpjQhrJbz14dBd2zUSeLLbjXq6e0kdqDx4HaMKxKGkY8OHx4dp1GKXnIzsLIYkpFUItFwMEqmOp3Qnvn2omK4umjV6tljNj6nrltV7U2_QD1r9hPCP007qxRllVcm3UAJ5xdqVp97gI8zt1Q_Mi_3vqAloshHXk98kPM" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white shadow-md text-[10px] text-[#0057cd] font-bold">Agro Logistics</span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#0057cd] text-white text-[10px] font-bold shadow-sm">Web &amp; Mobile ERP</span>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] text-[#0057cd] font-bold uppercase tracking-wider">Case Study #01</span>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">AgroNusantara Supply Chain App</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Dashboard ERP logistik dan inventaris agrikultur multi-gudang dengan integrasi barcode.</p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link to="/contact" className="w-full block text-center py-3 rounded-xl bg-[#0057cd] hover:bg-[#0d6efd] text-white text-xs font-bold transition shadow-sm">Lihat Studi Kasus</Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img className="w-full h-full object-cover" alt="FinPay Gateway" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR9pSwAWXFBXwQY62JzixeauIYLTVXdIN8eLTNBxbd70UnXpIJ8GuuEsRdur6S4JzazXCBQ4KPQh3vYT8xs-isd_i-e6B79jv1EIZ358FNcYGmQNHddr3wlvVn74_4P0cB6qAY6UlsPGoUKGxZQVTkTamq_c91sAQOvy-Zkl0keyjYb8v4V8vXzKDx0t0TGACyHl4nl2uRoKaYn4N1Tds8BQFkXjkGCLinycaPNUqbeQgcIcKxUZOT" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white shadow-md text-[10px] text-[#0057cd] font-bold">Fintech &amp; Merchant</span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#0d6efd] text-white text-[10px] font-bold shadow-sm">Fintech &amp; Payment</span>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] text-[#0057cd] font-bold uppercase tracking-wider">Case Study #02</span>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">FinPay Gateway &amp; Merchant App</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Platform pembayaran multi-channel terintegrasi QRIS, Virtual Account, dan rekonsiliasi.</p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link to="/contact" className="w-full block text-center py-3 rounded-xl bg-[#0057cd] hover:bg-[#0d6efd] text-white text-xs font-bold transition shadow-sm">Lihat Studi Kasus</Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img className="w-full h-full object-cover" alt="FurniCraft E-Commerce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNcPqtA9Ue80n_9DCGXo1zDgDy0rIuaXfWBxqHkEXX_SqrzlyzkuQh6dnNbUvzSZKpCA-nbWZbI1gK__g_5kK09Ua-03U-Sfbx-7dz5OdDadOBG8Uw-vuZrf1a6P1GnwC0DLfaxOUzxxRD0FrwGjEcIaPNGYFvKiFf2bKqEVG9nP0csPOTpf6Ex8luPoklKsWuEjXQxh6ey4Mk5H2vzwNMmQZ5_FTRF1c8BHb8XZfaynrUh04er3jP" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white shadow-md text-[10px] text-[#0057cd] font-bold">Retail Commerce</span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#0057cd] text-white text-[10px] font-bold shadow-sm">E-Commerce Skala Besar</span>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] text-[#0057cd] font-bold uppercase tracking-wider">Case Study #03</span>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">FurniCraft E-Commerce Global</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Website e-commerce katalog furnitur interaktif 3D, multi-mata uang, dan checkout instan.</p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link to="/contact" className="w-full block text-center py-3 rounded-xl bg-[#0057cd] hover:bg-[#0d6efd] text-white text-xs font-bold transition shadow-sm">Lihat Studi Kasus</Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img className="w-full h-full object-cover" alt="MedikaCare" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdqcZxU4KX25U1bf9mnJ-TJlj191sEHqSO9LYxxgTIYtEODYvjSJP6iZflTnHUMvWI1NrCGXGjlGz2SeMOXLyrEEE_HRAexwZEf4CUyxSgn7yUL9lnI3t3Mvm-_6_t3ONTEGQkrR-4heY4t4Uffht_q0586e7IQS8Ga1U302Xi-4x_2ARhiKsaDugQpcx-7KqxOwVcBvmXf1_fwWC97i3Gc3kzlE3FHXSzbd8KTLGN2k9_BLwK_4qz" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white shadow-md text-[10px] text-[#0057cd] font-bold">Health Tech</span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#0d6efd] text-white text-[10px] font-bold shadow-sm">Mobile Health App</span>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] text-[#0057cd] font-bold uppercase tracking-wider">Case Study #04</span>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">MedikaCare Telemedicine System</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Aplikasi reservasi dokter klinik, rekam medis elektronik terenkripsi, dan telekonsultasi.</p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link to="/contact" className="w-full block text-center py-3 rounded-xl bg-[#0057cd] hover:bg-[#0d6efd] text-white text-xs font-bold transition shadow-sm">Lihat Studi Kasus</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: CERITA SUKSES KLIENT */}
      <section className="w-full py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 flex flex-col gap-10">

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 shadow-sm relative overflow-hidden border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <img className="w-full h-80 object-cover" alt="Hendra Setiawan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADThZI_jOhyrgcxYhw1Le9x6DZlYdLq-9ufAtpK-ZOZrcd9nFqLvyCN3-v5gaUtVy494HUfQQu5kB5vYnjpKWSlgpYi77j79MGgQ1QPCkU2yr6LiUO3HAfswfooQYvFnCW3BA7NgMd43E6tcAu77YIGYBL6NsC89mVmLoh8mYkW7A7KhwaAvIsXKmnUbhVq-07Weyj1prF1JFHeJpPARPKfhwMUncPdk-BU5KNh62Yndb0QysIMkxV" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-900 font-bold">Hendra Setiawan</span>
                      <span className="text-[9px] text-[#0057cd] bg-blue-50 px-2.5 py-0.5 rounded-full font-bold">Verified Client</span>
                    </div>
                    <span className="text-[11px] text-slate-500">CEO CV Karya Digital</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Kisah Sukses Klien 2024</span>
                </div>
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug">
                  “Sebelumnya kami kesulitan mengelola operasional secara manual. Setelah Moobi Eco membangun web platform dan sistem manajemen digital terintegrasi, efisiensi kerja tim kami melonjak 300% dan konversi penjualan naik signifikan.”
                </blockquote>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xs text-slate-500 block mb-1">Peningkatan Efisiensi</span>
                    <span className="text-2xl text-[#0057cd] font-extrabold">+300%</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xs text-slate-500 block mb-1">Uptime Sistem</span>
                    <span className="text-2xl text-[#0057cd] font-extrabold">99.99%</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xs text-slate-500 block mb-1">Waktu Delivery</span>
                    <span className="text-base text-[#0057cd] font-extrabold">Tepat Waktu (4 Pekan)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#0057cd] via-[#0d6efd] to-[#0057cd] flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden shadow-xl">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 text-xs text-white bg-white/20 px-3.5 py-1 rounded-full uppercase tracking-wider font-bold w-fit">
                <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                <span>Mulai Proyek Digital Anda</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">Siap Mengembangkan Solusi Teknologi Bersama Moobi?</h2>
              <p className="text-sm sm:text-base text-white/90 mt-1 leading-relaxed">Konsultasikan kebutuhan aplikasi, website e-commerce, atau sistem ERP bisnis Anda secara gratis bersama tim analis &amp; engineer kami.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
              <a href="https://wa.me/6281299887720" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-[#0057cd] font-bold text-sm hover:bg-slate-50 transition shadow-md">
                <span>Jadwalkan Konsultasi Gratis</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <Link to="/product" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 transition">
                <span className="material-symbols-outlined text-[18px]">payments</span>
                <span>Lihat Paket Harga</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
