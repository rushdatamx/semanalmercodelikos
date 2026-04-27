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
    tiendas: "24 tiendas bajo 25 DDI (Buenavista, San Antonio, Los Pilares +21)",
    sugerido: "65 pallets (15,600 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Roja 200g",
    tiendas: "1 agotada + 17 bajo umbral (Nuevo Repueblo, La Sierrita +16)",
    sugerido: "102 cajas (2,448 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Amarilla 200g",
    tiendas: "3 agotadas + 16 bajo umbral (San Roque, Libramiento +17)",
    sugerido: "98 cajas (2,352 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Natural 45g",
    tiendas: "5 agotadas + 6 bajo umbral (Parras, Urdiñola, Saltillo Madero +8)",
    sugerido: "5 restocks + 2 cajas (2,190 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Fuego 45g",
    tiendas: "5 agotadas + 4 bajo umbral (Piedras Negras, Parras +7)",
    sugerido: "5 restocks + 2 cajas (2,190 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Jalapeño 45g",
    tiendas: "3 agotadas + 4 bajo umbral (Urdiñola, Otilio +5)",
    sugerido: "5 restocks + 1 caja (2,145 uds)",
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
      <p className="text-gray-500 text-xs mb-2">Acciones sugeridas · 3 SKUs Tostada + 3 SKUs Papa 45g · Semana del 27 Abr 2026</p>

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
          <p className="text-[10px] font-bold text-gray-700 mb-1">Cruce OC Tostadas (24-Abr)</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Roja 70PZ: <span className="font-semibold text-gray-800">65 pallets</span> (15,600 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 37 pallets</span></div>
            <div className="flex justify-between"><span>Roja 200g: <span className="font-semibold text-gray-800">102 cajas</span> (2,448 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 69 cajas</span></div>
            <div className="flex justify-between"><span>Amarilla 200g: <span className="font-semibold text-gray-800">98 cajas</span> (2,352 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 45 cajas</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total: 20,400 uds · OC cubre 28 pallets 70PZ · Solicitamos 28 adicionales (cobertura 25 DDI)</p>
        </div>

        {/* OC Papas 45g */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2">
          <p className="text-[10px] font-bold text-gray-700 mb-1">Cruce OC Papa 45g (24-Abr)</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Natural 45g: <span className="font-semibold text-gray-800">5 restocks + 2 caj</span> (2,190 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 10 cajas</span></div>
            <div className="flex justify-between"><span>Fuego 45g: <span className="font-semibold text-gray-800">5 restocks + 2 caj</span> (2,190 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 24 cajas</span></div>
            <div className="flex justify-between"><span>Jalapeño 45g: <span className="font-semibold text-gray-800">5 restocks + 1 caj</span> (2,145 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 24 cajas</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total: 6,885 uds · OC no cubre — se necesitan 58 cajas adicionales</p>
        </div>
      </div>

      <p className="text-[9px] text-gray-400 mt-1 text-center">Nota: La OC del 24-Abr se esta distribuyendo a tiendas. Roja 70PZ: solicitamos 28 tarimas adicionales para cobertura de 25 dias. Total sugerido: 27,285 uds.</p>
    </SlideWrapper>
  );
}
