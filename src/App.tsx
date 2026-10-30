import React from 'react';
import { bioData } from './config/bioData';
import { BackgroundEffects } from './components/BackgroundEffects';
import { HeroDesktop } from './components/HeroDesktop';
import { MobileHeader } from './components/MobileHeader';
import { BentoCard } from './components/BentoCard';
import { SocialRow } from './components/SocialRow';
import { Footer } from './components/Footer';
import { Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  // Separate featured link and standard links
  const featuredLink = bioData.links.find(l => l.isFeatured);
  const otherLinks = bioData.links.filter(l => !l.isFeatured);

  return (
    <div className="relative min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-[#FF6A1A] selection:text-white">
      {/* Background Ambience & Fluid Curves */}
      <BackgroundEffects />

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        
        {/* DESKTOP SPLIT LAYOUT (>= 1024px) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
          
          {/* LEFT COLUMN: Links, Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            {/* Brand Header */}
            <div className="mb-7">
              <div className="flex items-center gap-3.5 mb-3">
                <img 
                  src="/logo-icon.png" 
                  alt="Logo O Estrategista" 
                  className="w-11 h-11 object-contain drop-shadow-[0_0_14px_rgba(255,106,26,0.35)]" 
                />
                <div>
                  <h1 className="text-xl font-black tracking-tight text-white font-heading">
                    {bioData.name.toUpperCase()}
                  </h1>
                  <p className="text-xs font-bold text-[#FF6A1A] tracking-wider uppercase font-heading">
                    O Estrategista • Carreiras Policiais
                  </p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent my-4" />

              {/* Section Title (Estilo Igor Rodrigues: "LINKS QUE PODEM TE AJUDAR") */}
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#FF6A1A]" />
                <h2 className="text-lg font-black tracking-wider text-white uppercase font-heading">
                  {bioData.tagline}
                </h2>
              </div>
              <p className="text-xs text-zinc-400">
                Selecione abaixo o recurso, simulado ou canal que deseja acessar:
              </p>
            </div>

            {/* Bento Grid */}
            <div className="space-y-4">
              {/* Featured Card */}
              {featuredLink && (
                <div className="w-full">
                  <BentoCard link={featuredLink} />
                </div>
              )}

              {/* 2-Column Grid for Secondary Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {otherLinks.map(link => (
                  <BentoCard key={link.id} link={link} />
                ))}
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <p className="text-[11px] font-bold text-center text-zinc-400 uppercase tracking-widest mb-3 font-heading">
                Canais Oficiais & Redes Sociais
              </p>
              <SocialRow socials={bioData.socials} />
            </div>

            <Footer />
          </div>

          {/* RIGHT COLUMN: Authority Hero Visual (Sticky Desktop) */}
          <div className="lg:col-span-5 sticky top-8">
            <HeroDesktop profile={bioData} />
          </div>
        </div>

        {/* MOBILE LAYOUT (< 1024px, In-App Browser 9:16) */}
        <div className="lg:hidden max-w-md mx-auto">
          {/* Profile Header */}
          <MobileHeader profile={bioData} />

          {/* Section Divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 font-heading">
              {bioData.tagline}
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          {/* Bento Cards */}
          <div className="space-y-3.5">
            {/* Featured Link First */}
            {featuredLink && (
              <BentoCard link={featuredLink} />
            )}

            {/* 2-Column Grid for remaining links */}
            <div className="grid grid-cols-2 gap-3">
              {otherLinks.slice(0, 4).map(link => (
                <BentoCard key={link.id} link={link} />
              ))}
            </div>

            {/* Last Link (Support / WhatsApp) Full Width */}
            {otherLinks.length > 4 && (
              <div className="pt-1">
                <BentoCard link={otherLinks[4]} />
              </div>
            )}
          </div>

          {/* Social Icons Bar */}
          <div className="mt-6 pt-4 border-t border-white/[0.08]">
            <SocialRow socials={bioData.socials} />
          </div>

          {/* Footer */}
          <Footer />
        </div>

      </main>
    </div>
  );
};

export default App;
