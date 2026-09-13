import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  // 14 Official Enterprise Client Logos from /assets/perusahaan/
  const clientLogos = [
    {
      name: 'Telkom Indonesia',
      src: '/assets/perusahaan/logo%20telkom.png',
      imgClass: 'h-8 sm:h-9 max-w-[125px]'
    },
    {
      name: 'Bank BRI',
      src: '/assets/perusahaan/Bank%20Rakyat%20Indonesia%20(BRI)%20Logo%20-%20Horizontal%20With%20Full%20Name%20Colored%20-%204041x2048%20-%20zonalogo.com.png',
      imgClass: 'h-7 sm:h-8 max-w-[125px]'
    },
    {
      name: 'Bank Mandiri',
      src: '/assets/perusahaan/Bank%20Mandiri%20Logo%20-%20Colored%20-%206982x2048%20-%20zonalogo.com.png',
      imgClass: 'h-7 sm:h-8 max-w-[125px]'
    },
    {
      name: 'Bank Central Asia (BCA)',
      src: '/assets/perusahaan/Bank%20Central%20Asia%20(BCA)%20Logo%20-%20Colored%20-%206543x2048%20-%20zonalogo.com.png',
      imgClass: 'h-7 sm:h-8 max-w-[125px]'
    },
    {
      name: 'Pertamina',
      src: '/assets/perusahaan/Pertamina%20Logo%20-%20Colored%20-%208810x2048%20-%20zonalogo.com.png',
      imgClass: 'h-7 sm:h-8 max-w-[125px]'
    },
    {
      name: 'PLN',
      src: '/assets/perusahaan/PLN%20Logo%20-%20Colored%20-%205716x2048%20-%20zonalogo.com.png',
      imgClass: 'h-8 sm:h-9 max-w-[125px]'
    },
    {
      name: 'Indosat Ooredoo Hutchison',
      src: '/assets/perusahaan/486ff33dd4752c4365d9099e5711b4b4.png',
      imgClass: 'h-8 sm:h-9 max-w-[125px]'
    },
    {
      name: 'Bank Syariah Indonesia (BSI)',
      src: '/assets/perusahaan/Bank%20BSI%20Logo%20-%20Colored%20-%207384x2048%20-%20zonalogo.com.png',
      imgClass: 'h-7 sm:h-8 max-w-[125px]'
    },
    {
      name: 'Antam',
      src: '/assets/perusahaan/Antam%20Logo%20-%20Colored%20-%207080x2048%20-%20zonalogo.com.png',
      imgClass: 'h-7 sm:h-8 max-w-[125px]'
    },
    {
      name: 'Jasa Raharja',
      src: '/assets/perusahaan/Jasa%20Raharja%20Logo%20-%20Colored%20-%20560x512%20-%20zonalogo.com.png',
      isCustomLayout: true,
      render: () => (
        <div className="flex items-center justify-center gap-2">
          <img 
            src="/assets/perusahaan/Jasa%20Raharja%20Logo%20-%20Colored%20-%20560x512%20-%20zonalogo.com.png" 
            alt="Jasa Raharja" 
            className="h-7 sm:h-8 w-auto object-contain" 
          />
          <span className="text-[10px] font-black text-slate-800 uppercase tracking-tight">JASA RAHARJA</span>
        </div>
      )
    },
    {
      name: 'Kimia Farma',
      src: '/assets/perusahaan/Logo%20Kimia%20Farma%20[RiderGalau].png',
      imgClass: 'h-8 sm:h-9 max-w-[125px]'
    },
    {
      name: 'Bukit Asam',
      src: '/assets/perusahaan/Bukit%20Asam%20Logo%20-%20Colored%20-%2011565x2048%20-%20zonalogo.com.png',
      imgClass: 'h-7 sm:h-8 max-w-[125px]'
    },
    {
      name: 'PT Wijaya Karya (WIKA)',
      src: '/assets/perusahaan/WIKA%20Logo%20-%20Colored%20-%203031x2048%20-%20zonalogo.com.png',
      imgClass: 'h-7 sm:h-8 max-w-[125px]'
    },
    {
      name: 'Gojek',
      src: '/assets/perusahaan/Gojek%20Logo%20-%20Colored%20-%208533x2048%20-%20zonalogo.com.png',
      imgClass: 'h-7 sm:h-8 max-w-[125px]'
    }
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0942a6] via-[#004bb8] to-[#022e7d] text-white text-xs mt-auto overflow-hidden">
      {/* Ambient Lighting / Glow Effects - No Top Border Line */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-cyan-400/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-blue-300/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 pt-16 pb-12">
        
        {/* Client & Partner Showcase Banner */}
        <div className="relative mb-16 space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight">
              <span className="text-[#fb923c]">Telah Dipercaya</span> oleh Ratusan Klien &amp; Mitra
            </h3>
            <p className="text-sm sm:text-[15px] text-blue-100/90 font-normal leading-relaxed">
              Moobi telah dipercaya dan bermitra dengan berbagai brand, enterprise, dan institusi terkemuka dari dalam dan luar negeri.
            </p>
          </div>

          {/* Logo Cards Grid - 14 Official Company Assets (7 columns x 2 rows on desktop) */}
          <div className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
              {clientLogos.map((client, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-3 sm:p-4 flex items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[78px]"
                >
                  {client.isCustomLayout ? (
                    client.render()
                  ) : (
                    <img 
                      src={client.src} 
                      alt={client.name} 
                      className={`${client.imgClass} w-auto object-contain`} 
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Row: Wide Feature Card with Indonesian Flag */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 min-h-[64px]">
              <div className="flex items-center gap-3 text-center sm:text-left">
                {/* Wavy Indonesian Flag */}
                <div className="w-7 h-5 rounded overflow-hidden shadow-xs border border-slate-200 flex flex-col shrink-0">
                  <div className="w-full h-2.5 bg-[#ED1C24]"></div>
                  <div className="w-full h-2.5 bg-white"></div>
                </div>
                <div className="h-4 w-[1px] bg-slate-200 hidden sm:block"></div>
                <span className="text-xs sm:text-[13px] font-bold text-slate-800 tracking-tight">
                  Dipercaya oleh berbagai Badan Usaha Milik Negara &amp; Enterprise terkemuka di Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Grid Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-4 space-y-5">
            {/* Moobi Eco Logo with clean white backing */}
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="p-2.5 rounded-2xl bg-white border border-white/80 shadow-lg shadow-blue-950/30 group-hover:scale-105 transition-all duration-300">
                <img 
                  alt="Moobi Logo" 
                  className="h-9 w-auto object-contain" 
                  src="/assets/moobi.png" 
                  onError={(e) => { 
                    e.target.src='https://lh3.googleusercontent.com/aida-public/AB6AXuAkNBAEahhJWRB9osfjGSndVX-G01pudMoy2OJ-PTpBJNt9paiW65pRa1bpffQ1O8AeCiZGKj3FjP7SLM02GikiiZcAuJm3xvMk0_4kcfIY81p5AiEnLMxblzlH48iSaYCmbDSov-Kq83DLNutRlmS6hO_bZ-wspzpvWS7yLJP_rV60R3xigJI6IwnGMY296RPn_pW_wiqK_nS9tHFnhLMf_T_7Fw-Tej4KFOyOce8mXLcF7W200iiznJFHS2YlBOMHFw'; 
                  }} 
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[23px] font-black tracking-tight leading-none text-white drop-shadow-sm">
                  <span>Moobi</span>
                  <span className="text-[#38bdf8] font-extrabold drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]">Eco</span>
                </div>
                <span className="text-[10px] uppercase font-black tracking-wider text-blue-200/90 mt-1">
                  SOFTWARE &amp; DIGITAL SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="text-[13px] text-blue-100/90 leading-relaxed max-w-sm font-normal">
              Moobi - Software House &amp; Digital Product Agency. Menghadirkan solusi ekosistem e-commerce terintegrasi, automasi invoice, WhatsApp CRM AI, serta sistem enterprise scale-up.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white shadow-xs">
                <span className="material-symbols-outlined text-[15px] text-cyan-300">verified_user</span>
                <span>ISO 27001 Security Certified</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white shadow-xs">
                <span className="material-symbols-outlined text-[15px] text-emerald-300">shield</span>
                <span>SLA 99.9% &amp; Bug-Free Guarantee</span>
              </div>
            </div>
          </div>

          {/* Modul & Solusi Column */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-[13px] font-black uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
              Modul &amp; Solusi
            </h5>
            <ul className="space-y-2.5 text-[13px] text-blue-100 font-medium">
              <li>
                <Link to="/penawaran/marketplace" className="hover:text-white hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-cyan-300 font-bold">›</span> Marketplace &amp; Toko Online
                </Link>
              </li>
              <li>
                <Link to="/penawaran/invoice" className="hover:text-white hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-cyan-300 font-bold">›</span> Invoice &amp; Penagihan Otomatis
                </Link>
              </li>
              <li>
                <Link to="/penawaran/marketing" className="hover:text-white hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-cyan-300 font-bold">›</span> CRM &amp; WhatsApp Broadcast
                </Link>
              </li>
              <li>
                <Link to="/penawaran/logistics" className="hover:text-white hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-cyan-300 font-bold">›</span> Pengiriman &amp; Logistik Terpadu
                </Link>
              </li>
              <li>
                <Link to="/penawaran/monitoring" className="hover:text-white hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-cyan-300 font-bold">›</span> Monitoring Marketplace &amp; Bisnis
                </Link>
              </li>
              <li>
                <Link to="/penawaran/chatbot" className="hover:text-white hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-cyan-300 font-bold">›</span> Chatbot CRM Cerdas AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Perusahaan Column */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-[13px] font-black uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
              Perusahaan
            </h5>
            <ul className="space-y-2.5 text-[13px] text-blue-100 font-medium">
              <li>
                <Link to="/profile" className="hover:text-white hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-cyan-300 font-bold">›</span> Tentang Moobi
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-white hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-cyan-300 font-bold">›</span> Produk &amp; Layanan
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-cyan-300 font-bold">›</span> Blog &amp; Wawasan Bisnis
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-white hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-cyan-300 font-bold">›</span> Karir &amp; Talenta
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-cyan-300 font-bold">›</span> Syarat &amp; Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak & Tech Hub Column */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-[13px] font-black uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
              Kontak &amp; Tech Hub
            </h5>
            <div className="space-y-3 text-[13px] text-blue-100">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-cyan-300 text-[18px] shrink-0 mt-0.5">domain</span>
                <span className="leading-snug">Tower Cyber 2 Lt. 18, Jl. HR Rasuna Said, Kuningan, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-cyan-300 text-[18px] shrink-0">mail</span>
                <a href="mailto:hello@moobi.id" className="hover:text-white transition-colors">hello@moobi.id</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-300 text-[18px] shrink-0">chat</span>
                <a href="https://wa.me/6281299887720" target="_blank" rel="noreferrer" className="hover:text-white font-bold transition-colors">
                  +62 812-9988-7720
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-cyan-300 text-[18px] shrink-0">schedule</span>
                <span>Senin - Sabtu 08.30 - 19.00 WIB</span>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white hover:bg-blue-50 text-[#004bb8] font-black text-xs shadow-xl shadow-blue-950/30 hover:scale-[1.02] transition-all duration-200"
              >
                <span>Hubungi Tim Sales</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-blue-200 text-[12px] gap-4">
          <div>© 2025 Moobi (PT Ekosistem Digital Kreasi). Hak Cipta Dilindungi Undang-Undang.</div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <span className="text-blue-400/60">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Ketentuan Layanan</Link>
            <span className="text-blue-400/60">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Keamanan Sistem</Link>
            <span className="text-blue-400/60">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 font-bold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Status Server (99.9% Uptime)</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


