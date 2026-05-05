"use client";

import SlideWrapper from "./SlideWrapper";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

const hallazgos = [
  { tipo: "positivo", texto: "Sell-out crece +59.1% YoY con las mismas 40 tiendas — crecimiento 100% organico" },
  { tipo: "positivo", texto: "4 de 4 meses en crecimiento: +70.2%, +47.8%, +67.6%, +51.7% vs 2025" },
  { tipo: "positivo", texto: "Tostada Roja 70PZ sigue como motor principal ($5.7M, 60%) con +48.5% de crecimiento" },
  { tipo: "positivo", texto: "Categorias nuevas (FyV, Papas) ya aportan 21.5% del mix en su primer ano" },
  { tipo: "alerta", texto: "Alta concentracion: 1 solo SKU (Tostada Roja) = 60% de la venta total" },
  { tipo: "alerta", texto: "Fill rate 60.5% — hay espacio para mejorar distribucion en tiendas" },
  { tipo: "alerta", texto: "Cacahuate Granel -33.4% y Panaderia -52.4% en declive" },
];

const acciones = [
  "Ampliar distribucion Durito Teja (10 tiendas sin producto, #2 en venta)",
  "Crecer penetracion de FyV y Papas en las 6-8 tiendas donde faltan",
  "Investigar caida de Cacahuate Granel — es tema de precio o de espacio?",
  "Diversificar mix: reducir dependencia de Tostada Roja a menos del 55%",
  "Activar Bottom 5 tiendas con plan de exhibicion adicional",
];

export default function VtaSlide9Conclusiones() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Conclusiones y Proximos Pasos</h2>
      <p className="text-gray-500 text-sm mb-4">Resumen ejecutivo — hallazgos clave y acciones</p>

      <div className="flex gap-5 flex-1">
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-gray-800 font-bold mb-3">Hallazgos Clave</h3>
          <div className="space-y-2.5">
            {hallazgos.map((h, i) => {
              const isPositivo = h.tipo === "positivo";
              const color = isPositivo ? "#27AE60" : "#E31837";
              const Icon = isPositivo ? CheckCircle : AlertTriangle;
              return (
                <div key={i} className="flex items-start gap-2.5 animate-count-up" style={{ animationDelay: `${i * 80}ms` }}>
                  <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} />
                  <p className="text-gray-600 text-xs leading-relaxed">{h.texto}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[460px] flex flex-col gap-3">
          <div className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-xl p-5 flex-1">
            <h3 className="text-[#27AE60] font-bold mb-3">Acciones Prioritarias</h3>
            <div className="space-y-2.5">
              {acciones.map((a, i) => (
                <div key={i} className="flex items-start gap-2.5 animate-count-up" style={{ animationDelay: `${i * 80 + 400}ms` }}>
                  <ArrowRight className="w-4 h-4 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-xs leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">Sell-Out YTD</p>
              <p className="text-[#1A1A1A] text-xl font-bold">$9.4M</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">Crecimiento</p>
              <p className="text-[#27AE60] text-xl font-bold">+59.1%</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
              <p className="text-gray-400 text-[9px]">Fill Rate</p>
              <p className="text-[#2E75B6] text-xl font-bold">60.5%</p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
