import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-white pt-8 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[560px]">
            
            {/* Left Copy */}
            <div className="lg:col-span-6 flex flex-col gap-5 z-10 py-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef3eb] border border-[#fed7aa] w-fit shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-[#f97316]">code</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">SOLUSI &amp; EKOSISTEM OPERASIONAL E-COMMERCE TERPADU</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                  Solusi Kebutuhan <span className="text-[#0d6efd]">Bisnis Online &amp; E-Commerce</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 max-w-xl mt-1 leading-relaxed">
                  Otomasi seluruh operasional bisnis online Anda: integrasi marketplace, invoice instan, manajemen stok multi-channel, ekspedisi pengiriman, dan chatbot CRM cerdas dalam satu ekosistem Moobi.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link to="/product" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white bg-[#0057cd] hover:bg-[#0d6efd] active:scale-95 transition-all shadow-lg shadow-blue-500/20">
                  <span className="material-symbols-outlined text-[20px]">terminal</span>
                  <span>Mulai Bangun Aplikasi / Web</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <a href="https://wa.me/6281299887720" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-slate-800 bg-white hover:bg-slate-50 shadow-sm transition-all border border-slate-300">
                  <span className="material-symbols-outlined text-[20px] text-green-600">chat</span>
                  <span>Hubungi Kami</span>
                </a>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0057cd] text-white text-[10px] font-bold shadow-sm">WEB</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0d6efd] text-white text-[10px] font-bold shadow-sm">APP</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#7e37c7] text-white text-[10px] font-bold shadow-sm">ERP</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-[#0057cd] text-[10px] font-bold shadow-sm">API</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600 text-xs font-medium">
                  <span className="material-symbols-outlined text-[#0057cd] text-[18px]">verified</span>
                  <span>Terpercaya oleh <strong className="text-slate-900 font-bold">500+ sistem &amp; bisnis aktif</strong> (Fintech, Retail, Logistik &amp; SaaS)</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-6 relative w-full h-full min-h-[500px] flex items-end justify-center">
              <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[320px] h-[320px] lg:w-[380px] lg:h-[380px] rounded-full bg-[#0057cd] z-0 shadow-2xl shadow-blue-500/30"></div>
              
              <div className="relative z-10 w-full flex items-end justify-center">
                <img alt="Moobi Specialist" className="w-auto h-[440px] lg:h-[490px] object-contain drop-shadow-2xl z-10 relative pointer-events-none -mb-2" src="moobi ecosystem/assets/assets pose1.png" onError={(e) => { e.target.src='https://lh3.googleusercontent.com/aida-public/AB6AXuADVwpEZ-TYbqLqGxYqrDycAWZ7Wm3S8tjs-1aZGcR5sOKy8whE7o4c9ZzGU1NcMmGrcKNNmjqOpHVgK5Su4eplBZV74K145yEH3kcxiPCUalR0M72DlteNKk85IUgZPSuSspyQszp4p4jVCrkJd3S4TSUi7L-z_w8mlbRrvHh6w3k5hehNkmzobadxLz4f2VxGkvTWp1yxxAoFxJwQ5p6mdaReivHJc2hPA-p3LVNSW2nV9ZRo1NEcAK4LLfNqmfV_rQ'; }} />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-6 right-0 z-30 px-4 py-2.5 rounded-2xl bg-white shadow-xl border border-slate-100 flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">PROJECT LIVE FEED</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#fef3eb] text-green-600 text-[10px] font-bold">Active</span>
                </div>
                <div className="text-[13px] font-bold text-slate-900 leading-tight mt-0.5">Web &amp; Mobile App • Selesai On-Time</div>
              </div>

              <div className="absolute top-1/3 -left-4 z-30 p-3 px-3.5 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0057cd] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">devices</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#0057cd] uppercase tracking-wider">ENTERPRISE READY</span>
                  <span className="text-[13px] font-bold text-slate-900 leading-tight">Modern Stack &amp; Scalable API</span>
                </div>
              </div>

              <div className="absolute bottom-6 right-2 z-30 p-3 px-3.5 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0057cd] text-white flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-slate-900 leading-tight">250+ Proyek Selesai</span>
                  <span className="text-[11px] text-slate-500">Klien Puas &amp; Terverifikasi</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: 4-COLUMN METRIC IMPACT BANNER */}
      <section className="w-full bg-[#f0f4ff] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-white rounded-2xl border border-blue-100 p-5 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-blue-600 tracking-tight">500+</span>
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-[22px]">devices</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-1">Proyek Selesai</h3>
                <p className="text-xs text-slate-500 font-medium">Membantu UMKM, startup, &amp; enterprise di berbagai sektor</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-blue-100 p-5 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-blue-600 tracking-tight">15+</span>
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-[22px]">domain</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-1">Sektor Industri</h3>
                <p className="text-xs text-slate-500 font-medium">Retail, Fintech, Logistik, Kesehatan, Manufaktur &amp; SaaS</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-blue-100 p-5 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-blue-600 tracking-tight">98%</span>
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-[22px]">thumb_up</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-1">Tingkat Kepuasan</h3>
                <p className="text-xs text-slate-500 font-medium">Klien aktif &amp; repeat order dengan SLA terjamin</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-blue-100 p-5 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-blue-600 tracking-tight">24/7</span>
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-[22px]">support_agent</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-1">Dukungan Teknis</h3>
                <p className="text-xs text-slate-500 font-medium">Tim teknis standby siap penanganan cepat &amp; SLA bug-free</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: 6 PILAR SOLUSI */}
      <section className="w-full py-16 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0057cd] uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[16px]">storefront</span>
                <span>Ekosistem E-Commerce All-in-One</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Solusi Lengkap Kebutuhan Bisnis Onlinemu</h2>
              <p className="text-slate-600 text-sm mt-2">Moobi menyediakan ekosistem terpadu untuk mengelola seluruh aspek operasional toko online Anda.</p>
            </div>
            <Link to="/product" className="inline-flex items-center gap-1.5 text-[#0057cd] font-bold text-sm hover:underline">
              <span>Pelajari Seluruh Solusi Kami</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0057cd] text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0057cd] text-[10px] font-extrabold uppercase">Pilar 01</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Marketplace &amp; Toko Online</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Integrasi multi-channel, sinkronisasi katalog produk terpusat, website toko mandiri berkinerja tinggi serta checkout kilat.</p>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 space-y-2 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span><span>Katalog Terpusat &amp; Web Store Mandiri</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span><span>Sinkronisasi Multi-Channel Instan</span></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[24px]">description</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-extrabold uppercase">Pilar 02</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Invoice &amp; Penagihan Otomatis</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Penerbitan invoicing instan via WhatsApp/Email, pengingat jatuh tempo otomatis, rekonsiliasi kas bank real-time, dan laporan laba bersih.</p>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 space-y-2 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span><span>Invoicing Instan &amp; QRIS/VA Otomatis</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span><span>Pengingat Bayar &amp; Rekonsiliasi Kas</span></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0057cd] to-[#0d6efd] text-white border border-blue-600 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[24px]">groups</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#f97316] text-white text-[10px] font-extrabold uppercase">Pilar 03 • Highlight</span>
                </div>
                <h3 className="text-lg font-bold text-white">CRM &amp; Manajemen Pelanggan</h3>
                <p className="text-xs text-white/90 leading-relaxed">Segmentasi pembeli loyal vs churn, riwayat transaksi 360°, program loyalty &amp; point reward, serta optimasi Customer Lifetime Value (CLV).</p>
              </div>
              <div className="pt-4 mt-5 border-t border-white/20 space-y-2 text-xs font-medium text-white">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span><span>Segmentasi Pembeli &amp; Riwayat Transaksi</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span><span>Program Loyalty &amp; Optimasi CLV</span></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#f97316] text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[24px]">sync_alt</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-orange-50 text-[#f97316] text-[10px] font-extrabold uppercase">Pilar 04</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Pengiriman &amp; Logistik Terpadu</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Koneksi ekspedisi (JNE, SiCepat, J&amp;T, GoSend, Grab), cetak resi massal thermal A6, tracking otomatis, dan request pick up instan.</p>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 space-y-2 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span><span>Koneksi Multi-Kurir JNE/SiCepat/J&amp;T</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span><span>Pick Up Otomatis &amp; Resi Massal</span></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0057cd] text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[24px]">view_sidebar</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0057cd] text-[10px] font-extrabold uppercase">Pilar 05</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Manajemen Marketplace Terpusat</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Stok tersinkronisasi otomatis antar toko (anti-overselling), pembaruan harga massal, dan pemrosesan pesanan satu pintu.</p>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 space-y-2 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span><span>Stok Tersinkronisasi Otomatis Antar Toko</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span><span>Manajemen Pesanan Satu Pintu</span></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#7e37c7] text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[24px]">chat</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-50 text-[#7e37c7] text-[10px] font-extrabold uppercase">Pilar 06</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Chatbot CRM Cerdas AI</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Auto-reply WhatsApp bertenaga AI, rekomendasi produk personal, panduan pembayaran instan, dan closing penjualan otomatis 24/7.</p>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 space-y-2 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span><span>Auto-Reply WhatsApp AI 24/7</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span><span>Closing &amp; Rekomendasi Barang Otomatis</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: SHOWCASE KARYA DIGITAL */}
      <section className="w-full py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#7e37c7] text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[16px]">folder_special</span>
                <span>PORTOFOLIO &amp; STUDI KASUS UNGGULAN</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Karya Digital &amp; Solusi Teknologi Moobi Eco</h2>
              <p className="text-slate-600 text-sm mt-1">Produk website dan aplikasi terbukti yang telah membantu ratusan pelaku bisnis meningkatkan omset dan efisiensi operasional.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-slate-200 text-xs text-slate-700 font-semibold">Terkurasi Moobi QA</span>
              <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-xs text-[#0057cd] font-semibold">Ready for Quotation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img className="w-full h-full object-cover" alt="Agro Logistics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKFnDq8rPB1yGXQAifcw_IPArmtviqJ7sm1f8t-kJdVzTNGzNFweMzlY3N7sFszCUBotOaB_FRCxUDkwHLZpjQhrJbz14dBd2zUSeLLbjXq6e0kdqDx4HaMKxKGkY8OHx4dp1GKXnIzsLIYkpFUItFwMEqmOp3Qnvn2omK4umjV6tljNj6nrltV7U2_QD1r9hPCP007qxRllVcm3UAJ5xdqVp97gI8zt1Q_Mi_3vqAloshHXk98kPM" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white shadow-md text-[10px] text-primary font-bold">Agro Logistics</span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-[#0057cd] text-white text-[10px] font-bold shadow-sm">Web &amp; Mobile ERP</span>
                </div>
                <div className="p-4 space-y-1.5">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Case Study #01</span>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">AgroNusantara Supply Chain App</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Dashboard ERP logistik dan inventaris agrikultur multi-gudang dengan integrasi barcode.</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link to="/contact" className="w-full block text-center py-2.5 rounded-xl bg-[#0057cd] hover:bg-[#0d6efd] text-white text-xs font-bold transition shadow-sm">Lihat Studi Kasus</Link>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img className="w-full h-full object-cover" alt="FinPay Gateway" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR9pSwAWXFBXwQY62JzixeauIYLTVXdIN8eLTNBxbd70UnXpIJ8GuuEsRdur6S4JzazXCBQ4KPQh3vYT8xs-isd_i-e6B79jv1EIZ358FNcYGmQNHddr3wlvVn74_4P0cB6qAY6UlsPGoUKGxZQVTkTamq_c91sAQOvy-Zkl0keyjYb8v4V8vXzKDx0t0TGACyHl4nl2uRoKaYn4N1Tds8BQFkXjkGCLinycaPNUqbeQgcIcKxUZOT" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white shadow-md text-[10px] text-primary font-bold">Fintech &amp; Merchant</span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-[#0d6efd] text-white text-[10px] font-bold shadow-sm">Fintech &amp; Payment</span>
                </div>
                <div className="p-4 space-y-1.5">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Case Study #02</span>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">FinPay Gateway &amp; Merchant App</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Platform pembayaran multi-channel terintegrasi QRIS, Virtual Account, dan rekonsiliasi.</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link to="/contact" className="w-full block text-center py-2.5 rounded-xl bg-[#0057cd] hover:bg-[#0d6efd] text-white text-xs font-bold transition shadow-sm">Lihat Studi Kasus</Link>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img className="w-full h-full object-cover" alt="FurniCraft E-Commerce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNcPqtA9Ue80n_9DCGXo1zDgDy0rIuaXfWBxqHkEXX_SqrzlyzkuQh6dnNbUvzSZKpCA-nbWZbI1gK__g_5kK09Ua-03U-Sfbx-7dz5OdDadOBG8Uw-vuZrf1a6P1GnwC0DLfaxOUzxxRD0FrwGjEcIaPNGYFvKiFf2bKqEVG9nP0csPOTpf6Ex8luPoklKsWuEjXQxh6ey4Mk5H2vzwNMmQZ5_FTRF1c8BHb8XZfaynrUh04er3jP" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white shadow-md text-[10px] text-primary font-bold">Retail Commerce</span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-[#0057cd] text-white text-[10px] font-bold shadow-sm">E-Commerce Skala Besar</span>
                </div>
                <div className="p-4 space-y-1.5">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Case Study #03</span>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">FurniCraft E-Commerce Global</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Website e-commerce katalog furnitur interaktif 3D, multi-mata uang, dan checkout instan.</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link to="/contact" className="w-full block text-center py-2.5 rounded-xl bg-[#0057cd] hover:bg-[#0d6efd] text-white text-xs font-bold transition shadow-sm">Lihat Studi Kasus</Link>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img className="w-full h-full object-cover" alt="MedikaCare" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdqcZxU4KX25U1bf9mnJ-TJlj191sEHqSO9LYxxgTIYtEODYvjSJP6iZflTnHUMvWI1NrCGXGjlGz2SeMOXLyrEEE_HRAexwZEf4CUyxSgn7yUL9lnI3t3Mvm-_6_t3ONTEGQkrR-4heY4t4Uffht_q0586e7IQS8Ga1U302Xi-4x_2ARhiKsaDugQpcx-7KqxOwVcBvmXf1_fwWC97i3Gc3kzlE3FHXSzbd8KTLGN2k9_BLwK_4qz" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white shadow-md text-[10px] text-primary font-bold">Health Tech</span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-[#0d6efd] text-white text-[10px] font-bold shadow-sm">Mobile Health App</span>
                </div>
                <div className="p-4 space-y-1.5">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Case Study #04</span>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">MedikaCare Telemedicine System</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Aplikasi reservasi dokter klinik, rekam medis elektronik terenkripsi, dan telekonsultasi.</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link to="/contact" className="w-full block text-center py-2.5 rounded-xl bg-[#0057cd] hover:bg-[#0d6efd] text-white text-xs font-bold transition shadow-sm">Lihat Studi Kasus</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: CERITA SUKSES KLIENT */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          
          <div className="p-8 rounded-3xl bg-slate-50 shadow-lg relative overflow-hidden border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <img className="w-full h-72 object-cover" alt="Hendra Setiawan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADThZI_jOhyrgcxYhw1Le9x6DZlYdLq-9ufAtpK-ZOZrcd9nFqLvyCN3-v5gaUtVy494HUfQQu5kB5vYnjpKWSlgpYi77j79MGgQ1QPCkU2yr6LiUO3HAfswfooQYvFnCW3BA7NgMd43E6tcAu77YIGYBL6NsC89mVmLoh8mYkW7A7KhwaAvIsXKmnUbhVq-07Weyj1prF1JFHeJpPARPKfhwMUncPdk-BU5KNh62Yndb0QysIMkxV" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-900 font-bold">Hendra Setiawan</span>
                      <span className="text-[9px] text-primary bg-primary/10 px-2 py-0.5 rounded-full font-bold">Verified Client</span>
                    </div>
                    <span className="text-[11px] text-slate-500">CEO CV Karya Digital</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Kisah Sukses Klien 2024</span>
                </div>
                <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  “Sebelumnya kami kesulitan mengelola operasional secara manual. Setelah Moobi Eco membangun web platform dan sistem manajemen digital terintegrasi, efisiensi kerja tim kami melonjak 300% dan konversi penjualan naik signifikan.”
                </blockquote>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[11px] text-slate-500 block">Peningkatan Efisiensi</span>
                    <span className="text-lg text-[#0057cd] font-extrabold">+300%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[11px] text-slate-500 block">Uptime Sistem</span>
                    <span className="text-lg text-[#0057cd] font-extrabold">99.99%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[11px] text-slate-500 block">Waktu Delivery</span>
                    <span className="text-sm sm:text-base text-[#0057cd] font-extrabold">Tepat Waktu (4 Pekan)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0057cd] via-[#0d6efd] to-[#0057cd] flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden shadow-xl">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs text-white bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider font-bold w-fit">
                <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                <span>Mulai Proyek Digital Anda</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Siap Mengembangkan Solusi Teknologi Bersama Moobi?</h2>
              <p className="text-sm text-white/90 mt-1">Konsultasikan kebutuhan aplikasi, website e-commerce, atau sistem ERP bisnis Anda secara gratis bersama tim analis &amp; engineer kami.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a href="https://wa.me/6281299887720" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0057cd] font-bold text-sm hover:bg-slate-50 transition shadow-md">
                <span>Jadwalkan Konsultasi Gratis</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <Link to="/product" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 transition">
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
