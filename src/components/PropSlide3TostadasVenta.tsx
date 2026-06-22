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

// Sell-out 2026 en pesos, Tostadas (3 SKUs). Junio = corte al dia 21 (parcial).
// `proy` = remanente proyectado de junio a mes completo (real x 30/21).
const data = [
  { mes: "Ene", venta: 1414732, proy: 0, parcial: false },
  { mes: "Feb", venta: 1500701, proy: 0, parcial: false },
  { mes: "Mar", venta: 1909849, proy: 0, parcial: false },
  { mes: "Abr", venta: 1427568, proy: 0, parcial: false },
  { mes: "May", venta: 1502783, proy: 0, parcial: false },
  { mes: "Jun", venta: 724729, proy: 310598, parcial: true },
];

const fmt = (v: number) => `$${(v / 1_000_000).toFixed(1)}M`;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; payload: { parcial: boolean; venta: number; proy: number } }>; label?: string }) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-[160px]">
      <p className="text-gray-500 text-xs mb-1 font-semibold">{label}</p>
      {d.parcial ? (
        <>
          <p className="text-gray-800 font-bold text-sm">{fmt(d.venta)} <span className="text-[10px] font-normal text-gray-400">al día 21</span></p>
          <p className="text-[#B8860B] font-bold text-sm">{fmt(d.venta + d.proy)} <span className="text-[10px] font-normal text-gray-400">proyectado mes</span></p>
        </>
      ) : (
        <p className="text-gray-800 font-bold text-sm">{fmt(d.venta)}</p>
      )}
    </div>
  );
}

export default function PropSlide3TostadasVenta() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Tostadas · El motor de la categoría</h2>
      <p className="text-gray-500 text-sm mb-3">Sell-out 2026 · ~70% de la venta de Abarrotes · ritmo sostenido de <b className="text-[#B8860B]">~$1.5M</b>/mes</p>

      <div className="flex gap-5 mb-2 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#F5A623]" />
          <span className="text-[#B8860B] font-semibold">Venta mes completo</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#F5A623]/45" />
          <span className="text-gray-500 font-semibold">Junio real (al día 21)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded border border-dashed border-[#B8860B] bg-[#F5A623]/15" />
          <span className="text-[#B8860B] font-semibold">Junio proyectado</span>
        </div>
        <div className="ml-auto">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#27AE60]/15 text-[#27AE60] border border-[#27AE60]/30">
            Pico Marzo: $1.9M
          </span>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 5 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={11} />
            <YAxis stroke="#9CA3AF" fontSize={10} tickFormatter={fmt} domain={[0, 2200000]} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="venta" stackId="a" barSize={48}>
              {data.map((e, i) => (
                <Cell key={i} fill={e.parcial ? "rgba(245,166,35,0.45)" : "#F5A623"} />
              ))}
            </Bar>
            <Bar dataKey="proy" stackId="a" barSize={48} radius={[4, 4, 0, 0]} fill="rgba(245,166,35,0.18)" stroke="#B8860B" strokeWidth={1.2} strokeDasharray="4 3" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#27AE60]/8 border border-[#27AE60]/25 rounded-xl p-3 mt-3 flex items-center gap-3">
        <span className="text-2xl">🔥</span>
        <p className="text-sm text-gray-700 leading-snug">
          La tostada vende parejo entre <b>$1.4M y $1.9M</b> al mes. Junio va en <b>$0.72M al día 21</b> y
          proyecta <b>~$1.0M</b> a mes completo. El producto rota fuerte — es justo donde frenar la compra cuesta más.
        </p>
      </div>
    </SlideWrapper>
  );
}
