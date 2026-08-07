"use client";

import SlideWrapper from "./SlideWrapper";
import { Tag, ArrowUpRight, CheckCircle } from "lucide-react";

/* ── Row type ── */
interface CompRow {
  label: string;
  uds2025: string;
  uds2026: string;
  varUds: string;
  venta2025: string;
  venta2026: string;
  varVenta: string;
  precio: string;
  bold?: boolean;
}

/* ── Tostada Roja 70PZ — Ene-Jul, 2026 vs 2025 (unidades reales por mes) ── */
const roja70Rows: CompRow[] = [
  { label: "Ene", uds2025: "17,499", uds2026: "31,734", varUds: "+81%", venta2025: "$698,473", venta2026: "$1,309,462", varVenta: "+87%", precio: "$41.26" },
  { label: "Feb", uds2025: "23,222", uds2026: "32,807", varUds: "+41%", venta2025: "$928,648", venta2026: "$1,311,962", varVenta: "+41%", precio: "$39.99" },
  { label: "Mar", uds2025: "29,527", uds2026: "40,254", varUds: "+36%", venta2025: "$1,180,865", venta2026: "$1,708,159", varVenta: "+45%", precio: "$42.43" },
  { label: "Abr", uds2025: "24,957", uds2026: "32,020", varUds: "+28%", venta2025: "$998,040", venta2026: "$1,321,408", varVenta: "+32%", precio: "$41.27" },
  { label: "May", uds2025: "31,568", uds2026: "33,662", varUds: "+7%", venta2025: "$1,262,404", venta2026: "$1,428,123", varVenta: "+13%", precio: "$42.43" },
  { label: "Jun", uds2025: "24,305", uds2026: "25,881", varUds: "+6%", venta2025: "$972,202", venta2026: "$1,091,699", varVenta: "+12%", precio: "$42.18" },
  { label: "Jul", uds2025: "25,211", uds2026: "29,427", varUds: "+17%", venta2025: "$1,005,888", venta2026: "$1,176,736", varVenta: "+17%", precio: "$39.99", bold: true },
];

function ComparisonTable({ rows }: { rows: CompRow[] }) {
  return (
    <div className="overflow-auto rounded-lg border border-gray-200 bg-white flex-1">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="bg-gray-100 text-gray-500 text-[11px] uppercase">
            <th className="text-left py-2 px-2">Mes</th>
            <th className="text-right py-2 px-2">Venta 2025</th>
            <th className="text-right py-2 px-2">Venta 2026</th>
            <th className="text-right py-2 px-2">Var $</th>
            <th className="text-right py-2 px-2">Uds 25</th>
            <th className="text-right py-2 px-2">Uds 26</th>
            <th className="text-right py-2 px-2">Var uds</th>
            <th className="text-right py-2 px-2">Precio</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-gray-50 ${row.bold ? "bg-[#F5A623]/5" : ""}`}>
              <td className={`py-1.5 px-2 text-gray-700 ${row.bold ? "font-bold" : ""}`}>{row.label}</td>
              <td className="py-1.5 px-2 text-right text-gray-500">{row.venta2025}</td>
              <td className={`py-1.5 px-2 text-right ${row.bold ? "text-gray-800 font-bold" : "text-gray-800 font-semibold"}`}>
                {row.venta2026}
              </td>
              <td className="py-1.5 px-2 text-right">
                <span className="text-[12px] font-bold text-[#27AE60]">{row.varVenta}</span>
              </td>
              <td className="py-1.5 px-2 text-right text-gray-500">{row.uds2025}</td>
              <td className="py-1.5 px-2 text-right text-gray-700">{row.uds2026}</td>
              <td className="py-1.5 px-2 text-right">
                <span className="text-[12px] font-bold text-[#27AE60]">{row.varUds}</span>
              </td>
              <td className="py-1.5 px-2 text-right text-gray-600">{row.precio}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-100 font-bold border-t border-gray-200">
            <td className="py-2 px-2 text-gray-800">Total</td>
            <td className="py-2 px-2 text-right text-gray-600">$7,046,520</td>
            <td className="py-2 px-2 text-right text-gray-900">$9,347,549</td>
            <td className="py-2 px-2 text-right">
              <span className="text-[12px] font-bold text-[#27AE60]">+32.7%</span>
            </td>
            <td className="py-2 px-2 text-right text-gray-600">176,289</td>
            <td className="py-2 px-2 text-right text-gray-900">225,785</td>
            <td className="py-2 px-2 text-right">
              <span className="text-[12px] font-bold text-[#27AE60]">+28.1%</span>
            </td>
            <td className="py-2 px-2 text-right text-gray-600">$41.40</td>
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
            Tostada Roja 70PZ — Producto Estrella
          </h2>
          <p className="text-[10px] text-gray-500">
            Ene-Jul 2026 vs 2025 -- 64% de la venta de Botanas
          </p>
        </div>
      </div>

      {/* KPIs en fila */}
      <div className="grid grid-cols-4 gap-3 mb-3">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col gap-0.5">
          <p className="text-[10px] text-gray-500 uppercase font-semibold">Venta Ene-Jul</p>
          <p className="text-2xl font-bold text-[#27AE60]">+32.7%</p>
          <p className="text-[10px] text-gray-500">$7.05M --&gt; $9.35M</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col gap-0.5">
          <p className="text-[10px] text-gray-500 uppercase font-semibold">Piezas vendidas</p>
          <p className="text-2xl font-bold text-[#27AE60]">+28.1%</p>
          <p className="text-[10px] text-gray-500">176,289 --&gt; 225,785 uds</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col gap-0.5">
          <p className="text-[10px] text-gray-500 uppercase font-semibold">Precio promedio</p>
          <p className="text-2xl font-bold text-gray-700">$41.40</p>
          <p className="text-[10px] text-gray-500">Ene-Jul 2026</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-[#27AE60] flex-shrink-0" />
            <span className="text-[11px] font-bold text-green-700">Crecimiento solido</span>
          </div>
          <p className="text-[9px] text-green-700 leading-tight">
            Gana los 7 meses del anio vs 2025, en venta y en piezas. 64% de las Botanas, en las 40 tiendas.
          </p>
        </div>
      </div>

      {/* Tabla ancho completo */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden flex-1 min-h-0">
        <div className="bg-[#F5A623]/5 border-b border-[#F5A623]/10 px-4 py-2 flex items-center justify-between">
          <div>
            <p className="text-base font-bold text-gray-800">Tostada Roja 70PZ</p>
            <p className="text-[10px] text-gray-500">Venta y volumen mes a mes, 2026 vs 2025</p>
          </div>
          <ArrowUpRight className="w-6 h-6 text-[#27AE60]" />
        </div>
        <div className="px-3 py-2 flex-1 flex flex-col min-h-0">
          <ComparisonTable rows={roja70Rows} />
        </div>
      </div>

    </SlideWrapper>
  );
}
