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
  ReferenceLine,
} from "recharts";

// Sell-out 2026 en pesos, TODOS los Abarrotes. Junio = corte al dia 21 (parcial).
const data = [
  { mes: "Ene", venta: 1790595, parcial: false },
  { mes: "Feb", venta: 1922690, parcial: false },
  { mes: "Mar", venta: 2537111, parcial: false },
  { mes: "Abr", venta: 2021130, parcial: false },
  { mes: "May", venta: 2177094, parcial: false },
  { mes: "Jun", venta: 1438812, parcial: true },
];

const fmt = (v: number) => `$${(v / 1_000_000).toFixed(1)}M`;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; payload: { parcial: boolean } }>; label?: string }) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0];
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-[150px]">
      <p className="text-gray-500 text-xs mb-1 font-semibold">{label}</p>
      <p className="text-gray-800 font-bold text-sm">{fmt(p.value)}</p>
      {p.payload.parcial && <p className="text-[10px] text-[#E31837] mt-1">Corte al 21 de junio (parcial)</p>}
    </div>
  );
}

export default function PropSlide2Abarrotes() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Un negocio en crecimiento constante</h2>
      <p className="text-gray-500 text-sm mb-3">Sell-out total Abarrotes 2026 · desde marzo no baja de <b className="text-[#B8860B]">$2M</b> mensuales</p>

      <div className="flex gap-5 mb-2 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#F5A623]" />
          <span className="text-[#B8860B] font-semibold">Venta mes completo</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#F5A623]/45" />
          <span className="text-gray-500 font-semibold">Junio (corte al día 21)</span>
        </div>
        <div className="ml-auto">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#27AE60]/15 text-[#27AE60] border border-[#27AE60]/30">
            4 meses seguidos &gt; $2M
          </span>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 5 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={11} />
            <YAxis stroke="#9CA3AF" fontSize={10} tickFormatter={fmt} domain={[0, 2800000]} />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine y={2000000} stroke="#27AE60" strokeDasharray="5 4" strokeWidth={1.5} label={{ value: "$2M", position: "right", fill: "#27AE60", fontSize: 10, fontWeight: 700 }} />
            <Bar dataKey="venta" radius={[4, 4, 0, 0]} barSize={48}>
              {data.map((e, i) => (
                <Cell key={i} fill={e.parcial ? "rgba(245,166,35,0.45)" : "#F5A623"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#27AE60]/8 border border-[#27AE60]/25 rounded-xl p-3 mt-3 flex items-center gap-3">
        <span className="text-2xl">📊</span>
        <p className="text-sm text-gray-700 leading-snug">
          De Mar a May vendimos <b>$2.0M–$2.5M</b> cada mes. Junio va en <b>$1.44M al día 21</b> y, al ritmo
          actual, proyecta <b>~$2.1M</b> a mes completo: lo más probable es que también pase los $2M.
        </p>
      </div>
    </SlideWrapper>
  );
}
