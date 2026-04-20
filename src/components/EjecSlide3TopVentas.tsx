"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin, Award } from "lucide-react";

interface Tienda {
  nombre: string;
  venta: number;
  pct: number;
  growth: string;
}

interface Producto {
  nombre: string;
  venta: number;
  uds: number;
  pct: number;
}

const topTiendas: Tienda[] = [
  { nombre: "MERCO García", venta: 297195, pct: 4.2, growth: "+59%" },
  { nombre: "MERCO Los Pilares", venta: 283281, pct: 4.0, growth: "+31%" },
  { nombre: "MERCO Girasoles", venta: 268894, pct: 3.8, growth: "+44%" },
  { nombre: "MERCO Sdo. Sta. Catarina", venta: 268664, pct: 3.8, growth: "+33%" },
  { nombre: "MERCO El Jaral", venta: 265356, pct: 3.7, growth: "+79%" },
  { nombre: "MERCO Buenavista", venta: 263087, pct: 3.7, growth: "+31%" },
  { nombre: "MERCO Solidaridad", venta: 251937, pct: 3.6, growth: "+57%" },
  { nombre: "MERCO Mixcoac", venta: 251411, pct: 3.5, growth: "+111%" },
  { nombre: "MERCO San Roque", venta: 248583, pct: 3.5, growth: "+84%" },
  { nombre: "MERCO Montemorelos", venta: 226434, pct: 3.2, growth: "+72%" },
];

const topProductos: Producto[] = [
  { nombre: "Tostada Roja 70PZ", venta: 4329583, uds: 104795, pct: 61.0 },
  { nombre: "Durito Teja 20PZ", venta: 322877, uds: 5610, pct: 4.6 },
  { nombre: "Tostada Roja 200g", venta: 249472, uds: 17848, pct: 3.5 },
  { nombre: "Tostada Amarilla 200g", venta: 246228, uds: 17618, pct: 3.5 },
  { nombre: "Papa Natural 45g", venta: 172360, uds: 18667, pct: 2.4 },
  { nombre: "Cacahuate Mixto Granel", venta: 168351, uds: 2011, pct: 2.4 },
  { nombre: "Papa Fuego 45g", venta: 124586, uds: 13478, pct: 1.8 },
  { nombre: "Papa Jalapeño 45g", venta: 114239, uds: 12364, pct: 1.6 },
  { nombre: "Minicuadro S/Chile 300g", venta: 106100, uds: 2548, pct: 1.5 },
  { nombre: "Papa Desh. Natural 170g", venta: 102131, uds: 1808, pct: 1.4 },
];

const maxTiendaVenta = topTiendas[0].venta;
const maxProdVenta = topProductos[0].venta;

export default function EjecSlide3TopVentas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
            <Award className="w-5 h-5 text-[#8B5CF6]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Top Ventas Q1 2026</h2>
            <p className="text-[10px] text-gray-500">Ranking por tienda y producto — Sell-out acumulado Ene–Mar</p>
          </div>
        </div>
        <div className="bg-[#8B5CF6]/10 rounded-lg px-3 py-1.5 border border-[#8B5CF6]/20">
          <p className="text-[9px] text-[#8B5CF6] uppercase font-semibold">Total Q1</p>
          <p className="text-lg font-bold text-[#8B5CF6]">$7.09M</p>
        </div>
      </div>

      {/* Main: Two columns */}
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Left: Top 10 Tiendas */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-[#8B5CF6]" />
            <p className="text-xs font-bold text-gray-700">Top 10 Tiendas</p>
          </div>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-3 overflow-auto">
            <div className="space-y-1.5">
              {topTiendas.map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 text-right text-[10px] font-bold text-gray-400">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-medium text-gray-800 truncate">{t.nombre}</span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[10px] font-bold text-gray-800">
                          ${(t.venta / 1000).toFixed(0)}K
                        </span>
                        <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1 rounded">
                          {t.growth}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full bg-[#8B5CF6]"
                        style={{ width: `${(t.venta / maxTiendaVenta) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100 text-center">
              <p className="text-[9px] text-gray-400">
                Top 10 = {topTiendas.reduce((a, t) => a + t.pct, 0).toFixed(0)}% de la venta total
              </p>
            </div>
          </div>
        </div>

        {/* Right: Top 10 Productos */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-[#8B5CF6]" />
            <p className="text-xs font-bold text-gray-700">Top 10 Productos</p>
          </div>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-3 overflow-auto">
            <div className="space-y-1.5">
              {topProductos.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 text-right text-[10px] font-bold text-gray-400">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-medium text-gray-800 truncate">{p.nombre}</span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[10px] font-bold text-gray-800">
                          ${p.venta >= 1000000
                            ? (p.venta / 1000000).toFixed(1) + "M"
                            : (p.venta / 1000).toFixed(0) + "K"}
                        </span>
                        <span className="text-[9px] text-gray-500">
                          {p.pct}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full"
                        style={{
                          width: `${Math.max((p.venta / maxProdVenta) * 100, 3)}%`,
                          backgroundColor: i === 0 ? "#E74C3C" : "#8B5CF6",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100 text-center">
              <p className="text-[9px] text-gray-400">
                Tostada Roja 70PZ = 61% de la venta · Producto estrella
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer insight */}
      <div className="mt-3 bg-[#8B5CF6]/5 rounded-lg border border-[#8B5CF6]/15 px-4 py-2 flex items-center justify-between">
        <p className="text-[10px] text-[#8B5CF6] font-semibold">
          Todas las Top 10 tiendas crecieron vs Q1 2025 · Promedio: +60%
        </p>
        <p className="text-[10px] text-gray-500">
          40 tiendas activas · 0 tiendas con caída
        </p>
      </div>
    </SlideWrapper>
  );
}
