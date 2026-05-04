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
    tiendas: "21 tiendas bajo 25 DDI (todas bajo umbral, 0 agotadas)",
    sugerido: "21 pallets (5,040 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Roja 200g",
    tiendas: "4 agotadas + 19 bajo umbral (Buenavista, La Sierrita +21)",
    sugerido: "127 cajas (3,048 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Amarilla 200g",
    tiendas: "9 agotadas + 12 bajo umbral (Rosita, Republica, Garcia +18)",
    sugerido: "104 cajas (2,496 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Natural 45g",
    tiendas: "3 agotadas + 8 bajo umbral (Otilio, Mixcoac, Saltillo Madero +8)",
    sugerido: "8 PDQs + 4 cajas (3,540 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Fuego 45g",
    tiendas: "3 agotadas + 7 bajo umbral (Piedras Negras, Otilio, Ramos Arizpe +7)",
    sugerido: "8 PDQs + 2 cajas (3,450 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Jalapeño 45g",
    tiendas: "1 agotada + 9 bajo umbral (Otilio, Montemorelos, Piedras Negras +7)",
    sugerido: "8 PDQs + 2 cajas (3,450 uds)",
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
      <p className="text-gray-500 text-xs mb-2">Acciones sugeridas · 3 SKUs Tostada + 3 SKUs Papa 45g · Semana del 04 May 2026</p>

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
          <p className="text-[10px] font-bold text-gray-700 mb-1">Cruce OC Tostadas (30-Abr)</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Roja 70PZ: <span className="font-semibold text-gray-800">21 pallets</span> (5,040 uds)</span><span className="text-red-600 font-bold">SIN OC</span></div>
            <div className="flex justify-between"><span>Roja 200g: <span className="font-semibold text-gray-800">127 cajas</span> (3,048 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 94 cajas</span></div>
            <div className="flex justify-between"><span>Amarilla 200g: <span className="font-semibold text-gray-800">104 cajas</span> (2,496 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 80 cajas</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total: 10,584 uds · OC C784397 solo cubre 200g parcialmente · Sin OC para 70PZ</p>
        </div>

        {/* OC Papas 45g */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2">
          <p className="text-[10px] font-bold text-gray-700 mb-1">Cruce OC Papa 45g (30-Abr)</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Natural 45g: <span className="font-semibold text-gray-800">8 PDQs + 4 caj</span> (3,540 uds)</span><span className="text-green-600 font-bold">OC CUBRE EXACTO</span></div>
            <div className="flex justify-between"><span>Fuego 45g: <span className="font-semibold text-gray-800">8 PDQs + 2 caj</span> (3,450 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 20 cajas</span></div>
            <div className="flex justify-between"><span>Jalapeño 45g: <span className="font-semibold text-gray-800">8 PDQs + 2 caj</span> (3,450 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 15 cajas</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total: 10,440 uds · OC C784400 cubre Natural · Adicional: 35 cajas (Fuego + Jalapeño)</p>
        </div>
      </div>

      <p className="text-[9px] text-gray-400 mt-1 text-center">Nota: La OC del 30-Abr se esta distribuyendo a tiendas. Total sugerido Abarrotes: 21,024 uds (tostadas + papas 45g).</p>
    </SlideWrapper>
  );
}
