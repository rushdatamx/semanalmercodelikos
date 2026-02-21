"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertCircle, Clock } from "lucide-react";

const urgentes = [
  "Surtir Tostada Roja 70PZ en MERCO Los Pilares — 0 uds, $2,128/día perdidos",
  "Surtir Tostada Roja 70PZ en MERCO Buenavista — 0 uds, $1,687/día perdidos",
  "Reabastecer 17 tiendas próximas a agotarse (<7 días de inventario)",
  "Solo quedan 7.8 días de inventario a nivel cadena",
];

const semana = [
  "Generar OC por 27,588 unidades ($877K) para cubrir 45 días en tiendas críticas",
  "Verificar consumo en MERCO Solidaridad (5 uds restantes, 0.2 días inv)",
  "Revisar sobreinventario en 1 tienda con >45 días para posible redistribución",
  "Programar envío urgente a las 2 tiendas agotadas",
];

export default function AbaSlide6Acciones() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Acciones — Abarrotes</h2>

      <div className="flex gap-8 flex-1">
        <div className="flex-1 rounded-2xl border border-[#E31837]/30 bg-white shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-[#E31837]" />
            <h3 className="text-lg font-bold text-[#E31837]">Urgente</h3>
          </div>
          <ul className="space-y-4">
            {urgentes.map((a, i) => (
              <li key={i} className="text-sm text-gray-600 flex gap-2">
                <span className="text-[#E31837] mt-0.5">•</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 rounded-2xl border border-[#F26522]/30 bg-white shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-[#F26522]" />
            <h3 className="text-lg font-bold text-[#F26522]">Esta Semana</h3>
          </div>
          <ul className="space-y-4">
            {semana.map((a, i) => (
              <li key={i} className="text-sm text-gray-600 flex gap-2">
                <span className="text-[#F26522] mt-0.5">•</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideWrapper>
  );
}
