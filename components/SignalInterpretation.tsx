
import React from 'react';

export const SignalInterpretation: React.FC = () => {
  // A seamless path where the end of 500 matches the start of 0
  const seamlessPath = "M0 50 Q 25 20, 50 50 T 100 50 T 150 70 T 200 50 T 250 30 T 300 50 T 350 80 T 400 50 T 450 40 T 500 50";
  
  return (
    <div className="relative w-full h-40 bg-slate-50/50 rounded-2xl border border-slate-200/60 overflow-hidden group">
      {/* Moving Waveform - Doubled for seamless loop */}
      <div className="absolute inset-0 flex items-center opacity-30">
        <svg viewBox="0 0 1000 100" className="w-[200%] h-24 animate-wave-scroll" preserveAspectRatio="none">
          <path 
            d={`${seamlessPath} T 550 50 T 600 50 T 650 70 T 700 50 T 750 30 T 800 50 T 850 80 T 900 50 T 950 40 T 1000 50`} 
            stroke="#0D9488" 
            strokeWidth="1.5" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Sequential Interpretation Overlays */}
      <div className="absolute inset-0 p-6 flex items-center justify-around">
        
        <div className="animate-[fadeInOut_6s_infinite] bg-white/90 backdrop-blur-sm border border-slate-200 rounded px-3 py-1.5 shadow-sm">
          <div className="flex items-center gap-2 mb-0.5">
            <div className="w-1 h-1 rounded-full bg-teal-500"></div>
            <span className="text-[9px] mono uppercase tracking-wider text-slate-400">Baseline</span>
          </div>
          <span className="text-xs font-semibold text-slate-700">142 BPM</span>
        </div>

        <div className="animate-[fadeInOut_6s_infinite_2s] opacity-0 bg-white/90 backdrop-blur-sm border border-slate-200 rounded px-3 py-1.5 shadow-sm translate-y-4">
          <div className="flex items-center gap-2 mb-0.5">
            <div className="w-1 h-1 rounded-full bg-orange-400"></div>
            <span className="text-[9px] mono uppercase tracking-wider text-slate-400">Event</span>
          </div>
          <span className="text-xs font-semibold text-slate-700">Uterine Activity</span>
        </div>

        <div className="animate-[fadeInOut_6s_infinite_4s] opacity-0 bg-teal-600 border border-teal-500 rounded px-4 py-2 shadow-lg shadow-teal-500/10">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[8px] mono uppercase tracking-widest text-teal-100">Insight</span>
          </div>
          <span className="text-xs font-medium text-white">Normal Variability</span>
        </div>

      </div>
    </div>
  );
};
