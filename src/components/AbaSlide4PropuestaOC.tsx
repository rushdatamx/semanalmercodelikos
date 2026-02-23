"use client";

import SlideWrapper from "./SlideWrapper";
import { ShoppingCart } from "lucide-react";

const propuestas = [
  { tienda: "MERCO Buenavista", clasif: "PRÓXIMO", uds: 1547, costo: 49190 },
  { tienda: "MERCO Montemorelos", clasif: "PRÓXIMO", uds: 1232, costo: 39171 },
  { tienda: "MERCO Los Pilares", clasif: "PRÓXIMO", uds: 1944, costo: 61812 },
  { tienda: "MERCO Aramberri", clasif: "PRÓXIMO", uds: 1699, costo: 54024 },
  { tienda: "MERCO Otilio", clasif: "PRÓXIMO", uds: 834, costo: 26521 },
];

const TOTAL_LINEAS = 5;
const TOTAL_UDS = 7256;
const TOTAL_COSTO = 230718;

export default function AbaSlide4PropuestaOC() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <ShoppingCart className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-3xl font-bold text-gray-800">Propuesta OC — Abarrotes</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Tostada Roja 70PZ · {TOTAL_LINEAS} tiendas próximas a agotarse</p>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-xs uppercase sticky top-0">
              <th className="text-left py-2 px-4">Tienda</th>
              <th className="text-center py-2 px-4">Estado</th>
              <th className="text-right py-2 px-4">Uds Sugeridas</th>
              <th className="text-right py-2 px-4">Costo Estimado</th>
            </tr>
          </thead>
          <tbody>
            {propuestas.map((r, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-1.5 px-4 text-gray-800">{r.tienda}</td>
                <td className="py-1.5 px-4 text-center">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500 text-white">
                    {r.clasif}
                  </span>
                </td>
                <td className="py-1.5 px-4 text-right text-gray-800 font-medium">{r.uds.toLocaleString()}</td>
                <td className="py-1.5 px-4 text-right text-gray-800 font-medium">${r.costo.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end gap-8">
        <div className="text-right">
          <p className="text-gray-500 text-xs">Total unidades ({TOTAL_LINEAS} líneas)</p>
          <p className="text-2xl font-bold text-gray-800">{TOTAL_UDS.toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500 text-xs">Inversión estimada</p>
          <p className="text-2xl font-bold text-[#F5A623]">${TOTAL_COSTO.toLocaleString()}</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
