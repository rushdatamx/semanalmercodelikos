"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin } from "lucide-react";

/* ── Top 10 tiendas by UNITS with top 3 products (25 SKUs Botanas only) ── */
interface ProductInfo {
  name: string;
  pct: string;
}

interface StoreRow {
  rank: number;
  nombre: string;
  uds: string;
  udsNum: number;
  uds2025: string;
  varYoY: string;
  top3: ProductInfo[];
}

const stores: StoreRow[] = [
  {
    rank: 1, nombre: "MERCO GARCIA", uds: "24,447", udsNum: 24447,
    uds2025: "10,603", varYoY: "+131%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "41%" }, { name: "Papa Natural 45g", pct: "17%" }, { name: "Papa Fuego 45g", pct: "13%" }],
  },
  {
    rank: 2, nombre: "MERCO SOLIDARIDAD", uds: "21,353", udsNum: 21353,
    uds2025: "9,629", varYoY: "+122%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "48%" }, { name: "Papa Natural 45g", pct: "14%" }, { name: "Papa Jalapeño 45g", pct: "11%" }],
  },
  {
    rank: 3, nombre: "MERCO MONTEMORELOS", uds: "18,210", udsNum: 18210,
    uds2025: "8,119", varYoY: "+124%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "33%" }, { name: "Papa Natural 45g", pct: "20%" }, { name: "Papa Fuego 45g", pct: "13%" }],
  },
  {
    rank: 4, nombre: "MERCO MIXCOAC", uds: "17,970", udsNum: 17970,
    uds2025: "6,977", varYoY: "+158%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "51%" }, { name: "Papa Fuego 45g", pct: "15%" }, { name: "Papa Natural 45g", pct: "14%" }],
  },
  {
    rank: 5, nombre: "MERCO SENDERO SANTA CATARINA", uds: "17,211", udsNum: 17211,
    uds2025: "9,187", varYoY: "+87%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "42%" }, { name: "Papa Natural 45g", pct: "16%" }, { name: "Papa Jalapeño 45g", pct: "12%" }],
  },
  {
    rank: 6, nombre: "MERCO EL JARAL", uds: "17,148", udsNum: 17148,
    uds2025: "8,662", varYoY: "+98%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "49%" }, { name: "Papa Natural 45g", pct: "14%" }, { name: "Papa Jalapeño 45g", pct: "11%" }],
  },
  {
    rank: 7, nombre: "MERCO GIRASOLES", uds: "17,062", udsNum: 17062,
    uds2025: "10,549", varYoY: "+62%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "55%" }, { name: "Papa Natural 45g", pct: "11%" }, { name: "Papa Jalapeño 45g", pct: "8%" }],
  },
  {
    rank: 8, nombre: "MERCO BUENAVISTA", uds: "16,932", udsNum: 16932,
    uds2025: "11,891", varYoY: "+42%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "62%" }, { name: "Papa Jalapeño 45g", pct: "6%" }, { name: "Durito Teja", pct: "6%" }],
  },
  {
    rank: 9, nombre: "MERCO ACUÑA", uds: "16,592", udsNum: 16592,
    uds2025: "6,155", varYoY: "+170%",
    top3: [{ name: "Papa Natural 45g", pct: "23%" }, { name: "Papa Fuego 45g", pct: "22%" }, { name: "Tost. Roja 70PZ", pct: "18%" }],
  },
  {
    rank: 10, nombre: "MERCO LOS PILARES", uds: "16,576", udsNum: 16576,
    uds2025: "11,922", varYoY: "+39%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "63%" }, { name: "Tost. Roja 200g", pct: "7%" }, { name: "Papa Natural 45g", pct: "6%" }],
  },
];

const maxUds = stores[0].udsNum;

function StoreCard({ store }: { store: StoreRow }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2.5 flex flex-col gap-1.5">
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
                {store.uds} uds
              </span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-green-100 text-green-700">
                {store.varYoY}
              </span>
            </div>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mt-1">
            <div
              className="h-full rounded-full bg-[#F5A623]"
              style={{
                width: `${(store.udsNum / maxUds) * 100}%`,
                opacity: store.rank <= 3 ? 1 : 0.5,
              }}
            />
          </div>
          <p className="text-[8px] text-gray-400 mt-0.5">
            Ene-Jul 2025: {store.uds2025} uds
          </p>
        </div>
      </div>
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

export default function NegSlide5TopTiendasUds() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-6">
      <div className="flex items-center gap-3 mb-3">
        <MapPin className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Top 10 Tiendas por Unidades
          </h2>
          <p className="text-[10px] text-gray-500">
            Unidades acumuladas Ene-Jul 2026 -- 25 SKUs Botanas -- Top 3
            productos por tienda
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 flex-1 min-h-0">
        {stores.map((store) => (
          <StoreCard key={store.rank} store={store} />
        ))}
      </div>

      <div className="mt-3 bg-white rounded-xl border border-[#F5A623]/20 shadow-sm px-4 py-2 flex items-start gap-2">
        <div className="w-4 h-4 rounded-full bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-[9px] font-bold text-[#F5A623]">i</span>
        </div>
        <p className="text-[11px] text-gray-700">
          <span className="font-bold text-green-700">
            Crecimiento de volumen muy fuerte: 6 de 10 tiendas duplicaron sus unidades vs 2025 (+39% a +170%).
          </span>{" "}
          Acuna (+170%), Mixcoac (+158%), Garcia (+131%) y Montemorelos (+124%) lideran. Montemorelos y
          Acuna entran al top 10 por unidades pero NO al de venta: venden mucha Papa 45g, que es barata.
          En Acuna la Papa 45g ya desplazo a la Tostada Roja 70PZ del primer lugar.
        </p>
      </div>
    </SlideWrapper>
  );
}
