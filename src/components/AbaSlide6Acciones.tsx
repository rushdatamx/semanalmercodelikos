"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertCircle, Clock } from "lucide-react";

const urgentes = [
  "5 tiendas próximas a agotarse (<7 días inv) de Tostada Roja 70PZ",
  "MERCO Buenavista solo tiene 7 uds (0.2 días de inv)",
  "MERCO Montemorelos con 131 uds (4.8 días de inv)",
  "19 tiendas en estado BAJO (7-14 días) — monitorear esta semana",
];

const semana = [
  "Generar OC por 7,256 uds ($231K) para cubrir 45 días en 5 tiendas próximas",
  "Revisar sobreinventario en MERCO Castaños (99 días) — posible redistribución",
  "Monitorear Solidaridad, García y Girasoles (7-8 días) que podrían bajar a PRÓXIMO",
  "Programar envío prioritario a Buenavista (0.2 días) y Montemorelos (4.8 días)",
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
