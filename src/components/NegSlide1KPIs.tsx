"use client";

import SlideWrapper from "./SlideWrapper";
import { BarChart3, Store, TrendingUp, Trophy, MapPin } from "lucide-react";

/* ── KPI Cards ── */
const kpis = [
  {
    label: "Venta Ene-Feb 2026",
    value: "$4,079,433",
    badge: "+57.6% vs Ene-Feb 2025",
    badgeColor: "bg-green-100 text-green-700",
    icon: BarChart3,
  },
  {
    label: "Tiendas activas",
    value: "40",
    badge: "100% cobertura",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: Store,
  },
];

/* ── Monthly sales pivot: rows=month, columns=year ── */
interface MonthPivot {
  mes: string;
  v2025: number;
  v2026: number | null;
  note2026?: string;
}

const ventaPivot: MonthPivot[] = [
  { mes: "Ene", v2025: 1136569, v2026: 1934057 },
  { mes: "Feb", v2025: 1451855, v2026: 2145375 },
  { mes: "Mar", v2025: 1797487, v2026: 957094, note2026: "8 dias" },
  { mes: "Abr", v2025: 1530968, v2026: null },
  { mes: "May", v2025: 1871875, v2026: null },
  { mes: "Jun", v2025: 1498686, v2026: null },
  { mes: "Jul", v2025: 1514628, v2026: null },
  { mes: "Ago", v2025: 2209936, v2026: null },
  { mes: "Sep", v2025: 1982935, v2026: null },
  { mes: "Oct", v2025: 2036693, v2026: null },
  { mes: "Nov", v2025: 2508032, v2026: null },
  { mes: "Dic", v2025: 2435668, v2026: null },
];

const fmt = (n: number) =>
  "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

const pctChange = (v26: number, v25: number) => {
  const delta = (v26 / v25 - 1) * 100;
  return delta >= 0 ? `+${delta.toFixed(0)}%` : `${delta.toFixed(0)}%`;
};

/* ── Top 5 products ── */
const top5Productos = [
  { rank: 1, nombre: "Tostada Roja 70PZ", venta: "$3,172,514", share: "63.0%" },
  { rank: 2, nombre: "Durito Teja 20pzs", venta: "$267,107", share: "5.3%" },
  { rank: 3, nombre: "Tostada Amarilla 200g", venta: "$186,268", share: "3.7%" },
  { rank: 4, nombre: "Tostada Roja 200g", venta: "$186,127", share: "3.7%" },
  { rank: 5, nombre: "Papa Natural 45g", venta: "$149,789", share: "3.0%" },
];

/* ── Top 5 tiendas ── */
const top5Tiendas = [
  { rank: 1, nombre: "MERCO Garcia", venta: "$216,128" },
  { rank: 2, nombre: "MERCO Los Pilares", venta: "$207,903" },
  { rank: 3, nombre: "MERCO Girasoles", venta: "$189,485" },
  { rank: 4, nombre: "MERCO Mixcoac", venta: "$188,956" },
  { rank: 5, nombre: "MERCO Buenavista", venta: "$188,875" },
];

