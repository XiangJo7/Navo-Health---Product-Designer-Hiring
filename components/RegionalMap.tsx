
import React from 'react';

export const RegionalMap: React.FC = () => {
  return (
    <div className="relative w-full max-w-xs mx-auto opacity-40 hover:opacity-100 transition-opacity duration-700">
      <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Peninsular Malaysia (Simplified) */}
        <path 
          d="M40 20 C 50 15, 65 30, 70 45 C 75 60, 60 85, 55 95 L 45 98 L 35 80 L 30 60 Z" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-slate-400"
        />
        {/* East Malaysia (Simplified) */}
        <path 
          d="M120 40 C 140 35, 160 40, 175 50 C 185 60, 160 80, 140 75 C 120 70, 110 50, 120 40Z" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-slate-400"
        />
        {/* Singapore (A precise dot) */}
        <circle cx="56" cy="99" r="2.5" fill="#0D9488" className="animate-pulse" />
        
        {/* Connection/Highlight labels */}
        <text x="75" y="45" className="text-[6px] font-bold fill-slate-400 uppercase tracking-widest">Malaysia</text>
        <text x="62" y="105" className="text-[6px] font-bold fill-teal-600 uppercase tracking-widest">Singapore</text>
      </svg>
    </div>
  );
};
