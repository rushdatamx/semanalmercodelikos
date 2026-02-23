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
    producto: "Tostada Amarilla 200g",
    tiendas: "La Sierrita, Manantiales, Colinas, Los Pilares",
    nota: "4 tiendas agotadas · 9 bajo 15 días — 3er SKU en ventas ($136K)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Roja 200g",
    tiendas: "Buenavista, Colinas, Manantiales, Paraje San José",
    nota: "2 agotadas + 5 bajo 15 días — priorizar tiendas de alto volumen",
  },
  {
    accion: "Reabastecer",
    producto: "Tostada Roja 70PZ",
    tiendas: "Buenavista, Los Pilares, García, Montemorelos (+13 más)",
    nota: "17 tiendas bajo 15 días — producto estrella 64% de la venta ($2.5M)",
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
      <p className="text-gray-500 text-xs mb-3">Acciones sugeridas · 3 SKUs de tostada · Semana del 23 Feb 2026</p>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase sticky top-0">
              <th className="text-left py-2 px-3 w-28">Acción</th>
              <th className="text-left py-2 px-3 w-48">Producto</th>
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
