import { ProjectCard } from "./components/ProjectCard";

function App() {
  return (
    <div className="grid grid-cols-2 gap-5 m-20">
      <ProjectCard
        id="1"
        title="API Gateway"
        description="Gateway de API com rate limiting, autenticação JWT e monitoramento em tempo real"
        techStack={["Node.js", "Express", "Redis", "Docker"]}
        links={{ repository: "#", demo: "#" }}
      />
      <ProjectCard
        id="2"
        title="Data Pipeline"
        description="Pipeline de processamento de dados com ETL automatizado e análise em tempo real"
        techStack={["Python", "Apache Kafka", "PostgreSQL", "Apache Spark"]}
        links={{ repository: "#" }}
      />
      <ProjectCard
        id="1"
        title="API Gateway"
        description="Gateway de API com rate limiting, autenticação JWT e monitoramento em tempo real"
        techStack={["Node.js", "Express", "Redis", "Docker"]}
        links={{ repository: "#", demo: "#" }}
      />
      <ProjectCard
        id="2"
        title="Data Pipeline"
        description="Pipeline de processamento de dados com ETL automatizado e análise em tempo real"
        techStack={["Python", "Apache Kafka", "PostgreSQL", "Apache Spark"]}
        links={{ repository: "#" }}
      />
    </div>
  );
}

export default App;
