"use client";

import SlideWrapper from "./SlideWrapper";
import {
  Rocket,
  TrendingUp,
  Trophy,
  Store,
  Package,
  Target,
  Award,
  Layers,
  Lightbulb,
} from "lucide-react";

/* ── Los 8 pilares de la fortaleza del negocio (Ene-Jul 2026) ── */
interface Pilar {
  titulo: string;
  valor: string;
  detalle: string;
  icon: typeof Rocket;
  destacado?: boolean;
}

const pilares: Pilar[] = [
  {
    titulo: "Del anio 2025 completo",
    valor: "76%",
    detalle: "logrado en solo 7 meses. En septiembre superamos todo 2025",
    icon: Trophy,
    destacado: true,
  },
  {
    titulo: "Proyeccion cierre 2026",
    valor: "~$25M",
    detalle: "+30% vs los $19.3M de 2025, al ritmo actual",
    icon: Rocket,
    destacado: true,
  },
  {
    titulo: "Meses ganados vs 2025",
    valor: "7 de 7",
    detalle: "sin un solo mes perdido, rango +31% a +77%",
    icon: Target,
  },
  {
    titulo: "Mejores meses historicos",
    valor: "4 de 6",
    detalle: "son de 2026. Marzo ($2.54M) es el record absoluto",
    icon: Award,
  },
  {
    titulo: "Producto estrella",
    valor: "+32.7%",
    detalle: "Tostada Roja 70PZ: +28% en piezas pese al alza de precio",
    icon: TrendingUp,
  },
  {
    titulo: "Venta por tienda",
    valor: "+48%",
    detalle: "$245,821 --> $364,187. Las mismas tiendas venden mas",
    icon: Store,
  },
  {
    titulo: "SKUs por tienda",
    valor: "8.7 → 22.7",
    detalle: "triplicamos la presencia en piso: 909 puntos activos (+168%)",
    icon: Layers,
  },
  {
    titulo: "Tiendas que crecen",
    valor: "38 de 39",
    detalle: "35 crecen +25% o mas, 19 arriba de +50%, 5 duplican",
    icon: Package,
  },
];

export default function NegSlide8Fortaleza() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <Rocket className="w-6 h-6 text-[#F5A623]" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">Por Que el Negocio Esta Fuerte</h2>
          <p className="text-[10px] text-gray-500">
            Ene-Jul 2026 -- 25 SKUs Botanas -- 8 indicadores de salud del negocio en MERCO
          </p>
        </div>
      </div>

      {/* Grid de 8 pilares */}
      <div className="grid grid-cols-4 grid-rows-2 gap-3 flex-1 min-h-0">
        {pilares.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={i}
              className={`rounded-xl border shadow-sm p-3 flex flex-col justify-between ${
                p.destacado
                  ? "bg-[#F5A623]/8 border-[#F5A623]/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-start gap-2">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    p.destacado ? "bg-[#F5A623]/20" : "bg-[#F5A623]/10"
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#F5A623]" />
                </div>
                <p className="text-[10px] text-gray-500 uppercase font-semibold leading-tight pt-0.5">
                  {p.titulo}
                </p>
              </div>
              <p
                className={`font-bold leading-none my-1 ${
                  p.valor.length > 8 ? "text-xl" : "text-3xl"
                } ${p.destacado ? "text-[#F5A623]" : "text-[#27AE60]"}`}
              >
                {p.valor}
              </p>
              <p className="text-[9px] text-gray-500 leading-tight">{p.detalle}</p>
            </div>
          );
        })}
      </div>

      {/* Franja de cierre + oportunidad */}
      <div className="mt-3 grid grid-cols-3 gap-3">
        <div className="col-span-2 bg-white rounded-xl border border-green-200 shadow-sm px-3 py-2 flex items-start gap-2">
          <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[9px] font-bold text-[#27AE60]">✓</span>
          </div>
          <p className="text-[10px] text-gray-700 leading-snug">
            <span className="font-bold text-[#27AE60]">El crecimiento es solido y esta bien repartido:</span>{" "}
            no depende de un solo producto ni de un solo mes. Crece el portafolio historico (+24.4%), entran
            15 SKUs nuevos (+27.5 pp), crecen 38 de 39 tiendas comparables y ganamos los 7 meses del anio.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-[#F5A623]/30 shadow-sm px-3 py-2 flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
          <p className="text-[10px] text-gray-700 leading-snug">
            <span className="font-bold text-[#F5A623]">Oportunidad:</span> el cacahuate a granel tiene{" "}
            <span className="font-bold">$480K</span> por recuperar vs 2025.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
