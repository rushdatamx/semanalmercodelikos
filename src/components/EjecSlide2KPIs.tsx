"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, Trophy, Package, Layers } from "lucide-react";
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
    value: "$7.09M",
    badge: "+62% vs Q1 2025",
    badgeColor: "bg-green-100 text-green-700",
    icon: TrendingUp,
  },
  {
    label: "Mejor Mes",
    value: "2026-03: $3.01M",
    badge: "Récord histórico",
    badgeColor: "bg-purple-100 text-purple-700",
    icon: Trophy,
  },
  {
    label: "Unidades Q1 2026",
    value: "223,444",
    badge: "+83% vs Q1 2025",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: Package,
  },
  {
    label: "SKUs Activos",
    value: "44",
    badge: "vs 21 en Ene 2025",
    badgeColor: "bg-orange-100 text-orange-700",
    icon: Layers,
  },
];

const barData = [
  { mes: "2025-01", "2025": 1.14, "2026": 1.93 },
  { mes: "2025-02", "2025": 1.45, "2026": 2.15 },
  { mes: "2025-03", "2025": 1.80, "2026": 3.01 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-lg px-3 py-2 text-xs">
      <p className="font-bold text-gray-800 mb-1">{label}</p>
      {payload.map((p: any) => (
        <p key={p.name} style={{ color: p.color }} className="font-semibold">
          {p.name}: ${p.value.toFixed(2)}M
        </p>
      ))}
    </div>
  );
};

export default function EjecSlide2KPIs() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-[#8B5CF6]" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Crecimiento Q1 2026 vs Q1 2025</h2>
          <p className="text-[10px] text-gray-500">Sell-out acumulado Enero–Marzo</p>
        </div>
      </div>

      {/* Main layout: KPIs left + Chart right */}
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Left: KPI Cards */}
        <div className="w-[380px] grid grid-cols-1 gap-2.5">
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4.5 h-4.5 text-[#8B5CF6]" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase font-semibold">{kpi.label}</p>
                  <p className="text-base font-bold text-gray-800">{kpi.value}</p>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${kpi.badgeColor}`}>
                    {kpi.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Bar Chart */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Comparativo mensual (Millones MXN)
          </p>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                <XAxis
                  dataKey="mes"
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => v.replace("2025-", "")}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                  width={35}
                  tickFormatter={(v) => `$${v}M`}
                  domain={[0, 3.5]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
                  iconType="circle"
                  iconSize={8}
                />
                <Bar dataKey="2025" fill="#D1D5DB" radius={[4, 4, 0, 0]} barSize={40} />
                <Bar dataKey="2026" fill="#8B5CF6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Footer: Monthly breakdown */}
      <div className="mt-3 flex items-center justify-between bg-white rounded-lg border border-gray-200 shadow-sm px-5 py-2.5">
        <div className="text-center">
          <p className="text-[9px] text-gray-400 uppercase font-semibold">Ene 2026</p>
          <p className="text-sm font-bold text-gray-800">$1.93M</p>
          <p className="text-[9px] text-green-600 font-bold">+70%</p>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div className="text-center">
          <p className="text-[9px] text-gray-400 uppercase font-semibold">Feb 2026</p>
          <p className="text-sm font-bold text-gray-800">$2.15M</p>
          <p className="text-[9px] text-green-600 font-bold">+48%</p>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div className="text-center">
          <p className="text-[9px] text-gray-400 uppercase font-semibold">Mar 2026</p>
          <p className="text-sm font-bold text-gray-800">$3.01M</p>
          <p className="text-[9px] text-green-600 font-bold">+68%</p>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div className="text-center">
          <p className="text-[9px] text-gray-400 uppercase font-semibold">Q1 Total</p>
          <p className="text-sm font-bold text-[#8B5CF6]">$7.09M</p>
          <p className="text-[9px] text-green-600 font-bold">+62% YoY</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
