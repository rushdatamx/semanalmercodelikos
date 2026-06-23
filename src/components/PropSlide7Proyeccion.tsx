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
  LabelList,
} from "recharts";

// Proyeccion +25%. Sell-out real 2026 (Ene-Jun, junio a mes completo proy. x30/21)
// + 3 meses proyectados (Jul-Ago-Sep) al ritmo actual + lift de +25%.
// Base proyeccion = prom sell-out ult. 3 meses completos (Abr, May, Jun-proy).
type Punto = { mes: string; uds: number; proy: boolean };

const tostadas: Punto[] = [
  { mes: "Ene", uds: 39254, proy: false },
  { mes: "Feb", uds: 46325, proy: false },
  { mes: "Mar", uds: 54682, proy: false },
  { mes: "Abr", uds: 39593, proy: false },
  { mes: "May", uds: 38997, proy: false },
  { mes: "Jun", uds: 27360, proy: false },
  { mes: "Jul", uds: 44146, proy: true },
  { mes: "Ago", uds: 44146, proy: true },
  { mes: "Sep", uds: 44146, proy: true },
];
const papa45: Punto[] = [
  { mes: "Ene", uds: 14730, proy: false },
  { mes: "Feb", uds: 12023, proy: false },
  { mes: "Mar", uds: 17756, proy: false },
  { mes: "Abr", uds: 20399, proy: false },
  { mes: "May", uds: 35351, proy: false },
  { mes: "Jun", uds: 57939, proy: false },
  { mes: "Jul", uds: 47370, proy: true },
  { mes: "Ago", uds: 47370, proy: true },
  { mes: "Sep", uds: 47370, proy: true },
];
const papa340: Punto[] = [
  { mes: "Ene", uds: 1595, proy: false },
  { mes: "Feb", uds: 1549, proy: false },
  { mes: "Mar", uds: 2664, proy: false },
  { mes: "Abr", uds: 1890, proy: false },
  { mes: "May", uds: 2370, proy: false },
  { mes: "Jun", uds: 3433, proy: false },
  { mes: "Jul", uds: 3205, proy: true },
  { mes: "Ago", uds: 3205, proy: true },
  { mes: "Sep", uds: 3205, proy: true },
];

const fmtK = (v: number) => (v >= 1000 ? `${(v / 1000).toFixed(0)}k` : `${v}`);
const fmtFull = (v: number) => v.toLocaleString("es-MX");

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ payload: { uds: number; proy: boolean } }>; label?: string }) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2.5 shadow-lg min-w-[150px]">
      <p className="text-gray-500 text-xs mb-0.5 font-semibold">{label} 2026</p>
      <p className="text-gray-800 font-bold text-sm">
        {fmtFull(d.uds)} u {d.proy && <span className="text-[10px] font-normal text-[#27AE60]">proy. +25%</span>}
      </p>
    </div>
  );
}

function MiniChart({ data, max, color }: { data: Punto[]; max: number; color: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Lbl = (props: any) => {
    const { x = 0, y = 0, width = 0, index = 0 } = props;
    const d = data[index];
    return (
      <text x={x + width / 2} y={y - 4} textAnchor="middle" fontSize={8.5} fontWeight={700} fill={d.proy ? "#1E7E45" : "#6B7280"}>
        {fmtK(d.uds)}
      </text>
    );
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 16, right: 6, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#EEE" />
        <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={9} interval={0} />
        <YAxis stroke="#9CA3AF" fontSize={8} tickFormatter={fmtK} domain={[0, max]} width={28} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="uds" barSize={20} radius={[2, 2, 0, 0]}>
          {data.map((e, i) => (
            <Cell
              key={i}
              fill={e.proy ? "rgba(39,174,96,0.20)" : color}
              stroke={e.proy ? "#27AE60" : undefined}
              strokeWidth={e.proy ? 1 : 0}
              strokeDasharray={e.proy ? "4 3" : undefined}
            />
          ))}
          <LabelList content={Lbl} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

const paneles = [
  { titulo: "Tostadas", sub: "3 SKUs", data: tostadas, max: 60000, color: "#F5A623", lift: "~44k uds/mes" },
  { titulo: "Papa Casera 45g", sub: "3 sabores", data: papa45, max: 65000, color: "#F5A623", lift: "~47k uds/mes" },
  { titulo: "Papa Casera 340g", sub: "3 sabores", data: papa340, max: 4000, color: "#2E75B6", lift: "~3.2k uds/mes" },
];

export default function PropSlide7Proyeccion() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Lo que crece la venta con el +25%</h2>
      <p className="text-gray-500 text-sm mb-3">
        Sell-out 2026 real (Ene–Jun) + proyección con el lift de <b className="text-[#27AE60]">+25%</b> (Jul–Sep, barras punteadas) · en unidades
      </p>

      <div className="flex-1 flex flex-col gap-3 min-h-0">
        <div className="flex-1 grid grid-cols-3 gap-3 min-h-0">
          {paneles.map((p) => (
            <div key={p.titulo} className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col min-h-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-bold text-gray-700">{p.titulo} <span className="text-gray-400 font-normal text-xs">· {p.sub}</span></p>
              </div>
              <div className="flex-1 min-h-0">
                <MiniChart data={p.data} max={p.max} color={p.color} />
              </div>
              <p className="text-[10px] text-center text-[#1E7E45] font-semibold mt-1">Con +25%: {p.lift}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#27AE60]/8 border border-[#27AE60]/25 rounded-xl p-3 flex items-center gap-4">
          <span className="text-3xl">🚀</span>
          <p className="text-sm text-gray-700 leading-snug flex-1">
            Manteniendo el ritmo de venta actual y sumando el <b>+25%</b>, en el trimestre Jul–Sep movemos cerca de
            <b className="text-[#1E7E45]"> +53,000 unidades adicionales</b> entre las 3 categorías — venta extra para MERCO y para Delikos.
          </p>
          <div className="text-center px-4 border-l border-[#27AE60]/30">
            <p className="text-[10px] text-gray-500 uppercase tracking-wide">Incremental 3 meses</p>
            <p className="text-3xl font-bold text-[#1E7E45]">~53k <span className="text-sm font-normal text-gray-400">uds</span></p>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-gray-500 mt-2 text-center">
        Base de proyección = promedio de sell-out de los últimos 3 meses (Abr–Jun) · Junio a mes completo · cada panel en su propia escala.
      </p>
    </SlideWrapper>
  );
}
