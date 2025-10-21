# 📚 A Arte de Criar Prompts Eficazes - E-book Interativo# Welcome to your Lovable project

<div align="center">## Project info

**E-book completo e interativo sobre Prompt Engineering para educadores e profissionais\*\***URL\*\*: https://lovable.dev/projects/93ca36d8-c944-4311-9286-1b220d0068ad

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#)## How can I edit this code?

[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)](https://www.typescriptlang.org/)There are several ways of editing your application.

[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-blue)](https://tailwindcss.com/)

**Use Lovable**

[🚀 Demo Online](#) | [🐛 Reportar Bug](https://github.com/pedroallas/educ-ia-para-educadores/issues) | [💡 Solicitar Feature](https://github.com/pedroallas/educ-ia-para-educadores/issues)

Simply visit the [Lovable Project](https://lovable.dev/projects/93ca36d8-c944-4311-9286-1b220d0068ad) and start prompting.

</div>

Changes made via Lovable will be committed automatically to this repo.

---

**Use your preferred IDE**

## 🌟 Sobre o Projeto

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

Este é um e-book interativo e moderno desenvolvido com React.js, focado em ensinar **Prompt Engineering** de forma prática e acessível. O projeto foi criado pela **Padevs School** com o objetivo de capacitar educadores e profissionais a dominarem a arte de criar prompts eficazes para modelos de IA.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### ✨ Principais Características

Follow these steps:

- 🎯 **Conteúdo Completo**: Cobertura abrangente desde fundamentos até técnicas avançadas

- 🎮 **Quiz Interativo**: Teste seus conhecimentos com correção automática```sh

- 🤖 **Simulador de Prompts**: Pratique e receba feedback em tempo real# Step 1: Clone the repository using the project's Git URL.

- 📱 **100% Responsivo**: Experiência otimizada para todos os dispositivosgit clone <YOUR_GIT_URL>

- ♿ **Acessível**: Modo alto contraste, ajuste de fontes e narração de texto

- 📥 **Downloadável**: Disponível em PDF e DOCX# Step 2: Navigate to the project directory.

- 🎨 **Design Moderno**: Interface elegante com animações suavescd <YOUR_PROJECT_NAME>

- 🔊 **Text-to-Speech**: Leitura automática do conteúdo

- 📑 **Navegação Intuitiva**: Menu lateral fixo com indicador de progresso# Step 3: Install the necessary dependencies.

npm i

---

# Step 4: Start the development server with auto-reloading and an instant preview.

## 🚀 Começandonpm run dev

````

### Pré-requisitos

**Edit a file directly in GitHub**

Certifique-se de ter instalado:

- Navigate to the desired file(s).

- **Node.js** (versão 18 ou superior)- Click the "Edit" button (pencil icon) at the top right of the file view.

- **npm** ou **yarn** ou **bun**- Make your changes and commit the changes.

- **Git**

**Use GitHub Codespaces**

### 📦 Instalação

- Navigate to the main page of your repository.

1. **Clone o repositório**- Click on the "Code" button (green button) near the top right.

- Select the "Codespaces" tab.

```bash- Click on "New codespace" to launch a new Codespace environment.

git clone https://github.com/pedroallas/educ-ia-para-educadores.git- Edit files directly within the Codespace and commit and push your changes once you're done.

cd educ-ia-para-educadores

```## What technologies are used for this project?



2. **Instale as dependências**This project is built with:



```bash- Vite

# Com npm- TypeScript

npm install- React

- shadcn-ui

# Ou com yarn- Tailwind CSS

yarn install

## How can I deploy this project?

# Ou com bun

bun installSimply open [Lovable](https://lovable.dev/projects/93ca36d8-c944-4311-9286-1b220d0068ad) and click on Share -> Publish.

````

## Can I connect a custom domain to my Lovable project?

3. **Execute o projeto em desenvolvimento**

Yes, you can!

```bash

# Com npmTo connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

npm run dev

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

# Ou com yarn
yarn dev

# Ou com bun
bun dev
```

4. **Abra no navegador**

Acesse [http://localhost:5173](http://localhost:5173) para ver o projeto rodando.

---

## 🏗️ Estrutura do Projeto

```
e-book-inteligencia-artificial/
├── public/                          # Arquivos públicos estáticos
│   ├── Logo Padevs School.svg      # Logo da escola
│   ├── foto.svg                     # Foto do desenvolvedor
│   └── favicon.ico                  # Ícone do site
├── src/
│   ├── components/                  # Componentes React reutilizáveis
│   │   ├── ui/                     # Componentes de UI base (shadcn)
│   │   ├── AccessibilityControls.tsx    # Controles de acessibilidade
│   │   ├── ContentSection.tsx      # Seções de conteúdo
│   │   ├── DownloadSection.tsx     # Área de downloads
│   │   ├── ExampleCard.tsx         # Cartões de exemplo
│   │   ├── Footer.tsx              # Rodapé do site
│   │   ├── Hero.tsx                # Seção hero (topo)
│   │   ├── Navbar.tsx              # Barra de navegação
│   │   ├── NextSteps.tsx           # Próximos passos e comunidades
│   │   ├── PromptSimulator.tsx     # Simulador interativo
│   │   ├── PromptTemplate.tsx      # Templates de prompts
│   │   ├── Quiz.tsx                # Quiz interativo
│   │   ├── TableOfContents.tsx     # Índice lateral
│   │   └── VideoPlayer.tsx         # Player de vídeos
│   ├── hooks/                      # Custom hooks React
│   ├── lib/                        # Utilitários e helpers
│   ├── pages/                      # Páginas da aplicação
│   │   └── Index.tsx               # Página principal
│   ├── App.tsx                     # Componente raiz
│   ├── index.css                   # Estilos globais
│   └── main.tsx                    # Entry point
├── .gitignore                      # Arquivos ignorados pelo Git
├── components.json                 # Configuração do shadcn/ui
├── eslint.config.js                # Configuração do ESLint
├── index.html                      # HTML base
├── package.json                    # Dependências e scripts
├── postcss.config.js               # Configuração do PostCSS
├── README.md                       # Este arquivo
├── tailwind.config.ts              # Configuração do Tailwind CSS
├── tsconfig.json                   # Configuração do TypeScript
└── vite.config.ts                  # Configuração do Vite
```

---

## 🎨 Tecnologias Utilizadas

### Core

- **[React 18.3.1](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5.6.2](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem
- **[Vite 5.4.2](https://vitejs.dev/)** - Build tool ultra-rápida

### Styling

- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizáveis
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis headless

### Funcionalidades

- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[React Router](https://reactrouter.com/)** - Navegação entre páginas
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications elegantes

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build
npm run build            # Cria build de produção otimizado

# Preview
npm run preview          # Visualiza o build de produção localmente

# Lint
npm run lint             # Executa verificação de código
```

---

## 🎯 Funcionalidades Implementadas

### ✅ Visual Design

- [x] Ícones e ilustrações em todas as seções
- [x] Design moderno e atrativo
- [x] Animações suaves e transições
- [x] Gradientes e efeitos visuais

### ✅ Navegação

- [x] Menu lateral fixo com âncoras
- [x] Indicador de seção ativa
- [x] Navegação responsiva
- [x] Scroll suave entre seções

### ✅ Experiência Interativa

- [x] Quiz com correção automática
- [x] Simulador de prompts com feedback
- [x] Análise de qualidade de prompts
- [x] Exemplos práticos clicáveis

### ✅ Multimídia

- [x] Suporte a vídeos do YouTube
- [x] Player responsivo
- [x] Carregamento lazy de conteúdo

### ✅ Responsividade

- [x] Design mobile-first
- [x] Adaptação para tablets
- [x] Fontes e espaçamentos responsivos
- [x] Menu hamburger no mobile

### ✅ Correções de Conteúdo

- [x] Seções repetitivas removidas
- [x] Templates simplificados
- [x] Contexto sobre Padevs School
- [x] Botões de cópia funcionais

### ✅ Acessibilidade

- [x] Modo alto contraste
- [x] Ajuste de tamanho de fonte
- [x] Narração text-to-speech
- [x] ARIA labels adequados
- [x] Navegação por teclado

### ✅ Downloads

- [x] Seção de downloads estruturada
- [x] Suporte para PDF e DOCX
- [x] Interface intuitiva

### ✅ Próximos Passos

- [x] Links reais para comunidades
- [x] Recursos adicionais
- [x] Call-to-action motivacional

---

## 🌐 Publicação e Deploy

### Opção 1: Vercel (Recomendado)

1. Instale a Vercel CLI:

```bash
npm i -g vercel
```

2. Faça login e deploy:

```bash
vercel login
vercel
```

3. Siga as instruções no terminal

### Opção 2: Netlify

1. Instale a Netlify CLI:

```bash
npm i -g netlify-cli
```

2. Build e deploy:

```bash
npm run build
netlify deploy --prod
```

### Opção 3: GitHub Pages

1. Adicione ao `vite.config.ts`:

```typescript
export default defineConfig({
  base: "/educ-ia-para-educadores/",
  // ... resto da config
});
```

2. Instale gh-pages:

```bash
npm install --save-dev gh-pages
```

3. Adicione ao `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:

```bash
npm run deploy
```

---

## 🎓 Como Usar Este E-book

### Para Estudantes

1. **Leia sequencialmente**: Comece pela introdução e siga a ordem das seções
2. **Faça o quiz**: Teste seus conhecimentos após cada capítulo
3. **Use o simulador**: Pratique criando prompts e recebendo feedback
4. **Copie os templates**: Use os modelos fornecidos como base
5. **Participe das comunidades**: Junte-se aos grupos recomendados

### Para Educadores

1. **Adapte o conteúdo**: Use como material base para suas aulas
2. **Crie atividades**: Utilize os exemplos para exercícios práticos
3. **Compartilhe**: Envie o link para seus alunos
4. **Contribua**: Sugira melhorias e novos exemplos

### Para Desenvolvedores

1. **Fork o repositório**: Crie sua própria versão
2. **Customize**: Adapte para suas necessidades
3. **Contribua**: Envie pull requests com melhorias
4. **Reporte bugs**: Ajude a melhorar o projeto

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Siga estes passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 🐛 Reportando Bugs

Encontrou um problema? Abra uma [issue](https://github.com/pedroallas/educ-ia-para-educadores/issues) incluindo:

- Descrição do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Navegador e dispositivo

---

## 👨‍💻 Autor

**Pedro Allas dos Santos Borges**

- Professor e Engenheiro de Software
- Portfolio: [https://portifoliopedroallas.netlify.app/](https://portifoliopedroallas.netlify.app/)
- GitHub: [@pedroallas](https://github.com/pedroallas)
- Email: pedroallas@professor.to.gov.br

---

## 🙏 Agradecimentos

- Comunidade React.js
- Projeto shadcn/ui
- OpenAI, Anthropic e outros pioneiros em IA
- Todos os educadores que utilizam este material
- Contribuidores do projeto

---

## ⭐ Mostre seu apoio

Se este projeto foi útil para você, considere:

- ⭐ Dar uma estrela no GitHub
- 🐛 Reportar bugs
- 💡 Sugerir melhorias
- 🔄 Compartilhar com outros educadores
- 🤝 Contribuir com código

---

<div align="center">

**Desenvolvido com ❤️ por [Pedro Allas](https://portifoliopedroallas.netlify.app/)**

**© 2025 A Arte de Criar Prompts Eficazes. Todos os direitos reservados.**

</div>
