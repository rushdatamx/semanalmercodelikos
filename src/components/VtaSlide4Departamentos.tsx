"use client";

import SlideWrapper from "./SlideWrapper";
import { Building2 } from "lucide-react";

const departamentos = [
  { nombre: "Abarrotes", v26: 8275105, v25: 5677421, pct: 87.9, skus: 29, color: "#F7B500", crec: "+45.7%" },
  { nombre: "Frutas y Verduras", v26: 1042296, v25: 0, pct: 11.1, skus: 12, color: "#27AE60", crec: "NUEVO" },
  { nombre: "Panaderia", v26: 97850, v25: 205614, pct: 1.0, skus: 3, color: "#2E75B6", crec: "-52.4%" },
];

const maxVal = departamentos[0].v26;

const formatPesos = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  return `$${(v / 1_000).toFixed(0)}K`;
};

export default function VtaSlide4Departamentos() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Building2 className="w-7 h-7 text-[#1A1A1A]" />
        <h2 className="text-3xl font-bold text-gray-800">Venta por Departamento MERCO</h2>
      </div>
      <p className="text-gray-500 text-sm mb-5">Ene-Abr 2026 · Alineado a la estructura del retailer</p>

      <div className="flex gap-5 flex-1">
        <div className="w-[320px] flex flex-col justify-center">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <p className="text-gray-500 text-xs mb-4">Composicion sell-out</p>
            <div className="w-full h-10 rounded-full overflow-hidden flex animate-bar-grow border border-gray-200">
              <div style={{ width: "87.9%", backgroundColor: "#F7B500" }} className="h-full" />
              <div style={{ width: "11.1%", backgroundColor: "#27AE60" }} className="h-full" />
              <div style={{ width: "1.0%", backgroundColor: "#2E75B6" }} className="h-full" />
            </div>
            <div className="flex justify-between mt-3 text-[10px]">
              {departamentos.map((d, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-gray-600 font-semibold">{d.nombre} ({d.pct}%)</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 bg-[#F7B500]/5 border border-[#F7B500]/20 rounded-xl px-4 py-3">
            <p className="text-[#B8860B] text-[11px] font-semibold leading-relaxed">
              Abarrotes domina con 87.9%, pero Frutas y Verduras ya aporta 11.1% siendo departamento nuevo en 2026.
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {departamentos.map((d, i) => {
            const barPct = (d.v26 / maxVal) * 100;
            const isNuevo = d.crec === "NUEVO";
            const isNeg = d.crec.startsWith("-");
            const crecColor = isNuevo ? "#2E75B6" : isNeg ? "#E31837" : "#27AE60";
            const crecBg = isNuevo ? "bg-[#2E75B6]/10 border-[#2E75B6]/20" : isNeg ? "bg-[#E31837]/10 border-[#E31837]/20" : "bg-[#27AE60]/10 border-[#27AE60]/20";
            return (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 animate-count-up" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                    <h3 className="text-lg font-bold text-gray-800">{d.nombre}</h3>
                    <span className="text-gray-400 text-xs">{d.skus} SKUs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${crecBg}`} style={{ color: crecColor }}>
                      {d.crec}
                    </span>
                    <span className="text-gray-800 font-bold text-lg">{formatPesos(d.v26)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full h-3">
                    <div
                      className="h-3 rounded-full animate-bar-grow"
                      style={{ width: `${barPct}%`, backgroundColor: d.color, animationDelay: `${i * 150 + 200}ms` }}
                    />
                  </div>
                  <span className="text-gray-400 text-xs w-12 text-right">{d.pct}%</span>
                </div>
                {d.v25 > 0 && (
                  <p className="text-gray-400 text-[10px] mt-1">vs 2025: {formatPesos(d.v25)}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
}
