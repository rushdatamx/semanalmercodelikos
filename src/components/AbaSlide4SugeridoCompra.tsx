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
  { producto: "Tostada Roja 200g", tienda: "MERCO Colinas", ddi: 0, invActual: 0, vtaDiaria: 1.9, udsSugeridas: 58 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Pueblo Nuevo", ddi: 0.4, invActual: 1, vtaDiaria: 2.4, udsSugeridas: 71 },
  { producto: "Tostada Roja 200g", tienda: "MERCO Mixcoac", ddi: 0.7, invActual: 1, vtaDiaria: 1.3, udsSugeridas: 39 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Otilio", ddi: 1.9, invActual: 3, vtaDiaria: 1.6, udsSugeridas: 44 },
  { producto: "Tostada Roja 200g", tienda: "MERCO Saltillo Centro", ddi: 2.0, invActual: 4, vtaDiaria: 2.0, udsSugeridas: 57 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Ramos Arizpe", ddi: 2.5, invActual: 73, vtaDiaria: 28.8, udsSugeridas: 791 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO El Jaral", ddi: 2.6, invActual: 96, vtaDiaria: 36.5, udsSugeridas: 998 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Solidaridad", ddi: 2.6, invActual: 118, vtaDiaria: 44.7, udsSugeridas: 1222 },
  { producto: "Tostada Roja 200g", tienda: "MERCO Cadereyta", ddi: 3.0, invActual: 3, vtaDiaria: 1.0, udsSugeridas: 27 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Buenavista", ddi: 3.2, invActual: 167, vtaDiaria: 51.8, udsSugeridas: 1387 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Colinas", ddi: 3.4, invActual: 8, vtaDiaria: 2.3, udsSugeridas: 62 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Nuevo Repueblo", ddi: 3.6, invActual: 14, vtaDiaria: 3.9, udsSugeridas: 104 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Saltillo Sendero", ddi: 4.8, invActual: 142, vtaDiaria: 29.6, udsSugeridas: 745 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Libramiento", ddi: 5.1, invActual: 31, vtaDiaria: 6.1, udsSugeridas: 152 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Garcia", ddi: 5.3, invActual: 246, vtaDiaria: 46.5, udsSugeridas: 1149 },
];

const TOTAL_LINEAS = 33;
const TOTAL_UDS = 6906;

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
