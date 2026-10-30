import React from 'react';
import { ProfileConfig } from '../config/bioData';
import { MessageCircle, Users, Mail } from 'lucide-react';

interface SocialRowProps {
  socials: ProfileConfig['socials'];
}

// Brand SVG for Instagram
const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Brand SVG for YouTube
const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
  </svg>
);

export const SocialRow: React.FC<SocialRowProps> = ({ socials }) => {
  const items = [
    { name: 'Instagram', url: socials.instagram, icon: InstagramIcon, label: 'Instagram', color: 'hover:text-pink-500 hover:border-pink-500/30' },
    { name: 'YouTube', url: socials.youtube, icon: YoutubeIcon, label: 'YouTube', color: 'hover:text-red-500 hover:border-red-500/30' },
    { name: 'WhatsApp', url: socials.whatsapp, icon: MessageCircle, label: 'WhatsApp', color: 'hover:text-emerald-400 hover:border-emerald-500/30' },
    { name: 'Grupo VIP', url: socials.whatsappGroup, icon: Users, label: 'Grupo VIP', color: 'hover:text-amber-400 hover:border-amber-500/30' },
    { name: 'Email', url: socials.email ? `mailto:${socials.email}` : undefined, icon: Mail, label: 'E-mail', color: 'hover:text-sky-400 hover:border-sky-500/30' },
  ].filter(item => Boolean(item.url));

  return (
    <div className="flex items-center justify-center gap-2.5 sm:gap-3 py-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            title={item.name}
            className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 transition-all duration-300 hover:bg-white/[0.08] hover:scale-105 active:scale-95 cursor-pointer ${item.color}`}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
};
