"use client";

import SlideWrapper from "./SlideWrapper";
import { ShoppingCart } from "lucide-react";

interface Sugerido {
  producto: string;
  tienda: string;
  tipo: string;
  ddi: number;
  invActual: number;
  pallets: number;
  cajas: number;
  udsEnviar: number;
}

const dataTostadas: Sugerido[] = [
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Republica", tipo: "GRANDE", ddi: 0, invActual: 0, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Castaños", tipo: "CHICA", ddi: 0, invActual: 0, pallets: 0, cajas: 5, udsEnviar: 120 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Aramberri", tipo: "CHICA", ddi: 2.1, invActual: 18, pallets: 0, cajas: 5, udsEnviar: 120 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Libramiento", tipo: "CHICA", ddi: 3.2, invActual: 17, pallets: 0, cajas: 4, udsEnviar: 96 },
  { producto: "Tostada Amarilla 200g", tienda: "Sta Elena Zuazua", tipo: "GRANDE", ddi: 3.5, invActual: 17, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO San Antonio", tipo: "GRANDE", ddi: 4.2, invActual: 21, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Nvo Repueblo", tipo: "CHICA", ddi: 4.3, invActual: 23, pallets: 0, cajas: 3, udsEnviar: 72 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Frontera Centro", tipo: "GRANDE", ddi: 4.6, invActual: 21, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Ramos Arizpe", tipo: "GRANDE", ddi: 5.0, invActual: 14, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO La Sierrita", tipo: "GRANDE", ddi: 5.2, invActual: 24, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Parras", tipo: "CHICA", ddi: 5.3, invActual: 11, pallets: 0, cajas: 2, udsEnviar: 48 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Garcia", tipo: "GRANDE", ddi: 7.6, invActual: 58, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Rosita", tipo: "GRANDE", ddi: 12.3, invActual: 71, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "Manantiales", tipo: "CHICA", ddi: 12.9, invActual: 51, pallets: 0, cajas: 1, udsEnviar: 24 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Piedras Negras", tipo: "GRANDE", ddi: 13.9, invActual: 43, pallets: 0, cajas: 6, udsEnviar: 144 },
];

const TOST_LINEAS = 36;
const TOST_UDS = 5256;

const dataPapas: Sugerido[] = [
  { producto: "Papa Fuego 45g", tienda: "MERCO Israel Cavazos", tipo: "GRANDE", ddi: 0, invActual: 0, pallets: 0, cajas: 0, udsEnviar: 420 },
  { producto: "Papa Fuego 45g", tienda: "MERCO Paraje San Jose", tipo: "GRANDE", ddi: 0, invActual: 197, pallets: 0, cajas: 0, udsEnviar: 420 },
  { producto: "Papa Fuego 45g", tienda: "MERCO San Antonio", tipo: "GRANDE", ddi: 0.4, invActual: 1, pallets: 0, cajas: 0, udsEnviar: 420 },
  { producto: "Papa Fuego 45g", tienda: "MERCO Libramiento", tipo: "CHICA", ddi: 0.6, invActual: 4, pallets: 0, cajas: 3, udsEnviar: 135 },
  { producto: "Papa Fuego 45g", tienda: "MERCO Republica", tipo: "GRANDE", ddi: 1.0, invActual: 2, pallets: 0, cajas: 0, udsEnviar: 420 },
  { producto: "Papa Fuego 45g", tienda: "MERCO Pueblo Nuevo", tipo: "GRANDE", ddi: 1.6, invActual: 3, pallets: 0, cajas: 0, udsEnviar: 420 },
  { producto: "Papa Fuego 45g", tienda: "MERCO Hidalgo", tipo: "GRANDE", ddi: 2.3, invActual: 2, pallets: 0, cajas: 0, udsEnviar: 420 },
  { producto: "Papa Fuego 45g", tienda: "MERCO Parras", tipo: "CHICA", ddi: 3.0, invActual: 3, pallets: 0, cajas: 1, udsEnviar: 45 },
  { producto: "Papa Fuego 45g", tienda: "MERCO Acuña", tipo: "GRANDE", ddi: 5.8, invActual: 45, pallets: 0, cajas: 0, udsEnviar: 420 },
  { producto: "Papa Fuego 45g", tienda: "MERCO Colinas", tipo: "GRANDE", ddi: 8.4, invActual: 39, pallets: 0, cajas: 0, udsEnviar: 420 },
];

const PAPAS_LINEAS = 27;
const PAPAS_UDS = 9645;

