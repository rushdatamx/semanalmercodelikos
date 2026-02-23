"use client";

import SlideWrapper from "./SlideWrapper";
import { ShoppingCart } from "lucide-react";

interface Sugerido {
  producto: string;
  tienda: string;
  ddi: number;
  invActual: number;
  vtaDiaria: number;
  udsSugeridas: number;
}

const data: Sugerido[] = [
  { producto: "Papa Natural 45g", tienda: "MERCO Rosita", ddi: 0, invActual: 0, vtaDiaria: 9.9, udsSugeridas: 148 },
  { producto: "Papa Fuego 45g", tienda: "MERCO Montemorelos", ddi: 0, invActual: 0, vtaDiaria: 7.7, udsSugeridas: 115 },
  { producto: "Papa Fuego 45g", tienda: "MERCO Piedras Negras", ddi: 0, invActual: 0, vtaDiaria: 7.6, udsSugeridas: 114 },
  { producto: "Papa Natural 45g", tienda: "MERCO Montemorelos", ddi: 0, invActual: 0, vtaDiaria: 7.2, udsSugeridas: 109 },
  { producto: "Papa Natural 45g", tienda: "MERCO Girasoles", ddi: 0, invActual: 0, vtaDiaria: 5.8, udsSugeridas: 88 },
  { producto: "Papa Natural 45g", tienda: "MERCO Nuevo Repueblo", ddi: 0, invActual: 0, vtaDiaria: 5.2, udsSugeridas: 78 },
  { producto: "Papa Jalapeño 45g", tienda: "Manantiales", ddi: 0, invActual: 0, vtaDiaria: 4.2, udsSugeridas: 64 },
  { producto: "Papa Jalapeño 45g", tienda: "MERCO Nuevo Repueblo", ddi: 0, invActual: 0, vtaDiaria: 3.8, udsSugeridas: 58 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO La Sierrita", ddi: 0, invActual: 0, vtaDiaria: 3.2, udsSugeridas: 48 },
  { producto: "Tostada Roja 200g", tienda: "MERCO Buenavista", ddi: 0, invActual: 0, vtaDiaria: 3.1, udsSugeridas: 46 },
  { producto: "Papa Jalapeño 45g", tienda: "Saltillo Madero", ddi: 0, invActual: 0, vtaDiaria: 3.0, udsSugeridas: 45 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Los Pilares", ddi: 0, invActual: 0, vtaDiaria: 2.8, udsSugeridas: 42 },
  { producto: "Papa Fuego 45g", tienda: "MERCO Hidalgo", ddi: 0, invActual: 0, vtaDiaria: 2.8, udsSugeridas: 42 },
  { producto: "Cacahuate Mixto 1kg", tienda: "MERCO Piedras Negras", ddi: 0, invActual: 0, vtaDiaria: 2.5, udsSugeridas: 38 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Colinas", ddi: 0, invActual: 0, vtaDiaria: 2.3, udsSugeridas: 35 },
];

const TOTAL_LINEAS = 158;
const TOTAL_UDS = 6273;

export default function AbaSlide4SugeridoCompra() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <div className="flex items-center gap-3 mb-1">
        <ShoppingCart className="w-6 h-6 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Sugerido de Compra — Abarrotes</h2>
      </div>
      <p className="text-gray-500 text-xs mb-3">Productos con DDI &lt; 15 días · Cobertura objetivo: 15 días · Venta diaria por tienda · Top 15 de {TOTAL_LINEAS} líneas</p>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase sticky top-0">
              <th className="text-left py-1.5 px-3">Producto</th>
              <th className="text-left py-1.5 px-2">Tienda</th>
              <th className="text-right py-1.5 px-2 w-12">DDI</th>
              <th className="text-right py-1.5 px-2 w-16">Inv Act</th>
              <th className="text-right py-1.5 px-2 w-16">Vta/Día</th>
              <th className="text-right py-1.5 px-2 w-20">Uds p/15d</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-1 px-3 text-gray-800 font-medium">{r.producto}</td>
                <td className="py-1 px-2 text-gray-600">{r.tienda}</td>
                <td className="py-1 px-2 text-right">
                  <span className={`font-bold ${r.ddi === 0 ? "text-red-600" : "text-yellow-600"}`}>
                    {r.ddi === 0 ? "AGT" : r.ddi.toFixed(1)}
                  </span>
                </td>
                <td className="py-1 px-2 text-right text-gray-700">{r.invActual.toLocaleString()}</td>
                <td className="py-1 px-2 text-right text-gray-500">{r.vtaDiaria.toFixed(1)}</td>
                <td className="py-1 px-2 text-right text-gray-800 font-bold">{r.udsSugeridas.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <p className="text-[10px] text-gray-400">Venta diaria calculada por tienda-producto · Top 15 de {TOTAL_LINEAS} combinaciones</p>
        <div className="flex gap-6">
          <div className="text-right">
            <p className="text-gray-500 text-[10px]">Total líneas</p>
            <p className="text-xl font-bold text-gray-800">{TOTAL_LINEAS}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-[10px]">Total uds sugeridas</p>
            <p className="text-xl font-bold text-[#F5A623]">{TOTAL_UDS.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
