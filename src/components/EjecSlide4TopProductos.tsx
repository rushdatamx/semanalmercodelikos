"use client";

import SlideWrapper from "./SlideWrapper";
import { Award, Zap } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface PieProduct {
  nombre: string;
  venta: number;
  pct: number;
  color: string;
}

const pieData: PieProduct[] = [
  { nombre: "Tostada Roja 70PZ", venta: 4329583, pct: 69.3, color: "#E74C3C" },
  { nombre: "Papa Casera 45g (3 SKUs)", venta: 411185, pct: 6.6, color: "#3B82F6" },
  { nombre: "Durito Teja 20PZ", venta: 322877, pct: 5.2, color: "#F5A623" },
  { nombre: "Papa Casera 340g (3 SKUs)", venta: 273155, pct: 4.4, color: "#2563EB" },
  { nombre: "Tostada Roja 200g", venta: 249472, pct: 4.0, color: "#EF4444" },
  { nombre: "Tostada Amarilla 200g", venta: 246228, pct: 3.9, color: "#F97316" },
  { nombre: "Cacahuate Mixto Granel", venta: 168351, pct: 2.7, color: "#8B5CF6" },
  { nombre: "Otros (13 prods)", venta: 249545, pct: 4.0, color: "#D1D5DB" },
];

const RADIAN = Math.PI / 180;
const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  index,
}: any) => {
  const pct = pieData[index].pct;
  if (pct < 3.5) return null;
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
      fontSize={pct > 10 ? 13 : 10}
      fontWeight="bold"
    >
      {pct}%
    </text>
  );
};

const insights = [
  {
    title: "Tostada Roja 70PZ = motor del negocio",
    detail: "69% de la venta Abarrotes. Presente en las 40 tiendas. Producto ancla del anaquel.",
    color: "#E74C3C",
  },
  {
    title: "Tostadas 200g crecieron +619% YoY",
    detail: "Roja y Amarilla pasaron de $69K a $496K en Q1. Complemento ideal de la 70PZ.",
    color: "#F97316",
  },
  {
    title: "Papa Casera 45g: lanzada Ago 2025",
    detail: "3 sabores suman $411K (6.6%). Solo 8 meses en anaquel — categoría en construcción.",
    color: "#3B82F6",
  },
  {
    title: "Papa Casera 340g: nueva desde Dic 2025",
    detail: "3 sabores suman $273K (4.4%) en solo 4 meses. Crecimiento acelerado mes a mes.",
    color: "#2563EB",
  },
  {
    title: "Tostadas (3 SKUs) = 77% del sell-out",
    detail: "De $2.88M a $4.83M (+68% YoY). El core del portafolio sigue acelerando.",
    color: "#E74C3C",
  },
  {
    title: "Portafolio Abarrotes: de 8 a 20 SKUs",
    detail: "Más que duplicamos la oferta en 1 año. Papas y snacks diversifican sin perder foco.",
    color: "#F5A623",
  },
];

export default function EjecSlide4TopProductos() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#F5A623]/10 flex items-center justify-center">
            <Award className="w-5 h-5 text-[#F5A623]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Mix de Productos — Q1 2026</h2>
            <p className="text-[10px] text-gray-500">
              Participación por producto/grupo · Abarrotes · Papas agrupadas por formato · Total: $6.25M
            </p>
          </div>
        </div>
      </div>

      {/* Main: Pie left + Legend/Insights right */}
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Left: Pie Chart */}
        <div className="w-[420px] flex flex-col">
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-2 flex flex-col">
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={140}
                    innerRadius={55}
                    dataKey="venta"
                    stroke="#fff"
                    strokeWidth={2}
                    label={renderLabel}
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

            {/* Legend below pie */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 px-2 pb-1">
              {pieData.map((p, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: p.color }}
                  />
                  <span className="text-[9px] text-gray-600 truncate">{p.nombre}</span>
                  <span className="text-[9px] font-bold text-gray-800 ml-auto flex-shrink-0">
                    {p.venta >= 1000000
                      ? "$" + (p.venta / 1000000).toFixed(1) + "M"
                      : "$" + (p.venta / 1000).toFixed(0) + "K"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Insights */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-[#F5A623]" />
            <p className="text-xs font-bold text-gray-700">Insights para la junta</p>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-2 content-start">
            {insights.map((ins, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-2.5 flex items-start gap-2.5"
              >
                <div
                  className="w-1 h-full rounded-full flex-shrink-0 self-stretch"
                  style={{ backgroundColor: ins.color }}
                />
                <div>
                  <p className="text-[11px] font-bold text-gray-800">{ins.title}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{ins.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
