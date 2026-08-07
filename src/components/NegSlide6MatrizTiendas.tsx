"use client";

import SlideWrapper from "./SlideWrapper";
import { Grid3x3 } from "lucide-react";

/* ── Matriz tienda x mes: venta 2026 sobre 2025, con var% YoY ── */
interface Celda {
  v: number;
  v25: number;
  var: number | null;
}

interface FilaTienda {
  nombre: string;
  meses: Celda[];
  total: number;
  total25: number;
  totalVar: number | null;
}

const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"];

const tiendas: FilaTienda[] = [
  { nombre: "MERCO GARCIA", meses: [{v:75057,v25:47628,var:58},{v:91029,v25:48134,var:89},{v:117624,v25:66171,var:78},{v:80134,v25:71026,var:13},{v:88327,v25:82727,var:7},{v:98042,v25:72407,var:35},{v:88343,v25:62991,var:40}], total: 638558, total25: 451085, totalVar: 42 },
  { nombre: "MERCO BUENAVISTA", meses: [{v:64015,v25:52517,var:22},{v:71180,v25:57819,var:23},{v:106273,v25:72504,var:47},{v:93183,v25:75538,var:23},{v:87648,v25:88883,var:-1},{v:91575,v25:73377,var:25},{v:74348,v25:74404,var:0}], total: 588222, total25: 495042, totalVar: 19 },
  { nombre: "MERCO LOS PILARES", meses: [{v:78350,v25:43493,var:80},{v:72475,v25:71337,var:2},{v:94830,v25:73869,var:28},{v:75585,v25:80316,var:-6},{v:91389,v25:82365,var:11},{v:91811,v25:77949,var:18},{v:79209,v25:79776,var:-1}], total: 583649, total25: 509104, totalVar: 15 },
  { nombre: "MERCO SOLIDARIDAD", meses: [{v:50558,v25:31226,var:62},{v:73557,v25:40896,var:80},{v:107617,v25:58989,var:82},{v:78142,v25:52606,var:49},{v:84602,v25:69462,var:22},{v:92538,v25:43316,var:114},{v:81167,v25:61530,var:32}], total: 568181, total25: 358025, totalVar: 59 },
  { nombre: "MERCO GIRASOLES", meses: [{v:61758,v25:37755,var:64},{v:76811,v25:54981,var:40},{v:91339,v25:71216,var:28},{v:77265,v25:64579,var:20},{v:78480,v25:78431,var:0},{v:71788,v25:50122,var:43},{v:70383,v25:61813,var:14}], total: 527824, total25: 418897, totalVar: 26 },
  { nombre: "MERCO MIXCOAC", meses: [{v:74908,v25:25911,var:189},{v:77557,v25:31965,var:143},{v:86337,v25:46639,var:85},{v:68582,v25:43552,var:57},{v:77529,v25:58081,var:33},{v:76495,v25:35770,var:114},{v:61894,v25:35743,var:73}], total: 523302, total25: 277661, totalVar: 88 },
  { nombre: "MERCO COLINAS", meses: [{v:52950,v25:34262,var:55},{v:67288,v25:41140,var:64},{v:92709,v25:54718,var:69},{v:83404,v25:39267,var:112},{v:78518,v25:37634,var:109},{v:67867,v25:42569,var:59},{v:63593,v25:46511,var:37}], total: 506329, total25: 296103, totalVar: 71 },
  { nombre: "MERCO SENDERO SANTA CATARINA", meses: [{v:56641,v25:45248,var:25},{v:60445,v25:60623,var:0},{v:107539,v25:70259,var:53},{v:66096,v25:53598,var:23},{v:70387,v25:60730,var:16},{v:79132,v25:49902,var:59},{v:64298,v25:55265,var:16}], total: 504538, total25: 395626, totalVar: 28 },
  { nombre: "MERCO EL JARAL", meses: [{v:71109,v25:27499,var:159},{v:61818,v25:38510,var:61},{v:95696,v25:57873,var:65},{v:78704,v25:51692,var:52},{v:76690,v25:64918,var:18},{v:67334,v25:51085,var:32},{v:51822,v25:61026,var:-15}], total: 503174, total25: 352603, totalVar: 43 },
  { nombre: "MERCO SAN ROQUE", meses: [{v:66315,v25:30895,var:115},{v:65976,v25:36530,var:81},{v:93230,v25:53883,var:73},{v:69641,v25:42888,var:62},{v:73978,v25:54205,var:36},{v:67102,v25:36775,var:82},{v:63938,v25:38205,var:67}], total: 500180, total25: 293380, totalVar: 70 },
];

