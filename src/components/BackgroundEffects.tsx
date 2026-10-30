import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Deep Obsidian Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070709] via-[#09090D] to-[#050507]" />

      {/* 2. Ambient Orange Radial Glows */}
      {/* Top Left Ambient for Brand Identity */}
      <div 
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full orange-glow opacity-30" 
      />
      
      {/* Desktop Hero Accent (Right side glow for the cutout) */}
      <div 
        className="hidden lg:block absolute top-1/4 -right-24 w-[600px] h-[600px] rounded-full orange-glow opacity-35" 
      />

      {/* Mobile Subtle Center Glow */}
      <div 
        className="lg:hidden absolute top-20 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full orange-glow opacity-25" 
      />

      {/* 3. Organic Fluid Dark Drapery / Wave SVG (Estilo Igor Rodrigues) */}
      <svg 
        className="absolute top-0 right-0 w-[800px] h-full opacity-[0.06] hidden lg:block"
        viewBox="0 0 800 1200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M300 0C450 300 100 600 500 900C700 1050 650 1200 650 1200H800V0H300Z" 
          fill="url(#waveGradient)" 
        />
        <defs>
          <linearGradient id="waveGradient" x1="400" y1="0" x2="800" y2="1200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="0.5" stopColor="#FF6A1A" stopOpacity="0.3" />
            <stop offset="1" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* 4. Giant Watermark Typography in Background */}
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-12 flex-col items-end select-none pointer-events-none">
        <span className="font-display text-[160px] font-black leading-none text-white/[0.025] tracking-tighter">
          ESTRATEGISTA
        </span>
        <span className="text-[72px] font-bold text-white/[0.02] tracking-[0.25em] -mt-6">
          RAPHAEL MOTOC
        </span>
      </div>

      {/* 5. Subtle Grain / Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};
