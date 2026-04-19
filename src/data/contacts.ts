import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";
import type { IconType } from "react-icons";

interface Contact {
  icon: IconType;
  label: string;
  link: string;
}

export const contacts: Contact[] = [
  {
    icon: LuLinkedin,
    label: "LinkedIn",
    link: "https://linkedin.com/in/Alisson-Oliver",
  },
  {
    icon: LuGithub,
    label: "GitHub",
    link: "https://github.com/Alisson-Oliver",
  },
  {
    icon: LuMail,
    label: "Email",
    link: "mailto:alisson.oliver.dev@gmail.com",
  },
];
