# 🎨 Portfolio Murilo Bezerra - Next.js Edition

Sistema completo de portfólio com feed editorial tipo LinkedIn, otimizado para SEO, acessibilidade e performance. **Hospedagem gratuita** em Vercel + MongoDB Atlas.

## 🚀 Recursos

✅ **SEO Otimizado**
- Meta tags dinâmicas e Open Graph
- Sitemap e robots.txt
- Structured data (JSON-LD)

✅ **Acessibilidade (A11Y)**
- ARIA labels e semantic HTML
- Contraste de cores WCAG AA+
- Navegação por teclado

✅ **Design Moderno**
- Glassmorphism + gradientes
- Animações suaves com Framer Motion
- Totalmente responsivo

✅ **Feed Editorial**
- Publicações dinâmicas (MongoDB)
- Filtros por categoria
- Embeds de Instagram, Twitter/X e YouTube

✅ **Grátis para Sempre**
- Vercel (hospedagem)
- MongoDB Atlas (banco de dados)
- Next.js 14 (framework)

---

## 📋 Setup Inicial

### 1️⃣ Pré-requisitos

- Node.js 18+ e npm
- Conta GitHub (para Vercel)
- Conta no MongoDB Atlas

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Configurar MongoDB Atlas (Gratuito)

1. Acesse [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Crie uma conta grátis
3. Crie um cluster grátis (M0)
4. Em "Database Access", crie um usuário
5. Em "Network Access", adicione seu IP (ou 0.0.0.0/0 para permitir tudo)
6. Clique em "Connect" e copie a string de conexão

A string deve parecer assim:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### 4️⃣ Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
cp .env.example .env.local
```

Edite `.env.local` e adicione sua string MongoDB:

```
MONGODB_URI=mongodb+srv://seu_usuario:sua_senha@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 5️⃣ Executar localmente

```bash
npm run dev
```

Acesse `http://localhost:3000` 🎉

---

## 🌐 Deploy no Vercel (Gratuito)

### 1. Push para GitHub

```bash
git add .
git commit -m "feat: Next.js portfolio with MongoDB integration"
git push origin main
```

### 2. Conectar no Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório GitHub
4. Em "Environment Variables", adicione:
   - `MONGODB_URI`: sua string de conexão

### 3. Deploy

Clique em "Deploy" e pronto! Seu site estará online em `seu-nome.vercel.app`

---

## 📝 Adicionando Publicações

### Via API (Manual)

```bash
curl -X POST http://localhost:3000/api/publications \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Meu primeiro artigo",
    "description": "Uma descrição interessante",
    "category": "Jornalismo",
    "type": "article",
    "url": "https://exemplo.com",
    "publishedAt": "2024-06-18"
  }'
```

### Estrutura de uma Publicação

```typescript
{
  title: string              // Título (obrigatório)
  description: string        // Descrição (obrigatório)
  category: string           // Categoria (obrigatório)
  type: "article" | "post" | "project"  // Tipo
  content?: string           // Conteúdo completo
  image?: string            // URL da imagem
  embedUrl?: string         // ID do post/vídeo
  embedType?: "instagram" | "twitter" | "youtube"  // Tipo de embed
  url?: string              // Link externo
  publishedAt: Date         // Data de publicação
}
```

### Exemplos de Embeds

**Instagram:**
```json
{
  "embedType": "instagram",
  "embedUrl": "C1234567890" // ID do post
}
```

**YouTube:**
```json
{
  "embedType": "youtube",
  "embedUrl": "dQw4w9WgXcQ" // ID do vídeo
}
```

**Twitter/X:**
```json
{
  "embedType": "twitter",
  "embedUrl": "https://twitter.com/user/status/1234567890"
}
```

---

## 📁 Estrutura do Projeto

```
.
├── app/
│   ├── api/
│   │   └── publications/        # API de publicações
│   ├── feed/                    # Página do feed
│   ├── projetos/                # Página de projetos
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Home
│   └── globals.css              # Estilos globais
├── components/
│   ├── Header.tsx               # Cabeçalho
│   ├── Footer.tsx               # Rodapé
│   └── Reveal.tsx               # Animação de scroll
├── lib/
│   └── mongodb.ts               # Conexão MongoDB
├── public/                       # Assets estáticos
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🎯 Próximas Melhorias

- [ ] Dashboard admin para gerenciar publicações
- [ ] Sistema de comentários
- [ ] Busca de publicações
- [ ] Dark/Light mode toggle
- [ ] Analytics com Google Analytics
- [ ] Newsletter subscription

---

## 🚀 Dicas de Performance

1. **Imagens**: Use Next.js Image component
2. **Fonts**: Google Fonts com `next/font`
3. **Analytics**: Integre Google Analytics
4. **SEO**: Use `next-seo` para meta tags dinâmicas

---

## 📖 Recursos úteis

- [Next.js Docs](https://nextjs.org/docs)
- [MongoDB Atlas Free Tier](https://www.mongodb.com/cloud/atlas/lp/try4)
- [Vercel Deployment](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

---

## 📄 Licença

Seu portfolio, seus termos! 🎉

---

**Feito com ❤️ por Copilot**
