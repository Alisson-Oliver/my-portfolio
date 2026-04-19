import {
  Server,
  FileCode,
  Boxes,
  Database,
  Cylinder,
  Layers,
  Cloud,
  Container,
  Terminal,
  Wrench,
  GitBranch,
  Workflow,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

interface Tech {
  name: string;
  icon: LucideIcon;
}

interface Skill {
  icon: LucideIcon;
  title: string;
  techStack: Tech[];
}

export const skills: Skill[] = [
  {
    icon: Server,
    title: "Backend",
    techStack: [
      { name: "Node.js", icon: Server },
      { name: "TypeScript", icon: FileCode },
      { name: "NestJS", icon: Boxes },
      { name: "Express", icon: Layers },
    ],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    techStack: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Cylinder },
      { name: "Prisma", icon: Layers },
    ],
  },
  {
    icon: Cloud,
    title: "Infra & Deploy",
    techStack: [
      { name: "Docker", icon: Container },
      { name: "Vercel / Render", icon: Cloud },
      { name: "Linux", icon: Terminal },
    ],
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    techStack: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "CI/CD", icon: Workflow },
    ],
  },
];
