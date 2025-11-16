export const CONTACT = {
  whatsapp: '+5571999998888',
  whatsappFormatted: '+55 71 99999-8888',
  email: 'contato@mirantte.com.br',
  location: 'Costa Azul, Salvador/BA',
  webhookUrl:
    import.meta.env.VITE_WEBHOOK_URL || 'https://webhook.site/your-webhook-id',
};

export const SEO = {
  title: 'Mirantte - Viva a poucos metros do mar | Costa Azul, Salvador',
  description:
    'Studios e apartamentos modernos no Costa Azul, Salvador/BA. Infraestrutura completa com piscina rooftop, academia, coworking e muito mais. Agende sua visita!',
  url: 'https://mirantte.com.br',
  image: '/assets/images/og-image.jpg',
  siteName: 'Mirantte',
};

export const TYPOLOGIES = [
  {
    id: 'studio',
    name: 'Studio',
    area: '21,12 m²',
    features: [
      'Ambiente integrado',
      'Banheiro completo',
      'Varanda',
      'Cozinha americana',
      'Área de serviço',
    ],
  },
  {
    id: 'quarto-sala',
    name: 'Quarto e Sala',
    area: '30,22 a 33,76 m²',
    features: [
      '1 Quarto',
      'Sala ampla',
      'Banheiro completo',
      'Varanda',
      'Cozinha integrada',
      'Área de serviço',
    ],
  },
];

export const AMENITIES = [
  'Piscina Rooftop',
  'Academia',
  'Espaço Gourmet',
  'Coworking Indoor',
  'Coworking Outdoor',
  'Salão de Festas',
  'Pet Place',
  'Bicicletário',
  'Lavanderia',
  'Lounge',
  'Snack Bar',
  'Infraestrutura para veículos elétricos',
  'Painéis solares',
];

export const GALLERY_IMAGES = [
  { id: 1, name: 'Rooftop', url: '/Rooftop.webp' },
  { id: 2, name: 'Lobby', url: '/Lobby.webp' },
  { id: 3, name: 'Espaço Gourmet', url: '/Espaço gourmet.webp' },
  {
    id: 4,
    name: 'Coworking',
    url: '/Perspectiva-do-coworking-outdoor-do-Mirantte.jpg.webp',
  },
  { id: 5, name: 'Lounge', url: '/Perspectiva-do-lounge-do-Mirantte.jpg.webp' },
  {
    id: 6,
    name: 'Academia',
    url: '/Perspectiva-da-academia-do-Mirantte.jpg.webp',
  },
];

export const LOCATION_INFO = {
  proximidades: [
    'Shopping da Bahia - 2 km',
    'Praia do Costa Azul - 300 m',
    'Supermercados - 500 m',
    'Farmácias - 400 m',
    'Restaurantes e bares - 200 m',
    'Escolas e universidades - 1 km',
  ],
  mobilidade: [
    'Acesso direto à Av. Octávio Mangabeira',
    'Linhas de ônibus na porta',
    'Ciclovia na orla',
    'Próximo ao aeroporto - 15 min',
    'Uber e 99 disponíveis 24h',
  ],
  valorizacao: [
    'Região em alta valorização',
    'Infraestrutura completa e consolidada',
    'Proximidade com o mar',
    'Desenvolvimento urbano contínuo',
    'Ótimo potencial de locação',
  ],
};
