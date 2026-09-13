import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LogisticsSimulator() {
  const [origin, setOrigin] = useState('Jakarta Selatan');
  const [destination, setDestination] = useState('Surabaya');
  const [weight, setWeight] = useState(1);
  const [couriers, setCouriers] = useState([
    { id: 'jne', name: 'JNE Express', service: 'REG (Reguler)', rate: 22000, discountRate: 15400, etd: '1-2 Hari', discount: '30%', badge: 'Paling Populer' },
    { id: 'sicepat', name: 'SiCepat Ekspres', service: 'SIUNTUNG', rate: 21000, discountRate: 14700, etd: '1-2 Hari', discount: '30%', badge: 'Cashback 30%' },
    { id: 'jnt', name: 'J&T Express', service: 'EZ', rate: 23000, discountRate: 16100, etd: '1-3 Hari', discount: '30%', badge: 'Free Pickup' },
    { id: 'anteraja', name: 'Anteraja', service: 'Next Day', rate: 28000, discountRate: 19600, etd: 'Besok Sampai', discount: '30%', badge: 'Super Cepat' }
  ]);

  const [selectedCourier, setSelectedCourier] = useState(couriers[0]);
  const [resiGenerated, setResiGenerated] = useState(null);

  const handleGenerateResi = () => {
    const randomResi = `${selectedCourier.id.toUpperCase()}-${Math.floor(1000000000 + Math.random() * 9000000000)}`;
    setResiGenerated({
      resi: randomResi,
      courier: selectedCourier.name,
      service: selectedCourier.service,
      ongkir: selectedCourier.discountRate * weight,
      created: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    });
  };

  return (
    <div className="w-full bg-[#faf8ff] min-h-screen pb-20">
      {/* HEADER BAR */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/penawaran/logistics" className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black text-slate-900">Live Simulator: Logistik &amp; Multi-Kurir</h1>
                <span className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 font-extrabold text-[10px] uppercase">Live Demo</span>
              </div>
              <p className="text-xs text-slate-500">Cek tarif otomatis, bandingkan diskon ongkir, dan simulasikan cetak resi thermal.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/penawaran/logistics" className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50">
              Lihat Detail Paket
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT CALCULATOR */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-500">calculate</span>
              <span>Kalkulator Tarif Ekspedisi Otomatis</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Kota Asal (Gudang)</label>
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Kota Tujuan</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Berat Paket (kg)</label>
                <input
                  type="number"
                  min="1"
                  value={weight}
                  onChange={(e) => setWeight(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Pilih Layanan Kurir</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {couriers.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setSelectedCourier(c)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                      selectedCourier.id === c.id
                        ? 'bg-orange-50/70 border-orange-500 ring-2 ring-orange-500/20 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-bold text-sm text-slate-900">{c.name}</div>
                        <div className="text-xs text-slate-500 font-medium">{c.service} • {c.etd}</div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-orange-100 text-orange-700 text-[10px] font-extrabold">
                        {c.discount}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 pt-1 border-t border-slate-100">
                      <span className="text-base font-extrabold text-orange-600">
                        Rp {(c.discountRate * weight).toLocaleString('id-ID')}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        Rp {(c.rate * weight).toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerateResi}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white font-bold text-sm shadow-md shadow-orange-500/25 hover:from-[#c2410c] hover:to-[#ea580c] transition active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">receipt</span>
              <span>Generate Resi Otomatis &amp; Request Pick Up</span>
            </button>
          </div>
        </div>

        {/* RIGHT PREVIEW / RESI THERMAL */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600">print</span>
              <span>Preview Label Thermal A6</span>
            </h2>

            {resiGenerated ? (
              <div className="p-6 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300 space-y-4 font-mono text-xs text-slate-800">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="font-extrabold text-base tracking-tight text-slate-900">{resiGenerated.courier}</div>
                  <div className="text-[10px] px-2 py-0.5 rounded bg-slate-200 font-bold uppercase">{resiGenerated.service}</div>
                </div>

                <div className="text-center py-2 space-y-1">
                  <div className="text-[20px] font-black tracking-widest text-slate-900">{resiGenerated.resi}</div>
                  <div className="text-[10px] text-slate-500">||| | | |||| | ||| |||| | || |||| | |||</div>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-3 text-[11px]">
                  <div>
                    <div className="text-slate-400 font-bold uppercase text-[9px]">PENGIRIM:</div>
                    <div className="font-bold text-slate-900">Moobi Warehouse</div>
                    <div className="text-slate-500">{origin}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 font-bold uppercase text-[9px]">PENERIMA:</div>
                    <div className="font-bold text-slate-900">Pelanggan Moobi</div>
                    <div className="text-slate-500">{destination}</div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 flex items-center justify-between font-bold text-xs">
                  <span>Total Ongkir ({weight} kg):</span>
                  <span className="text-orange-600">Rp {resiGenerated.ongkir.toLocaleString('id-ID')}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 text-[11px] font-bold text-center">
                  ✓ Kurir Dijadwalkan Pick Up Pukul {resiGenerated.created} WIB
                </div>
              </div>
            ) : (
              <div className="p-10 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 text-center space-y-2 text-slate-400">
                <span className="material-symbols-outlined text-[36px]">receipt_long</span>
                <p className="text-xs font-semibold">Klik tombol "Generate Resi Otomatis" di sebelah kiri untuk melihat preview cetak label resi.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
