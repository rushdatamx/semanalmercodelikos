"use client";

import SlideWrapper from "./SlideWrapper";

export default function VtaAbaSlide1Portada() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] justify-center items-center text-center relative" hideFooter>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F5A623]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F7B500]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/60 blur-3xl" />
      </div>
      <div className="relative z-10 space-y-6">
        <div className="flex justify-center gap-6 items-center">
          <img src="/delikos-logo.jpeg" alt="Botanas Delikos" className="h-28 object-contain rounded-lg" />
          <div className="w-px h-20 bg-gray-300" />
          <img src="/merco-logo.jpg" alt="MERCO" className="h-20 object-contain" />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
          Departamento Abarrotes
        </h1>
        <p className="text-2xl text-gray-500 font-light">MERCO · Enero — Abril 2026</p>
        <div className="inline-block mt-4 px-6 py-2 rounded-full border border-[#F5A623]/50 text-[#B8860B] text-sm font-semibold bg-white/50">
          40 tiendas · $8.3M sell-out · +44.9% vs 2025
        </div>
      </div>
    </SlideWrapper>
  );
}
