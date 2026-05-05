"use client";

import SlideWrapper from "./SlideWrapper";
import { Layers } from "lucide-react";

const categorias = [
  { nombre: "Tostada Roja 70PZ", venta: 5650991, pct: 60.0, crec: "+48.5%", pos: true, isNew: false },
  { nombre: "Frutas y Verduras", venta: 1042296, pct: 11.1, crec: "NUEVO", pos: true, isNew: true },
  { nombre: "Tostadas 200g", venta: 601860, pct: 6.4, crec: "+355.8%", pos: true, isNew: false },
  { nombre: "Papa 45g", venta: 605894, pct: 6.4, crec: "NUEVO", pos: true, isNew: true },
  { nombre: "Duritos", venta: 453197, pct: 4.8, crec: "-7.2%", pos: false, isNew: false },
  { nombre: "Cacahuate Granel", venta: 407567, pct: 4.3, crec: "-33.4%", pos: false, isNew: false },
  { nombre: "Papa 340g", venta: 373970, pct: 4.0, crec: "NUEVO", pos: true, isNew: true },
  { nombre: "Panaderia", venta: 97850, pct: 1.0, crec: "-52.4%", pos: false, isNew: false },
  { nombre: "Otros", venta: 181595, pct: 1.9, crec: "", pos: true, isNew: false },
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

const donutColors = ["#1A1A1A", "#27AE60", "#F7B500", "#3B82F6", "#9CA3AF", "#E31837", "#8B5CF6", "#F59E0B", "#D1D5DB"];

export default function VtaSlide5Categorias() {
  let offset = 0;
  const segments = categorias.map((c, i) => {
    const start = offset;
    offset += c.pct;
    return { ...c, start, end: offset, color: donutColors[i] };
  });

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Layers className="w-7 h-7 text-[#1A1A1A]" />
        <h2 className="text-3xl font-bold text-gray-800">Mix de Categorias</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Ene-Abr 2026 · Participacion y crecimiento vs 2025</p>

      <div className="flex gap-5 flex-1">
        <div className="w-[250px] flex flex-col items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {segments.map((s, i) => (
              <DonutSegment key={i} start={s.start} end={s.end} color={s.color} />
            ))}
            <text x="100" y="92" textAnchor="middle" className="text-xl font-bold" fill="#1A1A1A">$9.4M</text>
            <text x="100" y="112" textAnchor="middle" className="text-[10px]" fill="#9CA3AF">Ene-Abr 26</text>
          </svg>
        </div>

        <div className="flex-1 space-y-1.5">
          {segments.map((c, i) => {
            const barPct = (c.venta / maxVenta) * 100;
            const crecColor = c.isNew ? "#2E75B6" : c.pos ? "#27AE60" : "#E31837";
            return (
              <div key={i} className="flex items-center gap-3 animate-count-up" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
                <span className="text-gray-700 text-sm w-36">{c.nombre}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full animate-bar-grow"
                    style={{ width: `${barPct}%`, backgroundColor: c.color, animationDelay: `${i * 60 + 100}ms` }}
                  />
                </div>
                <span className="text-gray-800 font-bold text-sm w-16 text-right">{formatPesos(c.venta)}</span>
                <span className="text-gray-400 text-xs w-12 text-right">{c.pct}%</span>
                {c.crec && (
                  <span className="text-xs font-bold w-20 text-right" style={{ color: crecColor }}>{c.crec}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex gap-3">
        <div className="flex-1 bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-lg px-4 py-2">
          <p className="text-[#27AE60] text-[10px] font-semibold">&#9989; 3 categorias nuevas (FyV, Papa 45g, Papa 340g) ya aportan 21.5% de la venta</p>
        </div>
        <div className="flex-1 bg-[#E31837]/5 border border-[#E31837]/20 rounded-lg px-4 py-2">
          <p className="text-[#E31837] text-[10px] font-semibold">&#9888; Cacahuate Granel -33.4% y Panaderia -52.4% — categorias en declive</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
