import { useState, useEffect } from 'react';
import { MapPin, Camera, X } from 'lucide-react';

export default function Spots() {
  // Estado para controlar qual a foto aberta em ecrã inteiro
  const [activeSpot, setActiveSpot] = useState(null);

  const baseUrl = import.meta.env.BASE_URL;

  const praias = [
    { 
      nome: "Nazaré", 
      desc: "The Canyon // Big Wave", 
      img: `${baseUrl}spots/Naza.JPEG` 
    },
    { 
      nome: "Ericeira", 
      desc: "Ribeira d'Ilhas // Point Break", 
      img: `${baseUrl}spots/Ribeira.jpeg` 
    },
    { 
      nome: "Peniche", 
      desc: "Supertubos // Beach Break", 
      img: `${baseUrl}spots/Super.JPEG` 
    },
    { 
      nome: "S.P. Moel", 
      desc: "West Point // Reef Break", 
      img: `${baseUrl}spots/SP.JPEG` 
    }
  ];

  // Atalho de teclado: Se carregar no 'Escape', fecha o Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveSpot(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-50 bg-dot-grid py-12 px-4 relative">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Cabeçalho */}
        <div className="mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-zinc-900 pb-4">
          <div className="flex items-center gap-3 text-zinc-900 mb-4 sm:mb-0">
            <Camera size={24} strokeWidth={2.5} />
            <div className="flex items-center gap-2">
              <span className="font-bold uppercase tracking-widest text-sm">Spots Gallery</span>
            </div>
          </div>
        </div>

        {/* Grelha de Fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {praias.map((spot, i) => (
            <div 
              key={i} 
              onClick={() => setActiveSpot(spot)} // Ativa o Lightbox ao clicar
              className="bg-white border-4 border-zinc-900 p-4 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#a3e635] transition-all group cursor-pointer"
            >
              <div className="w-full h-72 border-4 border-zinc-900 overflow-hidden relative mb-4">
                <img 
                  src={spot.img} 
                  alt={spot.nome} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                />
                <div className="absolute top-2 left-2 bg-zinc-900 text-lime-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest border-2 border-zinc-950">
                  {spot.desc}
                </div>
              </div>
              
              <div className="flex justify-between items-end px-1">
                <h3 className="text-4xl font-black font-['Anton'] uppercase text-zinc-900 tracking-wide">{spot.nome}</h3>
                <MapPin size={24} className="text-zinc-300 group-hover:text-zinc-900 transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MODAL / LIGHTBOX BRUTALISTA */}
      {activeSpot && (
        <div 
          className="fixed inset-0 bg-zinc-950/95 z-50 flex flex-col justify-center items-center p-4 cursor-zoom-out animate-fadeIn"
          onClick={() => setActiveSpot(null)} // Fecha ao clicar em qualquer lado do fundo
        >
          {/* Contentor da Imagem */}
          <div 
            className="w-full max-w-4xl bg-white border-4 border-zinc-900 p-3 shadow-[12px_12px_0px_0px_#a3e635] relative cursor-default"
            onClick={(e) => e.stopPropagation()} // Impede que feche ao clicar na própria imagem
          >
            {/* Botão de Fechar Agressivo */}
            <button 
              onClick={() => setActiveSpot(null)}
              className="absolute -top-6 -right-6 bg-lime-400 text-zinc-900 border-4 border-zinc-900 p-2 hover:bg-zinc-900 hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] z-50 cursor-pointer"
            >
              <X size={24} strokeWidth={3} />
            </button>

            {/* Imagem em Alta Resolução */}
            <div className="w-full border-2 border-zinc-900 overflow-hidden bg-zinc-900">
              <img 
                src={activeSpot.img} 
                alt={activeSpot.nome} 
                // Mudámos para h-[60vh] e object-cover para preencher a moldura sempre
                className="w-full h-[60vh] object-cover object-center"
              />
            </div>

            {/* Legenda Técnica */}
            <div className="mt-4 flex justify-between items-center border-t-2 border-zinc-900 pt-3 px-1">
              <h4 className="text-3xl font-black font-['Anton'] uppercase text-zinc-900 tracking-wider">
                {activeSpot.nome}
              </h4>
              <span className="font-mono text-xs font-black uppercase text-zinc-400 tracking-widest">
                {activeSpot.desc}
              </span>
            </div>
          </div>

          {/* Dica de Teclado */}
          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mt-6 pointer-events-none">
            [ Press ESC or Click anywhere to dismiss ]
          </p>
        </div>
      )}
    </div>
  );
}