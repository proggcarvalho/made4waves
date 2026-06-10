import { useState, useEffect } from 'react';
import { obterCondicoes, COORDENADAS_AGRUPADAS } from '../api/openMeteo';
import { Waves, Timer, Wind, MapPin, Navigation, Zap, Thermometer } from 'lucide-react';

const TerminalValue = ({ value, isCarregar, isInt = false }) => {
  const [display, setDisplay] = useState(value || (isInt ? '0' : '0.0'));

  useEffect(() => {
    let intervalo;
    if (isCarregar) {
      intervalo = setInterval(() => {
        const num = Math.random() * 50;
        setDisplay(isInt ? Math.round(num * 10) : num.toFixed(1));
      }, 35);
    } else {
      setDisplay(value);
    }
    return () => clearInterval(intervalo);
  }, [isCarregar, value, isInt]);

  return <>{display}</>;
};

export default function Dashboard() {
  const [regiao, setRegiao] = useState('Praia da Vieira');
  const [condicoes, setCondicoes] = useState(null);
  const [aCarregar, setACarregar] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      setACarregar(true);
      const dados = await obterCondicoes(regiao);
      setCondicoes(dados);
      setACarregar(false);
    }
    carregarDados();
  }, [regiao]);

  const rawPower = condicoes ? Math.round(Math.pow(condicoes.onda, 2) * condicoes.periodo) : 0;
  const powerPercentage = Math.min((rawPower / 150) * 100, 100);
  const powerColor = rawPower > 80 ? 'bg-red-500' : 'bg-lime-400';

  const ondaPraiaMin = condicoes ? (condicoes.onda * 0.55).toFixed(1) : '0.0';
  const ondaPraiaMax = condicoes ? (condicoes.onda * 0.70).toFixed(1) : '0.0';

  return (
    <div className="w-full min-h-screen bg-zinc-50 bg-dot-grid py-12 px-4 relative">
      <div className="max-w-5xl mx-auto relative">
        
        <div className="hidden xl:block absolute -left-16 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-black tracking-[0.3em] uppercase text-zinc-400 whitespace-nowrap pointer-events-none opacity-60">
          // COASTAL DATA ___ WEST LINE ___ 39.74° N
        </div>

        <div className="mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-zinc-900 pb-4">
          <div className="flex items-center gap-3 text-zinc-900 mb-4 sm:mb-0">
            <MapPin size={24} strokeWidth={2.5} />
            <div className="flex items-center gap-2">
              <span className="font-bold uppercase tracking-widest text-sm">Location</span>
              <span className={`w-2 h-2 rounded-full bg-lime-400 ${aCarregar ? 'animate-ping' : 'animate-pulse'}`}></span>
            </div>
          </div>
          
          <select 
            id="regiao"
            value={regiao} 
            onChange={(e) => setRegiao(e.target.value)}
            className="bg-white border-4 border-zinc-900 text-zinc-900 font-black uppercase text-xl px-6 py-2.5 focus:outline-none focus:border-lime-400 hover:bg-zinc-900 hover:text-white cursor-pointer transition-all appearance-none shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] focus:shadow-[4px_4px_0px_0px_#a3e635]"
            style={{ backgroundImage: 'none' }}
          >
            {/* Traduções simples dos distritos */}
            <optgroup label="Leiria District" className="bg-zinc-900 text-zinc-400 font-bold uppercase tracking-widest p-2">
              <option value="Praia da Vieira" className="text-zinc-50 bg-zinc-900">Praia da Vieira</option>
              <option value="Praia do Pedrógão" className="text-zinc-50 bg-zinc-900">Praia do Pedrógão</option>
              <option value="São Pedro de Moel" className="text-zinc-50 bg-zinc-900">São Pedro de Moel</option>
              <option value="Paredes da Vitória" className="text-zinc-50 bg-zinc-900">Paredes da Vitória</option>
              <option value="Nazaré" className="text-zinc-50 bg-zinc-900">Nazaré</option>
              <option value="Peniche" className="text-zinc-50 bg-zinc-900">Peniche</option>
            </optgroup>
            <optgroup label="Lisboa District" className="bg-zinc-900 text-zinc-400 font-bold uppercase tracking-widest p-2">
              <option value="Ericeira" className="text-zinc-50 bg-zinc-900">Ericeira</option>
              <option value="Carcavelos" className="text-zinc-50 bg-zinc-900">Carcavelos</option>
              <option value="Guincho" className="text-zinc-50 bg-zinc-900">Guincho</option>
            </optgroup>
            <optgroup label="Porto District" className="bg-zinc-900 text-zinc-400 font-bold uppercase tracking-widest p-2">
              <option value="Matosinhos" className="text-zinc-50 bg-zinc-900">Matosinhos</option>
              <option value="Leça da Palmeira" className="text-zinc-50 bg-zinc-900">Leça da Palmeira</option>
            </optgroup>
            <optgroup label="Faro District" className="bg-zinc-900 text-zinc-400 font-bold uppercase tracking-widest p-2">
              <option value="Faro" className="text-zinc-50 bg-zinc-900">Faro</option>
              <option value="Sagres" className="text-zinc-50 bg-zinc-900">Sagres</option>
            </optgroup>
          </select>
        </div>

        <div className="flex flex-col gap-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white border-4 border-zinc-900 p-8 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[10px_10px_0px_0px_rgba(24,24,27,1)] transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-zinc-900 text-sm uppercase font-black tracking-widest">Swell</span>
                  <Waves size={32} className={`text-zinc-900 ${aCarregar ? 'opacity-50' : ''}`} strokeWidth={2} />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-zinc-900 tracking-tighter">
                    <TerminalValue value={condicoes?.onda} isCarregar={aCarregar} />
                  </span>
                  <span className="text-xl font-bold text-zinc-500 uppercase">m</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-dashed border-zinc-300">
                <p className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                  Est. Beach: <span className="text-zinc-900 text-xs font-mono">{aCarregar ? '0.0-0.0' : `${ondaPraiaMin}-${ondaPraiaMax}`}m</span>
                </p>
              </div>
            </div>
            
            <div className="bg-white border-4 border-zinc-900 p-8 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[10px_10px_0px_0px_rgba(24,24,27,1)] transition-all">
              <div className="flex justify-between items-start mb-12">
                <span className="text-zinc-900 text-sm uppercase font-black tracking-widest">Period</span>
                <Timer size={32} className={`text-zinc-900 ${aCarregar ? 'opacity-50' : ''}`} strokeWidth={2} />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-6xl font-black text-zinc-900 tracking-tighter">
                  <TerminalValue value={condicoes?.periodo} isCarregar={aCarregar} />
                </span>
                <span className="text-xl font-bold text-zinc-500 uppercase">s</span>
              </div>
            </div>

            <div className="bg-white border-4 border-zinc-900 p-8 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[10px_10px_0px_0px_rgba(24,24,27,1)] transition-all">
              <div className="flex justify-between items-start mb-12">
                <span className="text-zinc-900 text-sm uppercase font-black tracking-widest">Water</span>
                <Thermometer size={32} className={`text-zinc-900 ${aCarregar ? 'opacity-50' : ''}`} strokeWidth={2} />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-6xl font-black text-zinc-900 tracking-tighter">
                  <TerminalValue value={condicoes?.tempAgua} isCarregar={aCarregar} />
                </span>
                <span className="text-xl font-bold text-zinc-500 uppercase">°C</span>
              </div>
            </div>

            <div className="bg-zinc-900 border-4 border-zinc-900 p-8 shadow-[8px_8px_0px_0px_rgba(161,161,170,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[10px_10px_0px_0px_rgba(161,161,170,1)] transition-all">
              <div className="flex justify-between items-start mb-12">
                <span className="text-zinc-50 text-sm uppercase font-black tracking-widest">Wind</span>
                <Wind size={32} className={`text-zinc-50 ${aCarregar ? 'opacity-50' : ''}`} strokeWidth={2} />
              </div>
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-white tracking-tighter">
                    <TerminalValue value={condicoes?.vento} isCarregar={aCarregar} />
                  </span>
                  <span className="text-xl font-bold text-zinc-400 uppercase">km/h</span>
                </div>
                
                <div className="bg-zinc-800 p-3 rounded-full flex items-center justify-center border-2 border-zinc-700">
                  <Navigation 
                    size={24} 
                    className={`text-lime-400 ${aCarregar ? 'animate-spin opacity-50' : 'transition-transform duration-700 ease-out'}`} 
                    strokeWidth={3}
                    style={{ transform: aCarregar ? 'none' : `rotate(${condicoes?.direcaoVento || 0}deg)` }} 
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="w-full bg-white border-4 border-zinc-900 p-6 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] flex flex-col gap-4 mt-2">
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-zinc-900 fill-zinc-900" />
                <span className="text-zinc-900 text-sm uppercase font-black tracking-widest">Raw Power Index</span>
              </div>
              <div className="text-2xl font-black text-zinc-900 tracking-tighter">
                <TerminalValue value={rawPower} isCarregar={aCarregar} isInt={true} /> <span className="text-sm text-zinc-500 tracking-widest">kJ</span>
              </div>
            </div>
            
            <div className="w-full h-6 bg-zinc-200 border-2 border-zinc-900 overflow-hidden relative">
              <div 
                className={`h-full ${aCarregar ? 'bg-zinc-400' : powerColor} transition-all duration-1000 ease-out border-r-2 border-zinc-900`}
                style={{ width: `${aCarregar ? 10 : powerPercentage}%` }}
              >
                <div className="w-full h-full opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}