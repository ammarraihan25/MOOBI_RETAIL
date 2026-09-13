import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when location changes or clicking outside
  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const modules = [
    {
      to: '/penawaran/marketplace',
      title: 'Marketplace & Toko Online',
      pilar: 'Pilar 01',
      desc: 'Integrasi Shopee, Tokopedia, TikTok & Web Mandiri',
      icon: 'shopping_cart',
      color: 'bg-blue-50 text-[#0057cd]'
    },
    {
      to: '/penawaran/invoice',
      title: 'Invoice & Penagihan Otomatis',
      pilar: 'Pilar 02',
      desc: 'Auto invoice WhatsApp, QRIS & rekonsiliasi kas',
      icon: 'description',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      to: '/penawaran/marketing',
      title: 'CRM & Manajemen Pelanggan',
      pilar: 'Pilar 03',
      desc: 'Segmentasi loyalitas & WhatsApp broadcast cerdas',
      icon: 'groups',
      color: 'bg-blue-50 text-[#0057cd]'
    },
    {
      to: '/penawaran/logistics',
      title: 'Pengiriman & Logistik Terpadu',
      pilar: 'Pilar 04',
      desc: 'Multi-kurir JNE/SiCepat/J&T & cetak resi massal',
      icon: 'sync_alt',
      color: 'bg-orange-50 text-[#f97316]'
    },
    {
      to: '/penawaran/monitoring',
      title: 'Monitoring Marketplace & Bisnis',
      pilar: 'Pilar 05',
      desc: 'Analisis laba bersih, omzet & kontrol operasional',
      icon: 'view_sidebar',
      color: 'bg-cyan-50 text-[#0891b2]'
    },
    {
      to: '/penawaran/chatbot',
      title: 'Chatbot CRM Cerdas AI',
      pilar: 'Pilar 06',
      desc: 'Auto-reply WhatsApp 24/7 & closing order mandiri',
      icon: 'chat',
      color: 'bg-purple-50 text-[#7e37c7]'
    }
  ];

  const isPenawaranActive = path.startsWith('/penawaran') || path.startsWith('/workspace');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 h-16 sm:h-[72px] flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img alt="Moobi Logo" className="h-8 w-auto object-contain transition-transform group-hover:scale-105" src="/assets/moobi.png" onError={(e) => { e.target.src='https://lh3.googleusercontent.com/aida-public/AB6AXuAkNBAEahhJWRB9osfjGSndVX-G01pudMoy2OJ-PTpBJNt9paiW65pRa1bpffQ1O8AeCiZGKj3FjP7SLM02GikiiZcAuJm3xvMk0_4kcfIY81p5AiEnLMxblzlH48iSaYCmbDSov-Kq83DLNutRlmS6hO_bZ-wspzpvWS7yLJP_rV60R3xigJI6IwnGMY296RPn_pW_wiqK_nS9tHFnhLMf_T_7Fw-Tej4KFOyOce8mXLcF7W200iiznJFHS2YlBOMHFw'; }} />
          <div className="flex flex-col">
            <div className="flex items-center gap-1 font-bold text-[18px] leading-tight">
              <span className="text-[#1e293b]">Moobi</span>
              <span className="text-[#0d6efd] font-extrabold">Eco</span>
            </div>
            <span className="text-[9px] uppercase font-bold tracking-wider text-slate-500">SOFTWARE &amp; DIGITAL SOLUTIONS</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
          <Link to="/" className={`px-3.5 py-1.5 rounded-xl font-semibold transition-colors ${path === '/' ? 'bg-blue-50 text-[#0057cd]' : 'text-slate-600 hover:text-[#0057cd]'}`}>Home</Link>
          <Link to="/profile" className={`px-3.5 py-1.5 rounded-xl font-medium transition-colors ${path === '/profile' ? 'bg-blue-50 text-[#0057cd] font-semibold' : 'text-slate-600 hover:text-[#0057cd]'}`}>Profile</Link>
          <Link to="/product" className={`px-3.5 py-1.5 rounded-xl font-medium transition-colors ${path === '/product' ? 'bg-blue-50 text-[#0057cd] font-semibold' : 'text-slate-600 hover:text-[#0057cd]'}`}>Product</Link>
          
          {/* MODUL PENAWARAN DROPDOWN */}
          <div 
            ref={dropdownRef} 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-semibold transition-all duration-200 ${
                isPenawaranActive 
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30' 
                  : dropdownOpen
                  ? 'bg-blue-50 text-[#0057cd]'
                  : 'text-slate-700 hover:text-[#0057cd] hover:bg-slate-100/70'
              }`}
            >
              <span>Modul Penawaran</span>
              <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ease-out ${dropdownOpen ? 'rotate-180 text-inherit' : ''}`}>
                keyboard_arrow_down
              </span>
            </button>

            {/* DROPDOWN MENU CONTAINER */}
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="w-[660px] bg-white rounded-3xl border border-slate-200/90 shadow-[0_25px_70px_-15px_rgba(15,23,42,0.28),0_0_0_1px_rgba(15,23,42,0.06)] overflow-hidden">
                  
                  {/* Gradient Top Accent */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#0d6efd] via-indigo-500 to-purple-600"></div>

                  <div className="p-4 sm:p-5 space-y-3">
                    {/* Dropdown Header */}
                    <div className="px-2 py-1 flex items-center justify-between border-b border-slate-100 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        <span className="text-[12px] font-black uppercase tracking-wider text-slate-800">6 Solusi Modul Penawaran</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-[11px] font-bold shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Live Demo Ready</span>
                      </span>
                    </div>

                    {/* 6 Module Offer Items Grid */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {modules.map((m, idx) => {
                        const iconGradients = [
                          'from-blue-600 to-indigo-600 shadow-blue-500/25',
                          'from-emerald-500 to-teal-600 shadow-emerald-500/25',
                          'from-indigo-600 to-purple-600 shadow-indigo-500/25',
                          'from-amber-500 to-orange-600 shadow-orange-500/25',
                          'from-cyan-500 to-blue-600 shadow-cyan-500/25',
                          'from-purple-600 to-pink-600 shadow-purple-500/25'
                        ];

                        return (
                          <Link
                            key={idx}
                            to={m.to}
                            className="group/item relative p-3 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3.5"
                          >
                            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${iconGradients[idx % iconGradients.length]} text-white flex items-center justify-center shrink-0 shadow-md group-hover/item:scale-105 transition-transform duration-200`}>
                              <span className="material-symbols-outlined text-[22px]">{m.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-[13px] font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors truncate">
                                {m.title}
                              </h4>
                              <p className="text-[11px] font-medium text-slate-500 leading-snug line-clamp-1 mt-0.5 group-hover/item:text-slate-600">
                                {m.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* High Contrast Dropdown Footer */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-end px-2">
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-[12px] font-bold text-white bg-slate-900 hover:bg-blue-600 shadow-xs transition-all duration-200"
                      >
                        <span>Hubungi Sales</span>
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/blog" className={`px-3.5 py-1.5 rounded-xl font-medium transition-colors ${path === '/blog' ? 'bg-blue-50 text-[#0057cd] font-semibold' : 'text-slate-600 hover:text-[#0057cd]'}`}>Blog</Link>
          <Link to="/contact" className={`px-3.5 py-1.5 rounded-xl font-medium transition-colors ${path === '/contact' ? 'bg-blue-50 text-[#0057cd] font-semibold' : 'text-slate-600 hover:text-[#0057cd]'}`}>Contact</Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2.5">
          <Link to="/contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#0d6efd] hover:bg-[#0057cd] shadow-md shadow-blue-500/20 transition-all whitespace-nowrap">
            Free Consultations
          </Link>
        </div>
      </div>
    </header>
  );
}

