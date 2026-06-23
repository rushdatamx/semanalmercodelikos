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
  LabelList,
} from "recharts";

// Sell-out 2026 TOTAL Abarrotes en UNIDADES. Junio = corte al dia 21 (parcial).
// `proy` = remanente proyectado de junio a mes completo (real x 30/21).
// Marzo es el mes mas alto del anio en la categoria -> techo a recuperar en H2.
const data = [
  { mes: "Ene", uds: 58290, proy: 0, parcial: false },
  { mes: "Feb", uds: 64045, proy: 0, parcial: false },
  { mes: "Mar", uds: 80802, proy: 0, parcial: false, pico: true },
  { mes: "Abr", uds: 67014, proy: 0, parcial: false },
  { mes: "May", uds: 80286, proy: 0, parcial: false },
  { mes: "Jun", uds: 45539, proy: 19514, parcial: true },
];

const fmt = (v: number) => `${(v / 1000).toFixed(0)}k`;
const fmtFull = (v: number) => v.toLocaleString("es-MX");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TotalLabel = (props: any) => {
  const { x = 0, y = 0, width = 0, index = 0 } = props;
  const d = data[index];
  const total = d.uds + d.proy;
  return (
    <text x={x + width / 2} y={y - 6} textAnchor="middle" fontSize={11} fontWeight={700} fill={d.pico ? "#E31837" : d.parcial ? "#B8860B" : "#374151"}>
      {fmt(total)}
    </text>
  );
};

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; payload: { parcial: boolean; uds: number; proy: number } }>; label?: string }) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-[170px]">
      <p className="text-gray-500 text-xs mb-1 font-semibold">{label}</p>
      {d.parcial ? (
        <>
          <p className="text-gray-800 font-bold text-sm">{fmtFull(d.uds)} u <span className="text-[10px] font-normal text-gray-400">al día 21</span></p>
          <p className="text-[#B8860B] font-bold text-sm">{fmtFull(d.uds + d.proy)} u <span className="text-[10px] font-normal text-gray-400">proyectado mes</span></p>
        </>
      ) : (
        <p className="text-gray-800 font-bold text-sm">{fmtFull(d.uds)} u</p>
      )}
    </div>
  );
}

export default function PropSlide6Marzo() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Marzo marcó el techo de la categoría</h2>
      <p className="text-gray-500 text-sm mb-3">Sell-out total Abarrotes 2026 en <b className="text-[#B8860B]">unidades</b> · marzo fue el mes más alto del año — la referencia a recuperar en la segunda mitad</p>

      <div className="flex gap-5 flex-1 min-h-0">
        {/* Grafica */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col">
          <div className="flex gap-4 mb-2 text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-2.5 rounded bg-[#E31837]" />
              <span className="text-[#E31837] font-semibold">Marzo (pico)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-2.5 rounded bg-[#F5A623]" />
              <span className="text-gray-500 font-semibold">Resto de meses</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-2.5 rounded border border-dashed border-[#B8860B] bg-[#F5A623]/15" />
              <span className="text-[#B8860B] font-semibold">Junio proyectado (al día 21)</span>
            </div>
          </div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 22, right: 20, left: 5, bottom: 5 }} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={11} />
                <YAxis stroke="#9CA3AF" fontSize={10} tickFormatter={fmt} domain={[0, 90000]} />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine y={80802} stroke="#E31837" strokeDasharray="5 4" strokeWidth={1.5} label={{ value: "81k", position: "right", fill: "#E31837", fontSize: 10, fontWeight: 700 }} />
                <Bar dataKey="uds" stackId="a" barSize={48}>
                  {data.map((e, i) => (
                    <Cell key={i} fill={e.pico ? "#E31837" : e.parcial ? "rgba(245,166,35,0.45)" : "#F5A623"} radius={e.parcial ? 0 : 4} />
                  ))}
                </Bar>
                <Bar dataKey="proy" stackId="a" barSize={48} radius={[4, 4, 0, 0]} fill="rgba(245,166,35,0.18)" stroke="#B8860B" strokeWidth={1.2} strokeDasharray="4 3">
                  <LabelList content={TotalLabel} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lectura */}
        <div className="w-[34%] flex flex-col gap-3">
          <div className="bg-[#E31837]/8 border border-[#E31837]/25 rounded-xl p-4 text-center">
            <p className="text-[11px] text-gray-500 uppercase tracking-wide">Pico del año · Marzo 2026</p>
            <p className="text-4xl font-bold text-[#E31837]">80,802 <span className="text-base font-normal text-gray-400">uds</span></p>
            <p className="text-[11px] text-gray-500 mt-1">+39% sobre el mes más bajo del año</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex-1 flex flex-col justify-center gap-3">
            <p className="text-sm text-gray-700 leading-snug">
              📈 <b>Marzo demostró el techo real</b> de la categoría: cuando hay producto en piso, la venta se va a <b>~81k unidades</b>/mes.
            </p>
            <p className="text-sm text-gray-700 leading-snug">
              🎯 El objetivo de la segunda mitad del año es <b>volver a ese nivel y sostenerlo</b> — para eso necesitamos el inventario que lo respalde.
            </p>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-gray-500 mt-2 text-center">
        Total Abarrotes (20 SKUs) · sell-out en unidades · Junio al día 21, proyección a mes completo en barra punteada.
      </p>
    </SlideWrapper>
  );
}
