"use client";

import SlideWrapper from "./SlideWrapper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { mes: "Sep 25", papaNat: 37015, miniSC: 31954, rotiniSC: 29935, cacBot: 23142, miniCC: 27683 },
  { mes: "Oct 25", papaNat: 15086, miniSC: 10960, rotiniSC: 8691, cacBot: 12256, miniCC: 11713 },
  { mes: "Nov 25", papaNat: 46036, miniSC: 41748, rotiniSC: 38294, cacBot: 28104, miniCC: 37392 },
  { mes: "Dic 25", papaNat: 26439, miniSC: 25215, rotiniSC: 22937, cacBot: 22022, miniCC: 25080 },
  { mes: "Ene 26", papaNat: 13116, miniSC: 14514, rotiniSC: 9525, cacBot: 11885, miniCC: 3268 },
  { mes: "Feb 26", papaNat: 25713, miniSC: 25512, rotiniSC: 19957, cacBot: 20328, miniCC: 6296 },
];

const lines = [
  { key: "papaNat", name: "Papa Deshid. Natural", color: "#EC4899" },
  { key: "miniSC", name: "Minicuadro S/Chile", color: "#3B82F6" },
  { key: "rotiniSC", name: "Rotini Sin Chile", color: "#F5A623" },
  { key: "cacBot", name: "Cacahuate Botanero", color: "#8B5CF6" },
  { key: "miniCC", name: "Minicuadro C/Chile", color: "#27AE60" },
];

const formatPesos = (v: number) => `$${(v / 1000).toFixed(0)}K`;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
      <p className="text-gray-500 text-xs mb-2">{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2 text-[11px]">
          <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="text-gray-600">{p.name}:</span>
          <span className="text-gray-800 font-bold">${p.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

export default function FyvSlide5Tendencia() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Tendencia de Ventas — Frutas y Verduras</h2>
      <p className="text-gray-500 text-xs mb-3">Top 5 productos por venta · Últimos 6 meses · Venta en pesos</p>
      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" stroke="#6B7280" fontSize={11} />
            <YAxis stroke="#6B7280" fontSize={10} tickFormatter={formatPesos} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 10 }} iconType="circle" />
            {lines.map((l) => (
              <Line
                key={l.key}
                type="monotone"
                dataKey={l.key}
                name={l.name}
                stroke={l.color}
                strokeWidth={2.5}
                dot={{ r: 4, fill: l.color }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </SlideWrapper>
  );
}
