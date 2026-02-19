"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide1Portada from "@/components/Slide1Portada";
import Slide2Semaforo from "@/components/Slide2Semaforo";
import Slide3Alertas from "@/components/Slide3Alertas";
import Slide4PropuestaOC from "@/components/Slide4PropuestaOC";
import Slide5Tendencia from "@/components/Slide5Tendencia";
import Slide6Acciones from "@/components/Slide6Acciones";

const slides = [
  Slide1Portada,
  Slide2Semaforo,
  Slide3Alertas,
  Slide4PropuestaOC,
  Slide5Tendencia,
  Slide6Acciones,
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const Slide = slides[current];

  return (
    <div className="min-h-screen bg-[#E8E8E8] flex flex-col items-center justify-center py-8">
      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-300">
          <Slide />
        </div>

        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={() => setCurrent((p) => Math.max(0, p - 1))}
            disabled={current === 0}
            className="p-2 rounded-full bg-white text-gray-600 disabled:opacity-30 hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-[#F5A623]" : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((p) => Math.min(slides.length - 1, p + 1))}
            disabled={current === slides.length - 1}
            className="p-2 rounded-full bg-white text-gray-600 disabled:opacity-30 hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center text-gray-500 text-xs mt-3">
          Slide {current + 1} / {slides.length} · Usa las flechas para navegar
        </p>
      </div>
    </div>
  );
}
