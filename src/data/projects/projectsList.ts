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
