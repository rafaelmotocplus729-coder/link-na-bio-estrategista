import React from 'react';
import { BioLink } from '../config/bioData';
import { 
  BrainCircuit, 
  CalendarDays, 
  Flame, 
  Video, 
  MessageCircle, 
  ExternalLink, 
  Sparkles, 
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

interface BentoCardProps {
  link: BioLink;
}

// Brand SVG for Instagram
const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const BentoCard: React.FC<BentoCardProps> = ({ link }) => {
  // Dynamic Lucide icon mapping
  const renderIcon = () => {
    const iconProps = { className: "w-5 h-5", strokeWidth: 2.2 };
    switch (link.iconName) {
      case 'BrainCircuit': return <BrainCircuit {...iconProps} className="w-5 h-5 text-[#FF6A1A]" />;
      case 'CalendarDays': return <CalendarDays {...iconProps} className="w-5 h-5 text-[#FF8438]" />;
      case 'Flame': return <Flame {...iconProps} className="w-5 h-5 text-emerald-400" />;
      case 'Video': return <Video {...iconProps} className="w-5 h-5 text-red-500" />;
      case 'Instagram': return <InstagramIcon className="w-5 h-5 text-pink-500" />;
      case 'MessageCircle': return <MessageCircle {...iconProps} className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles {...iconProps} className="w-5 h-5 text-[#FF6A1A]" />;
    }
  };

  // Badge stylings
  const renderBadge = () => {
    if (!link.badge) return null;

    let badgeClass = "bg-white/5 text-zinc-300 border-white/10";
    if (link.badgeType === 'hot') {
      badgeClass = "bg-[#FF6A1A]/20 text-[#FF6A1A] border-[#FF6A1A]/40 font-bold animate-pulse";
    } else if (link.badgeType === 'vip') {
      badgeClass = "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 font-semibold";
    } else if (link.badgeType === 'success') {
      badgeClass = "bg-green-500/15 text-green-400 border-green-500/30 font-medium";
    } else if (link.badgeType === 'primary') {
      badgeClass = "bg-white/10 text-white/90 border-white/15";
    }

    return (
      <span className={`text-[10px] tracking-wider uppercase font-semibold px-2.5 py-0.5 rounded-full border ${badgeClass} inline-flex items-center gap-1 shadow-xs`}>
        {link.badge}
      </span>
    );
  };

  // 1. FEATURED CARD (Full Width Banner - Hero Card estilo Igor Rodrigues / Xper Web)
  if (link.isFeatured) {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-left group cursor-pointer"
      >
        <div className="relative rounded-2xl glass-card-featured p-5 sm:p-6 overflow-hidden transition-all duration-300 active:scale-[0.98]">
          {/* Subtle Ambient Shimmer Ray */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#FF6A1A]/15 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

          {/* Top Row: Icon Box + Category Tag + Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#FF6A1A]/15 border border-[#FF6A1A]/35 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                {renderIcon()}
              </div>
              {link.bannerTag && (
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#FF6A1A]">
                  {link.bannerTag}
                </span>
              )}
            </div>
            {renderBadge()}
          </div>

          {/* Title & Subtitle */}
          <div className="relative z-10 mb-5">
            <h3 className="text-base sm:text-xl font-extrabold text-white group-hover:text-[#FF8438] transition-colors flex items-center gap-1.5 font-heading">
              {link.title}
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A1A] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </h3>
            {link.subtitle && (
              <p className="text-xs sm:text-sm text-zinc-300/90 mt-1.5 leading-relaxed font-normal">
                {link.subtitle}
              </p>
            )}
          </div>

          {/* Bottom Action Row */}
          <div className="relative z-10 flex items-center justify-between pt-3.5 border-t border-white/10">
            <span className="text-xs font-bold text-[#FF6A1A] tracking-wider uppercase flex items-center gap-1.5 group-hover:underline">
              {link.ctaText}
            </span>
            <div className="w-8 h-8 rounded-full bg-[#FF6A1A] text-black flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-md shadow-[#FF6A1A]/40">
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </div>
          </div>
        </div>
      </a>
    );
  }

  // 2. STANDARD BENTO CARD (Grid Item)
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-left group h-full cursor-pointer"
    >
      <div className={`relative h-full rounded-2xl glass-card p-4 sm:p-5 flex flex-col justify-between overflow-hidden active:scale-[0.98] bg-gradient-to-b ${link.bannerGradient || 'from-white/[0.03] to-transparent'}`}>
        {/* Top Header: Icon + Badge */}
        <div>
          <div className="flex items-center justify-between mb-3.5">
            <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#FF6A1A]/50 group-hover:bg-white/[0.08] transition-all duration-300">
              {renderIcon()}
            </div>
            {renderBadge()}
          </div>

          {/* Banner Tag */}
          {link.bannerTag && (
            <p className="text-[9px] font-black tracking-widest text-zinc-400 uppercase mb-1">
              {link.bannerTag}
            </p>
          )}

          {/* Title */}
          <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF8438] transition-colors leading-snug font-heading">
            {link.title}
          </h4>

          {link.subtitle && (
            <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
              {link.subtitle}
            </p>
          )}
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-[11px] font-semibold text-zinc-400 group-hover:text-white transition-colors">
            {link.ctaText}
          </span>
          <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#FF6A1A] transition-colors" />
        </div>
      </div>
    </a>
  );
};
