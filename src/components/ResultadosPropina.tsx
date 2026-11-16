import React from 'react';
import type { ResultadosPropinaProps } from '../types/propina';

export const ResultadosPropina: React.FC<ResultadosPropinaProps> = ({
  porcentajePropina,
  montoPropina,
  montoTotal
}) => {
  return (
    <div className="bg-pink-400 text-white rounded-xl p-5 space-y-3">
      <div className="flex justify-between items-center text-black font-semibold">
        <span>Propina ({porcentajePropina}%):</span>
        <span className="text-lg font-semibold text-pink-900">
          ${montoPropina.toFixed(2)}
        </span>
      </div>

      <div className="border-t border-black pt-3 flex justify-between items-center">
        <span className="text-base font-medium">Total a pagar:</span>
        <span className="text-2xl font-bold text-white">
          ${montoTotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
};