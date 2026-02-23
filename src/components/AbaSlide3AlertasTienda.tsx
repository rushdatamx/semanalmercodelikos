"use client";

import { useState } from "react";
import SlideWrapper from "./SlideWrapper";

type Estado = "AGOTADO" | "BAJO" | "OK" | "SIN VTA" | "N/A";

const estadoStyle: Record<Estado, { bg: string; dot: string }> = {
  AGOTADO: { bg: "bg-red-500", dot: "bg-red-500" },
  BAJO: { bg: "bg-yellow-500", dot: "bg-yellow-500" },
  OK: { bg: "bg-green-500", dot: "bg-green-500" },
  "SIN VTA": { bg: "bg-gray-400", dot: "bg-gray-400" },
  "N/A": { bg: "bg-gray-200", dot: "bg-gray-200" },
};

interface Row {
  tienda: string;
  Tostadas: Estado;
  "PDQ 340": Estado;
  "PDQ 45": Estado;
  "Cacah Granel": Estado;
  Otros: Estado;
}

const data: Row[] = [
  { tienda: "MERCO Colinas", Tostadas: "AGOTADO", "PDQ 340": "AGOTADO", "PDQ 45": "BAJO", "Cacah Granel": "AGOTADO", Otros: "BAJO" },
  { tienda: "MERCO Piedras Negras", Tostadas: "BAJO", "PDQ 340": "AGOTADO", "PDQ 45": "AGOTADO", "Cacah Granel": "AGOTADO", Otros: "AGOTADO" },
  { tienda: "MERCO La Sierrita", Tostadas: "AGOTADO", "PDQ 340": "AGOTADO", "PDQ 45": "OK", "Cacah Granel": "AGOTADO", Otros: "SIN VTA" },
  { tienda: "Saltillo Madero", Tostadas: "BAJO", "PDQ 340": "OK", "PDQ 45": "AGOTADO", "Cacah Granel": "AGOTADO", Otros: "AGOTADO" },
  { tienda: "MERCO Los Pilares", Tostadas: "AGOTADO", "PDQ 340": "BAJO", "PDQ 45": "OK", "Cacah Granel": "AGOTADO", Otros: "BAJO" },
  { tienda: "MERCO Montemorelos", Tostadas: "BAJO", "PDQ 340": "BAJO", "PDQ 45": "AGOTADO", "Cacah Granel": "AGOTADO", Otros: "BAJO" },
  { tienda: "Manantiales", Tostadas: "AGOTADO", "PDQ 340": "SIN VTA", "PDQ 45": "AGOTADO", "Cacah Granel": "N/A", Otros: "SIN VTA" },
  { tienda: "MERCO Buenavista", Tostadas: "AGOTADO", "PDQ 340": "OK", "PDQ 45": "SIN VTA", "Cacah Granel": "BAJO", Otros: "BAJO" },
  { tienda: "MERCO Cadereyta", Tostadas: "BAJO", "PDQ 340": "AGOTADO", "PDQ 45": "OK", "Cacah Granel": "AGOTADO", Otros: "BAJO" },
  { tienda: "MERCO Sendero Sta Catarina", Tostadas: "BAJO", "PDQ 340": "AGOTADO", "PDQ 45": "OK", "Cacah Granel": "OK", Otros: "AGOTADO" },
  { tienda: "MERCO Sta Elena Zuazua", Tostadas: "BAJO", "PDQ 340": "BAJO", "PDQ 45": "OK", "Cacah Granel": "AGOTADO", Otros: "BAJO" },
  { tienda: "MERCO Saltillo Centro", Tostadas: "BAJO", "PDQ 340": "BAJO", "PDQ 45": "BAJO", "Cacah Granel": "BAJO", Otros: "BAJO" },
  { tienda: "MERCO Ramos Arizpe", Tostadas: "BAJO", "PDQ 340": "AGOTADO", "PDQ 45": "OK", "Cacah Granel": "BAJO", Otros: "SIN VTA" },
  { tienda: "MERCO Girasoles", Tostadas: "BAJO", "PDQ 340": "OK", "PDQ 45": "AGOTADO", "Cacah Granel": "OK", Otros: "BAJO" },
  { tienda: "MERCO Garcia", Tostadas: "BAJO", "PDQ 340": "OK", "PDQ 45": "OK", "Cacah Granel": "AGOTADO", Otros: "OK" },
  { tienda: "MERCO Frontera Centro", Tostadas: "BAJO", "PDQ 340": "OK", "PDQ 45": "OK", "Cacah Granel": "AGOTADO", Otros: "BAJO" },
  { tienda: "MERCO Paraje San José", Tostadas: "BAJO", "PDQ 340": "BAJO", "PDQ 45": "OK", "Cacah Granel": "AGOTADO", Otros: "BAJO" },
  { tienda: "MERCO Otilio", Tostadas: "BAJO", "PDQ 340": "BAJO", "PDQ 45": "OK", "Cacah Granel": "AGOTADO", Otros: "SIN VTA" },
  { tienda: "MERCO Acuña", Tostadas: "OK", "PDQ 340": "BAJO", "PDQ 45": "BAJO", "Cacah Granel": "N/A", Otros: "AGOTADO" },
  { tienda: "MERCO Apodaca Centro", Tostadas: "OK", "PDQ 340": "BAJO", "PDQ 45": "OK", "Cacah Granel": "AGOTADO", Otros: "BAJO" },
  { tienda: "MERCO Castaños", Tostadas: "OK", "PDQ 340": "AGOTADO", "PDQ 45": "BAJO", "Cacah Granel": "SIN VTA", Otros: "OK" },
  { tienda: "MERCO Nuevo Repueblo", Tostadas: "BAJO", "PDQ 340": "OK", "PDQ 45": "AGOTADO", "Cacah Granel": "N/A", Otros: "SIN VTA" },
  { tienda: "MERCO Pueblo Nuevo", Tostadas: "BAJO", "PDQ 340": "OK", "PDQ 45": "SIN VTA", "Cacah Granel": "AGOTADO", Otros: "BAJO" },
];

const groups = ["Tostadas", "PDQ 340", "PDQ 45", "Cacah Granel", "Otros"] as const;

function Dot({ estado }: { estado: Estado }) {
  return (
    <div className="flex items-center justify-center">
      <div className={`w-3.5 h-3.5 rounded-full ${estadoStyle[estado].dot}`} title={estado} />
    </div>
  );
}

export default function AbaSlide3AlertasTienda() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Alertas por Tienda — Abarrotes</h2>
      <p className="text-gray-500 text-xs mb-1">{data.length} tiendas con al menos una alerta · Umbral 15 días</p>

      <div className="flex gap-3 mb-2">
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
              <th className="text-left py-1.5 px-3 w-[220px]">Tienda</th>
              {groups.map((g) => (
                <th key={g} className="text-center py-1.5 px-2">{g}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.tienda}
                className={`border-b border-gray-50 transition-colors ${hovered === i ? "bg-gray-50" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <td className="py-1 px-3 text-gray-800 font-medium">{row.tienda}</td>
                {groups.map((g) => (
                  <td key={g} className="py-1 px-2">
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
