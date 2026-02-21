"use client";

import { useState } from "react";
import SlideWrapper from "./SlideWrapper";

type Estado = "AGOTADO" | "PRÓXIMO" | "BAJO" | "OK" | "EXCESO";

const estadoColor: Record<Estado, string> = {
  AGOTADO: "bg-[#E31837] text-white",
  PRÓXIMO: "bg-orange-500 text-white",
  BAJO: "bg-yellow-500 text-black",
  OK: "bg-[#27AE60] text-white",
  EXCESO: "bg-blue-500 text-white",
};

const data: { tienda: string; estado: Estado }[] = [
  { tienda: "MERCO Los Pilares", estado: "AGOTADO" },
  { tienda: "MERCO Buenavista", estado: "AGOTADO" },
  { tienda: "MERCO Solidaridad", estado: "PRÓXIMO" },
  { tienda: "Sendero Sta Catarina", estado: "PRÓXIMO" },
  { tienda: "Saltillo Madero", estado: "PRÓXIMO" },
  { tienda: "MERCO Montemorelos", estado: "PRÓXIMO" },
  { tienda: "MERCO Ramos Arizpe", estado: "PRÓXIMO" },
  { tienda: "MERCO Colinas", estado: "PRÓXIMO" },
  { tienda: "MERCO Girasoles", estado: "PRÓXIMO" },
  { tienda: "MERCO El Jaral", estado: "PRÓXIMO" },
  { tienda: "MERCO Israel Cavazos", estado: "PRÓXIMO" },
  { tienda: "Manantiales", estado: "PRÓXIMO" },
  { tienda: "MERCO Aramberri", estado: "PRÓXIMO" },
  { tienda: "MERCO García", estado: "PRÓXIMO" },
  { tienda: "MERCO Pueblo Nuevo", estado: "PRÓXIMO" },
  { tienda: "Paraje San José", estado: "PRÓXIMO" },
  { tienda: "MERCO Cadereyta", estado: "PRÓXIMO" },
  { tienda: "MERCO San Rafael", estado: "PRÓXIMO" },
  { tienda: "MERCO Nuevo Repueblo", estado: "PRÓXIMO" },
  { tienda: "MERCO Rosita", estado: "BAJO" },
  { tienda: "Piedras Negras", estado: "BAJO" },
  { tienda: "MERCO Lincoln", estado: "BAJO" },
  { tienda: "Paseo Monclova", estado: "BAJO" },
  { tienda: "MERCO Libramiento", estado: "BAJO" },
  { tienda: "MERCO Arboledas", estado: "BAJO" },
  { tienda: "MERCO La Fe", estado: "BAJO" },
  { tienda: "MERCO Sta Elena Zuazua", estado: "BAJO" },
  { tienda: "MERCO Frontera Centro", estado: "BAJO" },
  { tienda: "MERCO Nueva Rosita", estado: "BAJO" },
];

function Badge({ estado }: { estado: Estado }) {
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${estadoColor[estado]}`}>
      {estado}
    </span>
  );
}

export default function AbaSlide3Alertas() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Alertas por Tienda — Abarrotes</h2>
      <p className="text-gray-500 text-sm mb-4">Tostada Roja 70PZ · {data.length} tiendas con alerta de {40} totales</p>
      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-xs uppercase sticky top-0">
              <th className="text-left py-2 px-4 w-[350px]">Tienda</th>
              <th className="text-center py-2 px-4">Tostada Roja 70PZ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.tienda}
                className={`border-b border-gray-100 transition-colors ${hovered === i ? "bg-gray-50" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <td className="py-1.5 px-4 text-gray-800 font-medium">{row.tienda}</td>
                <td className="py-1.5 px-4 text-center"><Badge estado={row.estado} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideWrapper>
  );
}
