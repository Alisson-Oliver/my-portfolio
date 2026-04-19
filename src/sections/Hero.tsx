import { Stars } from "lucide-react";

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center gap-4 max-w-xl">
        <div className="flex items-center gap-2 text-secondary px-2 py-1.5 border border-primary-border rounded-2xl bg-badge text-[0.65rem] font-black">
          <Stars size={15} />
          <span>Explorando o Universo da Programa</span>
        </div>

        <h1 className="text-gradient text-6xl font-bold">Alisson Oliveira</h1>
        <h2 className="text-text-secondary text-2xl font-light">
          Desenvolvedor FullStack
        </h2>

        <p className="text-sm text-secondary">
          Especialista em resolver problemas complexos através de código limpo e
          arquitetura escalável. Foco em backend, análise técnica e engenharia
          de software.
        </p>
        <div className="flex gap-3 justify-center mt-4 text-sm">
          <a href="" className="bg-primary p-2 px-5 rounded-sm">
            Ver Projetos
          </a>
          <a href="" className="border border-primary p-2 px-5 rounded-sm">
            Contato
          </a>
        </div>
      </div>
    </div>
  );
}
