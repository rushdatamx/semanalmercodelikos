"use client";

import SlideWrapper from "./SlideWrapper";
import { ShieldAlert } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  BarChart,
  Bar,
  Cell,
} from "recharts";

/* ── DDI by product (median, from April 5 snapshot) ── */
const ddiData = [
  { name: "Roja 70PZ", ddi: 28, color: "#EF4444", below15: 5, tiendas: 43 },
  { name: "Roja 200g", ddi: 17, color: "#F97316", below15: 18, tiendas: 39 },
  { name: "Amarilla 200g", ddi: 20, color: "#F59E0B", below15: 16, tiendas: 37 },
  { name: "Papa Natural 45g", ddi: 39, color: "#3B82F6", below15: 8, tiendas: 36 },
  { name: "Papa Fuego 45g", ddi: 52, color: "#8B5CF6", below15: 7, tiendas: 39 },
  { name: "Papa Jalapeno 45g", ddi: 82, color: "#6366F1", below15: 7, tiendas: 38 },
];

/* ── Inventory cycle (total units, 6 products, 18 snapshots) ── */
const cycleData = [
  { date: "Mar 8", uds: 61339 },
  { date: "Mar 9", uds: 59804 },
  { date: "Mar 10", uds: 56594 },
  { date: "Mar 11", uds: 62799, note: "Entrega" },
  { date: "Mar 12", uds: 64617 },
  { date: "Mar 15", uds: 56663 },
  { date: "Mar 16", uds: 54211 },
  { date: "Mar 17", uds: 52495 },
  { date: "Mar 18", uds: 50948 },
  { date: "Mar 19", uds: 49497 },
  { date: "Mar 22", uds: 43441 },
  { date: "Mar 23", uds: 41909 },
  { date: "Mar 24", uds: 54830, note: "Entrega" },
  { date: "Mar 29", uds: 57919 },
  { date: "Mar 30", uds: 55732 },
  { date: "Mar 31", uds: 53470 },
  { date: "Abr 1", uds: 51100 },
  { date: "Abr 5", uds: 50350 },
];

const getDdiColor = (ddi: number) => {
  if (ddi <= 15) return "#EF4444";
  if (ddi <= 25) return "#F59E0B";
  return "#10B981";
};

const getDdiLabel = (ddi: number) => {
  if (ddi <= 15) return "CRITICO";
  if (ddi <= 25) return "VIGILAR";
  return "OK";
};

const CycleTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number; payload: { note?: string } }>;
  label?: string;
}) => {
  if (!active || !payload?.[0]) return null;
  const d = payload[0];
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-lg px-3 py-2 text-xs">
      <p className="font-bold text-gray-800">{label}</p>
      <p className="text-gray-600">
        {d.value.toLocaleString()} uds
      </p>
      {d.payload.note && (
        <p className="text-emerald-600 font-bold">{d.payload.note}</p>
      )}
    </div>
  );
};

export default function CrecSlide3Inventario() {
  const tostadas200below = ddiData
    .filter((d) => d.name.includes("200g"))
    .reduce((s, d) => s + d.below15, 0);

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Inventario: Realidad vs Percepcion
            </h2>
            <p className="text-[10px] text-gray-500">
              DDI mediana por producto (Abr 5) + ciclo de inventario Mar-Abr
              2026
            </p>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-1">
          <p className="text-[10px] text-amber-700 font-bold">
            {tostadas200below} tiendas de tostadas 200g bajo umbral 15 DDI
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex gap-3 flex-1 min-h-0">
        {/* Left: Horizontal bar chart DDI */}
        <div className="w-[480px] flex flex-col">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Dias de inventario (DDI) mediana por producto
          </p>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ddiData}
                layout="vertical"
                margin={{ top: 5, right: 40, left: 10, bottom: 5 }}
              >
                <XAxis
                  type="number"
                  tick={{ fontSize: 9, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 10, fill: "#374151" }}
                  axisLine={false}
                  tickLine={false}
                  width={120}
                />
                <ReferenceLine
                  x={15}
                  stroke="#EF4444"
                  strokeDasharray="4 4"
                  label={{
                    value: "Umbral 15 DDI",
                    position: "insideTopRight",
                    fontSize: 9,
                    fill: "#EF4444",
                  }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (!active || !payload?.[0]) return null;
                    const d = payload[0].payload;
                    return (
                      <div className="bg-white border border-gray-200 shadow-lg rounded-lg px-3 py-2 text-xs">
                        <p className="font-bold text-gray-800">{d.name}</p>
                        <p className="text-gray-600">
                          DDI mediana: {d.ddi} dias
                        </p>
                        <p className="text-gray-500">
                          {d.below15} de {d.tiendas} tiendas bajo umbral
                        </p>
                      </div>
                    );
                  }}
                />
                <Bar dataKey="ddi" radius={[0, 4, 4, 0]} barSize={22}>
                  {ddiData.map((d, i) => (
                    <Cell key={i} fill={getDdiColor(d.ddi)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="flex items-center gap-3 mt-1.5">
            {[
              { label: "Critico (<15)", color: "#EF4444" },
              { label: "Vigilar (15-25)", color: "#F59E0B" },
              { label: "OK (>25)", color: "#10B981" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1">
                <div
                  className="w-2.5 h-2.5 rounded"
                  style={{ backgroundColor: l.color }}
                />
                <span className="text-[9px] text-gray-500">{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Cycle line chart */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Ciclo de inventario (6 productos clave, uds totales)
          </p>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={cycleData}
                margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
              >
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 8, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                  interval={2}
                  angle={-30}
                  textAnchor="end"
                  height={30}
                />
                <YAxis
                  tick={{ fontSize: 9, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                  width={42}
                  tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`}
                  domain={[35000, 70000]}
                />
                <Tooltip content={<CycleTooltip />} />
                <Line
                  type="monotone"
                  dataKey="uds"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={(props) => {
                    const { cx, cy, payload, index } = props as { cx: number; cy: number; payload: { note?: string }; index: number };
                    if (payload.note) {
                      return (
                        <g key={index}>
                          <circle cx={cx} cy={cy} r={5} fill="#10B981" stroke="white" strokeWidth={2} />
                          <text x={cx} y={cy - 10} textAnchor="middle" fontSize={8} fill="#10B981" fontWeight="bold">
                            {payload.note}
                          </text>
                        </g>
                      );
                    }
                    return <circle key={index} cx={cx} cy={cy} r={2.5} fill="#10B981" strokeWidth={0} />;
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Callout */}
          <div className="bg-emerald-50 rounded-lg p-2.5 border border-emerald-200 mt-2">
            <p className="text-[10px] text-emerald-700 font-bold">
              Patron &quot;sierra&quot;: el inventario baja constantemente y se
              repone con cada entrega
            </p>
            <p className="text-[9px] text-emerald-600 mt-0.5">
              Tostadas 200g: 34 tiendas bajo umbral 15 DDI. La tostada no sobra
              — se necesita reabastecer las 200g.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
