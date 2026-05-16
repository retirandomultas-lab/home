# 🚀 Retira Multas - Landing Page Profissional

Landing page de alta conversão para **Retira Multas** — especializada em recurso de multas de trânsito, defesa de suspensão de CNH e suporte jurídico em trânsito.

**Tema Visual:** Dark Authority (Preto #0D0D0D + Amarelo #F5C518)  
**Foco:** 100% conversão via WhatsApp  
**Responsivo:** Mobile-first, totalmente adaptável  

---

## 📋 Índice

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Desenvolvimento](#desenvolvimento)
- [Build & Deploy](#build--deploy)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Deploy em Diferentes Plataformas](#deploy-em-diferentes-plataformas)
- [Troubleshooting](#troubleshooting)

---

## ✨ Características

✅ **12 Seções Completas:**
- Hero com imagem profissional
- Estatísticas animadas (contadores)
- Problema & Solução
- Quem Somos
- Serviços oferecidos
- Como Funciona (passo a passo)
- Benefícios
- Depoimentos de clientes
- Mapa do Brasil com animação
- Urgência (prazo de 30 dias)
- Formulário de contato
- Rodapé com links

✅ **Tecnologias Modernas:**
- React 19 com TypeScript
- Vite (build rápido)
- Tailwind CSS 4
- shadcn/ui (componentes)
- Framer Motion (animações)
- Wouter (roteamento leve)

✅ **Otimizações:**
- SEO-friendly
- Performance otimizada
- Responsivo (mobile, tablet, desktop)
- Acessibilidade (WCAG)
- Dark mode nativo

✅ **7 CTAs Estratégicos:**
- Botão flutuante WhatsApp com animação pulse
- CTAs em cada seção
- Formulário de contato integrado
- Links diretos para WhatsApp

---

## 📦 Requisitos

- **Node.js** >= 18.0.0
- **npm** ou **pnpm** >= 8.0.0
- **Git** (para versionamento)

**Verificar versões instaladas:**
```bash
node --version
npm --version
```

---

## 🔧 Instalação

### 1. Clonar ou Descompactar o Projeto

```bash
# Se for um ZIP
unzip retira-multas.zip
cd retira-multas

# Se for um repositório Git
git clone https://seu-repositorio.git
cd retira-multas
```

### 2. Instalar Dependências

```bash
# Com npm
npm install

# Ou com pnpm (recomendado)
pnpm install

# Ou com yarn
yarn install
```

### 3. Configurar Variáveis de Ambiente

```bash
# Copiar arquivo de exemplo
cp .env.example .env.local

# Editar .env.local com seus valores
nano .env.local
```

**Variáveis principais:**
```env
VITE_APP_URL=http://localhost:3000
VITE_WHATSAPP_NUMBER=5547997624005
VITE_ENV=development
```

---

## 🚀 Desenvolvimento

### Iniciar Servidor de Desenvolvimento

```bash
npm run dev
# ou
pnpm dev
```

O site estará disponível em: **http://localhost:3000**

**Características do dev server:**
- Hot Module Replacement (HMR) automático
- Recarregamento em tempo real
- Erros exibidos no console

### Verificar Tipos TypeScript

```bash
npm run type-check
# ou
pnpm type-check
```

---

## 🏗️ Build & Deploy

### Build para Produção

```bash
npm run build
# ou
pnpm build
```

**Saída:** Arquivos otimizados em `dist/`

### Preview da Build

```bash
npm run preview
# ou
pnpm preview
```

---

## 📁 Estrutura do Projeto

```
retira-multas/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Página principal com 12 seções
│   │   ├── components/
│   │   │   ├── ui/               # shadcn/ui components
│   │   │   ├── Map.tsx           # Componente de mapa
│   │   │   └── ErrorBoundary.tsx # Error handling
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx  # Contexto de tema (dark/light)
│   │   ├── hooks/
│   │   │   └── useCounter.ts     # Hook para animação de contadores
│   │   ├── App.tsx               # Componente raiz
│   │   ├── main.tsx              # Entry point React
│   │   └── index.css             # Estilos globais + Tailwind
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   └── index.html                # HTML base
├── package.json                  # Dependências e scripts
├── vite.config.ts               # Configuração Vite
├── tsconfig.json                # Configuração TypeScript
├── tailwind.config.js           # Configuração Tailwind
├── postcss.config.js            # Configuração PostCSS
├── .env.example                 # Variáveis de exemplo
├── .gitignore                   # Git ignore
└── README.md                    # Este arquivo
```

---

## 🔐 Variáveis de Ambiente

### Desenvolvimento (`.env.local`)

```env
VITE_APP_URL=http://localhost:3000
VITE_ENV=development
VITE_WHATSAPP_NUMBER=5547997624005
VITE_DEBUG=true
PORT=3000
```

### Produção (`.env.production`)

```env
VITE_APP_URL=https://seu-dominio.com
VITE_ENV=production
VITE_WHATSAPP_NUMBER=5547997624005
VITE_DEBUG=false
```

---

## 🌐 Deploy em Diferentes Plataformas

### ✅ Vercel (Recomendado)

**Pré-requisitos:**
- Conta Vercel (https://vercel.com)
- Projeto no GitHub

**Passos:**

1. **Fazer push para GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Conectar no Vercel:**
   - Ir para https://vercel.com/new
   - Selecionar repositório GitHub
   - Configurar variáveis de ambiente
   - Clicar em "Deploy"

3. **Configurar domínio:**
   - Em Vercel → Settings → Domains
   - Adicionar domínio customizado
   - Seguir instruções de DNS

**Arquivo `vercel.json` (opcional):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_APP_URL": "@vite_app_url"
  }
}
```

---

### ✅ Netlify

**Pré-requisitos:**
- Conta Netlify (https://netlify.com)
- Projeto no GitHub

**Passos:**

1. **Conectar no Netlify:**
   - Ir para https://app.netlify.com/start
   - Selecionar repositório GitHub
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Configurar variáveis:**
   - Site settings → Build & deploy → Environment
   - Adicionar variáveis de `.env.example`

3. **Deploy automático:**
   - Cada push para main faz deploy automático

---

### ✅ Railway

**Pré-requisitos:**
- Conta Railway (https://railway.app)
- Projeto no GitHub

**Passos:**

1. **Criar novo projeto:**
   - Ir para https://railway.app/new
   - Selecionar "Deploy from GitHub"
   - Conectar repositório

2. **Configurar build:**
   - Build command: `npm run build`
   - Start command: `npm run preview`

3. **Adicionar variáveis:**
   - Project → Variables
   - Copiar de `.env.example`

---

### ✅ Docker (VPS/Ubuntu)

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
```

**Build e run:**
```bash
# Build imagem
docker build -t retira-multas .

# Executar container
docker run -p 3000:3000 retira-multas
```

---

### ✅ Ubuntu/VPS Tradicional

**Instalação:**

```bash
# 1. Conectar via SSH
ssh usuario@seu-servidor.com

# 2. Clonar repositório
git clone https://seu-repositorio.git
cd retira-multas

# 3. Instalar Node.js (se não tiver)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 4. Instalar dependências
npm install

# 5. Build
npm run build

# 6. Usar PM2 para manter rodando
sudo npm install -g pm2
pm2 start "npm run preview" --name "retira-multas"
pm2 startup
pm2 save
```

**Configurar Nginx (reverse proxy):**

```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Ativar SSL (Let's Encrypt):**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d seu-dominio.com
```

---

### ✅ Hostinger

**Painel Hostinger:**

1. Ir para **Hospedagem → Gerenciar**
2. **Git** → Conectar repositório GitHub
3. **Build Command:** `npm run build`
4. **Output Directory:** `dist`
5. Clicar em **Deploy**

---

## 🐛 Troubleshooting

### Erro: "Cannot find module '@'"

**Solução:**
```bash
# Verificar tsconfig.json
# Garantir que paths está correto:
"paths": {
  "@/*": ["./client/src/*"]
}
```

### Erro: "Port 3000 already in use"

**Solução:**
```bash
# Usar porta diferente
npm run dev -- --port 3001

# Ou matar processo na porta 3000
lsof -ti:3000 | xargs kill -9
```

### Build falha com erro de dependências

**Solução:**
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install

# Ou com pnpm
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Site não carrega imagens

**Solução:**
1. Verificar URLs das imagens em `Home.tsx`
2. Garantir que CDN está acessível
3. Verificar CORS headers

### WhatsApp não abre

**Solução:**
1. Verificar número em `.env.local`
2. Formato correto: `5547997624005` (sem caracteres especiais)
3. Testar link: `https://wa.me/5547997624005`

---

## 📞 Suporte e Contato

**WhatsApp:** [5547997624005](https://wa.me/5547997624005)

**Email:** contato@retiramultas.com.br

---

## 📄 Licença

MIT License - Veja LICENSE.md para detalhes

---

## 🎯 Próximos Passos

- [ ] Adicionar Google Analytics
- [ ] Implementar chatbot
- [ ] Integrar com CRM
- [ ] Adicionar blog
- [ ] Implementar sistema de agendamento
- [ ] Adicionar pagamentos (Stripe)

---

**Desenvolvido com ❤️ para Retira Multas**
