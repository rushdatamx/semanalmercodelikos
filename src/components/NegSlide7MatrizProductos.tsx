"use client";

import SlideWrapper from "./SlideWrapper";
import { Package } from "lucide-react";

/* ── Matriz producto x mes: venta 2026 con var% YoY vs 2025 ── */
interface Celda {
  v: number;
  var: number | null;
}

interface FilaProducto {
  nombre: string;
  meses: Celda[];
  total: number;
  totalVar: number | null;
}

const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"];

const productos: FilaProducto[] = [
  { nombre: "Tost. Roja 70PZ", meses: [{v:1309462,var:87},{v:1311962,var:41},{v:1708159,var:45},{v:1321408,var:32},{v:1428123,var:13},{v:1091699,var:12},{v:1176736,var:17}], total: 9347549, totalVar: 33 },
  { nombre: "Durito Teja", meses: [{v:79112,var:-51},{v:114304,var:-6},{v:129461,var:140},{v:130320,var:-14},{v:71509,var:-14},{v:138171,var:10},{v:185097,var:32}], total: 847974, totalVar: 1 },
  { nombre: "Papa Natural 45g", meses: [{v:49270,var:null},{v:54139,var:null},{v:68950,var:null},{v:82448,var:null},{v:125212,var:null},{v:212539,var:null},{v:83677,var:null}], total: 676236, totalVar: null },
  { nombre: "Papa Fuego 45g", meses: [{v:45001,var:null},{v:31244,var:null},{v:48341,var:null},{v:56507,var:null},{v:101302,var:null},{v:168605,var:null},{v:75366,var:null}], total: 526367, totalVar: null },
  { nombre: "Papa Jalapeño 45g", meses: [{v:42350,var:null},{v:25866,var:null},{v:46023,var:null},{v:55755,var:null},{v:99369,var:null},{v:172538,var:null},{v:67243,var:null}], total: 509145, totalVar: null },
  { nombre: "Tost. Amar. 200g", meses: [{v:47386,var:null},{v:96927,var:null},{v:101915,var:302},{v:55778,var:83},{v:44960,var:3},{v:44145,var:35},{v:32713,var:-8}], total: 423824, totalVar: 153 },
  { nombre: "Tost. Roja 200g", meses: [{v:57885,var:null},{v:91813,var:null},{v:99775,var:129},{v:50382,var:55},{v:29701,var:-29},{v:30116,var:16},{v:30194,var:-1}], total: 389866, totalVar: 124 },
  { nombre: "Cacah. Mixto 1kg", meses: [{v:36486,var:-36},{v:50214,var:-20},{v:81652,var:-21},{v:62760,var:-20},{v:59727,var:-44},{v:47258,var:-39},{v:38106,var:-49}], total: 376202, totalVar: -33 },
  { nombre: "Papa Sal 340g", meses: [{v:27108,var:null},{v:18524,var:null},{v:45426,var:null},{v:36549,var:null},{v:49394,var:null},{v:78209,var:null},{v:43742,var:null}], total: 298952, totalVar: null },
  { nombre: "Papa Jalap. 340g", meses: [{v:26433,var:null},{v:15987,var:null},{v:48620,var:null},{v:34022,var:null},{v:43987,var:null},{v:60268,var:null},{v:35148,var:null}], total: 264465, totalVar: null },
  { nombre: "Papa Fuego 340g", meses: [{v:20918,var:null},{v:36376,var:null},{v:33762,var:null},{v:30245,var:null},{v:35633,var:null},{v:56457,var:null},{v:39409,var:null}], total: 252800, totalVar: null },
  { nombre: "Cacah. Cantin. 1kg", meses: [{v:22768,var:-24},{v:26326,var:-43},{v:48873,var:-49},{v:38258,var:-43},{v:32402,var:-62},{v:26393,var:-61},{v:19553,var:-71}], total: 214573, totalVar: -53 },
  { nombre: "Cheto Mix 400g", meses: [{v:3705,var:-82},{v:14471,var:-11},{v:18503,var:30},{v:15001,var:122},{v:15610,var:81},{v:17631,var:123},{v:12715,var:43}], total: 97635, totalVar: 17 },
  { nombre: "Rueda Natural 400g", meses: [{v:6066,var:-72},{v:11382,var:-30},{v:17620,var:50},{v:13892,var:34},{v:9953,var:83},{v:16643,var:118},{v:7772,var:-4}], total: 83326, totalVar: 3 },
  { nombre: "Minicuadro Nat 400g", meses: [{v:4610,var:-60},{v:9501,var:-17},{v:15231,var:131},{v:12490,var:89},{v:11656,var:166},{v:13026,var:186},{v:8818,var:28}], total: 75333, totalVar: 44 },
  { nombre: "Cacah. Salado 1kg", meses: [{v:6348,var:-37},{v:7183,var:-52},{v:12016,var:-49},{v:14235,var:-34},{v:10289,var:-54},{v:14089,var:-17},{v:9615,var:-34}], total: 73774, totalVar: -40 },
  { nombre: "Rodajitas Spicy Limon", meses: [{v:780,var:null},{v:2663,var:null},{v:3653,var:null},{v:3908,var:null},{v:2689,var:null},{v:1399,var:null},{v:1679,var:null}], total: 16771, totalVar: null },
  { nombre: "Palomitas Classic White", meses: [{v:1951,var:null},{v:1265,var:null},{v:2854,var:null},{v:2307,var:null},{v:1893,var:null},{v:1243,var:null},{v:1872,var:null}], total: 13386, totalVar: null },
  { nombre: "Palomitas W.Cheddar", meses: [{v:1432,var:null},{v:1214,var:null},{v:3536,var:null},{v:2925,var:null},{v:1904,var:null},{v:1259,var:null},{v:1015,var:null}], total: 13283, totalVar: null },
  { nombre: "Papa Deshidratada 150g", meses: [{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:12667,var:null}], total: 12667, totalVar: null },
  { nombre: "Palomitas Street Elote", meses: [{v:1526,var:null},{v:1332,var:null},{v:2741,var:null},{v:1938,var:null},{v:1783,var:null},{v:1353,var:null},{v:1463,var:null}], total: 12136, totalVar: null },
  { nombre: "Fiesta Mix 170g", meses: [{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:11533,var:null}], total: 11533, totalVar: null },
  { nombre: "Cheeto Dedito 170g", meses: [{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:10456,var:null}], total: 10456, totalVar: null },
  { nombre: "Rotini 215g", meses: [{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:9788,var:null}], total: 9788, totalVar: null },
  { nombre: "Minicuadro Ench 215g", meses: [{v:0,var:null},{v:0,var:null},{v:23,var:null},{v:0,var:null},{v:0,var:null},{v:0,var:null},{v:9418,var:null}], total: 9441, totalVar: null },
];

