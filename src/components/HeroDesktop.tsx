import React from 'react';
import { ProfileConfig } from '../config/bioData';
import { ShieldCheck, Sparkles } from 'lucide-react';

interface HeroDesktopProps {
  profile: ProfileConfig;
}

export const HeroDesktop: React.FC<HeroDesktopProps> = ({ profile }) => {
  return (
    <div className="relative w-full h-[640px] flex items-center justify-center select-none">
      {/* Background Authority Vector / Monogram Frame (Estilo Igor Rodrigues) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Geometric Monogram Background */}
        <div className="relative w-[480px] h-[540px] rounded-3xl border border-white/[0.05] bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xs flex items-center justify-center overflow-hidden">
          {/* Subtle Diagonal Lines */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:24px_24px]" />
          
          {/* Huge Monogram Silhouette */}
          <div className="font-display font-black text-[280px] text-white/[0.03] tracking-tighter leading-none select-none">
            OE
          </div>

          {/* Vertical Label (Estilo "O MAGO" do Igor Rodrigues) */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-xs font-bold tracking-[0.4em] uppercase text-zinc-500/80 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-zinc-600 inline-block" />
            O ESTRATEGISTA
            <span className="w-6 h-[1px] bg-zinc-600 inline-block" />
          </div>
        </div>
      </div>

      {/* Hero Authority Photo with Masked Blend */}
      <div className="relative z-10 w-[420px] h-[560px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
        <img
          src={profile.heroImage}
          alt={profile.name}
          className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
        />

        {/* Ambient Warm Vignette & Bottom Blend Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/40 via-transparent to-[#070709]/30" />

        {/* Floating Verification Badge (Bottom Overlay) */}
        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-base tracking-tight">{profile.name}</h3>
              <ShieldCheck className="w-4 h-4 text-[#FF6A1A] fill-[#FF6A1A]/20" />
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">{profile.title}</p>
          </div>

          {/* Live Indicator Dot */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF6A1A]/10 border border-[#FF6A1A]/30">
            <span className="w-2 h-2 rounded-full bg-[#FF6A1A] animate-pulse" />
            <span className="text-[10px] font-bold text-[#FF6A1A] tracking-wider uppercase">OFICIAL</span>
          </div>
        </div>

        {/* Top Floating Pill */}
        <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-xs text-zinc-300">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6A1A]" />
          <span>Alta Performance</span>
        </div>
      </div>
    </div>
  );
};