export default function NegSlide1KPIs() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <TrendingUp className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">Salud del Negocio DELIKOS en MERCO</h2>
          <p className="text-[10px] text-gray-500">Ene-Mar 2026 -- Reporte para Direccion</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#F5A623]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500 uppercase font-semibold">{kpi.label}</p>
                <p className="text-lg font-bold text-gray-800 leading-tight">{kpi.value}</p>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${kpi.badgeColor}`}>
                  {kpi.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main content: Pivot table + Rankings */}
      <div className="flex gap-3 flex-1 min-h-0">
        {/* Pivot table */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Venta mensual comparativa 2025 vs 2026
          </p>
          <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-gray-100 text-gray-500 text-[9px] uppercase sticky top-0">
                  <th className="text-left py-1.5 px-2">Mes</th>
                  <th className="text-right py-1.5 px-2">2025</th>
                  <th className="text-right py-1.5 px-2">2026</th>
                  <th className="text-right py-1.5 px-2">Var %</th>
                </tr>
              </thead>
              <tbody>
                {ventaPivot.map((row, i) => {
                  const has2026 = row.v2026 !== null && row.v2026 > 0;
                  const isPartial = row.note2026 !== undefined;
                  const isHighlight = has2026;
                  return (
                    <tr
                      key={i}
                      className={`border-b border-gray-50 ${
                        isPartial ? "bg-[#F5A623]/5 font-bold" : has2026 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="py-1 px-2 text-gray-700 font-medium">
                        {row.mes}
                        {isPartial && (
                          <span className="ml-1 text-[8px] px-1 py-0.5 rounded bg-orange-100 text-orange-600 font-bold">
                            {row.note2026}
                          </span>
                        )}
                      </td>
                      <td className="py-1 px-2 text-right text-gray-600">{fmt(row.v2025)}</td>
                      <td className={`py-1 px-2 text-right ${isHighlight ? "text-gray-800 font-semibold" : "text-gray-300"}`}>
                        {has2026 ? fmt(row.v2026!) : "—"}
                      </td>
                      <td className="py-1 px-2 text-right">
                        {has2026 && !isPartial ? (
                          <span className={`text-[9px] font-bold ${row.v2026! >= row.v2025 ? "text-green-600" : "text-red-500"}`}>
                            {pctChange(row.v2026!, row.v2025)}
                          </span>
                        ) : has2026 && isPartial ? (
                          <span className="text-[9px] text-gray-400">parcial</span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-gray-100 font-bold border-t border-gray-200">
                  <td className="py-1.5 px-2 text-gray-800">Total</td>
                  <td className="py-1.5 px-2 text-right text-gray-800">
                    {fmt(ventaPivot.reduce((s, r) => s + r.v2025, 0))}
                  </td>
                  <td className="py-1.5 px-2 text-right text-gray-800">
                    {fmt(ventaPivot.reduce((s, r) => s + (r.v2026 ?? 0), 0))}
                  </td>
                  <td className="py-1.5 px-2 text-right">
                    <span className="text-[9px] text-gray-400">parcial</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Right side: Top 5 Productos + Top 5 Tiendas */}
        <div className="w-[300px] flex flex-col gap-2">
          {/* Top 5 Productos */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center gap-1.5 mb-1">
              <Trophy className="w-3.5 h-3.5 text-[#F5A623]" />
              <p className="text-[10px] text-gray-500 font-semibold uppercase">Top 5 Productos</p>
            </div>
            <div className="space-y-1">
              {top5Productos.map((p) => (
                <div key={p.rank} className="bg-white rounded-lg border border-gray-200 shadow-sm px-2.5 py-1.5 flex items-center gap-2">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-[9px] ${
                      p.rank === 1 ? "bg-[#F5A623]" : p.rank <= 3 ? "bg-[#F5A623]/60" : "bg-gray-300"
                    }`}
                  >
                    {p.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-gray-800 font-semibold truncate">{p.nombre}</p>
                    <p className="text-[8px] text-gray-400">{p.venta}</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#F5A623] flex-shrink-0">{p.share}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top 5 Tiendas */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
              <p className="text-[10px] text-gray-500 font-semibold uppercase">Top 5 Tiendas</p>
            </div>
            <div className="space-y-1">
              {top5Tiendas.map((t) => (
                <div key={t.rank} className="bg-white rounded-lg border border-gray-200 shadow-sm px-2.5 py-1.5 flex items-center gap-2">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-[9px] ${
                      t.rank === 1 ? "bg-[#F5A623]" : t.rank <= 3 ? "bg-[#F5A623]/60" : "bg-gray-300"
                    }`}
                  >
                    {t.rank}
                  </div>
                  <p className="text-[10px] text-gray-800 font-semibold truncate flex-1">{t.nombre}</p>
                  <span className="text-[10px] font-bold text-gray-600 flex-shrink-0">{t.venta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
