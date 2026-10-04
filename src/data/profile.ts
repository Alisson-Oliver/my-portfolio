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
  "Desenvolvedor full stack com foco em backend. Analítico, atento à segurança e à documentação, projeto sistemas padronizados e escaláveis.",
  "Full stack developer with a backend focus. Analytical, security-minded and documentation-driven, I design standardized, scalable systems.",
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
    title: l("Analítico", "Analytical"),
    text: l(
      "Entendo o problema e os dados por inteiro antes de escolher uma solução.",
      "I understand the problem and the data in full before choosing a solution.",
    ),
  },
  {
    title: l("Penso antes de agir", "Think before acting"),
    text: l(
      "Planejo, levanto os riscos e só então executo.",
      "I plan, map the risks and only then execute.",
    ),
  },
  {
    title: l("Segurança desde o início", "Security from the start"),
    text: l(
      "Trato segurança como parte do desenho do sistema, e não como uma etapa no final.",
      "I treat security as part of the system design, not as a step at the end.",
    ),
  },
  {
    title: l("Documentação", "Documentation"),
    text: l(
      "Registro decisões, padrões e manuais para que qualquer pessoa consiga seguir e manter o que foi feito.",
      "I record decisions, standards and manuals so anyone can follow and maintain what was built.",
    ),
  },
  {
    title: l("Padronização", "Standardization"),
    text: l(
      "Prefiro padrões claros e repetíveis a soluções isoladas que só quem fez entende.",
      "I prefer clear, repeatable standards over one-off solutions only their author understands.",
    ),
  },
  {
    title: l("Sistemas escaláveis", "Scalable systems"),
    text: l(
      "Desenho pensando no crescimento, para que o sistema continue funcionando quando a demanda aumentar.",
      "I design with growth in mind, so the system keeps working when demand increases.",
    ),
  },
  {
    title: l("Evolução contínua", "Continuous growth"),
    text: l(
      "Busco melhorar a cada projeto, tanto tecnicamente quanto na comunicação e no comportamento.",
      "I look to improve with every project, both technically and in communication and behavior.",
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
