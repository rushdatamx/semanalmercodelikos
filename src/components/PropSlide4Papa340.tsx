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
} from "recharts";

// Papa Casera 340g (3 sabores). SKU joven en rampa: sell-out estable 1.6k-2.7k/mes.
const data = [
  { mes: "Dic", sellIn: 3024, sellOut: 389, inOut: 777 },
  { mes: "Ene", sellIn: 1988, sellOut: 1595, inOut: 125 },
  { mes: "Feb", sellIn: 5922, sellOut: 1549, inOut: 382 },
  { mes: "Mar", sellIn: 210, sellOut: 2664, inOut: 8 },
  { mes: "Abr", sellIn: 966, sellOut: 1890, inOut: 51 },
  { mes: "May", sellIn: 8652, sellOut: 2370, inOut: 365 },
];

const fmt = (v: number) => v.toLocaleString("es-MX");

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

export default function PropSlide4Papa340() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Papa Casera 340g · SKU joven con tracción</h2>
      <p className="text-gray-500 text-sm mb-3">3 sabores (Sal · Fuego · Jalapeño) — presentación reciente, venta consolidándose mes a mes</p>

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
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#2E75B6]/15 text-[#2E75B6] border border-[#2E75B6]/30">
            Venta sostenida ~2,000-2,700 uds/mes
          </span>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 15, right: 20, left: 10, bottom: 5 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={11} />
            <YAxis stroke="#9CA3AF" fontSize={10} tickFormatter={fmt} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="sellIn" name="Sell-in" fill="#2E75B6" radius={[3, 3, 0, 0]} barSize={26} opacity={0.55} />
            <Bar dataKey="sellOut" name="Sell-out" fill="#F5A623" radius={[3, 3, 0, 0]} barSize={26} />
            <Line type="monotone" dataKey="sellOut" name="Tendencia venta" stroke="#27AE60" strokeWidth={2.5} dot={{ r: 3, fill: "#27AE60" }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#2E75B6]/8 border border-[#2E75B6]/25 rounded-xl p-3 mt-3 flex items-center gap-3">
        <span className="text-2xl">🚀</span>
        <p className="text-sm text-gray-700 leading-snug">
          Presentación nueva que ya encontró su consumidor. El sell-in llega a saltos (Dic, Feb, May);
          un <b>+25% constante</b> da continuidad en anaquel y acelera la distribución sin riesgo de sobre-stock.
        </p>
      </div>
    </SlideWrapper>
  );
}
