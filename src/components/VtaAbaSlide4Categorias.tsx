"use client";

import SlideWrapper from "./SlideWrapper";
import { Layers } from "lucide-react";

const categorias = [
  { nombre: "Tostada Roja 70PZ", venta: 5650991, pct: 68.3, crec: "+48.5%", pos: true, isNew: false },
  { nombre: "Papa 45g", venta: 623606, pct: 7.5, crec: "NUEVO", pos: true, isNew: true },
  { nombre: "Tostadas 200g", venta: 601860, pct: 7.3, crec: "+355.8%", pos: true, isNew: false },
  { nombre: "Duritos", venta: 453197, pct: 5.5, crec: "-7.2%", pos: false, isNew: false },
  { nombre: "Cacahuate Granel", venta: 407119, pct: 4.9, crec: "-33.2%", pos: false, isNew: false },
  { nombre: "Papa 340g", venta: 373970, pct: 4.5, crec: "NUEVO", pos: true, isNew: true },
  { nombre: "Cheto Mix", venta: 51680, pct: 0.6, crec: "-10.7%", pos: false, isNew: false },
  { nombre: "Rueda Natural", venta: 48959, pct: 0.6, crec: "-18.4%", pos: false, isNew: false },
  { nombre: "Mini Cuadro", venta: 41832, pct: 0.5, crec: "+15.2%", pos: true, isNew: false },
  { nombre: "Palomitas 4Buddies", venta: 25020, pct: 0.3, crec: "NUEVO", pos: true, isNew: true },
];

const maxVenta = categorias[0].venta;

const formatPesos = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  return `$${(v / 1_000).toFixed(0)}K`;
};

function DonutSegment({ start, end, color, radius = 80, cx = 100, cy = 100, strokeWidth = 28 }: {
  start: number; end: number; color: string; radius?: number; cx?: number; cy?: number; strokeWidth?: number;
}) {
  const circumference = 2 * Math.PI * radius;
  const sweepPct = (end - start) / 100;
  return (
    <circle
      cx={cx} cy={cy} r={radius}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={`${sweepPct * circumference} ${circumference}`}
      strokeDashoffset={-((start / 100) * circumference)}
      transform={`rotate(-90 ${cx} ${cy})`}
    />
  );
}

const donutColors = ["#F5A623", "#3B82F6", "#F7B500", "#9CA3AF", "#E31837", "#8B5CF6", "#27AE60", "#F59E0B", "#06B6D4", "#EC4899"];

export default function VtaAbaSlide4Categorias() {
  let offset = 0;
  const segments = categorias.map((c, i) => {
    const start = offset;
    offset += c.pct;
    return { ...c, start, end: offset, color: donutColors[i] };
  });

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Layers className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-3xl font-bold text-gray-800">Sub-categorias Abarrotes</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Ene-Abr 2026 · 10 sub-categorias · 20 SKUs</p>

      <div className="flex gap-5 flex-1">
        {/* Donut */}
        <div className="w-[250px] flex flex-col items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {segments.map((s, i) => (
              <DonutSegment key={i} start={s.start} end={s.end} color={s.color} />
            ))}
            <text x="100" y="92" textAnchor="middle" className="text-xl font-bold" fill="#F5A623">$8.3M</text>
            <text x="100" y="112" textAnchor="middle" className="text-[10px]" fill="#9CA3AF">Abarrotes</text>
          </svg>
        </div>

        {/* Category list */}
        <div className="flex-1 space-y-1">
          {segments.map((c, i) => {
            const barPct = (c.venta / maxVenta) * 100;
            const crecColor = c.isNew ? "#2E75B6" : c.pos ? "#27AE60" : "#E31837";
            return (
              <div key={i} className="flex items-center gap-3 animate-count-up" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
                <span className="text-gray-700 text-xs w-36 truncate">{c.nombre}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div
                    className="h-2 rounded-full animate-bar-grow"
                    style={{ width: `${barPct}%`, backgroundColor: c.color, animationDelay: `${i * 50 + 100}ms` }}
                  />
                </div>
                <span className="text-gray-800 font-bold text-xs w-14 text-right">{formatPesos(c.venta)}</span>
                <span className="text-gray-400 text-[10px] w-10 text-right">{c.pct}%</span>
                <span className="text-xs font-bold w-28 text-right truncate" style={{ color: crecColor }}>{c.crec}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-2 flex gap-3">
        <div className="flex-1 bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-lg px-4 py-2">
          <p className="text-[#27AE60] text-[10px] font-semibold">&#9989; 3 categorias nuevas (Papa 45g, Papa 340g, Palomitas) incorporadas en 2026</p>
        </div>
        <div className="flex-1 bg-[#2E75B6]/5 border border-[#2E75B6]/20 rounded-lg px-4 py-2">
          <p className="text-[#2E75B6] text-[10px] font-semibold">&#128200; Tostadas 200g crecen +356% — excelente dinamica de crecimiento</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
