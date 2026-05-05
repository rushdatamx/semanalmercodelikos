"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin, TrendingUp } from "lucide-react";

const topTiendas = [
  { nombre: "Garcia", venta: 380993, pct: 4.0, crec: "+45.7%" },
  { nombre: "Los Pilares", venta: 373280, pct: 4.0, crec: "+23.6%" },
  { nombre: "Buenavista", venta: 362066, pct: 3.8, crec: "+29.1%" },
  { nombre: "Girasoles", venta: 359167, pct: 3.8, crec: "+41.1%" },
  { nombre: "El Jaral", venta: 357154, pct: 3.8, crec: "+75.2%" },
  { nombre: "Sendero Sta. Catarina", venta: 347358, pct: 3.7, crec: "+33.4%" },
  { nombre: "Solidaridad", venta: 336997, pct: 3.6, crec: "+53.9%" },
  { nombre: "San Roque", venta: 324509, pct: 3.4, crec: "+78.4%" },
  { nombre: "Mixcoac", venta: 324158, pct: 3.4, crec: "+94.7%" },
  { nombre: "Montemorelos", venta: 313135, pct: 3.3, crec: "+74.5%" },
];

const bottomTiendas = [
  { nombre: "Israel Cavazos", venta: 126509 },
  { nombre: "Parras", venta: 116919 },
  { nombre: "San Buena", venta: 112077 },
  { nombre: "Manantiales", venta: 109032 },
  { nombre: "Castanos", venta: 78644 },
];

const maxVenta = topTiendas[0].venta;

export default function VtaSlide8TopTiendas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <MapPin className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-3xl font-bold text-gray-800">Top 10 Tiendas</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Ene-Abr 2026 · Venta bien distribuida (ninguna &gt; 4%)</p>

      <div className="flex gap-5 flex-1">
        <div className="flex-1 space-y-1.5">
          {topTiendas.map((t, i) => {
            const barPct = (t.venta / maxVenta) * 100;
            return (
              <div key={i} className="flex items-center gap-3 animate-count-up" style={{ animationDelay: `${i * 50}ms` }}>
                <span className={`w-6 text-right text-sm font-bold ${i === 0 ? "text-[#F5A623]" : "text-gray-400"}`}>
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-sm text-gray-700">MERCO {t.nombre}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[#27AE60] text-xs font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {t.crec}
                      </span>
                      <span className="text-gray-800 font-bold text-sm">${(t.venta / 1000).toFixed(0)}K</span>
                      <span className="text-gray-400 text-xs w-10 text-right">{t.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full animate-bar-grow bg-[#F5A623]"
                      style={{ width: `${barPct}%`, animationDelay: `${i * 50}ms` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[300px] flex flex-col gap-3">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <p className="text-gray-500 text-xs mb-3">Distribucion de venta</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <p className="text-gray-400 text-[9px]">Top 10</p>
                <p className="text-[#F5A623] text-2xl font-bold">36.8%</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-[9px]">Resto (30)</p>
                <p className="text-gray-600 text-2xl font-bold">63.2%</p>
              </div>
            </div>
            <p className="text-gray-400 text-[10px] mt-2 text-center">Buena distribucion — sin dependencia de pocas tiendas</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex-1">
            <p className="text-gray-500 text-xs mb-2">Bottom 5</p>
            <div className="space-y-2">
              {bottomTiendas.map((t, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-gray-600 text-xs">{t.nombre}</span>
                  <span className="text-[#E31837] text-xs font-bold">${(t.venta / 1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-[10px] mt-3">Bottom 5 vende 2.6x menos que Top 5</p>
          </div>

          <div className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-xl px-3 py-2">
            <p className="text-[#27AE60] text-[10px] font-semibold">
              &#9989; 40/40 tiendas crecen vs 2025 — crecimiento generalizado
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
