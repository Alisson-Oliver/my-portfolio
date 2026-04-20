import { getAlias } from "../../utils/getAlias";

interface HeroData {
  badgeLabel: string;
  fullName: string;
  alias: string;
  position: string;
  description: string;
}

const fullName = "Alisson Oliveira";

export const heroData: HeroData = {
  fullName,
  alias: getAlias(fullName),
  position: "Desenvolvedor FullStack",
  description:
    "Gosto de transformar problemas em soluções reais através do código, sempre buscando clareza, eficiência e uma boa arquitetura por trás de tudo.",
  badgeLabel: "Explorando o Universo da Tecnologia",
};
