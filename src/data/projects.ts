import { l, type Project } from "./types";

const same = (value: string) => l(value, value);

export const projects: Project[] = [
  {
    id: "magos",
    name: same("MAGOS"),
    year: "2026",
    kind: l("Sistema interno", "Internal system"),
    context: same("Kempetro Engenharia"),
    role: l("Desenvolvimento e deploy", "Development and deployment"),
    code: l("Privado", "Private"),
    draft: true,
    tagline: l(
      "Os grupos de distribuição do Microsoft 365 se mantêm sozinhos, sem trabalho manual.",
      "Microsoft 365 distribution groups keep themselves up to date, with no manual work.",
    ),
    overview: [
      l(
        "Os grupos de distribuição eram mantidos à mão. O MAGOS lê os dados do RH, aplica as regras de cada grupo e adiciona ou remove os membros no Exchange Online.",
        "Distribution groups used to be maintained by hand. MAGOS reads HR data, applies each group's rules and adds or removes members on Exchange Online.",
      ),
      l(
        "Um painel web permite ajustar as regras, executar manualmente e consultar o histórico. Cada grupo escolhe se segue a regra global ou a própria.",
        "A web panel lets admins tune rules, run it manually and browse the history. Each group chooses whether to follow the global rule or its own.",
      ),
    ],
    diagram: {
      nodes: [
        { id: "sis", col: 0, row: 0, label: same("SISCONIN API"), sub: l("dados do RH", "HR data") },
        { id: "n8n", col: 0, row: 1, label: same("n8n"), sub: l("agenda e importa", "schedules, imports") },
        { id: "pan", col: 0, row: 2, label: l("Painel web", "Web panel"), sub: l("regras e usuários", "rules and users") },
        { id: "reg", col: 1, row: 2, label: l("Regras por grupo", "Group rules"), sub: l("global ou própria", "global or own") },
        { id: "mot", col: 1, row: 0.5, label: l("Motor", "Engine"), sub: l("PowerShell e Python", "PowerShell and Python") },
        { id: "exo", col: 2, row: 0, label: same("Exchange Online"), sub: l("grupos do Microsoft 365", "Microsoft 365 groups") },
        { id: "db", col: 2, row: 2, label: same("SQLite"), sub: l("histórico e auditoria", "history and audit") },
      ],
      edges: [
        ["sis", "mot"],
        ["n8n", "mot"],
        ["reg", "mot"],
        ["pan", "reg"],
        ["mot", "exo"],
        ["mot", "db"],
      ],
      caption: l(
        "Os dados do RH e as regras chegam ao motor, que aplica só a diferença no Exchange e registra tudo no histórico. O painel edita as regras.",
        "HR data and rules reach the engine, which applies only the difference on Exchange and records everything in the history. The panel edits the rules.",
      ),
    },
    decisions: [
      {
        title: l("Regra por grupo ou global", "Per-group or global rule"),
        text: l(
          "Cada grupo escolhe seguir a regra global ou a própria, o que resolve exceções sem duplicar configuração.",
          "Each group picks the global rule or its own, which handles exceptions without duplicating configuration.",
        ),
      },
      {
        title: l("Auditoria em toda ação crítica", "Audit on every critical action"),
        text: l(
          "Fica registrado quem fez, o que mudou, quando e com qual resultado, e a tela de histórico filtra por qualquer um desses campos.",
          "It records who did it, what changed, when and with what result, and the history screen filters by any of them.",
        ),
      },
      {
        title: l("Troca obrigatória de senha", "Forced password change"),
        text: l(
          "Quando o administrador redefine a senha de alguém, a pessoa precisa criar uma nova no próximo acesso.",
          "When an admin resets someone's password, that person must create a new one on next sign-in.",
        ),
      },
      {
        title: l("Deploy que dá para desfazer", "Deployment you can roll back"),
        text: l(
          "Cada atualização sobe com backup e imagens etiquetadas, para voltar à versão anterior em minutos.",
          "Every update ships with a backup and tagged images, so you can return to the previous version in minutes.",
        ),
      },
    ],
    stack: "PowerShell, Python, Exchange Online, SQLite, Next.js, TypeScript, n8n, Docker",
  },
  {
    id: "aniversariantes",
    name: same("Aniversariantes"),
    year: "2026",
    kind: l("Sistema interno", "Internal system"),
    context: same("Kempetro Engenharia"),
    role: l("Desenvolvimento", "Development"),
    code: l("Privado", "Private"),
    draft: true,
    tagline: l(
      "O painel que mostra quem faz aniversário no mês, pronto para consultar e exportar.",
      "The panel that shows who has a birthday this month, ready to browse and export.",
    ),
    overview: [
      l(
        "Painel web para consultar e exportar os aniversariantes do mês na empresa, com login, filtros e busca.",
        "A web panel to browse and export the company's birthdays of the month, with login, filters and search.",
      ),
    ],
    diagram: {
      nodes: [
        { id: "cli", col: 0, row: 1, label: l("Painel", "Panel"), sub: same("React") },
        { id: "api", col: 1, row: 1, label: same("API"), sub: same("NestJS") },
        { id: "db", col: 2, row: 0.4, label: l("Colaboradores", "Employees"), sub: l("dados dos aniversários", "birthday data") },
        { id: "ex", col: 2, row: 1.8, label: l("Exportação", "Export"), sub: l("arquivo do mês", "file for the month") },
      ],
      edges: [
        ["cli", "api"],
        ["api", "db"],
        ["api", "ex"],
      ],
      caption: l(
        "O painel pede os dados à API, que consulta a base e entrega a lista filtrada ou o arquivo para exportar.",
        "The panel asks the API for data, which queries the base and returns the filtered list or the file to export.",
      ),
    },
    decisions: [],
    stack: "NestJS, React, TypeScript",
  },
  {
    id: "padroes",
    name: l("Padrões do time", "Team standards"),
    year: "2026",
    kind: l("Documentação e processo", "Documentation and process"),
    context: same("Kempetro Engenharia"),
    role: l("Autoria e manutenção", "Authoring and maintenance"),
    code: l("Interno", "Internal"),
    draft: true,
    tagline: l(
      "O que o time segue em todo sistema novo, escrito para qualquer pessoa conseguir aplicar.",
      "What the team follows on every new system, written so anyone can apply it.",
    ),
    overview: [
      l(
        "Um conjunto de padrões de engenharia, segurança, documentação e processos que o time segue em todo sistema novo.",
        "A set of engineering, security, documentation and process standards the team follows on every new system.",
      ),
      l(
        "Cada padrão tem uma regra clara, um modelo e um índice, para que qualquer pessoa encontre o que precisa e saiba o que é obrigatório.",
        "Each standard has a clear rule, a template and an index, so anyone can find what they need and know what is mandatory.",
      ),
    ],
    diagram: {
      nodes: [
        { id: "sis", col: 0, row: 1, label: l("Sistema novo", "New system"), sub: l("antes de ir ao ar", "before going live") },
        { id: "sec", col: 1, row: 0.4, label: l("Gate de segurança", "Security gate"), sub: l("bloqueios obrigatórios", "mandatory blockers") },
        { id: "aud", col: 1, row: 1.8, label: l("Auditoria", "Audit"), sub: l("ações críticas", "critical actions") },
        { id: "doc", col: 2, row: 1, label: l("Documentação", "Documentation"), sub: l("índice e metadados", "index and metadata") },
      ],
      edges: [
        ["sis", "sec"],
        ["sis", "aud"],
        ["sec", "doc"],
        ["aud", "doc"],
      ],
      caption: l(
        "Nenhum sistema novo avança sem passar pelo gate de segurança e sem auditoria, e tudo termina documentado.",
        "No new system moves forward without passing the security gate and audit, and everything ends up documented.",
      ),
    },
    decisions: [
      {
        title: l("Auditoria obrigatória", "Mandatory audit"),
        text: l(
          "Todo sistema registra ações críticas com autor, alvo, data e resultado, e tem uma tela para consultar.",
          "Every system records critical actions with author, target, date and result, and has a screen to browse them.",
        ),
      },
      {
        title: l("Gate de segurança", "Security gate"),
        text: l(
          "Uma lista de bloqueios que impede o sistema de ir ao ar enquanto houver pendência.",
          "A list of blockers that stops a system from going live while anything is pending.",
        ),
      },
      {
        title: l("Gestão de usuários em login próprio", "User management on custom login"),
        text: l(
          "Quem tem login próprio precisa de criar, editar, desativar, excluir e redefinir senha, com troca obrigatória.",
          "Anything with its own login needs create, edit, deactivate, delete and password reset with forced change.",
        ),
      },
      {
        title: l("Documentação com índice", "Documentation with an index"),
        text: l(
          "Metadados padronizados e um índice por pasta, para achar e manter o conteúdo sem depender de ninguém.",
          "Standardized metadata and an index per folder, to find and maintain content without depending on anyone.",
        ),
      },
    ],
    stack: "Markdown, Obsidian, Git",
  },
  {
    id: "events-api",
    name: same("Events API"),
    year: "2025",
    kind: same("API"),
    context: same("Compass UOL"),
    role: l("Desenvolvimento", "Development"),
    code: l("Público", "Public"),
    link: "https://github.com/Alisson-Oliver/ANMAR25_D03_COMPASSEVENT",
    tagline: l(
      "Criar, divulgar e inscrever pessoas em eventos, com serviços da AWS por baixo.",
      "Create, publish and register people for events, with AWS services underneath.",
    ),
    overview: [
      l(
        "API REST para criar e gerenciar eventos e inscrições, feita em NestJS com TypeScript e serviços da AWS.",
        "REST API to create and manage events and registrations, built with NestJS and TypeScript on top of AWS services.",
      ),
      l(
        "Cobre autenticação com verificação de e-mail, usuários, eventos e inscrições, e tem documentação Swagger gerada automaticamente.",
        "It covers authentication with email verification, users, events and registrations, with automatically generated Swagger docs.",
      ),
    ],
    diagram: {
      nodes: [
        { id: "cli", col: 0, row: 1, label: l("Cliente", "Client"), sub: l("app ou navegador", "app or browser") },
        { id: "api", col: 1, row: 1, label: same("API NestJS"), sub: same("Auth, Users, Events") },
        { id: "ddb", col: 2, row: 0, label: same("DynamoDB"), sub: l("usuários e eventos", "users and events") },
        { id: "s3", col: 2, row: 1, label: same("S3"), sub: l("imagens", "images") },
        { id: "ses", col: 2, row: 2, label: same("SES"), sub: l("e-mail de verificação", "verification email") },
        { id: "swg", col: 1, row: 2.15, label: same("Swagger"), sub: l("documentação", "documentation") },
      ],
      edges: [
        ["cli", "api"],
        ["api", "ddb"],
        ["api", "s3"],
        ["api", "ses"],
        ["api", "swg"],
      ],
      caption: l(
        "A API valida o acesso, grava no DynamoDB, guarda as imagens no S3 e envia o e-mail de verificação pelo SES.",
        "The API validates access, writes to DynamoDB, stores images on S3 and sends the verification email through SES.",
      ),
    },
    decisions: [
      {
        title: l("DynamoDB como banco", "DynamoDB as the database"),
        text: l(
          "Três tabelas, de usuários, eventos e inscrições, que combinam com os acessos da API.",
          "Three tables, for users, events and registrations, matching the API's access patterns.",
        ),
      },
      {
        title: l("Imagens no S3", "Images on S3"),
        text: l(
          "Os arquivos ficam no S3, e uma função Lambda pode redimensioná-los a cada envio.",
          "Files live on S3, and a Lambda function can resize them on every upload.",
        ),
      },
      {
        title: l("JWT com validades diferentes", "JWT with different lifetimes"),
        text: l(
          "O token de login dura dias, e o de verificação de e-mail dura só minutos.",
          "The login token lasts days, while the email verification token lasts only minutes.",
        ),
      },
      {
        title: l("Documentação automática", "Automatic documentation"),
        text: l(
          "O Swagger descreve as rotas direto do código, então a documentação não fica para trás.",
          "Swagger describes the routes straight from the code, so the docs never fall behind.",
        ),
      },
    ],
    stack: "NestJS, TypeScript, DynamoDB, S3, SES, JWT, Swagger",
  },
  {
    id: "reservation-api",
    name: same("Reservation API"),
    year: "2025",
    kind: same("API"),
    context: same("Compass UOL"),
    role: l("Desenvolvimento", "Development"),
    code: l("Privado", "Private"),
    tagline: l(
      "Reservas de espaços e recursos que não deixam duas pessoas ocuparem o mesmo horário.",
      "Space and resource bookings that never let two people take the same slot.",
    ),
    overview: [
      l(
        "API REST para reservar espaços e recursos, feita em NestJS com Prisma e SQLite.",
        "REST API to book spaces and resources, built with NestJS, Prisma and SQLite.",
      ),
      l(
        "Controla usuários, clientes, espaços, recursos e reservas, e valida conflitos antes de aceitar uma reserva.",
        "It manages users, clients, spaces, resources and reservations, and checks for conflicts before accepting a booking.",
      ),
    ],
    diagram: {
      nodes: [
        { id: "cli", col: 0, row: 1, label: l("Cliente", "Client"), sub: l("app ou navegador", "app or browser") },
        { id: "api", col: 1, row: 1, label: same("API NestJS"), sub: l("JWT e papéis", "JWT and roles") },
        { id: "res", col: 2, row: 0, label: l("Reservas", "Bookings"), sub: l("valida conflito", "conflict check") },
        { id: "spc", col: 2, row: 1, label: l("Recursos", "Resources"), sub: l("espaços e equipamentos", "spaces and equipment") },
        { id: "db", col: 2, row: 2, label: same("SQLite"), sub: l("via Prisma", "via Prisma") },
        { id: "mail", col: 1, row: 2.15, label: l("E-mail", "Email"), sub: l("aviso por SMTP", "SMTP notice") },
      ],
      edges: [
        ["cli", "api"],
        ["api", "res"],
        ["api", "spc"],
        ["api", "db"],
        ["api", "mail"],
      ],
      caption: l(
        "Cada pedido passa pela autenticação, a reserva é checada contra as existentes e só então grava no banco.",
        "Every request goes through authentication, the booking is checked against existing ones and only then saved.",
      ),
    },
    decisions: [
      {
        title: l("Conflito validado na API", "Conflicts checked in the API"),
        text: l(
          "A regra de horário vive no serviço, então nenhum cliente consegue furá-la.",
          "The time rule lives in the service, so no client can bypass it.",
        ),
      },
      {
        title: l("Prisma com SQLite", "Prisma with SQLite"),
        text: l(
          "Migrações versionadas e um banco simples de subir, bom para desenvolver e testar.",
          "Versioned migrations and a database that is easy to start, good for developing and testing.",
        ),
      },
      {
        title: l("Papéis e dados iniciais", "Roles and seed data"),
        text: l(
          "Um usuário comum e um administrador nascem do seed, com login configurado pelo ambiente.",
          "A regular user and an admin come from the seed, with credentials set by the environment.",
        ),
      },
    ],
    stack: "NestJS, TypeScript, Prisma, SQLite, JWT, Swagger",
  },
  {
    id: "taskly-api",
    name: same("Taskly API"),
    year: "2025",
    kind: same("API"),
    context: same("Compass UOL"),
    role: l("Desenvolvimento", "Development"),
    code: l("Público", "Public"),
    link: "https://github.com/Alisson-Oliver/ANMAR25_DSUP_TASKLY",
    tagline: l(
      "Uma lista de tarefas com status, categoria, prioridade e notas.",
      "A to-do list with status, category, priority and notes.",
    ),
    overview: [
      l(
        "API de lista de tarefas em Node.js, TypeScript e Express, com PostgreSQL rodando em Docker Compose.",
        "To-do list API in Node.js, TypeScript and Express, with PostgreSQL running on Docker Compose.",
      ),
      l(
        "Organiza as tarefas por status, categoria e prioridade, e cada tarefa pode ter várias notas.",
        "It organizes tasks by status, category and priority, and each task can have several notes.",
      ),
    ],
    diagram: {
      nodes: [
        { id: "cli", col: 0, row: 1, label: l("Cliente", "Client"), sub: l("chamadas REST", "REST calls") },
        { id: "api", col: 1, row: 1, label: same("API Express"), sub: l("rotas de tarefas", "task routes") },
        { id: "orm", col: 2, row: 0.4, label: same("TypeORM"), sub: l("entidades", "entities") },
        { id: "pg", col: 2, row: 1.8, label: same("PostgreSQL"), sub: l("em container", "in a container") },
      ],
      edges: [
        ["cli", "api"],
        ["api", "orm"],
        ["orm", "pg"],
      ],
      caption: l(
        "A API recebe a chamada, o TypeORM traduz para o banco e o PostgreSQL guarda as tarefas e as notas.",
        "The API receives the call, TypeORM maps it to the database and PostgreSQL stores tasks and notes.",
      ),
    },
    decisions: [
      {
        title: l("Status e prioridade como enums", "Status and priority as enums"),
        text: l(
          "Os valores aceitos são fechados, o que evita dados soltos e simplifica filtros.",
          "Accepted values are closed, which avoids stray data and simplifies filters.",
        ),
      },
      {
        title: l("Só o título é obrigatório", "Only the title is required"),
        text: l(
          "Criar uma tarefa é rápido, e o resto pode ser preenchido depois.",
          "Creating a task is quick, and the rest can be filled in later.",
        ),
      },
      {
        title: l("Uma tarefa, várias notas", "One task, many notes"),
        text: l(
          "Relação de um para muitos modelada no TypeORM, com cada nota ligada a uma só tarefa.",
          "A one-to-many relation modeled in TypeORM, with each note tied to a single task.",
        ),
      },
      {
        title: l("Banco em container", "Database in a container"),
        text: l(
          "O Docker Compose sobe o PostgreSQL igual em qualquer máquina.",
          "Docker Compose starts PostgreSQL the same way on any machine.",
        ),
      },
    ],
    stack: "Node.js, TypeScript, Express, TypeORM, PostgreSQL, Docker",
  },
  {
    id: "integra-mais",
    name: same("Integra Mais"),
    year: "2025",
    kind: l("Plataforma web", "Web platform"),
    context: l("Projeto próprio", "Own project"),
    role: l("Desenvolvimento", "Development"),
    code: l("Público", "Public"),
    link: "https://github.com/Alisson-Oliver/integra-mais",
    site: "https://integra-mais.vercel.app",
    tagline: l(
      "Cursos e desenvolvimento profissional em um só lugar, com cadastro verificado por e-mail.",
      "Courses and professional development in one place, with email-verified sign-up.",
    ),
    overview: [
      l(
        "Plataforma web de cursos e desenvolvimento profissional, com envio de e-mail de verificação no cadastro.",
        "Web platform for courses and professional development, with a verification email on sign-up.",
      ),
      l(
        "As páginas são renderizadas no servidor com EJS, sobre Express e PostgreSQL.",
        "Pages are rendered on the server with EJS, on top of Express and PostgreSQL.",
      ),
    ],
    diagram: {
      nodes: [
        { id: "cli", col: 0, row: 1, label: l("Navegador", "Browser"), sub: l("páginas e formulários", "pages and forms") },
        { id: "api", col: 1, row: 1, label: l("Express e EJS", "Express and EJS"), sub: l("rotas e páginas", "routes and pages") },
        { id: "pg", col: 2, row: 0.4, label: same("PostgreSQL"), sub: l("usuários e cursos", "users and courses") },
        { id: "mail", col: 2, row: 1.8, label: l("E-mail", "Email"), sub: l("verificação de cadastro", "sign-up verification") },
      ],
      edges: [
        ["cli", "api"],
        ["api", "pg"],
        ["api", "mail"],
      ],
      caption: l(
        "O servidor monta as páginas, guarda os dados no PostgreSQL e envia o e-mail que confirma o cadastro.",
        "The server renders the pages, stores data in PostgreSQL and sends the email that confirms the sign-up.",
      ),
    },
    decisions: [],
    stack: "Node.js, Express, EJS, PostgreSQL",
  },
];

export const findProject = (id: string | undefined) => projects.find((project) => project.id === id);
