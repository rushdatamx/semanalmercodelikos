"use client";

import SlideWrapper from "./SlideWrapper";
import { FlaskConical, TrendingUp, Boxes, ArrowRight } from "lucide-react";

/* ── El experimento: carga de fin de mayo y su resultado ── */

/* Evolucion semanal: inventario disponible vs venta */
interface Semana {
  label: string;
  fechas: string;
  inv: number;
  invTienda: number;
  venta: number;
  fase: "antes" | "carga" | "venta" | "agotado" | "recarga";
}

const semanas: Semana[] = [
  { label: "S20", fechas: "11-17 May", inv: 13957, invTienda: 399, venta: 4037, fase: "antes" },
  { label: "S21", fechas: "18-24 May", inv: 41751, invTienda: 1128, venta: 4467, fase: "carga" },
  { label: "S22", fechas: "25-31 May", inv: 85144, invTienda: 2301, venta: 15592, fase: "carga" },
  { label: "S23", fechas: "01-07 Jun", inv: 84648, invTienda: 2228, venta: 8207, fase: "venta" },
  { label: "S24", fechas: "08-14 Jun", inv: 66909, invTienda: 1761, venta: 12395, fase: "venta" },
  { label: "S25", fechas: "15-21 Jun", inv: 52959, invTienda: 1324, venta: 7783, fase: "venta" },
  { label: "S26", fechas: "22-28 Jun", inv: 44409, invTienda: 1169, venta: 7081, fase: "venta" },
  { label: "S27", fechas: "29Jun-05Jul", inv: 35673, invTienda: 892, venta: 5267, fase: "agotado" },
  { label: "S28", fechas: "06-12 Jul", inv: 28027, invTienda: 701, venta: 4944, fase: "agotado" },
  { label: "S29", fechas: "13-19 Jul", inv: 23488, invTienda: 587, venta: 2167, fase: "agotado" },
  { label: "S30", fechas: "20-26 Jul", inv: 41958, invTienda: 1049, venta: 2160, fase: "recarga" },
  { label: "S31", fechas: "27Jul-02Ago", inv: 73535, invTienda: 1838, venta: 4678, fase: "recarga" },
];

const maxInv = Math.max(...semanas.map((s) => s.inv));
const maxVta = Math.max(...semanas.map((s) => s.venta));

/* Tiendas con carga fuerte vs poca carga */
const grupos = [
  {
    titulo: "21 tiendas con carga fuerte",
    sub: "recibieron +2,000 uds",
    base: "533",
    jun: "1,976",
    mult: "3.7x",
    color: "#27AE60",
    bg: "bg-green-50 border-green-200",
  },
  {
    titulo: "8 tiendas con poca carga",
    sub: "recibieron menos de 500 uds",
    base: "216",
    jun: "249",
    mult: "1.2x",
    color: "#9CA3AF",
    bg: "bg-gray-50 border-gray-200",
  },
];

/* Tiendas que estaban en minimos antes de la carga */
const minimos = [
  { tienda: "MERCO Garcia", antes: "2", desp: "2,382", vBase: "1,255", vJun: "2,992" },
  { tienda: "MERCO Montemorelos", antes: "40", desp: "3,233", vBase: "466", vJun: "3,973" },
  { tienda: "MERCO Piedras Negras", antes: "59", desp: "4,784", vBase: "612", vJun: "2,227" },
  { tienda: "Saltillo Madero", antes: "65", desp: "3,595", vBase: "129", vJun: "1,661" },
  { tienda: "MERCO Cadereyta", antes: "70", desp: "3,936", vBase: "403", vJun: "2,252" },
];

const fmt = (n: number) => n.toLocaleString("en-US");

