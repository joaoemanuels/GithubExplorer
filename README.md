# GitHub Explorer

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Um dashboard moderno e responsivo para explorar perfis, repositórios e atividades de usuários do GitHub em tempo real.

[🚀 Ver Demo](#demo) • [📖 Documentação](#instalação) • [🛠️ Tecnologias](#tecnologias-utilizadas) • [📝 Licença](#licença)

</div>

---

## 🎯 Sobre o Projeto

**GitHub Explorer** é uma aplicação React que consome a API pública do GitHub para criar uma experiência interativa de exploração de perfis. O projeto foi desenvolvido como prática estruturada de desenvolvimento front-end, com foco em boas práticas, componentização e UX moderna.

Com uma interface intuitiva e responsiva, você pode buscar qualquer usuário do GitHub e visualizar informações detalhadas como repositórios, estatísticas, linguagens favoritas e atividades recentes.

---

## ✨ Funcionalidades

- 🔍 **Busca de Usuários** - Pesquise qualquer usuário do GitHub em tempo real
- 👤 **Perfil Detalhado** - Visualize informações completas do usuário (bio, localização, website, data de entrada)
- 📊 **Estatísticas** - Exiba número de repositórios, seguidores, seguindo e stars recebidas
- 📚 **Repositórios** - Lista completa com descrição, linguagens e informações de cada repo
- 💻 **Linguagens Populares** - Visualize as linguagens mais utilizadas pelo usuário
- 📅 **Atividade Recente** - Acompanhe eventos recentes (push, pull request, issues, etc)
- ⚡ **Loading States** - Estados de carregamento elegantes e informativos
- ❌ **Tratamento de Erros** - Mensagens de erro clara e recuperação intuitiva
- 📱 **Layout Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- 🗺️ **Navegação Fluida** - Transições suaves entre páginas e seções

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca para construção de interfaces com componentes reutilizáveis
- **Vite** - Build tool ultrarrápido para desenvolvimento moderno
- **React Router DOM v6** - Roteamento e navegação entre páginas
- **CSS Modules** - Estilos isolados e sem conflitos de nomenclatura

### APIs & Integração
- **GitHub REST API** - Consumo de dados públicos do GitHub
- **Fetch API** - Requisições HTTP nativas do navegador

### Desenvolvimento
- **JavaScript ES6+** - Sintaxe moderna com arrow functions, destructuring, async/await
- **npm** - Gerenciador de dependências

---

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── UserProfile/          # Componente de perfil do usuário
│   │   ├── index.jsx
│   │   └── userProfile.module.css
│   ├── Sidebar/              # Navegação lateral
│   │   ├── Sidebar.jsx
│   │   └── sidebar.module.css
│   └── RepositoryActivity/       # seção de repositório
│       ├── index.jsx
│       └── repositoryActivity.module.css
│
│
├── pages/
│   ├── Home.jsx              # Página inicial com busca
│   ├── UserProfile.jsx       # Página de perfil detalhado
│   ├── Repositories.jsx      # Página de repositórios
│   ├── Followers.jsx         # Página de seguidores
│   └── NotFound.jsx          # Página 404
│
├── routes/
│   └── routes.jsx            # Configuração de rotas
│
├── services/
│   └── github.js             # Serviço de integração com GitHub API
│
├── hooks/
│   ├── useGitHubUser.js      # Hook customizado para dados de usuário
│   ├── useRepositories.js    # Hook customizado para repositórios
│   └── useFetch.js           # Hook reutilizável para requisições
│
├── layouts/
│   └── MainLayout.jsx        # Layout principal da aplicação
│
├── styles/
│   ├── global.css            # Estilos globais
│   └── variables.css         # Variáveis CSS (cores, fonts, etc)
│
├── assets/
│   ├── icons/                # Ícones SVG
│   └── images/               # Imagens estáticas
│
├── App.jsx                   # Componente raiz
└── main.jsx                  # Entry point da aplicação
```

### 📂 Propósito de Cada Pasta

| Pasta | Descrição |
|-------|-----------|
| **components/** | Componentes reutilizáveis (UserProfile, Cards, etc) |
| **pages/** | Componentes que representam páginas completas |
| **routes/** | Configuração do React Router |
| **services/** | Lógica de integração com APIs (GitHub) |
| **hooks/** | React Hooks customizados para lógica reutilizável |
| **layouts/** | Layouts que envolvem múltiplas páginas |
| **styles/** | Estilos globais e variáveis CSS |
| **assets/** | Recursos estáticos (ícones, imagens) |

---

## 🚀 Instalação

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn
- Git

### Passo a Passo

#### 1️⃣ Clone o repositório
```bash
git clone https://github.com/seu-usuario/github-explorer.git
cd github-explorer
```

#### 2️⃣ Instale as dependências
```bash
npm install
```

#### 3️⃣ Inicie o servidor de desenvolvimento
```bash
npm run dev
```

A aplicação abrirá automaticamente em `http://localhost:5173`

#### 4️⃣ Build para produção
```bash
npm run build
```

#### 5️⃣ Preview da build
```bash
npm run preview
```

---

## 🔌 API do GitHub

### Autenticação
A API pública do GitHub permite até 60 requisições por hora sem autenticação. Para aumentar esse limite para 5.000 requisições, você pode autenticar com um token pessoal.

**Criar um token:**
1. Acesse [github.com/settings/tokens](https://github.com/settings/tokens)
2. Clique em "Generate new token"
3. Selecione permissão `public_repo`
4. Copie o token

**Usar no projeto:**
```javascript
// services/github.js
const headers = {
  'Authorization': `Bearer seu_token_aqui`
};
```

### Endpoints Utilizados

#### Buscar Usuário
```http
GET https://api.github.com/users/{username}
```
Retorna informações básicas do usuário (avatar, bio, localização, etc)

**Exemplo:**
```javascript
const response = await fetch('https://api.github.com/users/torvalds');
const user = await response.json();
console.log(user.login, user.public_repos, user.followers);
```

#### Listar Repositórios
```http
GET https://api.github.com/users/{username}/repos?sort=stars&order=desc&per_page=30
```
Retorna lista de repositórios com detalhes (linguagem, stars, forks, etc)

**Exemplo:**
```javascript
const repos = await fetch('https://api.github.com/users/torvalds/repos?sort=stars');
const data = await repos.json();
```

#### Atividades Recentes
```http
GET https://api.github.com/users/{username}/events/public?per_page=30
```
Retorna eventos recentes (pushes, pull requests, issues, etc)

**Exemplo:**
```javascript
const events = await fetch('https://api.github.com/users/torvalds/events/public');
const data = await events.json();
```

#### Seguidores
```http
GET https://api.github.com/users/{username}/followers?per_page=30
```
Retorna lista de seguidores do usuário

---

## 🎓 Objetivos de Aprendizado

Este projeto foi desenvolvido com foco nos seguintes objetivos:

### ✅ Prática com APIs REST
- Consumir endpoints públicos
- Tratar respostas JSON
- Gerenciar requisições assíncronas
- Implementar retry e tratamento de erros HTTP

### ✅ React Hooks
- **useState** - Gerenciar estado local
- **useEffect** - Efeitos colaterais e ciclo de vida
- **useContext** - Compartilhar dados entre componentes
- **useCallback** - Memoização de funções
- **Hooks customizados** - Criar lógica reutilizável

### ✅ Organização de Código
- Separação de responsabilidades
- Services para lógica de API
- Estrutura de pastas escalável
- Reutilização de componentes

### ✅ Componentização
- Componentes puros e funcionais
- Props e destructuring
- Composição de componentes
- Componentes de layout

### ✅ UX/UI Moderna
- Design responsivo
- Estados de carregamento
- Mensagens de erro intuitivas
- Transições e animações
- Acessibilidade básica

### ✅ Boas Práticas Front-End
- Nomenclatura consistente
- Código limpo e legível
- Performance otimizada
- Tratamento de erros robusto
- Logs informativos para debug

---

## 📸 Screenshots

### Home - Busca de Usuários
```
[Desktop com campo de busca e layout limpo]
```

### Perfil Detalhado
```
[Exibição de avatar, bio, estatísticas e ícones de redes sociais]
```

### Repositórios
```
[Grid com cards de repositórios, linguagens e stars]
```

---

## 🚀 Deploy

### Vercel (Recomendado)

**Passo 1:** Faça push do seu repositório para GitHub

**Passo 2:** Acesse [vercel.com](https://vercel.com)

**Passo 3:** Clique em "New Project" e selecione seu repositório

**Passo 4:** Vercel detectará automaticamente que é um projeto Vite + React

**Passo 5:** Clique em "Deploy"

```bash
# Alternativo: Deploy via CLI
npm install -g vercel
vercel
```

### Netlify

**Passo 1:** Build o projeto
```bash
npm run build
```

**Passo 2:** Acesse [netlify.com](https://netlify.com)

**Passo 3:** Drag & drop da pasta `dist` ou conecte seu GitHub

**Passo 4:** Configure as variáveis de ambiente se necessário

```bash
# Alternativo: Deploy via CLI
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

---

## 🎯 Melhorias Futuras

- [ ] 🌓 **Tema Dark/Light** - Toggle entre temas com localStorage
- [ ] ⭐ **Favoritos** - Salvar usuários favoritos localmente
- [ ] 📄 **Paginação** - Navegação entre páginas de repositórios
- [ ] 📊 **Gráficos** - Visualização com Chart.js (linguagens, contribuições)
- [ ] 🔐 **Autenticação GitHub** - Login com OAuth2 do GitHub
- [ ] ♾️ **Infinite Scroll** - Carregamento automático ao scrollar
- [ ] ⏱️ **Debounce** - Otimizar busca com debounce (react-use)
- [ ] 🧪 **Testes** - Jest + React Testing Library
- [ ] 🐳 **Docker** - Containerização da aplicação
- [ ] 📱 **PWA** - Funcionalidade offline com Service Workers
- [ ] 🔍 **SEO** - Meta tags dinâmicas (react-helmet)
- [ ] 🎨 **Animações** - Framer Motion para transições suaves

---

## 💡 Dicas para Desenvolvimento

### Debug da API
Use o DevTools do navegador (Network tab) para monitorar requisições:
```javascript
console.log('Buscando usuário:', username);
console.time('Requisição');
// ... chamada à API
console.timeEnd('Requisição');
```

### Limite de Rate Limit
Verifique os headers da resposta:
```javascript
const remaining = response.headers.get('X-RateLimit-Remaining');
const reset = response.headers.get('X-RateLimit-Reset');
console.log(`Requisições restantes: ${remaining}`);
```

### Performance
Use React DevTools Profiler para identificar renders desnecessários:
```bash
# Instale a extensão Chrome
# Chrome Web Store > React Developer Tools
```

---

## 📚 Referências

- [GitHub REST API Docs](https://docs.github.com/en/rest)
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Fetch API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**João Emanuel**

Desenvolvedor Front-End em formação, apaixonado por React, JavaScript moderno e UI/UX.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joao-emanuel)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joao-emanuel)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:seu.email@exemplo.com)

---

<div align="center">

### 🌟 Se este projeto foi útil, considere deixar uma estrela! ⭐

Desenvolvido com ❤️ durante curso de React na Alura

</div>