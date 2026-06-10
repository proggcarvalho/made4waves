export default function Marquee() {
  const frase = "RAW SURF DATA // LIVE CONDITIONS // NO BULLSHIT // ";
  // Repetimos a frase várias vezes para encher o ecrã com margem de segurança
  const textoLongo = frase.repeat(10); 

  return (
    <div className="w-full bg-zinc-900 border-y-2 border-zinc-950 py-1.5 overflow-hidden flex whitespace-nowrap relative select-none">
      {/* Bloco 1 */}
      <div className="animate-[marquee_30s_linear_infinite] inline-block shrink-0">
        <span className="text-zinc-200 text-[10px] font-black tracking-[0.2em] uppercase pr-2">
          {textoLongo}
        </span>
      </div>
      {/* Bloco 2 (cópia exata para o loop não quebrar) */}
      <div className="animate-[marquee_30s_linear_infinite] inline-block shrink-0" aria-hidden="true">
        <span className="text-zinc-200 text-[10px] font-black tracking-[0.2em] uppercase pr-2">
          {textoLongo}
        </span>
      </div>
    </div>
  )
}