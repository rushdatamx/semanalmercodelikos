"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AbaSlide1Portada from "@/components/AbaSlide1Portada";
import AbaSlide4SugeridoCompra from "@/components/AbaSlide4SugeridoCompra";
import AbaSlide6VentasProducto from "@/components/AbaSlide6VentasProducto";
import AbaSlide7Recomendaciones from "@/components/AbaSlide7Recomendaciones";
import FyvSlide1Portada from "@/components/FyvSlide1Portada";
import FyvSlide4SugeridoCompra from "@/components/FyvSlide4SugeridoCompra";
import FyvSlide6VentasProducto from "@/components/FyvSlide6VentasProducto";
import FyvSlide7Recomendaciones from "@/components/FyvSlide7Recomendaciones";
import VentasSlideResumen from "@/components/VentasSlideResumen";
import NegSlide1KPIs from "@/components/NegSlide1KPIs";
import NegSlide2TopTiendas from "@/components/NegSlide2TopTiendas";
import NegSlide3Promociones from "@/components/NegSlide3Promociones";
import NegSlide4Papas from "@/components/NegSlide4Papas";
import NegSlide5TopTiendasUds from "@/components/NegSlide5TopTiendasUds";

const departments = [
  {
    id: "abarrotes",
    label: "Abarrotes",
    color: "#F5A623",
    slides: [
      AbaSlide1Portada,
      AbaSlide4SugeridoCompra,
      AbaSlide6VentasProducto,
      AbaSlide7Recomendaciones,
    ],
  },
  {
    id: "fyv",
    label: "Frutas y Verduras",
    color: "#27AE60",
    slides: [
      FyvSlide1Portada,
      FyvSlide4SugeridoCompra,
      FyvSlide6VentasProducto,
      FyvSlide7Recomendaciones,
    ],
  },
  {
    id: "ventas",
    label: "Ventas",
    color: "#3B82F6",
    slides: [
      VentasSlideResumen,
    ],
  },
  {
    id: "negocio",
    label: "Negocio",
    color: "#F5A623",
    slides: [
      NegSlide1KPIs,
      NegSlide2TopTiendas,
      NegSlide5TopTiendasUds,
      NegSlide3Promociones,
      NegSlide4Papas,
    ],
  },
];

function HomeInner() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab = tabParam ? departments.findIndex((d) => d.id === tabParam) : 0;

  const [deptIdx, setDeptIdx] = useState(initialTab >= 0 ? initialTab : 0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (tabParam) {
      const idx = departments.findIndex((d) => d.id === tabParam);
      if (idx >= 0) {
        setDeptIdx(idx);
        setCurrent(0);
      }
    }
  }, [tabParam]);

  const dept = departments[deptIdx];
  const slides = dept.slides;
  const Slide = slides[current];

  const switchDept = (idx: number) => {
    setDeptIdx(idx);
    setCurrent(0);
  };

  return (
    <div className="min-h-screen bg-[#E8E8E8] flex flex-col items-center justify-center py-8">
      <div className="relative">
        {/* Department tabs */}
        <div className="flex justify-center gap-2 mb-4">
          {departments.map((d, i) => (
            <button
              key={d.id}
              onClick={() => switchDept(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                i === deptIdx
                  ? "text-white shadow-md"
                  : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
              }`}
              style={i === deptIdx ? { backgroundColor: d.color } : undefined}
            >
              {d.label}
            </button>
          ))}
        </div>

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
                className="w-2.5 h-2.5 rounded-full transition-colors"
                style={{
                  backgroundColor: i === current ? dept.color : "#9CA3AF",
                }}
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
          {dept.label} · Slide {current + 1} / {slides.length}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeInner />
    </Suspense>
  );
}
