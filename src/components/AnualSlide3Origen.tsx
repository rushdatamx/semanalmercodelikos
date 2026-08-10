"use client";

import SlideWrapper from "./SlideWrapper";
import { Layers, Package, Sparkles } from "lucide-react";

/* ── De donde viene el crecimiento (Ene-Jul 2025 vs Ene-Jul 2026) ──
   Universo ampliado: 34 SKUs Abarrotes · 41 tiendas · corte 09-ago-2026.
   Comparables = 17 SKUs que vendieron en ambos anos · Nuevos = 15 SKUs que
   nacieron en 2026 · Descontinuados = 2 SKUs que murieron.

   OJO con los porcentajes de la barra: suman mas de 100 porque los
   descontinuados RESTAN. El crecimiento neto es la suma de los tres bloques:
   comparables (+$1.5M) + nuevos (+$2.6M) - descontinuados (-$54k). */

const H1_25 = 10509686;
const H1_26 = 14572052;
const DELTA = H1_26 - H1_25;

const COMP = { p25: 10455975, p26: 11934628, u25: 295086, u26: 310916 };
const NUEVO = { p26: 2637424, u26: 201693 };
const MUERTO = { p25: 53711 };

const U25 = COMP.u25;
const U26 = COMP.u26 + NUEVO.u26;

/* Los SKUs comparables, agrupados por familia para que la tabla quepa.
   El cacahuate granel cae porque migro a las presentaciones nuevas de la
   misma linea; la papa 70g se descontinuo durante 2026. */
const comparables = [
  { nombre: "Tostada Roja 70PZ", p26: 9347549, vp: 32.7, vu: 28.1 },
  { nombre: "Durito Teja 20pzs", p26: 847974, vp: 1.2, vu: -8.1 },
  { nombre: "Cacahuate granel", nota: "migro a las 5 presentaciones nuevas", p26: 665350, vp: -42.0, vu: -42.0 },
  { nombre: "Tostada Amarilla 200g", p26: 423824, vp: 152.6, vu: 161.2 },
  { nombre: "Tostada Roja 200g", p26: 389866, vp: 124.0, vu: 133.4 },
  { nombre: "Cheto Mix / Mini Cuadro / Rueda", nota: "400g", p26: 256294, vp: 18.3, vu: 14.3 },
  {
    nombre: "Papa 70g / Fiesta Mix / Torcidito",
    nota: "descontinuados durante 2026 -- vendian $903k en 2025",
    p26: 3772,
    vp: -99.6,
    vu: -99.7,
  },
];

const topNuevos = [
  { nombre: "Papa Casera 45g", detalle: "3 sabores", venta: 1711748, uds: 179995 },
  { nombre: "Papa Casera 340g", detalle: "3 sabores", venta: 816217, uds: 15931 },
  { nombre: "Linea 215/170g", detalle: "5 presentaciones -- alta semana 28", venta: 53885, uds: 1940 },
  { nombre: "Palomitas 4Buddies", detalle: "3 sabores", venta: 38805, uds: 2871 },
  { nombre: "Rodajitas 4Buddies", detalle: "30g", venta: 16771, uds: 956 },
];

const mM = (n: number) => "$" + (n / 1_000_000).toFixed(1) + "M";
const fmt = (n: number) => "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
const uFmt = (n: number) => n.toLocaleString("en-US");
const pct = (a: number, b: number) => {
  const v = (a / b - 1) * 100;
  return (v >= 0 ? "+" : "") + v.toFixed(1) + "%";
};

/* Share sobre el crecimiento NETO. Se normaliza a 100 para la barra visual
   (los descontinuados restan, asi que los dos aportes crudos suman >100). */
const aporteComp = COMP.p26 - COMP.p25;
const aporteNuevo = NUEVO.p26;
const aporteBruto = aporteComp + aporteNuevo;
const shareComp = (aporteComp / aporteBruto) * 100;
const shareNuevo = (aporteNuevo / aporteBruto) * 100;

