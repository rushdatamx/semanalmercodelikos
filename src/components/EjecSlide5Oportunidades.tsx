"use client";

import SlideWrapper from "./SlideWrapper";
import { Target, TrendingUp, BarChart3 } from "lucide-react";

interface OpTienda {
  nombre: string;
  growth: string;
  v25: string;
  v26: string;
}

const growthTiendas: OpTienda[] = [
  { nombre: "Manantiales", growth: "+658%", v25: "$11K", v26: "$84K" },
  { nombre: "MERCO Castaños", growth: "+418%", v25: "$10K", v26: "$53K" },
  { nombre: "MERCO Otilio", growth: "+199%", v25: "$37K", v26: "$111K" },
  { nombre: "MERCO San Buena", growth: "+183%", v25: "$30K", v26: "$86K" },
  { nombre: "MERCO Rosita", growth: "+152%", v25: "$73K", v26: "$183K" },
];

export default function EjecSlide5Oportunidades() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#F5A623]/10 flex items-center justify-center">
          <Target className="w-5 h-5 text-[#F5A623]" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Oportunidades y Proyección</h2>
          <p className="text-[10px] text-gray-500">Fill rate, tiendas en expansión y cierre de abril</p>
        </div>
      </div>

      {/* 3-column layout */}
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Column 1: Fill Rate */}
        <div className="flex-1 flex flex-col">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-2">Fill Rate Actual</p>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#E5E7EB" strokeWidth="12" />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#F5A623"
                  strokeWidth="12"
                  strokeDasharray={`${94.9 * 3.14} ${100 * 3.14}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">94.9%</span>
                <span className="text-[9px] text-gray-400">Tienda-SKU</span>
              </div>
            </div>
            <div className="mt-4 space-y-1.5 w-full">
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-500">Combinaciones con stock</span>
                <span className="font-bold text-gray-800">1,160 / 1,222</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-500">Tiendas monitoreadas</span>
                <span className="font-bold text-gray-800">43</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-500">SKUs en catálogo</span>
                <span className="font-bold text-gray-800">44</span>
              </div>
            </div>
            <div className="mt-3 bg-green-50 rounded-lg px-3 py-1.5 border border-green-200 w-full text-center">
              <p className="text-[9px] text-green-700 font-semibold">
                Fill rate saludable — cobertura casi total
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Top Growth Tiendas */}
        <div className="flex-1 flex flex-col">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-2">Tiendas en Expansión</p>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <p className="text-[10px] text-gray-600 font-semibold">Mayor crecimiento Q1 YoY</p>
            </div>
            <div className="space-y-2.5">
              {growthTiendas.map((t, i) => (
                <div key={i} className="flex items-center justify-between border-b border-gray-50 pb-2">
                  <div>
                    <p className="text-[10px] font-medium text-gray-800">{t.nombre}</p>
                    <p className="text-[9px] text-gray-400">{t.v25} → {t.v26}</p>
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                    {t.growth}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-[9px] text-gray-500">Tienda nueva en 2026:</p>
                <p className="text-[10px] font-bold text-[#F5A623]">MERCO República ($137K)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: April Projection */}
        <div className="flex-1 flex flex-col">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-2">Proyección Abril 2026</p>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-[#F5A623]" />
              <p className="text-[10px] text-gray-600 font-semibold">Cierre estimado del mes</p>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
              <div className="text-center">
                <p className="text-[9px] text-gray-400 uppercase font-semibold">Actual (19 días)</p>
                <p className="text-2xl font-bold text-gray-800">$1.62M</p>
              </div>
              <div className="w-16 h-px bg-gray-200" />
              <div className="text-center bg-[#F5A623]/5 rounded-lg px-4 py-3 border border-[#F5A623]/15">
                <p className="text-[9px] text-[#F5A623] uppercase font-semibold">Proyección 30 días</p>
                <p className="text-3xl font-bold text-[#F5A623]">$2.56M</p>
              </div>
              <div className="w-16 h-px bg-gray-200" />
              <div className="text-center">
                <p className="text-[9px] text-gray-400 uppercase font-semibold">Abr 2025</p>
                <p className="text-lg font-bold text-gray-400">$1.53M</p>
                <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 rounded">
                  +67% YoY proy.
                </span>
              </div>
            </div>

            <div className="mt-3 bg-orange-50 rounded-lg px-3 py-1.5 border border-orange-200 text-center">
              <p className="text-[9px] text-orange-700 font-semibold">
                Tendencia de crecimiento se mantiene en Q2
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
