interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  repoLink: string;
  demoLink?: string;
  problemSolved: string;
  features: string[];
  difficultChallenge: string;
}

export const projects: Project[] = [
  {
    id: "taskly",
    title: "Taskly API",
    description:
      "API para gerenciamento de tarefas com categorias, prioridades e status.",
    techStack: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Docker",
    ],
    repoLink: "https://github.com/Alisson-Oliver/ANMAR25_DSUP_TASKLY",
    problemSolved:
      "Sistemas tradicionais de processamento de dados não conseguem lidar de forma eficiente com grandes volumes de eventos em tempo real. Isso gera alta latência, dificuldade de escalabilidade e limita a capacidade de análise rápida dos dados. Além disso, muitas soluções não integram bem processamento em tempo real (streaming) com processamento em lote (batch), dificultando a obtenção de insights consistentes e atualizados.",
    features: [
      "Rate limiting adaptativo por cliente e endpoint",
      "Circuit breaker pattern",
      "Cache distribuído com Redis",
      "API versioning",
      "Autenticação JWT com refresh tokens",
      "Load balancing round-robin",
      "Request/Response transformation",
      "Request logging e tracing",
    ],
    longDescription:
      "Um gateway de API enterprise-grade projetado para gerenciar, proteger e monitorar tráfego de APIs em escala. Implementa padrões de microserviços com alta disponibilidade e tolerância a falhas",
    difficultChallenge:
      "Sistemas tradicionais de processamento de dados não conseguem lidar de forma eficiente com grandes volumes de eventos em tempo real. Isso gera alta latência, dificuldade de escalabilidade e limita a capacidade de análise rápida dos dados. Além disso, muitas soluções não integram bem processamento em tempo real (streaming) com processamento em lote (batch), dificultando a obtenção de insights consistentes e atualizados.",
  },
  {
    id: "compass-events",
    title: "Events API",
    description:
      "API de eventos com autenticação JWT, controle de papéis e integrações com AWS.",
    techStack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "JWT",
      "DynamoDB",
      "S3",
      "SES",
      "Swagger",
    ],
    repoLink: "https://github.com/Alisson-Oliver/ANMAR25_D03_COMPASSEVENT",
    problemSolved:
      "Sistemas tradicionais de processamento de dados não conseguem lidar de forma eficiente com grandes volumes de eventos em tempo real. Isso gera alta latência, dificuldade de escalabilidade e limita a capacidade de análise rápida dos dados. Além disso, muitas soluções não integram bem processamento em tempo real (streaming) com processamento em lote (batch), dificultando a obtenção de insights consistentes e atualizados.",
    features: [
      "Rate limiting adaptativo por cliente e endpoint",
      "Circuit breaker pattern",
      "Cache distribuído com Redis",
      "API versioning",
      "Autenticação JWT com refresh tokens",
      "Load balancing round-robin",
      "Request/Response transformation",
      "Request logging e tracing",
    ],
    longDescription:
      "Um gateway de API enterprise-grade projetado para gerenciar, proteger e monitorar tráfego de APIs em escala. Implementa padrões de microserviços com alta disponibilidade e tolerância a falhas",
    difficultChallenge:
      "Sistemas tradicionais de processamento de dados não conseguem lidar de forma eficiente com grandes volumes de eventos em tempo real. Isso gera alta latência, dificuldade de escalabilidade e limita a capacidade de análise rápida dos dados. Além disso, muitas soluções não integram bem processamento em tempo real (streaming) com processamento em lote (batch), dificultando a obtenção de insights consistentes e atualizados.",
  },
  {
    id: "integra-mais",
    title: "Integra Mais",
    description:
      "Plataforma web de cursos e desenvolvimento profissional com envio de e-mails de verificação.",
    techStack: [
      "Node.js",
      "Express",
      "EJS",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "Nodemailer",
      "Cloudinary",
    ],
    repoLink: "https://github.com/Alisson-Oliver/integra-mais",
    problemSolved:
      "Pessoas em busca de qualificação profissional e inserção no mercado de trabalho não tinham, em um único lugar, acesso simples a cursos, validação de identidade, acompanhamento de inscrição e ponte com empresas. O projeto Integra + implementa uma plataforma web centralizada com autenticação, verificação de e-mail por código, gestão de perfil com upload de avatar em nuvem, catálogo de cursos com inscrição, área administrativa para criação de novos cursos e base de relacionamento entre usuários e cursos via Sequelize, formando a estrutura para um banco de talentos.",

    features: [
      "Cadastro, login e logout de usuários",
      "Verificação de e-mail com código de 6 dígitos e expiração",
      "Autenticação com JWT e proteção de rotas",
      "Controle de perfil com edição de dados pessoais",
      "Upload e atualização de foto de perfil via Cloudinary",
      "Catálogo de cursos profissionalizantes",
      "Inscrição de usuários em cursos",
      "Página de Meus Cursos para alunos autenticados",
      "Dashboard administrativo para criação de cursos",
      "Controle de permissão por papel (admin e usuário comum)",
      "Validações no front-end para CPF, telefone, senha e data",
      "Páginas institucionais e fluxo de navegação completo em EJS",
    ],

    longDescription:
      "O Integra + é uma plataforma web de capacitação profissional que une cursos gratuitos e empregabilidade em um único ambiente. Com Node.js, Express, PostgreSQL e EJS, o sistema permite cadastro, verificação de e-mail, atualização de perfil e inscrição em cursos. Também possui área administrativa para gestão de conteúdo e estrutura inicial de banco de talentos para aproximar alunos e empresas parceiras.",

    difficultChallenge:
      "Um dos maiores desafios técnicos desse projeto foi gerenciar um fluxo de autenticação e verificação entre backend, sessão e interface: gerar e expirar código de verificação, controlar tentativas e reenvio, manter segurança no login com JWT, e ao mesmo tempo garantir boa experiência do usuário no front-end.",
  },
  {
    id: "compass-reservation",
    title: "Reservation API",
    description:
      "API de reservas com autenticação, rate limiting e validação de dados.",
    techStack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "Prisma",
      "SQLite",
      "Swagger",
      "JWT",
    ],
    repoLink: "#",
    problemSolved:
      "Sistemas tradicionais de processamento de dados não conseguem lidar de forma eficiente com grandes volumes de eventos em tempo real. Isso gera alta latência, dificuldade de escalabilidade e limita a capacidade de análise rápida dos dados. Além disso, muitas soluções não integram bem processamento em tempo real (streaming) com processamento em lote (batch), dificultando a obtenção de insights consistentes e atualizados.",
    features: [
      "Rate limiting adaptativo por cliente e endpoint",
      "Circuit breaker pattern",
      "Cache distribuído com Redis",
      "API versioning",
      "Autenticação JWT com refresh tokens",
      "Load balancing round-robin",
      "Request/Response transformation",
      "Request logging e tracing",
    ],
    longDescription:
      "Um gateway de API enterprise-grade projetado para gerenciar, proteger e monitorar tráfego de APIs em escala. Implementa padrões de microserviços com alta disponibilidade e tolerância a falhas",
    difficultChallenge:
      "Sistemas tradicionais de processamento de dados não conseguem lidar de forma eficiente com grandes volumes de eventos em tempo real. Isso gera alta latência, dificuldade de escalabilidade e limita a capacidade de análise rápida dos dados. Além disso, muitas soluções não integram bem processamento em tempo real (streaming) com processamento em lote (batch), dificultando a obtenção de insights consistentes e atualizados.",
  },
];
