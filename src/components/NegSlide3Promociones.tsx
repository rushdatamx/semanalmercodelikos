"use client";

import SlideWrapper from "./SlideWrapper";
import { Tag, ArrowUpRight, CheckCircle, TrendingUp } from "lucide-react";

/* ── Row type ── */
interface CompRow {
  label: string;
  uds2025: string;
  uds2026: string;
  precio: string;
  venta: string;
  varUds: string;
  bold?: boolean;
}

/* ── Tostada Roja 70PZ — Ene-Jul, 2026 vs 2025 (unidades reales por mes) ── */
const roja70Rows: CompRow[] = [
  { label: "Ene", uds2025: "17,499", uds2026: "31,734", precio: "$41.26", venta: "$1,309,461", varUds: "+81%" },
  { label: "Feb", uds2025: "23,222", uds2026: "32,807", precio: "$39.99", venta: "$1,311,961", varUds: "+41%" },
  { label: "Mar", uds2025: "29,527", uds2026: "40,254", precio: "$42.43", venta: "$1,708,159", varUds: "+36%" },
  { label: "Abr", uds2025: "24,957", uds2026: "32,020", precio: "$41.27", venta: "$1,321,408", varUds: "+28%" },
  { label: "May", uds2025: "31,568", uds2026: "33,662", precio: "$42.43", venta: "$1,428,122", varUds: "+7%" },
  { label: "Jun", uds2025: "24,305", uds2026: "25,881", precio: "$42.18", venta: "$1,091,699", varUds: "+6%" },
  { label: "Jul", uds2025: "25,211", uds2026: "29,427", precio: "$39.99", venta: "$1,176,735", varUds: "+17%", bold: true },
];

function ComparisonTable({ rows }: { rows: CompRow[] }) {
  return (
    <div className="overflow-auto rounded-lg border border-gray-200 bg-white flex-1">
      <table className="w-full text-[11px]">
        <thead>
          <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase">
            <th className="text-left py-1.5 px-3">Mes</th>
            <th className="text-right py-1.5 px-3">Uds 2025</th>
            <th className="text-right py-1.5 px-3">Uds 2026</th>
            <th className="text-right py-1.5 px-3">Var uds</th>
            <th className="text-right py-1.5 px-3">Precio</th>
            <th className="text-right py-1.5 px-3">Venta 2026</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-gray-50 ${row.bold ? "bg-[#F5A623]/5" : ""}`}>
              <td className={`py-1 px-3 text-gray-700 ${row.bold ? "font-bold" : ""}`}>{row.label}</td>
              <td className="py-1 px-3 text-right text-gray-500">{row.uds2025}</td>
              <td className={`py-1 px-3 text-right ${row.bold ? "text-gray-800 font-bold" : "text-gray-700 font-medium"}`}>
                {row.uds2026}
              </td>
              <td className="py-1 px-3 text-right">
                <span className="text-[10px] font-bold text-[#27AE60]">{row.varUds}</span>
              </td>
              <td className="py-1 px-3 text-right text-gray-600">{row.precio}</td>
              <td className={`py-1 px-3 text-right ${row.bold ? "text-gray-800 font-bold" : "text-gray-600"}`}>
                {row.venta}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-100 font-bold border-t border-gray-200">
            <td className="py-1.5 px-3 text-gray-800">Total</td>
            <td className="py-1.5 px-3 text-right text-gray-600">176,289</td>
            <td className="py-1.5 px-3 text-right text-gray-900">225,785</td>
            <td className="py-1.5 px-3 text-right">
              <span className="text-[10px] font-bold text-[#27AE60]">+28.1%</span>
            </td>
            <td className="py-1.5 px-3 text-right text-gray-600">$41.40</td>
            <td className="py-1.5 px-3 text-right text-gray-900">$9,347,549</td>
          </tr>
        </tfoot>
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
            Tostada Roja 70PZ — El Aumento de Precio Funciono
          </h2>
          <p className="text-[10px] text-gray-500">
            Producto estrella -- Ene-Jul 2026 vs 2025 -- 64% de la venta de Botanas
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
                <p className="text-[10px] text-gray-500">Subimos precio +3.6% y aun asi vendimos +28% mas piezas</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-[#27AE60]" />
            </div>
          </div>

          <div className="px-4 py-3 flex-1 flex flex-col gap-2">
            {/* Price evolution badge */}
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-bold text-gray-600">$39.97</span>
              <span className="text-[11px] text-gray-400">--&gt;</span>
              <span className="text-[13px] font-bold text-[#F5A623]">$41.40</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#F5A623]/10 text-[#F5A623] font-bold">
                +3.6% precio
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-green-100 text-green-700 font-bold">
                +28.1% unidades
              </span>
            </div>

            <ComparisonTable rows={roja70Rows} />
          </div>
        </div>

        {/* RIGHT (1/3): Insights y KPIs */}
        <div className="flex flex-col gap-2.5">
          {/* KPI 1 - venta */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col gap-0.5">
            <p className="text-[10px] text-gray-500 uppercase font-semibold">Venta Ene-Jul</p>
            <p className="text-2xl font-bold text-[#27AE60]">+32.7%</p>
            <p className="text-[10px] text-gray-500">$7.05M --&gt; $9.35M</p>
          </div>

          {/* KPI 2 - volumen */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col gap-0.5">
            <p className="text-[10px] text-gray-500 uppercase font-semibold">Piezas vendidas</p>
            <p className="text-2xl font-bold text-[#27AE60]">+28.1%</p>
            <p className="text-[10px] text-gray-500">176,289 --&gt; 225,785 uds</p>
          </div>

          {/* Badge ejecutivo */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#27AE60] flex-shrink-0" />
              <span className="text-[12px] font-bold text-green-700">
                Aumento absorbido
              </span>
            </div>
            <p className="text-[10px] text-green-700 leading-tight">
              El consumidor pago mas Y compro mas. Gana en los 7 meses del anio. El margen adicional
              cae directo al resultado.
            </p>
          </div>

          {/* Info - vigilancia */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex items-start gap-2">
            <TrendingUp className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
            <p className="text-[10px] text-gray-600 leading-tight">
              <span className="font-bold">A vigilar:</span> el ritmo de crecimiento en piezas se modera
              (+81% en Ene a +6% en Jun, +17% en Jul). Sigue creciendo, pero conviene revisar antes de
              un nuevo ajuste.
            </p>
          </div>
        </div>
      </div>

      {/* Footer veredicto */}
      <div className="mt-3 bg-white rounded-xl border border-green-200 shadow-sm px-4 py-2 flex items-start gap-2">
        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <CheckCircle className="w-3 h-3 text-[#27AE60]" />
        </div>
        <p className="text-[11px] text-gray-700 leading-tight">
          <span className="font-bold text-[#27AE60]">La prueba de que la marca tiene poder de precio:</span>{" "}
          subimos el precio promedio +3.6% y el consumidor de MERCO no solo lo acepto, compro{" "}
          <span className="font-bold">+28.1% mas piezas</span>. La venta del producto estrella crece{" "}
          <span className="font-bold">+32.7%</span> y gana los 7 meses del anio. Mismo patron en Papa 340g:
          +11% de precio sin frenar volumen.
        </p>
      </div>
    </SlideWrapper>
  );
}
