import React from 'react';
import { ProfileConfig } from '../config/bioData';
import { ShieldCheck, Flame } from 'lucide-react';

interface MobileHeaderProps {
  profile: ProfileConfig;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ profile }) => {
  return (
    <div className="flex flex-col items-center text-center pt-2 pb-6 px-4 select-none">
      {/* 1. Live / Status Pill */}
      {profile.liveStatus.active && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A1A]/10 border border-[#FF6A1A]/30 mb-5 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A1A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6A1A]" />
          </span>
          <span className="text-[11px] font-bold text-[#FF6A1A] tracking-wider uppercase">
            {profile.liveStatus.label}
          </span>
          <Flame className="w-3.5 h-3.5 text-[#FF6A1A]" />
        </div>
      )}

      {/* 2. Avatar with Luxury Dual-Ring Glow */}
      <div className="relative mb-4 group cursor-pointer">
        {/* Glow Ring Behind */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#FF6A1A] to-[#FF8438] rounded-full blur-md opacity-40 group-hover:opacity-70 transition duration-500" />
        
        {/* Outer Border */}
        <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-b from-[#FF6A1A] via-zinc-800 to-black">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#070709] bg-zinc-900">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover object-top filter contrast-[1.05]"
            />
          </div>
        </div>

        {/* Verification Checkmark Pill */}
        <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-[#070709] border border-white/20 shadow-md">
          <ShieldCheck className="w-4 h-4 text-[#FF6A1A] fill-[#FF6A1A]" />
        </div>
      </div>

      {/* 3. Name & Handle */}
      <div className="flex items-center justify-center gap-2 mb-1">
        <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight font-display">
          {profile.name}
        </h1>
      </div>

      <p className="text-xs sm:text-sm font-semibold text-[#FF6A1A] tracking-wide uppercase mb-2">
        {profile.title}
      </p>

      {/* 4. Bio Description */}
      <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
        {profile.bio}
      </p>
    </div>
  );
};
