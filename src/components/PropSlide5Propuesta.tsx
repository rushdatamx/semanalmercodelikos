"use client";

import SlideWrapper from "./SlideWrapper";

// Proyeccion +25% (base = prom sell-out ult. 3 meses x 3 meses de prueba).
const proyeccion = [
  { cat: "Tostadas", base: "44,400", mes: "+11,100", tres: "+33,300" },
  { cat: "Papa Casera 45g", base: "24,500", mes: "+6,100", tres: "+18,400" },
  { cat: "Papa Casera 340g", base: "2,300", mes: "+580", tres: "+1,700" },
];

const garantias = [
  { icon: "📊", titulo: "DDI sano hoy", texto: "Inventario en piso holgado, no apretado. Hay espacio para el +25% sin riesgo de sobre-stock." },
  { icon: "🔍", titulo: "Monitoreo semanal", texto: "Seguimiento de inventarios de cerca, combinación SKU/tienda. Detectamos cualquier desviación a tiempo." },
  { icon: "🛑", titulo: "Freno inmediato", texto: "Si algún SKU o tienda se dispara, lo bajamos al instante o activamos promo puntual. Riesgo acotado." },
];

export default function PropSlide5Propuesta() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">La propuesta · Ganamos los dos</h2>
      <p className="text-gray-500 text-sm mb-4">
        Prueba de 3 meses: <b className="text-[#B8860B]">+25%</b> en requerimientos por tienda en las 3 categorías · cierre después de Fiestas Patrias
      </p>

      <div className="flex gap-5 flex-1">
        {/* Proyeccion */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Unidades incrementales estimadas</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[10px] text-gray-400 uppercase border-b border-gray-200">
                <th className="text-left pb-2 font-semibold">Categoría</th>
                <th className="text-right pb-2 font-semibold">Base/mes</th>
                <th className="text-right pb-2 font-semibold">+25%/mes</th>
                <th className="text-right pb-2 font-semibold">3 meses</th>
              </tr>
            </thead>
            <tbody>
              {proyeccion.map((p) => (
                <tr key={p.cat} className="border-b border-gray-100">
                  <td className="py-2.5 text-gray-700 font-medium">{p.cat}</td>
                  <td className="py-2.5 text-right text-gray-500">{p.base}</td>
                  <td className="py-2.5 text-right text-[#27AE60] font-semibold">{p.mes}</td>
                  <td className="py-2.5 text-right text-gray-800 font-bold">{p.tres}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-auto pt-4">
            <div className="bg-[#F5A623]/10 border border-[#F5A623]/40 rounded-xl p-4 text-center">
              <p className="text-[11px] text-gray-500 uppercase tracking-wide">Total incremental en 3 meses</p>
              <p className="text-4xl font-bold text-[#B8860B]">~53,000 <span className="text-lg font-normal text-gray-400">uds</span></p>
              <p className="text-[11px] text-gray-500 mt-1">venta adicional para MERCO y para Delikos</p>
            </div>
          </div>
        </div>

        {/* Garantias */}
        <div className="w-[42%] flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Empujamos con cabeza</p>
          {garantias.map((g) => (
            <div key={g.titulo} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex gap-3">
              <span className="text-2xl">{g.icon}</span>
              <div>
                <p className="text-sm font-bold text-gray-800">{g.titulo}</p>
                <p className="text-xs text-gray-500 leading-snug mt-0.5">{g.texto}</p>
              </div>
            </div>
          ))}
          <div className="bg-[#27AE60]/10 border border-[#27AE60]/30 rounded-xl p-3 text-center mt-auto">
            <p className="text-sm font-semibold text-[#1E7E45]">
              Recuperamos la velocidad de venta — y en cualquier momento lo podemos parar.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
