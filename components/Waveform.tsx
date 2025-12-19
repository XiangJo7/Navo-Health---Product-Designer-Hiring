
import React from 'react';

interface WaveformProps {
  className?: string;
  color?: string;
}

export const Waveform: React.FC<WaveformProps> = ({ className = "", color = "#0D9488" }) => {
  return (
    <svg 
      viewBox="0 0 1000 100" 
      preserveAspectRatio="none" 
      className={`w-full h-16 opacity-20 ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M0 50 Q 50 20, 100 50 T 200 50 T 300 50 T 400 30 T 450 80 T 500 50 T 600 50 T 700 70 T 800 50 T 900 20 T 1000 50" 
        stroke={color} 
        strokeWidth="1.5" 
      />
    </svg>
  );
};
