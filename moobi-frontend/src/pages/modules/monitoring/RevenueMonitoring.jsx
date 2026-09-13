import React from 'react';
import { TrendingUp, DollarSign, ShoppingBag, Users, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function RevenueMonitoring() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="pb-6 border-b border-slate-200 mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> Analytics
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Revenue &amp; Omni-Channel Monitoring</h1>
        <p className="text-slate-600 text-sm mt-1">Pemantauan omzet penjualan, konversi chat-to-invoice, dan performa merchant.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Omzet (Bulan Ini)', val: 'Rp 48.250.000', change: '+24.5%', icon: DollarSign, color: 'text-emerald-600 bg-emerald-50' },
          { label: 'Total Transaksi Selesai', val: '412 Pesanan', change: '+12.8%', icon: ShoppingBag, color: 'text-blue-600 bg-blue-50' },
          { label: 'Customer Aktif', val: '1.240 User', change: '+8.3%', icon: Users, color: 'text-purple-600 bg-purple-50' },
          { label: 'Conversion Rate AI', val: '68.4%', change: '+5.1%', icon: TrendingUp, color: 'text-amber-600 bg-amber-50' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className={`p-3 rounded-xl ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                {item.change} <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <p className="text-xs text-slate-500 font-semibold uppercase">{item.label}</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1">{item.val}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-900 mb-4">Transaksi Terakhir Realtime</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
              <tr>
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Channel</th>
                <th className="p-3 text-right">Nominal</th>
                <th className="p-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                { id: 'INV-2026-0891', name: 'Budi Santoso', ch: 'WhatsApp AI Agent', amount: 'Rp 120.000', status: 'Lunas' },
                { id: 'INV-2026-0890', name: 'Siti Rahma', ch: 'Direct Web Store', amount: 'Rp 450.000', status: 'Lunas' },
                { id: 'INV-2026-0889', name: 'Dimas Wijaya', ch: 'Shopee Sync', amount: 'Rp 89.000', status: 'Proses Kirim' }
              ].map((row, i) => (
                <tr key={i}>
                  <td className="p-3 font-semibold text-blue-600">{row.id}</td>
                  <td className="p-3 font-medium">{row.name}</td>
                  <td className="p-3 text-slate-500">{row.ch}</td>
                  <td className="p-3 text-right font-bold">{row.amount}</td>
                  <td className="p-3 text-center">
                    <span className="px-2.5 py-1 text-xs rounded-full font-semibold bg-emerald-100 text-emerald-800">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
