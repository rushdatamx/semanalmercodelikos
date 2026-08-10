"use client";

import SlideWrapper from "./SlideWrapper";
import { Target, Activity } from "lucide-react";

/* ── Como cerramos 2026 ──
   Metodo: aplicar +18.8% (el incremento mensual mas bajo de 2026, mayo) sobre cada mes
   de Ago-Dic 2025. Piso observado, no estimacion.
   Universo ampliado: 34 SKUs Abarrotes · 41 tiendas · corte 09-ago-2026. */

const T25 = 20361495;
const REAL26 = 14572052; // Ene-Jul 2026 real

const proyMeses = [
  { mes: "Ago", v25: 2001305, proy: 2376949 },
  { mes: "Sep", v25: 1685156, proy: 2001459 },
  { mes: "Oct", v25: 1856381, proy: 2204822 },
  { mes: "Nov", v25: 2132189, proy: 2532399 },
  { mes: "Dic", v25: 2176779, proy: 2585359 },
];

/* Cada mes de 2026 gana a su equivalente de 2025 — la base del argumento */
const mesesGanados = [
  { mes: "Ene", var: 66.8 },
  { mes: "Feb", var: 37.2 },
  { mes: "Mar", var: 45.5 },
  { mes: "Abr", var: 35.7 },
  { mes: "May", var: 18.8, piso: true },
  { mes: "Jun", var: 48.7 },
  { mes: "Jul", var: 29.2 },
];
const MAXG = Math.max(...mesesGanados.map((r) => r.var));

const H2_PROY = proyMeses.reduce((s, r) => s + r.proy, 0);
const CIERRE = REAL26 + H2_PROY;
const MAXP = Math.max(...proyMeses.map((r) => Math.max(r.proy, r.v25)));

const escenarios = [
  {
    nombre: "Piso — al ritmo del mes mas flojo",
    supuesto: "Ago-Dic crece +18.8%, el minimo que hemos hecho en 2026",
    valor: CIERRE,
    color: "text-[#27AE60]",
    bg: "bg-green-50 border-green-300",
    dot: "bg-[#27AE60]",
    destacado: true,
  },
  {
    nombre: "Al ritmo promedio del ano",
    supuesto: "Ago-Dic crece +38.7%, como el promedio Ene-Jul",
    valor: 28231934,
    color: "text-gray-700",
    bg: "bg-white border-gray-200",
    dot: "bg-gray-400",
  },
];

const mM = (n: number) => "$" + (n / 1_000_000).toFixed(1) + "M";
const pct = (a: number, b: number) => {
  const v = (a / b - 1) * 100;
  return (v >= 0 ? "+" : "") + v.toFixed(0) + "%";
};

