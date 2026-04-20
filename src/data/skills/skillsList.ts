import {
  Server,
  FileCode,
  Globe,
  Database,
  Container,
  Terminal,
  Wrench,
  GitBranch,
  Monitor,
  Cloud,
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
      { name: "TypeScript", icon: FileCode },
      { name: "JavaScript", icon: FileCode },
      { name: "Node.js", icon: Server },
      { name: "Java", icon: FileCode },
      { name: "Python", icon: FileCode },
    ],
  },
  {
    icon: Globe,
    title: "Frontend",
    techStack: [
      { name: "React.js", icon: Globe },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind CSS", icon: Globe },
    ],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    techStack: [
      { name: "PostgreSQL", icon: Database },
      { name: "SQLite", icon: Database },
      { name: "MongoDB", icon: Database },
    ],
  },
  {
    icon: Cloud,
    title: "Ferramentas & Infra",
    techStack: [
      { name: "Docker", icon: Container },
      { name: "Linux", icon: Terminal },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "VS Code", icon: Monitor },
      { name: "Figma", icon: Monitor },
      { name: "Postman", icon: Wrench },
    ],
  },
];
