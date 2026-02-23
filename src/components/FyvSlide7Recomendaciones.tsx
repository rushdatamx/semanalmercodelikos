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
    producto: "Minicuadro Sin Chile 300g",
    tiendas: "San Buena, Israel Cavazos",
    nota: "2 tiendas agotadas — #1 en ventas FyV ($40K Ene-Feb)",
  },
  {
    accion: "Surtir urgente",
    producto: "Cacahuate Virginia 454g",
    tiendas: "Republica, Acuña",
    nota: "2 tiendas agotadas + 2 bajo umbral (Otilio, Mixcoac)",
  },
  {
    accion: "Surtir urgente",
    producto: "Churrito Rojo 454g",
    tiendas: "Solidaridad",
    nota: "Agotado en tienda clave — Buenavista a 7.7 DDI",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Deshid. Natural 170g",
    tiendas: "Israel Cavazos",
    nota: "Agotado — 2do producto en ventas FyV",
  },
  {
    accion: "Reabastecer",
    producto: "Conchitas 454g",
    tiendas: "Republica (agotado), El Jaral (6.8 DDI)",
    nota: "Producto con buen margen — priorizar estas 2 tiendas",
  },
  {
    accion: "Reabastecer",
    producto: "Rotini Sin Chile 300g",
    tiendas: "El Jaral, Montemorelos",
    nota: "2 tiendas bajo umbral — #4 en ventas FyV",
  },
  {
    accion: "Monitorear",
    producto: "Cacahuate Botanero 454g",
    tiendas: "Apodaca Centro (6.6 DDI)",
    nota: "#3 en ventas — 1 tienda cercana al umbral",
  },
  {
    accion: "Sin acción",
    producto: "Rotini Con Chile, Minicuadro C/Chile",
    tiendas: "—",
    nota: "DDI >250 días — inventario suficiente para varios meses",
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
      <p className="text-gray-500 text-xs mb-3">Acciones sugeridas por producto · Semana del 23 Feb 2026</p>

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
