"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, Trophy, Package, Layers } from "lucide-react";

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
    badgeColor: "bg-orange-100 text-orange-700",
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
    badgeColor: "bg-amber-100 text-amber-700",
    icon: Layers,
  },
];

const pivotData = [
  { mes: "Enero", v2025: "$1.14M", v2026: "$1.93M", delta: "+70%", deltaVal: 0.80 },
  { mes: "Febrero", v2025: "$1.45M", v2026: "$2.15M", delta: "+48%", deltaVal: 0.70 },
  { mes: "Marzo", v2025: "$1.80M", v2026: "$3.01M", delta: "+68%", deltaVal: 1.21 },
];

const totals = { v2025: "$4.39M", v2026: "$7.09M", delta: "+62%", deltaVal: 2.71 };

export default function EjecSlide2KPIs() {
  const maxDelta = Math.max(...pivotData.map((d) => d.deltaVal));

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-[#F5A623]/10 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-[#F5A623]" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Crecimiento Q1 2026 vs Q1 2025</h2>
          <p className="text-[10px] text-gray-500">Sell-out acumulado Enero–Marzo · MERCO</p>
        </div>
      </div>

      {/* Main layout: KPIs left + Pivot table right */}
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Left: KPI Cards */}
        <div className="w-[340px] grid grid-cols-1 gap-2">
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4.5 h-4.5 text-[#F5A623]" />
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

        {/* Right: Pivot Table */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1.5">
            Comparativo mensual (Millones MXN)
          </p>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-[11px] text-gray-500 uppercase font-semibold w-[100px]">Mes</th>
                  <th className="text-right py-3 px-4 text-[11px] text-gray-400 uppercase font-semibold">2025</th>
                  <th className="text-right py-3 px-4 text-[11px] text-[#F5A623] uppercase font-semibold">2026</th>
                  <th className="text-right py-3 px-4 text-[11px] text-gray-500 uppercase font-semibold">Crecimiento</th>
                  <th className="py-3 px-4 text-[11px] text-gray-500 uppercase font-semibold w-[180px]">Incremento</th>
                </tr>
              </thead>
              <tbody>
                {pivotData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold text-gray-800 text-[13px]">{row.mes}</td>
                    <td className="py-3.5 px-4 text-right text-gray-400 font-medium text-[13px]">{row.v2025}</td>
                    <td className="py-3.5 px-4 text-right text-gray-800 font-bold text-[13px]">{row.v2026}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="text-green-600 font-bold text-[13px] bg-green-50 px-2 py-0.5 rounded">
                        {row.delta}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#F5A623]"
                            style={{ width: `${(row.deltaVal / maxDelta) * 100}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-gray-500 font-medium w-[45px] text-right">
                          +${row.deltaVal.toFixed(1)}M
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-[#F5A623]/5 border-t-2 border-[#F5A623]/30">
                  <td className="py-3.5 px-4 font-bold text-gray-800 text-[14px]">Q1 Total</td>
                  <td className="py-3.5 px-4 text-right text-gray-400 font-bold text-[14px]">{totals.v2025}</td>
                  <td className="py-3.5 px-4 text-right text-[#F5A623] font-bold text-[15px]">{totals.v2026}</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="text-green-700 font-bold text-[14px] bg-green-100 px-2.5 py-1 rounded">
                      {totals.delta}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                        <div className="h-full rounded-full bg-[#F5A623]" style={{ width: "100%" }} />
                      </div>
                      <span className="text-[10px] text-[#F5A623] font-bold w-[45px] text-right">
                        +${totals.deltaVal.toFixed(1)}M
                      </span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>

            {/* Insight box */}
            <div className="mt-auto mx-3 mb-3 bg-[#F5A623]/8 rounded-lg px-4 py-2.5 border border-[#F5A623]/20">
              <p className="text-[11px] text-gray-700">
                <span className="font-bold text-[#F5A623]">Marzo 2026 = $3.01M</span>
                {" — "}récord histórico de sell-out. Crecimiento sostenido los 3 meses del trimestre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
