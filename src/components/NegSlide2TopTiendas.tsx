"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin } from "lucide-react";

/* ── Top 10 tiendas with top 3 products (20 SKUs Abarrotes only) ── */
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
    rank: 1, nombre: "MERCO GARCIA", venta: "$417,683", ventaNum: 417683,
    venta2025: "$315,687", varYoY: "+32%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "67%" }, { name: "Durito Teja", pct: "6%" }, { name: "Papa Natural 45g", pct: "5%" }],
  },
  {
    rank: 2, nombre: "MERCO BUENAVISTA", venta: "$382,748", ventaNum: 382748,
    venta2025: "$347,261", varYoY: "+10%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "78%" }, { name: "Durito Teja", pct: "9%" }, { name: "Tost. Amar. 200g", pct: "4%" }],
  },
  {
    rank: 3, nombre: "MERCO LOS PILARES", venta: "$377,662", ventaNum: 377662,
    venta2025: "$351,379", varYoY: "+7%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "82%" }, { name: "Durito Teja", pct: "6%" }, { name: "Tost. Roja 200g", pct: "3%" }],
  },
  {
    rank: 4, nombre: "MERCO SOLIDARIDAD", venta: "$365,734", ventaNum: 365734,
    venta2025: "$253,179", varYoY: "+44%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "78%" }, { name: "Tost. Roja 200g", pct: "5%" }, { name: "Papa Natural 45g", pct: "4%" }],
  },
  {
    rank: 5, nombre: "MERCO MIXCOAC", venta: "$358,005", ventaNum: 358005,
    venta2025: "$206,148", varYoY: "+74%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "80%" }, { name: "Durito Teja", pct: "4%" }, { name: "Papa Fuego 45g", pct: "3%" }],
  },
  {
    rank: 6, nombre: "MERCO GIRASOLES", venta: "$356,219", ventaNum: 356219,
    venta2025: "$306,962", varYoY: "+16%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "79%" }, { name: "Durito Teja", pct: "5%" }, { name: "Tost. Roja 200g", pct: "3%" }],
  },
  {
    rank: 7, nombre: "MERCO EL JARAL", venta: "$354,718", ventaNum: 354718,
    venta2025: "$240,492", varYoY: "+47%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "70%" }, { name: "Cacah. Mixto 1kg", pct: "5%" }, { name: "Papa Natural 45g", pct: "4%" }],
  },
  {
    rank: 8, nombre: "MERCO SAN ROQUE", venta: "$346,110", ventaNum: 346110,
    venta2025: "$218,400", varYoY: "+58%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "83%" }, { name: "Durito Teja", pct: "4%" }, { name: "Papa Natural 45g", pct: "3%" }],
  },
  {
    rank: 9, nombre: "MERCO COLINAS", venta: "$344,906", ventaNum: 344906,
    venta2025: "$207,022", varYoY: "+67%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "73%" }, { name: "Durito Teja", pct: "5%" }, { name: "Papa Natural 45g", pct: "3%" }],
  },
  {
    rank: 10, nombre: "MERCO SENDERO STA. CATARINA", venta: "$333,808", ventaNum: 333808,
    venta2025: "$290,458", varYoY: "+15%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "65%" }, { name: "Durito Teja", pct: "6%" }, { name: "Papa Natural 45g", pct: "4%" }],
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
            Ene-May 2025: {store.venta2025}
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
            Venta acumulada Ene-May 2026 -- 20 SKUs Abarrotes -- Top 3
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
            Las 10 tiendas crecen YoY (rango +7% a +74%).
          </span>{" "}
          Mixcoac, Colinas, San Roque, El Jaral y Solidaridad lideran con +44% a +74% vs Ene-May 2025. Tostada Roja 70PZ domina en las 10 tiendas (65-83% de la venta).
        </p>
      </div>
    </SlideWrapper>
  );
}
