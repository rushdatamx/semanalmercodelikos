"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin, AlertTriangle } from "lucide-react";

/* ── Store data ── */
interface ProductRow {
  nombre: string;
  venta: string;
  inv: number;
  ddi: number;
}

interface StoreData {
  rank: number;
  nombre: string;
  ventaTotal: string;
  productos: ProductRow[];
}

const stores: StoreData[] = [
  {
    rank: 1,
    nombre: "MERCO GARCIA",
    ventaTotal: "$216,128",
    productos: [
      { nombre: "Tostada Roja 70PZ", venta: "$141,603", inv: 135, ddi: 3.2 },
      { nombre: "Durito Teja 20pzs", venta: "$15,416", inv: 22, ddi: 6.5 },
      { nombre: "Papa Natural 45g", venta: "$10,461", inv: 283, ddi: 27.9 },
    ],
  },
  {
    rank: 2,
    nombre: "MERCO LOS PILARES",
    ventaTotal: "$207,903",
    productos: [
      { nombre: "Tostada Roja 70PZ", venta: "$147,700", inv: 233, ddi: 6.4 },
      { nombre: "Tostada Roja 200g", venta: "$8,114", inv: 66, ddi: 9.8 },
      { nombre: "Durito Teja 20pzs", venta: "$8,105", inv: 2, ddi: 3.1 },
    ],
  },
  {
    rank: 3,
    nombre: "MERCO GIRASOLES",
    ventaTotal: "$189,485",
    productos: [
      { nombre: "Tostada Roja 70PZ", venta: "$127,118", inv: 460, ddi: 13.4 },
      { nombre: "Durito Teja 20pzs", venta: "$8,366", inv: 15, ddi: 12.7 },
      { nombre: "Tostada Amarilla 200g", venta: "$6,757", inv: 102, ddi: 17.8 },
    ],
  },
];

const ddiColor = (ddi: number): string => {
  if (ddi < 7) return "bg-red-100 text-red-700";
  if (ddi < 15) return "bg-yellow-100 text-yellow-700";
  return "bg-green-100 text-green-700";
};

const ddiDot = (ddi: number): string => {
  if (ddi < 7) return "bg-red-500";
  if (ddi < 15) return "bg-yellow-500";
  return "bg-green-500";
};

export default function NegSlide2TopTiendas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <MapPin className="w-6 h-6 text-[#8E44AD]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Top 3 Tiendas — Productos y Disponibilidad
          </h2>
          <p className="text-[10px] text-gray-500">
            Venta Ene-Mar 2026 -- Inventario al 8 de marzo
          </p>
        </div>
      </div>

      {/* DDI legend */}
      <div className="flex items-center gap-4 mb-3">
        <span className="text-[9px] text-gray-400 font-semibold uppercase">DDI:</span>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-[9px] text-gray-500">&lt; 7 dias</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <span className="text-[9px] text-gray-500">7-14 dias</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[9px] text-gray-500">15+ dias</span>
        </div>
      </div>

      {/* 3 Store cards */}
      <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
        {stores.map((store) => (
          <div
            key={store.rank}
            className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden"
          >
            {/* Store header */}
            <div className="bg-[#8E44AD]/5 border-b border-[#8E44AD]/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#8E44AD] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  #{store.rank}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{store.nombre}</p>
                  <p className="text-xs text-[#8E44AD] font-bold">{store.ventaTotal}</p>
                </div>
              </div>
            </div>

            {/* Products table */}
            <div className="flex-1 px-2 py-2">
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="text-gray-400 text-[9px] uppercase">
                    <th className="text-left py-1 px-1.5">Producto</th>
                    <th className="text-right py-1 px-1.5">Venta</th>
                    <th className="text-right py-1 px-1.5">Inv</th>
                    <th className="text-right py-1 px-1.5">DDI</th>
                  </tr>
                </thead>
                <tbody>
                  {store.productos.map((p, j) => (
                    <tr key={j} className="border-b border-gray-50">
                      <td className="py-1.5 px-1.5 text-gray-700 font-medium">{p.nombre}</td>
                      <td className="py-1.5 px-1.5 text-right text-gray-600">{p.venta}</td>
                      <td className="py-1.5 px-1.5 text-right text-gray-600">
                        {p.inv.toLocaleString()}
                      </td>
                      <td className="py-1.5 px-1.5 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <div className={`w-1.5 h-1.5 rounded-full ${ddiDot(p.ddi)}`} />
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${ddiColor(p.ddi)}`}>
                            {p.ddi.toFixed(1)}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Store summary */}
            <div className="px-3 pb-2">
              <div className="flex items-center gap-1.5">
                {store.productos.map((p, j) => (
                  <div
                    key={j}
                    className={`flex-1 h-1.5 rounded-full ${
                      p.ddi < 7 ? "bg-red-400" : p.ddi < 15 ? "bg-yellow-400" : "bg-green-400"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[8px] text-gray-400 mt-1 text-center">
                {store.productos.filter((p) => p.ddi < 15).length} de {store.productos.length}{" "}
                productos bajo umbral
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Insight */}
      <div className="mt-3 bg-white rounded-xl border border-[#8E44AD]/20 shadow-sm px-4 py-2.5 flex items-start gap-2">
        <AlertTriangle className="w-4 h-4 text-[#8E44AD] flex-shrink-0 mt-0.5" />
        <p className="text-[11px] text-gray-700">
          <span className="font-bold text-[#8E44AD]">En las 3 tiendas mas importantes, 6 de 9 combinaciones producto-tienda estan por debajo de 15 DDI.</span>{" "}
          La disponibilidad en tiendas top es el principal riesgo.
        </p>
      </div>
    </SlideWrapper>
  );
}
