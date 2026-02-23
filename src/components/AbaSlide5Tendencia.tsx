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
  { mes: "Sep 25", tostadaRoja: 1092866, durito: 135786, papaNat45: 39952, cacMixto: 82719, tostadaRoja200: 52540 },
  { mes: "Oct 25", tostadaRoja: 1342189, durito: 40801, papaNat45: 83267, cacMixto: 66506, tostadaRoja200: 39673 },
  { mes: "Nov 25", tostadaRoja: 1754576, durito: 13436, papaNat45: 49647, cacMixto: 65618, tostadaRoja200: 41908 },
  { mes: "Dic 25", tostadaRoja: 1709927, durito: 1474, papaNat45: 80728, cacMixto: 51230, tostadaRoja200: 54242 },
  { mes: "Ene 26", tostadaRoja: 1309461, durito: 79111, papaNat45: 53970, cacMixto: 36485, tostadaRoja200: 57884 },
  { mes: "Feb 26", tostadaRoja: 1211786, durito: 105771, papaNat45: 50885, cacMixto: 45465, tostadaRoja200: 82453 },
];

const lines = [
  { key: "tostadaRoja", name: "Tostada Roja 70PZ", color: "#E31837" },
  { key: "durito", name: "Durito Teja 20pzs", color: "#F5A623" },
  { key: "papaNat45", name: "Papa Natural 45g", color: "#3B82F6" },
  { key: "cacMixto", name: "Cacahuate Mixto 1kg", color: "#8B5CF6" },
  { key: "tostadaRoja200", name: "Tostada Roja 200g", color: "#EC4899" },
];

const formatPesos = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  return `$${(v / 1000).toFixed(0)}K`;
};

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

export default function AbaSlide5Tendencia() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Tendencia de Ventas — Abarrotes</h2>
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
