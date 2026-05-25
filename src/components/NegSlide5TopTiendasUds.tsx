"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin } from "lucide-react";

/* ── Top 10 tiendas by UNITS with top 3 products (20 SKUs Abarrotes only) ── */
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
    rank: 1, nombre: "MERCO GARCIA", uds: "15,371", udsNum: 15371,
    uds2025: "7,404", varYoY: "+108%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "44%" }, { name: "Papa Natural 45g", pct: "15%" }, { name: "Papa Jalapeño 45g", pct: "11%" }],
  },
  {
    rank: 2, nombre: "MERCO SOLIDARIDAD", uds: "12,745", udsNum: 12745,
    uds2025: "6,592", varYoY: "+93%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "54%" }, { name: "Papa Natural 45g", pct: "12%" }, { name: "Tost. Roja 200g", pct: "10%" }],
  },
  {
    rank: 3, nombre: "MERCO EL JARAL", uds: "11,895", udsNum: 11895,
    uds2025: "5,799", varYoY: "+105%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "50%" }, { name: "Papa Natural 45g", pct: "13%" }, { name: "Papa Jalapeño 45g", pct: "10%" }],
  },
  {
    rank: 4, nombre: "MERCO SENDERO STA. CATARINA", uds: "10,829", udsNum: 10829,
    uds2025: "6,737", varYoY: "+61%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "48%" }, { name: "Papa Natural 45g", pct: "13%" }, { name: "Papa Jalapeño 45g", pct: "10%" }],
  },
  {
    rank: 5, nombre: "MERCO MIXCOAC", uds: "10,802", udsNum: 10802,
    uds2025: "5,221", varYoY: "+107%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "64%" }, { name: "Papa Fuego 45g", pct: "12%" }, { name: "Papa Natural 45g", pct: "9%" }],
  },
  {
    rank: 6, nombre: "MERCO COLINAS", uds: "10,656", udsNum: 10656,
    uds2025: "4,909", varYoY: "+117%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "57%" }, { name: "Papa Natural 45g", pct: "9%" }, { name: "Papa Fuego 45g", pct: "9%" }],
  },
  {
    rank: 7, nombre: "MERCO PARAJE SAN JOSE", uds: "10,585", udsNum: 10585,
    uds2025: "6,247", varYoY: "+69%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "49%" }, { name: "Papa Natural 45g", pct: "16%" }, { name: "Papa Jalapeño 45g", pct: "9%" }],
  },
  {
    rank: 8, nombre: "MERCO GIRASOLES", uds: "10,499", udsNum: 10499,
    uds2025: "7,630", varYoY: "+38%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "65%" }, { name: "Tost. Roja 200g", pct: "7%" }, { name: "Tost. Amar. 200g", pct: "7%" }],
  },
  {
    rank: 9, nombre: "MERCO SAN ROQUE", uds: "10,481", udsNum: 10481,
    uds2025: "5,255", varYoY: "+99%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "66%" }, { name: "Papa Natural 45g", pct: "10%" }, { name: "Papa Fuego 45g", pct: "7%" }],
  },
  {
    rank: 10, nombre: "MERCO LOS PILARES", uds: "10,324", udsNum: 10324,
    uds2025: "8,258", varYoY: "+25%",
    top3: [{ name: "Tost. Roja 70PZ", pct: "72%" }, { name: "Tost. Roja 200g", pct: "9%" }, { name: "Tost. Amar. 200g", pct: "4%" }],
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
            Ene-May 2025: {store.uds2025} uds
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
            Unidades acumuladas Ene-May 2026 -- 20 SKUs Abarrotes -- Top 3
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
            Crecimiento de volumen muy fuerte: 7 de 10 tiendas duplicaron o casi duplicaron sus unidades vs 2025 (+61% a +117%).
          </span>{" "}
          Colinas (+117%), Garcia (+108%), Mixcoac (+107%) y El Jaral (+105%) lideran. Paraje San Jose entra al top 10 por alto volumen de papas 45g.
        </p>
      </div>
    </SlideWrapper>
  );
}
