import { useState, useEffect } from 'react';
import { obterCondicoes } from '../api/openMeteo';

export default function Dashboard() {
  const [regiao, setRegiao] = useState('Peniche');
  const [condicoes, setCondicoes] = useState(null);
  const [aCarregar, setACarregar] = useState(true);

  // Este useEffect corre sempre que a variável 'regiao' muda
  useEffect(() => {
    async function carregarDados() {
      setACarregar(true);
      const dados = await obterCondicoes(regiao);
      setCondicoes(dados);
      setACarregar(false);
    }
    carregarDados();
  }, [regiao]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-4">
      {/* Seletor de Praia */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label htmlFor="regiao" className="text-slate-700 font-semibold">
          Escolher Spot:
        </label>
        <select 
          id="regiao"
          value={regiao} 
          onChange={(e) => setRegiao(e.target.value)}
          className="bg-white border border-slate-300 text-slate-800 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="Nazaré">Nazaré</option>
          <option value="Peniche">Peniche</option>
          <option value="Ericeira">Ericeira</option>
          <option value="Carcavelos">Carcavelos</option>
        </select>
      </div>

      {/* Cartão de Previsão */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Condições atuais em {regiao}
        </h2>
        
        {aCarregar || !condicoes ? (
          <div className="text-center py-10 text-slate-500">
            <p className="animate-pulse">A ler o mar... 🌊</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105">
              <span className="text-4xl mb-2">🌊</span>
              <span className="text-slate-500 text-sm uppercase font-bold tracking-wider">Onda</span>
              <span className="text-3xl font-black text-blue-900 mt-1">{condicoes.onda}m</span>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105">
              <span className="text-4xl mb-2">⏱️</span>
              <span className="text-slate-500 text-sm uppercase font-bold tracking-wider">Período</span>
              <span className="text-3xl font-black text-blue-900 mt-1">{condicoes.periodo}s</span>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105">
              <span className="text-4xl mb-2">💨</span>
              <span className="text-slate-500 text-sm uppercase font-bold tracking-wider">Vento</span>
              <span className="text-3xl font-black text-blue-900 mt-1">{condicoes.vento} km/h</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}