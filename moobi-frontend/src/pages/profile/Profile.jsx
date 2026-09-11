import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="w-full">
      {/* HERO PROFILE */}
      <section className="relative w-full overflow-hidden bg-white pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0057cd] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0057cd] animate-pulse"></span>Tentang Moobi • Solusi Software &amp; Infrastruktur E-Commerce
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Membangun Ekosistem Digital &amp; <span className="text-[#0d6efd]">Infrastruktur E-Commerce</span> Indonesia
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Moobi menghadirkan platform teknologi terintegrasi untuk menghubungkan Marketplace, Logistik &amp; Pengiriman, CRM, serta AI Chatbot otomatis guna membantu ribuan brand lokal dan enterprise scale up lebih cepat dan efisien.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link to="/product" className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#0d6efd] text-white text-sm font-semibold shadow-lg hover:bg-[#0057cd] transition">
                  <span>Eksplor Solusi E-Commerce</span>
                  <span className="material-symbols-outlined text-[18px] ml-2">arrow_forward</span>
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-100 text-slate-800 text-sm font-semibold hover:bg-slate-200 transition">
                  <span className="material-symbols-outlined text-[18px] text-[#0057cd] mr-2">support_agent</span>
                  <span>Konsultasi Tim Ahli</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="w-[360px] h-[360px] md:w-[440px] md:h-[440px] rounded-full bg-gradient-to-tr from-[#0d6efd] to-[#0057cd] flex items-end justify-center relative shadow-2xl">
                <img alt="Moobi Lead" className="relative z-10 w-[95%] h-[105%] object-contain object-bottom" src="moobi ecosystem/assets/assets pose3.png" onError={(e) => { e.target.src='https://lh3.googleusercontent.com/aida-public/AB6AXuB15O_GJ-EGUzk8ZSPaU7-MG9eW--G-LQCZF7KDXPZmc9y8OSRAtdgnrucFVAPBozufDUFS1yXt46iISuKzXZ9MfUMh1K-HeGbBoiskN5CnfBjH28tStrdSvoLTJxmILmYD36rjdtwr6adFvQXh55cOs9otArqzdAXx0_RwF3uDKrS8V1EPVh6A02BKYoDr410BcNuchniaVBqwO65FftIo-9ZcFgVUKHjVny2vhUP_HfyEAC3WaBilFRLgP9tKI441Og'; }} />
              </div>
            </div>

          </div>

          {/* Quick Metrics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
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
      <section className="w-full py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
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
