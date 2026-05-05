"use client";

import SlideWrapper from "./SlideWrapper";
import { Target } from "lucide-react";

const skuPenetracion = [
  { nombre: "Tostada Roja 70PZ", tiendas: 40, pct: 100, venta: 5650991 },
  { nombre: "Tostada Amarilla 200g", tiendas: 40, pct: 100, venta: 302006 },
  { nombre: "Tostada Roja 200g", tiendas: 40, pct: 100, venta: 299854 },
  { nombre: "Papa Fuego 45g", tiendas: 40, pct: 100, venta: 181093 },
  { nombre: "Papa Fuego 340g", tiendas: 40, pct: 100, venta: 121301 },
  { nombre: "Papa Natural 45g", tiendas: 39, pct: 98, venta: 254807 },
  { nombre: "Papa Jalapeno 45g", tiendas: 39, pct: 98, venta: 169994 },
  { nombre: "Papa Natural 340g", tiendas: 39, pct: 98, venta: 127607 },
  { nombre: "Papa Jalapeno 340g", tiendas: 39, pct: 98, venta: 125062 },
  { nombre: "Minicuadro S/Chile 300g", tiendas: 34, pct: 85, venta: 143390 },
  { nombre: "Papa Desh. Natural 170g", tiendas: 33, pct: 82, venta: 137904 },
  { nombre: "Cacahuate Botanero 454g", tiendas: 33, pct: 82, venta: 101803 },
  { nombre: "Minicuadro C/Chile 300g", tiendas: 32, pct: 80, venta: 111466 },
  { nombre: "Cacahuate Mixto Granel", tiendas: 31, pct: 78, venta: 231112 },
  { nombre: "Durito Teja 20PZ", tiendas: 30, pct: 75, venta: 453197 },
];

export default function VtaSlide7Penetracion() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Target className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-3xl font-bold text-gray-800">Penetracion de SKUs</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Ene-Abr 2026 · Fill rate: 60.5% (1,234 de 2,040 combinaciones)</p>

      <div className="flex gap-5 flex-1">
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4 overflow-hidden">
          <p className="text-gray-500 text-xs mb-2">Top 15 SKUs por penetracion</p>
          <div className="overflow-auto max-h-[420px]">
            <table className="w-full text-[12px]">
              <thead className="sticky top-0 bg-gray-50">
                <tr className="text-gray-500 text-left">
                  <th className="py-2 px-3 font-semibold">Producto</th>
                  <th className="py-2 px-3 font-semibold text-center">Tiendas</th>
                  <th className="py-2 px-3 font-semibold w-40">Penetracion</th>
                  <th className="py-2 px-3 font-semibold text-right">Venta</th>
                </tr>
              </thead>
              <tbody>
                {skuPenetracion.map((s, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-1.5 px-3 text-gray-700">{s.nombre}</td>
                    <td className="py-1.5 px-3 text-center text-gray-600">{s.tiendas}/40</td>
                    <td className="py-1.5 px-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-2.5">
                          <div
                            className="h-2.5 rounded-full"
                            style={{
                              width: `${s.pct}%`,
                              backgroundColor: s.pct === 100 ? "#27AE60" : s.pct >= 90 ? "#F7B500" : "#F5A623",
                            }}
                          />
                        </div>
                        <span className="text-gray-500 text-[10px] w-8">{s.pct}%</span>
                      </div>
                    </td>
                    <td className="py-1.5 px-3 text-right text-gray-800 font-semibold">
                      ${(s.venta / 1000).toFixed(0)}K
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-[280px] flex flex-col gap-3 justify-center">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
            <p className="text-gray-400 text-xs mb-2">Fill Rate</p>
            <p className="text-[#F5A623] text-5xl font-bold">60.5%</p>
            <p className="text-gray-400 text-[10px] mt-2">1,234 de 2,040 combinaciones tienda-SKU</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
            <p className="text-gray-400 text-xs mb-2">SKUs al 100%</p>
            <p className="text-[#27AE60] text-5xl font-bold">5</p>
            <p className="text-gray-400 text-[10px] mt-2">Presentes en las 40 tiendas</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
            <p className="text-gray-400 text-xs mb-2">SKUs &gt;95%</p>
            <p className="text-[#F7B500] text-5xl font-bold">9</p>
            <p className="text-gray-400 text-[10px] mt-2">En 39 o 40 tiendas</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
