# 🚀 Guia Completo de Deploy

Este documento contém instruções detalhadas para fazer deploy em diferentes plataformas.

---

## 📋 Índice

1. [Vercel (Recomendado)](#vercel-recomendado)
2. [Netlify](#netlify)
3. [Railway](#railway)
4. [Docker](#docker)
5. [Ubuntu/VPS](#ubuntuvps)
6. [Hostinger](#hostinger)
7. [Troubleshooting](#troubleshooting)

---

## ✅ Vercel (Recomendado)

**Por que Vercel?**
- Deploy automático a cada push
- Domínio customizado grátis
- SSL automático
- Performance otimizada
- Suporte a variáveis de ambiente
- Integração GitHub perfeita

### Passo 1: Preparar Repositório GitHub

```bash
# Inicializar git (se não tiver)
git init

# Adicionar remote
git remote add origin https://github.com/seu-usuario/retira-multas.git

# Fazer commit
git add .
git commit -m "Initial commit: Landing page Retira Multas"

# Push para main
git push -u origin main
```

### Passo 2: Conectar no Vercel

1. Ir para https://vercel.com/new
2. Clicar em "Continue with GitHub"
3. Autorizar Vercel
4. Selecionar repositório `retira-multas`
5. Clicar em "Import"

### Passo 3: Configurar Projeto

**Build Settings:**
- Framework: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Environment Variables:**
```
VITE_APP_URL=https://seu-dominio.vercel.app
VITE_WHATSAPP_NUMBER=5547997624005
VITE_ENV=production
```

### Passo 4: Deploy

Clicar em "Deploy" e aguardar ~2 minutos.

**URL gerada:** `https://retira-multas-xxx.vercel.app`

### Passo 5: Domínio Customizado (Opcional)

1. Em Vercel → Settings → Domains
2. Clicar em "Add Domain"
3. Digitar: `retiramultas.com.br`
4. Seguir instruções de DNS do seu registrador
5. Aguardar propagação DNS (até 48h)

---

## ✅ Netlify

### Passo 1: Conectar GitHub

1. Ir para https://app.netlify.com/start
2. Clicar em "Connect to Git"
3. Selecionar "GitHub"
4. Autorizar Netlify
5. Selecionar repositório

### Passo 2: Configurar Build

- **Base directory:** (deixar vazio)
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Passo 3: Variáveis de Ambiente

1. Site settings → Build & deploy → Environment
2. Clicar em "Edit variables"
3. Adicionar:
```
VITE_APP_URL=https://seu-site.netlify.app
VITE_WHATSAPP_NUMBER=5547997624005
VITE_ENV=production
```

### Passo 4: Deploy

Clicar em "Deploy site" e aguardar.

### Passo 5: Domínio Customizado

1. Domain settings → Custom domains
2. Clicar em "Add domain"
3. Digitar domínio
4. Configurar DNS no registrador
5. Ativar SSL automático

---

## ✅ Railway

### Passo 1: Conectar GitHub

1. Ir para https://railway.app
2. Clicar em "New Project"
3. Selecionar "Deploy from GitHub"
4. Autorizar Railway
5. Selecionar repositório

### Passo 2: Configurar

**Build Command:**
```bash
npm run build
```

**Start Command:**
```bash
npm run preview
```

### Passo 3: Variáveis de Ambiente

1. Project → Variables
2. Adicionar:
```
VITE_APP_URL=https://seu-dominio.railway.app
VITE_WHATSAPP_NUMBER=5547997624005
VITE_ENV=production
PORT=3000
```

### Passo 4: Deploy

Railway faz deploy automático.

### Passo 5: Domínio Customizado

1. Project → Settings → Domains
2. Clicar em "Add Domain"
3. Digitar domínio
4. Configurar DNS
5. Ativar SSL

---

## ✅ Docker

### Criar Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
```

### Criar .dockerignore

```
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
dist
.DS_Store
```

### Build e Run

```bash
# Build imagem
docker build -t retira-multas:latest .

# Executar localmente
docker run -p 3000:3000 retira-multas:latest

# Acessar: http://localhost:3000
```

### Deploy em Docker Hub

```bash
# Login
docker login

# Tag
docker tag retira-multas:latest seu-usuario/retira-multas:latest

# Push
docker push seu-usuario/retira-multas:latest
```

### Deploy em Servidor com Docker

```bash
# No servidor
docker pull seu-usuario/retira-multas:latest

# Executar
docker run -d \
  -p 80:3000 \
  -e VITE_APP_URL=https://seu-dominio.com \
  -e VITE_WHATSAPP_NUMBER=5547997624005 \
  --name retira-multas \
  seu-usuario/retira-multas:latest
```

---

## ✅ Ubuntu/VPS

### Pré-requisitos

```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar Git
sudo apt install -y git

# Instalar Nginx
sudo apt install -y nginx

# Instalar PM2 (gerenciador de processos)
sudo npm install -g pm2

# Instalar Certbot (SSL)
sudo apt install -y certbot python3-certbot-nginx
```

### Clonar Projeto

```bash
# Ir para diretório de aplicações
cd /var/www

# Clonar repositório
sudo git clone https://github.com/seu-usuario/retira-multas.git
cd retira-multas

# Mudar permissões
sudo chown -R $USER:$USER /var/www/retira-multas
```

### Instalar Dependências

```bash
npm install
npm run build
```

### Configurar PM2

```bash
# Iniciar com PM2
pm2 start "npm run preview" --name "retira-multas"

# Salvar configuração
pm2 save

# Ativar startup
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp /home/$USER
```

### Configurar Nginx

**Criar arquivo de configuração:**

```bash
sudo nano /etc/nginx/sites-available/retira-multas
```

**Adicionar:**

```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Ativar site:**

```bash
sudo ln -s /etc/nginx/sites-available/retira-multas /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Ativar SSL (Let's Encrypt)

```bash
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com
```

**Renovação automática:**

```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

### Verificar Status

```bash
# PM2
pm2 status

# Nginx
sudo systemctl status nginx

# Logs
pm2 logs retira-multas
```

---

## ✅ Hostinger

### Painel Hostinger

1. Fazer login em https://hpanel.hostinger.com
2. Ir para **Hospedagem → Gerenciar**
3. Clicar em **Git**
4. **Conectar repositório GitHub**
5. Selecionar repositório `retira-multas`
6. **Build Command:** `npm run build`
7. **Output Directory:** `dist`
8. Clicar em **Deploy**

### Variáveis de Ambiente

1. **Git → Environment Variables**
2. Adicionar:
```
VITE_APP_URL=https://seu-dominio.com
VITE_WHATSAPP_NUMBER=5547997624005
VITE_ENV=production
```

### Domínio Customizado

1. **Domínios → Adicionar Domínio**
2. Selecionar domínio
3. Configurar DNS
4. SSL ativado automaticamente

---

## 🐛 Troubleshooting

### Build falha no Vercel/Netlify

**Erro:** `Cannot find module`

**Solução:**
```bash
# Limpar cache localmente
rm -rf node_modules package-lock.json
npm install

# Fazer push
git add .
git commit -m "Fix: clean dependencies"
git push
```

### Site não carrega no VPS

**Verificar:**
```bash
# Nginx rodando?
sudo systemctl status nginx

# PM2 rodando?
pm2 status

# Porta 3000 aberta?
sudo ufw allow 3000

# Firewall?
sudo ufw status
```

### Variáveis de ambiente não funcionam

**Verificar:**
1. Arquivo `.env.local` existe?
2. Variáveis começam com `VITE_`?
3. Build foi feito após adicionar variáveis?
4. Reiniciar servidor após mudar variáveis

### WhatsApp não funciona

**Verificar:**
1. Número tem formato correto? `5547997624005`
2. Número é válido?
3. Link: `https://wa.me/5547997624005`
4. Testar em navegador

### Performance lenta

**Otimizações:**
```bash
# Verificar tamanho build
ls -lh dist/

# Usar CDN para imagens
# Ativar compressão Gzip
# Usar cache headers
```

---

## 📞 Suporte

**Problemas?** Entre em contato:
- WhatsApp: https://wa.me/5547997624005
- Email: contato@retiramultas.com.br

---

**Última atualização:** 2026-05-16
