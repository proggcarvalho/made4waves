export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-4 border-zinc-900 pt-16 pb-12 px-4 mt-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Colunas 1 e 2: Marca e Identidade */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl font-black uppercase font-['Anton'] tracking-wide text-zinc-900 mb-2 leading-none">
              M4W
            </h2>
            <p className="text-xs font-bold text-zinc-400 tracking-widest uppercase mb-6">
              Raw Surf Data // PT
            </p>
          </div>
          
          <div>
            <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
              © 2026 // Made4Waves.
            </p>
            <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
              Built for the coast. No bullshit.
            </p>
          </div>
        </div>
        {/* Coluna 3: Navegação Principal */}
        <div className="col-span-1">
          <h3 className="font-black uppercase tracking-widest text-zinc-900 mb-6 text-sm border-b-2 border-zinc-900 pb-2 inline-block">
            Explore
          </h3>
          <ul className="flex flex-col gap-4 text-xs font-black uppercase tracking-wider text-zinc-500">
            <li>
              <a href="#spots" className="hover:text-lime-500 hover:translate-x-1 transition-all flex items-center">
                Spots <span className="ml-2 text-[8px] bg-zinc-900 text-white px-1.5 py-0.5 rounded-sm">Gallery</span>
              </a>
            </li>
            {/* O LINK ATUALIZADO */}
            <li>
              <a href="#contact" className="hover:text-lime-500 hover:translate-x-1 transition-all flex items-center">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Info Técnica */}
        <div className="col-span-1">
          <h3 className="font-black uppercase tracking-widest text-zinc-900 mb-6 text-sm border-b-2 border-zinc-900 pb-2 inline-block">
            Info
          </h3>
          <ul className="flex flex-col gap-4 text-xs font-black uppercase tracking-wider text-zinc-500">
            {/* Aviso Técnico / Terms */}
            <li>
              <a href="#disclaimer" className="hover:text-lime-500 hover:translate-x-1 transition-all flex items-center">
                Disclaimer
              </a>
            </li>
            {/* Créditos da API */}
            <li>
              <a href="https://open-meteo.com/" target="_blank" rel="noreferrer" className="hover:text-lime-500 hover:translate-x-1 transition-all flex items-center">
                Data Source
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}