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
    accion: "Surtir urgente",
    producto: "Tostada Amarilla 200g",
    tiendas: "Manantiales, Los Pilares (agotadas) + 18 bajo umbral",
    sugerido: "103 cajas (2,472 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Roja 200g",
    tiendas: "Colinas (agotada) + 6 bajo umbral",
    sugerido: "42 cajas (1,008 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Tostada Roja 70PZ",
    tiendas: "16 tiendas bajo umbral (Ramos Arizpe, El Jaral, Solidaridad, Buenavista +12 más)",
    sugerido: "16 pallets (3,840 uds)",
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
      <p className="text-gray-500 text-xs mb-3">Acciones sugeridas · 3 SKUs de tostada · Semana del 2 Mar 2026</p>

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
        <p className="text-xs font-bold text-gray-700 mb-1">Resumen de Orden de Compra sugerida</p>
        <div className="flex gap-6 text-[11px] text-gray-600">
          <span>Roja 70PZ: <span className="font-semibold text-gray-800">16 pallets</span> (3,840 uds)</span>
          <span>Roja 200g: <span className="font-semibold text-gray-800">42 cajas</span> (1,008 uds)</span>
          <span>Amarilla 200g: <span className="font-semibold text-gray-800">103 cajas</span> (2,472 uds)</span>
          <span className="font-bold text-gray-800">Total: 7,320 uds</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
