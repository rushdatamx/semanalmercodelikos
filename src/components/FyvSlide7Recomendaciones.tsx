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
    accion: "Surtir urgente",
    producto: "Rotini s/Chile 300g",
    tiendas: "Pueblo Nuevo, Snd. Sta. Catarina, Apodaca Centro",
    nota: "3 tiendas agotadas + 10 bajo umbral — #4 en ventas FyV ($32K)",
  },
  {
    accion: "Surtir urgente",
    producto: "Minicuadro s/Chile 300g",
    tiendas: "San Buena, Apodaca Centro",
    nota: "2 agotadas + 11 bajo umbral — #1 en ventas FyV ($44K)",
  },
  {
    accion: "Surtir urgente",
    producto: "Cacahuate Botanero 454g",
    tiendas: "La Sierrita, Apodaca Centro",
    nota: "2 agotadas + 4 bajo umbral — #3 en ventas FyV ($35K)",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Deshid. Natural 170g",
    tiendas: "Israel Cavazos, Apodaca Centro",
    nota: "2 agotadas + 6 bajo umbral — #2 en ventas FyV ($41K)",
  },
  {
    accion: "Surtir urgente",
    producto: "Churrito Rojo 454g",
    tiendas: "Garcia",
    nota: "1 agotada + 7 bajo umbral",
  },
  {
    accion: "Reabastecer",
    producto: "Minicuadro c/Chile 300g",
    tiendas: "Apodaca Centro (agotado) + 9 bajo umbral",
    nota: "1 agotada + 9 bajo umbral — DDI mín 2.3",
  },
  {
    accion: "Reabastecer",
    producto: "Rotini c/Chile 300g",
    tiendas: "Republica, Snd. Sta. Catarina, Pueblo Nuevo (+7 más)",
    nota: "10 tiendas bajo umbral — DDI mín 1.6",
  },
  {
    accion: "Monitorear",
    producto: "Conchitas 454g",
    tiendas: "Lindavista, Solidaridad, Pueblo Nuevo, Libramiento",
    nota: "4 tiendas bajo umbral — DDI mín 6.1",
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
      <p className="text-gray-500 text-xs mb-3">Acciones sugeridas por producto · Semana del 2 Mar 2026</p>

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
