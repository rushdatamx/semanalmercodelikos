"use client";

import SlideWrapper from "./SlideWrapper";
import { Tag, ArrowUpRight, TrendingUp, CheckCircle, AlertTriangle, Info } from "lucide-react";

/* ── Row type ── */
interface CompRow {
  label: string;
  precio: string;
  uds: string;
  venta: string;
  bold?: boolean;
  isPartial?: boolean;
}

/* ── Tostada Roja 70PZ — desde Ago 2025 ── */
const roja70Rows: CompRow[] = [
  { label: "Ago 2025", precio: "$39.99", uds: "7,230", venta: "$289,128" },
  { label: "Sep 2025", precio: "$39.99", uds: "6,376", venta: "$255,002" },
  { label: "Oct 2025", precio: "$39.99", uds: "7,579", venta: "$303,075" },
  { label: "Nov 2025", precio: "$39.87", uds: "10,268", venta: "$409,401" },
  { label: "Dic 2025", precio: "$40.00", uds: "9,652", venta: "$386,113" },
  { label: "Ene 2026", precio: "$41.26", uds: "7,166", venta: "$295,685" },
  { label: "Feb 2026", precio: "$39.99", uds: "8,202", venta: "$327,990" },
  { label: "Mar 2026", precio: "$42.43", uds: "9,090", venta: "$385,713" },
  { label: "Abr 2026", precio: "$41.27", uds: "7,471", venta: "$308,329" },
  { label: "May 2026", precio: "$42.39", uds: "7,036", venta: "$298,260", bold: true, isPartial: true },
];

/* ── Tostada Roja 200g — desde Ago 2025 ── */
const roja200Rows: CompRow[] = [
  { label: "Ago 2025", precio: "$13.65", uds: "600", venta: "$8,192" },
  { label: "Sep 2025", precio: "$13.92", uds: "881", venta: "$12,259" },
  { label: "Oct 2025", precio: "$13.75", uds: "652", venta: "$8,958" },
  { label: "Nov 2025", precio: "$13.97", uds: "700", venta: "$9,779" },
  { label: "Dic 2025", precio: "$14.39", uds: "851", venta: "$12,248" },
  { label: "Ene 2026", precio: "$14.00", uds: "934", venta: "$13,071" },
  { label: "Feb 2026", precio: "$13.97", uds: "1,643", venta: "$22,953" },
  { label: "Mar 2026", precio: "$13.97", uds: "1,612", venta: "$22,530" },
  { label: "Abr 2026", precio: "$14.02", uds: "839", venta: "$11,756" },
  { label: "May 2026", precio: "$13.99", uds: "390", venta: "$5,450", bold: true, isPartial: true },
];

/* ── Tostada Amarilla 200g — desde Ago 2025 ── */
const amar200Rows: CompRow[] = [
  { label: "Ago 2025", precio: "$13.53", uds: "733", venta: "$9,913" },
  { label: "Sep 2025", precio: "$13.85", uds: "921", venta: "$12,754" },
  { label: "Oct 2025", precio: "$13.91", uds: "644", venta: "$8,963" },
  { label: "Nov 2025", precio: "$13.88", uds: "549", venta: "$7,615" },
  { label: "Dic 2025", precio: "$14.33", uds: "1,003", venta: "$14,367" },
  { label: "Ene 2026", precio: "$14.00", uds: "764", venta: "$10,700" },
  { label: "Feb 2026", precio: "$13.96", uds: "1,736", venta: "$24,232" },
  { label: "Mar 2026", precio: "$13.98", uds: "1,646", venta: "$23,013" },
  { label: "Abr 2026", precio: "$14.02", uds: "928", venta: "$13,015" },
  { label: "May 2026", precio: "$13.99", uds: "640", venta: "$8,959", bold: true, isPartial: true },
];

