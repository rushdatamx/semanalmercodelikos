"use client";

import SlideWrapper from "./SlideWrapper";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { mes: "Ene", v25: 1136570, v26: 1934058 },
  { mes: "Feb", v25: 1451856, v26: 2145376 },
  { mes: "Mar", v25: 1797487, v26: 3013102 },
  { mes: "Abr", v25: 1530968, v26: 2323185 },
  { mes: "May", v25: 1871875, v26: null },
  { mes: "Jun", v25: 1498686, v26: null },
  { mes: "Jul", v25: 1514629, v26: null },
  { mes: "Ago", v25: 2209937, v26: null },
  { mes: "Sep", v25: 1982936, v26: null },
  { mes: "Oct", v25: 2036693, v26: null },
  { mes: "Nov", v25: 2508032, v26: null },
  { mes: "Dic", v25: 2435669, v26: null },
];

const formatPesos = (v: number) => `$${(v / 1_000_000).toFixed(1)}M`;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-[140px]">
      <p className="text-gray-500 text-xs mb-2 font-semibold">{label}</p>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center justify-between gap-4 text-xs mb-0.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
            <span className="text-gray-500">{p.name}</span>
          </div>
          <span className="text-gray-800 font-bold">{formatPesos(p.value)}</span>
        </div>
      ))}
    </div>
  );
}

export default function VtaSlide3Tendencia() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Tendencia Mensual 2025 vs 2026</h2>
      <p className="text-gray-500 text-sm mb-3">Sell-out MERCO · 2026 crece todos los meses vs 2025</p>

      <div className="flex gap-5 mb-3 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-gray-300" />
          <span className="text-gray-500 font-semibold">2025</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#1A1A1A]" />
          <span className="text-gray-800 font-semibold">2026</span>
        </div>
        <div className="ml-auto">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#27AE60]/15 text-[#27AE60] border border-[#27AE60]/30">
            4/4 meses en crecimiento
          </span>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 5 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={11} />
            <YAxis stroke="#9CA3AF" fontSize={10} tickFormatter={formatPesos} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="v25" name="2025" fill="#D1D5DB" radius={[3, 3, 0, 0]} barSize={32} />
            <Bar dataKey="v26" name="2026" radius={[3, 3, 0, 0]} barSize={32}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.v26 ? "#1A1A1A" : "transparent"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between mt-2 text-[10px] text-gray-500">
        <span>Mejor mes 2026: Marzo ($3.0M) · Peor mes 2026: Enero ($1.9M)</span>
        <span>Promedio mensual 2026: $2.35M vs $1.79M en 2025</span>
      </div>
    </SlideWrapper>
  );
}
