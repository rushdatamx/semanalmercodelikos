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

/* ── DDI by product (median, April 5 snapshot) — 10 key Abarrotes products ── */
const ddiData = [
  { name: "Roja 70PZ", ddi: 28, color: "#10B981", below15: 5, tiendas: 43 },
  { name: "Roja 200g", ddi: 17, color: "#F59E0B", below15: 18, tiendas: 39 },
  { name: "Amarilla 200g", ddi: 20, color: "#F59E0B", below15: 16, tiendas: 37 },
  { name: "Papa Nat 45g", ddi: 39, color: "#10B981", below15: 8, tiendas: 36 },
  { name: "Papa Fuego 45g", ddi: 52, color: "#10B981", below15: 7, tiendas: 39 },
  { name: "Papa Jal 45g", ddi: 82, color: "#10B981", below15: 7, tiendas: 38 },
  { name: "Papa Sal 340g", ddi: 62, color: "#10B981", below15: 7, tiendas: 39 },
  { name: "Papa Fuego 340g", ddi: 120, color: "#10B981", below15: 1, tiendas: 39 },
  { name: "Papa Jal 340g", ddi: 58, color: "#10B981", below15: 7, tiendas: 40 },
  { name: "Durito Teja", ddi: 64, color: "#10B981", below15: 6, tiendas: 30 },
];

/* ── Inventory cycle (total units, 20 Abarrotes products, 18 snapshots) ── */
const cycleData = [
  { date: "Mar 8", uds: 82858 },
  { date: "Mar 9", uds: 81200 },
  { date: "Mar 10", uds: 77619 },
  { date: "Mar 11", uds: 83883, note: "Entrega" },
  { date: "Mar 12", uds: 87654 },
  { date: "Mar 15", uds: 78807 },
  { date: "Mar 16", uds: 75856 },
  { date: "Mar 17", uds: 73936 },
  { date: "Mar 18", uds: 72039 },
  { date: "Mar 19", uds: 71026 },
  { date: "Mar 22", uds: 63544 },
  { date: "Mar 23", uds: 61829 },
  { date: "Mar 24", uds: 77495, note: "Entrega" },
  { date: "Mar 29", uds: 79042 },
  { date: "Mar 30", uds: 76591 },
  { date: "Mar 31", uds: 74040 },
  { date: "Abr 1", uds: 71352 },
  { date: "Abr 5", uds: 70681 },
];

const getDdiColor = (ddi: number) => {
  if (ddi <= 15) return "#EF4444";
  if (ddi <= 25) return "#F59E0B";
  return "#10B981";
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
      <p className="text-gray-600">{d.value.toLocaleString()} uds</p>
      {d.payload.note && (
        <p className="text-emerald-600 font-bold">{d.payload.note}</p>
      )}
    </div>
  );
};

export default function CrecAbaSlide3Inventario() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5 pb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Inventario Abarrotes — DDI y Ciclo
            </h2>
            <p className="text-[10px] text-gray-500">
              DDI mediana por producto (Abr 5) + ciclo de inventario 20 SKUs
              Abarrotes
            </p>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-1">
          <p className="text-[10px] text-amber-700 font-bold">
            34 tiendas de Tostadas 200g bajo umbral 15 DDI
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex gap-3 flex-1 min-h-0">
        {/* Left: Horizontal bar chart DDI */}
        <div className="w-[480px] flex flex-col">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Dias de inventario (DDI) mediana — 10 productos clave
          </p>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col">
            <div className="flex-1 min-h-0">
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
                  domain={[0, 130]}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 9, fill: "#374151" }}
                  axisLine={false}
                  tickLine={false}
                  width={110}
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
                <Bar dataKey="ddi" radius={[0, 4, 4, 0]} barSize={18}>
                  {ddiData.map((d, i) => (
                    <Cell key={i} fill={getDdiColor(d.ddi)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="flex items-center gap-3 mt-1">
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
        </div>

        {/* Right: Cycle line chart */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Ciclo de inventario (20 SKUs Abarrotes, uds totales)
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
                  domain={[55000, 95000]}
                />
                <Tooltip content={<CycleTooltip />} />
                <Line
                  type="monotone"
                  dataKey="uds"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={(props) => {
                    const { cx, cy, payload, index } = props as {
                      cx: number;
                      cy: number;
                      payload: { note?: string };
                      index: number;
                    };
                    if (payload.note) {
                      return (
                        <g key={index}>
                          <circle
                            cx={cx}
                            cy={cy}
                            r={5}
                            fill="#10B981"
                            stroke="white"
                            strokeWidth={2}
                          />
                          <text
                            x={cx}
                            y={cy - 10}
                            textAnchor="middle"
                            fontSize={8}
                            fill="#10B981"
                            fontWeight="bold"
                          >
                            {payload.note}
                          </text>
                        </g>
                      );
                    }
                    return (
                      <circle
                        key={index}
                        cx={cx}
                        cy={cy}
                        r={2.5}
                        fill="#10B981"
                        strokeWidth={0}
                      />
                    );
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Callout */}
          <div className="bg-emerald-50 rounded-lg p-2.5 border border-emerald-200 mt-2">
            <p className="text-[10px] text-emerald-700 font-bold">
              Patron de consumo continuo con reposicion semanal
            </p>
            <p className="text-[9px] text-emerald-600 mt-0.5">
              Inventario Abarrotes baja ~2,500 uds/dia. Tostadas 200g con 34
              tiendas bajo umbral = oportunidad de reabasto inmediata.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
