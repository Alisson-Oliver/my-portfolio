import { l, type Localized } from "./types";

export const contact = {
  email: "alisson.oliver.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/alisson-oliver/",
  github: "https://github.com/Alisson-Oliver",
};

export const heroFacts: { label: Localized; value: Localized }[] = [
  {
    label: l("Função", "Role"),
    value: l("Desenvolvedor de software, full stack com foco em backend", "Software developer, full stack with a backend focus"),
  },
  { label: l("Empresa", "Company"), value: l("Kempetro Engenharia, Salvador", "Kempetro Engenharia, Salvador") },
  {
    label: l("Estudando", "Studying"),
    value: l("Ciência da Computação na UNIFACS, depois segurança da informação", "Computer Science at UNIFACS, then information security"),
  },
];

export const heroLead = l(
  "Construo sistemas internos do banco de dados à tela. Prefiro o caminho direto, deixo tudo auditável e documento para que outra pessoa consiga seguir.",
  "I build internal systems from the database to the screen. I choose the direct path, make everything auditable and document it so someone else can follow.",
);

export const career: { date: Localized; title: Localized; org: string; text?: Localized }[] = [
  {
    date: l("Setembro de 2026 até hoje", "September 2026 to now"),
    title: l("Desenvolvedor de Software", "Software Developer"),
    org: "Kempetro Engenharia",
    text: l(
      "Desenvolvimento full stack de sistemas internos, deploy, revisões de segurança e os padrões de documentação do time.",
      "Full stack development of internal systems, deployment, security reviews and the team's documentation standards.",
    ),
  },
  {
    date: l("Setembro de 2025 a setembro de 2026", "September 2025 to September 2026"),
    title: l("Estagiário de Desenvolvimento de Software", "Software Developer Intern"),
    org: "Kempetro Engenharia",
    text: l(
      "Aprendi TypeScript, NestJS e AWS construindo sistemas usados pela empresa inteira.",
      "Learned TypeScript, NestJS and AWS while building systems used across the company.",
    ),
  },
  {
    date: l("Março a setembro de 2025", "March to September 2025"),
    title: l("Estagiário de Desenvolvimento Back-End", "Back-End Software Developer Intern"),
    org: "Compass UOL",
    text: l(
      "Serviços de backend, APIs e arquiteturas escaláveis com Node.js, onde nasceu a minha base em Git, GitHub e Express.",
      "Backend services, APIs and scalable architectures with Node.js, where my Git, GitHub and Express foundations started.",
    ),
  },
  {
    date: l("Válida até 2028", "Valid until 2028"),
    title: l("AWS Certified Cloud Practitioner", "AWS Certified Cloud Practitioner"),
    org: "Amazon Web Services",
  },
  {
    date: l("Agosto de 2023 a julho de 2027", "August 2023 to July 2027"),
    title: l("Bacharelado em Ciência da Computação", "B.Sc. in Computer Science"),
    org: "UNIFACS",
    text: l(
      "Hoje no 7º semestre. Depois, pós-graduação em segurança da informação.",
      "Currently in the 7th semester. A postgraduate degree in information security comes next.",
    ),
  },
];

export const principles: { title: Localized; text: Localized }[] = [
  {
    title: l("Penso antes de agir", "Think before acting"),
    text: l(
      "Leio o que já existe, digo o que entendi e proponho um plano antes de mexer em qualquer coisa.",
      "I read what already exists, state what I understood and propose a plan before touching anything.",
    ),
  },
  {
    title: l("Assumo a entrega", "Own the delivery"),
    text: l(
      "Rodo, testo e digo como voltar atrás. Um sistema só está pronto quando funciona em produção.",
      "I run it, test it and say how to roll back. A system is only done when it works in production.",
    ),
  },
  {
    title: l("Deixo auditável", "Make it auditable"),
    text: l(
      "Toda ação crítica deixa registro de quem fez, o que mudou e quando.",
      "Every critical action leaves a record of who did it, what changed and when.",
    ),
  },
  {
    title: l("Documento para os outros", "Document for others"),
    text: l(
      "Padrões, índices e manuais para que o time não dependa da minha memória.",
      "Standards, indexes and manuals so the team does not depend on my memory.",
    ),
  },
];

export const stack: { group: Localized; items: string }[] = [
  { group: l("Backend", "Backend"), items: "TypeScript, Node.js, NestJS, Express, Python, Java" },
  { group: l("Dados", "Data"), items: "PostgreSQL, DynamoDB, Oracle, SQLite, MongoDB, Prisma, TypeORM" },
  { group: l("Frontend", "Frontend"), items: "React, Next.js, Tailwind CSS, Figma" },
  { group: l("Infraestrutura", "Infrastructure"), items: "Docker, Linux, AWS, Jenkins, n8n, PowerShell" },
];

export const quote = l(
  "A melhor forma de lidar com um problema simples costuma ser a mais direta.",
  "The best way to handle a simple problem is usually the direct one.",
);
