"use client";

import SlideWrapper from "./SlideWrapper";
import { BarChart3, AlertCircle, Package, Scale } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  LabelList,
} from "recharts";

const ddiData = [
  { nombre: "Japonés", ddi: 517, color: "#EF4444" },
  { nombre: "Virginia", ddi: 94, color: "#F59E0B" },
  { nombre: "Cantinero", ddi: 68, color: "#F59E0B" },
  { nombre: "Botanero", ddi: 52, color: "#F59E0B" },
  { nombre: "Conchitas", ddi: 45, color: "#F59E0B" },
  { nombre: "Rotini s/C", ddi: 28, color: "#16A085" },
  { nombre: "Churrito", ddi: 22, color: "#16A085" },
  { nombre: "Minicuadro c/C", ddi: 18, color: "#16A085" },
  { nombre: "Papa Nat", ddi: 15, color: "#10B981" },
  { nombre: "Rotini c/C", ddi: 14, color: "#EF4444" },
  { nombre: "Minicuadro s/C", ddi: 12, color: "#EF4444" },
  { nombre: "Papa Fuego", ddi: 8, color: "#EF4444" },
];

const insights = [
  {
    icon: Package,
    title: "9,154 uds en inventario",
    detail: "DDI promedio 35 días — parece holgado",
    color: "#16A085",
  },
  {
    icon: AlertCircle,
    title: "4 productos bajo presión",
    detail: "DDI < 15 días: operan al día sin colchón",
    color: "#EF4444",
  },
  {
    icon: Scale,
    title: "Diagnóstico raíz",
    detail: "Cacahuates inflan el promedio; productos de alta rotación no tienen suficiente stock",
    color: "#F59E0B",
  },
];

export default function DiagFyvSlide5Distribucion() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-[#16A085]/10 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-[#16A085]" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">La paradoja del inventario</h2>
          <p className="text-[10px] text-gray-500">DDI por producto — la distribución no refleja la demanda</p>
        </div>
      </div>

      <div className="flex gap-4 flex-1 min-h-0">
        {/* Left: DDI bar chart */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">Días de inventario (DDI) por producto</p>
          <ResponsiveContainer width="100%" height={420}>
            <BarChart data={ddiData} layout="vertical" barCategoryGap="20%">
              <XAxis
                type="number"
                tick={{ fontSize: 10, fill: "#9CA3AF" }}
                axisLine={false}
                tickLine={false}
                domain={[0, 550]}
              />
              <YAxis
                type="category"
                dataKey="nombre"
                tick={{ fontSize: 10, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
                width={95}
              />
              <ReferenceLine
                x={15}
                stroke="#16A085"
                strokeDasharray="6 3"
                strokeWidth={2}
                label={{
                  value: "Umbral 15d",
                  position: "top",
                  fontSize: 9,
                  fill: "#16A085",
                  fontWeight: 700,
                }}
              />
              <Bar dataKey="ddi" radius={[0, 4, 4, 0]} maxBarSize={24}>
                <LabelList
                  dataKey="ddi"
                  position="right"
                  style={{ fontSize: 10, fontWeight: 700, fill: "#374151" }}
                />
                {ddiData.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Right: Insight cards */}
        <div className="w-[340px] flex flex-col gap-3">
          <p className="text-[10px] text-gray-500 font-semibold uppercase">Hallazgos clave</p>

          {insights.map((ins, i) => {
            const Icon = ins.icon;
            return (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${ins.color}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: ins.color }} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800">{ins.title}</h3>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">{ins.detail}</p>
              </div>
            );
          })}

          {/* Callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex-1">
            <p className="text-[11px] text-amber-800 font-bold mb-1">
              Cacah. Japonés: DDI 517
            </p>
            <p className="text-[10px] text-amber-700 leading-relaxed">
              Tiene <strong>517 días de inventario</strong> — más de 1.5 años de stock para un producto que vende $32K en Q1. Mientras tanto, Minicuadro s/Chile (DDI 12) vende 3× más y opera sin margen.
            </p>
          </div>

          {/* Key metric */}
          <div className="bg-[#16A085] rounded-xl p-4 text-white text-center">
            <p className="text-[10px] opacity-80 uppercase font-semibold">DDI Promedio Cadena</p>
            <p className="text-3xl font-bold">35 días</p>
            <p className="text-[10px] opacity-80">Rango: 8 – 517 días</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
