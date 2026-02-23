"use client";

import SlideWrapper from "./SlideWrapper";
import { Award } from "lucide-react";

interface Producto {
  nombre: string;
  venta: number;
  grupo: string;
}

const productos: Producto[] = [
  { nombre: "Tostada Roja 70PZ", venta: 2521248, grupo: "Tostadas" },
  { nombre: "Durito Teja 20pzs", venta: 184883, grupo: "Otros" },
  { nombre: "Tostada Roja 200g", venta: 140337, grupo: "Tostadas" },
  { nombre: "Tostada Amarilla 200g", venta: 136142, grupo: "Tostadas" },
  { nombre: "Papa Natural 45g", venta: 104856, grupo: "Papa 45g" },
  { nombre: "Cacahuate Mixto 1kg", venta: 81951, grupo: "Cacahuates" },
  { nombre: "Papa Fuego 45g", venta: 80378, grupo: "Papa 45g" },
  { nombre: "Papa Jalapeño 45g", venta: 71837, grupo: "Papa 45g" },
  { nombre: "Papa Fuego 340g", venta: 55303, grupo: "Papa 340g" },
  { nombre: "Cacahuate Cantinero 1kg", venta: 47492, grupo: "Cacahuates" },
  { nombre: "Papa Sal 340g", venta: 43733, grupo: "Papa 340g" },
  { nombre: "Papa Jalapeño 340g", venta: 41401, grupo: "Papa 340g" },
  { nombre: "Cheto Mix 400g", venta: 17856, grupo: "Otros" },
  { nombre: "Rueda Natural 400g", venta: 16922, grupo: "Otros" },
  { nombre: "Minicuadro Natural 400g", venta: 13933, grupo: "Otros" },
  { nombre: "Cacahuate Salado 1kg", venta: 13347, grupo: "Cacahuates" },
  { nombre: "Rodajitas 4Buddies 30g", venta: 4225, grupo: "4Buddies" },
  { nombre: "Palomitas Classic 25g", venta: 3109, grupo: "4Buddies" },
  { nombre: "Palomitas Elote 25g", venta: 2763, grupo: "4Buddies" },
  { nombre: "Palomitas Cheddar 25g", venta: 2551, grupo: "4Buddies" },
];

const maxVenta = productos[0].venta;

const grupoColor: Record<string, string> = {
  Tostadas: "#E74C3C",
  "Papa 45g": "#3B82F6",
  "Papa 340g": "#F5A623",
  Cacahuates: "#8B5CF6",
  Otros: "#6B7280",
  "4Buddies": "#EC4899",
};

const fmt = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
  return `$${v}`;
};

const totalVenta = productos.reduce((s, p) => s + p.venta, 0);

export default function AbaSlide6VentasProducto() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <div className="flex items-center gap-3 mb-1">
        <Award className="w-6 h-6 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Ventas por Producto — Abarrotes</h2>
      </div>
      <p className="text-gray-500 text-xs mb-2">Ene–Feb 2026 · 20 productos · Total: {fmt(totalVenta)}</p>

      <div className="flex gap-5 flex-1">
        {/* Left column: 1-10 */}
        <div className="flex-1 space-y-1">
          {productos.slice(0, 10).map((p, i) => {
            const barPct = (p.venta / maxVenta) * 100;
            const isTop3 = i < 3;
            const pct = ((p.venta / totalVenta) * 100).toFixed(1);
            return (
              <div key={i} className="flex items-center gap-1.5">
                <span className={`w-4 text-right text-[10px] font-bold ${isTop3 ? "text-[#F5A623]" : "text-gray-400"}`}>
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-1">
                      <span className={`text-[10px] ${isTop3 ? "text-gray-800 font-bold" : "text-gray-700"}`}>{p.nombre}</span>
                      <span className="text-[8px] px-1 py-0.5 rounded font-semibold text-white" style={{ backgroundColor: grupoColor[p.grupo] }}>
                        {p.grupo}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-800 font-bold text-[10px]">{fmt(p.venta)}</span>
                      <span className="text-gray-400 text-[9px] w-8 text-right">{pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full" style={{ width: `${barPct}%`, backgroundColor: grupoColor[p.grupo] }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right column: 11-20 */}
        <div className="flex-1 space-y-1">
          {productos.slice(10).map((p, i) => {
            const rank = i + 11;
            const barPct = (p.venta / maxVenta) * 100;
            const pct = ((p.venta / totalVenta) * 100).toFixed(1);
            return (
              <div key={rank} className="flex items-center gap-1.5">
                <span className="w-4 text-right text-[10px] font-bold text-gray-400">{rank}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] text-gray-700">{p.nombre}</span>
                      <span className="text-[8px] px-1 py-0.5 rounded font-semibold text-white" style={{ backgroundColor: grupoColor[p.grupo] }}>
                        {p.grupo}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-800 font-bold text-[10px]">{fmt(p.venta)}</span>
                      <span className="text-gray-400 text-[9px] w-8 text-right">{pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full" style={{ width: `${barPct}%`, backgroundColor: grupoColor[p.grupo] }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-2 grid grid-cols-4 gap-3">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2 text-center">
          <p className="text-[9px] text-gray-400">Tostadas (3)</p>
          <p className="text-base font-bold text-[#E74C3C]">{fmt(2521248 + 140337 + 136142)}</p>
          <p className="text-[9px] text-gray-500">79.7% del total</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2 text-center">
          <p className="text-[9px] text-gray-400">Papa 45g (3)</p>
          <p className="text-base font-bold text-[#3B82F6]">{fmt(104856 + 80378 + 71837)}</p>
          <p className="text-[9px] text-gray-500">7.3% del total</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2 text-center">
          <p className="text-[9px] text-gray-400">Papa 340g (3)</p>
          <p className="text-base font-bold text-[#F5A623]">{fmt(55303 + 43733 + 41401)}</p>
          <p className="text-[9px] text-gray-500">4.0% del total</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2 text-center">
          <p className="text-[9px] text-gray-400">Cacahuates (3)</p>
          <p className="text-base font-bold text-[#8B5CF6]">{fmt(81951 + 47492 + 13347)}</p>
          <p className="text-[9px] text-gray-500">4.1% del total</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
