import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="w-full">
      {/* HERO PROFILE */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8faff] via-white to-[#faf8ff] pt-12 pb-16 lg:pb-20 border-b border-slate-200/80">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[560px] lg:min-h-[620px]">

            <div className="lg:col-span-7 xl:col-span-6 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#0057cd] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0057cd] animate-pulse"></span>
                <span>Tentang Moobi • Solusi Software &amp; Infrastruktur E-Commerce</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[58px] font-extrabold text-slate-900 leading-[1.12] tracking-tight">
                Membangun Ekosistem Digital &amp; <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057cd] via-[#0d6efd] to-[#7e37c7] inline-block">
                  Infrastruktur E&#8209;Commerce
                </span> Indonesia
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Moobi menghadirkan platform teknologi terintegrasi untuk menghubungkan Marketplace, Logistik &amp; Pengiriman, CRM, serta AI Chatbot otomatis guna membantu ribuan brand lokal dan enterprise scale up lebih cepat dan efisien.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link to="/product" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0057cd] to-[#0d6efd] hover:from-[#0048ab] hover:to-[#0057cd] text-white text-sm sm:text-base font-bold shadow-lg shadow-blue-500/25 transition">
                  <span>Eksplor Solusi E-Commerce</span>
                  <span className="material-symbols-outlined text-[18px] ml-2">arrow_forward</span>
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 text-sm sm:text-base font-bold hover:bg-slate-50 transition shadow-sm">
                  <span className="material-symbols-outlined text-[18px] text-[#0057cd] mr-2">support_agent</span>
                  <span>Konsultasi Tim Ahli</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-6 relative w-full min-h-[540px] lg:min-h-[620px] flex items-center justify-center">

              {/* Subtle Tech Dot-Matrix Mesh in Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#c084fc_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-35 pointer-events-none -z-20"></div>

              {/* 1. Large Expansive Background Glow Mesh */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[580px] lg:w-[640px] xl:w-[700px] h-[480px] sm:h-[580px] lg:h-[640px] xl:h-[700px] bg-gradient-to-tr from-[#7e37c7]/20 via-[#4338ca]/20 to-[#0ea5e9]/25 rounded-full blur-3xl pointer-events-none -z-10"></div>

              {/* 2. Primary Large Royal Shield/Squircle Morphing Blob - Pure & Borderless */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] xl:w-[560px] xl:h-[560px] rounded-[45%_55%_68%_32%/42%_48%_52%_58%] bg-gradient-to-tr from-[#581c87] via-[#7e37c7] via-[#4338ca] to-[#0ea5e9] animate-morph-squircle pointer-events-none z-0"></div>

              {/* 3. Model Image with Soft Natural Bottom Gradient Mask */}
              <div className="relative z-10 w-full flex items-end justify-center pt-4">
                <img
                  alt="Moobi Lead Specialist"
                  className="w-auto h-[460px] sm:h-[510px] lg:h-[550px] xl:h-[580px] object-contain z-10 relative pointer-events-none transition-transform duration-700 ease-out hover:scale-[1.02] [mask-image:linear-gradient(to_bottom,black_68%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,black_68%,transparent_96%)]"
                  src="/assets/assets%20pose3.png"
                  onError={(e) => { e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB15O_GJ-EGUzk8ZSPaU7-MG9eW--G-LQCZF7KDXPZmc9y8OSRAtdgnrucFVAPBozufDUFS1yXt46iISuKzXZ9MfUMh1K-HeGbBoiskN5CnfBjH28tStrdSvoLTJxmILmYD36rjdtwr6adFvQXh55cOs9otArqzdAXx0_RwF3uDKrS8V1EPVh6A02BKYoDr410BcNuchniaVBqwO65FftIo-9ZcFgVUKHjVny2vhUP_HfyEAC3WaBilFRLgP9tKI441Og'; }}
                />
              </div>

              {/* --- FLOATING HUD BADGES (Tightly Integrated with Character & Background Blob) --- */}

              {/* 1. TOP-LEFT: Mini KPI Dedikasi Sparkline */}
              <div className="absolute top-6 left-2 sm:left-4 lg:left-6 z-30 p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100/90 flex items-center gap-3 animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Dedikasi Solusi</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] sm:text-[15px] font-black text-slate-900 tracking-tight">10+ Thn Inovasi</span>
                    {/* Purple SVG Sparkline */}
                    <svg className="w-8 h-3.5 sm:w-9 sm:h-4 text-purple-600" fill="none" viewBox="0 0 40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12 Q 10 2, 20 8 T 38 4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 2. TOP-RIGHT: Social Proof Card with Avatar Stack & Floating Golden Pill */}
              <div className="absolute top-4 right-2 sm:right-4 lg:right-6 z-30 p-3 sm:p-4 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-100/90 flex flex-col gap-1.5 sm:gap-2 min-w-[155px] sm:min-w-[165px] animate-float-delayed hover:-translate-y-1 transition-transform duration-300">
                {/* Floating Purple Icon Pill */}
                <div className="absolute -top-2.5 -right-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-purple-500/30">
                  <span className="material-symbols-outlined text-[15px] sm:text-[16px]">verified</span>
                </div>
                <div>
                  <div className="text-[16px] sm:text-[18px] font-black text-slate-900 leading-none">2.500+</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-1">Brand &amp; Enterprise</div>
                </div>
                {/* Overlapping Avatar Stack */}
                <div className="flex items-center -space-x-2 pt-0.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">MB</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">ID</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-600 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">GL</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">NX</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900 text-purple-300 font-extrabold text-[8px] sm:text-[9px] flex items-center justify-center ring-2 ring-white shadow-xs">+2k</div>
                </div>
              </div>

              {/* 3. MID-LEFT: ISO Certification Notification Bubble (Clear of Face, Hugging Blob) */}
              <div className="absolute top-[48%] -translate-y-1/2 left-0 sm:left-2 lg:left-3 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex flex-col gap-1 max-w-[175px] sm:max-w-[190px] animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">- Sertifikasi Keamanan -</span>
                <div className="p-2 px-2.5 rounded-2xl rounded-tl-xs bg-purple-50/90 border border-purple-100/80 text-purple-950 font-bold text-[10.5px] sm:text-[11px] leading-snug">
                  "ISO 27001 &amp; Tier-3 Certified Cloud"
                </div>
                <div className="flex items-center justify-end gap-1 text-[8.5px] sm:text-[9px] text-slate-400 font-medium">
                  <span>SLA 99.9%</span>
                  <span className="material-symbols-outlined text-[11px] sm:text-[12px] text-purple-600">verified</span>
                </div>
              </div>

              {/* 4. MID-RIGHT: Mitra Bisnis Trend Card */}
              <div className="absolute top-[54%] right-0 sm:right-2 lg:right-4 z-30 p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex items-center justify-between gap-3 sm:gap-4 animate-float-reverse hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Mitra Ekosistem</span>
                  <span className="text-[14px] sm:text-[15px] font-black text-slate-900 tracking-tight">150+ Partner</span>
                </div>
                <svg className="w-8 h-3.5 sm:w-9 sm:h-4 text-purple-600 shrink-0" fill="none" viewBox="0 0 40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 14 Q 12 2, 22 8 T 38 3" />
                </svg>
              </div>

              {/* 5. BOTTOM-CENTER: Transaksi Total Pill */}
              <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 lg:left-12 z-30 p-2 sm:p-2.5 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-purple-100 flex items-center gap-2.5 sm:gap-3 animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-100 text-[#7e37c7] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">workspace_premium</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Transaksi</span>
                  <span className="text-[13px] sm:text-[14px] font-black text-slate-900 leading-tight">Rp 50T+ Volume</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Metrics */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-white shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0057cd] shrink-0"><span className="material-symbols-outlined text-[26px]">storefront</span></div>
              <div><div className="text-2xl font-bold text-slate-900">2.500+</div><div className="text-xs text-slate-500">Toko &amp; Brand Aktif</div></div>
            </div>
            <div className="flex items-center gap-4 p-2 md:border-l border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#7e37c7] shrink-0"><span className="material-symbols-outlined text-[26px]">local_shipping</span></div>
              <div><div className="text-2xl font-bold text-slate-900">10M+</div><div className="text-xs text-slate-500">Paket Terkirim Terintegrasi</div></div>
            </div>
            <div className="flex items-center gap-4 p-2 md:border-l border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-[#ba142c] shrink-0"><span className="material-symbols-outlined text-[26px]">sync_saved_locally</span></div>
              <div><div className="text-2xl font-bold text-slate-900">99.9%</div><div className="text-xs text-slate-500">Uptime Sinkronisasi Stok &amp; Invoice</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* VISI & MISI */}
      <section className="w-full py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] text-[#0057cd] tracking-widest uppercase font-bold bg-blue-100 border border-blue-200">ARAH STRATEGIS</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Visi &amp; Misi Digital Agency</h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">Prinsip pemandu dalam setiap baris kode, desain antarmuka, dan inovasi arsitektur cloud yang kami bangun.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

            <div className="bg-gradient-to-br from-[#0d6efd] to-[#0057cd] rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">flag</span>
                </div>
                <div>
                  <span className="text-[10px] text-blue-100 uppercase tracking-wider font-bold block">ASPIRASI EKOSISTEM</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Visi Moobi</h3>
                </div>
                <p className="text-base text-white/95 font-medium leading-relaxed pt-2">
                  “Menjadi fondasi infrastruktur teknologi dan otomasi e-commerce nomor satu di Indonesia yang mendemokratisasi akses tools enterprise untuk seluruh skala bisnis dan brand lokal.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-2 text-blue-100 text-xs font-bold">
                <span className="material-symbols-outlined text-[18px] text-white">verified</span>
                <span>Enabling Indonesia's Digital Merchants</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0d6efd] to-[#0057cd] rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">hub</span>
                </div>
                <div>
                  <span className="text-[10px] text-blue-100 uppercase tracking-wider font-bold block">MISI NYATA KAMI</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Misi Kami</h3>
                </div>
                <ul className="space-y-3 text-xs pt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-white text-[20px] mt-0.5 shrink-0">check_circle</span>
                    <span><strong className="text-white font-bold">Sinkronisasi Multi-Channel:</strong> <span className="text-blue-100">Menyatukan katalog, stok, pesanan, dan chat dari Shopee, Tokopedia, TikTok Shop, Lazada.</span></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-white text-[20px] mt-0.5 shrink-0">check_circle</span>
                    <span><strong className="text-white font-bold">Otomasi Logistik &amp; Kurir:</strong> <span className="text-blue-100">Mengintegrasikan 15+ ekspedisi nasional dengan auto-generate resi instan dan tracking real-time.</span></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-white text-[20px] mt-0.5 shrink-0">check_circle</span>
                    <span><strong className="text-white font-bold">AI CS &amp; Retensi:</strong> <span className="text-blue-100">Menghadirkan bot cerdas 24/7 untuk closing pesanan otomatis serta broadcast promo CRM terukur.</span></span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-2 text-blue-100 text-xs font-bold">
                <span className="material-symbols-outlined text-[18px] text-white">sync_alt</span>
                <span>Seamless Integration &amp; Scalable Automation</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
