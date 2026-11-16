import { useState } from 'react';
import type { PorcentajePropina } from '../types/propina';

export const useCalculadoraPropina = () => {
  const [montoCuenta, setMontoCuenta] = useState<string>('');
  const [porcentajePropina, setPorcentajePropina] = useState<PorcentajePropina>(15);

  const cuentaNumerica = parseFloat(montoCuenta) || 0;
  const montoPropina = (cuentaNumerica * porcentajePropina) / 100;
  const montoTotal = cuentaNumerica + montoPropina;

  const reiniciarCalculadora = () => {
    setMontoCuenta('');
    setPorcentajePropina(15);
  };

  return {
    montoCuenta,
    setMontoCuenta,
    porcentajePropina,
    setPorcentajePropina,
    montoPropina,
    montoTotal,
    reiniciarCalculadora
  };
};