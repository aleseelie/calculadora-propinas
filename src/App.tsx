import { useCalculadoraPropina } from './hooks/useCalculadoraPropina';
import { FormularioPropina } from './components/FormularioPropina';
import { ResultadosPropina } from './components/ResultadosPropina';

export function App() {
  const {
    montoCuenta,
    setMontoCuenta,
    porcentajePropina,
    setPorcentajePropina,
    montoPropina,
    montoTotal,
    reiniciarCalculadora
  } = useCalculadoraPropina();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-pink-300 w-full max-w-md rounded-2xl shadow-lg p-6 space-y-6">
        
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black">
            Calculadora de Propinas
          </h1>
        </div>

        <FormularioPropina
          montoCuenta={montoCuenta}
          porcentajePropina={porcentajePropina}
          alCambiarMonto={setMontoCuenta}
          alCambiarPorcentaje={setPorcentajePropina}
        />

        <ResultadosPropina
          porcentajePropina={porcentajePropina}
          montoPropina={montoPropina}
          montoTotal={montoTotal}
        />

        <button
          type="button"
          onClick={reiniciarCalculadora}
          className="w-full py-2 text-sm font-medium text-black hover:text-pink-500 transition cursor-pointer"
        >
          Limpiar calculadora
        </button>

      </div>
    </div>
  );
}

export default App;
