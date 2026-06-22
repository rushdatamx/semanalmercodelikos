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

// Sell-out 2026: pesos (venta/proy) + unidades (uds/udsProy). Junio = corte al dia 21 (parcial).
// `proy`/`udsProy` = remanente proyectado de junio a mes completo (real x 30/21).
const papa45 = [
  { mes: "Ene", venta: 136622, proy: 0, uds: 14730, udsProy: 0, parcial: false },
  { mes: "Feb", venta: 111249, proy: 0, uds: 12023, udsProy: 0, parcial: false },
  { mes: "Mar", venta: 163314, proy: 0, uds: 17756, udsProy: 0, parcial: false },
  { mes: "Abr", venta: 194710, proy: 0, uds: 20399, udsProy: 0, parcial: false },
  { mes: "May", venta: 325884, proy: 0, uds: 35351, udsProy: 0, parcial: false },
  { mes: "Jun", venta: 399975, proy: 171418, uds: 40557, udsProy: 17382, parcial: true },
];
const papa340 = [
  { mes: "Ene", venta: 74458, proy: 0, uds: 1595, udsProy: 0, parcial: false },
  { mes: "Feb", venta: 70888, proy: 0, uds: 1549, udsProy: 0, parcial: false },
  { mes: "Mar", venta: 127809, proy: 0, uds: 2664, udsProy: 0, parcial: false },
  { mes: "Abr", venta: 100816, proy: 0, uds: 1890, udsProy: 0, parcial: false },
  { mes: "May", venta: 129013, proy: 0, uds: 2370, udsProy: 0, parcial: false },
  { mes: "Jun", venta: 133478, proy: 57205, uds: 2403, udsProy: 1030, parcial: true },
];

const fmt = (v: number) => `$${(v / 1000).toFixed(0)}k`;
const fmtUds = (v: number) => `${v.toLocaleString("es-MX")} u`;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; payload: { parcial: boolean; venta: number; proy: number; uds: number; udsProy: number } }>; label?: string }) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2.5 shadow-lg min-w-[170px]">
      <p className="text-gray-500 text-xs mb-1 font-semibold">{label}</p>
      {d.parcial ? (
        <>
          <p className="text-gray-800 font-bold text-sm">${d.venta.toLocaleString("es-MX")} · {d.uds.toLocaleString("es-MX")} u <span className="text-[10px] font-normal text-gray-400">al día 21</span></p>
          <p className="text-[#B8860B] font-bold text-sm">${(d.venta + d.proy).toLocaleString("es-MX")} · {(d.uds + d.udsProy).toLocaleString("es-MX")} u <span className="text-[10px] font-normal text-gray-400">proyectado</span></p>
        </>
      ) : (
        <p className="text-gray-800 font-bold text-sm">${d.venta.toLocaleString("es-MX")} · {d.uds.toLocaleString("es-MX")} u</p>
      )}
    </div>
  );
}

function MiniChart({ data, max }: { data: typeof papa45; max: number }) {
  // Etiqueta doble encima de cada barra: monto ($) + unidades (uds). Legible sin hover.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TotalLabel = (props: any) => {
    const { x = 0, y = 0, width = 0, index = 0 } = props;
    const d = data[index];
    const totalP = d.venta + d.proy;
    const totalU = d.uds + d.udsProy;
    const cx = x + width / 2;
    return (
      <g>
        <text x={cx} y={y - 14} textAnchor="middle" fontSize={10} fontWeight={700} fill={d.parcial ? "#B8860B" : "#374151"}>
          {fmt(totalP)}
        </text>
        <text x={cx} y={y - 4} textAnchor="middle" fontSize={8.5} fontWeight={600} fill="#9CA3AF">
          {fmtUds(totalU)}
        </text>
      </g>
    );
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 28, right: 15, left: 5, bottom: 0 }} barGap={3}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={10} />
        <YAxis stroke="#9CA3AF" fontSize={9} tickFormatter={fmt} domain={[0, max]} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="venta" stackId="a" barSize={34}>
          {data.map((e, i) => (
            <Cell key={i} fill={e.parcial ? "rgba(245,166,35,0.45)" : "#F5A623"} />
          ))}
        </Bar>
        <Bar dataKey="proy" stackId="a" barSize={34} radius={[3, 3, 0, 0]} fill="rgba(245,166,35,0.18)" stroke="#B8860B" strokeWidth={1} strokeDasharray="4 3">
          <LabelList content={TotalLabel} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default function PropSlide4PapasVenta() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Papa Casera · La categoría que más acelera</h2>
      <p className="text-gray-500 text-sm mb-3">Sell-out 2026 en <b className="text-[#B8860B]">$</b> y <span className="text-gray-400 font-semibold">unidades</span> · ambas presentaciones en máximos del año (Junio parcial, al día 21)</p>

      <div className="flex-1 flex flex-col gap-3 min-h-0">
        {/* Papa 45g */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-bold text-gray-700">Papa Casera 45g <span className="text-gray-400 font-normal">· 3 sabores</span></p>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#27AE60]/15 text-[#27AE60] border border-[#27AE60]/30">
              5 meses al alza · récord en Junio
            </span>
          </div>
          <div className="flex-1 min-h-0">
            <MiniChart data={papa45} max={450000} />
          </div>
        </div>

        {/* Papa 340g */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-bold text-gray-700">Papa Casera 340g <span className="text-gray-400 font-normal">· 3 sabores</span></p>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#2E75B6]/15 text-[#2E75B6] border border-[#2E75B6]/30">
              Tendencia firme al alza
            </span>
          </div>
          <div className="flex-1 min-h-0">
            <MiniChart data={papa340} max={150000} />
          </div>
        </div>
      </div>

      <p className="text-[11px] text-gray-500 mt-2 text-center">
        Junio (barra punteada = proyección a mes completo): <b>45g $400k→~$571k · 41k→~58k u</b> · <b>340g $133k→~$191k · 2.4k→~3.4k u</b> — ambas superarían a Mayo.
      </p>
    </SlideWrapper>
  );
}
