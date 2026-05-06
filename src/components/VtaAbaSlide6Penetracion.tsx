"use client";

import SlideWrapper from "./SlideWrapper";
import { Target } from "lucide-react";

const skuPenetracion = [
  { nombre: "Tostada Roja 70PZ", tiendas: 40, pct: 100, venta: 5650991 },
  { nombre: "Tostada Amarilla 200g", tiendas: 40, pct: 100, venta: 302006 },
  { nombre: "Tostada Roja 200g", tiendas: 40, pct: 100, venta: 299854 },
  { nombre: "Papa Fuego 45g", tiendas: 40, pct: 100, venta: 181093 },
  { nombre: "Papa Natural 45g", tiendas: 39, pct: 98, venta: 254807 },
  { nombre: "Papa Jalapeno 45g", tiendas: 39, pct: 98, venta: 169994 },
  { nombre: "Rueda Natural", tiendas: 39, pct: 98, venta: 85000 },
  { nombre: "Mini Cuadro", tiendas: 38, pct: 95, venta: 78000 },
  { nombre: "Palomitas 4Buddies", tiendas: 38, pct: 95, venta: 98000 },
  { nombre: "Cheto Mix 240g", tiendas: 37, pct: 93, venta: 120000 },
  { nombre: "Rodajitas 4Buddies", tiendas: 37, pct: 93, venta: 72000 },
  { nombre: "Nacho Maiz 450g", tiendas: 36, pct: 90, venta: 38000 },
  { nombre: "Totopo Maiz 450g", tiendas: 35, pct: 88, venta: 32000 },
  { nombre: "Tirita Maiz 450g", tiendas: 35, pct: 88, venta: 28000 },
  { nombre: "Cacahuate Mixto Granel", tiendas: 31, pct: 78, venta: 231112 },
  { nombre: "Durito Teja 20PZ", tiendas: 30, pct: 75, venta: 453197 },
  { nombre: "Cacahuate Salado Granel", tiendas: 23, pct: 58, venta: 148000 },
];

const oportunidades = [
  { nombre: "Durito Teja 20PZ", tiendas: 30, oportunidad: 10, potencial: "$151K" },
  { nombre: "Cacahuate Salado Granel", tiendas: 23, oportunidad: 17, potencial: "$109K" },
  { nombre: "Cacahuate Mixto Granel", tiendas: 31, oportunidad: 9, potencial: "$67K" },
];

export default function VtaAbaSlide6Penetracion() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Target className="w-7 h-7 text-[#2E75B6]" />
        <h2 className="text-3xl font-bold text-gray-800">Penetracion Abarrotes</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Ene-Abr 2026 · Fill rate: 92.4% (739 de 800 combinaciones) — distribucion sobresaliente</p>

      <div className="flex gap-5 flex-1">
        {/* SKU penetration table */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4 overflow-hidden">
          <p className="text-gray-500 text-xs mb-2">20 SKUs Abarrotes — penetracion por tienda</p>
          <div className="overflow-auto max-h-[350px]">
            <table className="w-full text-[11px]">
              <thead className="sticky top-0 bg-gray-50">
                <tr className="text-gray-500 text-left">
                  <th className="py-1.5 px-2 font-semibold">Producto</th>
                  <th className="py-1.5 px-2 font-semibold text-center">Tiendas</th>
                  <th className="py-1.5 px-2 font-semibold w-28">Penetracion</th>
                  <th className="py-1.5 px-2 font-semibold text-right">Venta</th>
                </tr>
              </thead>
              <tbody>
                {skuPenetracion.map((s, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-1 px-2 text-gray-700">{s.nombre}</td>
                    <td className="py-1 px-2 text-center text-gray-600">{s.tiendas}/40</td>
                    <td className="py-1 px-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${s.pct}%`,
                              backgroundColor: s.pct === 100 ? "#27AE60" : s.pct >= 90 ? "#F7B500" : "#2E75B6",
                            }}
                          />
                        </div>
                        <span className="text-gray-500 text-[10px] w-8">{s.pct}%</span>
                      </div>
                    </td>
                    <td className="py-1 px-2 text-right text-gray-800 font-semibold">
                      {s.venta >= 1_000_000 ? `$${(s.venta / 1_000_000).toFixed(1)}M` : `$${(s.venta / 1000).toFixed(0)}K`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Opportunity cards */}
        <div className="w-[320px] flex flex-col gap-3">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex-1">
            <p className="text-gray-500 text-xs mb-3">Oportunidad de ampliar distribucion</p>
            <div className="space-y-3">
              {oportunidades.map((o, i) => (
                <div key={i} className="bg-[#2E75B6]/5 border border-[#2E75B6]/15 rounded-lg p-3 animate-count-up" style={{ animationDelay: `${i * 150}ms` }}>
                  <p className="text-gray-800 text-sm font-semibold">{o.nombre}</p>
                  <div className="flex justify-between mt-1 text-[10px]">
                    <span className="text-gray-500">Presente en {o.tiendas}/40</span>
                    <span className="text-[#2E75B6] font-semibold">{o.oportunidad} tiendas por cubrir</span>
                  </div>
                  <div className="flex justify-between mt-1 text-[10px]">
                    <span className="text-gray-500">Potencial estimado</span>
                    <span className="text-[#27AE60] font-bold">{o.potencial}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">Fill Rate</p>
              <p className="text-[#27AE60] text-2xl font-bold">92.4%</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">SKUs al 100%</p>
              <p className="text-[#27AE60] text-2xl font-bold">4</p>
            </div>
          </div>

          <div className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-lg px-3 py-2">
            <p className="text-[#27AE60] text-[10px] font-semibold">
              &#9989; 92.4% fill rate — distribucion sobresaliente. La mayoria de SKUs en 95%+ de tiendas.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
