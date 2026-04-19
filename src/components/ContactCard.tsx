import { motion } from "framer-motion";
import type { IconBaseProps } from "react-icons/lib";

interface ContactCarProps {
  icon: React.ComponentType<IconBaseProps>;
  link: string;
  label: string;
}

export function ContactCard({ icon: Icon, link, label }: ContactCarProps) {
  return (
    <div className="flex items-center flex-col gap-2 group">
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ rotate: 5, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex items-center justify-center bg-space-purple-deep border-2 h-18 w-18 rounded-2xl cursor-pointer">
          <Icon size={25} />
        </div>
        <span className="text-xs font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-all delay-100 block text-center mt-1">
          {label}
        </span>
      </motion.a>
    </div>
  );
}
