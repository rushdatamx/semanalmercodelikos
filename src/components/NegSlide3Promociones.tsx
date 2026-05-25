"use client";

import SlideWrapper from "./SlideWrapper";
import { Tag, ArrowUpRight, CheckCircle, Info, TrendingUp } from "lucide-react";

/* ── Row type ── */
interface CompRow {
  label: string;
  precio: string;
  uds: string;
  venta: string;
  bold?: boolean;
  isPartial?: boolean;
}

/* ── Tostada Roja 70PZ — desde Ago 2025 ── */
const roja70Rows: CompRow[] = [
  { label: "Ago 2025", precio: "$39.99", uds: "7,230", venta: "$289,128" },
  { label: "Sep 2025", precio: "$39.99", uds: "6,376", venta: "$255,002" },
  { label: "Oct 2025", precio: "$39.99", uds: "7,579", venta: "$303,075" },
  { label: "Nov 2025", precio: "$39.87", uds: "10,268", venta: "$409,401" },
  { label: "Dic 2025", precio: "$40.00", uds: "9,652", venta: "$386,113" },
  { label: "Ene 2026", precio: "$41.26", uds: "7,166", venta: "$295,685" },
  { label: "Feb 2026", precio: "$39.99", uds: "8,202", venta: "$327,990" },
  { label: "Mar 2026", precio: "$42.43", uds: "9,090", venta: "$385,713" },
  { label: "Abr 2026", precio: "$41.27", uds: "7,471", venta: "$308,329" },
  { label: "May 2026", precio: "$42.39", uds: "7,036", venta: "$298,260", bold: true, isPartial: true },
];

function ComparisonTable({ rows }: { rows: CompRow[] }) {
  return (
    <div className="overflow-auto rounded-lg border border-gray-200 bg-white flex-1">
      <table className="w-full text-[11px]">
        <thead>
          <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase">
            <th className="text-left py-1.5 px-3"></th>
            <th className="text-right py-1.5 px-3">Precio</th>
            <th className="text-right py-1.5 px-3">Uds/sem</th>
            <th className="text-right py-1.5 px-3">Venta $/sem</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-gray-50 ${row.bold ? "bg-[#F5A623]/5" : ""}`}
            >
              <td className={`py-1 px-3 text-gray-700 ${row.bold ? "font-bold" : ""}`}>
                {row.label}
                {row.isPartial && (
                  <span className="ml-1.5 text-[8px] px-1 py-0.5 rounded bg-orange-100 text-orange-600 font-bold">
                    23 dias
                  </span>
                )}
              </td>
              <td className={`py-1 px-3 text-right ${row.bold ? "text-gray-800 font-bold" : "text-gray-600"}`}>
                {row.precio}
              </td>
              <td className={`py-1 px-3 text-right ${row.bold ? "text-gray-800 font-bold" : "text-gray-600"}`}>
                {row.uds}
              </td>
              <td className={`py-1 px-3 text-right ${row.bold ? "text-gray-800 font-bold" : "text-gray-600"}`}>
                {row.venta}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NegSlide3Promociones() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Tag className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Tostada Roja 70PZ — Impacto de Aumento de Precio
          </h2>
          <p className="text-[10px] text-gray-500">
            Producto estrella -- Datos semanalizados desde Ago 2025
          </p>
        </div>
      </div>

      {/* Main content: tabla a la izquierda, insights a la derecha */}
      <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
        {/* LEFT (2/3): Tarjeta con tabla */}
        <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          <div className="bg-[#F5A623]/5 border-b border-[#F5A623]/10 px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-bold text-gray-800">Tostada Roja 70PZ</p>
                <p className="text-[10px] text-gray-500">Aumento de precio sostenido desde Mar 2026</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-green-600" />
            </div>
          </div>

          <div className="px-4 py-3 flex-1 flex flex-col gap-2">
            {/* Price evolution badge */}
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-bold text-gray-600">$39.99</span>
              <span className="text-[11px] text-gray-400">--&gt;</span>
              <span className="text-[13px] font-bold text-[#F5A623]">$42.39</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#F5A623]/10 text-[#F5A623] font-bold">
                +6.0%
              </span>
              <span className="text-[10px] text-gray-400 ml-1">
                Vigencia: desde 27-Feb 2026
              </span>
            </div>

            <ComparisonTable rows={roja70Rows} />
          </div>
        </div>

        {/* RIGHT (1/3): Insights y KPIs */}
        <div className="flex flex-col gap-3">
          {/* KPI 1 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col gap-1">
            <p className="text-[10px] text-gray-500 uppercase font-semibold">Venta $/sem promedio</p>
            <p className="text-2xl font-bold text-[#F5A623]">+18.6%</p>
            <p className="text-[10px] text-gray-500">vs promedio 2025</p>
          </div>

          {/* KPI 2 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col gap-1">
            <p className="text-[10px] text-gray-500 uppercase font-semibold">Uds/sem Mar-May</p>
            <p className="text-2xl font-bold text-gray-800">7.0K - 9.1K</p>
            <p className="text-[10px] text-gray-500">Mismo rango pre-aumento (7K-9K)</p>
          </div>

          {/* Badge ejecutivo */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-[12px] font-bold text-green-700">
                Aumento aceptado
              </span>
            </div>
            <p className="text-[10px] text-green-700 leading-tight">
              Sin afectacion al volumen tras +6% en precio. Margen para revisar precio nuevamente en H2.
            </p>
          </div>

          {/* Info */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex items-start gap-2">
            <TrendingUp className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
            <p className="text-[10px] text-gray-600 leading-tight">
              <span className="font-bold">Producto estrella:</span> Tostada Roja 70PZ representa el 69% de toda la venta de Abarrotes en MERCO.
            </p>
          </div>
        </div>
      </div>

      {/* Footer veredicto */}
      <div className="mt-3 bg-white rounded-xl border border-[#F5A623]/20 shadow-sm px-4 py-2 flex items-start gap-2">
        <div className="w-4 h-4 rounded-full bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-[9px] font-bold text-[#F5A623]">i</span>
        </div>
        <p className="text-[11px] text-gray-700 leading-tight">
          <span className="font-bold text-[#F5A623]">El aumento de precio funciono:</span>{" "}
          el consumidor de MERCO acepto el +6% sin reducir compra. Uds/sem se mantienen entre 7K y 9K, igual que antes del ajuste. Venta $/sem +18.6% vs promedio 2025 — el margen adicional cae directo al resultado.
        </p>
      </div>
    </SlideWrapper>
  );
}
