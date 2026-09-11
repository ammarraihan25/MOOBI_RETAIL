import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#071330] text-slate-300 text-xs border-t border-slate-800 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-lg tracking-tight">Moobi <span className="text-[#0d6efd]">Eco</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Moobi - Software House &amp; Digital Product Agency. Menghadirkan solusi pembuatan website modern, aplikasi mobile iOS &amp; Android, sistem ERP/CRM, serta integrasi digital berstandar enterprise.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-[11px] text-blue-300 w-fit">
                <span className="material-symbols-outlined text-[14px] text-blue-400">verified_user</span> ISO 27001 Security
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-[11px] text-cyan-300 w-fit">
                <span className="material-symbols-outlined text-[14px] text-cyan-400">shield</span> SLA &amp; Bug-Free Guarantee
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3.5">
            <h5 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Layanan &amp; Solusi
            </h5>
            <ul className="space-y-2.5 text-slate-400">
              <li><Link to="/product" className="hover:text-white transition">Web Bisnis &amp; Company Profile</Link></li>
              <li><Link to="/product" className="hover:text-white transition">Aplikasi iOS &amp; Android</Link></li>
              <li><Link to="/product" className="hover:text-white transition">Web Apps &amp; Custom ERP/CRM</Link></li>
              <li><Link to="/product" className="hover:text-white transition">E-Commerce &amp; Payment Gateway</Link></li>
              <li><Link to="/product" className="hover:text-white transition">UI/UX Design &amp; Prototyping</Link></li>
              <li><Link to="/product" className="hover:text-white transition">Cloud DevOps &amp; API</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3.5">
            <h5 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Perusahaan
            </h5>
            <ul className="space-y-2.5 text-slate-400">
              <li><Link to="/profile" className="hover:text-white transition">Tentang Moobi</Link></li>
              <li><Link to="/" className="hover:text-white transition">Studi Kasus &amp; Portofolio</Link></li>
              <li><Link to="/profile" className="hover:text-white transition">Rekayasa Teknologi &amp; Stack</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog &amp; Berita Software</Link></li>
              <li><Link to="/profile" className="hover:text-white transition">Karir &amp; Lab Riset</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Syarat &amp; Ketentuan</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3.5">
            <h5 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Kontak &amp; Tech Hub
            </h5>
            <div className="space-y-3 text-slate-400">
              <p className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-blue-400 text-[18px] shrink-0 mt-0.5">domain</span>
                <span>Tower Cyber 2 Lt. 18, Jl. HR Rasuna Said, Kuningan, Jakarta Selatan</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-blue-400 text-[18px] shrink-0">mail</span>
                <a href="mailto:hello@moobi.id" className="hover:text-white">hello@moobi.id</a>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-blue-400 text-[18px] shrink-0">chat</span>
                <a href="https://wa.me/6281299887720" target="_blank" rel="noreferrer" className="hover:text-white">+62 812-9988-7720</a>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-cyan-400 text-[18px] shrink-0">schedule</span>
                <span>Senin - Sabtu 08.30 - 19.00 WIB</span>
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <div>© 2025 Moobi (PT Ekosistem Digital Kreasi). Hak Cipta Dilindungi Undang-Undang.</div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Ketentuan Layanan</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Keamanan Sistem</a>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Status Server (99.9% Uptime)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
