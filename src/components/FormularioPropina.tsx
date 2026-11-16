import React from 'react';
import type { FormularioPropinaProps, PorcentajePropina } from '../types/propina';

const OPCIONES_PROPINA: PorcentajePropina[] = [10, 15, 20];

export const FormularioPropina: React.FC<FormularioPropinaProps> = ({
  montoCuenta,
  porcentajePropina,
  alCambiarMonto,
  alCambiarPorcentaje
}) => {
  const manejarCambioInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    if (Number(valor) < 0) return;
    alCambiarMonto(valor);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div>
        <label htmlFor="cuenta" className="block text-sm font-medium text-black mb-1">
          Total de la cuenta ($)
        </label>
        <input
          id="cuenta"
          type="number"
          step="0.01"
          placeholder="Ej. 45.50"
          value={montoCuenta}
          onChange={manejarCambioInput}
          className="w-full px-4 py-2.5 text-lg border border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition"
        />
      </div>

      <div>
        <span className="block text-sm font-medium text-black mb-2">
          Selecciona el porcentaje de propina
        </span>
        <div className="grid grid-cols-3 gap-3">
          {OPCIONES_PROPINA.map((porcentaje) => {
            const estaSeleccionado = porcentajePropina === porcentaje;
            return (
              <button
                key={porcentaje}
                type="button"
                onClick={() => alCambiarPorcentaje(porcentaje)}
                className={`py-2.5 rounded-lg font-semibold text-sm transition cursor-pointer ${
                  estaSeleccionado
                    ? 'bg-pink-500 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-pink-100'
                }`}
              >
                {porcentaje}%
              </button>
            );
          })}
        </div>
      </div>
    </form>
  );
};