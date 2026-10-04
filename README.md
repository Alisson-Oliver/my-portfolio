# My Portfolio

Portfólio pessoal de Alisson Oliveira, feito com React, TypeScript e Vite.

## O que tem

- Página inicial com apresentação, trabalho selecionado, percurso, forma de trabalhar, stack e contato.
- Uma página para cada projeto, com visão geral, diagrama animado de como funciona, decisões técnicas e stack.
- Português e inglês, tema claro e escuro, ambos lembrados no navegador.
- Seções que se constroem conforme a rolagem da página, com animações que respeitam a preferência de movimento reduzido do sistema.

## Stack

- React 19, TypeScript e Vite
- React Router
- CSS puro com tokens de cor e tipografia (Familjen Grotesk e Source Serif 4, via Fontsource)

## Estrutura

```text
src/
  main.tsx                  Entrada da aplicação
  App.tsx                   Provedores e rotas
  index.css                 Importa os estilos

  styles/
    tokens.css              Cores, tipografia, base e animações globais
    home.css                Cabeçalho e seções da página inicial
    project.css             Página de projeto e diagrama

  data/                     Conteúdo separado da interface
    types.ts                Tipos e o helper de texto bilíngue
    projects.ts             Projetos, decisões e diagramas
    profile.ts              Percurso, princípios, stack e contato
    copy.ts                 Textos da interface

  context/                  Idioma, tema e transição entre páginas
  hooks/                    useInView e useMediaQuery
  components/               Cabeçalho, seções, diagrama e barra de progresso
  pages/                    HomePage e ProjectPage
```

## Como editar o conteúdo

- Novo projeto ou ajuste de texto: `src/data/projects.ts`. Cada texto tem uma versão em português e outra em inglês, criadas com `l("português", "inglês")`.
- Percurso, princípios, stack e contato: `src/data/profile.ts`.

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: checagem de tipos e build de produção
- `npm run preview`: serve a build de produção
- `npm run lint`: validação com ESLint

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois, acesse a URL exibida no terminal (normalmente `http://localhost:5173`).

## Licença

Este repositório usa licença proprietária com uso restrito ao autor.
Veja o arquivo `LICENSE` para os termos completos.
