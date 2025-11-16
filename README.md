# Mirantte Landing Page

Landing page profissional para o empreendimento **Mirantte** - Studios e Apartamentos no Costa Azul, Salvador/BA.

## 🚀 Tecnologias

- **React 19** + **TypeScript**
- **Vite** - Build tool ultrarrápido
- **Styled Components** - CSS-in-JS
- **Lucide React** - Ícones modernos
- **React Hook Form** - Formulários performáticos
- **React Helmet Async** - SEO otimizado

## 📋 Funcionalidades

✅ Design moderno e responsivo  
✅ SEO otimizado (meta tags, Open Graph, JSON-LD)  
✅ Formulário de contato integrado com WhatsApp  
✅ Integração com webhook para captura de leads  
✅ Galeria de imagens com efeito hover  
✅ Accordion para informações de localização  
✅ Header fixo translúcido  
✅ Animações e transições suaves  
✅ Paleta de cores personalizada Mirantte

## 🎨 Paleta de Cores

**Principais (Amber):**

- `#d97706` - Botões primários
- `#b45309` - Hover
- `#fef3c7` - Backgrounds suaves

**Secundárias (Emerald):**

- `#059669` - WhatsApp
- `#047857` - Hover WhatsApp
- `#d1fae5` - Background ícones

**Neutras:**

- `#171717` - Rodapé
- `#262626` - Cards escuros
- `#525252` - Textos secundários
- `#fafafa` - Background claro
- `#ffffff` - Branco

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Criar arquivo .env (copiar de .env.example)
cp .env.example .env

# Editar .env com suas configurações
# REACT_APP_WEBHOOK_URL=sua-url-aqui
```

## 🔧 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Acessar em http://localhost:5173
```

## 📦 Build para Produção

```bash
# Criar build otimizado
npm run build

# Visualizar preview da build
npm run preview
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Instalar Vercel CLI: `npm i -g vercel`
2. Executar: `vercel`
3. Seguir instruções

Ou conectar diretamente pelo dashboard da Vercel.

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`

## 📝 Personalização

### Contatos

Editar em `src/lib/constants.ts`:

```typescript
export const CONTACT = {
  whatsapp: '+5571999998888',
  email: 'contato@mirantte.com.br',
  location: 'Costa Azul, Salvador/BA',
  webhookUrl: process.env.REACT_APP_WEBHOOK_URL,
};
```

### Imagens

Substituir placeholders em `public/assets/images/`:

- `hero-bg.jpg` - Imagem de fundo do Hero
- `rooftop.jpg`, `lobby.jpg`, etc. - Galeria

### Tipologias

Editar em `src/lib/constants.ts`:

```typescript
export const TYPOLOGIES = [
  {
    id: 'studio',
    name: 'Studio',
    area: '21,12 m²',
    features: ['...'],
  },
];
```

### SEO

Editar em `src/lib/constants.ts`:

```typescript
export const SEO = {
  title: 'Seu título aqui',
  description: 'Sua descrição aqui',
  url: 'https://seusite.com.br',
};
```

## 📂 Estrutura de Pastas

```
src/
├── components/        # Componentes reutilizáveis
│   ├── Accordion.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   └── SEO.tsx
├── sections/          # Seções da landing page
│   ├── About.tsx
│   ├── Amenities.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Location.tsx
│   └── Typologies.tsx
├── lib/              # Utilitários e constantes
│   ├── constants.ts
│   └── utils.ts
├── styles/           # Estilos globais e tema
│   ├── GlobalStyles.ts
│   └── theme.ts
└── App.tsx           # Componente principal
```

## 🔗 Integrações

### WhatsApp

O botão de WhatsApp abre automaticamente uma conversa com mensagem pré-preenchida.

### Webhook

O formulário envia dados para um webhook configurável via variável de ambiente.

Exemplo de payload:

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "(71) 99999-9999",
  "message": "Gostaria de mais informações"
}
```

### Google Analytics (Opcional)

Adicionar no `.env`:

```
REACT_APP_GA_ID=G-XXXXXXXXXX
```

## 📱 Responsividade

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Lazy loading de imagens
- Code splitting automático (Vite)
- Otimização de assets
- CSS-in-JS com Styled Components

## 📄 Licença

Projeto desenvolvido para o empreendimento Mirantte.

---

**Desenvolvido com ❤️ para Mirantte**
