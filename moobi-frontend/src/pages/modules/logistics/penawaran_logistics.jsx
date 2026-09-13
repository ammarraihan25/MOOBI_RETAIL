import React from 'react';
import { Link } from 'react-router-dom';

export default function PenawaranLogistics() {
  return (
    <div className="w-full bg-[#faf8ff] pb-24">
      {/* HERO SECTION PENAWARAN */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7ed] via-white to-[#faf8ff] pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
            <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/product" className="hover:text-orange-600 transition-colors">Produk &amp; Solusi</Link>
            <span>/</span>
            <span className="text-[#f97316]">Pilar 04 • Pengiriman &amp; Logistik Terpadu</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#ea580c] text-xs font-extrabold uppercase">
                <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"></span>
                <span>PENAWARAN SOLUSI PILAR 04</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Integrasi Ekspedisi Multi&#8209;Kurir, <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#0057cd]">
                  Cetak Resi Massal &amp; Auto Pick Up
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Kirim ratusan pesanan tanpa antre di gerai kurir. Hubungkan JNE, SiCepat, J&amp;T, Anteraja, GoSend, GrabExpress dalam satu dashboard dengan diskon ongkir hingga 35%.
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/workspace/logistics"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#c2410c] hover:to-[#ea580c] shadow-lg shadow-orange-500/25 transition-all text-sm sm:text-base active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-[22px]">local_shipping</span>
                  <span>Coba Live Demo Logistik</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined text-[20px] text-emerald-600">chat</span>
                  <span>Konsultasi Diskon Ongkir</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#f97316] text-white flex items-center justify-center font-bold shadow-md">
                      <span className="material-symbols-outlined text-[24px]">sync_alt</span>
                    </div>
                    <div>
                      <h2 className="font-bold text-slate-900 text-lg">Modul Logistik &amp; Resi</h2>
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                        10+ Partner Ekspedisi Aktif
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-orange-600 text-[20px] mt-0.5">print</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Cetak Resi Thermal A6 1-Klik</div>
                      <div className="text-[11px] text-slate-500">Cetak 500 label alamat sekaligus dengan barcode tracking resmi.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-blue-600 text-[20px] mt-0.5">near_me</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Request Pick-up Massal</div>
                      <div className="text-[11px] text-slate-500">Kurir datang langsung ke gudang/toko Anda tanpa biaya tambahan.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5">pin_drop</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Tracking Otomatis WhatsApp</div>
                      <div className="text-[11px] text-slate-500">Kirim notifikasi live status paket ke nomor pembeli secara otomatis.</div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/workspace/logistics"
                  className="w-full py-3.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#ea580c] font-bold text-sm text-center block transition-colors"
                >
                  Buka Simulator Ekspedisi →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEUNGGULAN LOGISTIK */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 mt-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Solusi Packing &amp; Fulfillment Tanpa Ribet</h2>
          <p className="text-slate-600 text-sm sm:text-base">Mempersingkat waktu operasional gudang dari 4 jam menjadi hanya 30 menit per hari.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">discount</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Cashback &amp; Diskon Ongkir</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dapatkan rate korporat dengan potongan ongkos kirim s.d 35% dan sistem COD terverifikasi cair tiap pekan.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057cd] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">fact_check</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Barcode Scanner Anti-Salah Kirim</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Validasi scan barang saat proses packing untuk memastikan isi paket 100% sesuai nomor order.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">share_location</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Live Dashboard Pengiriman</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Deteksi paket return / gagal antar lebih dini sehingga CS toko bisa langsung menghubungi pembeli.
            </p>
          </div>
        </div>

        {/* BOTTOM CTA BAR */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#0057cd] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">Coba Cek Tarif &amp; Generator Resi</h3>
            <p className="text-white/80 text-xs sm:text-sm">Simulasikan pengecekan tarif multi-kurir dan cetak resi thermal otomatis.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link to="/workspace/logistics" className="px-6 py-3.5 rounded-xl bg-white text-[#ea580c] font-bold text-sm hover:bg-slate-50 transition shadow-sm">
              Buka Live Demo →
            </Link>
            <Link to="/contact" className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition">
              Konsultasi Ongkir
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
