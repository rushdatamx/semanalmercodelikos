"use client";

import SlideWrapper from "./SlideWrapper";
import { Grid3x3 } from "lucide-react";

/* ── Matriz tienda x mes: venta 2026 con var% YoY vs 2025 ── */
interface Celda {
  v: number;
  var: number | null;
}

interface FilaTienda {
  nombre: string;
  meses: Celda[];
  total: number;
  totalVar: number | null;
}

const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"];

const tiendas: FilaTienda[] = [
  { nombre: "MERCO GARCIA", meses: [{v:75057,var:58},{v:91029,var:89},{v:117624,var:78},{v:80134,var:13},{v:88327,var:7},{v:98042,var:35},{v:88343,var:40}], total: 638558, totalVar: 42 },
  { nombre: "MERCO BUENAVISTA", meses: [{v:64015,var:22},{v:71180,var:23},{v:106273,var:47},{v:93183,var:23},{v:87648,var:-1},{v:91575,var:25},{v:74348,var:0}], total: 588222, totalVar: 19 },
  { nombre: "MERCO LOS PILARES", meses: [{v:78350,var:80},{v:72475,var:2},{v:94830,var:28},{v:75585,var:-6},{v:91389,var:11},{v:91811,var:18},{v:79209,var:-1}], total: 583649, totalVar: 15 },
  { nombre: "MERCO SOLIDARIDAD", meses: [{v:50558,var:62},{v:73557,var:80},{v:107617,var:82},{v:78142,var:49},{v:84602,var:22},{v:92538,var:114},{v:81167,var:32}], total: 568181, totalVar: 59 },
  { nombre: "MERCO GIRASOLES", meses: [{v:61758,var:64},{v:76811,var:40},{v:91339,var:28},{v:77265,var:20},{v:78480,var:0},{v:71788,var:43},{v:70383,var:14}], total: 527824, totalVar: 26 },
  { nombre: "MERCO MIXCOAC", meses: [{v:74908,var:189},{v:77557,var:143},{v:86337,var:85},{v:68582,var:57},{v:77529,var:33},{v:76495,var:114},{v:61894,var:73}], total: 523302, totalVar: 88 },
  { nombre: "MERCO COLINAS", meses: [{v:52950,var:55},{v:67288,var:64},{v:92709,var:69},{v:83404,var:112},{v:78518,var:109},{v:67867,var:59},{v:63593,var:37}], total: 506329, totalVar: 71 },
  { nombre: "MERCO SENDERO SANTA CATARINA", meses: [{v:56641,var:25},{v:60445,var:0},{v:107539,var:53},{v:66096,var:23},{v:70387,var:16},{v:79132,var:59},{v:64298,var:16}], total: 504538, totalVar: 28 },
  { nombre: "MERCO EL JARAL", meses: [{v:71109,var:159},{v:61818,var:61},{v:95696,var:65},{v:78704,var:52},{v:76690,var:18},{v:67334,var:32},{v:51822,var:-15}], total: 503174, totalVar: 43 },
  { nombre: "MERCO SAN ROQUE", meses: [{v:66315,var:115},{v:65976,var:81},{v:93230,var:73},{v:69641,var:62},{v:73978,var:36},{v:67102,var:82},{v:63938,var:67}], total: 500180, totalVar: 70 },
  { nombre: "MERCO MONTEMORELOS", meses: [{v:53519,var:55},{v:53371,var:25},{v:75440,var:58},{v:69854,var:53},{v:72500,var:55},{v:96633,var:112},{v:51388,var:-22}], total: 472703, totalVar: 44 },
  { nombre: "MERCO PARAJE SAN JOSE", meses: [{v:54377,var:54},{v:57618,var:38},{v:82729,var:48},{v:62723,var:7},{v:72809,var:19},{v:70750,var:29},{v:61085,var:10}], total: 462091, totalVar: 27 },
  { nombre: "MERCO SANTA ELENA ZUAZUA", meses: [{v:58013,var:27},{v:55795,var:21},{v:73166,var:31},{v:57166,var:28},{v:62099,var:53},{v:70699,var:106},{v:60659,var:33}], total: 437598, totalVar: 40 },
  { nombre: "MERCO SALTILLO SENDERO", meses: [{v:53126,var:66},{v:55549,var:24},{v:61855,var:43},{v:53703,var:29},{v:60835,var:18},{v:55270,var:37},{v:51851,var:44}], total: 392188, totalVar: 35 },
  { nombre: "MERCO RAMOS ARIZPE", meses: [{v:69378,var:125},{v:52431,var:12},{v:70988,var:95},{v:50741,var:46},{v:47424,var:47},{v:50332,var:55},{v:45474,var:78}], total: 386769, totalVar: 62 },
  { nombre: "MERCO PUEBLO NUEVO", meses: [{v:54846,var:96},{v:46653,var:64},{v:67677,var:71},{v:45636,var:17},{v:66949,var:22},{v:49160,var:-1},{v:54726,var:75}], total: 385648, totalVar: 43 },
  { nombre: "MERCO NUEVO REPUEBLO", meses: [{v:37093,var:75},{v:44301,var:106},{v:76038,var:113},{v:53526,var:53},{v:59407,var:66},{v:54383,var:78},{v:55652,var:71}], total: 380399, totalVar: 79 },
  { nombre: "MERCO ACUÑA", meses: [{v:32046,var:-3},{v:33927,var:19},{v:62744,var:36},{v:54973,var:32},{v:61062,var:43},{v:71920,var:87},{v:45283,var:8}], total: 361955, totalVar: 33 },
  { nombre: "SALTILLO MADERO", meses: [{v:45605,var:53},{v:39804,var:-2},{v:61223,var:23},{v:53844,var:36},{v:46594,var:-11},{v:53866,var:37},{v:47512,var:8}], total: 348449, totalVar: 18 },
  { nombre: "MERCO ARAMBERRI", meses: [{v:42627,var:161},{v:59155,var:120},{v:62132,var:47},{v:48358,var:38},{v:44377,var:5},{v:42781,var:23},{v:47499,var:46}], total: 346928, totalVar: 51 },
  { nombre: "MERCO CADEREYTA", meses: [{v:46265,var:99},{v:44993,var:44},{v:53471,var:40},{v:58753,var:111},{v:56121,var:45},{v:42977,var:66},{v:43383,var:74}], total: 345963, totalVar: 65 },
  { nombre: "MERCO FRONTERA CENTRO", meses: [{v:47808,var:111},{v:50951,var:138},{v:59245,var:211},{v:49213,var:197},{v:40982,var:132},{v:55818,var:250},{v:39877,var:292}], total: 343894, totalVar: 178 },
  { nombre: "MERCO PIEDRAS NEGRAS", meses: [{v:37811,var:8},{v:41552,var:29},{v:53378,var:59},{v:49250,var:49},{v:46708,var:6},{v:62272,var:80},{v:50914,var:49}], total: 341885, totalVar: 39 },
  { nombre: "MERCO ROSITA", meses: [{v:48403,var:144},{v:51140,var:161},{v:56058,var:106},{v:41734,var:72},{v:47809,var:77},{v:51543,var:182},{v:41126,var:94}], total: 337814, totalVar: 115 },
  { nombre: "MERCO SAN ANTONIO", meses: [{v:33002,var:49},{v:42039,var:36},{v:56576,var:35},{v:39137,var:11},{v:52146,var:38},{v:49335,var:95},{v:42088,var:26}], total: 314322, totalVar: 39 },
  { nombre: "MERCO LINDAVISTA", meses: [{v:37514,var:87},{v:46180,var:69},{v:55431,var:55},{v:33376,var:-2},{v:45035,var:14},{v:47835,var:44},{v:36424,var:3}], total: 301794, totalVar: 34 },
  { nombre: "MERCO LA SIERRITA", meses: [{v:41438,var:75},{v:46731,var:122},{v:47845,var:89},{v:41886,var:43},{v:43674,var:48},{v:35568,var:47},{v:39350,var:73}], total: 296492, totalVar: 69 },
  { nombre: "MERCO SALTILLO CENTRO", meses: [{v:31333,var:35},{v:40831,var:49},{v:46702,var:18},{v:37405,var:47},{v:39163,var:11},{v:43389,var:32},{v:43142,var:30}], total: 281965, totalVar: 30 },
  { nombre: "URDIÑOLA", meses: [{v:38804,var:32},{v:35739,var:23},{v:47147,var:42},{v:29431,var:27},{v:36940,var:15},{v:37858,var:51},{v:35857,var:46}], total: 261776, totalVar: 33 },
  { nombre: "MERCO HIDALGO", meses: [{v:27182,var:86},{v:28194,var:101},{v:32689,var:51},{v:28632,var:36},{v:41545,var:64},{v:48018,var:142},{v:44295,var:225}], total: 250554, totalVar: 92 },
  { nombre: "MERCO ISRAEL CAVAZOS", meses: [{v:22805,var:47},{v:23064,var:32},{v:37421,var:109},{v:40244,var:160},{v:46726,var:35},{v:38272,var:47},{v:39578,var:68}], total: 248111, totalVar: 65 },
  { nombre: "MERCO REPUBLICA", meses: [{v:30159,var:null},{v:32763,var:null},{v:37193,var:null},{v:33739,var:null},{v:42829,var:null},{v:35190,var:null},{v:28328,var:null}], total: 240200, totalVar: null },
  { nombre: "MERCO OTILIO", meses: [{v:29977,var:null},{v:30499,var:null},{v:32453,var:-5},{v:28006,var:-21},{v:33245,var:-9},{v:42875,var:52},{v:41997,var:38}], total: 239052, totalVar: 45 },
  { nombre: "MERCO LIBRAMIENTO", meses: [{v:25717,var:95},{v:29947,var:61},{v:45949,var:156},{v:31562,var:50},{v:33483,var:14},{v:28090,var:40},{v:30116,var:60}], total: 224863, totalVar: 62 },
  { nombre: "MERCO APODACA CENTRO", meses: [{v:30542,var:105},{v:33260,var:81},{v:43311,var:65},{v:29881,var:60},{v:30470,var:12},{v:26526,var:30},{v:28121,var:57}], total: 222111, totalVar: 54 },
  { nombre: "MERCO PARRAS", meses: [{v:28379,var:16},{v:29515,var:-8},{v:30798,var:-19},{v:28109,var:-4},{v:33970,var:-8},{v:27105,var:-9},{v:28503,var:-8}], total: 206379, totalVar: -7 },
  { nombre: "MERCO SAN BUENA", meses: [{v:21186,var:81},{v:28599,var:288},{v:35449,var:478},{v:25605,var:269},{v:30612,var:110},{v:24304,var:78},{v:24095,var:50}], total: 189849, totalVar: 148 },
  { nombre: "MERCO PASEO MONCLOVA", meses: [{v:25184,var:99},{v:23613,var:43},{v:24032,var:35},{v:22418,var:75},{v:21156,var:18},{v:38626,var:312},{v:27299,var:121}], total: 182329, totalVar: 83 },
  { nombre: "MANANTIALES", meses: [{v:25834,var:2894},{v:28286,var:1751},{v:29215,var:1369},{v:25484,var:2074},{v:26802,var:1827},{v:14533,var:1367},{v:14346,var:1108}], total: 164499, totalVar: 1704 },
  { nombre: "MERCO CASTAÑOS", meses: [{v:8962,var:526},{v:18055,var:1087},{v:25583,var:685},{v:26007,var:1518},{v:26072,var:1654},{v:23433,var:2435},{v:26832,var:3203}], total: 154944, totalVar: 1303 },
];

