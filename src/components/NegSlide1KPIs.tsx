"use client";

import SlideWrapper from "./SlideWrapper";
import { BarChart3, Store, Package, TrendingUp, Trophy } from "lucide-react";

/* ── KPI data ── */
const kpis = [
  {
    label: "Venta mensual promedio",
    value: "$2,230,462",
    badge: "+52.6% vs 2025",
    badgeColor: "bg-green-100 text-green-700",
    icon: BarChart3,
  },
  {
    label: "Tiendas activas",
    value: "40 de 41",
    badge: "97.6% cobertura",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: Store,
  },
  {
    label: "SKUs en catalogo",
    value: "32",
    badge: "20 Abarrotes + 12 FyV",
    badgeColor: "bg-purple-100 text-purple-700",
    icon: Package,
  },
];

/* ── Monthly sales table ── */
interface MonthRow {
  mes: string;
  venta: string;
  unidades: string;
  precioPromedio: string;
  highlight?: boolean;
  note?: string;
}

const ventaMensual: MonthRow[] = [
  { mes: "2025-10", venta: "$1,694,851", unidades: "42,175", precioPromedio: "$40.19" },
  { mes: "2025-11", venta: "$2,156,556", unidades: "55,233", precioPromedio: "$39.04" },
  { mes: "2025-12", venta: "$2,129,779", unidades: "55,043", precioPromedio: "$38.69" },
  { mes: "2026-01", venta: "$1,686,665", unidades: "42,039", precioPromedio: "$40.12" },
  { mes: "2026-02", venta: "$1,956,101", unidades: "50,771", precioPromedio: "$38.53" },
  { mes: "2026-03", venta: "$1,393,761", unidades: "33,413", precioPromedio: "$41.72", highlight: true, note: "8 dias" },
];

/* ── Top 5 products ── */
interface TopProduct {
  rank: number;
  nombre: string;
  venta: string;
  share: string;
}

const top5: TopProduct[] = [
  { rank: 1, nombre: "Tostada Roja 70PZ", venta: "$3,172,514", share: "63.0%" },
  { rank: 2, nombre: "Durito Teja 20pzs", venta: "$267,107", share: "5.3%" },
  { rank: 3, nombre: "Tostada Roja 200g", venta: "$186,127", share: "3.7%" },
  { rank: 4, nombre: "Tostada Amarilla 200g", venta: "$186,268", share: "3.7%" },
  { rank: 5, nombre: "Papa Natural 45g", venta: "$149,789", share: "3.0%" },
];

export default function NegSlide1KPIs() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <TrendingUp className="w-6 h-6 text-[#8E44AD]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">Salud del Negocio DELIKOS en MERCO</h2>
          <p className="text-[10px] text-gray-500">Ene-Mar 2026 -- Reporte para Direccion</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#8E44AD]/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#8E44AD]" />
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

      {/* Bottom: Table + Top 5 */}
      <div className="flex gap-3 flex-1 min-h-0">
        {/* Monthly sales table */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Venta mensual (ultimos 6 meses)
          </p>
          <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-[11px]">
              <thead>
                <tr className="bg-gray-100 text-gray-500 text-[9px] uppercase sticky top-0">
                  <th className="text-left py-1.5 px-3">Mes</th>
                  <th className="text-right py-1.5 px-3">Venta $</th>
                  <th className="text-right py-1.5 px-3">Unidades</th>
                  <th className="text-right py-1.5 px-3">Precio prom/ud</th>
                </tr>
              </thead>
              <tbody>
                {ventaMensual.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-50 transition-colors ${
                      row.highlight
                        ? "bg-[#8E44AD]/5 font-bold"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="py-1.5 px-3 text-gray-800 font-medium">
                      <span className={row.highlight ? "font-bold text-[#8E44AD]" : ""}>
                        {row.mes}
                      </span>
                      {row.note && (
                        <span className="ml-1.5 text-[9px] px-1.5 py-0.5 rounded bg-orange-100 text-orange-600 font-bold">
                          {row.note}
                        </span>
                      )}
                    </td>
                    <td className={`py-1.5 px-3 text-right ${row.highlight ? "text-[#8E44AD] font-bold" : "text-gray-800"}`}>
                      {row.venta}
                    </td>
                    <td className={`py-1.5 px-3 text-right ${row.highlight ? "text-[#8E44AD] font-bold" : "text-gray-600"}`}>
                      {row.unidades}
                    </td>
                    <td className={`py-1.5 px-3 text-right ${row.highlight ? "text-[#8E44AD] font-bold" : "text-gray-600"}`}>
                      {row.precioPromedio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">
            Marzo parcial (8 dias). Venta mensual proyectada ~$5.4M
          </p>
        </div>

        {/* Top 5 products mini ranking */}
        <div className="w-[320px] flex flex-col">
          <div className="flex items-center gap-1.5 mb-1">
            <Trophy className="w-4 h-4 text-[#8E44AD]" />
            <p className="text-[10px] text-gray-500 font-semibold uppercase">
              Top 5 Productos · Ene-Mar 2026
            </p>
          </div>
          <div className="flex-1 space-y-1.5">
            {top5.map((p) => (
              <div
                key={p.rank}
                className="bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-2 flex items-center gap-3"
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xs ${
                    p.rank === 1
                      ? "bg-[#8E44AD]"
                      : p.rank <= 3
                      ? "bg-[#8E44AD]/60"
                      : "bg-gray-300"
                  }`}
                >
                  {p.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-gray-800 font-semibold truncate">{p.nombre}</p>
                  <p className="text-[9px] text-gray-500">{p.venta}</p>
                </div>
                <span className="text-sm font-bold text-[#8E44AD] flex-shrink-0">{p.share}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
