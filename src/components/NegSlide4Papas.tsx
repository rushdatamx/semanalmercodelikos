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
  isHigh?: boolean;
}

/* ── Papa 45g — combined 3 flavors ── */
const papa45Rows: CompRow[] = [
  { label: "Ago 2025", precio: "$12.03", uds: "19,203", venta: "$230,969" },
  { label: "Sep 2025", precio: "$11.13", uds: "10,698", venta: "$119,093" },
  { label: "Oct 2025", precio: "$9.82", uds: "22,322", venta: "$219,109" },
  { label: "Nov 2025", precio: "$9.19", uds: "13,948", venta: "$128,250" },
  { label: "Dic 2025", precio: "$9.25", uds: "22,439", venta: "$207,462" },
  { label: "Ene 2026", precio: "$9.28", uds: "14,730", venta: "$136,622" },
  { label: "Feb 2026", precio: "$9.25", uds: "12,023", venta: "$111,249" },
  { label: "Mar 2026", precio: "$9.20", uds: "17,756", venta: "$163,314" },
  { label: "Abr 2026", precio: "$9.55", uds: "20,399", venta: "$194,710" },
  { label: "May 2026", precio: "$9.22", uds: "35,351", venta: "$325,884" },
  { label: "Jun 2026", precio: "$9.68", uds: "57,175", venta: "$553,683", isHigh: true },
  { label: "Jul 2026", precio: "$10.03", uds: "22,561", venta: "$226,286" },
];

/* ── Papa 340g — combined 3 flavors ── */
const papa340Rows: CompRow[] = [
  { label: "Dic 2025", precio: "$35.18", uds: "389", venta: "$13,683" },
  { label: "Ene 2026", precio: "$46.68", uds: "1,595", venta: "$74,458" },
  { label: "Feb 2026", precio: "$45.76", uds: "1,549", venta: "$70,888" },
  { label: "Mar 2026", precio: "$47.98", uds: "2,664", venta: "$127,809" },
  { label: "Abr 2026", precio: "$53.34", uds: "1,890", venta: "$100,816" },
  { label: "May 2026", precio: "$54.44", uds: "2,370", venta: "$129,013" },
  { label: "Jun 2026", precio: "$54.53", uds: "3,575", venta: "$194,934", isHigh: true },
  { label: "Jul 2026", precio: "$51.70", uds: "2,288", venta: "$118,299" },
];

function ComparisonTable({
  rows,
  total,
}: {
  rows: CompRow[];
  total: { uds: string; venta: string; precio: string };
}) {
  return (
    <div className="overflow-auto rounded-lg border border-gray-200 bg-white flex-1">
      <table className="w-full text-[11px]">
        <thead>
          <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase">
            <th className="text-left py-1.5 px-3"></th>
            <th className="text-right py-1.5 px-3">Precio</th>
            <th className="text-right py-1.5 px-3">Uds/mes</th>
            <th className="text-right py-1.5 px-3">Venta $/mes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-gray-50 ${row.isHigh ? "bg-green-50/50" : ""}`}
            >
              <td className="py-1 px-3 text-gray-700">
                {row.label}
                {row.isHigh && (
                  <span className="ml-1.5 text-[8px] px-1 py-0.5 rounded bg-green-100 text-green-700 font-bold">
                    pico
                  </span>
                )}
              </td>
              <td className="py-1 px-3 text-right text-gray-600">{row.precio}</td>
              <td className="py-1 px-3 text-right text-gray-600">{row.uds}</td>
              <td className="py-1 px-3 text-right text-gray-600">{row.venta}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-[#F5A623]/10 font-bold border-t-2 border-[#F5A623]/30">
            <td className="py-1.5 px-3 text-gray-800 text-[10px]">
              TOTAL 2026
              <span className="block text-[8px] font-normal text-gray-500">Ene-Jul</span>
            </td>
            <td className="py-1.5 px-3 text-right text-gray-600">{total.precio}</td>
            <td className="py-1.5 px-3 text-right text-gray-900">{total.uds}</td>
            <td className="py-1.5 px-3 text-right text-gray-900">{total.venta}</td>
          </tr>
        </tfoot>
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
            3 sabores combinados (Sal, Fuego, Jalapeño) -- Datos mensuales Ago 2025 a Jul 2026
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
            <ComparisonTable rows={papa45Rows} total={{ uds: "179,995", venta: "$1,711,748", precio: "$9.51" }} />

            {/* Insight */}
            <div className="flex items-start gap-1.5">
              <Info className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-[9px] text-gray-500">
                Junio triplico la venta (57,175 uds) tras el surtido de fin de Mayo. Julio baja
                porque se agoto el piso, no la demanda — ver slide "Caso Papa 45g".
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
            <ComparisonTable rows={papa340Rows} total={{ uds: "15,931", venta: "$816,217", precio: "$51.23" }} />

            {/* Trend metrics */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-green-50 rounded-lg px-2.5 py-1 border border-green-200">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-[9px] font-bold text-green-700">
                  Pico Jun: 3,575 uds
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-50 rounded-lg px-2.5 py-1 border border-blue-200">
                <TrendingUp className="w-3 h-3 text-blue-600" />
                <span className="text-[9px] font-bold text-blue-700">
                  De 389 a 2,288 uds/mes
                </span>
              </div>
            </div>

            {/* Insight */}
            <div className="flex items-start gap-1.5 mt-auto">
              <Info className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-[9px] text-gray-500">
                Producto nuevo (Dic 2025) YA CONSOLIDADO: de 389 uds en su primer mes a
                2,288-3,575 uds mensuales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
