"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp } from "lucide-react";

/* ── Serie mensual 2025 (12 meses reales) vs 2026 (Ene-Jul real + Ago-Dic proyectado) ──
   Fuente: venta_merco.xls al 09-ago-2026 · 34 SKUs Abarrotes · 41 tiendas
   (excl. 401/500/506/720/721/722/991)

   UNIVERSO AMPLIADO: los 20 SKUs del catalogo de Abarrotes MAS 14 SKUs de botana
   Delikos con venta real que no estan catalogados — los descontinuados de 2025
   (Papa 70g, Fiesta Mix, Torcidito, Durito 5pzs) y las altas de 2026 (linea
   215/170g). Se incluyen porque excluirlos borraria de la base 2025 producto que
   si se vendio ($1.1M) e inflaria el crecimiento de +38.7% a +51.9%.

   Proyeccion Ago-Dic = FORECAST POR BLOQUES (bottom-up):
     - Base comparable: los SKUs que ya vendian en ago-dic 2025 crecen al ritmo
       real que llevan en 2026 (+30.9%).
     - SKUs nuevos: Papa 340g practicamente no existia en ago-dic 2025 (cero de
       ago a nov, $13.7k en dic) y hoy corre a $145k/mes. Se SUMA como venta
       nueva, no como porcentaje.
     - Piso +19%: ningun mes proyecta menos que el incremento mas bajo de 2026
       (mayo). No se activa en ningun mes — todos salen ~+38%.
   Sanity check: agosto-2026 al dia 9 lleva $757,519; extrapolado a 31 dias son
   ~$2.61M = +30.4% vs ago-2025, arriba del piso y en linea con el bloque. */
interface Mes {
  mes: string;
  v25: number;
  u25: number;
  v26: number | null;
  u26: number | null;
  proy: number | null;
}

const serie: Mes[] = [
  { mes: "Ene", v25: 1074754, u25: 26206, v26: 1792574, u26: 58404, proy: null },
  { mes: "Feb", v25: 1401479, u25: 40276, v26: 1922987, u26: 64063, proy: null },
  { mes: "Mar", v25: 1744197, u25: 51606, v26: 2537889, u26: 80848, proy: null },
  { mes: "Abr", v25: 1490103, u25: 40243, v26: 2021637, u26: 67024, proy: null },
  { mes: "May", v25: 1833137, u25: 55425, v26: 2177216, u26: 80289, proy: null },
  { mes: "Jun", v25: 1474950, u25: 42546, v26: 2193620, u26: 96452, proy: null },
  { mes: "Jul", v25: 1491067, u25: 41546, v26: 1926129, u26: 65529, proy: null },
  { mes: "Ago", v25: 2001305, u25: 67042, v26: null, u26: null, proy: 2764131 },
  { mes: "Sep", v25: 1685156, u25: 53868, v26: null, u26: null, proy: 2350332 },
  { mes: "Oct", v25: 1856381, u25: 65884, v26: null, u26: null, proy: 2574444 },
  { mes: "Nov", v25: 2132189, u25: 66411, v26: null, u26: null, proy: 2935441 },
  { mes: "Dic", v25: 2176779, u25: 75807, v26: null, u26: null, proy: 2993804 },
];

const T25 = serie.reduce((s, r) => s + r.v25, 0);
const REAL26 = serie.reduce((s, r) => s + (r.v26 ?? 0), 0);
const CIERRE = REAL26 + serie.reduce((s, r) => s + (r.proy ?? 0), 0);
const U25_H1 = serie.slice(0, 7).reduce((s, r) => s + r.u25, 0);
const U26 = serie.reduce((s, r) => s + (r.u26 ?? 0), 0);

/* Escala comun para barras y linea */
const MAXV = Math.max(...serie.map((r) => Math.max(r.v25, r.v26 ?? 0, r.proy ?? 0)));
const CH = 300; // alto del area de grafico en px

const mM = (n: number) => "$" + (n / 1_000_000).toFixed(1) + "M";
const uFmt = (n: number) => n.toLocaleString("en-US");
const pct = (a: number, b: number) => {
  const v = (a / b - 1) * 100;
  return (v >= 0 ? "+" : "") + v.toFixed(0) + "%";
};

/* Puntos de la linea 2026 en coordenadas del SVG (viewBox 0..1200 x 0..CH) */
const px = (i: number) => (i + 0.5) * (1200 / 12);
const py = (v: number) => CH - (v / MAXV) * CH;

