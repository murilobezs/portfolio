# ⚡ Setup Rápido - 5 Minutos

## 1. Instalar dependências
```bash
npm install
```

## 2. Configurar MongoDB

1. Acesse https://mongodb.com/cloud/atlas
2. Crie uma conta grátis
3. Crie um cluster grátis (M0)
4. Crie um usuário em "Database Access"
5. Adicione seu IP em "Network Access" (ou 0.0.0.0/0)
6. Clique "Connect" e copie a string (parecida com isto):
   ```
   mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## 3. Criar `.env.local`
```bash
cat > .env.local << 'ENVFILE'
MONGODB_URI=mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
NEXT_PUBLIC_APP_URL=http://localhost:3000
ENVFILE
```

## 4. Rodar localmente
```bash
npm run dev
```

Pronto! Acesse http://localhost:3000 🎉

---

## Deploy no Vercel

1. Faça push para GitHub
   ```bash
   git add .
   git commit -m "Portfolio Next.js com MongoDB"
   git push origin main
   ```

2. Acesse vercel.com e conecte seu repositório

3. Adicione a variável `MONGODB_URI` nos Environment Variables

4. Clique Deploy e pronto! 🚀

---

## Adicionar primeira publicação

```bash
curl -X POST http://localhost:3000/api/publications \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Meu primeiro artigo",
    "description": "Uma descrição interessante sobre jornalismo",
    "category": "Jornalismo",
    "type": "article",
    "url": "https://seu-site.com",
    "publishedAt": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"
  }'
```

---

Dúvidas? Veja o README.md completo!
