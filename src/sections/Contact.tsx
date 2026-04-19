import { SatelliteDish } from "lucide-react";
import { ContactCard } from "../components/ContactCard";
import { contacts } from "../data/contacts";

export function Contact() {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mt-14 text-secondary px-2 py-1.5 border border-primary-border rounded-2xl bg-badge text-[0.65rem] font-black">
          <SatelliteDish size={15} />
          <span>Estabelecer Contato </span>
        </div>
        <h2 className="font-bold text-3xl text-center mt-4">
          Vamos <span className="text-gradient">Conversar</span>
        </h2>
        <p className="text-secondary text-center text-sm mt-2">
          Aberto a oportunidades, colaborações e novos desafios. Vamos construir
          algo incrível juntos!
        </p>
        <div className="flex flex-row gap-5 mt-10">
          {contacts.map((contact) => (
            <ContactCard
              icon={contact.icon}
              label={contact.label}
              link={contact.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
