import { heroFacts, heroLead } from "../data/profile";
import { useLanguage } from "../context/language";

export function Hero() {
  const { tr } = useLanguage();
  return (
    <div className="wrap">
      <section className="hero" aria-label="Alisson Oliveira">
        <h1 aria-label="Alisson Oliveira">
          <span className="ln" aria-hidden="true">
            <span>Alisson</span>
          </span>
          <span className="ln" aria-hidden="true">
            <span>Oliveira</span>
          </span>
        </h1>
        <div className="row">
          <p className="lead">{tr(heroLead)}</p>
          <dl className="facts">
            {heroFacts.map((fact) => (
              <div key={fact.label.pt}>
                <dt>{tr(fact.label)}</dt>
                <dd>{tr(fact.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
