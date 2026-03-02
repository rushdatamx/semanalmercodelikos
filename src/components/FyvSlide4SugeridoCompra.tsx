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
  { producto: "Cacahuate Cantinero 454g", tienda: "MERCO Saltillo Sendero", ddi: 0, invActual: 0, vtaDiaria: 0.3, udsSugeridas: 9 },
  { producto: "Papa Deshid. Natural 170g", tienda: "MERCO Apodaca Centro", ddi: 0, invActual: 0, vtaDiaria: 0.8, udsSugeridas: 23 },
  { producto: "Papa Deshid. Natural 170g", tienda: "MERCO Israel Cavazos", ddi: 0, invActual: 0, vtaDiaria: 0.0, udsSugeridas: 1 },
  { producto: "Minicuadro s/Chile 300g", tienda: "MERCO Apodaca Centro", ddi: 0, invActual: 0, vtaDiaria: 0.6, udsSugeridas: 18 },
  { producto: "Minicuadro c/Chile 300g", tienda: "MERCO Apodaca Centro", ddi: 0, invActual: 0, vtaDiaria: 0.9, udsSugeridas: 28 },
  { producto: "Minicuadro s/Chile 300g", tienda: "MERCO San Buena", ddi: 0, invActual: 0, vtaDiaria: 0.4, udsSugeridas: 13 },
  { producto: "Cacahuate Japonés 454g", tienda: "MERCO Buenavista", ddi: 0, invActual: 0, vtaDiaria: 0.3, udsSugeridas: 10 },
  { producto: "Cacahuate Botanero 454g", tienda: "MERCO La Sierrita", ddi: 0, invActual: 0, vtaDiaria: 0.6, udsSugeridas: 17 },
  { producto: "Churrito Rojo 454g", tienda: "MERCO Garcia", ddi: 0, invActual: 0, vtaDiaria: 0.3, udsSugeridas: 10 },
  { producto: "Rotini s/Chile 300g", tienda: "MERCO Apodaca Centro", ddi: 0, invActual: 0, vtaDiaria: 0.6, udsSugeridas: 19 },
  { producto: "Cacahuate Botanero 454g", tienda: "MERCO Apodaca Centro", ddi: 0, invActual: 0, vtaDiaria: 0.8, udsSugeridas: 23 },
  { producto: "Rotini s/Chile 300g", tienda: "MERCO Snd. Sta. Catarina", ddi: 0, invActual: 0, vtaDiaria: 1.2, udsSugeridas: 36 },
  { producto: "Cacahuate Virginia 454g", tienda: "MERCO Otilio", ddi: 0, invActual: 0, vtaDiaria: 0.3, udsSugeridas: 8 },
  { producto: "Rotini s/Chile 300g", tienda: "MERCO Pueblo Nuevo", ddi: 0, invActual: 0, vtaDiaria: 0.4, udsSugeridas: 11 },
  { producto: "Rotini s/Chile 300g", tienda: "MERCO Montemorelos", ddi: 0.9, invActual: 1, vtaDiaria: 1.1, udsSugeridas: 32 },
];

const TOTAL_LINEAS = 82;
const TOTAL_UDS = 1423;

export default function FyvSlide4SugeridoCompra() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <div className="flex items-center gap-3 mb-1">
        <ShoppingCart className="w-6 h-6 text-[#27AE60]" />
        <h2 className="text-2xl font-bold text-gray-800">Sugerido de Compra — Frutas y Verduras</h2>
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
        <p className="text-[10px] text-gray-400">Venta diaria calculada por tienda-producto · Top 15 de {TOTAL_LINEAS} combinaciones con DDI &lt; 15</p>
        <div className="flex gap-6">
          <div className="text-right">
            <p className="text-gray-500 text-[10px]">Total líneas</p>
            <p className="text-xl font-bold text-gray-800">{TOTAL_LINEAS}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-[10px]">Total uds sugeridas</p>
            <p className="text-xl font-bold text-[#27AE60]">{TOTAL_UDS.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
