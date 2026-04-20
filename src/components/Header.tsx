import { RocketIcon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { heroData } from "../data/hero/hero";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#", label: "Início" },
    { href: "/#about", label: "Sobre" },
    { href: "/#projects", label: "Projetos" },
    { href: "/#skills", label: "Habilidades" },
    { href: "/#contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-1 left-0 w-full z-50">
      <motion.div
        initial={false}
        animate={{
          maxWidth: isScrolled ? "56rem" : "62rem",
          paddingLeft: isScrolled ? "2.0rem" : "2.5rem",
          paddingRight: isScrolled ? "2.0rem" : "2.5rem",
          borderRadius: isScrolled ? "9999px" : "0px",
          y: isScrolled ? 5 : 10,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={cn(
          "flex items-center justify-between py-2 mx-auto px-4",
          isScrolled
            ? "glass backdrop-blur-md border shadow-lg"
            : "bg-transparent",
        )}
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <a href="#" className="flex gap-2 items-center">
            <RocketIcon className="text-secondary" size={20} />
            <h1 className="text-md text-gradient font-bold">
              {heroData.alias}
            </h1>
          </a>
        </motion.div>

        <nav className="hidden md:flex gap-6 text-xs text-text-secondary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute mt-3 top-16 left-4 right-4 glass border border-white/10 p-6 rounded-2xl flex flex-col gap-4 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
