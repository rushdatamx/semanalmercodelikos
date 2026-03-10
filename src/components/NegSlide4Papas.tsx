"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, Info } from "lucide-react";

/* ── Row type ── */
interface CompRow {
  label: string;
  precio: string;
  uds: string;
  venta: string;
  bold?: boolean;
  isPartial?: boolean;
}

/* ── Papa 45g — combined 3 flavors ── */
const papa45Rows: CompRow[] = [
  { label: "Ago 2025", precio: "$12.03", uds: "4,336", venta: "$52,154" },
  { label: "Sep 2025", precio: "$11.13", uds: "2,496", venta: "$27,788" },
  { label: "Oct 2025", precio: "$9.98", uds: "5,187", venta: "$51,769" },
  { label: "Nov 2025", precio: "$9.50", uds: "3,418", venta: "$32,477" },
  { label: "Dic 2025", precio: "$9.38", uds: "5,178", venta: "$48,581" },
  { label: "Ene 2026", precio: "$9.34", uds: "3,629", venta: "$33,899" },
  { label: "Feb 2026", precio: "$9.18", uds: "3,145", venta: "$28,865" },
  { label: "Mar 2026", precio: "$9.25", uds: "5,085", venta: "$47,011", bold: true, isPartial: true },
];

/* ── Papa 340g — combined 3 flavors ── */
const papa340Rows: CompRow[] = [
  { label: "Dic 2025", precio: "$35.18", uds: "88", venta: "$3,090" },
  { label: "Ene 2026", precio: "$46.68", uds: "360", venta: "$16,813" },
  { label: "Feb 2026", precio: "$45.76", uds: "387", venta: "$17,722" },
  { label: "Mar 2026", precio: "$46.34", uds: "591", venta: "$27,371", bold: true, isPartial: true },
];

function ComparisonTable({ rows }: { rows: CompRow[] }) {
  return (
    <div className="overflow-auto rounded-lg border border-gray-200 bg-white flex-1">
      <table className="w-full text-[10px]">
        <thead>
          <tr className="bg-gray-100 text-gray-500 text-[9px] uppercase">
            <th className="text-left py-1 px-2"></th>
            <th className="text-right py-1 px-2">Precio</th>
            <th className="text-right py-1 px-2">Uds/sem</th>
            <th className="text-right py-1 px-2">Venta $/sem</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-gray-50 ${
                row.bold ? "bg-[#F5A623]/5" : ""
              }`}
            >
              <td
                className={`py-1 px-2 text-gray-700 ${
                  row.bold ? "font-bold" : ""
                }`}
              >
                {row.label}
                {row.isPartial && (
                  <span className="ml-1 text-[8px] px-1 py-0.5 rounded bg-orange-100 text-orange-600 font-bold">
                    8 dias
                  </span>
                )}
              </td>
              <td
                className={`py-1 px-2 text-right ${
                  row.bold ? "text-gray-800 font-bold" : "text-gray-600"
                }`}
              >
                {row.precio}
              </td>
              <td
                className={`py-1 px-2 text-right ${
                  row.bold ? "text-gray-800 font-bold" : "text-gray-600"
                }`}
              >
                {row.uds}
              </td>
              <td
                className={`py-1 px-2 text-right ${
                  row.bold ? "text-gray-800 font-bold" : "text-gray-600"
                }`}
              >
                {row.venta}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NegSlide4Papas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <TrendingUp className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Tendencia Papa Casera — 45g y 340g
          </h2>
          <p className="text-[10px] text-gray-500">
            3 sabores combinados (Sal, Fuego, Jalapeño) -- Datos semanalizados
          </p>
        </div>
      </div>

      {/* Two blocks side by side */}
      <div className="grid grid-cols-2 gap-4 flex-1 min-h-0 mt-1">
        {/* LEFT: Papa 45g */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          <div className="bg-[#F5A623]/5 border-b border-[#F5A623]/10 px-4 py-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-800">
                  Papa Casera 45g
                </p>
                <p className="text-[10px] text-gray-500">
                  3 sabores · Desde agosto 2025
                </p>
              </div>
              <TrendingUp className="w-5 h-5 text-[#F5A623]" />
            </div>
          </div>

          <div className="px-3 py-2 flex-1 flex flex-col gap-1.5">
            {/* Price stabilization note */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-gray-600">
                $12.03
              </span>
              <span className="text-[10px] text-gray-400">--&gt;</span>
              <span className="text-[11px] font-bold text-[#F5A623]">
                $9.25
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-100 text-red-600 font-bold">
                -23%
              </span>
              <span className="text-[9px] text-gray-400 ml-1">
                Estable desde Nov 2025
              </span>
            </div>

            <ComparisonTable rows={papa45Rows} />

            {/* Insight */}
            <div className="flex items-start gap-1.5">
              <Info className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-[9px] text-gray-500">
                Precio estabilizado en ~$9.25. Unidades fluctúan pero marzo
                muestra repunte (5,085/sem vs 3,145 en feb).
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Papa 340g */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          <div className="bg-[#F5A623]/5 border-b border-[#F5A623]/10 px-4 py-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-800">
                  Papa Casera 340g
                </p>
                <p className="text-[10px] text-gray-500">
                  3 sabores · Producto nuevo desde Dic 2025
                </p>
              </div>
              <TrendingUp className="w-5 h-5 text-[#F5A623]" />
            </div>
          </div>

          <div className="px-3 py-2 flex-1 flex flex-col gap-1.5">
            {/* Price note */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-[#F5A623]">
                $46.34
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-600 font-bold">
                Nuevo
              </span>
              <span className="text-[9px] text-gray-400 ml-1">
                Precio estable desde enero 2026
              </span>
            </div>

            <ComparisonTable rows={papa340Rows} />

            {/* Growth metrics */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-green-50 rounded-lg px-2.5 py-1 border border-green-200">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-[9px] font-bold text-green-700">
                  +64% uds/sem Mar vs Feb
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-green-50 rounded-lg px-2.5 py-1 border border-green-200">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-[9px] font-bold text-green-700">
                  +54% venta $/sem
                </span>
              </div>
            </div>

            {/* Insight */}
            <div className="flex items-start gap-1.5 mt-auto">
              <Info className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-[9px] text-gray-500">
                Crecimiento sostenido mes a mes desde su entrada. Marzo
                proyecta ser el mejor mes en unidades y venta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
