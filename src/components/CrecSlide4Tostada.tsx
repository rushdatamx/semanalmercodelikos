"use client";

import SlideWrapper from "./SlideWrapper";
import {
  Star,
  TrendingUp,
  Clock,
  BarChart3,
  Award,
  Repeat,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

/* ── Monthly sales Roja 70PZ (15 months) ── */
const rojaMensual = [
  { mes: "2025-01", venta: 698473 },
  { mes: "2025-02", venta: 928648 },
  { mes: "2025-03", venta: 1180865 },
  { mes: "2025-04", venta: 998040 },
  { mes: "2025-05", venta: 1262404 },
  { mes: "2025-06", venta: 972202 },
  { mes: "2025-07", venta: 1005888 },
  { mes: "2025-08", venta: 1280425 },
  { mes: "2025-09", venta: 1092867 },
  { mes: "2025-10", venta: 1342189 },
  { mes: "2025-11", venta: 1754577 },
  { mes: "2025-12", venta: 1709928 },
  { mes: "2026-01", venta: 1309462 },
  { mes: "2026-02", venta: 1311962 },
  { mes: "2026-03", venta: 1708159 },
];

const fmt = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
};

const bullets = [
  {
    icon: Award,
    text: "Record P03-2026: $1.71M",
    sub: "Mejor periodo en la historia del producto",
  },
  {
    icon: TrendingUp,
    text: "Q1 2026: +54% vs Q1 2025",
    sub: "$2.81M → $4.33M en el trimestre",
  },
  {
    icon: Repeat,
    text: "Ciclo de restock: ~2 semanas",
    sub: "Entrega semanal OC MERCO",
  },
  {
    icon: Clock,
    text: "DDI mediana: 28 dias",
    sub: "Consume ~1,164 uds/dia en 43 tiendas",
  },
  {
    icon: BarChart3,
    text: "63.7% del negocio total",
    sub: "$18.6M acumulados en 15 meses",
  },
];

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
      <p className="text-red-600 font-semibold">{fmt(payload[0].value)}</p>
    </div>
  );
};

export default function CrecSlide4Tostada() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
            <Star className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Tostada Roja 70PZ: Motor del Negocio
            </h2>
            <p className="text-[10px] text-gray-500">
              El producto estrella que impulsa el crecimiento en MERCO
            </p>
          </div>
        </div>
      </div>

      {/* 3 Hero metrics */}
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[9px] text-gray-500 uppercase font-semibold">
            Venta acumulada
          </p>
          <p className="text-2xl font-bold text-red-500">$18.6M</p>
          <span className="text-[9px] px-1.5 py-0.5 rounded font-bold bg-red-50 text-red-600">
            63.7% del total DELIKOS
          </span>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[9px] text-gray-500 uppercase font-semibold">
            Velocidad Q1 2026
          </p>
          <p className="text-2xl font-bold text-emerald-600">1,164</p>
          <span className="text-[9px] px-1.5 py-0.5 rounded font-bold bg-emerald-50 text-emerald-600">
            uds/dia en 43 tiendas
          </span>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[9px] text-gray-500 uppercase font-semibold">
            DDI mediana actual
          </p>
          <p className="text-2xl font-bold text-amber-600">28</p>
          <span className="text-[9px] px-1.5 py-0.5 rounded font-bold bg-amber-50 text-amber-600">
            dias — solo 2 semanas de margen
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex gap-3 flex-1 min-h-0">
        {/* Line Chart */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Tendencia de venta por periodo — Tostada Roja 70PZ
          </p>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={rojaMensual}
                margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
              >
                <XAxis
                  dataKey="mes"
                  tick={{ fontSize: 8, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                  angle={-35}
                  textAnchor="end"
                  height={35}
                />
                <YAxis
                  tick={{ fontSize: 9, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                  width={45}
                  tickFormatter={(v) => fmt(v)}
                  domain={[500000, 1900000]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="venta"
                  stroke="#EF4444"
                  strokeWidth={2.5}
                  dot={(props) => {
                    const { cx, cy, payload, index } = props as { cx: number; cy: number; payload: { mes: string; venta: number }; index: number };
                    const isRecord =
                      payload.mes === "2026-03" || payload.mes === "2025-11";
                    return (
                      <g key={index}>
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isRecord ? 5 : 3}
                          fill={isRecord ? "#EF4444" : "#EF4444"}
                          stroke={isRecord ? "white" : "none"}
                          strokeWidth={isRecord ? 2 : 0}
                        />
                        {payload.mes === "2026-03" && (
                          <text
                            x={cx}
                            y={cy - 12}
                            textAnchor="middle"
                            fontSize={9}
                            fill="#EF4444"
                            fontWeight="bold"
                          >
                            Record: $1.71M
                          </text>
                        )}
                      </g>
                    );
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right sidebar: key facts */}
        <div className="w-[280px] flex flex-col">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Datos clave
          </p>
          <div className="space-y-1.5 flex-1">
            {bullets.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm px-2.5 py-2 flex items-start gap-2"
                >
                  <div className="w-6 h-6 rounded bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-800 font-bold leading-tight">
                      {b.text}
                    </p>
                    <p className="text-[8px] text-gray-400 leading-tight">
                      {b.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

{/* Callout removed */}
        </div>
      </div>
    </SlideWrapper>
  );
}
