"use client";

import SlideWrapper from "./SlideWrapper";
import { ClipboardList } from "lucide-react";

interface Recomendacion {
  accion: string;
  producto: string;
  tiendas: string;
  nota: string;
}

const recomendaciones: Recomendacion[] = [
  {
    accion: "Reabastecer",
    producto: "Cacahuate Virginia 454g",
    tiendas: "Piedras Negras, Saltillo Sendero, Apodaca Centro + Garcia",
    nota: "3 agotadas + 1 bajo umbral — #5 en ventas FyV ($36K)",
  },
  {
    accion: "Reabastecer",
    producto: "Minicuadro s/Chile 300g",
    tiendas: "Israel Cavazos, El Jaral + 2 bajo umbral",
    nota: "2 agotadas + 2 bajo umbral — #1 en ventas FyV ($60K)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Deshid. Natural 170g",
    tiendas: "Israel Cavazos, Paraje San José",
    nota: "2 agotadas — #2 en ventas FyV ($58K)",
  },
  {
    accion: "Reabastecer",
    producto: "Rotini s/Chile 300g",
    tiendas: "El Jaral (agotada) + 1 bajo umbral",
    nota: "1 agotada + 1 bajo umbral — #4 en ventas FyV ($46K)",
  },
  {
    accion: "Reabastecer",
    producto: "Cacahuate Botanero 454g",
    tiendas: "Apodaca Centro (agotada)",
    nota: "1 agotada — #3 en ventas FyV ($48K)",
  },
  {
    accion: "Monitorear",
    producto: "Cacahuate Cantinero 454g",
    tiendas: "Republica, Apodaca Centro",
    nota: "2 tiendas bajo umbral — DDI mín 5.2",
  },
  {
    accion: "Monitorear",
    producto: "Rotini c/Chile 300g",
    tiendas: "Solidaridad",
    nota: "1 tienda bajo umbral — DDI 6.0",
  },
];

const accionColor: Record<string, string> = {
  "Surtir urgente": "bg-red-100 text-red-700",
  Reabastecer: "bg-yellow-100 text-yellow-700",
  Monitorear: "bg-blue-100 text-blue-700",
  "Sin acción": "bg-gray-100 text-gray-500",
};

export default function FyvSlide7Recomendaciones() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <div className="flex items-center gap-3 mb-1">
        <ClipboardList className="w-6 h-6 text-[#27AE60]" />
        <h2 className="text-2xl font-bold text-gray-800">Recomendaciones — Frutas y Verduras</h2>
      </div>
      <p className="text-gray-500 text-xs mb-3">Acciones sugeridas por producto · Semana del 9 Mar 2026</p>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase sticky top-0">
              <th className="text-left py-2 px-3 w-28">Acción</th>
              <th className="text-left py-2 px-3 w-52">Producto</th>
              <th className="text-left py-2 px-3">Tiendas</th>
              <th className="text-left py-2 px-3">Nota</th>
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
                <td className="py-2 px-3 text-gray-500">{r.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideWrapper>
  );
}
