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
    tiendas: "5 tiendas bajo umbral (Buenavista, Pueblo Nuevo +3)",
    sugerido: "5 pallets (1,200 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Roja 200g",
    tiendas: "3 agotadas + 18 bajo umbral (Libramiento, La Sierrita +19)",
    sugerido: "114 cajas (2,736 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Amarilla 200g",
    tiendas: "5 agotadas + 16 bajo umbral (Hidalgo, Republica +19)",
    sugerido: "113 cajas (2,712 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Natural 45g",
    tiendas: "3 agotadas + 7 bajo umbral (Libramiento, Pueblo Nuevo +8)",
    sugerido: "8 PDQs + 5 cajas (3,585 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Fuego 45g",
    tiendas: "2 agotadas + 8 bajo umbral (Saltillo Centro, Nvo Repueblo +8)",
    sugerido: "8 PDQs + 4 cajas (3,540 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Jalapeño 45g",
    tiendas: "2 agotadas + 6 bajo umbral (Pueblo Nuevo, Paseo Monclova +6)",
    sugerido: "7 PDQs + 1 cajas (2,985 uds)",
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
      <p className="text-gray-500 text-xs mb-2">Acciones sugeridas · 3 SKUs Tostada + 3 SKUs Papa 45g · Semana del 06 Abr 2026</p>

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
          <p className="text-[10px] font-bold text-gray-700 mb-1">Cruce OC Tostadas (26-Mar)</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Roja 70PZ: <span className="font-semibold text-gray-800">5 pallets</span> (1,200 uds)</span><span className="text-green-600 font-bold">OC CUBRE (+1020%)</span></div>
            <div className="flex justify-between"><span>Roja 200g: <span className="font-semibold text-gray-800">114 cajas</span> (2,736 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 73 cajas</span></div>
            <div className="flex justify-between"><span>Amarilla 200g: <span className="font-semibold text-gray-800">113 cajas</span> (2,712 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 65 cajas</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total: 6,648 uds · OC 26-Mar cubre Roja 70PZ · Adicional 200g: 138 cajas</p>
        </div>

        {/* OC Papas 45g */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2">
          <p className="text-[10px] font-bold text-gray-700 mb-1">Cruce OC Papa 45g (26-Mar)</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Natural 45g: <span className="font-semibold text-gray-800">8 PDQs + 5 cajas</span></span><span className="text-orange-600 font-bold">ADICIONAL: 18 cajas</span></div>
            <div className="flex justify-between"><span>Fuego 45g: <span className="font-semibold text-gray-800">8 PDQs + 4 cajas</span></span><span className="text-orange-600 font-bold">ADICIONAL: 28 cajas</span></div>
            <div className="flex justify-between"><span>Jalapeño 45g: <span className="font-semibold text-gray-800">7 PDQs + 1 cajas</span></span><span className="text-orange-600 font-bold">ADICIONAL: 10 cajas</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total: 10,110 uds · OC cubre ~72% — sugerido adicional: 56 cajas</p>
        </div>
      </div>

      <p className="text-[9px] text-gray-400 mt-1 text-center">Nota: La OC del 26-Mar se esta distribuyendo a tiendas. Algunas necesidades pueden quedar cubiertas conforme se complete la distribucion. Total sugerido: 16,758 uds.</p>
    </SlideWrapper>
  );
}
