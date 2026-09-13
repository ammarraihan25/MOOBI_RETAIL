import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="w-full">
      {/* HERO BLOG */}
      <section className="relative w-full py-12 lg:py-16 bg-gradient-to-b from-[#f8faff] via-white to-[#faf8ff] overflow-hidden border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[560px] lg:min-h-[620px]">

            <div className="lg:col-span-7 xl:col-span-6 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#0057cd] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0d6efd] animate-pulse"></span>
                <span>PUSAT EDUKASI &amp; STRATEGI E-COMMERCE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[58px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Wawasan, Strategi &amp; <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057cd] via-[#0d6efd] to-[#7e37c7] inline-block">
                  Pertumbuhan Bisnis E&#8209;Commerce
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                Kumpulan panduan taktis, otomasi operasional marketplace, manajemen inventori multikanal, dan optimasi konversi penjualan digital terintegrasi.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm font-bold text-slate-700 border-t border-slate-200/70">
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#0057cd] text-[20px]">verified</span><span>120+ Panduan Praktis</span></div>
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#0057cd] text-[20px]">update</span><span>Update Mingguan</span></div>
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#0057cd] text-[20px]">groups</span><span>8.500+ Pembaca Aktif</span></div>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-6 relative w-full min-h-[540px] lg:min-h-[620px] flex items-center justify-center">

              {/* Subtle Tech Dot-Matrix Mesh in Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-35 pointer-events-none -z-20"></div>

              {/* 1. Large Expansive Background Glow Mesh */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[580px] lg:w-[640px] xl:w-[700px] h-[480px] sm:h-[580px] lg:h-[640px] xl:h-[700px] bg-gradient-to-tr from-[#f59e0b]/20 via-[#ea580c]/20 to-[#6366f1]/25 rounded-full blur-3xl pointer-events-none -z-10"></div>

              {/* 2. Primary Large Sunset Aurora Morphing Fluid Blob - Pure & Borderless */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] xl:w-[560px] xl:h-[560px] rounded-[38%_62%_63%_37%/41%_44%_56%_59%] bg-gradient-to-tr from-[#d97706] via-[#ea580c] via-[#f59e0b] to-[#6366f1] animate-morph-blob pointer-events-none z-0"></div>

              {/* 3. Model Image with Soft Natural Bottom Gradient Mask */}
              <div className="relative z-10 w-full flex items-end justify-center pt-4">
                <img
                  alt="Blog & Strategy Specialist"
                  className="w-auto h-[460px] sm:h-[510px] lg:h-[550px] xl:h-[580px] object-contain z-10 relative pointer-events-none transition-transform duration-700 ease-out hover:scale-[1.02] [mask-image:linear-gradient(to_bottom,black_68%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,black_68%,transparent_96%)]"
                  src="/assets/assets%20pose6.png"
                />
              </div>

              {/* --- FLOATING HUD BADGES (Tightly Integrated with Character & Background Blob) --- */}

              {/* 1. TOP-LEFT: Mini KPI Panduan Sparkline */}
              <div className="absolute top-6 left-2 sm:left-4 lg:left-6 z-30 p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100/90 flex items-center gap-3 animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Artikel Terbit</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] sm:text-[15px] font-black text-slate-900 tracking-tight">120+ Panduan</span>
                    {/* Amber SVG Sparkline */}
                    <svg className="w-8 h-3.5 sm:w-9 sm:h-4 text-amber-500" fill="none" viewBox="0 0 40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12 Q 10 2, 20 8 T 38 4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 2. TOP-RIGHT: Social Proof Card with Avatar Stack & Floating Amber Pill */}
              <div className="absolute top-4 right-2 sm:right-4 lg:right-6 z-30 p-3 sm:p-4 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-100/90 flex flex-col gap-1.5 sm:gap-2 min-w-[155px] sm:min-w-[165px] animate-float-delayed hover:-translate-y-1 transition-transform duration-300">
                {/* Floating Amber Icon Pill */}
                <div className="absolute -top-2.5 -right-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
                  <span className="material-symbols-outlined text-[15px] sm:text-[16px]">menu_book</span>
                </div>
                <div>
                  <div className="text-[16px] sm:text-[18px] font-black text-slate-900 leading-none">8.5k+</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-1">Pembaca Aktif</div>
                </div>
                {/* Overlapping Avatar Stack */}
                <div className="flex items-center -space-x-2 pt-0.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">RD</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">AN</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-600 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">BW</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">SM</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900 text-amber-300 font-extrabold text-[8px] sm:text-[9px] flex items-center justify-center ring-2 ring-white shadow-xs">+5k</div>
                </div>
              </div>

              {/* 3. MID-LEFT: Article Preview Bubble (Clear of Face, Hugging Blob) */}
              <div className="absolute top-[48%] -translate-y-1/2 left-0 sm:left-2 lg:left-3 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex flex-col gap-1 max-w-[175px] sm:max-w-[190px] animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">- Weekly Digest 2026 -</span>
                <div className="p-2 px-2.5 rounded-2xl rounded-tl-xs bg-amber-50/90 border border-amber-100/80 text-amber-950 font-bold text-[10.5px] sm:text-[11px] leading-snug">
                  "Strategi Omni-Channel &amp; Live Selling 2026"
                </div>
                <div className="flex items-center justify-end gap-1 text-[8.5px] sm:text-[9px] text-slate-400 font-medium">
                  <span>5 Mnt Baca</span>
                  <span className="material-symbols-outlined text-[11px] sm:text-[12px] text-amber-500">done_all</span>
                </div>
              </div>

              {/* 4. MID-RIGHT: Jadwal Rilis Trend Card */}
              <div className="absolute top-[54%] right-0 sm:right-2 lg:right-4 z-30 p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex items-center justify-between gap-3 sm:gap-4 animate-float-reverse hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Update Rutin</span>
                  <span className="text-[14px] sm:text-[15px] font-black text-slate-900 tracking-tight">3x / Minggu</span>
                </div>
                <svg className="w-8 h-3.5 sm:w-9 sm:h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 14 Q 12 2, 22 8 T 38 3" />
                </svg>
              </div>

              {/* 5. BOTTOM-CENTER: Free Access Pill */}
              <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 lg:left-12 z-30 p-2 sm:p-2.5 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-amber-100 flex items-center gap-2.5 sm:gap-3 animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">auto_stories</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">Akses Belajar</span>
                  <span className="text-[13px] sm:text-[14px] font-black text-slate-900 leading-tight">100% Gratis</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE & GRID */}
      <section className="w-full py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 space-y-12">

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#0d6efd] via-[#7e37c7] to-[#ba142c]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider">EDITOR'S CHOICE</span>
                    <span className="text-xs text-[#0057cd] font-bold">Omnichannel &amp; Sync Stok</span>
                    <span className="text-xs text-slate-400">• 7 Menit Baca</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">Panduan Mengintegrasikan 5 Toko Marketplace ke 1 Sistem Terpusat Tanpa Takut Selisih Stok</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Langkah konkret menghubungkan katalog Shopee, Tokopedia, TikTok Shop, dan Lazada dengan sinkronisasi inventori real-time under 2 detik guna mencegah overselling.</p>
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <div className="text-xs">
                    <strong className="text-slate-900 block font-bold">Tim Solusi E-Commerce Moobi</strong>
                    <span className="text-slate-400">Diperbarui: 24 Mei 2025</span>
                  </div>
                  <button className="px-5 py-2.5 bg-[#0d6efd] hover:bg-[#0057cd] text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-1">
                    <span>Baca Panduan</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 bg-slate-100 min-h-[260px]">
                <img className="w-full h-full object-cover" alt="Featured Article" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU3aMynR-Jzgux2XlDndRcI9GR9UYX91GguKprFtss8s7NQrbHE7-9nVqvYrskY7IRleqoV38-owZVvsGVXv160WlrmRLGhqMKaWDjecslO40zVjb_QtQGhigEnS84nk6RB5wkty6n_eDp4OqV-I97yV2tER6k9jGazssY-4MG1L6ebunCzsE3i7dJsoLuvkSpvCR0fZM60w58z9HbSsVKgSECgqNA1Wz7qr7B-lfzwljzdLRJntfA" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <img alt="Invoice" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN4LUdAsoG3i5QDtJgCz1vKtLYrD0So3FYIlG18lOIhYxDcuZlthAGekCs768VVP-C5qojq3Hrdb7v2GqxKH7iftkoWGZBHUpwPUnXVMTrctoSG-i6Ut-XCUgBge2r9fJq9qMMLBlSTH8sk11SwxaeQnh77n_oq2rkoKWiHCjWh6UhPNGZ4gDfF7r1xXHEAaw0NYpl4gCklfHrmsej9j4evxtIKRKW2AcHhtSugXifeB6pjf4o4z6Z" />
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold text-primary uppercase">INVOICE &amp; FINANCE • 5 Min</span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">Cara Otomasi Invoice dan Pembayaran untuk Mempercepat Cashflow Toko Online</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">Eliminasi rekonsiliasi manual bukti transfer perbankan dan percepat penerbitan faktur pajak secara instan.</p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <a href="#" className="text-primary font-bold text-xs hover:underline inline-flex items-center gap-1">Baca Selengkapnya →</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <img alt="Chatbot" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU-BBr8_AIwln-KLzX1NqziP_decwS1_VVDEMgteIdZ8WLvOyoewPfdxZIuiOUgUKdLTvMlOdu-yRU0EN1K98Csxkv0Pjso-358xcXg2VLcDVElYu6fSU5XmwB8A0W4iR0QH9mmgPbpSkZ8jL4Z-jCSFPjlcDICN-gjD-yqV3ZefWRH-T8U5uMARWA1NFua3GCWguLQxIJsCnqaackRKyXUzD_Kw9V7lEkeoXnbJ2FpyLcp28aq5va" />
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold text-secondary uppercase">OTOMASI CHATBOT AI • 6 Min</span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">Strategi Membangun Chatbot CRM WhatsApp Cerdas yang Mampu Meningkatkan Closing Rate 40%</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">Kombinasi auto-reply pintar berdasar konteks produk, pengingat abandoned cart otomatis, dan closing.</p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <a href="#" className="text-secondary font-bold text-xs hover:underline inline-flex items-center gap-1">Baca Selengkapnya →</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <img alt="Logistics" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYM3RP3ofMl8lcUW4J3O2qR057OQdlQL18-Z5gt2pUGFIiyIRrcJDRdE_qLXr_HFKFyG-2Iqrq1DD4rq6WD_cokJZxxEj-cssFi2ixbNOieCCB_nSjRahRlvCN2EJXowNVhCpQ_HdzlZYV8A-mdRLBiXk1aBEkp23TG4Zp4e16eOJ8rQWtughZl6pxIyRPgd6sty2hOtAELkDL01z8l2S_js_ez0zbh9VZblqEnxkVaaSbLUeo7chz" />
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold text-primary uppercase">LOGISTIK &amp; PENGIRIMAN • 7 Min</span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">Efisiensi Biaya Logistik: Cetak Resi Massal dan Pemilihan Kurir Terbaik untuk Toko Online</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">Optimasi rute kurir ekspedisi, cetak 500 resi dalam 1 klik, serta integrasi tarif ongkos kirim termurah.</p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <a href="#" className="text-primary font-bold text-xs hover:underline inline-flex items-center gap-1">Baca Selengkapnya →</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
