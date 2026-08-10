"use client";

import SlideWrapper from "./SlideWrapper";
import { FlaskConical, TrendingUp, Boxes } from "lucide-react";

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

/* Tiendas que estaban en minimos antes de la carga */
const minimos = [
  { tienda: "MERCO Garcia", antes: "2", desp: "2,382", vBase: "1,255", vJun: "2,992" },
  { tienda: "MERCO Montemorelos", antes: "40", desp: "3,233", vBase: "466", vJun: "3,973" },
  { tienda: "MERCO Piedras Negras", antes: "59", desp: "4,784", vBase: "612", vJun: "2,227" },
  { tienda: "Saltillo Madero", antes: "65", desp: "3,595", vBase: "129", vJun: "1,661" },
  { tienda: "MERCO Cadereyta", antes: "70", desp: "3,936", vBase: "403", vJun: "2,252" },
];

const kFmt = (n: number) => (n >= 1000 ? Math.round(n / 1000) + "K" : String(n));

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
          <p className="text-[11px] text-gray-500 font-semibold uppercase">
            Inventario disponible vs venta semanal
          </p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[10px] text-gray-500">
              <span className="w-3 h-3 rounded-sm bg-[#C7D2E0]" /> Inventario en piso
            </span>
            <span className="flex items-center gap-1 text-[10px] text-gray-500">
              <span className="w-3 h-3 rounded-sm bg-[#F5A623]" /> Venta
            </span>
          </div>
        </div>
        <div className="flex items-end gap-1.5 h-[190px]">
          {semanas.map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-0.5">
              {/* cifras sobre las barras (visibles en PDF, sin depender del cursor) */}
              <div className="flex items-end justify-center gap-1 leading-none mb-0.5">
                <span className="text-[8px] text-gray-400 font-semibold">{kFmt(s.inv)}</span>
                <span className="text-[9px] text-[#F5A623] font-bold">{kFmt(s.venta)}</span>
              </div>
              <div className="w-full flex items-end justify-center gap-0.5 flex-1">
                {/* barra inventario */}
                <div
                  className="w-1/2 bg-[#C7D2E0] rounded-t"
                  style={{ height: `${(s.inv / maxInv) * 100}%` }}
                />
                {/* barra venta */}
                <div
                  className="w-1/2 rounded-t bg-[#F5A623]"
                  style={{ height: `${(s.venta / maxVta) * 100}%` }}
                />
              </div>
              <p className="text-[9px] text-gray-500 leading-none">{s.label}</p>
            </div>
          ))}
        </div>
        {/* eje de fases */}
        <div className="flex gap-1 mt-1">
          <div className="flex-1 text-center text-[9px] text-gray-400 border-t border-gray-200 pt-1">
            Piso vacio
          </div>
          <div className="flex-[2] text-center text-[10px] font-bold text-[#27AE60] border-t-2 border-[#27AE60] pt-1">
            SURTIDO 25-31 May
          </div>
          <div className="flex-[4] text-center text-[10px] font-bold text-[#F5A623] border-t-2 border-[#F5A623] pt-1">
            Se vende (Junio)
          </div>
          <div className="flex-[3] text-center text-[9px] text-gray-500 border-t border-gray-300 pt-1">
            Se agota el piso (Julio)
          </div>
          <div className="flex-[2] text-center text-[9px] text-gray-400 border-t border-gray-200 pt-1">
            Vuelve a entrar
          </div>
        </div>
      </div>

      {/* Fila inferior: tiendas en minimos */}
      <div className="grid grid-cols-5 gap-3 flex-1 min-h-0">
        <div className="col-span-3 flex flex-col gap-2 min-h-0">
          <p className="text-[11px] text-gray-500 font-semibold uppercase flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#F5A623]" />
            Las tiendas venian operando casi vacias
          </p>
          <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase sticky top-0">
                  <th className="text-left py-2 px-3">Tienda</th>
                  <th className="text-right py-2 px-2">Inv 20-May</th>
                  <th className="text-right py-2 px-2">Inv 03-Jun</th>
                  <th className="text-right py-2 px-2">Vta normal</th>
                  <th className="text-right py-2 px-3">Vta Jun</th>
                </tr>
              </thead>
              <tbody>
                {minimos.map((m, i) => (
                  <tr key={i} className={`border-b border-gray-50 ${i % 2 === 1 ? "bg-gray-50/40" : ""}`}>
                    <td className="py-2 px-3 text-gray-700 font-semibold truncate">{m.tienda}</td>
                    <td className="py-2 px-2 text-right text-[#E31837] font-bold">{m.antes}</td>
                    <td className="py-2 px-2 text-right text-gray-600">{m.desp}</td>
                    <td className="py-2 px-2 text-right text-gray-500">{m.vBase}</td>
                    <td className="py-2 px-3 text-right text-[#27AE60] font-bold">{m.vJun}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Derecha: la prueba en 2 numeros */}
        <div className="col-span-2 flex flex-col gap-2 min-h-0">
          <p className="text-[11px] text-gray-500 font-semibold uppercase flex items-center gap-1.5">
            <Boxes className="w-3.5 h-3.5 text-[#F5A623]" />
            Mismo mes, distinto surtido
          </p>
          <div className="rounded-xl border border-green-200 bg-green-50 shadow-sm px-3 py-2.5 flex items-center justify-between">
            <div className="min-w-0">
              <p className="text-[12px] font-bold text-gray-800">21 tiendas con carga fuerte</p>
              <p className="text-[10px] text-gray-500">533 → 1,976 uds</p>
            </div>
            <p className="text-3xl font-bold text-[#27AE60] flex-shrink-0">3.7x</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 shadow-sm px-3 py-2.5 flex items-center justify-between">
            <div className="min-w-0">
              <p className="text-[12px] font-bold text-gray-800">8 tiendas con poca carga</p>
              <p className="text-[10px] text-gray-500">216 → 249 uds</p>
            </div>
            <p className="text-3xl font-bold text-gray-400 flex-shrink-0">1.2x</p>
          </div>
          <div className="bg-[#F5A623]/8 rounded-xl border border-[#F5A623]/30 px-3 py-2 flex-1 flex items-center">
            <p className="text-[11px] text-gray-700 leading-snug">
              <span className="font-bold text-[#F5A623]">Garcia tenia 2 piezas. Montemorelos 40.</span>{" "}
              No marcaba agotado en sistema, pero con eso no se llena un anaquel. Habia demanda que no
              se podia atender.
            </p>
          </div>
        </div>
      </div>

    </SlideWrapper>
  );
}
