"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp } from "lucide-react";

const kpis = [
  { label: "Venta Q1 2026", value: "$1.1M", sub: "Ene–Mar 2026" },
  { label: "Venta diaria", value: "261 uds", sub: "promedio cadena" },
  { label: "Tiendas activas", value: "35", sub: "de 40 totales" },
  { label: "Desde", value: "Ene 2026", sub: "categoría nueva" },
];

const ranking = [
  { nombre: "Minicuadro s/Chile 300g", venta: 106100 },
  { nombre: "Papa Desh. Natural 170g", venta: 102131 },
  { nombre: "Rotini s/Chile 300g", venta: 81409 },
  { nombre: "Cacah. Botanero 454g", venta: 76198 },
  { nombre: "Minicuadro c/Chile 300g", venta: 75508 },
  { nombre: "Cacah. Cantinero 454g", venta: 53512 },
  { nombre: "Cacah. Virginia 454g", venta: 53015 },
  { nombre: "Papa Desh. Fuego 170g", venta: 52118 },
  { nombre: "Churrito Rojo 454g", venta: 46152 },
  { nombre: "Rotini c/Chile 300g", venta: 44711 },
  { nombre: "Conchitas 454g", venta: 36648 },
  { nombre: "Cacah. Japonés 454g", venta: 32237 },
];

const maxVenta = ranking[0].venta;

const fmt = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
  return `$${v}`;
};

export default function DiagFyvSlide2Panorama() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#16A085]/10 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-[#16A085]" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">La categoría crece</h2>
          <p className="text-[10px] text-gray-500">Frutas y Verduras en MERCO — panorama general Q1 2026</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-center">
            <p className="text-[10px] text-gray-400 uppercase font-semibold">{k.label}</p>
            <p className="text-2xl font-bold text-[#16A085] mt-1">{k.value}</p>
            <p className="text-[10px] text-gray-500 mt-1">{k.sub}</p>
          </div>
        ))}
      </div>

      {/* Ranking horizontal bars */}
      <p className="text-[10px] text-gray-500 font-semibold uppercase mb-2">Ranking de venta por producto (Q1 2026)</p>
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Left 1-6 */}
        <div className="flex-1 space-y-1.5">
          {ranking.slice(0, 6).map((p, i) => {
            const barPct = (p.venta / maxVenta) * 100;
            return (
              <div key={i} className="flex items-center gap-2">
                <span className={`w-4 text-right text-xs font-bold ${i < 3 ? "text-[#16A085]" : "text-gray-400"}`}>
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className={`text-[11px] ${i < 3 ? "text-gray-800 font-bold" : "text-gray-700"}`}>{p.nombre}</span>
                    <span className="text-gray-800 font-bold text-xs">{fmt(p.venta)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 rounded-full bg-[#16A085]" style={{ width: `${barPct}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Right 7-12 */}
        <div className="flex-1 space-y-1.5">
          {ranking.slice(6).map((p, i) => {
            const rank = i + 7;
            const barPct = (p.venta / maxVenta) * 100;
            return (
              <div key={rank} className="flex items-center gap-2">
                <span className="w-4 text-right text-xs font-bold text-gray-400">{rank}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[11px] text-gray-700">{p.nombre}</span>
                    <span className="text-gray-800 font-bold text-xs">{fmt(p.venta)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 rounded-full bg-[#16A085]/60" style={{ width: `${barPct}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
}
