export type PorcentajePropina = 10 | 15 | 20;

export interface FormularioPropinaProps {
  montoCuenta: string;
  porcentajePropina: PorcentajePropina;
  alCambiarMonto: (valor: string) => void;
  alCambiarPorcentaje: (porcentaje: PorcentajePropina) => void;
}

export interface ResultadosPropinaProps {
  porcentajePropina: PorcentajePropina;
  montoPropina: number;
  montoTotal: number;
}