const totalCadena = { meses: [{v:1790595,var:77},{v:1922690,var:58},{v:2537134,var:63},{v:2021130,var:44},{v:2177094,var:31},{v:2193042,var:64},{v:1925796,var:38}], total: 14567480, totalVar: 52 };

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

export default function NegSlide6MatrizTiendas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Grid3x3 className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">Venta Mes a Mes por Tienda</h2>
          <p className="text-[10px] text-gray-500">
            Ene-Jul 2026 -- 25 SKUs Botanas -- monto 2026 y variacion vs mismo mes de 2025
          </p>
        </div>
      </div>

      {/* Matriz */}
      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm min-h-0">
        <table className="w-full text-[9px]">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-[8px] uppercase sticky top-0 z-10">
              <th className="text-left py-1.5 px-2 sticky left-0 bg-gray-100">Tienda</th>
              {MESES.map((m) => (
                <th key={m} className="text-right py-1.5 px-1.5">{m}</th>
              ))}
              <th className="text-right py-1.5 px-2 bg-gray-200">Total</th>
            </tr>
          </thead>
          <tbody>
            {tiendas.map((t, i) => (
              <tr key={i} className={`border-b border-gray-50 ${i % 2 === 1 ? "bg-gray-50/40" : "bg-white"}`}>
                <td className={`py-0.5 px-2 text-gray-700 font-semibold truncate max-w-[150px] sticky left-0 ${i % 2 === 1 ? "bg-gray-50/40" : "bg-white"}`}>
                  {t.nombre}
                </td>
                {t.meses.map((c, j) => (
                  <td key={j} className="text-right py-0.5 px-1.5 whitespace-nowrap">
                    <span className="text-gray-800 font-medium">{fmtK(c.v)}</span>
                    <span className={`ml-1 text-[7px] font-bold ${varColor(c.var)}`}>{varText(c.var)}</span>
                  </td>
                ))}
                <td className="text-right py-0.5 px-2 bg-gray-100/60 whitespace-nowrap">
                  <span className="text-gray-900 font-bold">{fmtK(t.total)}</span>
                  <span className={`ml-1 text-[7px] font-bold ${varColor(t.totalVar)}`}>{varText(t.totalVar)}</span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-[#F5A623]/10 font-bold border-t-2 border-[#F5A623]/30 sticky bottom-0">
              <td className="py-1 px-2 text-gray-800 sticky left-0 bg-[#FDF3E3]">TOTAL CADENA</td>
              {totalCadena.meses.map((c, j) => (
                <td key={j} className="text-right py-1 px-1.5 whitespace-nowrap">
                  <span className="text-gray-900">{fmtK(c.v)}</span>
                  <span className={`ml-1 text-[7px] ${varColor(c.var)}`}>{varText(c.var)}</span>
                </td>
              ))}
              <td className="text-right py-1 px-2 bg-[#F5A623]/20 whitespace-nowrap">
                <span className="text-gray-900">{fmtFull(totalCadena.total)}</span>
                <span className="ml-1 text-[7px] text-[#27AE60]">+{totalCadena.totalVar}%</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Insight strip */}
      <div className="mt-2 bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2">
        <p className="text-[10px] text-gray-600 leading-snug">
          <span className="font-bold text-[#27AE60]">38 de 39 tiendas comparables crecen, y 35 lo hacen por arriba de +25%.</span>{" "}
          Marzo fue el mejor mes de la historia de la cadena ($2.54M, +63%) y ganamos los 7 meses del anio.
          Republica es tienda nueva (sin base 2025). La unica que retrocede es{" "}
          <span className="font-bold">Parras (-7%)</span> — oportunidad puntual, no tendencia de cadena.
          Manantiales y Castanos crecen 1,300-1,700% porque arrancaron casi de cero en 2025.
        </p>
      </div>
    </SlideWrapper>
  );
}
