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
    tiendas: "27 tiendas bajo 25 DDI (21 GRANDE + 6 CHICA)",
    sugerido: "27 tarimas (6,480 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Roja 200g",
    tiendas: "5 agotadas + 8 bajo umbral (Republica, San Buena, La Sierrita +10)",
    sugerido: "74 cajas (1,776 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Amarilla 200g",
    tiendas: "4 agotadas + 13 bajo umbral (Apodaca Centro, Paraje San Jose, Solidaridad +14)",
    sugerido: "92 cajas (2,208 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Durito Teja 20PZ",
    tiendas: "21 agotadas + 5 bajo umbral",
    sugerido: "26 tarimas (3,900 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Natural 45g",
    tiendas: "2 agotadas + 1 bajo umbral (Aramberri, Manantiales, Castaños)",
    sugerido: "7 cajas CHICA (315 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Fuego 45g",
    tiendas: "2 agotadas (Aramberri, Manantiales)",
    sugerido: "4 cajas CHICA (180 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Jalapeño 45g",
    tiendas: "1 bajo umbral (Castaños)",
    sugerido: "3 cajas CHICA (135 uds)",
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
        <h2 className="text-2xl font-bold text-gray-800">Recomendaciones — Abarrotes</h2>
      </div>
      <p className="text-gray-500 text-xs mb-2">Acciones sugeridas · 3 SKUs Tostada + Durito Teja + 3 SKUs Papa 45g · Semana del 01 Jun 2026</p>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase sticky top-0">
              <th className="text-left py-1.5 px-3 w-28">Accion</th>
              <th className="text-left py-1.5 px-3 w-40">Producto</th>
              <th className="text-left py-1.5 px-3">Tiendas</th>
              <th className="text-left py-1.5 px-3 w-44">Sugerido</th>
            </tr>
          </thead>
          <tbody>
            {recomendaciones.map((r, i) => (
              <tr key={i} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${i === 3 ? "border-t-2 border-t-gray-200" : ""}`}>
                <td className="py-1.5 px-3">
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold whitespace-nowrap ${accionColor[r.accion] || "bg-gray-100 text-gray-600"}`}>
                    {r.accion}
                  </span>
                </td>
                <td className="py-1.5 px-3 text-gray-800 font-medium">{r.producto}</td>
                <td className="py-1.5 px-3 text-gray-600">{r.tiendas}</td>
                <td className="py-1.5 px-3 text-gray-700 font-semibold">{r.sugerido}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-3">
        {/* Resumen Tostadas + Durito */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2">
          <p className="text-[10px] font-bold text-gray-700 mb-1">Sugerido Tostadas + Durito · Umbral 25 DDI</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Roja 70PZ: <span className="font-semibold text-gray-800">27 tarimas</span></span><span className="text-gray-800 font-bold">6,480 uds</span></div>
            <div className="flex justify-between"><span>Roja 200g: <span className="font-semibold text-gray-800">74 cajas</span></span><span className="text-gray-800 font-bold">1,776 uds</span></div>
            <div className="flex justify-between"><span>Amarilla 200g: <span className="font-semibold text-gray-800">92 cajas</span></span><span className="text-gray-800 font-bold">2,208 uds</span></div>
            <div className="flex justify-between"><span>Durito Teja 20PZ: <span className="font-semibold text-gray-800">26 tarimas</span></span><span className="text-gray-800 font-bold">3,900 uds</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total tostadas + durito: 14,364 uds (83 lineas tienda-producto)</p>
        </div>

        {/* Resumen Papa 45g */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2">
          <p className="text-[10px] font-bold text-gray-700 mb-1">Sugerido Papa 45g · Umbral 15 DDI</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Natural 45g: <span className="font-semibold text-gray-800">7 cajas CHICA</span></span><span className="text-gray-800 font-bold">315 uds</span></div>
            <div className="flex justify-between"><span>Fuego 45g: <span className="font-semibold text-gray-800">4 cajas CHICA</span></span><span className="text-gray-800 font-bold">180 uds</span></div>
            <div className="flex justify-between"><span>Jalapeño 45g: <span className="font-semibold text-gray-800">3 cajas CHICA</span></span><span className="text-gray-800 font-bold">135 uds</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total papa 45g: 630 uds (6 lineas · solo 3 tiendas CHICA califican)</p>
        </div>
      </div>

      <p className="text-[9px] text-gray-400 mt-1 text-center">Inventario al 31-May-2026 · Total sugerido: 14,994 uds (14,364 tostadas + durito + 630 papas)</p>
    </SlideWrapper>
  );
}
