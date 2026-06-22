"use client";

import SlideWrapper from "./SlideWrapper";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

// Papa Casera 45g (3 sabores). Sell-out explotando: 20k -> 35k (mar-may, +99%).
const data = [
  { mes: "Nov", sellIn: 9000, sellOut: 13948, inOut: 65 },
  { mes: "Dic", sellIn: 29295, sellOut: 22439, inOut: 131 },
  { mes: "Ene", sellIn: 16290, sellOut: 14730, inOut: 111 },
  { mes: "Feb", sellIn: 25965, sellOut: 12023, inOut: 216 },
  { mes: "Mar", sellIn: 3960, sellOut: 17756, inOut: 22 },
  { mes: "Abr", sellIn: 33210, sellOut: 20399, inOut: 163 },
  { mes: "May", sellIn: 98910, sellOut: 35351, inOut: 280 },
];

const fmt = (v: number) => `${(v / 1000).toFixed(0)}k`;
const fmtLbl = (v: unknown) => `${(Number(v) / 1000).toFixed(0)}k`;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string; dataKey: string }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-[160px]">
      <p className="text-gray-500 text-xs mb-2 font-semibold">{label}</p>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center justify-between gap-4 text-xs mb-0.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
            <span className="text-gray-500">{p.name}</span>
          </div>
          <span className="text-gray-800 font-bold">
            {p.dataKey === "inOut" ? `${p.value}%` : p.value.toLocaleString("es-MX")}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function PropSlide3Papa45() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Papa Casera 45g · La venta se está disparando</h2>
      <p className="text-gray-500 text-sm mb-3">3 sabores (Natural · Fuego · Jalapeño) — sell-out subiendo fuerte, momentum para aprovechar</p>

      <div className="flex gap-5 mb-2 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#2E75B6]" />
          <span className="text-gray-500 font-semibold">Sell-in (compra MERCO)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#F5A623]" />
          <span className="text-[#B8860B] font-semibold">Sell-out (venta en piso)</span>
        </div>
        <div className="ml-auto">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#27AE60]/15 text-[#27AE60] border border-[#27AE60]/30">
            Sell-out +99% en 3 meses (Mar → May)
          </span>
        </div>
      </div>

      <div className="flex items-center mb-1 pl-[44px] pr-[28px]">
        <span className="text-[9px] font-bold text-[#E31837] mr-1 shrink-0">In/Out%</span>
        <div className="grid flex-1" style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}>
          {data.map((d) => (
            <div key={d.mes} className="text-center">
              <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-bold border ${d.inOut < 100 ? "bg-[#E31837]/12 text-[#E31837] border-[#E31837]/30" : "bg-[#27AE60]/12 text-[#27AE60] border-[#27AE60]/30"}`}>
                {d.inOut}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 15, right: 20, left: 10, bottom: 5 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={11} />
            <YAxis stroke="#9CA3AF" fontSize={10} tickFormatter={fmt} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="sellIn" name="Sell-in" fill="#2E75B6" radius={[3, 3, 0, 0]} barSize={22} opacity={0.55}>
              <LabelList dataKey="sellIn" position="top" formatter={fmtLbl} fontSize={9} fill="#2E75B6" fontWeight={700} />
            </Bar>
            <Bar dataKey="sellOut" name="Sell-out" fill="#F5A623" radius={[3, 3, 0, 0]} barSize={22}>
              <LabelList dataKey="sellOut" position="top" formatter={fmtLbl} fontSize={9} fill="#B8860B" fontWeight={700} />
            </Bar>
            <Line type="monotone" dataKey="sellOut" name="Tendencia venta" stroke="#27AE60" strokeWidth={2.5} dot={{ r: 3, fill: "#27AE60" }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#27AE60]/8 border border-[#27AE60]/25 rounded-xl p-3 mt-3 flex items-center gap-3">
        <span className="text-2xl">📈</span>
        <p className="text-sm text-gray-700 leading-snug">
          La venta en piso pasó de <b>17.8k</b> a <b>35.4k uds/mes</b> en tres meses. El consumidor está
          jalando el producto — el <b>+25%</b> asegura no quedarte corto en el pico de demanda.
        </p>
      </div>
    </SlideWrapper>
  );
}
