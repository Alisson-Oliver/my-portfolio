import { RocketIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-2 left-0 w-full z-50">
      <motion.div
        initial={false}
        animate={{
          maxWidth: isScrolled ? "56rem" : "60rem",
          paddingLeft: isScrolled ? "2.0rem" : "2.5rem",
          paddingRight: isScrolled ? "1.5rem" : "2.5rem",
          borderRadius: isScrolled ? "9999px" : "0px",
          y: isScrolled ? 0 : 10,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className={cn(
          "flex items-center justify-between py-2 mx-auto",
          isScrolled
            ? "glass backdrop-blur-md border shadow-lg"
            : "bg-transparent",
        )}
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <a href="" className="flex gap-2 items-center">
            <RocketIcon className="text-secondary" size={20} />
            <h1 className="text-lg text-gradient font-bold">AO</h1>
          </a>
        </motion.div>

        <nav className="flex gap-6 text-xs text-text-secondary">
          <a href="#" className="hover:text-primary transition">
            Início
          </a>
          <a href="#" className="hover:text-primary transition">
            Sobre
          </a>
          <a href="#" className="hover:text-primary transition">
            Projetos
          </a>
          <a href="#" className="hover:text-primary transition">
            Habilidades
          </a>
          <a href="#" className="hover:text-primary transition">
            Contato
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
