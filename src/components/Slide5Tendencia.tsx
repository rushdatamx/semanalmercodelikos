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
  { mes: "Ago 25", roja70: 1280425, roja200: 36278, amarilla200: 43902 },
  { mes: "Sep 25", roja70: 1092867, roja200: 52540, amarilla200: 54659 },
  { mes: "Oct 25", roja70: 1342189, roja200: 39673, amarilla200: 39693 },
  { mes: "Nov 25", roja70: 1754577, roja200: 41908, amarilla200: 32637 },
  { mes: "Dic 25", roja70: 1709928, roja200: 54242, amarilla200: 63624 },
  { mes: "Ene 26", roja70: 1309462, roja200: 57885, amarilla200: 47386 },
];

const formatPesos = (v: number) => `$${(v / 1000).toFixed(0)}K`;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
      <p className="text-gray-500 text-xs mb-2">{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="text-gray-600">{p.name}:</span>
          <span className="text-gray-800 font-bold">${p.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

export default function Slide5Tendencia() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Tendencia de Ventas</h2>
      <p className="text-gray-500 text-sm mb-6">Venta mensual en pesos — últimos 6 meses</p>
      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={11} tickFormatter={formatPesos} />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: 12, color: "#374151" }}
              iconType="circle"
            />
            <Line
              type="monotone"
              dataKey="roja70"
              name="Roja 70 PZ"
              stroke="#E31837"
              strokeWidth={3}
              dot={{ r: 5, fill: "#E31837" }}
              activeDot={{ r: 7 }}
            />
            <Line
              type="monotone"
              dataKey="roja200"
              name="Roja 200g"
              stroke="#F26522"
              strokeWidth={2}
              dot={{ r: 4, fill: "#F26522" }}
            />
            <Line
              type="monotone"
              dataKey="amarilla200"
              name="Amarilla 200g"
              stroke="#27AE60"
              strokeWidth={2}
              dot={{ r: 4, fill: "#27AE60" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </SlideWrapper>
  );
}
