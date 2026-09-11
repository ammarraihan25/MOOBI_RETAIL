import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* HERO CONTACT */}
      <section className="relative w-full py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm text-[#0d6efd] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0d6efd] animate-pulse"></span>KONSULTASI ARSITEKTUR SISTEM &amp; DIGITAL SCALE-UP
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Konsultasikan Kebutuhan Integrasi &amp; <span className="text-[#0d6efd]">Otomasi E-Commerce Bisnis Anda</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Diskusikan modul arsitektur marketplace, sistem multi-kurir logistik, penagihan, CRM, dan chatbot WhatsApp bersama tim principal Moobi Eco.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#0057cd] text-[18px]">verified</span><span>Respons Cepat &lt; 30 Menit</span></div>
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#0057cd] text-[18px]">security</span><span>Free NDA &amp; Technical Consultation</span></div>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <img src="moobi ecosystem/assets/assets pose4.png" alt="Contact Specialist" className="w-auto max-h-[380px] object-contain drop-shadow-2xl" onError={(e) => { e.target.src='https://lh3.googleusercontent.com/aida-public/AB6AXuB15O_GJ-EGUzk8ZSPaU7-MG9eW--G-LQCZF7KDXPZmc9y8OSRAtdgnrucFVAPBozufDUFS1yXt46iISuKzXZ9MfUMh1K-HeGbBoiskN5CnfBjH28tStrdSvoLTJxmILmYD36rjdtwr6adFvQXh55cOs9otArqzdAXx0_RwF3uDKrS8V1EPVh6A02BKYoDr410BcNuchniaVBqwO65FftIo-9ZcFgVUKHjVny2vhUP_HfyEAC3WaBilFRLgP9tKI441Og'; }} />
            </div>

          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-extrabold text-slate-900">Formulir Kebutuhan Solusi E-Commerce</h3>
                <span className="text-xs text-[#0057cd] font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-200">Free Assessment</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Lengkapi formulir di bawah ini untuk mendapatkan estimasi skema arsitektur dan timeline implementasi.</p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow">
                  <span className="material-symbols-outlined text-[24px]">check</span>
                </div>
                <h4 className="font-bold text-slate-900 text-base">Permintaan Terkirim!</h4>
                <p className="text-xs text-slate-600">Terima kasih! Konsultan e-commerce Moobi akan segera menghubungi nomor WhatsApp Anda.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium text-slate-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1">Nama Lengkap *</label>
                    <input type="text" required placeholder="Contoh: Hendra Setiawan" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Email Bisnis *</label>
                    <input type="email" required placeholder="hendra@perusahaan.co.id" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1">Nomor WhatsApp Aktif *</label>
                    <input type="tel" required placeholder="+62 812-xxxx-xxxx" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Nama Brand / Toko Online</label>
                    <input type="text" placeholder="PT Digital Niaga Mandiri" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500" />
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-1">Skala Operasional Saat Ini</label>
                  <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <option>100 - 500 Order / Bulan (Growing Merchant)</option>
                    <option>500 - 2.500 Order / Bulan (Scale Up Brand)</option>
                    <option>&gt; 2.500 Order / Bulan (Enterprise Omnichannel)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1">Layanan Utama yang Dibutuhkan</label>
                    <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <option>Suite Lengkap E-Commerce 6 Pilar</option>
                      <option>Integrasi Multi-Channel &amp; Sync Stok</option>
                      <option>Logistik Multi-Kurir &amp; Thermal Resi A6</option>
                      <option>AI WhatsApp CS Chatbot 24/7</option>
                      <option>Agentic Invoicing &amp; QRIS Otomatis</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Estimasi Anggaran</label>
                    <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <option>Rp 5 Juta - Rp 15 Juta</option>
                      <option>Rp 15 Juta - Rp 30 Juta (Recommended Pro)</option>
                      <option>&gt; Rp 30 Juta (Custom ERP)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-1">Ceritakan Kebutuhan Proyek Anda</label>
                  <textarea rows="4" placeholder="Jelaskan kendala operasional toko saat ini, integrasi marketplace yang diinginkan..." className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500"></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-[#0d6efd] hover:bg-[#0057cd] text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition">
                  Kirim Permintaan Konsultasi Gratis
                </button>
              </form>
            )}
          </div>

          {/* 3 Tech Hubs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <span className="text-[10px] font-bold text-[#0057cd] uppercase bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">JAKARTA TECH HUB</span>
              <h4 className="font-bold text-slate-900 text-base">Tower Cyber 2</h4>
              <p className="text-xs text-slate-500">Lt. 18, Jl. HR Rasuna Said, Kuningan, Jakarta Selatan</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <span className="text-[10px] font-bold text-[#7e37c7] uppercase bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">SURABAYA OFFICE</span>
              <h4 className="font-bold text-slate-900 text-base">Spazio Tower</h4>
              <p className="text-xs text-slate-500">Lt. 8, Jl. Mayjen Yono Suwoyo, Surabaya Barat</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <span className="text-[10px] font-bold text-green-700 uppercase bg-green-50 px-2.5 py-0.5 rounded border border-green-200">DIRECT KANAL WA</span>
              <h4 className="font-bold text-slate-900 text-base">+62 812-9988-7720</h4>
              <p className="text-xs text-slate-500">hello@moobi.id • Senin - Sabtu 08.30 - 19.00 WIB</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
