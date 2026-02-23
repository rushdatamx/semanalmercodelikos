"use client";

import SlideWrapper from "./SlideWrapper";
import { Store, TrendingUp } from "lucide-react";

interface Tienda {
  nombre: string;
  venta26: number;
  venta25: number;
  pct: number;
  top3: { nombre: string; venta: string }[];
}

const tiendas: Tienda[] = [
  {
    nombre: "Los Pilares", venta26: 166365, venta25: 131185, pct: 4.2,
    top3: [{ nombre: "Tostada Roja 70PZ", venta: "$115K" }, { nombre: "Durito Teja 20pzs", venta: "$8.1K" }, { nombre: "Tostada Roja 200g", venta: "$7.1K" }],
  },
  {
    nombre: "Garcia", venta26: 164035, venta25: 108260, pct: 4.2,
    top3: [{ nombre: "Tostada Roja 70PZ", venta: "$113K" }, { nombre: "Durito Teja 20pzs", venta: "$9.4K" }, { nombre: "Papa Natural 45g", venta: "$7K" }],
  },
  {
    nombre: "Mixcoac", venta26: 153019, venta25: 65645, pct: 3.9,
    top3: [{ nombre: "Tostada Roja 70PZ", venta: "$121K" }, { nombre: "Durito Teja 20pzs", venta: "$8.2K" }, { nombre: "Tostada Amar. 200g", venta: "$3.5K" }],
  },
  {
    nombre: "Girasoles", venta26: 146968, venta25: 108731, pct: 3.7,
    top3: [{ nombre: "Tostada Roja 70PZ", venta: "$101K" }, { nombre: "Durito Teja 20pzs", venta: "$8.2K" }, { nombre: "Tostada Amar. 200g", venta: "$5.2K" }],
  },
  {
    nombre: "El Jaral", venta26: 146894, venta25: 80798, pct: 3.7,
    top3: [{ nombre: "Tostada Roja 70PZ", venta: "$95K" }, { nombre: "Cacahuate Mixto", venta: "$8K" }, { nombre: "Tostada Amar. 200g", venta: "$5.3K" }],
  },
  {
    nombre: "Buenavista", venta26: 142946, venta25: 122008, pct: 3.6,
    top3: [{ nombre: "Tostada Roja 70PZ", venta: "$98K" }, { nombre: "Durito Teja 20pzs", venta: "$10.5K" }, { nombre: "Tostada Amar. 200g", venta: "$7K" }],
  },
  {
    nombre: "San Roque", venta26: 133396, venta25: 76735, pct: 3.4,
    top3: [{ nombre: "Tostada Roja 70PZ", venta: "$98K" }, { nombre: "Durito Teja 20pzs", venta: "$7.9K" }, { nombre: "Papa Natural 45g", venta: "$4.2K" }],
  },
  {
    nombre: "Sendero Sta. Catarina", venta26: 130275, venta25: 123903, pct: 3.3,
    top3: [{ nombre: "Tostada Roja 70PZ", venta: "$72K" }, { nombre: "Durito Teja 20pzs", venta: "$5.9K" }, { nombre: "Papa Natural 45g", venta: "$5.8K" }],
  },
  {
    nombre: "Ramos Arizpe", venta26: 128434, venta25: 86758, pct: 3.3,
    top3: [{ nombre: "Tostada Roja 70PZ", venta: "$90K" }, { nombre: "Durito Teja 20pzs", venta: "$9.7K" }, { nombre: "Tostada Roja 200g", venta: "$3.6K" }],
  },
  {
    nombre: "Solidaridad", venta26: 126960, venta25: 88558, pct: 3.2,
    top3: [{ nombre: "Tostada Roja 70PZ", venta: "$84K" }, { nombre: "Tostada Roja 200g", venta: "$7.7K" }, { nombre: "Durito Teja 20pzs", venta: "$7.2K" }],
  },
];

const total26 = 3925746;
const total25 = 2588426;

const fmt = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
  return `$${v}`;
};

const fmtVar = (v26: number, v25: number) => {
  if (v25 === 0) return "Nueva";
  const pct = ((v26 - v25) / v25) * 100;
  if (pct < 0) return `${pct.toFixed(0)}%`;
  return `+${pct.toFixed(0)}%`;
};

export default function VentasSlide2Tiendas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Store className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Venta por Tienda — MERCO</h2>
      </div>
      <p className="text-sm text-gray-500 mb-1">
        Top 10 de 43 tiendas · Ene – Feb 2026 vs Ene – Feb 2025 · Con top 3 productos
      </p>

      {/* Comparativo general */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-gray-200 shadow-sm">
          <TrendingUp className="w-4 h-4 text-[#27AE60]" />
          <span className="text-xs text-gray-600">Ene–Feb 2026: <span className="font-bold text-gray-800">{fmt(total26)}</span></span>
          <span className="text-gray-300">|</span>
          <span className="text-xs text-gray-400">Ene–Feb 2025: {fmt(total25)}</span>
          <span className="text-xs font-bold text-[#27AE60]">+51.7%</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-gray-400">
          <span>35 crecen</span>
          <span>·</span>
          <span>3 bajan</span>
          <span>·</span>
          <span>5 nuevas</span>
        </div>
      </div>

      {/* Tiendas grid: 2 columns x 5 rows */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-2 flex-1">
        {tiendas.map((t, i) => {
          const barPct = (t.venta26 / tiendas[0].venta26) * 100;
          const varLabel = fmtVar(t.venta26, t.venta25);
          const isTop3 = i < 3;

          return (
            <div key={i} className="flex items-start gap-2">
              <span className={`w-5 text-right text-sm font-bold mt-1 ${isTop3 ? "text-[#F5A623]" : "text-gray-400"}`}>
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[11px] ${isTop3 ? "text-gray-800 font-bold" : "text-gray-700"}`}>
                      MERCO {t.nombre}
                    </span>
                    <span className={`text-[8px] px-1 py-0.5 rounded font-semibold ${t.venta25 === 0 ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-700"}`}>
                      {varLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-800 font-bold text-xs">{fmt(t.venta26)}</span>
                    <span className="text-gray-400 text-[10px] w-10 text-right">{t.pct}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                  <div
                    className="h-1.5 rounded-full"
                    style={{ width: `${barPct}%`, backgroundColor: isTop3 ? "#F5A623" : "#9CA3AF" }}
                  />
                </div>
                <div className="flex gap-1.5">
                  {t.top3.map((p, j) => (
                    <span key={j} className="text-[8px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                      <span className={j === 0 ? "text-gray-600 font-semibold" : ""}>{p.nombre}</span>{" "}
                      <span className="text-gray-500 font-medium">{p.venta}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2.5 text-center">
          <p className="text-[9px] text-gray-400 mb-0.5">Crecimiento total</p>
          <p className="text-lg font-bold text-[#27AE60]">+51.7%</p>
          <p className="text-[9px] text-gray-500">{fmt(total25)} → {fmt(total26)}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2.5 text-center">
          <p className="text-[9px] text-gray-400 mb-0.5">Mayor crecimiento</p>
          <p className="text-lg font-bold text-[#F5A623]">Mixcoac</p>
          <p className="text-[9px] text-gray-500">+133% · $153K</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2.5 text-center">
          <p className="text-[9px] text-gray-400 mb-0.5">Tiendas creciendo</p>
          <p className="text-lg font-bold text-[#27AE60]">35 / 43</p>
          <p className="text-[9px] text-gray-500">81% de tiendas activas</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
