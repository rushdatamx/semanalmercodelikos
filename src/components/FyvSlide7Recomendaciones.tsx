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
    producto: "Minicuadro s/Chile 300g",
    tiendas: "San Buena, Girasoles, El Jaral (agotadas) + 8 bajo umbral",
    nota: "3 agotadas + 8 bajo umbral — 22 cj (176 uds). #1 en ventas FyV ($106K)",
  },
  {
    accion: "Surtir urgente",
    producto: "Minicuadro c/Chile 300g",
    tiendas: "Apodaca Centro (agotada) + 6 bajo umbral",
    nota: "1 agotada + 6 bajo umbral — 13 cj (130 uds). #5 en ventas ($76K)",
  },
  {
    accion: "Surtir urgente",
    producto: "Rotini s/Chile 300g",
    tiendas: "Sdo. Sta. Catarina (agotada) + 4 bajo umbral",
    nota: "1 agotada + 4 bajo umbral — 7 cj (84 uds). #3 en ventas ($81K)",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Desh. Natural 170g",
    tiendas: "Israel Cavazos (agotada) + 3 bajo umbral",
    nota: "1 agotada + 3 bajo umbral — 6 cj (60 uds). #2 en ventas ($102K)",
  },
  {
    accion: "Reabastecer",
    producto: "Cacah. Cantinero 454g",
    tiendas: "Piedras Negras, Solidaridad, Pueblo Nuevo",
    nota: "3 bajo umbral — 4 cj (72 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Cacah. Virginia 454g",
    tiendas: "Mixcoac, Nuevo Repueblo, Lindavista",
    nota: "3 tiendas sin venta con inv — 3 cj (78 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Cacah. Botanero 454g",
    tiendas: "Piedras Negras, Apodaca Centro",
    nota: "2 bajo umbral — 2 cj (36 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Cacah. Japonés 454g",
    tiendas: "Apodaca Centro, Saltillo Madero",
    nota: "1 bajo umbral — 2 cj (52 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Rotini c/Chile 300g",
    tiendas: "Girasoles",
    nota: "1 bajo umbral — 1 cj (12 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Churrito Rojo 454g",
    tiendas: "Libramiento",
    nota: "1 bajo umbral — 1 cj (10 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Conchitas 454g",
    tiendas: "Buenavista",
    nota: "1 sin venta con inv — 1 cj (10 uds)",
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
      <p className="text-gray-500 text-xs mb-2">Acciones sugeridas por producto · Inventario al 08-Abr 2026 · 62 cajas / 720 uds total</p>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase sticky top-0">
              <th className="text-left py-1.5 px-3 w-24">Acción</th>
              <th className="text-left py-1.5 px-2 w-44">Producto</th>
              <th className="text-left py-1.5 px-2">Tiendas</th>
              <th className="text-left py-1.5 px-2">Nota</th>
            </tr>
          </thead>
          <tbody>
            {recomendaciones.map((r, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-1.5 px-3">
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold whitespace-nowrap ${accionColor[r.accion] || "bg-gray-100 text-gray-600"}`}>
                    {r.accion}
                  </span>
                </td>
                <td className="py-1.5 px-2 text-gray-800 font-medium">{r.producto}</td>
                <td className="py-1.5 px-2 text-gray-600 text-[10px]">{r.tiendas}</td>
                <td className="py-1.5 px-2 text-gray-500 text-[10px]">{r.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideWrapper>
  );
}
