"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin } from "lucide-react";

/* ── Top 10 tiendas with top 3 products (25 SKUs Botanas only) ── */
interface ProductInfo {
  name: string;
  pct: string;
}

interface StoreRow {
  rank: number;
  nombre: string;
  venta: string;
  ventaNum: number;
  venta2025: string;
  varYoY: string;
  top3: ProductInfo[];
}

const stores: StoreRow[] = [
  {
    rank: 1, nombre: "MERCO GARCIA", venta: "$638,558", ventaNum: 638558,
    venta2025: "$451,085", varYoY: "+42%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "65%" }, { name: "Papa Natural 45g", pct: "6%" }, { name: "Durito Teja", pct: "5%" }],
  },
  {
    rank: 2, nombre: "MERCO BUENAVISTA", venta: "$588,222", ventaNum: 588222,
    venta2025: "$495,042", varYoY: "+19%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "74%" }, { name: "Durito Teja", pct: "10%" }, { name: "Tost. Amar. 200g", pct: "2%" }],
  },
  {
    rank: 3, nombre: "MERCO LOS PILARES", venta: "$583,649", ventaNum: 583649,
    venta2025: "$509,104", varYoY: "+15%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "75%" }, { name: "Durito Teja", pct: "6%" }, { name: "Tost. Roja 200g", pct: "3%" }],
  },
  {
    rank: 4, nombre: "MERCO SOLIDARIDAD", venta: "$568,181", ventaNum: 568181,
    venta2025: "$358,025", varYoY: "+59%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "75%" }, { name: "Papa Natural 45g", pct: "5%" }, { name: "Papa Jalapeño 45g", pct: "4%" }],
  },
  {
    rank: 5, nombre: "MERCO GIRASOLES", venta: "$527,824", ventaNum: 527824,
    venta2025: "$418,897", varYoY: "+26%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "73%" }, { name: "Durito Teja", pct: "7%" }, { name: "Papa Natural 45g", pct: "3%" }],
  },
  {
    rank: 6, nombre: "MERCO MIXCOAC", venta: "$523,302", ventaNum: 523302,
    venta2025: "$277,661", varYoY: "+88%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "73%" }, { name: "Durito Teja", pct: "5%" }, { name: "Papa Fuego 45g", pct: "5%" }],
  },
  {
    rank: 7, nombre: "MERCO COLINAS", venta: "$506,329", ventaNum: 506329,
    venta2025: "$296,103", varYoY: "+71%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "70%" }, { name: "Durito Teja", pct: "6%" }, { name: "Papa Natural 45g", pct: "3%" }],
  },
  {
    rank: 8, nombre: "MERCO SENDERO SANTA CATARINA", venta: "$504,538", ventaNum: 504538,
    venta2025: "$395,626", varYoY: "+28%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "60%" }, { name: "Durito Teja", pct: "8%" }, { name: "Papa Natural 45g", pct: "5%" }],
  },
  {
    rank: 9, nombre: "MERCO EL JARAL", venta: "$503,174", ventaNum: 503174,
    venta2025: "$352,603", varYoY: "+43%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "70%" }, { name: "Papa Natural 45g", pct: "5%" }, { name: "Cacah. Mixto 1kg", pct: "4%" }],
  },
  {
    rank: 10, nombre: "MERCO SAN ROQUE", venta: "$500,180", ventaNum: 500180,
    venta2025: "$293,380", varYoY: "+70%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "78%" }, { name: "Durito Teja", pct: "5%" }, { name: "Papa Natural 45g", pct: "4%" }],
  },
];

const maxVenta = stores[0].ventaNum;

function StoreCard({ store }: { store: StoreRow }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2.5 flex flex-col gap-1.5">
      {/* Top row: rank + name + venta */}
      <div className="flex items-center gap-2.5">
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-[11px] ${
            store.rank === 1
              ? "bg-[#F5A623]"
              : store.rank <= 3
              ? "bg-[#F5A623]/70"
              : "bg-gray-400"
          }`}
        >
          {store.rank}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[12px] font-bold text-gray-800 truncate">
              {store.nombre}
            </p>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span
                className={`text-[12px] font-bold ${
                  store.rank <= 3 ? "text-[#F5A623]" : "text-gray-600"
                }`}
              >
                {store.venta}
              </span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-green-100 text-green-700">
                {store.varYoY}
              </span>
            </div>
          </div>
          {/* Progress bar */}
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mt-1">
            <div
              className="h-full rounded-full bg-[#F5A623]"
              style={{
                width: `${(store.ventaNum / maxVenta) * 100}%`,
                opacity: store.rank <= 3 ? 1 : 0.5,
              }}
            />
          </div>
          <p className="text-[8px] text-gray-400 mt-0.5">
            Ene-Jul 2025: {store.venta2025}
          </p>
        </div>
      </div>
      {/* Top 3 products as small badges */}
      <div className="flex items-center gap-1 ml-9">
        {store.top3.map((p, i) => (
          <span
            key={i}
            className="text-[8px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 whitespace-nowrap"
          >
            {p.name} <span className="font-bold text-gray-700">{p.pct}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function NegSlide2TopTiendas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <MapPin className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Top 10 Tiendas por Venta
          </h2>
          <p className="text-[10px] text-gray-500">
            Venta acumulada Ene-Jul 2026 -- 25 SKUs Botanas -- Top 3
            productos por tienda
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 flex-1 min-h-0">
        {stores.map((store) => (
          <StoreCard key={store.rank} store={store} />
        ))}
      </div>

      {/* Footer insight */}
      <div className="mt-3 bg-white rounded-xl border border-[#F5A623]/20 shadow-sm px-4 py-2 flex items-start gap-2">
        <div className="w-4 h-4 rounded-full bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-[9px] font-bold text-[#F5A623]">i</span>
        </div>
        <p className="text-[11px] text-gray-700">
          <span className="font-bold text-green-700">
            Las 10 tiendas crecen YoY (rango +15% a +88%).
          </span>{" "}
          Mixcoac (+88%), Colinas (+71%), San Roque (+70%) y Solidaridad (+59%) lideran vs Ene-Jul 2025.
          Tostada Roja 70PZ sigue dominando (60-78% de la venta), pero pierde peso frente a junio: la
          Papa 45g ya aparece en el top 3 de 7 de las 10 tiendas.
        </p>
      </div>
    </SlideWrapper>
  );
}