export default function NegSlide9CasoPapa() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <FlaskConical className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Caso Papa 45g — Cuando Hay Producto en Piso, Se Vende
          </h2>
          <p className="text-[10px] text-gray-500">
            Surtido de fin de Mayo 2026 y su resultado -- 40 tiendas -- evidencia semanal
          </p>
        </div>
      </div>

      {/* Fila superior: grafico semanal */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 mb-2">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[10px] text-gray-500 font-semibold uppercase">
            Inventario disponible vs venta semanal
          </p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[9px] text-gray-500">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#C7D2E0]" /> Inventario en piso
            </span>
            <span className="flex items-center gap-1 text-[9px] text-gray-500">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#F5A623]" /> Venta
            </span>
          </div>
        </div>
        <div className="flex items-end gap-1 h-[130px]">
          {semanas.map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-0.5">
              <div className="w-full flex items-end justify-center gap-0.5 flex-1">
                {/* barra inventario */}
                <div
                  className="w-1/2 bg-[#C7D2E0] rounded-t"
                  style={{ height: `${(s.inv / maxInv) * 100}%` }}
                  title={`Inv ${fmt(s.inv)}`}
                />
                {/* barra venta */}
                <div
                  className={`w-1/2 rounded-t ${
                    s.venta >= 12000 ? "bg-[#27AE60]" : "bg-[#F5A623]"
                  }`}
                  style={{ height: `${(s.venta / maxVta) * 100}%` }}
                  title={`Venta ${fmt(s.venta)}`}
                />
              </div>
              <p className="text-[7px] text-gray-400 leading-none">{s.label}</p>
            </div>
          ))}
        </div>
        {/* eje de fases */}
        <div className="flex gap-1 mt-1">
          <div className="flex-1 text-center text-[7px] text-gray-400 border-t border-gray-200 pt-0.5">
            Piso vacio
          </div>
          <div className="flex-[2] text-center text-[7px] font-bold text-[#27AE60] border-t-2 border-[#27AE60] pt-0.5">
            SURTIDO 25-31 May
          </div>
          <div className="flex-[4] text-center text-[7px] font-bold text-[#F5A623] border-t-2 border-[#F5A623] pt-0.5">
            Se vende (Junio)
          </div>
          <div className="flex-[3] text-center text-[7px] text-gray-500 border-t border-gray-300 pt-0.5">
            Se agota el piso (Julio)
          </div>
          <div className="flex-[2] text-center text-[7px] text-gray-400 border-t border-gray-200 pt-0.5">
            Vuelve a entrar
          </div>
        </div>
      </div>

      {/* Fila inferior: 2 bloques */}
      <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
        {/* IZQ: grupos con y sin carga */}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] text-gray-500 font-semibold uppercase flex items-center gap-1.5">
            <Boxes className="w-3.5 h-3.5 text-[#F5A623]" />
            La prueba: mismo mes, distinto surtido
          </p>
          {grupos.map((g, i) => (
            <div key={i} className={`rounded-xl border shadow-sm px-3 py-2 ${g.bg}`}>
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-gray-800">{g.titulo}</p>
                  <p className="text-[9px] text-gray-500">{g.sub}</p>
                </div>
                <p className="text-2xl font-bold flex-shrink-0" style={{ color: g.color }}>
                  {g.mult}
                </p>
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-[9px] text-gray-600">
                <span>venta normal {g.base} uds</span>
                <ArrowRight className="w-3 h-3 text-gray-400" />
                <span className="font-bold">junio {g.jun} uds</span>
              </div>
            </div>
          ))}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2 flex-1 flex flex-col justify-center">
            <p className="text-[10px] text-gray-600 leading-snug">
              <span className="font-bold text-[#27AE60]">37 de 40 tiendas subieron</span> (mediana 3.2x).
              La correlacion entre cuanto recibio cada tienda y cuanto vendio es{" "}
              <span className="font-bold">0.72</span> — el surtido explica el resultado, no una
              promocion ni un evento aislado.
            </p>
          </div>
        </div>

        {/* DER: tiendas en minimos */}
        <div className="flex flex-col gap-2 min-h-0">
          <p className="text-[10px] text-gray-500 font-semibold uppercase flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#F5A623]" />
            Venian operando casi vacias
          </p>
          <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-[9px]">
              <thead>
                <tr className="bg-gray-100 text-gray-500 text-[8px] uppercase sticky top-0">
                  <th className="text-left py-1.5 px-2">Tienda</th>
                  <th className="text-right py-1.5 px-1.5">Inv 20-May</th>
                  <th className="text-right py-1.5 px-1.5">Inv 03-Jun</th>
                  <th className="text-right py-1.5 px-1.5">Vta normal</th>
                  <th className="text-right py-1.5 px-2">Vta Jun</th>
                </tr>
              </thead>
              <tbody>
                {minimos.map((m, i) => (
                  <tr key={i} className={`border-b border-gray-50 ${i % 2 === 1 ? "bg-gray-50/40" : ""}`}>
                    <td className="py-1 px-2 text-gray-700 font-semibold truncate">{m.tienda}</td>
                    <td className="py-1 px-1.5 text-right text-[#E31837] font-bold">{m.antes}</td>
                    <td className="py-1 px-1.5 text-right text-gray-600">{m.desp}</td>
                    <td className="py-1 px-1.5 text-right text-gray-500">{m.vBase}</td>
                    <td className="py-1 px-2 text-right text-[#27AE60] font-bold">{m.vJun}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#F5A623]/8 rounded-xl border border-[#F5A623]/30 px-3 py-2">
            <p className="text-[10px] text-gray-700 leading-snug">
              <span className="font-bold text-[#F5A623]">Garcia tenia 2 piezas. Montemorelos 40.</span>{" "}
              No marcaba agotado en sistema, pero con eso no se llena un anaquel. Habia demanda que no
              se podia atender.
            </p>
          </div>
        </div>
      </div>

      {/* Franja de propuesta */}
      <div className="mt-2 bg-white rounded-xl border border-[#27AE60]/30 shadow-sm px-3 py-2 flex items-start gap-2">
        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-[9px] font-bold text-[#27AE60]">✓</span>
        </div>
        <p className="text-[10px] text-gray-700 leading-snug">
          <span className="font-bold text-[#27AE60]">La propuesta: dejenos surtir con base en nuestra data.</span>{" "}
          Surtimos la cadena el 25-31 de Mayo y la venta se triplico. Cuando el piso se agoto a mediados de Julio
          (de 2,301 a 587 uds por tienda), la venta cayo a 2,167 — <span className="font-bold">no bajo la demanda,
          se acabo el producto</span>. Con reposicion sostenida en lugar de cargas puntuales, esa venta se mantiene
          todo el anio.
        </p>
      </div>
    </SlideWrapper>
  );
}