export default function AbaSlide4SugeridoCompra() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <div className="flex items-center gap-3 mb-1">
        <ShoppingCart className="w-6 h-6 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Sugerido de Compra — Abarrotes</h2>
      </div>
      <p className="text-gray-500 text-xs mb-2">Tostadas (3 SKUs) + Papa 45g (3 SKUs) con DDI &lt; 15 dias · Cobertura objetivo: 15 dias</p>

      <div className="flex gap-4 flex-1 overflow-hidden">
        {/* Tostadas */}
        <div className="flex-1 flex flex-col">
          <p className="text-[10px] font-bold text-gray-600 mb-1">TOSTADAS · Top 15 de {TOST_LINEAS} lineas · {TOST_UDS.toLocaleString()} uds</p>
          <div className="flex-1 overflow-auto rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-gray-100 text-gray-500 text-[9px] uppercase sticky top-0">
                  <th className="text-left py-1 px-2">Producto</th>
                  <th className="text-left py-1 px-1">Tienda</th>
                  <th className="text-center py-1 px-1 w-10">Tipo</th>
                  <th className="text-right py-1 px-1 w-8">DDI</th>
                  <th className="text-right py-1 px-1 w-8">Pal</th>
                  <th className="text-right py-1 px-1 w-8">Caj</th>
                  <th className="text-right py-1 px-1 w-12">Uds</th>
                </tr>
              </thead>
              <tbody>
                {dataTostadas.map((r, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-0.5 px-2 text-gray-800 font-medium">{r.producto}</td>
                    <td className="py-0.5 px-1 text-gray-600">{r.tienda}</td>
                    <td className="py-0.5 px-1 text-center">
                      <span className={`text-[8px] px-1 py-0.5 rounded font-semibold ${r.tipo === "GRANDE" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"}`}>
                        {r.tipo === "GRANDE" ? "G" : "CH"}
                      </span>
                    </td>
                    <td className="py-0.5 px-1 text-right">
                      <span className={`font-bold ${r.ddi === 0 ? "text-red-600" : "text-yellow-600"}`}>
                        {r.ddi === 0 ? "AGT" : r.ddi.toFixed(1)}
                      </span>
                    </td>
                    <td className="py-0.5 px-1 text-right text-gray-500">{r.pallets === 0 ? "-" : r.pallets}</td>
                    <td className="py-0.5 px-1 text-right text-gray-500">{r.cajas === 0 ? "-" : r.cajas}</td>
                    <td className="py-0.5 px-1 text-right text-gray-800 font-bold">{r.udsEnviar.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Papas 45g */}
        <div className="w-[380px] flex flex-col">
          <p className="text-[10px] font-bold text-gray-600 mb-1">PAPA 45g · Top 10 de {PAPAS_LINEAS} lineas · {PAPAS_UDS.toLocaleString()} uds</p>
          <div className="flex-1 overflow-auto rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-gray-100 text-gray-500 text-[9px] uppercase sticky top-0">
                  <th className="text-left py-1 px-2">Producto</th>
                  <th className="text-left py-1 px-1">Tienda</th>
                  <th className="text-center py-1 px-1 w-10">Tipo</th>
                  <th className="text-right py-1 px-1 w-8">DDI</th>
                  <th className="text-right py-1 px-1 w-12">Uds</th>
                </tr>
              </thead>
              <tbody>
                {dataPapas.map((r, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-0.5 px-2 text-gray-800 font-medium">{r.producto}</td>
                    <td className="py-0.5 px-1 text-gray-600">{r.tienda}</td>
                    <td className="py-0.5 px-1 text-center">
                      <span className={`text-[8px] px-1 py-0.5 rounded font-semibold ${r.tipo === "GRANDE" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"}`}>
                        {r.tipo === "GRANDE" ? "G" : "CH"}
                      </span>
                    </td>
                    <td className="py-0.5 px-1 text-right">
                      <span className={`font-bold ${r.ddi === 0 ? "text-red-600" : "text-yellow-600"}`}>
                        {r.ddi === 0 ? "AGT" : r.ddi.toFixed(1)}
                      </span>
                    </td>
                    <td className="py-0.5 px-1 text-right text-gray-800 font-bold">{r.udsEnviar.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <p className="text-[10px] text-gray-400">Tostadas + Papa 45g · Inventario al 12-Abr-2026</p>
        <div className="flex gap-6">
          <div className="text-right">
            <p className="text-gray-500 text-[10px]">Tostadas</p>
            <p className="text-lg font-bold text-[#E74C3C]">{TOST_UDS.toLocaleString()} uds</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-[10px]">Papa 45g</p>
            <p className="text-lg font-bold text-[#3B82F6]">{PAPAS_UDS.toLocaleString()} uds</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-[10px]">Total sugerido</p>
            <p className="text-lg font-bold text-[#F5A623]">{(TOST_UDS + PAPAS_UDS).toLocaleString()} uds</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
