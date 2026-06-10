import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 bg-dot-grid py-12 px-4 relative">
      <div className="max-w-3xl mx-auto relative mt-8">
        
        {/* Cabeçalho */}
        <div className="mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-zinc-900 pb-4">
          <div className="flex items-center gap-3 text-zinc-900 mb-4 sm:mb-0">
            <Mail size={24} strokeWidth={2.5} />
            <div className="flex items-center gap-2">
              <span className="font-bold uppercase tracking-widest text-sm">Comms // Contact</span>
            </div>
          </div>
        </div>

        {/* Bloco do Formulário */}
        <div className="bg-white border-4 border-zinc-900 p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(24,24,27,1)] relative">
          <h2 className="text-5xl md:text-6xl font-black font-['Anton'] uppercase text-zinc-900 tracking-wide mb-8">
            Send Data
          </h2>

          {/* O action "mailto:" faz com que ao clicar em Transmitir, abra o email com a info */}
          <form action="mailto:proggcarvalho@gmail.com" method="POST" encType="text/plain" className="space-y-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Identification</label>
              <input 
                type="text" 
                name="Name" 
                placeholder="YOUR NAME" 
                className="w-full bg-zinc-100 border-2 border-zinc-900 p-4 font-mono text-zinc-900 focus:outline-none focus:border-lime-400 focus:bg-white transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Transmission</label>
              <textarea 
                name="Message" 
                rows="5" 
                placeholder="YOUR MESSAGE..." 
                className="w-full bg-zinc-100 border-2 border-zinc-900 p-4 font-mono text-zinc-900 focus:outline-none focus:border-lime-400 focus:bg-white transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-lime-400 border-4 border-zinc-900 p-4 flex items-center justify-center gap-3 hover:bg-zinc-900 hover:text-lime-400 transition-colors group shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_rgba(24,24,27,1)]"
            >
              <span className="font-black uppercase tracking-widest text-lg">Transmit</span>
              <Send size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t-2 border-dashed border-zinc-300">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest text-center">
              Or ping directly: <a href="mailto:teu.email@dominio.com" className="text-zinc-900 font-bold hover:text-lime-500">proggcarvalho@gmail.com</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}