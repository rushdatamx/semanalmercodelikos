"use client";

import { useState } from "react";
import SlideWrapper from "./SlideWrapper";

type Estado = "AGOTADO" | "BAJO" | "OK" | "SIN VTA" | "N/A";

const estadoStyle: Record<Estado, { dot: string }> = {
  AGOTADO: { dot: "bg-red-500" },
  BAJO: { dot: "bg-yellow-500" },
  OK: { dot: "bg-green-500" },
  "SIN VTA": { dot: "bg-gray-400" },
  "N/A": { dot: "bg-gray-200" },
};

interface Row {
  tienda: string;
  Fritos: Estado;
  Rotinis: Estado;
  Minicuadros: Estado;
  "Cacah MM": Estado;
  "Papas Desh": Estado;
}

const data: Row[] = [
  { tienda: "MERCO Republica", Fritos: "AGOTADO", Rotinis: "OK", Minicuadros: "BAJO", "Cacah MM": "AGOTADO", "Papas Desh": "OK" },
  { tienda: "MERCO Israel Cavazos", Fritos: "N/A", Rotinis: "N/A", Minicuadros: "AGOTADO", "Cacah MM": "N/A", "Papas Desh": "AGOTADO" },
  { tienda: "MERCO San Buena", Fritos: "N/A", Rotinis: "N/A", Minicuadros: "AGOTADO", "Cacah MM": "N/A", "Papas Desh": "N/A" },
  { tienda: "MERCO Solidaridad", Fritos: "AGOTADO", Rotinis: "SIN VTA", Minicuadros: "OK", "Cacah MM": "OK", "Papas Desh": "OK" },
  { tienda: "MERCO El Jaral", Fritos: "BAJO", Rotinis: "BAJO", Minicuadros: "BAJO", "Cacah MM": "OK", "Papas Desh": "OK" },
  { tienda: "MERCO Acuña", Fritos: "OK", Rotinis: "OK", Minicuadros: "OK", "Cacah MM": "AGOTADO", "Papas Desh": "OK" },
  { tienda: "MERCO Apodaca Centro", Fritos: "OK", Rotinis: "OK", Minicuadros: "BAJO", "Cacah MM": "BAJO", "Papas Desh": "OK" },
  { tienda: "MERCO Buenavista", Fritos: "BAJO", Rotinis: "OK", Minicuadros: "OK", "Cacah MM": "BAJO", "Papas Desh": "OK" },
  { tienda: "MERCO Montemorelos", Fritos: "OK", Rotinis: "BAJO", Minicuadros: "OK", "Cacah MM": "OK", "Papas Desh": "OK" },
  { tienda: "MERCO La Sierrita", Fritos: "OK", Rotinis: "OK", Minicuadros: "BAJO", "Cacah MM": "OK", "Papas Desh": "OK" },
  { tienda: "MERCO Mixcoac", Fritos: "OK", Rotinis: "OK", Minicuadros: "OK", "Cacah MM": "BAJO", "Papas Desh": "OK" },
  { tienda: "MERCO Otilio", Fritos: "OK", Rotinis: "OK", Minicuadros: "OK", "Cacah MM": "BAJO", "Papas Desh": "OK" },
  { tienda: "MERCO Saltillo Sendero", Fritos: "OK", Rotinis: "OK", Minicuadros: "SIN VTA", "Cacah MM": "BAJO", "Papas Desh": "OK" },
];

const groups = ["Fritos", "Rotinis", "Minicuadros", "Cacah MM", "Papas Desh"] as const;

function Dot({ estado }: { estado: Estado }) {
  return (
    <div className="flex items-center justify-center">
      <div className={`w-3.5 h-3.5 rounded-full ${estadoStyle[estado].dot}`} title={estado} />
    </div>
  );
}

export default function FyvSlide3AlertasTienda() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Alertas por Tienda — Frutas y Verduras</h2>
      <p className="text-gray-500 text-xs mb-1">{data.length} tiendas con al menos una alerta · Umbral 15 días</p>

      <div className="flex gap-3 mb-3">
        {[
          { label: "Agotado", color: "bg-red-500" },
          { label: "Bajo 15d", color: "bg-yellow-500" },
          { label: "OK", color: "bg-green-500" },
          { label: "Sin Vta", color: "bg-gray-400" },
          { label: "N/A", color: "bg-gray-200" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1 text-[10px] text-gray-500">
            <div className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
            {l.label}
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase sticky top-0">
              <th className="text-left py-2 px-3 w-[220px]">Tienda</th>
              {groups.map((g) => (
                <th key={g} className="text-center py-2 px-2">{g}</th>
              ))}
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
                <td className="py-1.5 px-3 text-gray-800 font-medium">{row.tienda}</td>
                {groups.map((g) => (
                  <td key={g} className="py-1.5 px-2">
                    <Dot estado={row[g]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideWrapper>
  );
}
