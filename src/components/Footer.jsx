export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-zinc-900 bg-white py-10 mt-auto">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo minimalista do footer */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-['Anton'] text-4xl tracking-wider uppercase text-zinc-900">M4W</span>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
            © {new Date().getFullYear()} // Built for the coast
          </span>
        </div>
        
        {/* Links falsos de estilo streetwear */}
        <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-zinc-900">
          <a href="#" className="hover:line-through transition-all hover:text-blue-600">Archive</a>
          <a href="#" className="hover:line-through transition-all hover:text-blue-600">Spots</a>
          <a href="#" className="hover:line-through transition-all hover:text-blue-600">Contact</a>
        </div>

      </div>
    </footer>
  )
}