# Estrutura do Projeto Mirantte

## 📁 Organização de Arquivos

```
mirantte-landing/
├── public/                          # Arquivos estáticos
│   ├── Rooftop.webp                # Imagem do rooftop
│   ├── Lobby.webp                  # Imagem do lobby
│   ├── Espaço gourmet.webp         # Imagem do espaço gourmet
│   └── Perspectiva-*.webp          # Imagens das tipologias
│
├── src/
│   ├── components/                  # Componentes reutilizáveis
│   │   ├── Accordion.tsx           # Componente de accordion
│   │   ├── Button.tsx              # Botão estilizado
│   │   ├── Card.tsx                # Card base
│   │   ├── Input.tsx               # Inputs e formulários
│   │   └── SEO.tsx                 # Meta tags e SEO
│   │
│   ├── sections/                    # Seções da landing page
│   │   ├── Header.tsx              # Cabeçalho fixo
│   │   ├── Hero.tsx                # Seção principal
│   │   ├── About.tsx               # Sobre o empreendimento
│   │   ├── Typologies.tsx          # Tipologias (Studio, Quarto/Sala)
│   │   ├── Amenities.tsx           # Infraestrutura
│   │   ├── Gallery.tsx             # Galeria de fotos
│   │   ├── Location.tsx            # Localização
│   │   ├── Contact.tsx             # Formulário de contato
│   │   └── Footer.tsx              # Rodapé
│   │
│   ├── lib/                         # Utilitários e constantes
│   │   ├── constants.ts            # Dados do projeto
│   │   └── utils.ts                # Funções auxiliares
│   │
│   ├── styles/                      # Estilos globais
│   │   ├── theme.ts                # Tema (cores, tipografia)
│   │   └── GlobalStyles.ts         # Reset CSS global
│   │
│   ├── App.tsx                      # Componente principal
│   └── main.tsx                     # Ponto de entrada
│
├── .env.example                     # Exemplo de variáveis de ambiente
├── package.json                     # Dependências
├── tsconfig.json                    # Configuração TypeScript
├── vite.config.ts                   # Configuração Vite
└── README.md                        # Documentação

```

## 🎨 Paleta de Cores

**Amber (Principal)**

- `#d97706` - Botões e CTAs
- `#b45309` - Hover
- `#fef3c7` - Backgrounds

**Emerald (Secundária)**

- `#059669` - WhatsApp
- `#047857` - Hover WhatsApp
- `#d1fae5` - Ícones

**Neutral (Base)**

- `#171717` - Texto escuro
- `#525252` - Texto secundário
- `#fafafa` - Background claro

## 🔧 Principais Tecnologias

- React 19
- TypeScript
- Styled Components
- Lucide React (ícones)
- React Hook Form
- React Helmet Async
- Vite

## 📝 Editar Conteúdo

### Dados de Contato

`src/lib/constants.ts` → `CONTACT`

### Tipologias

`src/lib/constants.ts` → `TYPOLOGIES`

### Amenidades

`src/lib/constants.ts` → `AMENITIES`

### SEO

`src/lib/constants.ts` → `SEO`

## 🚀 Deploy

Build otimizado para:

- Vercel
- Netlify
- GitHub Pages
