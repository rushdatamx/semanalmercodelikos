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
    tiendas: "34 tiendas bajo 30 DDI (28 GRANDE + 6 CHICA)",
    sugerido: "34 tarimas (8,160 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Roja 200g",
    tiendas: "4 agotadas + 25 bajo umbral (Otilio, Nuevo Repueblo, Rosita +26)",
    sugerido: "156 cajas (3,744 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Amarilla 200g",
    tiendas: "5 agotadas + 23 bajo umbral (Pueblo Nuevo, Solidaridad, Urdiñola +25)",
    sugerido: "148 cajas (3,552 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Durito Teja 20PZ",
    tiendas: "8 agotadas + 4 bajo umbral (Hidalgo, Garcia, Los Pilares +9)",
    sugerido: "12 tarimas (1,800 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Natural 45g",
    tiendas: "1 bajo umbral (Castaños)",
    sugerido: "1 caja CHICA (45 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Fuego 45g",
    tiendas: "1 bajo umbral (Castaños)",
    sugerido: "3 cajas CHICA (135 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Jalapeño 45g",
    tiendas: "1 bajo umbral (Castaños)",
    sugerido: "2 cajas CHICA (90 uds)",
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
      <p className="text-gray-500 text-xs mb-2">Acciones sugeridas · 3 SKUs Tostada + Durito Teja + 3 SKUs Papa 45g · Semana del 09 Jun 2026</p>

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
          <p className="text-[10px] font-bold text-gray-700 mb-1">Sugerido Tostadas + Durito · Umbral 30 DDI</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Roja 70PZ: <span className="font-semibold text-gray-800">34 tarimas</span></span><span className="text-gray-800 font-bold">8,160 uds</span></div>
            <div className="flex justify-between"><span>Roja 200g: <span className="font-semibold text-gray-800">156 cajas</span></span><span className="text-gray-800 font-bold">3,744 uds</span></div>
            <div className="flex justify-between"><span>Amarilla 200g: <span className="font-semibold text-gray-800">148 cajas</span></span><span className="text-gray-800 font-bold">3,552 uds</span></div>
            <div className="flex justify-between"><span>Durito Teja 20PZ: <span className="font-semibold text-gray-800">12 tarimas</span></span><span className="text-gray-800 font-bold">1,800 uds</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total tostadas + durito: 17,256 uds (103 lineas tienda-producto)</p>
        </div>

        {/* Resumen Papa 45g */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2">
          <p className="text-[10px] font-bold text-gray-700 mb-1">Sugerido Papa 45g · Umbral 20 DDI</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Natural 45g: <span className="font-semibold text-gray-800">1 caja CHICA</span></span><span className="text-gray-800 font-bold">45 uds</span></div>
            <div className="flex justify-between"><span>Fuego 45g: <span className="font-semibold text-gray-800">3 cajas CHICA</span></span><span className="text-gray-800 font-bold">135 uds</span></div>
            <div className="flex justify-between"><span>Jalapeño 45g: <span className="font-semibold text-gray-800">2 cajas CHICA</span></span><span className="text-gray-800 font-bold">90 uds</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total papa 45g: 270 uds (3 lineas · solo 1 tienda CHICA califica)</p>
        </div>
      </div>

      <p className="text-[9px] text-gray-400 mt-1 text-center">Inventario al 09-Jun-2026 · Total sugerido: 17,526 uds (17,256 tostadas + durito + 270 papas)</p>
    </SlideWrapper>
  );
}
