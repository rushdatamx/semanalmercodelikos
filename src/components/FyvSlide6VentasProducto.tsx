"use client";

import SlideWrapper from "./SlideWrapper";
import { Award } from "lucide-react";

interface Producto {
  nombre: string;
  venta: number;
  grupo: string;
}

const productos: Producto[] = [
  { nombre: "Minicuadro Sin Chile 300g", venta: 40027, grupo: "Minicuadros" },
  { nombre: "Papa Deshid. Natural 170g", venta: 38830, grupo: "Papas Desh" },
  { nombre: "Cacahuate Botanero 454g", venta: 32214, grupo: "Cacah MM" },
  { nombre: "Rotini Sin Chile 300g", venta: 29482, grupo: "Rotinis" },
  { nombre: "Cacahuate Virginia 454g", venta: 26808, grupo: "Cacah MM" },
  { nombre: "Papa Deshid. Fuego 170g", venta: 24262, grupo: "Papas Desh" },
  { nombre: "Cacahuate Cantinero 454g", venta: 22064, grupo: "Cacah MM" },
  { nombre: "Churrito Rojo 454g", venta: 21240, grupo: "Fritos" },
  { nombre: "Conchitas 454g", venta: 18541, grupo: "Fritos" },
  { nombre: "Cacahuate Japonés 454g", venta: 18410, grupo: "Cacah MM" },
  { nombre: "Minicuadro Con Chile 300g", venta: 9565, grupo: "Minicuadros" },
  { nombre: "Rotini Con Chile 300g", venta: 8002, grupo: "Rotinis" },
];

const maxVenta = productos[0].venta;

const grupoColor: Record<string, string> = {
  Fritos: "#E74C3C",
  Rotinis: "#F5A623",
  Minicuadros: "#3B82F6",
  "Cacah MM": "#8B5CF6",
  "Papas Desh": "#EC4899",
};

const fmt = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
  return `$${v}`;
};

const totalVenta = productos.reduce((s, p) => s + p.venta, 0);

export default function FyvSlide6VentasProducto() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <div className="flex items-center gap-3 mb-1">
        <Award className="w-6 h-6 text-[#27AE60]" />
        <h2 className="text-2xl font-bold text-gray-800">Ventas por Producto — Frutas y Verduras</h2>
      </div>
      <p className="text-gray-500 text-xs mb-3">Ene–Feb 2026 · 12 productos · Total: {fmt(totalVenta)}</p>

      <div className="flex gap-5 flex-1">
        {/* Left column: 1-6 */}
        <div className="flex-1 space-y-2">
          {productos.slice(0, 6).map((p, i) => {
            const barPct = (p.venta / maxVenta) * 100;
            const isTop3 = i < 3;
            const pct = ((p.venta / totalVenta) * 100).toFixed(1);
            return (
              <div key={i} className="flex items-center gap-2">
                <span className={`w-4 text-right text-xs font-bold ${isTop3 ? "text-[#27AE60]" : "text-gray-400"}`}>
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[11px] ${isTop3 ? "text-gray-800 font-bold" : "text-gray-700"}`}>{p.nombre}</span>
                      <span className="text-[8px] px-1 py-0.5 rounded font-semibold text-white" style={{ backgroundColor: grupoColor[p.grupo] }}>
                        {p.grupo}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800 font-bold text-xs">{fmt(p.venta)}</span>
                      <span className="text-gray-400 text-[10px] w-10 text-right">{pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: `${barPct}%`, backgroundColor: grupoColor[p.grupo] }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right column: 7-12 */}
        <div className="flex-1 space-y-2">
          {productos.slice(6).map((p, i) => {
            const rank = i + 7;
            const barPct = (p.venta / maxVenta) * 100;
            const pct = ((p.venta / totalVenta) * 100).toFixed(1);
            return (
              <div key={rank} className="flex items-center gap-2">
                <span className="w-4 text-right text-xs font-bold text-gray-400">{rank}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-gray-700">{p.nombre}</span>
                      <span className="text-[8px] px-1 py-0.5 rounded font-semibold text-white" style={{ backgroundColor: grupoColor[p.grupo] }}>
                        {p.grupo}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800 font-bold text-xs">{fmt(p.venta)}</span>
                      <span className="text-gray-400 text-[10px] w-10 text-right">{pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: `${barPct}%`, backgroundColor: grupoColor[p.grupo] }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-5 gap-2">
        {[
          { label: "Minicuadros", value: 40027 + 9565, color: "#3B82F6" },
          { label: "Cacah MM", value: 32214 + 26808 + 22064 + 18410, color: "#8B5CF6" },
          { label: "Papas Desh", value: 38830 + 24262, color: "#EC4899" },
          { label: "Rotinis", value: 29482 + 8002, color: "#F5A623" },
          { label: "Fritos", value: 21240 + 18541, color: "#E74C3C" },
        ].map((g) => (
          <div key={g.label} className="bg-white rounded-lg border border-gray-200 shadow-sm p-2 text-center">
            <p className="text-[9px] text-gray-400">{g.label}</p>
            <p className="text-sm font-bold" style={{ color: g.color }}>{fmt(g.value)}</p>
            <p className="text-[9px] text-gray-500">{((g.value / totalVenta) * 100).toFixed(0)}%</p>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
}
