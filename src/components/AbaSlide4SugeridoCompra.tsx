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
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Buenavista", ddi: 0.2, invActual: 7, vtaDiaria: 51.8, udsSugeridas: 765 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Los Pilares", ddi: 7.6, invActual: 280, vtaDiaria: 47.6, udsSugeridas: 352 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Garcia", ddi: 8.7, invActual: 334, vtaDiaria: 46.1, udsSugeridas: 290 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Montemorelos", ddi: 5.5, invActual: 131, vtaDiaria: 30.1, udsSugeridas: 285 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Solidaridad", ddi: 9.0, invActual: 277, vtaDiaria: 44.4, udsSugeridas: 268 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Girasoles", ddi: 10.0, invActual: 356, vtaDiaria: 45.0, udsSugeridas: 225 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Aramberri", ddi: 7.7, invActual: 241, vtaDiaria: 30.0, udsSugeridas: 220 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO El Jaral", ddi: 10.9, invActual: 349, vtaDiaria: 36.4, udsSugeridas: 150 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Ramos Arizpe", ddi: 9.9, invActual: 273, vtaDiaria: 28.6, udsSugeridas: 147 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Otilio", ddi: 7.5, invActual: 115, vtaDiaria: 18.3, udsSugeridas: 137 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Colinas", ddi: 12.8, invActual: 397, vtaDiaria: 34.3, udsSugeridas: 74 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Madero", ddi: 12.4, invActual: 243, vtaDiaria: 26.2, udsSugeridas: 68 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Urdiñola", ddi: 0.4, invActual: 2, vtaDiaria: 3.6, udsSugeridas: 52 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Snd. Sta. Catarina", ddi: 13.6, invActual: 325, vtaDiaria: 38.2, udsSugeridas: 55 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO La Sierrita", ddi: 0.0, invActual: 0, vtaDiaria: 3.2, udsSugeridas: 48 },
];

const TOTAL_LINEAS = 38;
const TOTAL_UDS = 3761;

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