const totalCadena = { meses: [{v:1790595,v25:1011279,var:77},{v:1922690,v25:1217578,var:58},{v:2537134,v25:1557837,var:63},{v:2021130,v25:1403335,var:44},{v:2177094,v25:1664232,var:31},{v:2193042,v25:1339041,var:64},{v:1925796,v25:1393720,var:38}], total: 14567480, total25: 9587022, totalVar: 52 };

const fmtK = (n: number) =>
  n >= 1000 ? "$" + (n / 1000).toFixed(0) + "K" : "$" + n.toFixed(0);

const fmtFull = (n: number) =>
  "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

const varColor = (v: number | null) => {
  if (v === null) return "text-[#2E75B6]";
  if (v >= 0) return "text-[#27AE60]";
  return "text-[#E31837]";
};

const varText = (v: number | null) => (v === null ? "NUEVO" : (v >= 0 ? "+" : "") + v + "%");

/* Celda de dos niveles: 2026 arriba en negro + var%, 2025 abajo en gris */
function Celda2({ c, bold = false, showVar = false }: { c: Celda; bold?: boolean; showVar?: boolean }) {
  return (
    <div className="flex flex-col items-end leading-tight">
      <div className="whitespace-nowrap">
        <span className={bold ? "text-gray-900 font-bold text-[14px]" : "text-gray-900 font-semibold text-[14px]"}>
          {fmtK(c.v)}
        </span>
        {showVar && (
          <span className={`ml-1.5 text-[11px] font-bold ${varColor(c.var)}`}>{varText(c.var)}</span>
        )}
      </div>
      <span className="text-[11px] text-gray-400">{fmtK(c.v25)}</span>
    </div>
  );
}

export default function NegSlide6MatrizTiendas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Grid3x3 className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">Venta Mes a Mes por Tienda</h2>
          <p className="text-[10px] text-gray-500">
            Top 10 tiendas por venta -- Ene-Jul 2026 -- monto 2026 y variacion vs 2025
          </p>
        </div>
      </div>

      {/* Leyenda */}
      <div className="flex items-center gap-4 mb-1.5 px-1">
        <span className="flex items-center gap-1.5 text-[10px] text-gray-500">
          <span className="w-3 h-2 rounded-sm bg-gray-800" /> Venta 2026 + variacion
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-gray-400">
          <span className="w-3 h-2 rounded-sm bg-gray-300" /> Venta 2025 (mismo mes)
        </span>
      </div>

      {/* Matriz */}
      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm min-h-0">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase sticky top-0 z-10">
              <th className="text-left py-2 px-3 sticky left-0 bg-gray-100">Tienda</th>
              {MESES.map((m) => (
                <th key={m} className="text-right py-2 px-2">{m}</th>
              ))}
              <th className="text-right py-2 px-3 bg-gray-200">Total</th>
            </tr>
          </thead>
          <tbody>
            {tiendas.map((t, i) => (
              <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50/40" : "bg-white"}`}>
                <td className={`py-1.5 px-3 text-gray-700 font-semibold text-[12px] truncate max-w-[190px] sticky left-0 ${i % 2 === 1 ? "bg-gray-50/40" : "bg-white"}`}>
                  {t.nombre}
                </td>
                {t.meses.map((c, j) => (
                  <td key={j} className="py-1.5 px-2">
                    <Celda2 c={c} />
                  </td>
                ))}
                <td className="py-1.5 px-3 bg-gray-100/60">
                  <Celda2 c={{ v: t.total, v25: t.total25, var: t.totalVar }} bold showVar />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-[#F5A623]/10 font-bold border-t-2 border-[#F5A623]/30 sticky bottom-0">
              <td className="py-2 px-3 text-gray-800 text-[11px] sticky left-0 bg-[#FDF3E3]">
                TOTAL CADENA
                <span className="block text-[9px] font-normal text-gray-500">40 tiendas</span>
              </td>
              {totalCadena.meses.map((c, j) => (
                <td key={j} className="py-2 px-2">
                  <Celda2 c={c} />
                </td>
              ))}
              <td className="py-2 px-3 bg-[#F5A623]/20">
                <div className="flex flex-col items-end leading-tight">
                  <div className="whitespace-nowrap">
                    <span className="text-gray-900 font-bold text-[12px]">{fmtFull(totalCadena.total)}</span>
                    <span className="ml-1.5 text-[10px] font-bold text-[#27AE60]">+{totalCadena.totalVar}%</span>
                  </div>
                  <span className="text-[10px] text-gray-500">{fmtFull(totalCadena.total25)}</span>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </SlideWrapper>
  );
}
