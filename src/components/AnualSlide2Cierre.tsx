"use client";

import SlideWrapper from "./SlideWrapper";
import { Target, Activity } from "lucide-react";

/* ── Como cerramos 2026 ──
   FORECAST POR BLOQUES (bottom-up), no un porcentaje global:
     - BASE: los SKUs que ya vendian en ago-dic 2025 crecen al ritmo real que
       llevan en 2026 (+30.9% ene-jul).
     - NUEVOS: Papa 340g no existia en ago-dic 2025 (cero de ago a nov, $13.7k
       en dic) y hoy corre a $145k/mes. Se suma como venta nueva contra base
       cero — no como porcentaje sobre algo que no habia.
     - PISO +19%: el incremento mas bajo de 2026 (mayo) como suelo defensivo.
       No se activa en ningun mes; todos salen ~+38%.
   Sanity check: ago-2026 al dia 9 lleva $757,519 -> ~$2.61M extrapolado
   (+30.4% vs ago-2025), arriba del piso.
   Universo ampliado: 34 SKUs Abarrotes · 41 tiendas · corte 09-ago-2026. */

const T25 = 20361495;
const REAL26 = 14572052; // Ene-Jul 2026 real
const CREC_BASE = 30.9; // ritmo real del portafolio comparable, ene-jul
const APORTE_NUEVOS = 144679; // Papa 340g x3 sabores, $/mes que 2025 no tenia
const PISO_PCT = 19;

const proyMeses = [
  { mes: "Ago", v25: 2001305, proy: 2764131, base: 2619452 },
  { mes: "Sep", v25: 1685156, proy: 2350332, base: 2205653 },
  { mes: "Oct", v25: 1856381, proy: 2574444, base: 2429765 },
  { mes: "Nov", v25: 2132189, proy: 2935441, base: 2790762 },
  { mes: "Dic", v25: 2176779, proy: 2993804, base: 2849125 },
];

const H2_PROY = proyMeses.reduce((s, r) => s + r.proy, 0);
const CIERRE = REAL26 + H2_PROY;
const MAXP = Math.max(...proyMeses.map((r) => Math.max(r.proy, r.v25)));

const escenarios = [
  {
    nombre: "Base — al ritmo que ya llevamos",
    supuesto: "El portafolio crece +30.9% y Papa 340g suma $145k/mes",
    valor: CIERRE,
    color: "text-[#27AE60]",
    bg: "bg-green-50 border-green-300",
    dot: "bg-[#27AE60]",
    destacado: true,
  },
  {
    nombre: "Conservador — si el ritmo se enfria",
    supuesto: "Ago-Dic crece solo +19%, el mes mas flojo de 2026 (mayo)",
    valor: 26295705,
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
            Proyeccion Ago-Dic construida producto por producto, con piso en el mes mas flojo de 2026
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
                  <span
                    className={`text-[8px] font-bold leading-none ${
                      r.proy / r.v25 - 1 >= 0 ? "text-[#27AE60]" : "text-red-500"
                    }`}
                  >
                    {pct(r.proy, r.v25)}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-gray-400 text-center mt-1 leading-snug">
              Cada mes crece ~+38%: la base al ritmo real de 2026 mas los $145k/mes de Papa 340g que
              en ago-dic 2025 no existian. Muy por encima del piso de +19%.
            </p>
          </div>
        </div>

        {/* Derecha: ritmo mensual + escenarios */}
        <div className="w-[430px] flex flex-col gap-1.5 min-h-0">
          {/* De donde sale el +38%: los dos bloques */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm px-3 py-2">
            <p className="text-[10px] text-gray-500 font-semibold uppercase flex items-center gap-1.5 mb-1.5">
              <Activity className="w-3.5 h-3.5 text-[#F5A623]" />
              De donde sale el +38% mensual
            </p>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 rounded-lg bg-[#F5A623]/10 border border-[#F5A623]/25 px-2.5 py-1.5">
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-gray-800 leading-tight">
                    El portafolio de siempre
                  </p>
                  <p className="text-[9px] text-gray-500 leading-snug">
                    Crece al ritmo que ya lleva en 2026, no a uno inventado
                  </p>
                </div>
                <p className="text-lg font-bold text-[#F5A623] leading-none">+{CREC_BASE}%</p>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 px-2.5 py-1.5">
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-gray-800 leading-tight">
                    Papa 340g: venta contra base CERO
                  </p>
                  <p className="text-[9px] text-gray-500 leading-snug">
                    En ago-nov 2025 no se vendio una sola pieza
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-bold text-[#27AE60] leading-none">
                    +${(APORTE_NUEVOS / 1000).toFixed(0)}k
                  </p>
                  <p className="text-[8px] text-gray-500">al mes</p>
                </div>
              </div>
            </div>
            <p className="text-[9px] text-gray-500 leading-snug mt-1.5">
              Piso de <span className="font-bold text-[#F5A623]">+{PISO_PCT}%</span> (el mes mas
              flojo de 2026) por si el ritmo se enfria — <span className="font-bold">no se activa
              en ningun mes</span>. Agosto ya lleva $758k al dia 9: va en +30%.
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
              <span className="font-bold text-[#F5A623]">Por que es defendible:</span> no asume que
              aceleremos, solo que mantengamos el ritmo de los ultimos 7 meses. Ago-Dic es ademas la
              temporada mas fuerte (48% de la venta de 2025) y es justo cuando entra Papa 340g, que
              el año pasado no estaba en anaquel.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
