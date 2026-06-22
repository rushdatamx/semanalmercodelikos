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
  Cell,
  LabelList,
} from "recharts";

// Papa Casera 340g (3 sabores). Solo SELL-OUT (venta en piso), unidades.
// Junio = corte al dia 21 (parcial); `proy` = remanente proyectado a mes completo (real x 30/21).
const data = [
  { mes: "Dic", sellOut: 389, proy: 0, parcial: false },
  { mes: "Ene", sellOut: 1595, proy: 0, parcial: false },
  { mes: "Feb", sellOut: 1549, proy: 0, parcial: false },
  { mes: "Mar", sellOut: 2664, proy: 0, parcial: false },
  { mes: "Abr", sellOut: 1890, proy: 0, parcial: false },
  { mes: "May", sellOut: 2370, proy: 0, parcial: false },
  { mes: "Jun", sellOut: 2403, proy: 1030, parcial: true },
];

const fmt = (v: number) => v.toLocaleString("es-MX");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TotalLabel = (props: any) => {
  const { x = 0, y = 0, width = 0, index = 0 } = props;
  const d = data[index];
  const total = d.sellOut + d.proy;
  return (
    <text x={x + width / 2} y={y - 6} textAnchor="middle" fontSize={10} fontWeight={700} fill={d.parcial ? "#B8860B" : "#374151"}>
      {fmt(total)}
    </text>
  );
};

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ payload: { parcial: boolean; sellOut: number; proy: number } }>; label?: string }) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-[160px]">
      <p className="text-gray-500 text-xs mb-1 font-semibold">{label}</p>
      {d.parcial ? (
        <>
          <p className="text-gray-800 font-bold text-sm">{d.sellOut.toLocaleString("es-MX")} uds <span className="text-[10px] font-normal text-gray-400">al día 21</span></p>
          <p className="text-[#B8860B] font-bold text-sm">{(d.sellOut + d.proy).toLocaleString("es-MX")} uds <span className="text-[10px] font-normal text-gray-400">proyectado</span></p>
        </>
      ) : (
        <p className="text-gray-800 font-bold text-sm">{d.sellOut.toLocaleString("es-MX")} uds</p>
      )}
    </div>
  );
}

export default function PropSlide4Papa340() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Papa Casera 340g · SKU joven con tracción</h2>
      <p className="text-gray-500 text-sm mb-3">3 sabores (Sal · Fuego · Jalapeño) — sell-out (venta en piso), consolidándose mes a mes</p>

      <div className="flex gap-5 mb-2 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#F5A623]" />
          <span className="text-[#B8860B] font-semibold">Sell-out (venta en piso)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded border border-dashed border-[#B8860B] bg-[#F5A623]/15" />
          <span className="text-[#B8860B] font-semibold">Junio proyectado (al día 21)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-0.5 rounded bg-[#27AE60]" />
          <span className="text-[#27AE60] font-semibold">Tendencia</span>
        </div>
        <div className="ml-auto">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#2E75B6]/15 text-[#2E75B6] border border-[#2E75B6]/30">
            Venta sostenida ~2,000-2,700 uds/mes
          </span>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 22, right: 20, left: 10, bottom: 5 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={11} />
            <YAxis stroke="#9CA3AF" fontSize={10} tickFormatter={fmt} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="sellOut" stackId="a" barSize={38}>
              {data.map((e, i) => (
                <Cell key={i} fill={e.parcial ? "rgba(245,166,35,0.45)" : "#F5A623"} />
              ))}
            </Bar>
            <Bar dataKey="proy" stackId="a" barSize={38} radius={[3, 3, 0, 0]} fill="rgba(245,166,35,0.18)" stroke="#B8860B" strokeWidth={1.2} strokeDasharray="4 3">
              <LabelList content={TotalLabel} />
            </Bar>
            <Line type="monotone" dataKey="sellOut" name="Tendencia venta" stroke="#27AE60" strokeWidth={2.5} dot={{ r: 3, fill: "#27AE60" }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#2E75B6]/8 border border-[#2E75B6]/25 rounded-xl p-3 mt-3 flex items-center gap-3">
        <span className="text-2xl">🚀</span>
        <p className="text-sm text-gray-700 leading-snug">
          Presentación nueva que ya encontró su consumidor: la venta se sostiene arriba de <b>2,000 uds/mes</b>
          desde marzo. Un <b>+25% constante</b> da continuidad en anaquel y acelera la distribución.
        </p>
      </div>
    </SlideWrapper>
  );
}
