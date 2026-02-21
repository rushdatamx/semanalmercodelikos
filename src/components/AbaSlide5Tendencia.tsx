"use client";

import SlideWrapper from "./SlideWrapper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { mes: "Ago 25", venta: 1280425 },
  { mes: "Sep 25", venta: 1092867 },
  { mes: "Oct 25", venta: 1342189 },
  { mes: "Nov 25", venta: 1754577 },
  { mes: "Dic 25", venta: 1709928 },
  { mes: "Ene 26", venta: 1309462 },
];

const formatPesos = (v: number) => `$${(v / 1000).toFixed(0)}K`;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
      <p className="text-gray-500 text-xs mb-2">{label}</p>
      <div className="flex items-center gap-2 text-sm">
        <div className="w-2 h-2 rounded-full bg-[#E31837]" />
        <span className="text-gray-600">Roja 70PZ:</span>
        <span className="text-gray-800 font-bold">${payload[0].value.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default function AbaSlide5Tendencia() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Tendencia de Ventas — Abarrotes</h2>
      <p className="text-gray-500 text-sm mb-6">Tostada Roja 70PZ · Venta mensual en pesos — últimos 6 meses</p>
      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={11} tickFormatter={formatPesos} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="venta"
              name="Roja 70 PZ"
              stroke="#E31837"
              strokeWidth={3}
              dot={{ r: 5, fill: "#E31837" }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </SlideWrapper>
  );
}
