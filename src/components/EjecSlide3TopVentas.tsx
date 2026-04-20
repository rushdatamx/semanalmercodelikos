"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin, TrendingUp } from "lucide-react";

interface TiendaTop3 {
  nombre: string;
  venta: number;
  pct: number;
  growth: string;
  top3: { producto: string; venta: number; pct: number }[];
}

const topTiendas: TiendaTop3[] = [
  {
    nombre: "MERCO García",
    venta: 297195,
    pct: 4.2,
    growth: "+59%",
    top3: [
      { producto: "Tostada Roja 70PZ", venta: 189260, pct: 64 },
      { producto: "Durito Teja 20PZ", venta: 23001, pct: 8 },
      { producto: "Papa Natural 45g", venta: 14393, pct: 5 },
    ],
  },
  {
    nombre: "MERCO Los Pilares",
    venta: 283281,
    pct: 4.0,
    growth: "+31%",
    top3: [
      { producto: "Tostada Roja 70PZ", venta: 200150, pct: 71 },
      { producto: "Durito Teja 20PZ", venta: 11779, pct: 4 },
      { producto: "Tostada Roja 200g", venta: 10073, pct: 4 },
    ],
  },
  {
    nombre: "MERCO Girasoles",
    venta: 268894,
    pct: 3.8,
    growth: "+44%",
    top3: [
      { producto: "Tostada Roja 70PZ", venta: 180289, pct: 67 },
      { producto: "Durito Teja 20PZ", venta: 10440, pct: 4 },
      { producto: "Tostada Amarilla 200g", venta: 7722, pct: 3 },
    ],
  },
  {
    nombre: "MERCO Sdo. Sta. Catarina",
    venta: 268664,
    pct: 3.8,
    growth: "+33%",
    top3: [
      { producto: "Tostada Roja 70PZ", venta: 138599, pct: 52 },
      { producto: "Durito Teja 20PZ", venta: 17787, pct: 7 },
      { producto: "Papa Natural 45g", venta: 11612, pct: 4 },
    ],
  },
  {
    nombre: "MERCO El Jaral",
    venta: 265356,
    pct: 3.7,
    growth: "+79%",
    top3: [
      { producto: "Tostada Roja 70PZ", venta: 158776, pct: 60 },
      { producto: "Cacah. Mixto Granel", venta: 12510, pct: 5 },
      { producto: "Papa Natural 45g", venta: 9204, pct: 3 },
    ],
  },
  {
    nombre: "MERCO Buenavista",
    venta: 263087,
    pct: 3.7,
    growth: "+31%",
    top3: [
      { producto: "Tostada Roja 70PZ", venta: 181258, pct: 69 },
      { producto: "Durito Teja 20PZ", venta: 22740, pct: 9 },
      { producto: "Tostada Amarilla 200g", venta: 11182, pct: 4 },
    ],
  },
  {
    nombre: "MERCO Solidaridad",
    venta: 251937,
    pct: 3.6,
    growth: "+57%",
    top3: [
      { producto: "Tostada Roja 70PZ", venta: 172748, pct: 69 },
      { producto: "Tostada Roja 200g", venta: 14510, pct: 6 },
      { producto: "Tostada Amarilla 200g", venta: 11654, pct: 5 },
    ],
  },
  {
    nombre: "MERCO Mixcoac",
    venta: 251411,
    pct: 3.5,
    growth: "+111%",
    top3: [
      { producto: "Tostada Roja 70PZ", venta: 201856, pct: 80 },
      { producto: "Durito Teja 20PZ", venta: 10037, pct: 4 },
      { producto: "Papa Fuego 45g", venta: 5152, pct: 2 },
    ],
  },
  {
    nombre: "MERCO San Roque",
    venta: 248583,
    pct: 3.5,
    growth: "+84%",
    top3: [
      { producto: "Tostada Roja 70PZ", venta: 186081, pct: 75 },
      { producto: "Durito Teja 20PZ", venta: 8342, pct: 3 },
      { producto: "Papa Natural 45g", venta: 7280, pct: 3 },
    ],
  },
  {
    nombre: "MERCO Montemorelos",
    venta: 226434,
    pct: 3.2,
    growth: "+72%",
    top3: [
      { producto: "Tostada Roja 70PZ", venta: 125646, pct: 55 },
      { producto: "Durito Teja 20PZ", venta: 13604, pct: 6 },
      { producto: "Tostada Amarilla 200g", venta: 8730, pct: 4 },
    ],
  },
];

const maxVenta = topTiendas[0].venta;

const insights = [
  "Las 10 tiendas top crecieron vs Q1 2025 — promedio +60%",
  "MERCO Mixcoac destaca con +111% de crecimiento YoY",
  "Tostada Roja 70PZ es #1 en las 10 tiendas (52–80% de la venta)",
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
              Sell-out acumulado Ene–Mar · Top 3 productos por tienda
            </p>
          </div>
        </div>
        <div className="bg-[#F5A623]/10 rounded-lg px-3 py-1.5 border border-[#F5A623]/20">
          <p className="text-[9px] text-[#F5A623] uppercase font-semibold">Top 10 = 37% total</p>
          <p className="text-lg font-bold text-[#F5A623]">$2.62M</p>
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
