"use client";

import SlideWrapper from "./SlideWrapper";
import { Award } from "lucide-react";

const productos = [
  { nombre: "Tostada Roja 70PZ", venta: 5650991, pct: 68.3, crec: "+48.5%", pos: true, isNew: false },
  { nombre: "Durito Teja 20PZ", venta: 453197, pct: 5.5, crec: "-7.2%", pos: false, isNew: false },
  { nombre: "Tostada Amarilla 200g", venta: 302006, pct: 3.6, crec: "+440.5%", pos: true, isNew: false },
  { nombre: "Tostada Roja 200g", venta: 299854, pct: 3.6, crec: "+293.7%", pos: true, isNew: false },
  { nombre: "Papa Natural 45g", venta: 260361, pct: 3.1, crec: "NUEVO", pos: true, isNew: true },
  { nombre: "Cacahuate Mixto Granel", venta: 231112, pct: 2.8, crec: "-23.3%", pos: false, isNew: false },
  { nombre: "Papa Fuego 45g", venta: 187355, pct: 2.3, crec: "NUEVO", pos: true, isNew: true },
  { nombre: "Papa Jalapeno 45g", venta: 175890, pct: 2.1, crec: "NUEVO", pos: true, isNew: true },
  { nombre: "Cacahuate Cantinero Granel", venta: 136225, pct: 1.6, crec: "-42.8%", pos: false, isNew: false },
  { nombre: "Papa Natural 340g", venta: 127607, pct: 1.5, crec: "NUEVO", pos: true, isNew: true },
];

const maxVenta = productos[0].venta;
const topConcentra = productos.reduce((s, p) => s + p.pct, 0);

const formatPesos = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  return `$${(v / 1_000).toFixed(0)}K`;
};

export default function VtaAbaSlide5TopProductos() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Award className="w-7 h-7 text-[#F7B500]" />
        <h2 className="text-3xl font-bold text-gray-800">Top 10 Productos Abarrotes</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Ene-Abr 2026 · Top 10 concentra {topConcentra.toFixed(1)}% del sell-out de Abarrotes</p>

      <div className="flex-1 space-y-1.5">
        {productos.map((p, i) => {
          const barPct = (p.venta / maxVenta) * 100;
          const isFirst = i === 0;
          const crecColor = p.isNew ? "#2E75B6" : p.pos ? "#27AE60" : "#E31837";

          return (
            <div key={i} className="flex items-center gap-3 animate-count-up" style={{ animationDelay: `${i * 60}ms` }}>
              <span className={`w-6 text-right text-sm font-bold ${isFirst ? "text-[#F7B500]" : "text-gray-400"}`}>
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${isFirst ? "text-gray-800 font-bold" : "text-gray-700"}`}>
                      {p.nombre}
                    </span>
                    {p.isNew && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold bg-[#2E75B6]/15 text-[#2E75B6]">
                        NUEVO
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold" style={{ color: crecColor }}>{p.crec}</span>
                    <span className="text-gray-800 font-bold text-sm">{formatPesos(p.venta)}</span>
                    <span className="text-gray-400 text-xs w-12 text-right">{p.pct}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full animate-bar-grow"
                    style={{
                      width: `${barPct}%`,
                      backgroundColor: isFirst ? "#F7B500" : "#F5A623",
                      animationDelay: `${i * 60}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex justify-between items-center bg-[#FDF8F0] rounded-lg px-5 py-3 border border-[#E8DCC8]">
        <span className="text-gray-500 text-sm">5 de 10 productos top son lanzamientos del ano — gran dinamismo de nuevos productos</span>
        <span className="text-[#F7B500] font-bold text-lg">$8.3M</span>
      </div>
    </SlideWrapper>
  );
}
