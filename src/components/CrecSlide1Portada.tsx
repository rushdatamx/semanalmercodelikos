"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, CalendarDays, Package, Store } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const kpis = [
  {
    label: "Venta Q1 2026",
    value: "$7.11M",
    badge: "+62.2% vs Q1 2025",
    badgeColor: "bg-emerald-100 text-emerald-700",
    icon: TrendingUp,
  },
  {
    label: "Marzo 2026",
    value: "$3.01M",
    badge: "Record historico",
    badgeColor: "bg-amber-100 text-amber-700",
    icon: CalendarDays,
  },
  {
    label: "Productos activos",
    value: "50",
    badge: "29 nuevos desde Q1 2025",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: Package,
  },
  {
    label: "Tiendas activas",
    value: "43",
    badge: "100% cobertura",
    badgeColor: "bg-purple-100 text-purple-700",
    icon: Store,
  },
];

const barData = [
  { mes: "P01", v2025: 1136570, v2026: 1948127 },
  { mes: "P02", v2025: 1451856, v2026: 2150031 },
  { mes: "P03", v2025: 1797487, v2026: 3014379 },
];

const fmt = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; fill: string }>;
  label?: string;
}) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-lg px-3 py-2 text-xs">
      <p className="font-bold text-gray-800 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.fill }} className="font-semibold">
          {p.name}: {fmt(p.value)}
        </p>
      ))}
    </div>
  );
};

export default function CrecSlide1Portada() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Record de Crecimiento Q1 2026
          </h2>
          <p className="text-[10px] text-gray-500">
            DELIKOS en MERCO — Periodos 01-03 2026 vs 2025
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-2.5 mb-3">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-[9px] text-gray-500 uppercase font-semibold leading-tight">
                  {kpi.label}
                </p>
              </div>
              <p className="text-2xl font-bold text-gray-800 leading-tight">
                {kpi.value}
              </p>
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded font-bold mt-1 self-start ${kpi.badgeColor}`}
              >
                {kpi.badge}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bar Chart */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[10px] text-gray-500 font-semibold uppercase">
            Venta por periodo Q1 — 2025 vs 2026
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded bg-gray-300" />
              <span className="text-[9px] text-gray-500">2025</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded bg-emerald-500" />
              <span className="text-[9px] text-gray-500">2026</span>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex gap-4">
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                barGap={8}
              >
                <XAxis
                  dataKey="mes"
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(v) => fmt(v)}
                  tick={{ fontSize: 10, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                  width={50}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="v2025"
                  name="2025"
                  fill="#D1D5DB"
                  radius={[4, 4, 0, 0]}
                  barSize={50}
                />
                <Bar
                  dataKey="v2026"
                  name="2026"
                  fill="#10B981"
                  radius={[4, 4, 0, 0]}
                  barSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Right insight panel */}
          <div className="w-[220px] flex flex-col justify-center gap-3">
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
              <p className="text-[10px] text-emerald-600 font-semibold uppercase mb-1">
                Crecimiento Q1
              </p>
              <p className="text-3xl font-bold text-emerald-700">+62.2%</p>
              <p className="text-[10px] text-gray-500 mt-0.5">
                $4.39M → $7.11M
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p className="text-[10px] text-amber-600 font-semibold uppercase mb-1">
                Marzo 2026
              </p>
              <p className="text-lg font-bold text-amber-700">
                Mejor mes en 15 meses
              </p>
              <p className="text-[10px] text-gray-500 mt-0.5">
                +68% vs Mar 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
