// Mock data for the real estate application

export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  type: 'house' | 'apartment' | 'commercial' | 'land';
  status: 'sale' | 'rent';
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  address: string;
  city: string;
  neighborhood: string;
  featured: boolean;
}

export interface Agent {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
  clientSince: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Mock Properties Data
export const properties: Property[] = [
  {
    id: 1,
    title: "Casa Moderna com Piscina",
    description: "Uma casa moderna com piscina, amplo quintal e área gourmet. Perfeita para famílias que buscam conforto e lazer.",
    price: 1200000,
    type: "house",
    status: "sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 245,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1956&q=80"
    ],
    address: "Rua das Palmeiras, 123",
    city: "Florianópolis",
    neighborhood: "Centro",
    featured: true
  },
  {
    id: 2,
    title: "Apartamento de Luxo",
    description: "Apartamento de alto padrão com vista para o mar. Localização privilegiada e acabamento premium.",
    price: 895000,
    type: "apartment",
    status: "sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1493809842364-78f01b6bd254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    ],
    address: "Av. Brasil, 789",
    city: "Santa Catarina",
    neighborhood: "Itajaí",
    featured: true
  },
  {
    id: 3,
    title: "Casa em Condomínio",
    description: "Casa em condomínio fechado com segurança 24h, próxima à praia e completa infraestrutura de lazer.",
    price: 4500,
    type: "house",
    status: "rent",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    ],
    address: "Rua das Gaivotas, 456",
    city: "Florianópolis",
    neighborhood: "Jurerê",
    featured: true
  },
  {
    id: 4,
    title: "Apartamento com Vista para o Mar",
    description: "Apartamento na Beira-Mar Norte com ampla sala de estar, varanda gourmet e vista privilegiada para o mar.",
    price: 1890000,
    type: "apartment",
    status: "sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 145,
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
    ],
    address: "Av. Beira Mar Norte, 3500",
    city: "Florianópolis",
    neighborhood: "Beira-Mar Norte",
    featured: true
  },
  {
    id: 5,
    title: "Casa Familiar Ampla",
    description: "Casa espaçosa com quintal, área de lazer e próxima a escolas, mercados e transporte público.",
    price: 950000,
    type: "house",
    status: "sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 210,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
    ],
    address: "Rua dos Lírios, 234",
    city: "Florianópolis",
    neighborhood: "Campeche",
    featured: false
  },
  {
    id: 6,
    title: "Apartamento Moderno",
    description: "Apartamento reformado, com móveis planejados e localização central, próximo a universidades.",
    price: 2800,
    type: "apartment",
    status: "rent",
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    ],
    address: "Rua dos Estudantes, 100",
    city: "Florianópolis",
    neighborhood: "Trindade",
    featured: false
  },
  {
    id: 7,
    title: "Cobertura Duplex",
    description: "Cobertura duplex com terraço, piscina privativa e vista panorâmica da cidade.",
    price: 2150000,
    type: "apartment",
    status: "sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    images: [
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    ],
    address: "Rua Central, 500",
    city: "Florianópolis",
    neighborhood: "Centro",
    featured: false
  },
  {
    id: 8,
    title: "Sala Comercial",
    description: "Sala comercial com infraestrutura completa em centro empresarial com estacionamento e segurança.",
    price: 3500,
    type: "commercial",
    status: "rent",
    bedrooms: 0,
    bathrooms: 1,
    area: 45,
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
    ],
    address: "Av. Empresarial, 200",
    city: "Florianópolis",
    neighborhood: "Centro",
    featured: false
  }
];

// Mock Agents Data
export const agents: Agent[] = [
  {
    id: 1,
    name: "Ana Silva",
    title: "Corretora Senior",
    description: "Especialista em imóveis de alto padrão com mais de 10 anos de experiência.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 2,
    name: "Carlos Mendes",
    title: "Corretor",
    description: "Especializado em imóveis comerciais e investimentos imobiliários.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 3,
    name: "Júlia Costa",
    title: "Gerente de Vendas",
    description: "Expertise em lançamentos e apartamentos na região central.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 4,
    name: "Marcos Oliveira",
    title: "Corretor",
    description: "Especialista em casas e terrenos nas praias da região.",
    image: "https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  }
];

// Mock Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Fernanda Santos",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Excelente atendimento. A equipe da Imóveis Exata me ajudou a encontrar a casa perfeita em um curto período de tempo. Profissionais altamente recomendados.",
    rating: 5,
    clientSince: "2021"
  },
  {
    id: 2,
    name: "Roberto Almeida",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Aluguei meu apartamento com a Imóveis Exata e foi uma experiência tranquila. Ótima gestão, transparência e agilidade em todo o processo.",
    rating: 5,
    clientSince: "2020"
  },
  {
    id: 3,
    name: "Camila Rodrigues",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Vendi minha casa com a Imóveis Exata e fiquei impressionado com o profissionalismo e dedicação. Conseguiram um comprador em apenas três semanas.",
    rating: 4.5,
    clientSince: "2019"
  }
];

// Mock Services Data
export const services: Service[] = [
  {
    id: 1,
    title: "Compra e Venda",
    description: "Assessoria completa para compra e venda de imóveis, desde a avaliação até a finalização do negócio.",
    icon: "home"
  },
  {
    id: 2,
    title: "Locação",
    description: "Administração de aluguel, busca de inquilinos qualificados e assistência ao proprietário.",
    icon: "key"
  },
  {
    id: 3,
    title: "Avaliação",
    description: "Avaliação profissional do seu imóvel de acordo com o mercado e região para venda ou locação.",
    icon: "chart-line"
  }
];

// Property types for search filter
export const propertyTypes = [
  { value: "house", label: "Casa" },
  { value: "apartment", label: "Apartamento" },
  { value: "commercial", label: "Comercial" },
  { value: "land", label: "Terreno" }
];

// Status types for search filter
export const statusTypes = [
  { value: "sale", label: "Comprar" },
  { value: "rent", label: "Alugar" }
];

// Locations for search filter
export const locations = [
  { value: "centro", label: "Centro" },
  { value: "norte", label: "Zona Norte" },
  { value: "sul", label: "Zona Sul" },
  { value: "leste", label: "Zona Leste" },
  { value: "oeste", label: "Zona Oeste" },
  { value: "jurere", label: "Jurerê" },
  { value: "campeche", label: "Campeche" }
];
