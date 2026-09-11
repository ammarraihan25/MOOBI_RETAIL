import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[70px] flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img alt="Moobi Logo" className="h-8 w-auto object-contain transition-transform group-hover:scale-105" src="/moobi ecosystem/assets/moobi.png" onError={(e) => { e.target.src='https://lh3.googleusercontent.com/aida-public/AB6AXuAkNBAEahhJWRB9osfjGSndVX-G01pudMoy2OJ-PTpBJNt9paiW65pRa1bpffQ1O8AeCiZGKj3FjP7SLM02GikiiZcAuJm3xvMk0_4kcfIY81p5AiEnLMxblzlH48iSaYCmbDSov-Kq83DLNutRlmS6hO_bZ-wspzpvWS7yLJP_rV60R3xigJI6IwnGMY296RPn_pW_wiqK_nS9tHFnhLMf_T_7Fw-Tej4KFOyOce8mXLcF7W200iiznJFHS2YlBOMHFw'; }} />
          <div className="flex flex-col">
            <div className="flex items-center gap-1 font-bold text-[18px] leading-tight">
              <span className="text-[#1e293b]">Moobi</span>
              <span className="text-[#0d6efd] font-extrabold">Eco</span>
            </div>
            <span className="text-[9px] uppercase font-bold tracking-wider text-slate-500">SOFTWARE &amp; DIGITAL SOLUTIONS</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
          <Link to="/" className={`px-4 py-1.5 rounded-xl font-semibold transition-colors ${path === '/' ? 'bg-blue-50 text-[#0057cd]' : 'text-slate-600 hover:text-[#0057cd]'}`}>Home</Link>
          <Link to="/profile" className={`px-3.5 py-1.5 rounded-xl font-medium transition-colors ${path === '/profile' ? 'bg-blue-50 text-[#0057cd] font-semibold' : 'text-slate-600 hover:text-[#0057cd]'}`}>Profile</Link>
          <Link to="/product" className={`px-3.5 py-1.5 rounded-xl font-medium transition-colors ${path === '/product' ? 'bg-blue-50 text-[#0057cd] font-semibold' : 'text-slate-600 hover:text-[#0057cd]'}`}>Product</Link>
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
