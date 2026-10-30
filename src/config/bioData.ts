export interface BioLink {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  badge?: string;
  badgeType?: 'primary' | 'hot' | 'live' | 'success' | 'vip';
  imageUrl?: string;
  iconName?: string;
  isFeatured?: boolean;
  ctaText: string;
  highlightColor?: string;
}

export interface ProfileConfig {
  name: string;
  title: string;
  handle: string;
  verified: boolean;
  bio: string;
  tagline: string;
  liveStatus: {
    active: boolean;
    label: string;
  };
  avatar: string;
  heroImage: string;
  socials: {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    whatsapp?: string;
    telegram?: string;
    email?: string;
  };
  links: BioLink[];
}

export const bioData: ProfileConfig = {
  name: "Raphael Motoc",
  title: "Mentor de Carreiras Policiais & Estrategista",
  handle: "@oestrategista_",
  verified: true,
  tagline: "LINKS QUE PODEM TE AJUDAR",
  bio: "Ajudando concurseiros de alta performance a dominarem o conteúdo com estratégia e método comprovado.",
  liveStatus: {
    active: true,
    label: "TURMA ABERTA • 2026",
  },
  // As 3 fotos enviadas pelo usuário:
  avatar: "/images/hero-main.jpg",
  heroImage: "/images/hero-main.jpg",
  socials: {
    instagram: "https://instagram.com/oestrategista_",
    youtube: "https://youtube.com/@oestrategista_",
    tiktok: "https://tiktok.com/@oestrategista_",
    whatsapp: "https://wa.me/5581999999999?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20mentorias%20e%20a%20plataforma",
    telegram: "https://t.me/oestrategistavip",
    email: "contato@resumeairaphael.com.br",
  },
  links: [
    {
      id: "questoes",
      title: "Plataforma de Questões PMPE & PCPE",
      subtitle: "Banco com mais de 10.000 questões comentadas, simulados e estatísticas de precisão.",
      url: "https://questoes.resumeairaphael.com.br",
      badge: "NOVO • MAIS ACESSADO",
      badgeType: "hot",
      isFeatured: true,
      imageUrl: "/images/hero-main.jpg",
      iconName: "BrainCircuit",
      ctaText: "Começar a Resolver Grátis",
      highlightColor: "#FF6A1A",
    },
    {
      id: "cronograma",
      title: "Cronograma & Edital Verticalizado",
      subtitle: "Organização tática dia a dia para fechar o edital sem ansiedade.",
      url: "https://o-estrategista.vercel.app/cronograma",
      badge: "METODOLOGIA TÁTICA",
      badgeType: "primary",
      iconName: "CalendarDays",
      ctaText: "Acessar Cronograma",
      highlightColor: "#FF6A1A",
    },
    {
      id: "comunidade-vip",
      title: "Comunidade VIP no WhatsApp",
      subtitle: "Grupo fechado de avisos em primeira mão, bizus e materiais exclusivos.",
      url: "https://chat.whatsapp.com/exemplo",
      badge: "EXCLUSIVO",
      badgeType: "vip",
      iconName: "Flame",
      ctaText: "Entrar no Grupo VIP",
      highlightColor: "#10B981",
    },
    {
      id: "youtube-aulas",
      title: "Canal do YouTube Oficial",
      subtitle: "Aulas completas, análises profundas de editais e técnicas de resolução.",
      url: "https://youtube.com/@oestrategista_",
      badge: "VÍDEOS SEMANAIS",
      badgeType: "primary",
      iconName: "Video",
      ctaText: "Inscrever-se no Canal",
      highlightColor: "#EF4444",
    },
    {
      id: "instagram-diario",
      title: "Instagram | Conteúdo Diário",
      subtitle: "Enquetes de questões diárias, stories de bastidores e motivação.",
      url: "https://instagram.com/oestrategista_",
      badge: "@oestrategista_",
      badgeType: "primary",
      iconName: "Instagram",
      ctaText: "Seguir Perfil",
      highlightColor: "#EC4899",
    },
    {
      id: "suporte-whatsapp",
      title: "Atendimento & Suporte Individual",
      subtitle: "Fale diretamente com nossa equipe ou tire dúvidas sobre as mentorias.",
      url: "https://wa.me/5581999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20suporte",
      badge: "RESPOSTA RÁPIDA",
      badgeType: "success",
      iconName: "MessageCircle",
      ctaText: "Chamar no WhatsApp",
      highlightColor: "#22C55E",
    },
  ],
};