const totalCadena = { meses: [{v:1790595,var:77},{v:1922690,var:58},{v:2537134,var:63},{v:2021130,var:44},{v:2177094,var:31},{v:2193042,var:64},{v:1925796,var:38}], total: 14567480, totalVar: 52 };

const fmtK = (n: number) => {
  if (n === 0) return "--";
  return n >= 1000 ? "$" + (n / 1000).toFixed(0) + "K" : "$" + n.toFixed(0);
};

const fmtFull = (n: number) =>
  "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

const varColor = (v: number | null) => {
  if (v === null) return "text-[#2E75B6]";
  if (v >= 0) return "text-[#27AE60]";
  return "text-[#E31837]";
};

const varText = (v: number | null) => (v === null ? "NVO" : (v >= 0 ? "+" : "") + v + "%");

export default function NegSlide7MatrizProductos() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Package className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">Venta Mes a Mes por Producto</h2>
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
              <th className="text-left py-1.5 px-2 sticky left-0 bg-gray-100">Producto</th>
              {MESES.map((m) => (
                <th key={m} className="text-right py-1.5 px-1.5">{m}</th>
              ))}
              <th className="text-right py-1.5 px-2 bg-gray-200">Total</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p, i) => (
              <tr key={i} className={`border-b border-gray-50 ${i % 2 === 1 ? "bg-gray-50/40" : "bg-white"}`}>
                <td className={`py-0.5 px-2 text-gray-700 font-semibold truncate max-w-[150px] sticky left-0 ${i % 2 === 1 ? "bg-gray-50/40" : "bg-white"}`}>
                  {p.nombre}
                </td>
                {p.meses.map((c, j) => (
                  <td key={j} className="text-right py-0.5 px-1.5 whitespace-nowrap">
                    <span className={c.v === 0 ? "text-gray-300" : "text-gray-800 font-medium"}>{fmtK(c.v)}</span>
                    {c.v > 0 && (
                      <span className={`ml-1 text-[7px] font-bold ${varColor(c.var)}`}>{varText(c.var)}</span>
                    )}
                  </td>
                ))}
                <td className="text-right py-0.5 px-2 bg-gray-100/60 whitespace-nowrap">
                  <span className="text-gray-900 font-bold">{fmtK(p.total)}</span>
                  <span className={`ml-1 text-[7px] font-bold ${varColor(p.totalVar)}`}>{varText(p.totalVar)}</span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-[#F5A623]/10 font-bold border-t-2 border-[#F5A623]/30 sticky bottom-0">
              <td className="py-1 px-2 text-gray-800 sticky left-0 bg-[#FDF3E3]">TOTAL BOTANAS</td>
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
          <span className="font-bold text-[#27AE60]">7 de 10 productos comparables crecen.</span>{" "}
          Las <span className="font-bold">Tostadas 200g</span> se disparan (+153% Amarilla, +124% Roja),
          la Tostada Roja 70PZ suma <span className="font-bold">+33%</span> y el Minicuadro +45%. La{" "}
          <span className="font-bold">Linea 215/170g</span> hizo $53,885 en su primer mes (jul), casi lo mismo
          que 4Buddies en todo el anio. <span className="font-bold text-[#F5A623]">La oportunidad esta en el
          cacahuate a granel</span>: los 3 sabores retroceden y representan{" "}
          <span className="font-bold">$480K por recuperar</span> vs 2025.
        </p>
      </div>
    </SlideWrapper>
  );
}
