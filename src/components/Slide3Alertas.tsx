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

interface TiendaRow {
  tienda: string;
  roja70: Estado;
  roja200: Estado;
  amarilla200: Estado;
}

const data: TiendaRow[] = [
  { tienda: "MERCO Buenavista", roja70: "AGOTADO", roja200: "AGOTADO", amarilla200: "AGOTADO" },
  { tienda: "MERCO Los Pilares", roja70: "AGOTADO", roja200: "PRÓXIMO", amarilla200: "PRÓXIMO" },
  { tienda: "MERCO Colinas", roja70: "PRÓXIMO", roja200: "AGOTADO", amarilla200: "AGOTADO" },
  { tienda: "MERCO Apodaca Centro", roja70: "OK", roja200: "AGOTADO", amarilla200: "AGOTADO" },
  { tienda: "MERCO García", roja70: "PRÓXIMO", roja200: "AGOTADO", amarilla200: "BAJO" },
  { tienda: "MERCO Pueblo Nuevo", roja70: "PRÓXIMO", roja200: "OK", amarilla200: "AGOTADO" },
  { tienda: "MERCO Solidaridad", roja70: "PRÓXIMO", roja200: "OK", amarilla200: "PRÓXIMO" },
  { tienda: "Sendero Sta Catarina", roja70: "PRÓXIMO", roja200: "EXCESO", amarilla200: "OK" },
  { tienda: "Saltillo Madero", roja70: "PRÓXIMO", roja200: "PRÓXIMO", amarilla200: "EXCESO" },
  { tienda: "MERCO Montemorelos", roja70: "PRÓXIMO", roja200: "EXCESO", amarilla200: "BAJO" },
  { tienda: "MERCO Ramos Arizpe", roja70: "PRÓXIMO", roja200: "PRÓXIMO", amarilla200: "PRÓXIMO" },
  { tienda: "MERCO Girasoles", roja70: "PRÓXIMO", roja200: "EXCESO", amarilla200: "BAJO" },
  { tienda: "MERCO El Jaral", roja70: "PRÓXIMO", roja200: "OK", amarilla200: "BAJO" },
  { tienda: "MERCO Israel Cavazos", roja70: "PRÓXIMO", roja200: "EXCESO", amarilla200: "PRÓXIMO" },
  { tienda: "Manantiales", roja70: "PRÓXIMO", roja200: "PRÓXIMO", amarilla200: "PRÓXIMO" },
  { tienda: "MERCO Aramberri", roja70: "PRÓXIMO", roja200: "EXCESO", amarilla200: "PRÓXIMO" },
  { tienda: "Paseo Monclova", roja70: "OK", roja200: "PRÓXIMO", amarilla200: "OK" },
  { tienda: "MERCO Rosita", roja70: "BAJO", roja200: "OK", amarilla200: "PRÓXIMO" },
  { tienda: "MERCO Libramiento", roja70: "OK", roja200: "OK", amarilla200: "PRÓXIMO" },
  { tienda: "Piedras Negras", roja70: "BAJO", roja200: "PRÓXIMO", amarilla200: "EXCESO" },
];

function Badge({ estado }: { estado: Estado }) {
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${estadoColor[estado]}`}>
      {estado}
    </span>
  );
}

export default function Slide3Alertas() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Mapa de Alertas por Tienda</h2>
      <p className="text-gray-500 text-sm mb-4">Solo tiendas con al menos una alerta · 20 de 40 tiendas con alertas activas</p>
      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-xs uppercase">
              <th className="text-left py-2 px-4 w-[280px]">Tienda</th>
              <th className="text-center py-2 px-4">Tostada Roja 70PZ</th>
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
                <td className="py-2 px-4 text-gray-800 font-medium">{row.tienda}</td>
                <td className="py-2 px-4 text-center"><Badge estado={row.roja70} /></td>
                <td className="py-2 px-4 text-center"><Badge estado={row.roja200} /></td>
                <td className="py-2 px-4 text-center"><Badge estado={row.amarilla200} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideWrapper>
  );
}
