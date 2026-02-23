"use client";

import SlideWrapper from "./SlideWrapper";
import { Award, Store, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

/* ── Donut data: Top 6 + Otros ── */
const donutData = [
  { name: "Tostada Roja 70PZ", value: 2521249, color: "#E74C3C" },
  { name: "Durito Teja 20pzs", value: 184883, color: "#F97316" },
  { name: "Tostada Roja 200g", value: 140338, color: "#EF4444" },
  { name: "Tostada Amarilla 200g", value: 136143, color: "#F59E0B" },
  { name: "Papa Natural 45g", value: 99303, color: "#3B82F6" },
  { name: "Cacahuate Mixto 1kg", value: 81952, color: "#8B5CF6" },
  { name: "Otros (38)", value: 743213, color: "#D1D5DB" },
];

const TOTAL = 3907081;

/* ── Top 10 tiendas con sus productos ── */
interface TiendaRow {
  nombre: string;
  venta: number;
  nProductos: number;
  top5: string[];
}

const tiendas: TiendaRow[] = [
  { nombre: "Los Pilares", venta: 166365, nProductos: 34, top5: ["Tostada 70PZ", "Durito Teja", "Tostada R 200g", "Totopo 450g", "Nacho 450g"] },
  { nombre: "Garcia", venta: 164035, nProductos: 31, top5: ["Tostada 70PZ", "Durito Teja", "Papa Nat 45g", "Tostada A 200g", "Papa Fuego 45g"] },
  { nombre: "Mixcoac", venta: 153019, nProductos: 30, top5: ["Tostada 70PZ", "Durito Teja", "Tostada A 200g", "Papa Fuego 45g", "Papa Fuego 340g"] },
  { nombre: "Girasoles", venta: 146968, nProductos: 31, top5: ["Tostada 70PZ", "Durito Teja", "Tostada A 200g", "Tostada R 200g", "Papa Nat 45g"] },
  { nombre: "El Jaral", venta: 146894, nProductos: 35, top5: ["Tostada 70PZ", "Cacah Mixto 1kg", "Tostada A 200g", "Papa Nat 45g", "Tostada R 200g"] },
  { nombre: "Buenavista", venta: 142946, nProductos: 31, top5: ["Tostada 70PZ", "Durito Teja", "Tostada A 200g", "Tostada R 200g", "Cacah Cant 1kg"] },
  { nombre: "San Roque", venta: 133396, nProductos: 34, top5: ["Tostada 70PZ", "Durito Teja", "Papa Nat 45g", "Tostada A 200g", "Papa Fuego 45g"] },
  { nombre: "Snd. Sta. Catarina", venta: 130275, nProductos: 36, top5: ["Tostada 70PZ", "Durito Teja", "Papa Nat 45g", "Papa Jal 45g", "Tostada R 200g"] },
  { nombre: "Ramos Arizpe", venta: 128434, nProductos: 34, top5: ["Tostada 70PZ", "Durito Teja", "Tostada R 200g", "Tostada A 200g", "Cacah Sal 1kg"] },
  { nombre: "Solidaridad", venta: 126960, nProductos: 31, top5: ["Tostada 70PZ", "Tostada R 200g", "Durito Teja", "Tostada A 200g", "Papa Nat 45g"] },
];

const fmt = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
  return `$${v}`;
};

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number; payload: { color: string } }> }) => {
  if (!active || !payload?.[0]) return null;
  const d = payload[0];
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-lg px-3 py-2 text-xs">
      <p className="font-bold text-gray-800">{d.name}</p>
      <p className="text-gray-600">{fmt(d.value)} · {((d.value / TOTAL) * 100).toFixed(1)}%</p>
    </div>
  );
};

export default function VentasSlideResumen() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-[#3B82F6]" />
          <h2 className="text-xl font-bold text-gray-800">Ventas MERCO — Ene/Feb 2026</h2>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1 border border-gray-200 shadow-sm">
          <TrendingUp className="w-4 h-4 text-[#27AE60]" />
          <span className="text-[11px] font-bold text-gray-800">{fmt(TOTAL)}</span>
          <span className="text-[10px] font-bold text-[#27AE60]">+51% vs 2025</span>
        </div>
      </div>

      <div className="flex gap-4 flex-1 min-h-0">
        {/* ── Left: Donut + Leyenda ── */}
        <div className="w-[320px] flex flex-col">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">Top productos por venta</p>
          <div className="flex-1 flex items-center">
            <div className="w-[180px] h-[180px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={82}
                    paddingAngle={1.5}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {donutData.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-lg font-bold text-gray-800">64.5%</span>
                <span className="text-[8px] text-gray-400">Tostada 70PZ</span>
              </div>
            </div>
            <div className="flex-1 space-y-1 ml-2">
              {donutData.map((d, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
                  <span className="text-[9px] text-gray-600 truncate flex-1">{d.name}</span>
                  <span className="text-[9px] text-gray-800 font-bold">{((d.value / TOTAL) * 100).toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-1.5 text-center">
              <p className="text-[8px] text-gray-400">Tostadas (3 SKU)</p>
              <p className="text-sm font-bold text-[#E74C3C]">71.6%</p>
              <p className="text-[8px] text-gray-500">$2.8M</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-1.5 text-center">
              <p className="text-[8px] text-gray-400">43 tiendas activas</p>
              <p className="text-sm font-bold text-[#3B82F6]">35</p>
              <p className="text-[8px] text-gray-500">crecen vs 2025</p>
            </div>
          </div>
        </div>

        {/* ── Right: Top 10 tiendas ── */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <Store className="w-4 h-4 text-[#F5A623]" />
            <p className="text-[10px] text-gray-500 font-semibold uppercase">Top 10 tiendas · con productos que manejan</p>
          </div>
          <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-gray-100 text-gray-500 text-[9px] uppercase sticky top-0">
                  <th className="text-left py-1 px-2 w-6">#</th>
                  <th className="text-left py-1 px-2">Tienda</th>
                  <th className="text-right py-1 px-2 w-14">Venta</th>
                  <th className="text-center py-1 px-2 w-10">SKUs</th>
                  <th className="text-left py-1 px-2">Top 5 productos</th>
                </tr>
              </thead>
              <tbody>
                {tiendas.map((t, i) => {
                  const isTop3 = i < 3;
                  return (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className={`py-1 px-2 font-bold ${isTop3 ? "text-[#F5A623]" : "text-gray-400"}`}>{i + 1}</td>
                      <td className={`py-1 px-2 whitespace-nowrap ${isTop3 ? "text-gray-800 font-bold" : "text-gray-700"}`}>
                        MERCO {t.nombre}
                      </td>
                      <td className="py-1 px-2 text-right text-gray-800 font-bold">{fmt(t.venta)}</td>
                      <td className="py-1 px-2 text-center">
                        <span className="bg-blue-50 text-blue-600 font-bold px-1.5 py-0.5 rounded">{t.nProductos}</span>
                      </td>
                      <td className="py-1 px-2">
                        <div className="flex flex-wrap gap-0.5">
                          {t.top5.map((p, j) => (
                            <span
                              key={j}
                              className={`text-[8px] px-1 py-0.5 rounded ${
                                j === 0
                                  ? "bg-red-50 text-red-600 font-semibold"
                                  : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-[8px] text-gray-400 mt-1 text-right">Top 10 de 43 tiendas · Top 5 productos por venta en cada tienda</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
