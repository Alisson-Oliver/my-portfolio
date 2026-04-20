interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoLink: string;
  demoLink?: string;
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
  },
];
