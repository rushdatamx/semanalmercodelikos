"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin, Award } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Tienda {
  nombre: string;
  venta: number;
  pct: number;
  growth: string;
}

const topTiendas: Tienda[] = [
  { nombre: "MERCO García", venta: 297195, pct: 4.2, growth: "+59%" },
  { nombre: "MERCO Los Pilares", venta: 283281, pct: 4.0, growth: "+31%" },
  { nombre: "MERCO Girasoles", venta: 268894, pct: 3.8, growth: "+44%" },
  { nombre: "MERCO Sdo. Sta. Catarina", venta: 268664, pct: 3.8, growth: "+33%" },
  { nombre: "MERCO El Jaral", venta: 265356, pct: 3.7, growth: "+79%" },
  { nombre: "MERCO Buenavista", venta: 263087, pct: 3.7, growth: "+31%" },
  { nombre: "MERCO Solidaridad", venta: 251937, pct: 3.6, growth: "+57%" },
  { nombre: "MERCO Mixcoac", venta: 251411, pct: 3.5, growth: "+111%" },
  { nombre: "MERCO San Roque", venta: 248583, pct: 3.5, growth: "+84%" },
  { nombre: "MERCO Montemorelos", venta: 226434, pct: 3.2, growth: "+72%" },
];

const maxTiendaVenta = topTiendas[0].venta;

interface PieProduct {
  nombre: string;
  venta: number;
  pct: number;
  color: string;
}

const pieData: PieProduct[] = [
  { nombre: "Tostada Roja 70PZ", venta: 4329583, pct: 61.0, color: "#E74C3C" },
  { nombre: "Papa Casera 45g (3)", venta: 411185, pct: 5.8, color: "#3B82F6" },
  { nombre: "Durito Teja 20PZ", venta: 322877, pct: 4.6, color: "#F5A623" },
  { nombre: "Papa Casera 340g (3)", venta: 273155, pct: 3.9, color: "#2563EB" },
  { nombre: "Tostada Roja 200g", venta: 249472, pct: 3.5, color: "#EF4444" },
  { nombre: "Tostada Amarilla 200g", venta: 246228, pct: 3.5, color: "#F97316" },
  { nombre: "Cacahuate Mixto Granel", venta: 168351, pct: 2.4, color: "#8B5CF6" },
  { nombre: "Minicuadro S/Chile 300g", venta: 106100, pct: 1.5, color: "#10B981" },
  { nombre: "Otros (38 prods)", venta: 985584, pct: 13.9, color: "#D1D5DB" },
];

const RADIAN = Math.PI / 180;
const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  pct,
}: any) => {
  if (pct < 3) return null;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={11}
      fontWeight="bold"
    >
      {pct}%
    </text>
  );
};

export default function EjecSlide3TopVentas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#F5A623]/10 flex items-center justify-center">
            <Award className="w-5 h-5 text-[#F5A623]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Top Ventas Q1 2026</h2>
            <p className="text-[10px] text-gray-500">
              Ranking por tienda y producto — Sell-out acumulado Ene–Mar
            </p>
          </div>
        </div>
        <div className="bg-[#F5A623]/10 rounded-lg px-3 py-1.5 border border-[#F5A623]/20">
          <p className="text-[9px] text-[#F5A623] uppercase font-semibold">Total Q1</p>
          <p className="text-lg font-bold text-[#F5A623]">$7.09M</p>
        </div>
      </div>

      {/* Main: Two columns */}
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Left: Top 10 Tiendas */}
        <div className="w-[420px] flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-[#F5A623]" />
            <p className="text-xs font-bold text-gray-700">Top 10 Tiendas</p>
          </div>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-3 overflow-auto">
            <div className="space-y-1.5">
              {topTiendas.map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 text-right text-[10px] font-bold text-gray-400">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-medium text-gray-800 truncate">
                        {t.nombre}
                      </span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[10px] font-bold text-gray-800">
                          ${(t.venta / 1000).toFixed(0)}K
                        </span>
                        <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1 rounded">
                          {t.growth}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full bg-[#F5A623]"
                        style={{ width: `${(t.venta / maxTiendaVenta) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100 text-center">
              <p className="text-[9px] text-gray-400">
                Top 10 = {topTiendas.reduce((a, t) => a + t.pct, 0).toFixed(0)}% de la venta
                total · Todas con crecimiento YoY
              </p>
            </div>
          </div>
        </div>

        {/* Right: Pie Chart + Legend */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-[#F5A623]" />
            <p className="text-xs font-bold text-gray-700">
              Mix de Productos (Papas agrupadas por formato)
            </p>
          </div>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex gap-2 min-h-0">
            {/* Pie */}
            <div className="w-[260px] flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={115}
                    innerRadius={45}
                    dataKey="venta"
                    stroke="#fff"
                    strokeWidth={2}
                    label={(props) => renderLabel({ ...props, pct: pieData[props.index].pct })}
                    labelLine={false}
                    isAnimationActive={false}
                  >
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex-1 flex flex-col justify-center space-y-1.5 overflow-auto">
              {pieData.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: p.color }}
                  />
                  <div className="flex-1 min-w-0 flex items-center justify-between">
                    <span className="text-[10px] text-gray-700 font-medium truncate">
                      {p.nombre}
                    </span>
                    <div className="flex items-center gap-1.5 flex-shrink-0 ml-1">
                      <span className="text-[10px] font-bold text-gray-800">
                        {p.venta >= 1000000
                          ? "$" + (p.venta / 1000000).toFixed(1) + "M"
                          : "$" + (p.venta / 1000).toFixed(0) + "K"}
                      </span>
                      <span className="text-[9px] text-gray-400">{p.pct}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
