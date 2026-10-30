import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 pb-8 text-center text-xs text-zinc-500 select-none">
      <div className="flex items-center justify-center gap-1.5 mb-2 text-zinc-400">
        <Shield className="w-3.5 h-3.5 text-[#FF6A1A]" />
        <span className="font-semibold text-zinc-300">Ambiente Seguro & Verificado</span>
      </div>
      <p>© {year} O Estrategista. Todos os direitos reservados.</p>
      <p className="text-[11px] text-zinc-600 mt-1">
        Desenvolvido com excelência tática e alto padrão visual.
      </p>
    </footer>
  );
};
