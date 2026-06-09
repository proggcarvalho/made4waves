export default function Marquee() {
  // O texto que vai aparecer na fita
  const texto = "RAW SURF DATA // LIVE CONDITIONS // NO BULLSHIT // ";
  
  // Repetimos o texto algumas vezes para garantir que preenche até os monitores mais largos
  const repeticoes = Array(8).fill(texto);

  return (
    <div className="w-full bg-zinc-900 text-zinc-50 py-2.5 border-b-4 border-zinc-200 flex overflow-hidden relative">
      {/* Primeira fita */}
      <div className="animate-marquee flex whitespace-nowrap">
        {repeticoes.map((frase, i) => (
          <span key={i} className="font-black tracking-widest uppercase text-xs pr-4">
            {frase}
          </span>
        ))}
      </div>
      
      {/* Segunda fita (cópia exata para fazer o loop sem quebras) */}
      <div className="animate-marquee flex whitespace-nowrap absolute top-2.5 left-full">
        {repeticoes.map((frase, i) => (
          <span key={`clone-${i}`} className="font-black tracking-widest uppercase text-xs pr-4">
            {frase}
          </span>
        ))}
      </div>
    </div>
  )
}