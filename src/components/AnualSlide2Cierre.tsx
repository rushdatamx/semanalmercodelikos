"use client";

import SlideWrapper from "./SlideWrapper";
import { Target, Activity } from "lucide-react";

/* ── Como cerramos 2026 ──
   FORECAST = NIVEL x ESTACIONALIDAD.
     - Nivel: $2.12M/mes desestacionalizado (promedio may-jul). Donde esta el
       negocio hoy, no donde empezo el ano.
     - Estacionalidad: indice de los 16 SKUs vivos los 12 meses de 2025,
       amortiguado 50% porque la curva de 2026 es mas plana (1.42x vs 2.03x).
   Cada mes proyecta un % distinto (+6% a +22%) porque cada mes tiene su propio
   peso estacional — no es una regla plana.
   Backtest abr-jul: 5.6% de error vs 10.2% del metodo anterior.
   Universo ampliado: 34 SKUs Abarrotes · 41 tiendas · corte 09-ago-2026. */

const T25 = 20361495;
const REAL26 = 14572052; // Ene-Jul 2026 real
const NIVEL = 2116907; // venta mensual desestacionalizada, promedio may-jul

const proyMeses = [
  { mes: "Ago", v25: 2001305, proy: 2210887, idx: 1.044 },
  { mes: "Sep", v25: 1685156, proy: 2053165, idx: 0.97 },
  { mes: "Oct", v25: 1856381, proy: 2119319, idx: 1.001 },
  { mes: "Nov", v25: 2132189, proy: 2370302, idx: 1.12 },
  { mes: "Dic", v25: 2176779, proy: 2308573, idx: 1.091 },
];

const H2_PROY = proyMeses.reduce((s, r) => s + r.proy, 0);
const CIERRE = REAL26 + H2_PROY;
const MAXP = Math.max(...proyMeses.map((r) => Math.max(r.proy, r.v25)));

const escenarios = [
  {
    nombre: "Base — el negocio se sostiene",
    supuesto: "Ago-Dic al nivel actual ($2.12M/mes) con su estacionalidad",
    valor: CIERRE,
    color: "text-[#27AE60]",
    bg: "bg-green-50 border-green-300",
    dot: "bg-[#27AE60]",
    destacado: true,
  },
  {
    nombre: "Conservador — el negocio deja de crecer",
    supuesto: "Ago-Dic cae al mes mas flojo de 2026 ($2.02M/mes)",
    valor: 25067169,
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
            Proyeccion Ago-Dic = nivel actual del negocio x la estacionalidad de cada mes
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
              El crecimiento vs 2025 varia por mes (+6% a +22%) porque cada mes de 2025 tenia un
              peso distinto. Diciembre crece poco porque diciembre-2025 ya fue un mes muy alto.
            </p>
          </div>
        </div>

        {/* Derecha: ritmo mensual + escenarios */}
        <div className="w-[430px] flex flex-col gap-1.5 min-h-0">
          {/* Como se construye el pronostico */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm px-3 py-2">
            <p className="text-[10px] text-gray-500 font-semibold uppercase flex items-center gap-1.5 mb-1.5">
              <Activity className="w-3.5 h-3.5 text-[#F5A623]" />
              Como se construye el pronostico
            </p>
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-[#F5A623]/10 border border-[#F5A623]/30 px-2 py-1 text-center flex-shrink-0">
                <p className="text-[8px] text-gray-500 uppercase font-semibold">Nivel hoy</p>
                <p className="text-[13px] font-bold text-[#F5A623] leading-tight">{mM(NIVEL)}</p>
                <p className="text-[8px] text-gray-500">al mes</p>
              </div>
              <span className="text-gray-400 font-bold text-sm">x</span>
              <div className="flex-1 min-w-0">
                <p className="text-[8px] text-gray-500 uppercase font-semibold mb-0.5">
                  Estacionalidad de cada mes
                </p>
                <div className="flex items-end gap-1 h-[34px]">
                  {proyMeses.map((r, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                      <div
                        className="w-full rounded-t bg-[#27AE60]"
                        style={{ height: `${((r.idx - 0.9) / 0.3) * 100}%` }}
                      />
                      <span className="text-[7px] text-gray-400 leading-none mt-0.5">{r.mes}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[9px] text-gray-500 leading-snug mt-1.5">
              El nivel sale de desestacionalizar may-jul: es donde esta el negocio{" "}
              <span className="font-bold">hoy</span>. Cada mes se multiplica por su propio indice, por
              eso Nov y Dic proyectan mas alto que Sep.
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
              <span className="font-bold text-[#F5A623]">Por que es defendible:</span> el pronostico
              no asume que aceleremos — solo que sostengamos el nivel de may-jul. Los 17 SKUs que ya
              vendian en 2025 crecen +14% y las Papas suman $2.5M que no existian. Contrastado contra
              abr-jul reales, el metodo erro <span className="font-bold">5.6%</span>.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
