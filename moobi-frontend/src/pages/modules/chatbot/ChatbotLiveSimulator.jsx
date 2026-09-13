import React, { useState } from 'react';
import { Bot, Send, Sparkles, MessageSquare, Zap, Settings, RefreshCw } from 'lucide-react';

export default function ChatbotLiveSimulator() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Halo kak! Selamat datang di Moobi Store. Ada yang bisa kami bantu seputar stok atau pengiriman hari ini? 😊' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    setTimeout(() => {
      let reply = 'Terima kasih atas pertanyaannya! Pesanan sebelum jam 15:00 WIB akan dikirim pada hari yang sama.';
      if (userText.toLowerCase().includes('harga') || userText.toLowerCase().includes('diskon')) {
        reply = 'Kami sedang ada promo diskon 15% untuk pembelian paket bundling 2 item ke atas!';
      } else if (userText.toLowerCase().includes('resi') || userText.toLowerCase().includes('lacak')) {
        reply = 'Silakan cantumkan nomor pesanan kakak, kami akan segera melacak status ekspedisi realtime.';
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="pb-6 border-b border-slate-200 mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
            <Zap className="w-3.5 h-3.5" /> 24/7 CS Autonomous
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">AI Chatbot Live Simulator</h1>
        <p className="text-slate-600 text-sm mt-1">Uji coba simulasi interaksi bot CS cerdas yang terintegrasi dengan data katalog dan stok produk Anda.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-slate-200 h-[580px] flex flex-col overflow-hidden">
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Moobi Prism CS Engine</h3>
                <p className="text-xs text-emerald-400 font-medium">Response time: ~0.4s</p>
              </div>
            </div>
            <button
              onClick={() => setMessages([{ sender: 'bot', text: 'Percakapan di-reset. Ada yang bisa kami bantu?' }])}
              className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
              title="Reset Chat"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-800 shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pesan uji coba simulasi..."
              className="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-50 focus:bg-white border border-transparent focus:border-indigo-500 rounded-xl text-sm focus:outline-none transition-all"
            />
            <button
              type="submit"
              className="p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition-transform active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5 text-indigo-600" /> Pengaturan Persona Bot
            </h3>
            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <label className="text-xs font-semibold uppercase text-slate-500 block mb-1">Tone of Voice</label>
                <span className="inline-block bg-indigo-50 text-indigo-700 font-semibold px-3 py-1 rounded-lg text-xs">
                  Ramah, Santun &amp; Solutif (Indonesian)
                </span>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase text-slate-500 block mb-1">Knowledge Source</label>
                <span className="inline-block bg-slate-100 text-slate-700 font-semibold px-3 py-1 rounded-lg text-xs">
                  Katalog Produk &amp; FAQ Toko
                </span>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase text-slate-500 block mb-1">Status Auto Handover</label>
                <span className="text-xs text-slate-600">Jika komplain &gt; tingkat kritis, otomatis eskalasi ke CS Admin WhatsApp.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
