import { SatelliteDish } from "lucide-react";
import { ContactCard } from "../components/ContactCard";
import { contacts } from "../data/contacts/contactsList";
import { motion, type Variants } from "framer-motion";
import { contactsData } from "../data/contacts/contacts";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const sentenceVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, display: "none" },
  visible: {
    opacity: 1,
    display: "inline",
  },
};

export function Contact() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-20"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center max-w-4xl w-full">
        <div className="flex items-center gap-2 text-secondary px-2 py-1.5 border border-primary-border rounded-2xl bg-badge text-[0.65rem] font-black uppercase tracking-wider">
          <SatelliteDish size={15} />
          <span>{contactsData.badgeLabel}</span>
        </div>

        <h2 className="font-bold text-3xl md:text-4xl text-center mt-4">
          {contactsData.title.main}
          <span className="text-gradient">{contactsData.title.gradient}</span>
        </h2>

        <p className="text-secondary text-center text-sm mt-2 px-4 max-w-lg">
          {contactsData.description}
        </p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-5 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {contacts.map((contact) => (
            <motion.div
              key={contact.label}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ContactCard
                icon={contact.icon}
                label={contact.label}
                link={contact.link}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.span
          className="mt-16 w-[90%] md:w-[80%] text-center text-sm text-gradient italic max-w-md leading-relaxed"
          variants={sentenceVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          {contactsData.quote.split("").map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </div>
    </section>
  );
}
