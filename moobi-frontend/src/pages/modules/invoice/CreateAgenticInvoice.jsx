import React, { useState } from 'react';
import { Bot, Send, CheckCircle2, FileText, Sparkles, ArrowRight, DollarSign, User, Calendar } from 'lucide-react';

export default function CreateAgenticInvoice() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Halo! Saya AI Invoice Agent Moobi. Tuliskan rincian pesanan pelanggan (misal: "Budi beli 2 Kopi Arabika 50k & 1 Croissant 25k via BCA, diskon 5k"), dan saya buatkan invoice otomatisnya.'
    }
  ]);
  const [invoicePreview, setInvoicePreview] = useState({
    customer: 'Budi Santoso',
    invoiceNumber: 'INV-2026-0891',
    date: new Date().toLocaleDateString('id-ID'),
    items: [
      { name: 'Kopi Arabika Single Origin 250g', qty: 2, price: 50000, total: 100000 },
      { name: 'Butter Croissant Premium', qty: 1, price: 25000, total: 25000 }
    ],
    discount: 5000,
    subtotal: 125000,
    total: 120000,
    paymentMethod: 'BCA Virtual Account',
    status: 'Draft Ready'
  });

  const handleSend = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userText = prompt;
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setPrompt('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: `✨ Berhasil mengekstrak pesanan dari prompt: "${userText}". Invoice telah di-generate secara real-time!`
        }
      ]);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-200 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Agentic Module
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">AI Chat-to-Invoice Generator</h1>
          <p className="text-slate-600 text-sm mt-1">Ubah percakapan teks bebas dan pesanan customer langsung jadi invoice resmi & payment link.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Agentic Chat Playground */}
        <div className="lg:col-span-6 flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 h-[600px] overflow-hidden">
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Moobi Invoice Agent (Claude 3.7 Core)</h3>
                <p className="text-xs text-blue-300 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online & Active
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-blue-600 text-white shadow-sm'
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
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Contoh: Buat invoice untuk Bu Sarah, 3 Kaos Polos L @75k..."
              className="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-50 focus:bg-white border border-transparent focus:border-blue-500 rounded-xl text-sm focus:outline-none transition-all"
            />
            <button
              type="submit"
              className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-transform active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Right Side: Generated Live Invoice Preview */}
        <div className="lg:col-span-6 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-slate-800">Preview Invoice Resmi</h3>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {invoicePreview.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 my-6 text-sm">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-xs text-slate-500 flex items-center gap-1"><User className="w-3.5 h-3.5" /> Pelanggan</span>
                <span className="font-bold text-slate-800 block mt-0.5">{invoicePreview.customer}</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> No & Tanggal</span>
                <span className="font-bold text-slate-800 block mt-0.5">{invoicePreview.invoiceNumber}</span>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-600 text-xs uppercase font-semibold">
                  <tr>
                    <th className="p-3">Item</th>
                    <th className="p-3 text-center">Qty</th>
                    <th className="p-3 text-right">Harga</th>
                    <th className="p-3 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {invoicePreview.items.map((item, i) => (
                    <tr key={i}>
                      <td className="p-3 font-medium">{item.name}</td>
                      <td className="p-3 text-center">{item.qty}</td>
                      <td className="p-3 text-right">Rp {item.price.toLocaleString('id-ID')}</td>
                      <td className="p-3 text-right font-semibold">Rp {item.total.toLocaleString('id-ID')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-2 text-sm border-t border-slate-100 pt-4">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>Rp {invoicePreview.subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-emerald-600 font-medium">
                <span>Diskon Promo AI</span>
                <span>-Rp {invoicePreview.discount.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-lg font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                <span>Total Tagihan</span>
                <span className="text-blue-600">Rp {invoicePreview.total.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
              Kirim via WhatsApp Auto <ArrowRight className="w-4 h-4" />
            </button>
            <button className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all">
              Unduh PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
