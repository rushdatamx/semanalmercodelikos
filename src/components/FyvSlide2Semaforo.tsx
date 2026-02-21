"use client";

import SlideWrapper from "./SlideWrapper";
import { XCircle } from "lucide-react";

const productos = [
  {
    nombre: "Tostada Roja 200 GRS",
    semaforo: "ROJO",
    invTotal: 5308,
    invPesos: 61042,
    diasInv: 38.5,
    vtaMes: 57885,
    agotadas: 4,
    proximas: 7,
    bajo: 1,
    ok: 14,
    sobreinventario: 13,
  },
  {
    nombre: "Tostada Amarilla 200 GR",
    semaforo: "ROJO",
    invTotal: 2518,
    invPesos: 28912,
    diasInv: 22.3,
    vtaMes: 47386,
    agotadas: 4,
    proximas: 8,
    bajo: 7,
    ok: 11,
    sobreinventario: 10,
  },
];

export default function FyvSlide2Semaforo() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Semáforo Ejecutivo — Frutas y Verduras</h2>
      <p className="text-gray-500 text-sm mb-6">Estado de inventario por SKU — cadena completa</p>
      <div className="flex gap-6 flex-1">
        {productos.map((p) => (
          <div key={p.nombre} className="flex-1 rounded-2xl border-2 border-[#E31837] bg-white shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <XCircle className="w-8 h-8 text-[#E31837]" />
                <span className="text-xs font-bold px-3 py-1 rounded-full text-[#E31837] border border-[#E31837]">{p.semaforo}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{p.nombre}</h3>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between"><span className="text-gray-500 text-sm">Inv. total</span><span className="text-gray-800 font-bold">{p.invTotal.toLocaleString()} uds</span></div>
              <div className="flex justify-between"><span className="text-gray-500 text-sm">Días inv. cadena</span><span className="text-gray-800 font-bold">{p.diasInv}</span></div>
              <div className="flex justify-between"><span className="text-gray-500 text-sm">Venta último mes</span><span className="text-gray-800 font-bold">${(p.vtaMes / 1000).toFixed(0)}K</span></div>
              <hr className="border-gray-200" />
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#E31837]" /><span className="text-gray-600">Agotadas: <b className="text-gray-800">{p.agotadas}</b></span></div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-500" /><span className="text-gray-600">Próximas: <b className="text-gray-800">{p.proximas}</b></span></div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500" /><span className="text-gray-600">Bajo: <b className="text-gray-800">{p.bajo}</b></span></div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#27AE60]" /><span className="text-gray-600">OK: <b className="text-gray-800">{p.ok}</b></span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
}
