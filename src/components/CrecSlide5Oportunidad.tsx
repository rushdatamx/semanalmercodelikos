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

/* ── Mini sparkline data (last 3 months for 200g) ── */
const sparkRoja = [
  { m: "Ene", v: 65 },
  { m: "Feb", v: 78 },
  { m: "Mar", v: 106 },
];
const sparkAmar = [
  { m: "Ene", v: 58 },
  { m: "Feb", v: 75 },
  { m: "Mar", v: 113 },
];

/* ── Summary argument ── */
const argumentos = [
  {
    icon: TrendingUp,
    text: "Q1 2026: +62.2% vs Q1 2025",
    detail: "$4.39M → $7.11M",
  },
  {
    icon: Zap,
    text: "2,505 uds/dia — velocidad casi duplicada",
    detail: "vs 1,363 en Q1 2025 (+84%)",
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
    text: "29 productos nuevos/expandidos desde Q1 2025",
    detail: "Generando $1.49M en Q1 2026",
  },
];

export default function CrecSlide5Oportunidad() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
          <Rocket className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Oportunidad de Crecimiento
          </h2>
          <p className="text-[10px] text-gray-500">
            Ordenar mas = vender mas. El mercado lo pide.
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
              Mantener OC quincenal de Tostada Roja 70PZ y surtir Tostadas 200g
              a las {tostadas200g.reduce((s, t) => s + t.below15, 0)} tiendas
              bajo umbral. El crecimiento lo respalda.
            </p>
          </div>
        </div>

        {/* Right: Resumen del Argumento */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1">
            Resumen del argumento
          </p>
          <div className="space-y-2 flex-1">
            {argumentos.map((a, i) => {
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

          {/* Bottom insight */}
          <div className="bg-gray-800 rounded-xl p-3 mt-2">
            <p className="text-[11px] text-white font-bold mb-1">
              Conclusion para el comprador
            </p>
            <p className="text-[10px] text-gray-300 leading-relaxed">
              DELIKOS crece +62% en Q1. La velocidad de venta se duplico.
              Las Tostadas 200g explotan (+472% y +871%) pero tienen tiendas
              sin stock. Cada dia sin producto es venta perdida.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
