interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: "konnect-hub",
    title: "Konnect Hub",
    description: "Plataforma de capacitação e integração de colaboradores.",
    techStack: ["React", "NestJS", "TypeScript"],
    link: "#",
  },
  {
    id: "s-gate",
    title: "S-GATE",
    description: "Sistema de gestão e operacionalização de acervo técnico.",
    techStack: ["Node.js", "Arquitetura Limpa", "PostgreSQL"],
    link: "#",
  },
];
