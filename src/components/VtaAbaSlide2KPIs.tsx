"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp } from "lucide-react";

const months = [
  { mes: "Enero", v26: 1.79, v25: 1.07, var: "+66.8%", pos: true },
  { mes: "Febrero", v26: 1.92, v25: 1.40, var: "+37.2%", pos: true },
  { mes: "Marzo", v26: 2.54, v25: 1.74, var: "+45.5%", pos: true },
  { mes: "Abril", v26: 2.02, v25: 1.49, var: "+35.7%", pos: true },
];

export default function VtaAbaSlide2KPIs() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">KPIs Abarrotes 2026</h2>
      <p className="text-gray-500 text-sm mb-5">Sell-out departamento Abarrotes · Enero - Abril 2026</p>

      <div className="flex items-center gap-8 mb-5">
        <div className="animate-count-up">
          <p className="text-gray-500 text-sm mb-1">Venta acumulada</p>
          <p className="text-6xl font-bold text-[#F5A623] tracking-tight">$8.3M</p>
          <p className="text-gray-400 text-xs mt-1">Ene — Abr 2026</p>
        </div>
        <div className="flex items-center gap-2 bg-[#27AE60]/10 border border-[#27AE60]/20 rounded-xl px-5 py-3 animate-count-up" style={{ animationDelay: "150ms" }}>
          <TrendingUp className="w-5 h-5 text-[#27AE60]" />
          <div>
            <p className="text-[#27AE60] text-2xl font-bold">+44.9%</p>
            <p className="text-gray-500 text-[10px]">vs Ene-Abr 2025 ($5.7M)</p>
          </div>
        </div>
        <div className="flex-1" />
        {months.map((m, i) => (
          <div key={i} className="text-right animate-count-up" style={{ animationDelay: `${300 + i * 120}ms` }}>
            <p className="text-gray-500 text-xs mb-1">{m.mes}</p>
            <p className="text-2xl font-bold text-gray-800">${m.v26}M</p>
            <div className="flex items-center justify-end gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-[#27AE60]" />
              <span className="text-sm font-bold text-[#27AE60]">{m.var}</span>
              <span className="text-gray-400 text-[10px]">vs ${m.v25}M</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 flex-1">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex-1">
          <p className="text-gray-500 text-xs mb-3">KPIs clave</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-gray-400 text-[10px] mb-1">Tiendas activas</p>
              <p className="text-3xl font-bold text-gray-800">40</p>
              <p className="text-gray-400 text-[9px]">100% del universo</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-[10px] mb-1">SKUs con venta</p>
              <p className="text-3xl font-bold text-gray-800">20</p>
              <p className="text-gray-400 text-[9px]">100% del catalogo</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-[10px] mb-1">Unidades vendidas</p>
              <p className="text-3xl font-bold text-gray-800">270.2K</p>
              <p className="text-gray-400 text-[9px]">Ene — Abr 2026</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-[10px] mb-1">Precio prom/ud</p>
              <p className="text-3xl font-bold text-gray-800">$30.6</p>
              <p className="text-gray-400 text-[9px]">Sell-out promedio</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-xl px-5 py-2">
        <p className="text-[#27AE60] text-[11px] font-semibold">
          &#9989; Los 4 meses crecen vs 2025. 39 de 40 tiendas crecen — crecimiento generalizado en toda la cadena.
        </p>
      </div>
    </SlideWrapper>
  );
}
