"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin, TrendingUp } from "lucide-react";

interface TiendaTop3 {
  nombre: string;
  venta: number;
  pct: number;
  growth: string;
  top3: { producto: string; pct: number }[];
}

const topTiendas: TiendaTop3[] = [
  {
    nombre: "MERCO García",
    venta: 283711,
    pct: 4.5,
    growth: "+75%",
    top3: [
      { producto: "Tostada Roja 70PZ", pct: 67 },
      { producto: "Durito Teja 20PZ", pct: 8 },
      { producto: "Papa Natural 45g", pct: 5 },
    ],
  },
  {
    nombre: "MERCO Los Pilares",
    venta: 245655,
    pct: 3.9,
    growth: "+30%",
    top3: [
      { producto: "Tostada Roja 70PZ", pct: 81 },
      { producto: "Durito Teja 20PZ", pct: 5 },
      { producto: "Tostada Roja 200g", pct: 4 },
    ],
  },
  {
    nombre: "MERCO Buenavista",
    venta: 241468,
    pct: 3.9,
    growth: "+32%",
    top3: [
      { producto: "Tostada Roja 70PZ", pct: 75 },
      { producto: "Durito Teja 20PZ", pct: 9 },
      { producto: "Tostada Amarilla 200g", pct: 5 },
    ],
  },
  {
    nombre: "MERCO Mixcoac",
    venta: 238802,
    pct: 3.8,
    growth: "+128%",
    top3: [
      { producto: "Tostada Roja 70PZ", pct: 85 },
      { producto: "Durito Teja 20PZ", pct: 4 },
      { producto: "Papa Fuego 45g", pct: 2 },
    ],
  },
  {
    nombre: "MERCO Solidaridad",
    venta: 231732,
    pct: 3.7,
    growth: "+77%",
    top3: [
      { producto: "Tostada Roja 70PZ", pct: 75 },
      { producto: "Tostada Roja 200g", pct: 6 },
      { producto: "Tostada Amarilla 200g", pct: 5 },
    ],
  },
  {
    nombre: "MERCO Girasoles",
    venta: 229907,
    pct: 3.7,
    growth: "+40%",
    top3: [
      { producto: "Tostada Roja 70PZ", pct: 78 },
      { producto: "Durito Teja 20PZ", pct: 5 },
      { producto: "Tostada Amarilla 200g", pct: 3 },
    ],
  },
  {
    nombre: "MERCO El Jaral",
    venta: 228623,
    pct: 3.7,
    growth: "+85%",
    top3: [
      { producto: "Tostada Roja 70PZ", pct: 69 },
      { producto: "Cacah. Mixto Granel", pct: 5 },
      { producto: "Papa Natural 45g", pct: 4 },
    ],
  },
  {
    nombre: "MERCO San Roque",
    venta: 225521,
    pct: 3.6,
    growth: "+86%",
    top3: [
      { producto: "Tostada Roja 70PZ", pct: 83 },
      { producto: "Durito Teja 20PZ", pct: 4 },
      { producto: "Papa Natural 45g", pct: 3 },
    ],
  },
  {
    nombre: "MERCO Sdo. Sta. Catarina",
    venta: 224626,
    pct: 3.6,
    growth: "+28%",
    top3: [
      { producto: "Tostada Roja 70PZ", pct: 62 },
      { producto: "Durito Teja 20PZ", pct: 8 },
      { producto: "Papa Natural 45g", pct: 5 },
    ],
  },
  {
    nombre: "MERCO Colinas",
    venta: 212946,
    pct: 3.4,
    growth: "+64%",
    top3: [
      { producto: "Tostada Roja 70PZ", pct: 76 },
      { producto: "Durito Teja 20PZ", pct: 4 },
      { producto: "Tostada Amarilla 200g", pct: 3 },
    ],
  },
];

const maxVenta = topTiendas[0].venta;

const insights = [
  "Las 10 tiendas top crecieron vs Q1 2025 — promedio +65%",
  "MERCO Mixcoac destaca con +128% de crecimiento YoY",
  "Tostada Roja 70PZ es #1 en las 10 tiendas (62–85% de la venta)",
  "Durito Teja se posiciona como #2 en 7 de las 10 tiendas principales",
];

export default function EjecSlide3TopVentas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#F5A623]/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#F5A623]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Top 10 Tiendas — Q1 2026</h2>
            <p className="text-[10px] text-gray-500">
              Sell-out acumulado Ene–Mar · Abarrotes · Top 3 productos por tienda
            </p>
          </div>
        </div>
        <div className="bg-[#F5A623]/10 rounded-lg px-3 py-1.5 border border-[#F5A623]/20">
          <p className="text-[9px] text-[#F5A623] uppercase font-semibold">Top 10 = 38% total</p>
          <p className="text-lg font-bold text-[#F5A623]">$2.36M</p>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 min-h-0 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-[10px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-[9px] uppercase text-gray-500 font-semibold">
              <th className="text-left py-2 px-3 w-6">#</th>
              <th className="text-left py-2 px-2">Tienda</th>
              <th className="text-right py-2 px-2">Venta Q1</th>
              <th className="text-right py-2 px-2">%</th>
              <th className="text-center py-2 px-2">YoY</th>
              <th className="text-left py-2 px-2">Top 1</th>
              <th className="text-left py-2 px-2">Top 2</th>
              <th className="text-left py-2 px-2">Top 3</th>
              <th className="py-2 px-2 w-[120px]">Peso Tostada</th>
            </tr>
          </thead>
          <tbody>
            {topTiendas.map((t, i) => {
              const tostadaPct = t.top3[0].pct;
              return (
                <tr
                  key={i}
                  className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                >
                  <td className="py-2 px-3 font-bold text-gray-400">{i + 1}</td>
                  <td className="py-2 px-2 font-semibold text-gray-800">{t.nombre}</td>
                  <td className="py-2 px-2 text-right font-bold text-gray-800">
                    ${(t.venta / 1000).toFixed(0)}K
                  </td>
                  <td className="py-2 px-2 text-right text-gray-500">{t.pct}%</td>
                  <td className="py-2 px-2 text-center">
                    <span className="font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                      {t.growth}
                    </span>
                  </td>
                  <td className="py-2 px-2">
                    <span className="text-gray-700">{t.top3[0].producto}</span>
                    <span className="text-gray-400 ml-1">({t.top3[0].pct}%)</span>
                  </td>
                  <td className="py-2 px-2">
                    <span className="text-gray-700">{t.top3[1].producto}</span>
                    <span className="text-gray-400 ml-1">({t.top3[1].pct}%)</span>
                  </td>
                  <td className="py-2 px-2">
                    <span className="text-gray-700">{t.top3[2].producto}</span>
                    <span className="text-gray-400 ml-1">({t.top3[2].pct}%)</span>
                  </td>
                  <td className="py-2 px-2">
                    <div className="flex items-center gap-1">
                      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#E74C3C]"
                          style={{ width: `${tostadaPct}%` }}
                        />
                      </div>
                      <span className="text-[9px] text-gray-500 w-7 text-right">{tostadaPct}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Insights */}
      <div className="mt-2 grid grid-cols-2 gap-2">
        {insights.map((ins, i) => (
          <div
            key={i}
            className="flex items-start gap-2 bg-[#F5A623]/5 rounded-lg px-3 py-2 border border-[#F5A623]/15"
          >
            <TrendingUp className="w-3.5 h-3.5 text-[#F5A623] flex-shrink-0 mt-0.5" />
            <p className="text-[10px] text-gray-700">{ins}</p>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
}
