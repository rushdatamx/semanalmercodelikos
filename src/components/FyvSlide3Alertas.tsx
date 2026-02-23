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

const data: { tienda: string; roja200: Estado; amarilla200: Estado }[] = [
  { tienda: "MERCO Buenavista", roja200: "AGOTADO", amarilla200: "PRÓXIMO" },
  { tienda: "MERCO Colinas", roja200: "AGOTADO", amarilla200: "AGOTADO" },
  { tienda: "Manantiales", roja200: "PRÓXIMO", amarilla200: "AGOTADO" },
  { tienda: "MERCO La Sierrita", roja200: "BAJO", amarilla200: "AGOTADO" },
  { tienda: "MERCO Los Pilares", roja200: "BAJO", amarilla200: "AGOTADO" },
  { tienda: "MERCO Cadereyta", roja200: "PRÓXIMO", amarilla200: "OK" },
  { tienda: "MERCO Saltillo Centro", roja200: "PRÓXIMO", amarilla200: "OK" },
  { tienda: "MERCO Aramberri", roja200: "OK", amarilla200: "PRÓXIMO" },
  { tienda: "MERCO Nuevo Repueblo", roja200: "OK", amarilla200: "PRÓXIMO" },
  { tienda: "MERCO Pueblo Nuevo", roja200: "EXCESO", amarilla200: "PRÓXIMO" },
  { tienda: "MERCO Sta Elena Zuazua", roja200: "OK", amarilla200: "PRÓXIMO" },
  { tienda: "Urdiñola", roja200: "OK", amarilla200: "PRÓXIMO" },
  { tienda: "MERCO Frontera Centro", roja200: "OK", amarilla200: "BAJO" },
  { tienda: "MERCO Libramiento", roja200: "OK", amarilla200: "BAJO" },
  { tienda: "MERCO Montemorelos", roja200: "OK", amarilla200: "BAJO" },
  { tienda: "MERCO Paraje San José", roja200: "EXCESO", amarilla200: "BAJO" },
  { tienda: "MERCO San Buena", roja200: "OK", amarilla200: "BAJO" },
  { tienda: "MERCO Piedras Negras", roja200: "BAJO", amarilla200: "OK" },
];

function Badge({ estado }: { estado: Estado }) {
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${estadoColor[estado]}`}>
      {estado}
    </span>
  );
}

export default function FyvSlide3Alertas() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Alertas por Tienda — Frutas y Verduras</h2>
      <p className="text-gray-500 text-sm mb-4">Tostada Roja 200g + Amarilla 200g · Tiendas con al menos una alerta</p>
      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-xs uppercase sticky top-0">
              <th className="text-left py-2 px-4 w-[280px]">Tienda</th>
              <th className="text-center py-2 px-4">Tostada Roja 200g</th>
              <th className="text-center py-2 px-4">Tostada Amarilla 200g</th>
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
                <td className="py-1.5 px-4 text-center"><Badge estado={row.roja200} /></td>
                <td className="py-1.5 px-4 text-center"><Badge estado={row.amarilla200} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideWrapper>
  );
}
