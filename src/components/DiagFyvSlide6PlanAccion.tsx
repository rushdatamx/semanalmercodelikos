"use client";

import SlideWrapper from "./SlideWrapper";
import { Target, Upload, TrendingUp, Shuffle, CalendarCheck } from "lucide-react";

const acciones = [
  {
    icon: Upload,
    titulo: "Alta UPC Papa Desh. Fuego",
    descripcion: "Dar de alta el UPC 7502256161663 en el sistema de compras de MERCO para que aparezca en las OCs. Producto con $72K en venta Q1 que no se está pidiendo.",
    prioridad: "URGENTE",
    prioridadColor: "bg-red-100 text-red-700",
    responsable: "Mario → Patricio",
    plazo: "1 semana",
  },
  {
    icon: TrendingUp,
    titulo: "Incrementar OC +30%",
    descripcion: "Subir el volumen de OC de ~2,800 a ~3,900 uds para cubrir 15 días de venta. Aplicar incremento proporcional por SKU según venta diaria real.",
    prioridad: "ALTA",
    prioridadColor: "bg-amber-100 text-amber-700",
    responsable: "Mario → Patricio",
    plazo: "Próxima OC",
  },
  {
    icon: Shuffle,
    titulo: "Redistribuir inventario",
    descripcion: "Mover stock de cacahuates con sobre-inventario (Japonés DDI 517, Virginia DDI 94) a productos de alta rotación que operan al día.",
    prioridad: "MEDIA",
    prioridadColor: "bg-blue-100 text-blue-700",
    responsable: "Patricio + Ops",
    plazo: "2 semanas",
  },
  {
    icon: CalendarCheck,
    titulo: "Revisión mensual de cobertura",
    descripcion: "Establecer una revisión mensual de cobertura por producto para ajustar OCs según demanda real y evitar que el problema se repita.",
    prioridad: "PREVENTIVA",
    prioridadColor: "bg-[#16A085]/10 text-[#16A085]",
    responsable: "Mario",
    plazo: "Mensual",
  },
];

export default function DiagFyvSlide6PlanAccion() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#16A085]/10 flex items-center justify-center">
          <Target className="w-5 h-5 text-[#16A085]" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Plan de acción</h2>
          <p className="text-[10px] text-gray-500">4 pasos para desbloquear el crecimiento de FyV en MERCO</p>
        </div>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {acciones.map((a, i) => {
          const Icon = a.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col"
            >
              {/* Top row: icon + title + priority */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#16A085]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#16A085]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold text-gray-800">{a.titulo}</h3>
                    <span className={`text-[9px] px-2 py-0.5 rounded font-bold ${a.prioridadColor}`}>
                      {a.prioridad}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    {a.descripcion}
                  </p>
                </div>
              </div>

              {/* Bottom: responsible + plazo */}
              <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] text-gray-400 uppercase font-semibold">Responsable:</span>
                  <span className="text-[10px] text-gray-700 font-bold">{a.responsable}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] text-gray-400 uppercase font-semibold">Plazo:</span>
                  <span className="text-[10px] text-gray-700 font-bold">{a.plazo}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom bar */}
      <div className="mt-3 bg-[#16A085] rounded-xl p-3 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5" />
          <p className="text-sm font-bold">Objetivo: OCs de 3,900+ uds con los 12 productos</p>
        </div>
        <p className="text-[11px] opacity-90">
          Con estos 4 pasos, la categoría FyV puede pasar de $1.1M a $1.5M+ en Q2 2026
        </p>
      </div>
    </SlideWrapper>
  );
}
