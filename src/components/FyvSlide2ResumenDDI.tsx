"use client";

import SlideWrapper from "./SlideWrapper";
import { Package } from "lucide-react";

type Status = "AGOTADO" | "BAJO" | "OK";

interface Producto {
  nombre: string;
  grupo: string;
  ddi: number;
  inv: number;
  agotadas: number;
  bajoUmbral: number;
  status: Status;
}

const productos: Producto[] = [
  { nombre: "Frito Conchitas 454g", grupo: "Fritos", ddi: 235.1, inv: 541, agotadas: 1, bajoUmbral: 1, status: "OK" },
  { nombre: "Frito Churrito Rojo 454g", grupo: "Fritos", ddi: 118.1, inv: 616, agotadas: 1, bajoUmbral: 1, status: "OK" },
  { nombre: "Rotini Con Chile 300g", grupo: "Rotinis", ddi: 272.8, inv: 615, agotadas: 0, bajoUmbral: 0, status: "OK" },
  { nombre: "Rotini Sin Chile 300g", grupo: "Rotinis", ddi: 52.3, inv: 667, agotadas: 0, bajoUmbral: 2, status: "BAJO" },
  { nombre: "Minicuadro Con Chile 300g", grupo: "Minicuadros", ddi: 450.3, inv: 936, agotadas: 0, bajoUmbral: 0, status: "OK" },
  { nombre: "Minicuadro Sin Chile 300g", grupo: "Minicuadros", ddi: 96.1, inv: 817, agotadas: 2, bajoUmbral: 4, status: "AGOTADO" },
  { nombre: "Cacahuate Botanero 454g", grupo: "Cacah MM", ddi: 97.1, inv: 868, agotadas: 0, bajoUmbral: 1, status: "OK" },
  { nombre: "Cacahuate Virginia 454g", grupo: "Cacah MM", ddi: 237.9, inv: 842, agotadas: 2, bajoUmbral: 2, status: "AGOTADO" },
  { nombre: "Cacahuate Cantinero 454g", grupo: "Cacah MM", ddi: 127.7, inv: 869, agotadas: 1, bajoUmbral: 1, status: "OK" },
  { nombre: "Cacahuate Japonés 454g", grupo: "Cacah MM", ddi: 283.4, inv: 863, agotadas: 0, bajoUmbral: 1, status: "OK" },
  { nombre: "Papa Deshid. Natural 170g", grupo: "Papas Desh", ddi: 73.6, inv: 706, agotadas: 1, bajoUmbral: 0, status: "OK" },
  { nombre: "Papa Deshid. Fuego 170g", grupo: "Papas Desh", ddi: 215.6, inv: 1099, agotadas: 0, bajoUmbral: 0, status: "OK" },
];

const statusBadge: Record<Status, string> = {
  AGOTADO: "bg-red-100 text-red-700",
  BAJO: "bg-yellow-100 text-yellow-700",
  OK: "bg-green-100 text-green-700",
};

const grupoColor: Record<string, string> = {
  Fritos: "#E74C3C",
  Rotinis: "#F5A623",
  Minicuadros: "#3B82F6",
  "Cacah MM": "#8B5CF6",
  "Papas Desh": "#EC4899",
};

const fmtDDI = (v: number) => (v > 999 ? `${(v / 1000).toFixed(1)}K` : v.toFixed(0));

export default function FyvSlide2ResumenDDI() {
  const totalAgotadas = productos.reduce((s, p) => s + p.agotadas, 0);
  const totalBajo = productos.reduce((s, p) => s + p.bajoUmbral, 0);
  const totalInv = productos.reduce((s, p) => s + p.inv, 0);

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <div className="flex items-center gap-3 mb-1">
        <Package className="w-6 h-6 text-[#27AE60]" />
        <h2 className="text-2xl font-bold text-gray-800">Resumen DDI — Frutas y Verduras</h2>
      </div>
      <p className="text-gray-500 text-xs mb-3">12 productos · Umbral: 15 días · Inventario al 22 Feb 2026</p>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase sticky top-0">
              <th className="text-left py-2 px-3">Producto</th>
              <th className="text-center py-2 px-2 w-20">Grupo</th>
              <th className="text-right py-2 px-2 w-14">DDI</th>
              <th className="text-right py-2 px-2 w-16">Inv Uds</th>
              <th className="text-center py-2 px-2 w-14">Agotadas</th>
              <th className="text-center py-2 px-2 w-16">Bajo 15d</th>
              <th className="text-center py-2 px-2 w-16">Status</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-1.5 px-3 text-gray-800 font-medium">{p.nombre}</td>
                <td className="py-1.5 px-2 text-center">
                  <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold text-white" style={{ backgroundColor: grupoColor[p.grupo] }}>
                    {p.grupo}
                  </span>
                </td>
                <td className={`py-1.5 px-2 text-right font-bold ${p.ddi < 15 ? "text-red-600" : p.ddi < 30 ? "text-yellow-600" : "text-gray-700"}`}>
                  {fmtDDI(p.ddi)}
                </td>
                <td className="py-1.5 px-2 text-right text-gray-700">{p.inv.toLocaleString()}</td>
                <td className="py-1.5 px-2 text-center">
                  {p.agotadas > 0 ? <span className="text-red-600 font-bold">{p.agotadas}</span> : <span className="text-gray-300">—</span>}
                </td>
                <td className="py-1.5 px-2 text-center">
                  {p.bajoUmbral > 0 ? <span className="text-yellow-600 font-bold">{p.bajoUmbral}</span> : <span className="text-gray-300">—</span>}
                </td>
                <td className="py-1.5 px-2 text-center">
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${statusBadge[p.status]}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2.5 text-center">
          <p className="text-[9px] text-gray-400">Productos</p>
          <p className="text-lg font-bold text-[#27AE60]">12</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2.5 text-center">
          <p className="text-[9px] text-gray-400">Inv Total</p>
          <p className="text-lg font-bold text-gray-800">{totalInv.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2.5 text-center">
          <p className="text-[9px] text-gray-400">Combos Agotados</p>
          <p className="text-lg font-bold text-red-600">{totalAgotadas}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2.5 text-center">
          <p className="text-[9px] text-gray-400">Combos Bajo 15d</p>
          <p className="text-lg font-bold text-yellow-600">{totalBajo}</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
