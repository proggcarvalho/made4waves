import { useState, useEffect } from 'react';

export default function Header() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulação de Maré (Ciclo de 6.2 horas entre marés)
  const getTideStatus = () => {
    const time = hora.getTime();
    const cycle = 6.2 * 3600 * 1000;
    const progress = (time % cycle) / cycle;
    
    if (progress < 0.25 || progress > 0.75) return "MARÉ A SUBIR";
    return "MARÉ A VAZAR";
  };

  const horaFormatada = hora.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

  return (
    <header className="w-full bg-zinc-950 text-zinc-50 py-6 border-b-4 border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4">
        
        <h1 className="text-5xl md:text-6xl tracking-wide uppercase font-['Anton'] drop-shadow-md">
          Made4Waves
        </h1>

        <div className="text-center sm:text-right pb-1 flex flex-col items-center sm:items-end gap-1">
          {/* Relógio */}
          <p className="font-mono text-xl font-black text-lime-400 tracking-widest">
            {horaFormatada} <span className="text-zinc-600">WEST</span>
          </p>
          
          {/* Novo Ticker de Maré */}
          <div className="bg-zinc-900 border border-zinc-700 px-3 py-0.5">
            <p className="font-black text-[10px] tracking-[0.2em] uppercase text-zinc-200">
              {getTideStatus()} // CICLO ATIVO
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}