const real = serie.map((r, i) => (r.v26 != null ? { i, v: r.v26 } : null)).filter(Boolean) as { i: number; v: number }[];
const proyPts = serie.map((r, i) => (r.proy != null ? { i, v: r.proy } : null)).filter(Boolean) as { i: number; v: number }[];
const puente = [real[real.length - 1], proyPts[0]];

const path = (pts: { i: number; v: number }[]) =>
  pts.map((p, k) => `${k === 0 ? "M" : "L"} ${px(p.i)} ${py(p.v)}`).join(" ");

export default function AnualSlide1Combo() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-[#F5A623]" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Sell-Out Anual Abarrotes — 2025 vs 2026</h2>
            <p className="text-[10px] text-gray-500">
              34 SKUs Abarrotes -- 41 tiendas -- barras 2025 (ano cerrado) vs linea 2026
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-1.5 text-right">
            <p className="text-[9px] text-gray-500 uppercase font-semibold">Cierre 2025</p>
            <p className="text-base font-bold text-gray-700 leading-tight">{mM(T25)}</p>
          </div>
          <div className="rounded-lg border border-green-200 bg-green-50 shadow-sm px-3 py-1.5 text-right">
            <p className="text-[9px] text-gray-500 uppercase font-semibold">Proyeccion 2026</p>
            <p className="text-base font-bold text-[#27AE60] leading-tight">{mM(CIERRE)}</p>
            <p className="text-[9px] font-bold text-[#27AE60]">{pct(CIERRE, T25)}</p>
          </div>
        </div>
      </div>

      {/* Grafico combo */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 pt-2 pb-1 mb-2">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[11px] text-gray-500 font-semibold uppercase">Venta mensual $MXN</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[10px] text-gray-500">
              <span className="w-3 h-3 rounded-sm bg-[#C7D2E0]" /> 2025
            </span>
            <span className="flex items-center gap-1 text-[10px] text-gray-500">
              <span className="w-4 h-[3px] rounded bg-[#F5A623]" /> 2026 real
            </span>
            <span className="flex items-center gap-1 text-[10px] text-gray-500">
              <span
                className="w-4 h-0 border-t-[3px] border-dashed border-[#27AE60]"
                style={{ borderStyle: "dashed" }}
              />{" "}
              2026 proyectado
            </span>
          </div>
        </div>

        <div className="relative" style={{ height: CH }}>
          {/* Barras 2025 */}
          <div className="absolute inset-0 flex items-end gap-1.5">
            {serie.map((r, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                <span className="text-[8px] text-gray-400 font-semibold leading-none mb-0.5">
                  {mM(r.v25)}
                </span>
                <div
                  className="w-full bg-[#C7D2E0] rounded-t"
                  style={{ height: `${(r.v25 / MAXV) * 100}%` }}
                />
              </div>
            ))}
          </div>

          {/* Linea 2026 sobre las barras */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox={`0 0 1200 ${CH}`}
            preserveAspectRatio="none"
          >
            <path d={path(puente)} fill="none" stroke="#27AE60" strokeWidth="3" strokeDasharray="7 5" vectorEffect="non-scaling-stroke" />
            <path d={path(proyPts)} fill="none" stroke="#27AE60" strokeWidth="3" strokeDasharray="7 5" vectorEffect="non-scaling-stroke" />
            <path d={path(real)} fill="none" stroke="#F5A623" strokeWidth="3.5" vectorEffect="non-scaling-stroke" />
          </svg>

          {/* Puntos + etiquetas de la linea (HTML para que el texto no se deforme) */}
          <div className="absolute inset-0 pointer-events-none">
            {serie.map((r, i) => {
              const v = r.v26 ?? r.proy;
              if (v == null) return null;
              const esReal = r.v26 != null;
              return (
                <div
                  key={i}
                  className={`absolute -translate-y-1/2 flex flex-col ${
                    i === 11 ? "-translate-x-full items-end pr-1" : "-translate-x-1/2 items-center"
                  }`}
                  style={{ left: `${((i + 0.5) / 12) * 100}%`, top: `${(py(v) / CH) * 100}%` }}
                >
                  <span
                    className={`text-[9px] font-bold leading-none mb-0.5 px-1 rounded ${
                      esReal ? "text-[#F5A623] bg-white/90" : "text-[#27AE60] bg-white/90"
                    }`}
                  >
                    {mM(v)}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full border-2 border-white ${
                      esReal ? "bg-[#F5A623]" : "bg-[#27AE60]"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Eje X */}
        <div className="flex gap-1.5 mt-1">
          {serie.map((r, i) => (
            <div key={i} className="flex-1 text-center text-[10px] text-gray-500 font-medium">
              {r.mes}
            </div>
          ))}
        </div>
        <div className="flex gap-1.5 mt-0.5">
          <div className="flex-[7] text-center text-[9px] font-bold text-[#F5A623] border-t-2 border-[#F5A623] pt-0.5">
            REAL Ene-Jul 2026
          </div>
          <div className="flex-[5] text-center text-[9px] font-bold text-[#27AE60] border-t-2 border-dashed border-[#27AE60] pt-0.5">
            PROYECTADO Ago-Dic
          </div>
        </div>
        <p className="text-[9px] text-gray-400 text-center mt-1 leading-snug">
          Ago-Dic = la base comparable creciendo a su ritmo real (
          <span className="font-semibold">+30.9%</span>) mas los SKUs que ago-dic 2025 no tenia
          (Papa 340g, <span className="font-semibold">+$145k/mes</span>). Piso de +19% por si el
          ritmo se enfria — no se activa en ningun mes.
        </p>
      </div>

      {/* Fila inferior: tabla mensual + unidades */}
      <div className="flex gap-3 flex-1 min-h-0">
        <div className="flex-1 min-w-0 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden self-start">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="bg-gray-100 text-gray-500 text-[9px] uppercase">
                <th className="text-left py-1 px-2">$MXN</th>
                {serie.map((r) => (
                  <th key={r.mes} className="text-right py-1 px-1">
                    {r.mes}
                  </th>
                ))}
                <th className="text-right py-1 px-2 bg-gray-200">Ano</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-1 px-2 text-gray-500 font-semibold">2025</td>
                {serie.map((r) => (
                  <td key={r.mes} className="py-1 px-1 text-right text-gray-500">
                    {(r.v25 / 1000).toFixed(0)}K
                  </td>
                ))}
                <td className="py-1 px-2 text-right font-bold text-gray-700 bg-gray-50">{mM(T25)}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-1 px-2 text-gray-800 font-semibold">2026</td>
                {serie.map((r) => {
                  const v = r.v26 ?? r.proy!;
                  return (
                    <td
                      key={r.mes}
                      className={`py-1 px-1 text-right font-semibold ${
                        r.v26 != null ? "text-gray-900" : "text-[#27AE60]"
                      }`}
                    >
                      {(v / 1000).toFixed(0)}K
                    </td>
                  );
                })}
                <td className="py-1 px-2 text-right font-bold text-[#27AE60] bg-green-50">{mM(CIERRE)}</td>
              </tr>
              <tr>
                <td className="py-1 px-2 text-gray-400 font-semibold text-[10px]">Var</td>
                {serie.map((r) => {
                  const v = r.v26 ?? r.proy!;
                  const p = (v / r.v25 - 1) * 100;
                  return (
                    <td
                      key={r.mes}
                      className={`py-1 px-1 text-right text-[10px] font-bold ${
                        p >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {(p >= 0 ? "+" : "") + p.toFixed(0)}%
                    </td>
                  );
                })}
                <td className="py-1 px-2 text-right text-[11px] font-bold text-green-600 bg-green-50">
                  {pct(CIERRE, T25)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Panel unidades */}
        <div className="w-[218px] flex flex-col gap-1.5">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm px-3 py-2">
            <p className="text-[9px] text-gray-500 uppercase font-semibold">Piezas Ene-Jul</p>
            <div className="flex items-baseline gap-1.5">
              <p className="text-lg font-bold text-gray-800 leading-tight">{uFmt(U26)}</p>
              <span className="text-[11px] font-bold text-green-600">{pct(U26, U25_H1)}</span>
            </div>
            <p className="text-[9px] text-gray-400">vs {uFmt(U25_H1)} en 2025</p>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50 shadow-sm px-3 py-1.5">
            <p className="text-[9px] text-gray-500 uppercase font-semibold">Meses ganados</p>
            <div className="flex items-baseline gap-1.5">
              <p className="text-base font-bold text-[#27AE60] leading-tight">7 de 7</p>
              <span className="text-[9px] text-gray-500">rango +19% a +67%</span>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm px-3 py-1.5">
            <p className="text-[9px] text-gray-500 uppercase font-semibold">Como se proyecta</p>
            <p className="text-[9px] text-gray-700 leading-tight">
              Base <span className="font-bold text-[#F5A623]">+30.9%</span> (ritmo real 2026) +{" "}
              <span className="font-bold text-[#27AE60]">$145k/mes</span> de Papa 340g, que ago-dic
              2025 no tenia. Piso +19%.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
