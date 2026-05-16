# 🔧 Guia de Setup - Passo a Passo

Este documento contém instruções detalhadas para configurar o projeto localmente.

---

## 📋 Índice

1. [Requisitos](#requisitos)
2. [Instalação Local](#instalação-local)
3. [Estrutura de Pastas](#estrutura-de-pastas)
4. [Variáveis de Ambiente](#variáveis-de-ambiente)
5. [Desenvolvimento](#desenvolvimento)
6. [Build](#build)
7. [Troubleshooting](#troubleshooting)

---

## ✅ Requisitos

### Windows

1. **Node.js 18+**
   - Baixar em https://nodejs.org
   - Instalar versão LTS
   - Verificar: `node --version`

2. **Git** (opcional, mas recomendado)
   - Baixar em https://git-scm.com
   - Instalar com opções padrão

3. **Editor de Código** (recomendado)
   - VS Code: https://code.visualstudio.com
   - Sublime Text: https://www.sublimetext.com

### macOS

```bash
# Instalar Homebrew (se não tiver)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar Node.js
brew install node

# Verificar
node --version
npm --version
```

### Linux (Ubuntu/Debian)

```bash
# Atualizar sistema
sudo apt update

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar
node --version
npm --version
```

---

## 🚀 Instalação Local

### Passo 1: Extrair Projeto

**Windows:**
- Clicar com botão direito em `retira-multas.zip`
- Selecionar "Extrair Tudo..."
- Escolher pasta de destino
- Abrir pasta extraída

**macOS/Linux:**
```bash
unzip retira-multas.zip
cd retira-multas
```

### Passo 2: Abrir Terminal

**Windows:**
- Abrir PowerShell ou CMD
- Navegar até pasta: `cd C:\caminho\para\retira-multas`

**macOS/Linux:**
```bash
cd /caminho/para/retira-multas
```

### Passo 3: Instalar Dependências

```bash
npm install
```

**Isso vai:**
- Baixar todas as dependências (React, Vite, Tailwind, etc)
- Criar pasta `node_modules/`
- Gerar arquivo `package-lock.json`

**Tempo:** ~2-5 minutos (depende da internet)

### Passo 4: Criar Arquivo .env.local

```bash
# Copiar arquivo de exemplo
cp .env.example .env.local

# Editar arquivo
# Windows: notepad .env.local
# macOS/Linux: nano .env.local
```

**Conteúdo mínimo:**
```env
VITE_APP_URL=http://localhost:3000
VITE_WHATSAPP_NUMBER=5547997624005
VITE_ENV=development
```

### Passo 5: Iniciar Servidor

```bash
npm run dev
```

**Saída esperada:**
```
  VITE v7.1.7  ready in 598 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
```

**Abrir no navegador:** http://localhost:3000

---

## 📁 Estrutura de Pastas

```
retira-multas/
│
├── client/                          # Frontend React
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx            # Página principal (12 seções)
│   │   ├── components/
│   │   │   ├── ui/                 # shadcn/ui components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   └── ... (30+ componentes)
│   │   │   ├── Map.tsx             # Componente mapa Brasil
│   │   │   ├── ErrorBoundary.tsx   # Error handling
│   │   │   └── ManusDialog.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx    # Dark/Light theme
│   │   ├── hooks/
│   │   │   └── (custom hooks)
│   │   ├── lib/
│   │   │   └── (utilitários)
│   │   ├── App.tsx                 # Componente raiz
│   │   ├── main.tsx                # Entry point
│   │   └── index.css               # Estilos globais
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   └── manifest.json
│   └── index.html                  # HTML base
│
├── package.json                    # Dependências
├── vite.config.ts                 # Config Vite
├── tsconfig.json                  # Config TypeScript
├── tailwind.config.js             # Config Tailwind
├── postcss.config.js              # Config PostCSS
├── .env.example                   # Variáveis exemplo
├── .env.local                     # Variáveis locais (não commitar)
├── .gitignore                     # Arquivos ignorados
├── README.md                      # Documentação principal
├── SETUP.md                       # Este arquivo
└── DEPLOYMENT.md                  # Guia de deploy

```

---

## 🔐 Variáveis de Ambiente

### Arquivo `.env.local`

**Desenvolvimento:**
```env
# URL da aplicação
VITE_APP_URL=http://localhost:3000

# Ambiente
VITE_ENV=development

# WhatsApp
VITE_WHATSAPP_NUMBER=5547997624005
VITE_WHATSAPP_MESSAGE=Olá! Vim pelo site da Retira Multas e gostaria de atendimento.

# Debug
VITE_DEBUG=true

# Porta
PORT=3000
```

**Produção:**
```env
VITE_APP_URL=https://seu-dominio.com
VITE_ENV=production
VITE_WHATSAPP_NUMBER=5547997624005
VITE_DEBUG=false
```

### Variáveis Disponíveis

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `VITE_APP_URL` | URL da aplicação | `http://localhost:3000` |
| `VITE_ENV` | Ambiente (dev/prod) | `development` |
| `VITE_WHATSAPP_NUMBER` | Número WhatsApp | `5547997624005` |
| `VITE_DEBUG` | Modo debug | `true` |
| `PORT` | Porta servidor | `3000` |

---

## 💻 Desenvolvimento

### Iniciar Servidor

```bash
npm run dev
```

**Recursos:**
- ✅ Hot Module Replacement (HMR)
- ✅ Recarregamento automático
- ✅ Erros em tempo real
- ✅ Suporte TypeScript

### Editar Código

**Exemplo: Mudar título da página**

1. Abrir `client/src/pages/Home.tsx`
2. Procurar por `<h1>`
3. Mudar texto
4. Salvar (Ctrl+S)
5. Navegador recarrega automaticamente

### Verificar Tipos TypeScript

```bash
npm run type-check
```

**Isso verifica:**
- Erros de tipo
- Imports não usados
- Variáveis não declaradas

---

## 🏗️ Build

### Build para Produção

```bash
npm run build
```

**Isso gera:**
- Pasta `dist/` com arquivos otimizados
- JavaScript minificado
- CSS otimizado
- Imagens comprimidas

**Tamanho típico:** ~150-200KB (gzipped)

### Preview da Build

```bash
npm run preview
```

**Isso:**
- Simula produção localmente
- Serve arquivos de `dist/`
- Acesso em http://localhost:4173

---

## 🐛 Troubleshooting

### Erro: "npm: command not found"

**Solução:**
- Node.js não está instalado
- Baixar e instalar de https://nodejs.org
- Reiniciar terminal
- Verificar: `node --version`

### Erro: "Port 3000 already in use"

**Solução 1 - Usar porta diferente:**
```bash
npm run dev -- --port 3001
```

**Solução 2 - Matar processo na porta 3000:**

Windows:
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

macOS/Linux:
```bash
lsof -ti:3000 | xargs kill -9
```

### Erro: "Cannot find module '@'"

**Solução:**
```bash
# Limpar node_modules
rm -rf node_modules package-lock.json

# Reinstalar
npm install

# Reiniciar servidor
npm run dev
```

### Erro: "Module not found: 'react'"

**Solução:**
```bash
npm install
npm run dev
```

### Site não carrega imagens

**Verificar:**
1. URLs das imagens em `Home.tsx`
2. Se CDN está acessível
3. Console do navegador (F12) para erros

### Estilos não aparecem

**Solução:**
```bash
# Limpar cache
rm -rf node_modules/.vite

# Reiniciar
npm run dev
```

### Build falha

**Solução:**
```bash
# Verificar erros TypeScript
npm run type-check

# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install

# Tentar build novamente
npm run build
```

---

## 📚 Recursos Úteis

- **React:** https://react.dev
- **Vite:** https://vitejs.dev
- **Tailwind CSS:** https://tailwindcss.com
- **TypeScript:** https://www.typescriptlang.org
- **shadcn/ui:** https://ui.shadcn.com

---

## 🎯 Próximos Passos

1. ✅ Setup local completo
2. ✅ Editar conteúdo (textos, imagens)
3. ✅ Testar responsividade (F12 → Mobile)
4. ✅ Build para produção (`npm run build`)
5. ✅ Deploy em plataforma (Vercel, Netlify, etc)

---

## 💬 Suporte

**Dúvidas?** Entre em contato:
- WhatsApp: https://wa.me/5547997624005
- Email: contato@retiramultas.com.br

---

**Última atualização:** 2026-05-16
