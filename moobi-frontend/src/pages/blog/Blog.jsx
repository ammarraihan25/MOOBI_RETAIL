import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="w-full">
      {/* HERO BLOG */}
      <section className="relative w-full py-12 bg-slate-50 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm text-[#0d6efd] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0d6efd] animate-pulse"></span>PUSAT EDUKASI &amp; STRATEGI E-COMMERCE
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Wawasan, Strategi &amp; Panduan Pertumbuhan <span className="text-[#0d6efd]">Bisnis E-Commerce</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Kumpulan panduan taktis, otomasi operasional marketplace, manajemen inventori multikanal, dan optimasi konversi penjualan digital terintegrasi.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#0057cd] text-[18px]">verified</span><span>120+ Panduan Praktis</span></div>
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#0057cd] text-[18px]">update</span><span>Update Mingguan</span></div>
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#0057cd] text-[18px]">groups</span><span>8.500+ Pembaca Aktif</span></div>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <img src="moobi ecosystem/assets/assets ilustrasi1.png" alt="Multi-Device Illustration" className="w-full max-h-[380px] object-contain drop-shadow-2xl" onError={(e) => { e.target.src='https://lh3.googleusercontent.com/aida-public/AB6AXuDaWP60M7WXF6dkGueDeAdcMrWgbHn59YBVJ_l7QZ3L92T9EgbVkZM1kbv6YTLVUXG7vSJHKHq-12Ku4Z0uhcMTLnyOsdv8jcWBXyjPkjfbCcxOv_Vtg8FVHJofm9acRe9ZrYEX9LY1Z8XpuS-DZ5MAuwNkHc0CiXNBM4w4cJXprlsthIQi7ynfIhECkJLjffwoFpWcWebsFEc_sYJ5axZmt8bhOzjJdh5DtsFwlkqqw5OL3RG1Qahs3VEKnCLuDfVnpA'; }} />
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE & GRID */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
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
