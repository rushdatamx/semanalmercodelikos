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
  { nombre: "Tostada Roja 70PZ", grupo: "Tostadas", ddi: 22.1, inv: 14229, agotadas: 0, bajoUmbral: 17, status: "OK" },
  { nombre: "Tostada Roja 200g", grupo: "Tostadas", ddi: 51.0, inv: 6835, agotadas: 2, bajoUmbral: 5, status: "OK" },
  { nombre: "Tostada Amarilla 200g", grupo: "Tostadas", ddi: 54.9, inv: 3945, agotadas: 4, bajoUmbral: 9, status: "AGOTADO" },
  { nombre: "Papa Natural 45g", grupo: "PDQ 45", ddi: 209.3, inv: 5939, agotadas: 9, bajoUmbral: 7, status: "AGOTADO" },
  { nombre: "Papa Fuego 45g", grupo: "PDQ 45", ddi: 1668.1, inv: 5875, agotadas: 5, bajoUmbral: 5, status: "AGOTADO" },
  { nombre: "Papa Jalapeño 45g", grupo: "PDQ 45", ddi: 1864.0, inv: 5420, agotadas: 7, bajoUmbral: 2, status: "AGOTADO" },
  { nombre: "Papa Sal 340g", grupo: "PDQ 340", ddi: 149.7, inv: 624, agotadas: 3, bajoUmbral: 5, status: "AGOTADO" },
  { nombre: "Papa Fuego 340g", grupo: "PDQ 340", ddi: 179.6, inv: 1041, agotadas: 4, bajoUmbral: 3, status: "AGOTADO" },
  { nombre: "Papa Jalapeño 340g", grupo: "PDQ 340", ddi: 129.8, inv: 607, agotadas: 4, bajoUmbral: 3, status: "AGOTADO" },
  { nombre: "Cacahuate Cantinero 1kg", grupo: "Cacahuates", ddi: 373.6, inv: 653, agotadas: 10, bajoUmbral: 3, status: "AGOTADO" },
  { nombre: "Cacahuate Mixto 1kg", grupo: "Cacahuates", ddi: 150.1, inv: 842, agotadas: 7, bajoUmbral: 6, status: "AGOTADO" },
  { nombre: "Cacahuate Salado 1kg", grupo: "Cacahuates", ddi: 101.5, inv: 129, agotadas: 7, bajoUmbral: 1, status: "AGOTADO" },
  { nombre: "Durito Teja 20pzs", grupo: "Otros", ddi: 60.9, inv: 1773, agotadas: 0, bajoUmbral: 11, status: "BAJO" },
  { nombre: "Cheto Mix 400g", grupo: "Otros", ddi: 122.5, inv: 356, agotadas: 4, bajoUmbral: 6, status: "AGOTADO" },
  { nombre: "Minicuadro Natural 400g", grupo: "Otros", ddi: 112.8, inv: 394, agotadas: 2, bajoUmbral: 5, status: "BAJO" },
  { nombre: "Rueda Natural 400g", grupo: "Otros", ddi: 76.5, inv: 407, agotadas: 1, bajoUmbral: 6, status: "BAJO" },
  { nombre: "Palomitas Elote 25g", grupo: "4Buddies", ddi: 475.2, inv: 1384, agotadas: 0, bajoUmbral: 0, status: "OK" },
  { nombre: "Palomitas Cheddar 25g", grupo: "4Buddies", ddi: 678.2, inv: 1380, agotadas: 0, bajoUmbral: 0, status: "OK" },
  { nombre: "Palomitas Classic 25g", grupo: "4Buddies", ddi: 517.6, inv: 1334, agotadas: 0, bajoUmbral: 0, status: "OK" },
  { nombre: "Rodajitas 4Buddies 30g", grupo: "4Buddies", ddi: 480.8, inv: 1444, agotadas: 4, bajoUmbral: 2, status: "AGOTADO" },
];

const statusBadge: Record<Status, string> = {
  AGOTADO: "bg-red-100 text-red-700",
  BAJO: "bg-yellow-100 text-yellow-700",
  OK: "bg-green-100 text-green-700",
};

const grupoColor: Record<string, string> = {
  Tostadas: "#E74C3C",
  "PDQ 45": "#3B82F6",
  "PDQ 340": "#F5A623",
  Cacahuates: "#8B5CF6",
  Otros: "#6B7280",
  "4Buddies": "#EC4899",
};

const fmtDDI = (v: number) => (v > 999 ? `${(v / 1000).toFixed(1)}K` : v.toFixed(0));

export default function AbaSlide2ResumenDDI() {
  const totalAgotadas = productos.reduce((s, p) => s + p.agotadas, 0);
  const totalBajo = productos.reduce((s, p) => s + p.bajoUmbral, 0);
  const totalInv = productos.reduce((s, p) => s + p.inv, 0);

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <div className="flex items-center gap-3 mb-1">
        <Package className="w-6 h-6 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Resumen DDI — Abarrotes</h2>
      </div>
      <p className="text-gray-500 text-xs mb-2">20 productos · Umbral: 15 días · Inventario al 22 Feb 2026</p>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-[10px] uppercase sticky top-0">
              <th className="text-left py-1.5 px-3">Producto</th>
              <th className="text-center py-1.5 px-2 w-16">Grupo</th>
              <th className="text-right py-1.5 px-2 w-14">DDI</th>
              <th className="text-right py-1.5 px-2 w-16">Inv Uds</th>
              <th className="text-center py-1.5 px-2 w-14">Agotadas</th>
              <th className="text-center py-1.5 px-2 w-16">Bajo 15d</th>
              <th className="text-center py-1.5 px-2 w-16">Status</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-1 px-3 text-gray-800 font-medium">{p.nombre}</td>
                <td className="py-1 px-2 text-center">
                  <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold text-white" style={{ backgroundColor: grupoColor[p.grupo] }}>
                    {p.grupo}
                  </span>
                </td>
                <td className={`py-1 px-2 text-right font-bold ${p.ddi < 15 ? "text-red-600" : p.ddi < 30 ? "text-yellow-600" : "text-gray-700"}`}>
                  {fmtDDI(p.ddi)}
                </td>
                <td className="py-1 px-2 text-right text-gray-700">{p.inv.toLocaleString()}</td>
                <td className="py-1 px-2 text-center">
                  {p.agotadas > 0 ? <span className="text-red-600 font-bold">{p.agotadas}</span> : <span className="text-gray-300">—</span>}
                </td>
                <td className="py-1 px-2 text-center">
                  {p.bajoUmbral > 0 ? <span className="text-yellow-600 font-bold">{p.bajoUmbral}</span> : <span className="text-gray-300">—</span>}
                </td>
                <td className="py-1 px-2 text-center">
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${statusBadge[p.status]}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2 grid grid-cols-4 gap-3">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2 text-center">
          <p className="text-[9px] text-gray-400">Productos</p>
          <p className="text-lg font-bold text-[#F5A623]">20</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2 text-center">
          <p className="text-[9px] text-gray-400">Inv Total</p>
          <p className="text-lg font-bold text-gray-800">{totalInv.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2 text-center">
          <p className="text-[9px] text-gray-400">Combos Agotados</p>
          <p className="text-lg font-bold text-red-600">{totalAgotadas}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2 text-center">
          <p className="text-[9px] text-gray-400">Combos Bajo 15d</p>
          <p className="text-lg font-bold text-yellow-600">{totalBajo}</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
