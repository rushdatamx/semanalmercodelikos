"use client";

import SlideWrapper from "./SlideWrapper";
import {
  Rocket,
  TrendingUp,
  Zap,
  ShieldAlert,
  Repeat,
  Package,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

/* ── 200g growth cards ── */
const tostadas200g = [
  {
    name: "Tostada Roja 200g",
    q1_2025: "$43,606",
    q1_2026: "$249,472",
    growth: "+472%",
    ddi: 17,
    below15: 18,
    tiendas: 39,
  },
  {
    name: "Tostada Amarilla 200g",
    q1_2025: "$25,365",
    q1_2026: "$246,228",
    growth: "+871%",
    ddi: 20,
    below15: 16,
    tiendas: 37,
  },
];

/* ── Mini sparkline data ── */
const sparkRoja = [
  { m: "P01", v: 65 },
  { m: "P02", v: 78 },
  { m: "P03", v: 106 },
];
const sparkAmar = [
  { m: "P01", v: 58 },
  { m: "P02", v: 75 },
  { m: "P03", v: 113 },
];

/* ── Key indicators ── */
const indicadores = [
  {
    icon: TrendingUp,
    text: "Abarrotes Q1: +65.6% vs Q1 2025",
    detail: "$3.79M → $6.27M",
  },
  {
    icon: Zap,
    text: "2,279 uds/dia — velocidad +131%",
    detail: "vs 988 en Q1 2025",
  },
  {
    icon: ShieldAlert,
    text: "Tostadas 200g: 34 tiendas bajo umbral 15 DDI",
    detail: "Oportunidad inmediata de reabastecimiento",
  },
  {
    icon: Repeat,
    text: "Ciclo de restock: ~2 semanas",
    detail: "Flujo continuo de consumo-reposicion",
  },
  {
    icon: Package,
    text: "10 SKUs nuevos aportan $729K en Q1",
    detail: "Papa 45g, Papa 340g y 4Buddies",
  },
];

export default function CrecAbaSlide5Oportunidad() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
          <Rocket className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Oportunidad de Crecimiento — Abarrotes
          </h2>
          <p className="text-[10px] text-gray-500">
            Datos Q1 2026 y oportunidades identificadas en el departamento
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Left: 200g growth cards */}
        <div className="w-[460px] flex flex-col gap-3">
          <p className="text-[10px] text-gray-500 font-semibold uppercase">
            Tostadas 200g — Crecimiento explosivo
          </p>

          {tostadas200g.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-sm font-bold text-gray-800">{t.name}</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-700">
                    {t.growth}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <p className="text-[8px] text-gray-400 uppercase">
                      Q1 2025
                    </p>
                    <p className="text-sm font-bold text-gray-400">
                      {t.q1_2025}
                    </p>
                  </div>
                  <div>
                    <p className="text-[8px] text-emerald-500 uppercase">
                      Q1 2026
                    </p>
                    <p className="text-sm font-bold text-emerald-600">
                      {t.q1_2026}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-bold ${
                      t.ddi <= 15
                        ? "bg-red-50 text-red-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    DDI: {t.ddi} dias
                  </div>
                  <span className="text-[9px] text-gray-500">
                    {t.below15} de {t.tiendas} tiendas bajo umbral
                  </span>
                </div>
              </div>

              {/* Mini trend */}
              <div className="w-[100px] flex flex-col items-center justify-center">
                <div className="flex items-end gap-1.5 h-[50px]">
                  {(i === 0 ? sparkRoja : sparkAmar).map((s, j) => (
                    <div key={j} className="flex flex-col items-center gap-0.5">
                      <div
                        className="w-5 rounded-t bg-emerald-400"
                        style={{ height: `${(s.v / 120) * 50}px` }}
                      />
                      <span className="text-[7px] text-gray-400">{s.m}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-0.5 mt-1">
                  <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                  <span className="text-[8px] text-emerald-600 font-bold">
                    Tendencia
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="bg-emerald-500 rounded-xl p-4 text-white shadow-md">
            <div className="flex items-center gap-2 mb-1.5">
              <CheckCircle2 className="w-5 h-5" />
              <p className="text-sm font-bold">Recomendacion</p>
            </div>
            <p className="text-[11px] leading-relaxed opacity-95">
              Mantener OC semanal de Tostada Roja 70PZ y surtir Tostadas 200g
              a las {tostadas200g.reduce((s, t) => s + t.below15, 0)} tiendas
              bajo umbral. El crecimiento del departamento lo respalda.
            </p>
          </div>
        </div>

        {/* Right: Key indicators */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Indicadores clave
          </p>
          <div className="space-y-2 flex-1">
            {indicadores.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] text-gray-800 font-bold">
                      {i + 1}. {a.text}
                    </p>
                    <p className="text-[9px] text-gray-500 mt-0.5">
                      {a.detail}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
