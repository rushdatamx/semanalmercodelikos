"use client";

import SlideWrapper from "./SlideWrapper";

export default function AbaSlide1Portada() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] justify-center items-center text-center relative" hideFooter>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F5A623]/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F26522]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/60 blur-3xl" />
      </div>
      <div className="relative z-10 space-y-6">
        <div className="flex justify-center">
          <img src="/delikos-logo.jpeg" alt="Botanas Delikos" className="h-44 object-contain" />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
          Reporte Semanal — Abarrotes
        </h1>
        <div className="flex items-center justify-center gap-3">
          <img src="/merco-logo.jpg" alt="MERCO" className="h-16 object-contain" />
        </div>
        <p className="text-xl text-gray-500">Semana del 18 de febrero 2026</p>
        <div className="inline-block mt-4 px-6 py-2 rounded-full border border-[#F26522]/50 text-[#F26522] text-sm font-semibold">
          Tostada Roja 70PZ
        </div>
      </div>
    </SlideWrapper>
  );
}
