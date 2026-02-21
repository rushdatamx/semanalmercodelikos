"use client";

import SlideWrapper from "./SlideWrapper";
import { ShoppingCart } from "lucide-react";

const propuestas = [
  { tienda: "MERCO Buenavista", producto: "Tostada Amarilla 200g", clasif: "AGOTADO", uds: 262, costo: 3010 },
  { tienda: "MERCO Apodaca Centro", producto: "Tostada Roja 200g", clasif: "AGOTADO", uds: 254, costo: 2921 },
  { tienda: "MERCO Ramos Arizpe", producto: "Tostada Amarilla 200g", clasif: "PRÓXIMO", uds: 267, costo: 3067 },
  { tienda: "MERCO García", producto: "Tostada Roja 200g", clasif: "AGOTADO", uds: 249, costo: 2864 },
  { tienda: "MERCO Buenavista", producto: "Tostada Roja 200g", clasif: "AGOTADO", uds: 84, costo: 966 },
  { tienda: "MERCO Apodaca Centro", producto: "Tostada Amarilla 200g", clasif: "AGOTADO", uds: 66, costo: 758 },
  { tienda: "MERCO Pueblo Nuevo", producto: "Tostada Amarilla 200g", clasif: "AGOTADO", uds: 60, costo: 689 },
  { tienda: "MERCO Colinas", producto: "Tostada Roja 200g", clasif: "AGOTADO", uds: 15, costo: 172 },
  { tienda: "MERCO Colinas", producto: "Tostada Amarilla 200g", clasif: "AGOTADO", uds: 8, costo: 92 },
  { tienda: "MERCO Ramos Arizpe", producto: "Tostada Roja 200g", clasif: "PRÓXIMO", uds: 200, costo: 2300 },
  { tienda: "Saltillo Madero", producto: "Tostada Roja 200g", clasif: "PRÓXIMO", uds: 180, costo: 2070 },
  { tienda: "MERCO Los Pilares", producto: "Tostada Amarilla 200g", clasif: "PRÓXIMO", uds: 175, costo: 2011 },
  { tienda: "Manantiales", producto: "Tostada Roja 200g", clasif: "PRÓXIMO", uds: 165, costo: 1898 },
  { tienda: "Manantiales", producto: "Tostada Amarilla 200g", clasif: "PRÓXIMO", uds: 150, costo: 1724 },
];

const TOTAL_LINEAS = 23;
const TOTAL_UDS = 3957;
const TOTAL_COSTO = 54060;

export default function FyvSlide4PropuestaOC() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <ShoppingCart className="w-7 h-7 text-[#27AE60]" />
        <h2 className="text-3xl font-bold text-gray-800">Propuesta OC — Frutas y Verduras</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">{TOTAL_LINEAS} combinaciones tienda-SKU · Top 14 por urgencia</p>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-xs uppercase sticky top-0">
              <th className="text-left py-2 px-4">Tienda</th>
              <th className="text-left py-2 px-4">Producto</th>
              <th className="text-center py-2 px-4">Estado</th>
              <th className="text-right py-2 px-4">Uds Sugeridas</th>
              <th className="text-right py-2 px-4">Costo Estimado</th>
            </tr>
          </thead>
          <tbody>
            {propuestas.map((r, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-1.5 px-4 text-gray-800">{r.tienda}</td>
                <td className="py-1.5 px-4 text-gray-600">{r.producto}</td>
                <td className="py-1.5 px-4 text-center">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${r.clasif === "AGOTADO" ? "bg-[#E31837] text-white" : "bg-orange-500 text-white"}`}>
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
          <p className="text-2xl font-bold text-[#27AE60]">${TOTAL_COSTO.toLocaleString()}</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
