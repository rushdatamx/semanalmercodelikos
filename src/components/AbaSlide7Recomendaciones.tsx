"use client";

import SlideWrapper from "./SlideWrapper";
import { ClipboardList } from "lucide-react";

interface Recomendacion {
  accion: string;
  producto: string;
  tiendas: string;
  sugerido: string;
}

const recomendaciones: Recomendacion[] = [
  {
    accion: "Reabastecer",
    producto: "Tostada Roja 70PZ",
    tiendas: "8 tiendas bajo umbral (Garcia, Los Pilares, San Roque, Aramberri +4)",
    sugerido: "8 pallets (1,920 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Tostada Roja 200g",
    tiendas: "10 tiendas bajo umbral (Saltillo Centro, Garcia, Montemorelos +7)",
    sugerido: "51 cajas (1,224 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Tostada Amarilla 200g",
    tiendas: "18 tiendas bajo umbral (Rosita, Castaños, Aramberri +15)",
    sugerido: "88 cajas (2,112 uds)",
  },
];

const accionColor: Record<string, string> = {
  "Surtir urgente": "bg-red-100 text-red-700",
  Reabastecer: "bg-yellow-100 text-yellow-700",
};

export default function AbaSlide7Recomendaciones() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <div className="flex items-center gap-3 mb-1">
        <ClipboardList className="w-6 h-6 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Recomendaciones — Tostadas</h2>
      </div>
      <p className="text-gray-500 text-xs mb-3">Acciones sugeridas · 3 SKUs de tostada · Semana del 10 Mar 2026</p>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase sticky top-0">
              <th className="text-left py-2 px-3 w-28">Acción</th>
              <th className="text-left py-2 px-3 w-44">Producto</th>
              <th className="text-left py-2 px-3">Tiendas</th>
              <th className="text-left py-2 px-3 w-44">Sugerido</th>
            </tr>
          </thead>
          <tbody>
            {recomendaciones.map((r, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-2 px-3">
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold whitespace-nowrap ${accionColor[r.accion] || "bg-gray-100 text-gray-600"}`}>
                    {r.accion}
                  </span>
                </td>
                <td className="py-2 px-3 text-gray-800 font-medium">{r.producto}</td>
                <td className="py-2 px-3 text-gray-600">{r.tiendas}</td>
                <td className="py-2 px-3 text-gray-700 font-semibold">{r.sugerido}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3">
        <p className="text-xs font-bold text-gray-700 mb-1">Resumen OC sugerida vs OC recibida (4-Mar)</p>
        <div className="space-y-0.5 text-[11px] text-gray-600">
          <div className="flex justify-between"><span>Roja 70PZ: <span className="font-semibold text-gray-800">8 pallets</span> (1,920 uds)</span><span className="text-green-600 font-bold">OC CUBRE (+250%)</span></div>
          <div className="flex justify-between"><span>Roja 200g: <span className="font-semibold text-gray-800">51 cajas</span> (1,224 uds)</span><span className="text-orange-600 font-bold">SUGERIDO ADICIONAL: 35 cajas</span></div>
          <div className="flex justify-between"><span>Amarilla 200g: <span className="font-semibold text-gray-800">88 cajas</span> (2,112 uds)</span><span className="text-orange-600 font-bold">SUGERIDO ADICIONAL: 70 cajas</span></div>
        </div>
        <p className="text-[10px] text-gray-500 mt-1">Total sugerido: 5,256 uds · OC del 4-Mar-2026</p>
      </div>
    </SlideWrapper>
  );
}
