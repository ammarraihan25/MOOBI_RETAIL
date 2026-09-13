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
      <section className="relative w-full py-12 lg:py-16 bg-gradient-to-b from-[#f8faff] via-white to-[#faf8ff] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[560px] lg:min-h-[620px]">

            <div className="lg:col-span-7 xl:col-span-6 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#0057cd] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0d6efd] animate-pulse"></span>
                <span>KONSULTASI ARSITEKTUR SISTEM &amp; DIGITAL SCALE-UP</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[58px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Konsultasikan Kebutuhan Integrasi &amp; <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057cd] via-[#0d6efd] to-[#7e37c7] inline-block">
                  Otomasi E&#8209;Commerce Bisnis Anda
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                Diskusikan modul arsitektur marketplace, sistem multi-kurir logistik, penagihan, CRM, dan chatbot WhatsApp bersama tim principal Moobi Eco.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-slate-700 border-t border-slate-200/70">
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#0057cd] text-[20px]">verified</span><span>Respons Cepat &lt; 30 Menit</span></div>
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#0057cd] text-[20px]">security</span><span>Free NDA &amp; Technical Consultation</span></div>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-6 relative w-full min-h-[540px] lg:min-h-[620px] flex items-center justify-center">

              {/* Subtle Tech Dot-Matrix Mesh in Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#34d399_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-35 pointer-events-none -z-20"></div>

              {/* 1. Large Expansive Background Glow Mesh */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[580px] lg:w-[640px] xl:w-[700px] h-[480px] sm:h-[580px] lg:h-[640px] xl:h-[700px] bg-gradient-to-tr from-[#059669]/20 via-[#0284c7]/20 to-[#0d6efd]/25 rounded-full blur-3xl pointer-events-none -z-10"></div>

              {/* 2. Primary Large Organic Botanical/Teal Morphing Blob - Pure & Borderless */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] xl:w-[560px] xl:h-[560px] rounded-[52%_48%_42%_58%/62%_38%_62%_38%] bg-gradient-to-tr from-[#065f46] via-[#059669] via-[#0284c7] to-[#0d6efd] animate-morph-organic pointer-events-none z-0"></div>

              {/* 3. Model Image with Soft Natural Bottom Gradient Mask */}
              <div className="relative z-10 w-full flex items-end justify-center pt-4">
                <img
                  alt="Contact Specialist Moobi"
                  className="w-auto h-[460px] sm:h-[510px] lg:h-[550px] xl:h-[580px] object-contain z-10 relative pointer-events-none transition-transform duration-700 ease-out hover:scale-[1.02] [mask-image:linear-gradient(to_bottom,black_68%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,black_68%,transparent_96%)]"
                  src="/assets/assets%20pose4.png"
                  onError={(e) => { e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB15O_GJ-EGUzk8ZSPaU7-MG9eW--G-LQCZF7KDXPZmc9y8OSRAtdgnrucFVAPBozufDUFS1yXt46iISuKzXZ9MfUMh1K-HeGbBoiskN5CnfBjH28tStrdSvoLTJxmILmYD36rjdtwr6adFvQXh55cOs9otArqzdAXx0_RwF3uDKrS8V1EPVh6A02BKYoDr410BcNuchniaVBqwO65FftIo-9ZcFgVUKHjVny2vhUP_HfyEAC3WaBilFRLgP9tKI441Og'; }}
                />
              </div>

              {/* --- FLOATING HUD BADGES (Tightly Integrated with Character & Background Blob) --- */}

              {/* 1. TOP-LEFT: Mini KPI Respon Sparkline */}
              <div className="absolute top-6 left-2 sm:left-4 lg:left-6 z-30 p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100/90 flex items-center gap-3 animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Waktu Respon</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] sm:text-[15px] font-black text-slate-900 tracking-tight">&lt; 15 Mnt Cepat</span>
                    {/* Emerald SVG Sparkline */}
                    <svg className="w-8 h-3.5 sm:w-9 sm:h-4 text-emerald-500" fill="none" viewBox="0 0 40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12 Q 10 2, 20 8 T 38 4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 2. TOP-RIGHT: Social Proof Card with Avatar Stack & Floating Emerald Pill */}
              <div className="absolute top-4 right-2 sm:right-4 lg:right-6 z-30 p-3 sm:p-4 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-100/90 flex flex-col gap-1.5 sm:gap-2 min-w-[155px] sm:min-w-[165px] animate-float-delayed hover:-translate-y-1 transition-transform duration-300">
                {/* Floating Emerald Icon Pill */}
                <div className="absolute -top-2.5 -right-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-md shadow-emerald-500/30">
                  <span className="material-symbols-outlined text-[15px] sm:text-[16px]">support_agent</span>
                </div>
                <div>
                  <div className="text-[16px] sm:text-[18px] font-black text-slate-900 leading-none">Tim Ahli</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-1">1-on-1 Consultation</div>
                </div>
                {/* Overlapping Avatar Stack */}
                <div className="flex items-center -space-x-2 pt-0.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">CS</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">TA</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">SA</div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900 text-emerald-300 font-extrabold text-[8px] sm:text-[9px] flex items-center justify-center ring-2 ring-white shadow-xs">+15</div>
                </div>
              </div>

              {/* 3. MID-LEFT: Konsultasi Request Bubble (Clear of Face, Hugging Blob) */}
              <div className="absolute top-[48%] -translate-y-1/2 left-0 sm:left-2 lg:left-3 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex flex-col gap-1 max-w-[175px] sm:max-w-[190px] animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">- Jadwal Konsultasi -</span>
                <div className="p-2 px-2.5 rounded-2xl rounded-tl-xs bg-emerald-50/90 border border-emerald-100/80 text-emerald-950 font-bold text-[10.5px] sm:text-[11px] leading-snug">
                  "Demo arsitektur sistem omnichannel ready"
                </div>
                <div className="flex items-center justify-end gap-1 text-[8.5px] sm:text-[9px] text-slate-400 font-medium">
                  <span>Online Standby</span>
                  <span className="material-symbols-outlined text-[11px] sm:text-[12px] text-emerald-500">done_all</span>
                </div>
              </div>

              {/* 4. MID-RIGHT: Free Assessment Card */}
              <div className="absolute top-[54%] right-0 sm:right-2 lg:right-4 z-30 p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex items-center justify-between gap-3 sm:gap-4 animate-float-reverse hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Assessment Toko</span>
                  <span className="text-[14px] sm:text-[15px] font-black text-slate-900 tracking-tight">100% Free</span>
                </div>
                <svg className="w-8 h-3.5 sm:w-9 sm:h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 14 Q 12 2, 22 8 T 38 3" />
                </svg>
              </div>

              {/* 5. BOTTOM-CENTER: NDA Terlindungi Pill */}
              <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 lg:left-12 z-30 p-2 sm:p-2.5 px-3.5 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-emerald-100 flex items-center gap-2.5 sm:gap-3 animate-float-slow hover:-translate-y-1 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">lock</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">Kerahasiaan Data</span>
                  <span className="text-[13px] sm:text-[14px] font-black text-slate-900 leading-tight">NDA Resmi &amp; Aman</span>
                </div>
              </div>
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
