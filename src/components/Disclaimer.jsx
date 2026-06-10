import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 bg-dot-grid py-12 px-4 relative">
      <div className="max-w-3xl mx-auto relative mt-8">
        
        <div className="bg-white border-4 border-zinc-900 p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(24,24,27,1)] relative overflow-hidden">
          
          <div className="absolute -right-20 -top-20 opacity-5 rotate-12 pointer-events-none">
            <AlertTriangle size={400} strokeWidth={1} />
          </div>

          <div className="flex items-center gap-4 mb-12 border-b-4 border-zinc-900 pb-6 relative z-10">
            <div className="bg-lime-400 p-3 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
              <AlertTriangle size={32} className="text-zinc-900" strokeWidth={2.5} />
            </div>
            <h2 className="text-5xl md:text-6xl font-black font-['Anton'] uppercase text-zinc-900 tracking-wide mt-2">
              Disclaimer
            </h2>
          </div>

          <div className="space-y-10 relative z-10 text-zinc-800">
            
            <section>
              <h3 className="text-xl font-black uppercase tracking-widest mb-3 bg-zinc-900 text-white inline-block px-3 py-1">
                1. Raw Data Only
              </h3>
              <p className="font-mono text-sm leading-relaxed font-bold text-zinc-600 uppercase">
                Made4Waves provides real-time oceanographic data straight from marine buoys. We don't sugarcoat the info. We don't make miracle forecasts. If you can't read a swell period or wind direction, stay out of the water.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-black uppercase tracking-widest mb-3 bg-red-500 text-white inline-block px-3 py-1">
                2. The Ocean Dictates
              </h3>
              <p className="font-mono text-sm leading-relaxed font-bold text-zinc-600 uppercase">
                The ocean is unpredictable and lethal. Local conditions vary drastically due to tides, sandbanks, and rip currents. The data presented here is purely a mathematical reference. The final judgment is yours when your feet hit the sand.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-black uppercase tracking-widest mb-3 bg-zinc-900 text-white inline-block px-3 py-1">
                3. Zero Liability
              </h3>
              <p className="font-mono text-sm leading-relaxed font-bold text-zinc-600 uppercase">
                We are not responsible for snapped boards, broken leashes, epic wipeouts, or any physical/material damage. You enter the water at your own risk. Know your limits. Respect the locals.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}