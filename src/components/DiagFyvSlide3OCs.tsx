"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle } from "lucide-react";
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

const ocData = [
  { name: "OC C782981\n18-abr", recibida: 2818, necesaria: 3910 },
  { name: "OC C785156\n07-may", recibida: 2730, necesaria: 3910 },
];

const coverageCards = [
  { oc: "C782981", fecha: "18-abr", uds: "2,818", dias: "~11 días", deficit: "-28%" },
  { oc: "C785156", fecha: "07-may", uds: "2,730", dias: "~10 días", deficit: "-30%" },
];

export default function DiagFyvSlide3OCs() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-red-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">El problema: OCs insuficientes</h2>
          <p className="text-[10px] text-gray-500">Comparación OC recibida vs. necesaria para 15 días de cobertura</p>
        </div>
      </div>

      <div className="flex gap-5 flex-1 min-h-0">
        {/* Left: Bar chart */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-2">Unidades por OC</p>
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={ocData} barCategoryGap="30%">
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#9CA3AF" }}
                axisLine={false}
                tickLine={false}
                domain={[0, 4500]}
              />
              <ReferenceLine
                y={3910}
                stroke="#16A085"
                strokeDasharray="6 3"
                strokeWidth={2}
                label={{
                  value: "Necesario 15d: 3,910 uds",
                  position: "top",
                  fontSize: 10,
                  fill: "#16A085",
                  fontWeight: 700,
                }}
              />
              <Bar dataKey="recibida" radius={[6, 6, 0, 0]} maxBarSize={80}>
                <LabelList
                  dataKey="recibida"
                  position="top"
                  formatter={(v) => Number(v).toLocaleString()}
                  style={{ fontSize: 12, fontWeight: 700, fill: "#374151" }}
                />
                {ocData.map((_, i) => (
                  <Cell key={i} fill="#EF4444" />
                ))}
              </Bar>
              <Bar dataKey="necesaria" radius={[6, 6, 0, 0]} maxBarSize={80}>
                <LabelList
                  dataKey="necesaria"
                  position="top"
                  formatter={(v) => Number(v).toLocaleString()}
                  style={{ fontSize: 12, fontWeight: 700, fill: "#374151" }}
                />
                {ocData.map((_, i) => (
                  <Cell key={i} fill="#16A085" opacity={0.3} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-1">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-[#EF4444]" />
              <span className="text-[10px] text-gray-500">OC recibida</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-[#16A085]/30" />
              <span className="text-[10px] text-gray-500">Necesaria (15 días)</span>
            </div>
          </div>
        </div>

        {/* Right: Coverage cards + callout */}
        <div className="w-[380px] flex flex-col gap-3">
          <p className="text-[10px] text-gray-500 font-semibold uppercase">Cobertura por OC</p>

          {coverageCards.map((c) => (
            <div key={c.oc} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-gray-800">OC {c.oc}</h3>
                <span className="text-[10px] text-gray-400">{c.fecha}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p className="text-[8px] text-gray-400 uppercase">Unidades</p>
                  <p className="text-sm font-bold text-gray-800">{c.uds}</p>
                </div>
                <div>
                  <p className="text-[8px] text-gray-400 uppercase">Cobertura</p>
                  <p className="text-sm font-bold text-amber-600">{c.dias}</p>
                </div>
                <div>
                  <p className="text-[8px] text-gray-400 uppercase">Déficit</p>
                  <p className="text-sm font-bold text-red-600">{c.deficit}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Callout */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <p className="text-sm font-bold text-red-700">Déficit del 30%</p>
            </div>
            <p className="text-[11px] text-red-700 leading-relaxed">
              Las OCs cubren solo <strong>10-11 días</strong> de venta cuando el ciclo de resurtido requiere <strong>15 días</strong>.
              La cadena vende <strong>261 uds/día</strong> de FyV — necesitamos OCs de al menos <strong>3,910 uds</strong>.
            </p>
          </div>

          {/* Key number */}
          <div className="bg-[#16A085] rounded-xl p-4 text-white text-center">
            <p className="text-[10px] opacity-80 uppercase font-semibold">Venta diaria FyV</p>
            <p className="text-3xl font-bold">261 uds</p>
            <p className="text-[10px] opacity-80">× 15 días = 3,910 uds necesarias</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