function ComparisonTable({ rows }: { rows: CompRow[] }) {
  return (
    <div className="overflow-auto rounded-lg border border-gray-200 bg-white flex-1">
      <table className="w-full text-[9px]">
        <thead>
          <tr className="bg-gray-100 text-gray-500 text-[8px] uppercase">
            <th className="text-left py-1 px-1.5"></th>
            <th className="text-right py-1 px-1.5">Precio</th>
            <th className="text-right py-1 px-1.5">Uds/sem</th>
            <th className="text-right py-1 px-1.5">Venta $/sem</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-gray-50 ${row.bold ? "bg-[#F5A623]/5" : ""}`}
            >
              <td className={`py-0.5 px-1.5 text-gray-700 ${row.bold ? "font-bold" : ""}`}>
                {row.label}
                {row.isPartial && (
                  <span className="ml-1 text-[7px] px-1 py-0.5 rounded bg-orange-100 text-orange-600 font-bold">
                    23 dias
                  </span>
                )}
              </td>
              <td className={`py-0.5 px-1.5 text-right ${row.bold ? "text-gray-800 font-bold" : "text-gray-600"}`}>
                {row.precio}
              </td>
              <td className={`py-0.5 px-1.5 text-right ${row.bold ? "text-gray-800 font-bold" : "text-gray-600"}`}>
                {row.uds}
              </td>
              <td className={`py-0.5 px-1.5 text-right ${row.bold ? "text-gray-800 font-bold" : "text-gray-600"}`}>
                {row.venta}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NegSlide3Promociones() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <Tag className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Tendencia Tostadas — Repunte o Caida?
          </h2>
          <p className="text-[10px] text-gray-500">
            3 SKUs Tostada (Roja 70PZ, Roja 200g, Amarilla 200g) -- Datos semanalizados desde Ago 2025
          </p>
        </div>
      </div>

      {/* Three blocks side by side */}
      <div className="grid grid-cols-3 gap-3 flex-1 min-h-0 mt-1">
        {/* CARD 1: Tostada Roja 70PZ */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          <div className="bg-[#F5A623]/5 border-b border-[#F5A623]/10 px-3 py-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] font-bold text-gray-800">Tostada Roja 70PZ</p>
                <p className="text-[9px] text-gray-500">Producto estrella</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-green-600" />
            </div>
          </div>

          <div className="px-2.5 py-2 flex-1 flex flex-col gap-1.5">
            {/* Price evolution */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold text-gray-600">$39.99</span>
              <span className="text-[9px] text-gray-400">--&gt;</span>
              <span className="text-[10px] font-bold text-[#F5A623]">$42.39</span>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#F5A623]/10 text-[#F5A623] font-bold">
                +6.0%
              </span>
            </div>
            <p className="text-[8px] text-gray-500 -mt-1">
              Precio nuevo sostenido desde Mar 2026
            </p>

            <ComparisonTable rows={roja70Rows} />

            <div className="flex items-center gap-1.5 bg-green-50 rounded-lg px-2 py-1 border border-green-200">
              <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
              <span className="text-[8px] font-bold text-green-700">
                Sin elasticidad negativa
              </span>
            </div>

            <div className="flex items-start gap-1">
              <Info className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-[8px] text-gray-500">
                Uds/sem se mantienen 7K-9K con precio +6%. Venta $/sem +18.6% vs prom 2025.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2: Tostada Roja 200g */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          <div className="bg-red-50 border-b border-red-100 px-3 py-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] font-bold text-gray-800">Tostada Roja 200g</p>
                <p className="text-[9px] text-gray-500">Repunte temporal</p>
              </div>
              <TrendingUp className="w-5 h-5 text-red-500 rotate-180" />
            </div>
          </div>

          <div className="px-2.5 py-2 flex-1 flex flex-col gap-1.5">
            {/* Price evolution */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold text-gray-600">~$14.00</span>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-bold">
                estable
              </span>
            </div>
            <p className="text-[8px] text-gray-500 -mt-1">
              Pico Feb-Mar +74% uds, cayendo desde Abr
            </p>

            <ComparisonTable rows={roja200Rows} />

            <div className="flex items-center gap-1.5 bg-red-50 rounded-lg px-2 py-1 border border-red-200">
              <AlertTriangle className="w-3 h-3 text-red-600 flex-shrink-0" />
              <span className="text-[8px] font-bold text-red-700">
                Pico no sostenido -62% vs pico
              </span>
            </div>

            <div className="flex items-start gap-1">
              <Info className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-[8px] text-gray-500">
                Mayo regresa al rango histórico (390-700/sem). Pico Feb-Mar fue ajuste puntual.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3: Tostada Amarilla 200g */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          <div className="bg-red-50 border-b border-red-100 px-3 py-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] font-bold text-gray-800">Tostada Amarilla 200g</p>
                <p className="text-[9px] text-gray-500">Repunte temporal</p>
              </div>
              <TrendingUp className="w-5 h-5 text-red-500 rotate-180" />
            </div>
          </div>

          <div className="px-2.5 py-2 flex-1 flex flex-col gap-1.5">
            {/* Price evolution */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold text-gray-600">~$14.00</span>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-bold">
                estable
              </span>
            </div>
            <p className="text-[8px] text-gray-500 -mt-1">
              Pico Feb-Mar +121% uds, cayendo desde Abr
            </p>

            <ComparisonTable rows={amar200Rows} />

            <div className="flex items-center gap-1.5 bg-red-50 rounded-lg px-2 py-1 border border-red-200">
              <AlertTriangle className="w-3 h-3 text-red-600 flex-shrink-0" />
              <span className="text-[8px] font-bold text-red-700">
                Pico no sostenido -54% vs pico
              </span>
            </div>

            <div className="flex items-start gap-1">
              <Info className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-[8px] text-gray-500">
                Mayo (640/sem) regresa a niveles pre-pico. Mismo patrón que Roja 200g.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer veredicto */}
      <div className="mt-2 bg-white rounded-xl border border-[#F5A623]/20 shadow-sm px-4 py-2 flex items-start gap-2">
        <div className="w-4 h-4 rounded-full bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-[9px] font-bold text-[#F5A623]">i</span>
        </div>
        <p className="text-[10px] text-gray-700 leading-tight">
          <span className="font-bold text-[#F5A623]">Solo Roja 70PZ muestra tendencia favorable sostenida.</span>{" "}
          Aumento de precio +6% no genero elasticidad negativa: uds/sem estables (7K-9K) y venta $/sem +18.6% vs 2025.{" "}
          <span className="font-bold text-red-600">Tostadas 200g (Roja y Amarilla)</span> tuvieron pico Feb-Mar pero regresaron a niveles pre-pico en May. Revisar que activacion comercial paso en Feb-Mar para replicarla.
        </p>
      </div>
    </SlideWrapper>
  );
}
