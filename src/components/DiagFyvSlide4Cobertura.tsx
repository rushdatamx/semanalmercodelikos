"use client";

import SlideWrapper from "./SlideWrapper";
import { Table2 } from "lucide-react";

interface Producto {
  nombre: string;
  vtaDiaria: number;
  necesario15d: number;
  ocRecibida: number;
  pctCobertura: number;
  estado: "SIN OC" | "CRITICO" | "BAJO" | "OK";
}

const productos: Producto[] = [
  { nombre: "Minicuadro s/Chile 300g", vtaDiaria: 39, necesario15d: 585, ocRecibida: 360, pctCobertura: 62, estado: "CRITICO" },
  { nombre: "Papa Desh. Natural 170g", vtaDiaria: 37, necesario15d: 555, ocRecibida: 350, pctCobertura: 63, estado: "CRITICO" },
  { nombre: "Rotini s/Chile 300g", vtaDiaria: 30, necesario15d: 450, ocRecibida: 276, pctCobertura: 61, estado: "CRITICO" },
  { nombre: "Cacah. Botanero 454g", vtaDiaria: 28, necesario15d: 420, ocRecibida: 432, pctCobertura: 103, estado: "OK" },
  { nombre: "Minicuadro c/Chile 300g", vtaDiaria: 28, necesario15d: 420, ocRecibida: 300, pctCobertura: 71, estado: "BAJO" },
  { nombre: "Cacah. Cantinero 454g", vtaDiaria: 20, necesario15d: 300, ocRecibida: 324, pctCobertura: 108, estado: "OK" },
  { nombre: "Cacah. Virginia 454g", vtaDiaria: 19, necesario15d: 285, ocRecibida: 312, pctCobertura: 109, estado: "OK" },
  { nombre: "Papa Desh. Fuego 170g", vtaDiaria: 19, necesario15d: 285, ocRecibida: 0, pctCobertura: 0, estado: "SIN OC" },
  { nombre: "Churrito Rojo 454g", vtaDiaria: 17, necesario15d: 255, ocRecibida: 180, pctCobertura: 71, estado: "BAJO" },
  { nombre: "Rotini c/Chile 300g", vtaDiaria: 16, necesario15d: 240, ocRecibida: 168, pctCobertura: 70, estado: "BAJO" },
  { nombre: "Conchitas 454g", vtaDiaria: 14, necesario15d: 210, ocRecibida: 220, pctCobertura: 105, estado: "OK" },
  { nombre: "Cacah. Japonés 454g", vtaDiaria: 12, necesario15d: 180, ocRecibida: 156, pctCobertura: 87, estado: "BAJO" },
];

const estadoConfig: Record<string, { bg: string; text: string; label: string }> = {
  "SIN OC": { bg: "bg-gray-800", text: "text-white", label: "SIN OC" },
  CRITICO: { bg: "bg-red-100", text: "text-red-700", label: "CRÍTICO" },
  BAJO: { bg: "bg-amber-100", text: "text-amber-700", label: "BAJO" },
  OK: { bg: "bg-emerald-100", text: "text-emerald-700", label: "OK" },
};

const resumen = {
  sinOc: productos.filter((p) => p.estado === "SIN OC").length,
  critico: productos.filter((p) => p.estado === "CRITICO").length,
  bajo: productos.filter((p) => p.estado === "BAJO").length,
  ok: productos.filter((p) => p.estado === "OK").length,
};

export default function DiagFyvSlide4Cobertura() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-[#16A085]/10 flex items-center justify-center">
          <Table2 className="w-5 h-5 text-[#16A085]" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Cobertura por producto</h2>
          <p className="text-[10px] text-gray-500">OC promedio vs. necesario para 15 días · Venta diaria Ene-Mar 2026</p>
        </div>
      </div>

      {/* Summary badges */}
      <div className="flex gap-3 mb-3">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-800 text-white text-[10px] font-bold">
          {resumen.sinOc} SIN OC
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-bold">
          {resumen.critico} CRÍTICO
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold">
          {resumen.bajo} BAJO
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
          {resumen.ok} OK
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-1">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-4 py-2 text-gray-500 font-semibold">#</th>
              <th className="text-left px-4 py-2 text-gray-500 font-semibold">Producto</th>
              <th className="text-right px-4 py-2 text-gray-500 font-semibold">Vta/día</th>
              <th className="text-right px-4 py-2 text-gray-500 font-semibold">Necesario 15d</th>
              <th className="text-right px-4 py-2 text-gray-500 font-semibold">OC recibida</th>
              <th className="text-center px-4 py-2 text-gray-500 font-semibold">% Cobertura</th>
              <th className="text-center px-4 py-2 text-gray-500 font-semibold">Estado</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p, i) => {
              const cfg = estadoConfig[p.estado];
              const barWidth = Math.min(p.pctCobertura, 120);
              return (
                <tr key={i} className={`border-b border-gray-100 ${p.estado === "SIN OC" ? "bg-gray-50" : ""}`}>
                  <td className="px-4 py-1.5 text-gray-400 font-bold">{i + 1}</td>
                  <td className="px-4 py-1.5 text-gray-800 font-semibold">{p.nombre}</td>
                  <td className="px-4 py-1.5 text-right text-gray-700">{p.vtaDiaria}</td>
                  <td className="px-4 py-1.5 text-right text-gray-700">{p.necesario15d.toLocaleString()}</td>
                  <td className="px-4 py-1.5 text-right font-bold text-gray-800">
                    {p.ocRecibida === 0 ? "—" : p.ocRecibida.toLocaleString()}
                  </td>
                  <td className="px-4 py-1.5">
                    <div className="flex items-center gap-2 justify-center">
                      <div className="w-16 bg-gray-200 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full"
                          style={{
                            width: `${(barWidth / 120) * 100}%`,
                            backgroundColor:
                              p.pctCobertura === 0
                                ? "#1F2937"
                                : p.pctCobertura < 70
                                ? "#EF4444"
                                : p.pctCobertura < 100
                                ? "#F59E0B"
                                : "#10B981",
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-bold w-8 text-right" style={{
                        color:
                          p.pctCobertura === 0
                            ? "#1F2937"
                            : p.pctCobertura < 70
                            ? "#EF4444"
                            : p.pctCobertura < 100
                            ? "#F59E0B"
                            : "#10B981",
                      }}>
                        {p.pctCobertura}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-1.5 text-center">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${cfg.bg} ${cfg.text}`}>
                      {cfg.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </SlideWrapper>
  );
}
