"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle } from "lucide-react";

export default function AbaSlide2Semaforo() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Semáforo Ejecutivo — Abarrotes</h2>
      <p className="text-gray-500 text-sm mb-6">Estado de inventario · Tostada Roja 70PZ</p>
      <div className="flex justify-center flex-1 items-start">
        <div className="w-[500px] rounded-2xl border-2 border-[#F5A623] bg-white shadow-sm p-8 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <AlertTriangle className="w-10 h-10 text-[#F5A623]" />
            <span className="text-sm font-bold px-4 py-1.5 rounded-full text-[#F5A623] border border-[#F5A623]">AMARILLO</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">Tostada Roja 70 PZ</h3>
          <span className="text-sm text-[#F5A623] mb-6">Producto estrella · $15.5M/año</span>

          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-500">Inv. total cadena</span>
              <span className="text-gray-800 font-bold text-lg">14,229 uds</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-500">Inv. total $</span>
              <span className="text-gray-800 font-bold text-lg">$452,446</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-500">Días inv. cadena</span>
              <span className="text-gray-800 font-bold text-lg">20.2</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-500">Venta último mes</span>
              <span className="text-gray-800 font-bold text-lg">$1,212K</span>
            </div>
            <hr className="border-gray-200" />
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#27AE60]" />
                <span className="text-gray-600">OK: <b className="text-gray-800">15</b></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="text-gray-600">Bajo: <b className="text-gray-800">19</b></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-gray-600">Próximas: <b className="text-gray-800">5</b></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-gray-600">Exceso: <b className="text-gray-800">2</b></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
