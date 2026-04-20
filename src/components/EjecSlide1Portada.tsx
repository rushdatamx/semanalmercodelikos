"use client";

import SlideWrapper from "./SlideWrapper";

export default function EjecSlide1Portada() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] justify-center items-center text-center relative" hideFooter>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#6D28D9]/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#8B5CF6]/5 blur-3xl" />
      </div>

      <div className="relative z-10 space-y-8">
        {/* Logos */}
        <div className="flex items-center justify-center gap-8">
          <img src="/delikos-logo.png" alt="Delikos" className="h-16 object-contain" />
          <div className="w-px h-12 bg-gray-300" />
          <img src="/merco-logo.jpg" alt="MERCO" className="h-14 object-contain rounded" />
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
            Revisión de Negocio — Botanas Delikos
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            Q1 2026 · Sell-Out MERCO
          </p>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-white/80 border border-[#8B5CF6]/20 rounded-full px-6 py-3 shadow-sm">
          <span className="text-sm font-semibold text-[#8B5CF6]">44 SKUs</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="text-sm font-semibold text-[#8B5CF6]">43 Tiendas</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="text-sm font-semibold text-[#8B5CF6]">3 Departamentos</span>
        </div>

        {/* Date */}
        <p className="text-xs text-gray-400 mt-4">Abril 2026</p>
      </div>
    </SlideWrapper>
  );
}
