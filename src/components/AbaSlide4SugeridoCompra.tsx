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
  { producto: "Tostada Roja 200g", tienda: "MERCO Colinas", ddi: 0, invActual: 0, vtaDiaria: 105.7, udsSugeridas: 1587 },
  { producto: "Tostada Roja 200g", tienda: "MERCO Buenavista", ddi: 0, invActual: 0, vtaDiaria: 105.7, udsSugeridas: 1587 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO La Sierrita", ddi: 0, invActual: 0, vtaDiaria: 106.1, udsSugeridas: 1591 },
  { producto: "Tostada Amarilla 200g", tienda: "Manantiales", ddi: 0, invActual: 0, vtaDiaria: 106.1, udsSugeridas: 1591 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Colinas", ddi: 0, invActual: 0, vtaDiaria: 106.1, udsSugeridas: 1591 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Los Pilares", ddi: 0, invActual: 0, vtaDiaria: 106.1, udsSugeridas: 1591 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Solidaridad", ddi: 7.5, invActual: 226, vtaDiaria: 995.2, udsSugeridas: 7465 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Garcia", ddi: 7.7, invActual: 230, vtaDiaria: 995.2, udsSugeridas: 7262 },
  { producto: "Tostada Roja 70PZ", tienda: "MERCO Girasoles", ddi: 7.9, invActual: 255, vtaDiaria: 995.2, udsSugeridas: 7066 },
  { producto: "Durito Teja 20pzs", tienda: "MERCO Ramos Arizpe", ddi: 2.4, invActual: 4, vtaDiaria: 58.0, udsSugeridas: 731 },
  { producto: "Durito Teja 20pzs", tienda: "MERCO Mixcoac", ddi: 3.8, invActual: 6, vtaDiaria: 58.0, udsSugeridas: 649 },
  { producto: "Durito Teja 20pzs", tienda: "MERCO Cadereyta", ddi: 6.1, invActual: 10, vtaDiaria: 58.0, udsSugeridas: 517 },
  { producto: "Papa Sal 340g", tienda: "MERCO Montemorelos", ddi: 3.1, invActual: 1, vtaDiaria: 11.7, udsSugeridas: 140 },
  { producto: "Papa Fuego 340g", tienda: "MERCO Paraje", ddi: 4.6, invActual: 2, vtaDiaria: 15.1, udsSugeridas: 157 },
  { producto: "Rueda Natural 400g", tienda: "MERCO Saltillo Centro", ddi: 5.2, invActual: 1, vtaDiaria: 6.0, udsSugeridas: 59 },
];

const TOTAL_LINEAS = 169;
const TOTAL_UDS = 213522;

export default function AbaSlide4SugeridoCompra() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <div className="flex items-center gap-3 mb-1">
        <ShoppingCart className="w-6 h-6 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Sugerido de Compra — Abarrotes</h2>
      </div>
      <p className="text-gray-500 text-xs mb-3">Productos con DDI &lt; 15 días · Cobertura objetivo: 15 días · Top 15 de {TOTAL_LINEAS} líneas</p>

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
        <p className="text-[10px] text-gray-400">Mostrando top 15 de {TOTAL_LINEAS} combinaciones producto-tienda</p>
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
