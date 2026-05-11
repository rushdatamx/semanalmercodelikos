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
    producto: "Tostada Roja 70PZ",
    tiendas: "1 agotada + 23 bajo 25 DDI (Girasoles agotada, 23 bajo umbral)",
    sugerido: "24 pallets (5,760 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Roja 200g",
    tiendas: "4 agotadas + 26 bajo umbral (Buenavista, La Sierrita, Hidalgo +27)",
    sugerido: "162 cajas (3,888 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Amarilla 200g",
    tiendas: "1 agotada + 20 bajo umbral (Israel Cavazos, Montemorelos +19)",
    sugerido: "112 cajas (2,688 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Natural 45g",
    tiendas: "Pendiente: ejecutar weekly-papas45",
    sugerido: "Pendiente",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Fuego 45g",
    tiendas: "Pendiente: ejecutar weekly-papas45",
    sugerido: "Pendiente",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Jalapeño 45g",
    tiendas: "Pendiente: ejecutar weekly-papas45",
    sugerido: "Pendiente",
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
      <p className="text-gray-500 text-xs mb-2">Acciones sugeridas · 3 SKUs Tostada + 3 SKUs Papa 45g · Semana del 11 May 2026</p>

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
        {/* OC Tostadas */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2">
          <p className="text-[10px] font-bold text-gray-700 mb-1">Cruce OC Tostadas (30-Abr) · Umbral 25 DDI</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Roja 70PZ: <span className="font-semibold text-gray-800">24 pallets</span> (5,760 uds)</span><span className="text-red-600 font-bold">SIN OC</span></div>
            <div className="flex justify-between"><span>Roja 200g: <span className="font-semibold text-gray-800">162 cajas</span> (3,888 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 129 cajas</span></div>
            <div className="flex justify-between"><span>Amarilla 200g: <span className="font-semibold text-gray-800">112 cajas</span> (2,688 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 88 cajas</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total: 12,336 uds · OC C784397 solo cubre 200g parcialmente · Sin OC para 70PZ</p>
        </div>

        {/* OC Papas 45g */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2">
          <p className="text-[10px] font-bold text-gray-700 mb-1">Cruce OC Papa 45g (30-Abr)</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Natural 45g: pendiente weekly-papas45</span><span className="text-gray-400 font-bold">PENDIENTE</span></div>
            <div className="flex justify-between"><span>Fuego 45g: pendiente weekly-papas45</span><span className="text-gray-400 font-bold">PENDIENTE</span></div>
            <div className="flex justify-between"><span>Jalapeño 45g: pendiente weekly-papas45</span><span className="text-gray-400 font-bold">PENDIENTE</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Ejecutar weekly-papas45 para completar datos de Papa 45g</p>
        </div>
      </div>

      <p className="text-[9px] text-gray-400 mt-1 text-center">Nota: La OC del 30-Abr se esta distribuyendo a tiendas. Total sugerido tostadas: 12,336 uds. Papas 45g pendiente.</p>
    </SlideWrapper>
  );
}
