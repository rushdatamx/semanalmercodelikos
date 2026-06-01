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
  { producto: "Durito Teja 20PZ", tienda: "MERCO Hidalgo", tipo: "GRANDE", ddi: 0, invActual: 0, pallets: 1, cajas: 0, udsEnviar: 150 },
  { producto: "Tostada Roja 200g", tienda: "MERCO Republica", tipo: "GRANDE", ddi: 0, invActual: 72, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Roja 200g", tienda: "MERCO San Buena", tipo: "CHICA", ddi: 0, invActual: 9, pallets: 0, cajas: 4, udsEnviar: 96 },
  { producto: "Tostada Roja 200g", tienda: "MERCO La Sierrita", tipo: "GRANDE", ddi: 0, invActual: 24, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Roja 200g", tienda: "MERCO Saltillo Centro", tipo: "GRANDE", ddi: 0, invActual: 0, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Apodaca Centro", tipo: "CHICA", ddi: 0, invActual: 49, pallets: 0, cajas: 3, udsEnviar: 72 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Paraje San Jose", tipo: "GRANDE", ddi: 0, invActual: 0, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Paseo Monclova", tipo: "GRANDE", ddi: 0, invActual: 97, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Amarilla 200g", tienda: "MERCO Solidaridad", tipo: "GRANDE", ddi: 0, invActual: 0, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Tostada Roja 200g", tienda: "MERCO Otilio", tipo: "GRANDE", ddi: 0, invActual: 0, pallets: 0, cajas: 6, udsEnviar: 144 },
  { producto: "Durito Teja 20PZ", tienda: "MERCO El Jaral", tipo: "GRANDE", ddi: 0, invActual: 0, pallets: 1, cajas: 0, udsEnviar: 150 },
  { producto: "Durito Teja 20PZ", tienda: "MERCO San Antonio", tipo: "GRANDE", ddi: 0, invActual: 0, pallets: 1, cajas: 0, udsEnviar: 150 },
  { producto: "Durito Teja 20PZ", tienda: "MERCO Israel Cavazos", tipo: "GRANDE", ddi: 0, invActual: 0, pallets: 1, cajas: 0, udsEnviar: 150 },
  { producto: "Durito Teja 20PZ", tienda: "MERCO Los Pilares", tipo: "GRANDE", ddi: 0, invActual: 0, pallets: 1, cajas: 0, udsEnviar: 150 },
  { producto: "Durito Teja 20PZ", tienda: "MERCO Lindavista", tipo: "GRANDE", ddi: 0, invActual: 0, pallets: 1, cajas: 0, udsEnviar: 150 },
];

const TOST_LINEAS = 83;
const TOST_UDS = 14364;

const dataPapas: Sugerido[] = [
  { producto: "Papa Fuego 45g", tienda: "MERCO Aramberri", tipo: "CHICA", ddi: 0, invActual: 41, pallets: 0, cajas: 2, udsEnviar: 90 },
  { producto: "Papa Fuego 45g", tienda: "Manantiales", tipo: "CHICA", ddi: 0, invActual: 0, pallets: 0, cajas: 2, udsEnviar: 90 },
  { producto: "Papa Natural 45g", tienda: "MERCO Aramberri", tipo: "CHICA", ddi: 0, invActual: 77, pallets: 0, cajas: 2, udsEnviar: 90 },
  { producto: "Papa Natural 45g", tienda: "Manantiales", tipo: "CHICA", ddi: 0, invActual: 0, pallets: 0, cajas: 2, udsEnviar: 90 },
  { producto: "Papa Jalapeño 45g", tienda: "MERCO Castaños", tipo: "CHICA", ddi: 0.4, invActual: 2, pallets: 0, cajas: 3, udsEnviar: 135 },
  { producto: "Papa Natural 45g", tienda: "MERCO Castaños", tipo: "CHICA", ddi: 1.1, invActual: 5, pallets: 0, cajas: 3, udsEnviar: 135 },
];

const PAPAS_LINEAS = 6;
const PAPAS_UDS = 630;

export default function AbaSlide4SugeridoCompra() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-8">
      <div className="flex items-center gap-3 mb-1">
        <ShoppingCart className="w-6 h-6 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Sugerido de Compra — Abarrotes</h2>
      </div>
      <p className="text-gray-500 text-xs mb-2">Tostadas (3 SKUs) + Durito Teja + Papa 45g (3 SKUs) · Tostadas/Durito: objetivo 25 dias · Papa 45g: objetivo 15 dias · Boost +30% en CHICA</p>

      <div className="flex gap-4 flex-1 overflow-hidden">
        {/* Tostadas */}
        <div className="flex-1 flex flex-col">
          <p className="text-[10px] font-bold text-gray-600 mb-1">TOSTADAS + DURITO · Top 15 de {TOST_LINEAS} lineas · {TOST_UDS.toLocaleString()} uds</p>
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
        <p className="text-[10px] text-gray-400">Tostadas + Durito Teja + Papa 45g · Inventario al 31-May-2026</p>
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
