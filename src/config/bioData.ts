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
  bannerTag?: string;
  bannerGradient?: string;
}

export interface ProfileConfig {
  name: string;
  title: string;
  handle: string;
  verified: boolean;
  bio: string;
  tagline: string;
  phoneDisplay: string;
  liveStatus: {
    active: boolean;
    label: string;
  };
  avatar: string;
  heroImage: string;
  socials: {
    instagram?: string;
    youtube?: string;
    whatsapp?: string;
    whatsappGroup?: string;
    email?: string;
  };
  links: BioLink[];
}

export const bioData: ProfileConfig = {
  name: "Raphael Nonato",
  title: "Fundador do O Estrategista & Mentor de Carreiras Policiais",
  handle: "@resumeai.raphael",
  phoneDisplay: "(81) 9.9454-5772",
  verified: true,
  tagline: "LINKS QUE PODEM TE AJUDAR",
  bio: "Conduzindo concurseiros rumo à aprovação com metodologia de alto impacto e estratégia tática comprovada.",
  liveStatus: {
    active: true,
    label: "TURMA ABERTA • 2026",
  },
  // Fotos de autoridade
  avatar: "/images/hero-main.jpg",
  heroImage: "/images/hero-main.jpg",
  socials: {
    instagram: "https://instagram.com/resumeai.raphael",
    youtube: "https://www.youtube.com/results?search_query=resumeai.raphael&page=&utm_source=opensearch",
    whatsapp: "https://wa.me/5581994545772?text=Ol%C3%A1%20Raphael%2C%20vim%20pelo%20link%20da%20bio%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20mentorias%20e%20a%20plataforma",
    whatsappGroup: "https://chat.whatsapp.com/CDntRxIGCD2CMlhceAqJju",
    email: "contato@resumeairaphael.com.br",
  },
  links: [
    {
      id: "questoes",
      title: "Plataforma de Questões PMPE & PCPE",
      subtitle: "Banco com mais de 10.000 questões comentadas, simulados inéditos e radar tático de desempenho.",
      url: "https://questoes.resumeairaphael.com.br",
      badge: "NOVO • MAIS ACESSADO",
      badgeType: "hot",
      isFeatured: true,
      iconName: "BrainCircuit",
      ctaText: "Começar a Resolver Grátis",
      bannerTag: "PLATAFORMA EXCLUSIVA",
      bannerGradient: "from-orange-500/20 via-zinc-900/90 to-black",
    },
    {
      id: "cronograma",
      title: "Edital Verticalizado & Cronograma",
      subtitle: "Organização tática dia a dia para fechar 100% do edital sem ansiedade.",
      url: "https://o-estrategista.vercel.app/cronograma",
      badge: "METODOLOGIA TÁTICA",
      badgeType: "primary",
      iconName: "CalendarDays",
      ctaText: "Acessar Cronograma",
      bannerTag: "MÉTODO 2026",
      bannerGradient: "from-amber-600/15 via-zinc-900/80 to-black",
    },
    {
      id: "comunidade-vip",
      title: "Comunidade VIP no WhatsApp",
      subtitle: "Grupo fechado de avisos em primeira mão, bizus e materiais exclusivos.",
      url: "https://chat.whatsapp.com/CDntRxIGCD2CMlhceAqJju",
      badge: "GRUPO OFICIAL",
      badgeType: "vip",
      iconName: "Flame",
      ctaText: "Entrar no Grupo VIP",
      bannerTag: "NETWORKING",
      bannerGradient: "from-emerald-600/15 via-zinc-900/80 to-black",
    },
    {
      id: "youtube-aulas",
      title: "Canal do YouTube Oficial",
      subtitle: "Aulas completas, análises de editais e resolução estratégica de questões.",
      url: "https://www.youtube.com/results?search_query=resumeai.raphael&page=&utm_source=opensearch",
      badge: "VÍDEOS SEMANAIS",
      badgeType: "primary",
      iconName: "Video",
      ctaText: "Inscrever-se no Canal",
      bannerTag: "YOUTUBE",
      bannerGradient: "from-red-600/15 via-zinc-900/80 to-black",
    },
    {
      id: "instagram-diario",
      title: "Instagram | @resumeai.raphael",
      subtitle: "Enquetes de questões diárias, stories de bastidores e rotina de estudos.",
      url: "https://instagram.com/resumeai.raphael",
      badge: "@resumeai.raphael",
      badgeType: "primary",
      iconName: "Instagram",
      ctaText: "Seguir Perfil",
      bannerTag: "INSTAGRAM",
      bannerGradient: "from-pink-600/15 via-zinc-900/80 to-black",
    },
    {
      id: "suporte-whatsapp",
      title: "Atendimento & Suporte Individual",
      subtitle: "Fale diretamente com nossa equipe no WhatsApp: (81) 9.9454-5772.",
      url: "https://wa.me/5581994545772?text=Ol%C3%A1%20Raphael%2C%20vim%20pelo%20link%20da%20bio%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20mentorias",
      badge: "(81) 9.9454-5772",
      badgeType: "success",
      iconName: "MessageCircle",
      ctaText: "Chamar no WhatsApp",
      bannerTag: "SUPORTE DIRETO",
      bannerGradient: "from-emerald-600/20 via-zinc-900/90 to-black",
    },
  ],
};
