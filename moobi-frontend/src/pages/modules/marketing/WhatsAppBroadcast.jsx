import React, { useState } from 'react';
import { Send, Users, MessageCircle, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export default function WhatsAppBroadcast() {
  const [segment, setSegment] = useState('dormant');
  const [template, setTemplate] = useState('Halo {nama}! Kami rindu Anda. Dapatkan diskon 20% khusus minggu ini dengan kode HEMAT20!');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="pb-6 border-b border-slate-200 mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5" /> Marketing Automation
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">WhatsApp Smart Broadcast (RFM)</h1>
        <p className="text-slate-600 text-sm mt-1">Kirim pesan personalisasi massal sesuai segmentasi perilaku belanja pelanggan.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-2">Pilih Segmentasi Target Pelanggan</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'champions', label: 'Champions (Loyal)', count: '142 Kontak' },
                { id: 'potential', label: 'Potensial Loyal', count: '389 Kontak' },
                { id: 'dormant', label: 'Dormant / Churn Risk', count: '512 Kontak' }
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSegment(s.id)}
                  type="button"
                  className={`p-3 text-left rounded-xl border transition-all ${
                    segment === s.id
                      ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-500/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="block font-bold text-xs text-slate-900">{s.label}</span>
                  <span className="text-[11px] text-slate-500">{s.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-800 mb-2">Template Pesan WhatsApp</label>
            <textarea
              rows={5}
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
            <Send className="w-4 h-4" /> Mulai Broadcast Sekarang
          </button>
        </div>

        <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Live WhatsApp Preview</span>
            <div className="mt-6 bg-[#075e54] p-3 rounded-t-xl text-xs font-semibold flex items-center justify-between">
              <span>Official Moobi Store</span>
              <span className="text-[10px] text-slate-200">Online</span>
            </div>
            <div className="bg-[#efeae2] p-4 rounded-b-xl min-h-[220px] text-slate-800 text-sm">
              <div className="bg-white p-3 rounded-xl shadow-sm max-w-[90%] space-y-1">
                <p>{template.replace('{nama}', 'Andi Pratama')}</p>
                <span className="text-[10px] text-slate-400 block text-right">12:30 ✓✓</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
            Terhubung via WhatsApp Cloud API Resmi Meta (Anti-Banned Protection).
          </div>
        </div>
      </div>
    </div>
  );
}
