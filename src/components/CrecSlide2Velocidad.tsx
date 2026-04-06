"use client";

import SlideWrapper from "./SlideWrapper";
import { Zap } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

/* ── Monthly velocity (uds/day) — 15 months ── */
const velocityData = [
  { mes: "2025-01", vel: 897 },
  { mes: "2025-02", vel: 1488 },
  { mes: "2025-03", vel: 1715 },
  { mes: "2025-04", vel: 1376 },
  { mes: "2025-05", vel: 1820 },
  { mes: "2025-06", vel: 1439 },
  { mes: "2025-07", vel: 1360 },
  { mes: "2025-08", vel: 2338 },
  { mes: "2025-09", vel: 2055 },
  { mes: "2025-10", vel: 2299 },
  { mes: "2025-11", vel: 2567 },
  { mes: "2025-12", vel: 2681 },
  { mes: "2026-01", vel: 2046 },
  { mes: "2026-02", vel: 2513 },
  { mes: "2026-03", vel: 2957 },
];

/* ── Velocity by category (Q1 2026, uds/day) ── */
const categories = [
  {
    name: "Tostada Roja 70PZ",
    vel: 1164,
    color: "#EF4444",
    total: "104,795 uds",
  },
  {
    name: "Papa Casera 45g",
    vel: 516,
    color: "#3B82F6",
    total: "46,406 uds",
  },
  {
    name: "Tostadas 200g",
    vel: 394,
    color: "#F59E0B",
    total: "35,466 uds",
  },
  {
    name: "Otros (44 SKU)",
    vel: 431,
    color: "#9CA3AF",
    total: "38,787 uds",
  },
];

const maxVel = Math.max(...categories.map((c) => c.vel));

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}) => {
  if (!active || !payload?.[0]) return null;
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-lg px-3 py-2 text-xs">
      <p className="font-bold text-gray-800">{label}</p>
      <p className="text-emerald-600 font-semibold">
        {payload[0].value.toLocaleString()} uds/dia
      </p>
    </div>
  );
};

export default function CrecSlide2Velocidad() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Velocidad de Venta Diaria
            </h2>
            <p className="text-[10px] text-gray-500">
              Unidades vendidas por dia — tendencia 15 periodos
            </p>
          </div>
        </div>
        {/* Hero metric */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[9px] text-gray-400 uppercase font-semibold">
              Q1 2025
            </p>
            <p className="text-lg font-bold text-gray-400">1,363</p>
            <p className="text-[9px] text-gray-400">uds/dia</p>
          </div>
          <div className="text-2xl text-emerald-500 font-bold">→</div>
          <div className="text-right bg-emerald-50 rounded-lg px-3 py-1.5 border border-emerald-200">
            <p className="text-[9px] text-emerald-600 uppercase font-semibold">
              Q1 2026
            </p>
            <p className="text-2xl font-bold text-emerald-700">2,505</p>
            <p className="text-[9px] text-emerald-600 font-bold">
              uds/dia (+84%)
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex gap-3 flex-1 min-h-0">
        {/* Area Chart */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Tendencia de velocidad de venta por periodo (unidades/dia)
          </p>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-3">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={velocityData}
                margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
              >
                <defs>
                  <linearGradient
                    id="velGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="mes"
                  tick={{ fontSize: 9, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                  angle={-30}
                  textAnchor="end"
                  height={35}
                />
                <YAxis
                  tick={{ fontSize: 9, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                  width={40}
                  domain={[500, 3200]}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine
                  y={1363}
                  stroke="#D1D5DB"
                  strokeDasharray="4 4"
                  label={{
                    value: "Q1 2025: 1,363",
                    position: "insideTopLeft",
                    fontSize: 9,
                    fill: "#9CA3AF",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="vel"
                  stroke="#10B981"
                  strokeWidth={2.5}
                  fill="url(#velGradient)"
                  dot={{ r: 3, fill: "#10B981", strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: "#10B981" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right panel: velocity by category */}
        <div className="w-[280px] flex flex-col">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Velocidad por categoria (Q1 2026)
          </p>
          <div className="flex-1 space-y-2.5">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-3"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] text-gray-700 font-semibold">
                    {cat.name}
                  </span>
                  <span className="text-sm font-bold" style={{ color: cat.color }}>
                    {cat.vel.toLocaleString()}
                  </span>
                </div>
                {/* Progress bar */}
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${(cat.vel / maxVel) * 100}%`,
                      backgroundColor: cat.color,
                    }}
                  />
                </div>
                <p className="text-[8px] text-gray-400">
                  {cat.total} en Q1 2026
                </p>
              </div>
            ))}
          </div>

          {/* Insight */}
          <div className="bg-emerald-50 rounded-lg p-2.5 border border-emerald-200 mt-2">
            <p className="text-[10px] text-emerald-700 font-bold">
              El producto VUELA del anaquel
            </p>
            <p className="text-[9px] text-emerald-600 mt-0.5">
              Velocidad casi duplicada en 12 periodos. Periodo 2026-03 alcanza
              2,957 uds/dia — el mejor registro historico.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
