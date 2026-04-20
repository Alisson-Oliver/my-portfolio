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
    id: "api-gateway",
    title: "API Gateway",
    description:
      "Gateway de API com rate limiting, autenticação JWT e monitoramento em tempo real.",
    techStack: ["Node.js", "Express", "Redis", "Docker"],
    repoLink: "#",
    demoLink: "#",
  },
  {
    id: "data-pipeline",
    title: "Data Pipeline",
    description:
      "Pipeline de processamento de dados com ETL automatizado e análise em tempo real.",
    techStack: ["Python", "Apache Kafka", "PostgreSQL", "Apache Spark"],
    repoLink: "#",
    demoLink: "#",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description:
      "Infraestrutura cloud-native com auto-scaling e CI/CD automatizado.",
    techStack: ["AWS", "Terraform", "Kubernetes", "Docker"],
    repoLink: "#",
    demoLink: "#",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Dashboard de analytics com visualizações interativas e relatórios automatizados.",
    techStack: ["React", "TypeScript", "D3.js", "GraphQL"],
    repoLink: "#",
    // sem demo
  },
];
