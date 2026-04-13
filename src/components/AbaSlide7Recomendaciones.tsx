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
    tiendas: "5 tiendas bajo umbral (Garcia, Solidaridad +3)",
    sugerido: "5 pallets (1,200 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Roja 200g",
    tiendas: "2 agotadas + 13 bajo umbral (Piedras Negras, La Sierrita +13)",
    sugerido: "95 cajas (2,280 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Tostada Amarilla 200g",
    tiendas: "1 agotada + 13 bajo umbral (Castaños, Republica +12)",
    sugerido: "74 cajas (1,776 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Natural 45g",
    tiendas: "3 agotadas + 8 bajo umbral (Ramos Arizpe, Israel Cavazos +9)",
    sugerido: "8 PDQs + 4 cajas (3,540 uds)",
  },
  {
    accion: "Surtir urgente",
    producto: "Papa Fuego 45g",
    tiendas: "1 agotada + 10 bajo umbral (Israel Cavazos, Paraje San Jose +9)",
    sugerido: "8 PDQs + 4 cajas (3,540 uds)",
  },
  {
    accion: "Reabastecer",
    producto: "Papa Jalapeño 45g",
    tiendas: "1 agotada + 4 bajo umbral (Saltillo Centro, Israel Cavazos +3)",
    sugerido: "6 PDQs + 1 cajas (2,565 uds)",
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
      <p className="text-gray-500 text-xs mb-2">Acciones sugeridas · 3 SKUs Tostada + 3 SKUs Papa 45g · Semana del 13 Abr 2026</p>

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
            <div className="flex justify-between"><span>Roja 200g: <span className="font-semibold text-gray-800">95 cajas</span> (2,280 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 54 cajas</span></div>
            <div className="flex justify-between"><span>Amarilla 200g: <span className="font-semibold text-gray-800">74 cajas</span> (1,776 uds)</span><span className="text-orange-600 font-bold">ADICIONAL: 26 cajas</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total: 5,256 uds · OC 26-Mar cubre Roja 70PZ · Adicional 200g: 80 cajas</p>
        </div>

        {/* OC Papas 45g */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2">
          <p className="text-[10px] font-bold text-gray-700 mb-1">Cruce OC Papa 45g (26-Mar)</p>
          <div className="space-y-0.5 text-[10px] text-gray-600">
            <div className="flex justify-between"><span>Natural 45g: <span className="font-semibold text-gray-800">8 PDQs + 4 cajas</span></span><span className="text-orange-600 font-bold">ADICIONAL: 17 cajas</span></div>
            <div className="flex justify-between"><span>Fuego 45g: <span className="font-semibold text-gray-800">8 PDQs + 4 cajas</span></span><span className="text-orange-600 font-bold">ADICIONAL: 28 cajas</span></div>
            <div className="flex justify-between"><span>Jalapeño 45g: <span className="font-semibold text-gray-800">6 PDQs + 1 cajas</span></span><span className="text-green-600 font-bold">OC CUBRE EXACTO</span></div>
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Total: 9,645 uds · OC cubre Jalapeño · Adicional: 45 cajas Natural + Fuego</p>
        </div>
      </div>

      <p className="text-[9px] text-gray-400 mt-1 text-center">Nota: La OC del 26-Mar se esta distribuyendo a tiendas. Algunas necesidades pueden quedar cubiertas conforme se complete la distribucion. Total sugerido: 14,901 uds.</p>
    </SlideWrapper>
  );
}
