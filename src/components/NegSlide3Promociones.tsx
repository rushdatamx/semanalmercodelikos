"use client";

import SlideWrapper from "./SlideWrapper";
import { Tag, ArrowUpRight, ArrowDownRight, CheckCircle, Info } from "lucide-react";

/* ── Tostada Roja 70PZ — Monthly data ── */
interface CompRow {
  label: string;
  precio: string;
  uds: string;
  venta: string;
  bold?: boolean;
  isChange?: boolean;
  isPartial?: boolean;
}

const tostadaRows: CompRow[] = [
  { label: "Ago 2025", precio: "$39.99", uds: "7,230", venta: "$289,128" },
  { label: "Sep 2025", precio: "$39.99", uds: "6,376", venta: "$255,002" },
  { label: "Oct 2025", precio: "$39.99", uds: "7,579", venta: "$303,075" },
  { label: "Nov 2025", precio: "$39.87", uds: "10,268", venta: "$409,401" },
  { label: "Dic 2025", precio: "$40.00", uds: "9,652", venta: "$386,113" },
  { label: "Ene 2026", precio: "$41.26", uds: "7,166", venta: "$295,685" },
  { label: "Feb 2026", precio: "$39.99", uds: "8,202", venta: "$327,990" },
  { label: "Mar 2026", precio: "$42.36", uds: "11,394", venta: "$482,644", bold: true, isPartial: true },
  { label: "Cambio Mar vs Prom", precio: "+5.9%", uds: "+39%", venta: "+46%", isChange: true },
];

/* ── 4BUDDIES — Monthly data ── */
const buddiesRows: CompRow[] = [
  { label: "Oct 2025", precio: "$17.47", uds: "40", venta: "$690" },
  { label: "Nov 2025", precio: "$16.73", uds: "85", venta: "$1,421" },
  { label: "Dic 2025", precio: "$16.69", uds: "65", venta: "$1,078" },
  { label: "Ene 2026", precio: "$16.51", uds: "86", venta: "$1,413" },
  { label: "Feb 2026", precio: "$15.51", uds: "112", venta: "$1,730", bold: true },
  { label: "Mar 2026", precio: "$14.83", uds: "212", venta: "$3,140", bold: true, isPartial: true },
  { label: "Cambio vs pre-desc", precio: "-15%", uds: "+210%", venta: "+174%", isChange: true },
];

function ComparisonTable({ rows, accentColor }: { rows: CompRow[]; accentColor: string }) {
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
                row.isChange
                  ? "bg-gray-100"
                  : row.bold
                  ? "bg-[" + accentColor + "]/5"
                  : ""
              }`}
            >
              <td
                className={`py-1 px-2 text-gray-700 ${
                  row.bold || row.isChange ? "font-bold" : ""
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
                  row.isChange
                    ? row.precio.startsWith("+")
                      ? "text-green-600 font-bold"
                      : row.precio.startsWith("-")
                      ? "text-red-500 font-bold"
                      : "text-gray-800 font-bold"
                    : row.bold
                    ? "text-gray-800 font-bold"
                    : "text-gray-600"
                }`}
              >
                {row.precio}
              </td>
              <td
                className={`py-1 px-2 text-right ${
                  row.isChange
                    ? "text-green-600 font-bold"
                    : row.bold
                    ? "text-gray-800 font-bold"
                    : "text-gray-600"
                }`}
              >
                {row.uds}
              </td>
              <td
                className={`py-1 px-2 text-right ${
                  row.isChange
                    ? "text-green-600 font-bold"
                    : row.bold
                    ? "text-gray-800 font-bold"
                    : "text-gray-600"
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

export default function NegSlide3Promociones() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <Tag className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Impacto de Cambios de Precio y Promociones
          </h2>
          <p className="text-[10px] text-gray-500">
            Decisiones de la junta del 9 de febrero -- Resultados al 8 de marzo
          </p>
        </div>
      </div>

      {/* Two blocks side by side */}
      <div className="grid grid-cols-2 gap-4 flex-1 min-h-0 mt-1">
        {/* LEFT: Tostada Roja 70PZ */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          {/* Block header */}
          <div className="bg-[#F5A623]/5 border-b border-[#F5A623]/10 px-4 py-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-800">
                  Tostada Roja 70PZ
                </p>
                <p className="text-[10px] text-gray-500">Aumento de precio</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#F5A623]" />
            </div>
          </div>

          <div className="px-3 py-2 flex-1 flex flex-col gap-1.5">
            {/* Price change badge */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-gray-600">
                $39.99
              </span>
              <span className="text-[10px] text-gray-400">--&gt;</span>
              <span className="text-[11px] font-bold text-[#F5A623]">
                $42.36
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#F5A623]/10 text-[#F5A623] font-bold">
                +5.9%
              </span>
              <span className="text-[9px] text-gray-400 ml-1">
                Vigencia: 27-Feb al 26-Mar
              </span>
            </div>

            {/* Comparison table */}
            <ComparisonTable rows={tostadaRows} accentColor="#F5A623" />

            {/* Badge + Note */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-green-50 rounded-lg px-2.5 py-1 border border-green-200">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <span className="text-[9px] font-bold text-green-700">
                  Sin elasticidad negativa
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Info className="w-3 h-3 text-gray-400 flex-shrink-0" />
                <p className="text-[8px] text-gray-500">
                  OC de 28 pallets (4-Mar) puede influir
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: 4BUDDIES */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          {/* Block header */}
          <div className="bg-[#F5A623]/5 border-b border-[#F5A623]/10 px-4 py-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-800">4BUDDIES</p>
                <p className="text-[10px] text-gray-500">Descuento 15%</p>
              </div>
              <ArrowDownRight className="w-5 h-5 text-[#F5A623]" />
            </div>
          </div>

          <div className="px-3 py-2 flex-1 flex flex-col gap-1.5">
            {/* Price change badge */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-gray-600">
                ~$16.85
              </span>
              <span className="text-[10px] text-gray-400">--&gt;</span>
              <span className="text-[11px] font-bold text-[#F5A623]">
                ~$14.83
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-100 text-red-600 font-bold">
                -15%
              </span>
              <span className="text-[9px] text-gray-400 ml-1">
                Desde febrero 2026
              </span>
            </div>

            {/* Comparison table */}
            <ComparisonTable rows={buddiesRows} accentColor="#F5A623" />

            {/* Badge + Note */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-green-50 rounded-lg px-2.5 py-1 border border-green-200">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <span className="text-[9px] font-bold text-green-700">
                  Promocion funcionando
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Info className="w-3 h-3 text-gray-400 flex-shrink-0" />
                <p className="text-[8px] text-gray-500">
                  3 Palomitas 25g + 1 Rodajitas 30g
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
