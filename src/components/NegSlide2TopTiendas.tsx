"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin } from "lucide-react";

/* ── Top 10 tiendas with top 3 products ── */
interface ProductInfo {
  name: string;
  pct: string;
}

interface StoreRow {
  rank: number;
  nombre: string;
  venta: string;
  ventaNum: number;
  top3: ProductInfo[];
}

const stores: StoreRow[] = [
  {
    rank: 1, nombre: "MERCO GARCIA", venta: "$216,128", ventaNum: 216128,
    top3: [{ name: "Tost. Roja 70PZ", pct: "66%" }, { name: "Durito Teja", pct: "7%" }, { name: "Papa Natural 45g", pct: "5%" }],
  },
  {
    rank: 2, nombre: "MERCO LOS PILARES", venta: "$207,903", ventaNum: 207903,
    top3: [{ name: "Tost. Roja 70PZ", pct: "71%" }, { name: "Tost. Roja 200g", pct: "4%" }, { name: "Durito Teja", pct: "4%" }],
  },
  {
    rank: 3, nombre: "MERCO GIRASOLES", venta: "$189,485", ventaNum: 189485,
    top3: [{ name: "Tost. Roja 70PZ", pct: "67%" }, { name: "Durito Teja", pct: "4%" }, { name: "Tost. Amar. 200g", pct: "4%" }],
  },
  {
    rank: 4, nombre: "MERCO MIXCOAC", venta: "$188,956", ventaNum: 188956,
    top3: [{ name: "Tost. Roja 70PZ", pct: "80%" }, { name: "Durito Teja", pct: "4%" }, { name: "Tost. Amar. 200g", pct: "2%" }],
  },
  {
    rank: 5, nombre: "MERCO BUENAVISTA", venta: "$188,875", ventaNum: 188875,
    top3: [{ name: "Tost. Roja 70PZ", pct: "68%" }, { name: "Durito Teja", pct: "9%" }, { name: "Tost. Amar. 200g", pct: "5%" }],
  },
  {
    rank: 6, nombre: "MERCO EL JARAL", venta: "$187,148", ventaNum: 187148,
    top3: [{ name: "Tost. Roja 70PZ", pct: "62%" }, { name: "Cacah. Mixto", pct: "5%" }, { name: "Tost. Amar. 200g", pct: "4%" }],
  },
  {
    rank: 7, nombre: "MERCO SAN ROQUE", venta: "$180,480", ventaNum: 180480,
    top3: [{ name: "Tost. Roja 70PZ", pct: "74%" }, { name: "Durito Teja", pct: "5%" }, { name: "Papa Natural 45g", pct: "4%" }],
  },
  {
    rank: 8, nombre: "MERCO SENDERO STA. CATARINA", venta: "$176,159", ventaNum: 176159,
    top3: [{ name: "Tost. Roja 70PZ", pct: "55%" }, { name: "Durito Teja", pct: "6%" }, { name: "Papa Natural 45g", pct: "4%" }],
  },
  {
    rank: 9, nombre: "MERCO SOLIDARIDAD", venta: "$172,983", ventaNum: 172983,
    top3: [{ name: "Tost. Roja 70PZ", pct: "69%" }, { name: "Tost. Roja 200g", pct: "6%" }, { name: "Tost. Amar. 200g", pct: "5%" }],
  },
  {
    rank: 10, nombre: "MERCO STA. ELENA ZUAZUA", venta: "$158,425", ventaNum: 158425,
    top3: [{ name: "Tost. Roja 70PZ", pct: "56%" }, { name: "Durito Teja", pct: "5%" }, { name: "Tost. Roja 200g", pct: "4%" }],
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
            <span
              className={`text-[12px] font-bold flex-shrink-0 ${
                store.rank <= 3 ? "text-[#F5A623]" : "text-gray-600"
              }`}
            >
              {store.venta}
            </span>
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
            Venta acumulada Ene-Mar 2026 -- 40 tiendas activas -- Top 3
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
          <span className="font-bold text-[#F5A623]">
            Tostada Roja 70PZ domina en las 10 tiendas (55-80% de la venta).
          </span>{" "}
          Las top 10 concentran el 38% de la venta total. Rango: $158K - $216K.
        </p>
      </div>
    </SlideWrapper>
  );
}
