# My Portfolio

Portfólio pessoal desenvolvido com React + TypeScript + Vite, com foco em apresentar:

- quem eu sou;
- projetos selecionados;
- stack e habilidades;
- canais de contato.

## Objetivo

Este projeto funciona como minha vitrine técnica e profissional.

Os principais objetivos são:

- centralizar minhas informações profissionais em uma única página;
- exibir projetos e tecnologias de forma clara;
- manter uma base simples de evoluir (conteúdo em arquivos de dados e interface separada por seções/componentes).

## Stack utilizada

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide React e React Icons

## Estrutura atual do projeto

A aplicação está organizada em blocos simples:

```text
src/
  App.tsx                 # Orquestra as seções da página
  main.tsx                # Bootstrap da aplicação
  index.css               # Tema, tokens visuais e estilos globais

  sections/               # Blocos principais da landing page
    Hero.tsx
    About.tsx
    Projects.tsx
    Skills.tsx
    Contact.tsx

  components/             # Componentes reutilizáveis das seções
    Header.tsx
    AboutCard.tsx
    ProjectCard.tsx
    SkillCard.tsx
    ContactCard.tsx

  data/                   # Conteúdo separado da UI (por domínio)
    hero/hero.ts
    about/about.ts
    about/softSkills.ts
    projects/projects.ts
    projects/projectsList.ts
    skills/skills.ts
    skills/skillsList.ts
    contacts/contactsList.ts

  utils/
    getAlias.ts           # Gera alias a partir do nome completo
```

## Como o app está estruturado em runtime

`App.tsx` monta a página nesta ordem:

1. Header
2. Hero
3. About
4. Projects
5. Skills
6. Contact

Cada seção consome dados de `src/data/...`, o que facilita editar conteúdo sem mexer na estrutura dos componentes.

## Configurações que estão em uso

### Vite

- Plugins ativos: React e Tailwind via `@tailwindcss/vite`.
- Alias configurado:
  - `@` -> `./src`

Arquivo: `vite.config.ts`.

### TypeScript

- Projeto dividido em:
  - `tsconfig.app.json` (aplicação React)
  - `tsconfig.node.json` (ambiente Node, ex.: Vite config)
- Paths ativos:
  - `@/*` -> `./src/*`
  - `@components/*` -> `./src/components/*`

### Tailwind e tema

- Tailwind v4 com `@import "tailwindcss"` em `src/index.css`.
- Tokens de cor, tipografia e utilitários visuais (como `.glass` e `.text-gradient`) definidos no CSS global.

### ESLint

Configuração com:

- `@eslint/js`
- `typescript-eslint`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

Arquivo: `eslint.config.js`.

## Scripts

- `npm run dev` -> sobe ambiente de desenvolvimento
- `npm run build` -> executa TypeScript build + Vite build
- `npm run preview` -> preview da build de produção
- `npm run lint` -> validação com ESLint

## Como rodar localmente

```bash
npm install
npm run dev -- --host
```

Depois, acesse a URL exibida no terminal (normalmente `http://localhost:5173`).

## Licença

Este repositório usa licença proprietária com uso restrito ao autor.
Veja o arquivo `LICENSE` para os termos completos.
