"use client";

import SlideWrapper from "./SlideWrapper";
import { ShoppingCart } from "lucide-react";

const propuestas = [
  { tienda: "MERCO Los Pilares", producto: "Tostada Roja 70 PZ", clasif: "AGOTADO", uds: 2318, costo: 73700 },
  { tienda: "MERCO García", producto: "Tostada Roja 70 PZ", clasif: "PRÓXIMO", uds: 2103, costo: 66865 },
  { tienda: "MERCO Ramos Arizpe", producto: "Tostada Roja 70 PZ", clasif: "PRÓXIMO", uds: 1924, costo: 61173 },
  { tienda: "MERCO El Jaral", producto: "Tostada Roja 70 PZ", clasif: "PRÓXIMO", uds: 1887, costo: 59997 },
  { tienda: "MERCO Buenavista", producto: "Tostada Roja 70 PZ", clasif: "AGOTADO", uds: 1810, costo: 57549 },
  { tienda: "MERCO Girasoles", producto: "Tostada Roja 70 PZ", clasif: "PRÓXIMO", uds: 1766, costo: 56149 },
  { tienda: "MERCO Pueblo Nuevo", producto: "Tostada Roja 70 PZ", clasif: "PRÓXIMO", uds: 1604, costo: 50975 },
  { tienda: "MERCO Colinas", producto: "Tostada Roja 70 PZ", clasif: "PRÓXIMO", uds: 1568, costo: 49847 },
  { tienda: "Paraje San Jose", producto: "Tostada Roja 70 PZ", clasif: "PRÓXIMO", uds: 1540, costo: 48956 },
  { tienda: "MERCO Montemorelos", producto: "Tostada Roja 70 PZ", clasif: "PRÓXIMO", uds: 1418, costo: 45078 },
  { tienda: "MERCO Aramberri", producto: "Tostada Roja 70 PZ", clasif: "PRÓXIMO", uds: 1406, costo: 44696 },
  { tienda: "Sendero Sta Catarina", producto: "Tostada Roja 70 PZ", clasif: "PRÓXIMO", uds: 1402, costo: 44569 },
  { tienda: "MERCO Solidaridad", producto: "Tostada Roja 70 PZ", clasif: "PRÓXIMO", uds: 1382, costo: 43933 },
  { tienda: "MERCO Cadereyta", producto: "Tostada Roja 70 PZ", clasif: "PRÓXIMO", uds: 1284, costo: 40817 },
];

const TOTAL_UDS = 31545;
const TOTAL_COSTO = 931154;

export default function Slide4PropuestaOC() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <ShoppingCart className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-3xl font-bold text-gray-800">Propuesta de Órdenes de Compra</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">42 combinaciones tienda-SKU · Ordenado por urgencia</p>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-xs uppercase">
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
          <p className="text-gray-500 text-xs">Total unidades (42 líneas)</p>
          <p className="text-2xl font-bold text-gray-800">{TOTAL_UDS.toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500 text-xs">Inversión estimada total</p>
          <p className="text-2xl font-bold text-[#F5A623]">${TOTAL_COSTO.toLocaleString()}</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
