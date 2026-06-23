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

// Sell-out 2026 en pesos, Tostadas desglosado por SKU. Roja 70 PZ va primero (abajo)
// porque es ~93% de la venta. Junio = corte al dia 21 (parcial) + proyeccion a mes
// completo en barra punteada encima del apilado.
const data = [
  { mes: "Ene", roja70: 1309462, roja200: 57885, amarilla200: 47386, proy: 0, parcial: false },
  { mes: "Feb", roja70: 1311962, roja200: 91813, amarilla200: 96927, proy: 0, parcial: false },
  { mes: "Mar", roja70: 1708159, roja200: 99775, amarilla200: 101915, proy: 0, parcial: false },
  { mes: "Abr", roja70: 1321408, roja200: 50382, amarilla200: 55778, proy: 0, parcial: false },
  { mes: "May", roja70: 1428123, roja200: 29701, amarilla200: 44960, proy: 0, parcial: false },
  { mes: "Jun", roja70: 681651, roja200: 17064, amarilla200: 26014, proy: 310598, parcial: true },
];

// Colores por SKU (la Roja 70 con el naranja de marca; las 200g en tonos de apoyo).
const COLORS = { roja70: "#F5A623", roja200: "#E31837", amarilla200: "#F7D000" };

const fmt = (v: number) => `$${(v / 1_000_000).toFixed(1)}M`;
const fmtK = (v: number) => `$${(v / 1000).toFixed(0)}k`;

const totalDe = (d: typeof data[number]) => d.roja70 + d.roja200 + d.amarilla200;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TotalLabel = (props: any) => {
  const { x = 0, y = 0, width = 0, index = 0 } = props;
  const d = data[index];
  const total = totalDe(d) + d.proy;
  return (
    <text x={x + width / 2} y={y - 6} textAnchor="middle" fontSize={11} fontWeight={700} fill={d.parcial ? "#B8860B" : "#374151"}>
      {fmt(total)}
    </text>
  );
};

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ payload: typeof data[number] }>; label?: string }) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;
  const base = totalDe(d);
  const total = d.parcial ? base + d.proy : base;
  const pct = (v: number) => `${((v / base) * 100).toFixed(0)}%`;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-[190px]">
      <p className="text-gray-500 text-xs mb-1.5 font-semibold">{label}{d.parcial ? " · al día 21" : ""}</p>
      <div className="space-y-0.5 text-xs">
        <p className="flex justify-between gap-3"><span style={{ color: COLORS.roja70 }} className="font-semibold">● Roja 70 PZ</span><span className="text-gray-700">{fmtK(d.roja70)} <span className="text-gray-400">{pct(d.roja70)}</span></span></p>
        <p className="flex justify-between gap-3"><span style={{ color: COLORS.roja200 }} className="font-semibold">● Roja 200g</span><span className="text-gray-700">{fmtK(d.roja200)} <span className="text-gray-400">{pct(d.roja200)}</span></span></p>
        <p className="flex justify-between gap-3"><span style={{ color: "#C9A800" }} className="font-semibold">● Amarilla 200g</span><span className="text-gray-700">{fmtK(d.amarilla200)} <span className="text-gray-400">{pct(d.amarilla200)}</span></span></p>
      </div>
      <p className="text-gray-800 font-bold text-sm mt-1.5 pt-1.5 border-t border-gray-100">{fmt(total)}{d.parcial ? " proy." : ""}</p>
    </div>
  );
}

export default function PropSlide3TostadasVenta() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Tostadas · El motor de la categoría</h2>
      <p className="text-gray-500 text-sm mb-3">Sell-out 2026 por SKU · ~70% de la venta de Abarrotes · ritmo sostenido de <b className="text-[#B8860B]">~$1.5M</b>/mes</p>

      <div className="flex gap-4 mb-2 text-[10px] items-center">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded" style={{ background: COLORS.roja70 }} />
          <span className="font-semibold text-gray-600">Roja 70 PZ · <b className="text-[#B8860B]">93%</b></span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded" style={{ background: COLORS.roja200 }} />
          <span className="font-semibold text-gray-600">Roja 200g · <b className="text-[#E31837]">3%</b></span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded" style={{ background: COLORS.amarilla200 }} />
          <span className="font-semibold text-gray-600">Amarilla 200g · <b style={{ color: "#C9A800" }}>3%</b></span>
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
            {/* Roja 70 PZ primero (abajo) */}
            <Bar dataKey="roja70" stackId="a" barSize={48}>
              {data.map((e, i) => (
                <Cell key={i} fill={e.parcial ? "rgba(245,166,35,0.45)" : COLORS.roja70} />
              ))}
            </Bar>
            <Bar dataKey="roja200" stackId="a" barSize={48}>
              {data.map((e, i) => (
                <Cell key={i} fill={e.parcial ? "rgba(227,24,55,0.45)" : COLORS.roja200} />
              ))}
            </Bar>
            <Bar dataKey="amarilla200" stackId="a" barSize={48} radius={[0, 0, 0, 0]}>
              {data.map((e, i) => (
                <Cell key={i} fill={e.parcial ? "rgba(247,208,0,0.45)" : COLORS.amarilla200} />
              ))}
            </Bar>
            {/* Proyeccion de junio (mes completo) encima del apilado */}
            <Bar dataKey="proy" stackId="a" barSize={48} radius={[4, 4, 0, 0]} fill="rgba(245,166,35,0.18)" stroke="#B8860B" strokeWidth={1.2} strokeDasharray="4 3">
              <LabelList content={TotalLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#27AE60]/8 border border-[#27AE60]/25 rounded-xl p-3 mt-3 flex items-center gap-3">
        <span className="text-2xl">🔥</span>
        <p className="text-sm text-gray-700 leading-snug">
          La <b>Roja 70 PZ</b> es el corazón del negocio: <b>~93%</b> de la venta de tostadas. Vende parejo entre <b>$1.4M y $1.9M</b> al mes;
          junio proyecta <b>~$1.0M</b>. Es justo donde frenar la compra cuesta más.
        </p>
      </div>
    </SlideWrapper>
  );
}
