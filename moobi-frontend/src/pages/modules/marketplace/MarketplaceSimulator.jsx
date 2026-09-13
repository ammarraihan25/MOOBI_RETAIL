import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MarketplaceSimulator() {
  const [channels, setChannels] = useState([
    { id: 1, name: 'Shopee Official Store', icon: 'shopping_bag', color: 'text-orange-500 bg-orange-50', syncStatus: 'Tersinkron', productsCount: 142, lastSync: '1 menit lalu', active: true },
    { id: 2, name: 'TikTok Shop Indonesia', icon: 'music_video', color: 'text-slate-900 bg-slate-100', syncStatus: 'Tersinkron', productsCount: 98, lastSync: '3 menit lalu', active: true },
    { id: 3, name: 'Tokopedia Merchant Pro', icon: 'storefront', color: 'text-emerald-600 bg-emerald-50', syncStatus: 'Tersinkron', productsCount: 142, lastSync: 'Baru saja', active: true },
    { id: 4, name: 'Moobi Storefront Mandiri', icon: 'domain', color: 'text-blue-600 bg-blue-50', syncStatus: 'Tersinkron', productsCount: 142, lastSync: 'Real-Time', active: true }
  ]);

  const [products, setProducts] = useState([
    { id: 'SKU-001', name: 'Sneakers Moobi Street Air Pro', price: 499000, stock: 45, sold: 120 },
    { id: 'SKU-002', name: 'Hoodie Cotton Fleece Oversized', price: 289000, stock: 18, sold: 85 },
    { id: 'SKU-003', name: 'Backpack Waterproof Urban Tech', price: 349000, stock: 32, sold: 64 },
  ]);

  const [isSyncing, setIsSyncing] = useState(false);
  const [syncAlert, setSyncAlert] = useState(null);

  const handleSyncAll = () => {
    setIsSyncing(true);
    setSyncAlert(null);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncAlert('Sukses! Semua stok di 4 saluran penjualan berhasil diperbarui secara instan.');
    }, 1200);
  };

  const handleUpdateStock = (sku, delta) => {
    setProducts(products.map(p => p.id === sku ? { ...p, stock: Math.max(0, p.stock + delta) } : p));
  };

  return (
    <div className="w-full bg-[#faf8ff] min-h-screen pb-20">
      {/* HEADER BAR */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/penawaran/marketplace" className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black text-slate-900">Live Simulator: Marketplace &amp; Toko Online</h1>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-extrabold text-[10px] uppercase">Live Demo</span>
              </div>
              <p className="text-xs text-slate-500">Uji coba sinkronisasi inventori terpusat multi-channel secara real-time.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSyncAll}
              disabled={isSyncing}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0057cd] hover:bg-[#0048ab] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98] disabled:opacity-50"
            >
              <span className={`material-symbols-outlined text-[18px] ${isSyncing ? 'animate-spin' : ''}`}>sync</span>
              <span>{isSyncing ? 'Sinkronisasi Berjalan...' : 'Sinkronkan Semua Channel'}</span>
            </button>
            <Link to="/penawaran/marketplace" className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50">
              Lihat Detail Paket
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 mt-8 space-y-8">
        {syncAlert && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold flex items-center gap-2 animate-fade-in">
            <span className="material-symbols-outlined text-emerald-600">check_circle</span>
            <span>{syncAlert}</span>
          </div>
        )}

        {/* CHANNELS GRID */}
        <div>
          <h2 className="text-base font-bold text-slate-900 mb-4">Saluran Penjualan Terhubung (Omnichannel)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((c) => (
              <div key={c.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${c.color}`}>
                    <span className="material-symbols-outlined text-[20px]">{c.icon}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-extrabold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {c.syncStatus}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{c.name}</h3>
                  <div className="text-xs text-slate-500 font-medium">{c.productsCount} Produk Aktif</div>
                </div>
                <div className="text-[11px] text-slate-400 border-t border-slate-100 pt-2 flex items-center justify-between">
                  <span>Sinkronisasi:</span>
                  <span className="font-semibold text-slate-600">{c.lastSync}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INVENTORY SIMULATOR TABLE */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Manajemen Stok Multi-Channel Terpusat</h2>
              <p className="text-xs sm:text-sm text-slate-500">Simulasikan pengurangan atau penambahan stok di bawah ini. Semua marketplace akan otomatis ter-update.</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 text-[#0057cd] text-xs font-bold">
              <span className="material-symbols-outlined text-[16px]">lock</span>
              <span>Proteksi Anti-Overselling Aktif</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-extrabold border-y border-slate-100">
                <tr>
                  <th className="py-3.5 px-4">SKU / Nama Produk</th>
                  <th className="py-3.5 px-4">Harga Terintegrasi</th>
                  <th className="py-3.5 px-4">Stok Terpusat</th>
                  <th className="py-3.5 px-4">Terjual</th>
                  <th className="py-3.5 px-4 text-center">Simulasi Order / Stok</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-4">
                      <div className="font-bold text-slate-900">{p.name}</div>
                      <div className="text-[11px] font-mono text-slate-400">{p.id}</div>
                    </td>
                    <td className="py-4 px-4 font-extrabold text-[#0057cd]">
                      Rp {p.price.toLocaleString('id-ID')}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-black ${p.stock < 20 ? 'bg-amber-50 text-amber-700' : 'bg-blue-50 text-[#0057cd]'}`}>
                        {p.stock} Unit
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-600 font-semibold">{p.sold} Unit</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleUpdateStock(p.id, -1)}
                          className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs transition"
                          title="Simulasikan 1 Order Masuk"
                        >
                          -1 Order
                        </button>
                        <button
                          onClick={() => handleUpdateStock(p.id, 10)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs transition"
                          title="Restock +10"
                        >
                          +10 Restock
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
