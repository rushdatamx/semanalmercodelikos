"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const productos = [
  {
    nombre: "Tostada Roja 70 PZ",
    semaforo: "AMARILLO" as const,
    invTotal: 8275,
    diasInv: 7.8,
    vtaMes: 1309462,
    agotadas: 2,
    proximas: 17,
    bajo: 10,
    ok: 10,
    tag: "Producto estrella · $15.5M/año",
  },
  {
    nombre: "Tostada Roja 200 GRS",
    semaforo: "ROJO" as const,
    invTotal: 5308,
    diasInv: 38.5,
    vtaMes: 57885,
    agotadas: 4,
    proximas: 7,
    bajo: 1,
    ok: 14,
    tag: "",
  },
  {
    nombre: "Tostada Amarilla 200 GR",
    semaforo: "ROJO" as const,
    invTotal: 2518,
    diasInv: 22.3,
    vtaMes: 47386,
    agotadas: 4,
    proximas: 8,
    bajo: 7,
    ok: 11,
    tag: "",
  },
];

const cfg = {
  ROJO: { border: "border-[#E31837]", bg: "bg-[#E31837]/10", icon: XCircle, ic: "text-[#E31837]" },
  AMARILLO: { border: "border-[#F5A623]", bg: "bg-[#F5A623]/10", icon: AlertTriangle, ic: "text-[#F5A623]" },
  VERDE: { border: "border-[#27AE60]", bg: "bg-[#27AE60]/10", icon: CheckCircle, ic: "text-[#27AE60]" },
};

export default function Slide2Semaforo() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Semáforo Ejecutivo</h2>
      <p className="text-gray-500 text-sm mb-6">Estado de inventario por SKU — cadena completa</p>
      <div className="flex gap-5 flex-1">
        {productos.map((p) => {
          const c = cfg[p.semaforo];
          const Icon = c.icon;
          return (
            <div key={p.nombre} className={`flex-1 rounded-2xl border-2 ${c.border} bg-white shadow-sm p-6 flex flex-col justify-between`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-8 h-8 ${c.ic}`} />
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.ic} border ${c.border}`}>{p.semaforo}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{p.nombre}</h3>
                {p.tag && <span className="text-xs text-[#F5A623]">{p.tag}</span>}
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
          );
        })}
      </div>
    </SlideWrapper>
  );
}
