"use client";

import SlideWrapper from "./SlideWrapper";
import { Tag, ArrowUpRight, ArrowDownRight, CheckCircle, Info } from "lucide-react";

/* ── Tostada Roja 70PZ — Price increase data ── */
interface CompRow {
  label: string;
  precio: string;
  uds: string;
  venta: string;
  bold?: boolean;
  isChange?: boolean;
}

const tostadaRows: CompRow[] = [
  { label: "Prom. 6 meses", precio: "$40.18", uds: "8,207", venta: "$329,544" },
  { label: "1era semana Mar", precio: "$42.36", uds: "11,394", venta: "$482,644", bold: true },
  { label: "Cambio", precio: "+5.9%", uds: "+39%", venta: "+46%", isChange: true },
];

/* ── 4BUDDIES — Discount data ── */
const buddiesRows: CompRow[] = [
  { label: "Prom. pre-descuento", precio: "$16.85", uds: "68", venta: "$1,141" },
  { label: "Feb (1er mes)", precio: "$15.51", uds: "111", venta: "$1,729", bold: true },
  { label: "Mar (1era sem)", precio: "$14.83", uds: "211", venta: "$3,131", bold: true },
  { label: "Cambio vs pre", precio: "-15%", uds: "+210%", venta: "+174%", isChange: true },
];

function ComparisonTable({ rows, accentColor }: { rows: CompRow[]; accentColor: string }) {
  return (
    <div className="overflow-auto rounded-lg border border-gray-200 bg-white">
      <table className="w-full text-[10px]">
        <thead>
          <tr className="bg-gray-100 text-gray-500 text-[9px] uppercase">
            <th className="text-left py-1.5 px-2"></th>
            <th className="text-right py-1.5 px-2">Precio</th>
            <th className="text-right py-1.5 px-2">Uds/semana</th>
            <th className="text-right py-1.5 px-2">Venta $/sem</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-gray-50 ${
                row.isChange ? "bg-gray-50" : row.bold ? "bg-[" + accentColor + "]/5" : ""
              }`}
            >
              <td className={`py-1.5 px-2 text-gray-700 ${row.bold || row.isChange ? "font-bold" : ""}`}>
                {row.label}
              </td>
              <td className={`py-1.5 px-2 text-right ${
                row.isChange
                  ? row.precio.startsWith("+")
                    ? "text-green-600 font-bold"
                    : row.precio.startsWith("-")
                    ? "text-red-500 font-bold"
                    : "text-gray-800 font-bold"
                  : row.bold
                  ? "text-gray-800 font-bold"
                  : "text-gray-600"
              }`}>
                {row.precio}
              </td>
              <td className={`py-1.5 px-2 text-right ${
                row.isChange
                  ? "text-green-600 font-bold"
                  : row.bold
                  ? "text-gray-800 font-bold"
                  : "text-gray-600"
              }`}>
                {row.uds}
              </td>
              <td className={`py-1.5 px-2 text-right ${
                row.isChange
                  ? "text-green-600 font-bold"
                  : row.bold
                  ? "text-gray-800 font-bold"
                  : "text-gray-600"
              }`}>
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
    <SlideWrapper className="bg-[#F5F5F5] p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <Tag className="w-6 h-6 text-[#8E44AD]" />
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
      <div className="grid grid-cols-2 gap-4 flex-1 min-h-0 mt-2">
        {/* LEFT: Tostada Roja 70PZ */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          {/* Block header */}
          <div className="bg-[#8E44AD]/5 border-b border-[#8E44AD]/10 px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-800">Tostada Roja 70PZ</p>
                <p className="text-[10px] text-gray-500">Aumento de precio</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#8E44AD]" />
            </div>
          </div>

          <div className="px-4 py-3 flex-1 flex flex-col gap-2.5">
            {/* Price change badge */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-gray-600">$39.99</span>
              <span className="text-[10px] text-gray-400">--&gt;</span>
              <span className="text-[11px] font-bold text-[#8E44AD]">$42.36</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#8E44AD]/10 text-[#8E44AD] font-bold">
                +5.9%
              </span>
            </div>

            <p className="text-[9px] text-gray-400">Vigencia: 27-Feb al 26-Mar</p>

            {/* Comparison table */}
            <ComparisonTable rows={tostadaRows} accentColor="#8E44AD" />

            {/* Badge */}
            <div className="flex items-center gap-1.5 bg-green-50 rounded-lg px-3 py-1.5 border border-green-200">
              <CheckCircle className="w-3.5 h-3.5 text-green-600" />
              <span className="text-[10px] font-bold text-green-700">Sin elasticidad negativa</span>
            </div>

            {/* Note */}
            <div className="flex items-start gap-1.5 mt-auto">
              <Info className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-[9px] text-gray-500">
                El resurtido de 28 pallets (OC 4-Mar) puede influir en disponibilidad
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: 4BUDDIES */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          {/* Block header */}
          <div className="bg-[#8E44AD]/5 border-b border-[#8E44AD]/10 px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-800">4BUDDIES</p>
                <p className="text-[10px] text-gray-500">Descuento 15%</p>
              </div>
              <ArrowDownRight className="w-5 h-5 text-[#8E44AD]" />
            </div>
          </div>

          <div className="px-4 py-3 flex-1 flex flex-col gap-2.5">
            {/* Price change badge */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-gray-600">~$15.73</span>
              <span className="text-[10px] text-gray-400">--&gt;</span>
              <span className="text-[11px] font-bold text-[#8E44AD]">~$13.37</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-100 text-red-600 font-bold">
                -15%
              </span>
            </div>

            <p className="text-[9px] text-gray-400">Vigencia: Desde febrero 2026</p>

            {/* Comparison table */}
            <ComparisonTable rows={buddiesRows} accentColor="#8E44AD" />

            {/* Badge */}
            <div className="flex items-center gap-1.5 bg-green-50 rounded-lg px-3 py-1.5 border border-green-200">
              <CheckCircle className="w-3.5 h-3.5 text-green-600" />
              <span className="text-[10px] font-bold text-green-700">Promocion funcionando</span>
            </div>

            {/* Note */}
            <div className="flex items-start gap-1.5 mt-auto">
              <Info className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-[9px] text-gray-500">
                4 productos: 3 Palomitas 25g + 1 Rodajitas 30g
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