export default function AnualSlide2Cierre() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5 pb-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Target className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">Como Vamos a Cerrar 2026</h2>
          <p className="text-[10px] text-gray-500">
            Proyeccion Ago-Dic construida sobre el incremento mas bajo registrado en 2026
          </p>
        </div>
      </div>

      {/* Puente 2025 -> 2026 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 mb-2">
        <div className="flex items-center justify-between gap-2">
          <div className="text-center">
            <p className="text-[9px] text-gray-500 uppercase font-semibold">Cerramos 2025</p>
            <p className="text-2xl font-bold text-gray-700 leading-tight">{mM(T25)}</p>
          </div>
          <div className="flex-1 flex items-center gap-1.5">
            <div className="flex-1 h-px bg-gray-200" />
            <div className="rounded-lg bg-[#F5A623]/10 border border-[#F5A623]/30 px-3 py-1.5 text-center">
              <p className="text-[9px] text-gray-500 uppercase font-semibold">Real Ene-Jul</p>
              <p className="text-base font-bold text-[#F5A623] leading-tight">{mM(REAL26)}</p>
              <p className="text-[9px] font-bold text-green-600">+38.7%</p>
            </div>
            <div className="flex-1 h-px bg-gray-200" />
            <div className="rounded-lg bg-green-50 border border-green-300 px-3 py-1.5 text-center">
              <p className="text-[9px] text-gray-500 uppercase font-semibold">Proyectado Ago-Dic</p>
              <p className="text-base font-bold text-[#27AE60] leading-tight">{mM(H2_PROY)}</p>
              <p className="text-[9px] text-gray-500">5 meses</p>
            </div>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="text-center rounded-xl bg-green-50 border-2 border-[#27AE60] px-4 py-1.5">
            <p className="text-[9px] text-gray-500 uppercase font-semibold">Cierre 2026</p>
            <p className="text-2xl font-bold text-[#27AE60] leading-tight">{mM(CIERRE)}</p>
            <p className="text-[10px] font-bold text-[#27AE60]">{pct(CIERRE, T25)}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 flex-1 min-h-0">
        {/* Izquierda: desglose mensual proyectado */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-[11px] text-gray-500 font-semibold uppercase mb-1">
            Proyeccion mes a mes Ago-Dic vs 2025
          </p>
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-3 flex-1 flex flex-col">
            <div className="flex items-end gap-2 flex-1 min-h-0">
              {proyMeses.map((r, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                  <span className="text-[10px] font-bold text-[#27AE60] leading-none mb-0.5">
                    {mM(r.proy)}
                  </span>
                  <div className="w-full flex items-end justify-center gap-0.5 flex-1">
                    <div
                      className="w-1/2 bg-[#C7D2E0] rounded-t"
                      style={{ height: `${(r.v25 / MAXP) * 100}%` }}
                    />
                    <div
                      className="w-1/2 rounded-t border-2 border-dashed border-[#27AE60] bg-green-100"
                      style={{ height: `${(r.proy / MAXP) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-gray-500 mt-0.5">{r.mes}</span>
                  <span className="text-[8px] text-gray-400 leading-none">{mM(r.v25)} en 25</span>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-gray-400 text-center mt-1 leading-snug">
              Cada mes proyectado crece +18.8% sobre su equivalente de 2025 — el incremento mas bajo
              que hemos registrado este ano.
            </p>
          </div>
        </div>

        {/* Derecha: ritmo mensual + escenarios */}
        <div className="w-[430px] flex flex-col gap-1.5 min-h-0">
          {/* Evidencia: los 7 meses ganados */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm px-3 py-2">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[10px] text-gray-500 font-semibold uppercase flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#F5A623]" />
                Crecimiento mes a mes 2026 vs 2025
              </p>
              <p className="text-[11px] font-bold text-[#27AE60]">7 de 7 ganados</p>
            </div>
            <div className="flex items-end gap-1.5 h-[62px]">
              {mesesGanados.map((r, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                  <span
                    className={`text-[8px] font-bold leading-none mb-0.5 ${
                      r.piso ? "text-[#F5A623]" : "text-gray-500"
                    }`}
                  >
                    +{r.var.toFixed(0)}%
                  </span>
                  <div
                    className={`w-full rounded-t ${r.piso ? "bg-[#F5A623]" : "bg-[#27AE60]"}`}
                    style={{ height: `${(r.var / MAXG) * 100}%` }}
                  />
                  <span className="text-[8px] text-gray-400 leading-none mt-0.5">{r.mes}</span>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-gray-500 leading-snug mt-1.5">
              Ningun mes de 2026 ha caido contra 2025. El mas flojo fue{" "}
              <span className="font-bold text-[#F5A623]">mayo con +18.8%</span> — ese es el piso que
              usamos para proyectar Ago-Dic.
            </p>
          </div>

          <p className="text-[11px] text-gray-500 font-semibold uppercase mt-0.5">
            Escenarios de cierre
          </p>
          {escenarios.map((e, i) => (
            <div
              key={i}
              className={`rounded-xl border shadow-sm px-3 py-2 flex items-center gap-2.5 ${e.bg} ${
                e.destacado ? "border-2" : ""
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${e.dot}`} />
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-bold text-gray-800 leading-tight">{e.nombre}</p>
                <p className="text-[9px] text-gray-500 leading-snug">{e.supuesto}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className={`text-lg font-bold leading-tight ${e.color}`}>{mM(e.valor)}</p>
                <p className="text-[9px] font-bold text-gray-500">{pct(e.valor, T25)}</p>
              </div>
            </div>
          ))}

          <div className="rounded-xl border border-[#F5A623]/40 bg-[#F5A623]/8 px-3 py-2">
            <p className="text-[10px] text-gray-700 leading-snug">
              <span className="font-bold text-[#F5A623]">Por que el piso es solido:</span> los 17 SKUs
              que ya vendian en 2025 crecen +14% y las Papas suman $2.5M que en 2025 no existian.
              Ago-Dic es ademas la temporada mas fuerte del ano: en 2025 concentro el 48% de la venta.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
