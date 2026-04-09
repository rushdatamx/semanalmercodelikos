"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import AbaSlide1Portada from "@/components/AbaSlide1Portada";
import AbaSlide4SugeridoCompra from "@/components/AbaSlide4SugeridoCompra";
import AbaSlide6VentasProducto from "@/components/AbaSlide6VentasProducto";
import AbaSlide7Recomendaciones from "@/components/AbaSlide7Recomendaciones";
import FyvSlide1Portada from "@/components/FyvSlide1Portada";
import FyvSlide4SugeridoCompra from "@/components/FyvSlide4SugeridoCompra";
import FyvSlide6VentasProducto from "@/components/FyvSlide6VentasProducto";
import FyvSlide7Recomendaciones from "@/components/FyvSlide7Recomendaciones";
import VentasSlideResumen from "@/components/VentasSlideResumen";
import CrecSlide1Portada from "@/components/CrecSlide1Portada";
import CrecSlide2Velocidad from "@/components/CrecSlide2Velocidad";
import CrecSlide3Inventario from "@/components/CrecSlide3Inventario";
import CrecSlide4Tostada from "@/components/CrecSlide4Tostada";
import CrecSlide5Oportunidad from "@/components/CrecSlide5Oportunidad";
import CrecAbaSlide1Portada from "@/components/CrecAbaSlide1Portada";
import CrecAbaSlide2Velocidad from "@/components/CrecAbaSlide2Velocidad";
import CrecAbaSlide3Inventario from "@/components/CrecAbaSlide3Inventario";
import CrecAbaSlide4Tostada from "@/components/CrecAbaSlide4Tostada";
import CrecAbaSlide5Oportunidad from "@/components/CrecAbaSlide5Oportunidad";
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
    id: "crecimiento",
    label: "Crecimiento",
    color: "#10B981",
    slides: [
      CrecSlide1Portada,
      CrecSlide2Velocidad,
      CrecSlide3Inventario,
      CrecSlide4Tostada,
      CrecSlide5Oportunidad,
    ],
  },
  {
    id: "crec-abarrotes",
    label: "Crec. Abarrotes",
    color: "#059669",
    slides: [
      CrecAbaSlide1Portada,
      CrecAbaSlide2Velocidad,
      CrecAbaSlide3Inventario,
      CrecAbaSlide4Tostada,
      CrecAbaSlide5Oportunidad,
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
  const [exporting, setExporting] = useState(false);

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

  const exportPDF = async () => {
    setExporting(true);
    try {
      const html2canvas = (await import("html2canvas-pro")).default;
      const { jsPDF } = await import("jspdf");

      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1280, 720] });

      const container = document.createElement("div");
      container.style.position = "fixed";
      container.style.left = "-9999px";
      container.style.top = "0";
      document.body.appendChild(container);

      for (let i = 0; i < slides.length; i++) {
        const wrapper = document.createElement("div");
        container.appendChild(wrapper);

        const { createRoot } = await import("react-dom/client");
        const SlideComp = slides[i];
        const root = createRoot(wrapper);
        root.render(<SlideComp />);

        await new Promise((r) => setTimeout(r, 300));

        const slideEl = wrapper.querySelector("div");
        if (!slideEl) continue;

        const canvas = await html2canvas(slideEl, {
          width: 1280,
          height: 720,
          scale: 2,
          useCORS: true,
          backgroundColor: "#F5F5F5",
        });

        if (i > 0) pdf.addPage();
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 1280, 720);
        root.unmount();
      }

      document.body.removeChild(container);
      pdf.save(`${dept.label}_MERCO_2026-04-09.pdf`);
    } catch (err) {
      console.error("Error exporting PDF:", err);
    } finally {
      setExporting(false);
    }
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

        <div className="flex items-center justify-center gap-3 mt-3">
          <p className="text-gray-500 text-xs">
            {dept.label} · Slide {current + 1} / {slides.length}
          </p>
          <button
            onClick={exportPDF}
            disabled={exporting}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm transition-colors disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            {exporting ? "Exportando..." : `PDF ${dept.label}`}
          </button>
        </div>
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
