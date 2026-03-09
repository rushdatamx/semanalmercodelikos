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
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Otilio", ddi: 0, invActual: 27, vtaDiaria: 7.5, udsSugeridas: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Rosita", ddi: 0.1, invActual: 1, vtaDiaria: 6.3, udsSugeridas: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Castaños", ddi: 0.2, invActual: 2, vtaDiaria: 6.8, udsSugeridas: 72 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Aramberri", ddi: 0.3, invActual: 2, vtaDiaria: 5.7, udsSugeridas: 96 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Libramiento", ddi: 1.4, invActual: 13, vtaDiaria: 9.1, udsSugeridas: 96 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO La Sierrita", ddi: 3.2, invActual: 23, vtaDiaria: 7.2, udsSugeridas: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Paraje San José", ddi: 3.7, invActual: 28, vtaDiaria: 7.6, udsSugeridas: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Frontera Centro", ddi: 4.3, invActual: 31, vtaDiaria: 7.2, udsSugeridas: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Nuevo Repueblo", ddi: 5.6, invActual: 37, vtaDiaria: 6.6, udsSugeridas: 48 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Buenavista", ddi: 6.2, invActual: 57, vtaDiaria: 9.2, udsSugeridas: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Solidaridad", ddi: 6.6, invActual: 59, vtaDiaria: 9.0, udsSugeridas: 144 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Garcia", ddi: 7.5, invActual: 349, vtaDiaria: 46.5, udsSugeridas: 240 },
  { producto: "Tostada Roja 200g", tienda: "MERCO Otilio", ddi: 7.7, invActual: 76, vtaDiaria: 9.9, udsSugeridas: 144 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Los Pilares", ddi: 8.3, invActual: 343, vtaDiaria: 41.3, udsSugeridas: 240 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO San Roque", ddi: 8.9, invActual: 320, vtaDiaria: 36.0, udsSugeridas: 240 },
];

const TOTAL_LINEAS = 38;
const TOTAL_UDS = 5520;

export default function AbaSlide4SugeridoCompra() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <div className="flex items-center gap-3 mb-1">
        <ShoppingCart className="w-6 h-6 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Sugerido de Compra — Tostadas</h2>
      </div>
      <p className="text-gray-500 text-xs mb-3">3 SKUs de tostada con DDI &lt; 15 días · Cobertura objetivo: 15 días · Venta diaria por tienda · Top 15 de {TOTAL_LINEAS} líneas</p>

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
        <p className="text-[10px] text-gray-400">Venta diaria por tienda-producto · 3 SKUs tostada · Top 15 de {TOTAL_LINEAS} combinaciones</p>
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