export default function AnualSlide3Origen() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <Layers className="w-6 h-6 text-[#F5A623]" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">De Donde Viene el Crecimiento</h2>
            <p className="text-[10px] text-gray-500">
              Ene-Jul 2025 vs Ene-Jul 2026 -- portafolio comparable vs SKUs nuevos
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 shadow-sm px-3 py-1.5 text-right">
          <p className="text-[9px] text-gray-500 uppercase font-semibold">Piezas vendidas</p>
          <p className="text-xl font-bold text-[#27AE60] leading-tight">{pct(U26, U25)}</p>
          <p className="text-[9px] text-gray-500">
            {uFmt(U25)} → {uFmt(U26)}
          </p>
        </div>
      </div>

      {/* Barra de composicion del crecimiento */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-2.5 mb-2">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[11px] text-gray-500 font-semibold uppercase">
            Los {fmt(DELTA)} de crecimiento se reparten asi
          </p>
          <p className="text-[11px] text-gray-500">
            {fmt(H1_25)} → <span className="font-bold text-gray-800">{fmt(H1_26)}</span>
          </p>
        </div>
        <div className="flex h-9 rounded-lg overflow-hidden">
          <div
            className="bg-[#F5A623] flex items-center justify-center"
            style={{ width: `${shareComp}%` }}
          >
            <span className="text-[12px] font-bold text-white">
              {shareComp.toFixed(0)}% portafolio actual
            </span>
          </div>
          <div
            className="bg-[#27AE60] flex items-center justify-center"
            style={{ width: `${shareNuevo}%` }}
          >
            <span className="text-[12px] font-bold text-white">
              {shareNuevo.toFixed(0)}% portafolio nuevo
            </span>
          </div>
        </div>
        <div className="flex mt-1">
          <div style={{ width: `${shareComp}%` }}>
            <p className="text-[10px] text-gray-500">
              +{fmt(aporteComp)} de los 17 SKUs que ya teniamos
            </p>
          </div>
          <div style={{ width: `${shareNuevo}%` }}>
            <p className="text-[10px] text-gray-500">
              +{fmt(NUEVO.p26)} de 15 SKUs que no existian en 2025
            </p>
          </div>
        </div>
        <p className="text-[9px] text-gray-400 mt-1 leading-snug">
          Neto de −{fmt(MUERTO.p25)} de 2 SKUs descontinuados que en 2025 si vendian.
        </p>
      </div>

      {/* Dos columnas */}
      <div className="flex gap-3 items-start">
        {/* Comparable */}
        <div className="flex-1 flex flex-col gap-1.5 min-w-0">
          <p className="text-[11px] text-gray-500 font-semibold uppercase flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-[#F5A623]" />
            Portafolio actual — 17 SKUs comparables
          </p>
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-3 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-semibold">Venta</p>
                <p className="text-[10px] text-gray-400">
                  {fmt(COMP.p25)} → {fmt(COMP.p26)}
                </p>
              </div>
              <p className="text-2xl font-bold text-[#F5A623]">{pct(COMP.p26, COMP.p25)}</p>
            </div>
            <div className="h-px bg-gray-100" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-semibold">Piezas</p>
                <p className="text-[10px] text-gray-400">
                  {uFmt(COMP.u25)} → {uFmt(COMP.u26)}
                </p>
              </div>
              <p className="text-2xl font-bold text-[#27AE60]">{pct(COMP.u26, COMP.u25)}</p>
            </div>
            <div className="rounded-lg bg-green-50 border border-green-200 px-2.5 py-1.5">
              <p className="text-[10px] text-gray-700 leading-snug">
                El portafolio de siempre crece{" "}
                <span className="font-bold text-[#27AE60]">en pesos y en piezas</span>, y su precio
                promedio subio +8.3%: no esta creciendo a base de descuento.
              </p>
            </div>
          </div>

          {/* Detalle SKU a SKU */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <table className="w-full text-[11px]">
              <thead>
                <tr className="bg-gray-100 text-gray-500 text-[9px] uppercase">
                  <th className="text-left py-1.5 px-2.5">Producto</th>
                  <th className="text-right py-1.5 px-2">Venta 2026</th>
                  <th className="text-right py-1.5 px-2.5">Var venta</th>
                  <th className="text-right py-1.5 px-2.5">Var piezas</th>
                </tr>
              </thead>
              <tbody>
                {comparables.map((p, i) => (
                  <tr key={i} className={`border-b border-gray-50 ${i % 2 === 1 ? "bg-gray-50/40" : ""}`}>
                    <td className="py-1.5 px-2.5">
                      <p className="text-gray-800 font-semibold leading-tight">{p.nombre}</p>
                      {p.nota && <p className="text-[9px] text-gray-400 leading-tight">{p.nota}</p>}
                    </td>
                    <td className="py-1.5 px-2 text-right text-gray-800 font-semibold">
                      {fmt(p.p26)}
                    </td>
                    <td
                      className={`py-1.5 px-2.5 text-right font-bold ${
                        p.vp >= 0 ? "text-green-600" : "text-gray-400"
                      }`}
                    >
                      {(p.vp >= 0 ? "+" : "") + p.vp.toFixed(0)}%
                    </td>
                    <td
                      className={`py-1.5 px-2.5 text-right font-bold ${
                        p.vu >= 0 ? "text-green-600" : "text-gray-400"
                      }`}
                    >
                      {(p.vu >= 0 ? "+" : "") + p.vu.toFixed(0)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Nuevos */}
        <div className="flex-1 flex flex-col gap-1.5 min-w-0">
          <p className="text-[11px] text-gray-500 font-semibold uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#27AE60]" />
            Portafolio nuevo — 15 SKUs desde cero
          </p>
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <table className="w-full text-[11px]">
              <thead>
                <tr className="bg-gray-100 text-gray-500 text-[9px] uppercase">
                  <th className="text-left py-1.5 px-2.5">Producto</th>
                  <th className="text-right py-1.5 px-2">Venta 2026</th>
                  <th className="text-right py-1.5 px-2.5">Piezas</th>
                </tr>
              </thead>
              <tbody>
                {topNuevos.map((p, i) => (
                  <tr key={i} className={`border-b border-gray-50 ${i % 2 === 1 ? "bg-gray-50/40" : ""}`}>
                    <td className="py-1.5 px-2.5">
                      <p className="text-gray-800 font-semibold leading-tight">{p.nombre}</p>
                      <p className="text-[9px] text-gray-400 leading-tight">{p.detalle}</p>
                    </td>
                    <td className="py-1.5 px-2 text-right text-gray-800 font-semibold">
                      {fmt(p.venta)}
                    </td>
                    <td className="py-1.5 px-2.5 text-right text-gray-600">{uFmt(p.uds)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-green-50 font-bold border-t border-green-200">
                  <td className="py-1.5 px-2.5 text-gray-800">Total nuevos</td>
                  <td className="py-1.5 px-2 text-right text-[#27AE60]">{fmt(NUEVO.p26)}</td>
                  <td className="py-1.5 px-2.5 text-right text-[#27AE60]">{uFmt(NUEVO.u26)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* La papa como palanca */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm px-3 py-2">
            <p className="text-[10px] text-gray-500 uppercase font-semibold mb-1">
              La papa es el motor del portafolio nuevo
            </p>
            <p className="text-[10px] text-gray-700 leading-snug">
              Las dos presentaciones suman{" "}
              <span className="font-bold text-[#27AE60]">{mM(2527965)}</span> — el 96% de todo lo
              nuevo. Junio fue su mejor mes ({fmt(748617)} entre las dos): si el resto del ano
              corriera a ese ritmo serian{" "}
              <span className="font-bold text-[#F5A623]">{mM(4972649)}</span> anuales adicionales.
            </p>
          </div>

          {/* Cierre argumental */}
          <div className="rounded-xl border border-[#F5A623]/30 bg-[#F5A623]/8 px-3 py-2">
            <p className="text-[10px] text-gray-700 leading-snug">
              <span className="font-bold text-[#F5A623]">
                El crecimiento es de volumen, no de precio.
              </span>{" "}
              Vendimos {pct(U26, U25)} mas piezas. El ticket promedio de la categoria baja de $35.29
              a $28.43 porque sumamos formatos de entrada (Papa 45g a ~$9.50, Palomitas a ~$13.50)
              que atraen mas compradores; en el portafolio comparable el precio de hecho{" "}
              <span className="font-bold">subio +8.3%</span>.
            </p>
          </div>
        </div>
      </div>

    </SlideWrapper>
  );
}
