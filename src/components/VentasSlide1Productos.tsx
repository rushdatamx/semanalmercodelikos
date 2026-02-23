"use client";

import SlideWrapper from "./SlideWrapper";
import { Award, TrendingUp } from "lucide-react";

const productos = [
  { nombre: "Tostada Roja 70PZ", venta26: 2521825, venta25: 1627044, pct: 64.2, color: "#E74C3C" },
  { nombre: "Durito Teja 20pzs", venta26: 184826, venta25: 282690, pct: 4.7, color: "#F5A623" },
  { nombre: "Tostada Roja 200g", venta26: 140401, venta25: 0, pct: 3.6, color: "#E74C3C" },
  { nombre: "Tostada Amarilla 200g", venta26: 135748, venta25: 0, pct: 3.5, color: "#E74C3C" },
  { nombre: "Papa Casera Natural 45gr", venta26: 100867, venta25: 0, pct: 2.6, color: "#3B82F6" },
  { nombre: "Cacahuate Mixto Granel", venta26: 97100, venta25: 55285, pct: 2.5, color: "#9CA3AF" },
  { nombre: "Papa Casera Jalapeño 45gr", venta26: 82086, venta25: 0, pct: 2.1, color: "#3B82F6" },
  { nombre: "Papa Casera Fuego 45gr", venta26: 73855, venta25: 0, pct: 1.9, color: "#3B82F6" },
  { nombre: "Cacahuate Japonés Granel", venta26: 64270, venta25: 39474, pct: 1.6, color: "#9CA3AF" },
  { nombre: "Papa Casera Sal 340gr", venta26: 54629, venta25: 0, pct: 1.4, color: "#F5A623" },
  { nombre: "Papa Casera Jalapeño 340gr", venta26: 46975, venta25: 0, pct: 1.2, color: "#F5A623" },
  { nombre: "Papa Casera Fuego 340gr", venta26: 38844, venta25: 0, pct: 1.0, color: "#F5A623" },
];

const maxVenta = productos[0].venta26;
const total26 = 3925746;
const total25 = 2588426;

const fmt = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
  return `$${v}`;
};

const fmtVar = (v26: number, v25: number) => {
  if (v25 === 0) return "Nuevo";
  const pct = ((v26 - v25) / v25) * 100;
  if (pct < 0) return `${pct.toFixed(0)}%`;
  return `+${pct.toFixed(0)}%`;
};

const tagMap: Record<string, { label: string; bg: string; text: string }> = {
  "#E74C3C": { label: "Tostada", bg: "#E74C3C20", text: "#C0392B" },
  "#F5A623": { label: "Papa 340g", bg: "#F5A62320", text: "#B8860B" },
  "#3B82F6": { label: "Papa 45g", bg: "#3B82F620", text: "#2563EB" },
  "#9CA3AF": { label: "Otros", bg: "#9CA3AF20", text: "#6B7280" },
};

export default function VentasSlide1Productos() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Award className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Venta por Producto — MERCO</h2>
      </div>
      <p className="text-sm text-gray-500 mb-1">
        Ene – Feb 2026 vs Ene – Feb 2025 · Venta sell-out · Top 12 productos
      </p>

      {/* Comparativo general */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-gray-200 shadow-sm">
          <TrendingUp className="w-4 h-4 text-[#27AE60]" />
          <span className="text-xs text-gray-600">Ene–Feb 2026: <span className="font-bold text-gray-800">{fmt(total26)}</span></span>
          <span className="text-gray-300">|</span>
          <span className="text-xs text-gray-400">Ene–Feb 2025: {fmt(total25)}</span>
          <span className="text-xs font-bold text-[#27AE60]">+51.7%</span>
        </div>
      </div>

      <div className="flex gap-6 flex-1">
        {/* Left column: ranks 1-6 */}
        <div className="flex-1 space-y-1.5">
          {productos.slice(0, 6).map((p, i) => {
            const barPct = (p.venta26 / maxVenta) * 100;
            const isFirst = i === 0;
            const tag = tagMap[p.color];
            const varLabel = fmtVar(p.venta26, p.venta25);
            const isNew = p.venta25 === 0;
            const isNeg = p.venta25 > 0 && p.venta26 < p.venta25;

            return (
              <div key={i} className="flex items-center gap-2">
                <span className={`w-5 text-right text-sm font-bold ${isFirst ? "text-[#F5A623]" : "text-gray-400"}`}>
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[11px] ${isFirst ? "text-gray-800 font-bold" : "text-gray-700"}`}>
                        {p.nombre}
                      </span>
                      <span
                        className="text-[8px] px-1 py-0.5 rounded font-semibold"
                        style={{ backgroundColor: tag.bg, color: tag.text }}
                      >
                        {tag.label}
                      </span>
                      <span className={`text-[8px] px-1 py-0.5 rounded font-semibold ${isNew ? "bg-blue-100 text-blue-600" : isNeg ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700"}`}>
                        {varLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800 font-bold text-xs">{fmt(p.venta26)}</span>
                      <span className="text-gray-400 text-[10px] w-10 text-right">{p.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${barPct}%`, backgroundColor: p.color }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right column: ranks 7-12 */}
        <div className="flex-1 space-y-1.5">
          {productos.slice(6).map((p, i) => {
            const barPct = (p.venta26 / maxVenta) * 100;
            const rank = i + 7;
            const tag = tagMap[p.color];
            const varLabel = fmtVar(p.venta26, p.venta25);
            const isNew = p.venta25 === 0;

            return (
              <div key={rank} className="flex items-center gap-2">
                <span className="w-5 text-right text-sm font-bold text-gray-400">
                  {rank}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-gray-700">{p.nombre}</span>
                      <span
                        className="text-[8px] px-1 py-0.5 rounded font-semibold"
                        style={{ backgroundColor: tag.bg, color: tag.text }}
                      >
                        {tag.label}
                      </span>
                      <span className={`text-[8px] px-1 py-0.5 rounded font-semibold ${isNew ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-700"}`}>
                        {varLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800 font-bold text-xs">{fmt(p.venta26)}</span>
                      <span className="text-gray-400 text-[10px] w-10 text-right">{p.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${barPct}%`, backgroundColor: p.color }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2.5 text-center">
          <p className="text-[9px] text-gray-400 mb-0.5">Tostada Roja 70PZ</p>
          <p className="text-lg font-bold text-[#E74C3C]">64.2%</p>
          <p className="text-[9px] text-gray-500">$2.5M · +55% vs 25</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2.5 text-center">
          <p className="text-[9px] text-gray-400 mb-0.5">Tostadas (3 SKUs)</p>
          <p className="text-lg font-bold text-[#E74C3C]">71.3%</p>
          <p className="text-[9px] text-gray-500">$2.8M combinados</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2.5 text-center">
          <p className="text-[9px] text-gray-400 mb-0.5">Papa 45g (3 sabores)</p>
          <p className="text-lg font-bold text-blue-600">6.5%</p>
          <p className="text-[9px] text-gray-500">$257K · Nuevos</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2.5 text-center">
          <p className="text-[9px] text-gray-400 mb-0.5">Papa 340g (3 sabores)</p>
          <p className="text-lg font-bold text-[#B8860B]">3.6%</p>
          <p className="text-[9px] text-gray-500">$140K · Nuevos</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
