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
    tiendas: "2 tiendas bajo umbral (Pueblo Nuevo, Ramos Arizpe)",
    sugerido: "2 pallets (480 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Roja 200g",
    tiendas: "1 agotada + 11 bajo umbral (Libramiento, Hidalgo +10)",
    sugerido: "74 cajas (1,776 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Amarilla 200g",
    tiendas: "3 agotadas + 5 bajo umbral (Hidalgo, Libramiento +6)",
    sugerido: "53 cajas (1,272 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Natural 45g",
    tiendas: "2 agotadas + 7 bajo umbral (Libramiento, El Jaral +7)",
    sugerido: "7 PDQs + 5 cajas (3,165 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Fuego 45g",
    tiendas: "1 agotada + 8 bajo umbral (Sta Elena, Cadereyta +7)",
    sugerido: "7 PDQs + 3 cajas (3,075 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Jalapeño 45g",
    tiendas: "2 agotadas + 7 bajo umbral (Nvo Repueblo, Pueblo Nuevo +7)",
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
      <p className="text-gray-500 text-xs mb-2">Acciones sugeridas · 3 SKUs Tostada + 3 SKUs Papa 45g · Semana del 30 Mar 2026</p>

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
          <p className="text-[10px] font-bold text-gray-700 mb-1">Cruce OC Tostadas (19-Mar)</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Roja 70PZ: <span className="font-semibold text-gray-800">2 pallets</span> (480 uds)</span><span className="text-green-600 font-bold">OC CUBRE (+2700%)</span></div>
            <div className="flex justify-between"><span>Roja 200g: <span className="font-semibold text-gray-800">74 cajas</span> (1,776 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 59 cajas</span></div>
            <div className="flex justify-between"><span>Amarilla 200g: <span className="font-semibold text-gray-800">53 cajas</span> (1,272 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 28 cajas</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total: 3,528 uds · OC 19-Mar cubre Roja 70PZ · Adicional 200g: 87 cajas</p>
        </div>

        {/* OC Papas 45g */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2">
          <p className="text-[10px] font-bold text-gray-700 mb-1">Cruce OC Papa 45g (19-Mar)</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Natural 45g: <span className="font-semibold text-gray-800">7 PDQs + 5 cajas</span></span><span className="text-orange-600 font-bold">ADICIONAL: 53 cajas</span></div>
            <div className="flex justify-between"><span>Fuego 45g: <span className="font-semibold text-gray-800">7 PDQs + 3 cajas</span></span><span className="text-orange-600 font-bold">ADICIONAL: 60 cajas</span></div>
            <div className="flex justify-between"><span>Jalapeño 45g: <span className="font-semibold text-gray-800">7 PDQs + 1 cajas</span></span><span className="text-orange-600 font-bold">ADICIONAL: 59 cajas</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total: 9,225 uds · OC insuficiente — sugerido adicional: 172 cajas</p>
        </div>
      </div>

      <p className="text-[9px] text-gray-400 mt-1 text-center">Nota: La OC del 19-Mar se esta distribuyendo a tiendas. Algunas necesidades pueden quedar cubiertas conforme se complete la distribucion.</p>
    </SlideWrapper>
  );
}
