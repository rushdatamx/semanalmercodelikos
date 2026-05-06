"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin, TrendingUp } from "lucide-react";

const topTiendas = [
  { nombre: "Garcia", codigo: 525, venta: 363845, pct: 4.4, crec: "+40.7%" },
  { nombre: "Buenavista", codigo: 582, venta: 334651, pct: 4.0, crec: "+20.3%" },
  { nombre: "Los Pilares", codigo: 589, venta: 321479, pct: 3.9, crec: "+12.1%" },
  { nombre: "Solidaridad", codigo: 574, venta: 309933, pct: 3.7, crec: "+47.2%" },
  { nombre: "El Jaral", codigo: 598, venta: 307864, pct: 3.7, crec: "+56.2%" },
  { nombre: "Mixcoac", codigo: 573, venta: 307384, pct: 3.7, crec: "+89.8%" },
  { nombre: "Girasoles", codigo: 565, venta: 307190, pct: 3.7, crec: "+22.4%" },
  { nombre: "Colinas", codigo: 578, venta: 296566, pct: 3.6, crec: "+54.2%" },
  { nombre: "San Roque", codigo: 585, venta: 295235, pct: 3.6, crec: "+67.5%" },
  { nombre: "Sendero Sta. Catarina", codigo: 584, venta: 290740, pct: 3.5, crec: "+15.3%" },
];

const bottomTiendas = [
  { nombre: "Hidalgo", venta: 116696 },
  { nombre: "San Buena", venta: 110839 },
  { nombre: "Manantiales", venta: 108818 },
  { nombre: "Paseo Monclova", venta: 95279 },
  { nombre: "Castanos", venta: 78644 },
];

const maxVenta = topTiendas[0].venta;

export default function VtaAbaSlide7TopTiendas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <MapPin className="w-7 h-7 text-[#1A1A1A]" />
        <h2 className="text-3xl font-bold text-gray-800">Top 10 Tiendas Abarrotes</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Ene-Abr 2026 · Distribucion saludable, sin dependencia de pocas tiendas</p>

      <div className="flex gap-5 flex-1">
        {/* Top 10 ranking */}
        <div className="flex-1 space-y-1.5">
          {topTiendas.map((t, i) => {
            const barPct = (t.venta / maxVenta) * 100;
            return (
              <div key={i} className="flex items-center gap-3 animate-count-up" style={{ animationDelay: `${i * 50}ms` }}>
                <span className={`w-6 text-right text-sm font-bold ${i === 0 ? "text-[#F7B500]" : "text-gray-400"}`}>
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
                      className="h-2 rounded-full animate-bar-grow bg-[#1A1A1A]"
                      style={{ width: `${barPct}%`, animationDelay: `${i * 50}ms` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Side panel */}
        <div className="w-[300px] flex flex-col gap-3">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <p className="text-gray-500 text-xs mb-3">Distribucion de venta</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <p className="text-gray-400 text-[9px]">Top 10</p>
                <p className="text-[#1A1A1A] text-2xl font-bold">37.8%</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-[9px]">Resto (30)</p>
                <p className="text-gray-600 text-2xl font-bold">62.2%</p>
              </div>
            </div>
            <p className="text-gray-400 text-[10px] mt-2 text-center">Distribucion saludable — sin dependencia de pocas tiendas</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex-1">
            <p className="text-gray-500 text-xs mb-2">Oportunidades de impulso</p>
            <div className="space-y-2">
              {bottomTiendas.map((t, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-gray-600 text-xs">{t.nombre}</span>
                  <span className="text-[#2E75B6] text-xs font-bold">${(t.venta / 1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-[10px] mt-3">5 tiendas con mayor oportunidad de crecimiento</p>
          </div>

          <div className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-xl px-3 py-2">
            <p className="text-[#27AE60] text-[10px] font-semibold">
              &#9989; 39 de 40 tiendas crecen vs 2025 — crecimiento generalizado
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
