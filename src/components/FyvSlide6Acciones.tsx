"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertCircle, Clock } from "lucide-react";

const urgentes = [
  "4 tiendas agotadas de Tostada Amarilla 200g — $488/día en venta perdida total",
  "MERCO Colinas: agotada Roja 200g Y Amarilla 200g — surtir ambas de inmediato",
  "2 tiendas agotadas de Tostada Roja 200g (Buenavista y Colinas)",
  "Manantiales y Los Pilares: agotadas de Amarilla 200g — programar envío urgente",
];

const semana = [
  "Generar OC por 3,056 uds ($35K) para cubrir 45 días en tiendas agotadas y próximas",
  "Redistribuir Roja 200g desde MERCO Otilio (750 días inv) y Apodaca (411 días)",
  "Redistribuir Amarilla 200g desde MERCO Ramos Arizpe y Sendero Sta Catarina (exceso)",
  "Monitorear 6 tiendas próximas de Amarilla 200g que pueden caer a AGOTADO",
];

export default function FyvSlide6Acciones() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Acciones — Frutas y Verduras</h2>

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
