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
  ReferenceLine,
} from "recharts";

// Sell-in (ERP, CT0325) vs Sell-out (venta_merco), unidades. Cuadra con tabla del correo.
const data = [
  { mes: "Nov", sellIn: 53280, sellOut: 49356, inOut: 108 },
  { mes: "Dic", sellIn: 42960, sellOut: 50954, inOut: 84 },
  { mes: "Ene", sellIn: 56904, sellOut: 39254, inOut: 145 },
  { mes: "Feb", sellIn: 47712, sellOut: 46325, inOut: 103 },
  { mes: "Mar", sellIn: 54192, sellOut: 54682, inOut: 99 },
  { mes: "Abr", sellIn: 26592, sellOut: 39593, inOut: 67 },
  { mes: "May", sellIn: 30840, sellOut: 38997, inOut: 79 },
];

const fmt = (v: number) => `${(v / 1000).toFixed(0)}k`;

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

export default function PropSlide2Tostadas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Tostadas · La compra se frenó, la venta no</h2>
      <p className="text-gray-500 text-sm mb-3">Sell-in (lo que compras) vs Sell-out (lo que vendes) — unidades/mes</p>

      <div className="flex gap-5 mb-2 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#2E75B6]" />
          <span className="text-gray-500 font-semibold">Sell-in (compra MERCO)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#F5A623]" />
          <span className="text-[#B8860B] font-semibold">Sell-out (venta en piso)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-0.5 rounded bg-[#E31837]" />
          <span className="text-[#E31837] font-semibold">In/Out %</span>
        </div>
        <div className="ml-auto">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#E31837]/15 text-[#E31837] border border-[#E31837]/30">
            Abr-May: compras 67% / 79% de lo que vendes
          </span>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 15, right: 45, left: 10, bottom: 5 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={11} />
            <YAxis yAxisId="uds" stroke="#9CA3AF" fontSize={10} tickFormatter={fmt} />
            <YAxis yAxisId="pct" orientation="right" stroke="#E31837" fontSize={10} tickFormatter={(v) => `${v}%`} domain={[0, 160]} />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine yAxisId="pct" y={100} stroke="#E31837" strokeDasharray="4 4" strokeOpacity={0.5} />
            <Bar yAxisId="uds" dataKey="sellIn" name="Sell-in" fill="#2E75B6" radius={[3, 3, 0, 0]} barSize={22} />
            <Bar yAxisId="uds" dataKey="sellOut" name="Sell-out" fill="#F5A623" radius={[3, 3, 0, 0]} barSize={22} />
            <Line yAxisId="pct" type="monotone" dataKey="inOut" name="In/Out %" stroke="#E31837" strokeWidth={2.5} dot={{ r: 3, fill: "#E31837" }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-3">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-wide">Ritmo histórico Nov-Mar</p>
          <p className="text-xl font-bold text-gray-800">~51,000 <span className="text-xs font-normal text-gray-400">uds/mes</span></p>
        </div>
        <div className="bg-white rounded-xl border border-[#E31837]/30 shadow-sm p-3 text-center">
          <p className="text-[10px] text-[#E31837] uppercase tracking-wide font-semibold">Dejado de mover Abr-May</p>
          <p className="text-xl font-bold text-[#E31837]">~45,000 <span className="text-xs font-normal text-gray-400">uds</span></p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-wide">Si sigue el freno (3 meses)</p>
          <p className="text-xl font-bold text-gray-800">~67,000 <span className="text-xs font-normal text-gray-400">uds</span></p>
        </div>
      </div>
    </SlideWrapper>
  );
}
