import { useEffect, useRef, useState } from "react";
import { copy } from "../data/copy";
import { projects } from "../data/projects";
import type { Project } from "../data/types";
import { useLanguage } from "../context/language";
import { useTransition } from "../context/transition";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Reveal } from "./Reveal";
import { Rise } from "./Rise";

function ProjectSummary({ project }: { project: Project }) {
  const { tr } = useLanguage();
  const { goTo } = useTransition();
  return (
    <div className="det">
      <p className="kind">{tr(project.kind)}</p>
      <h3>{tr(project.name)}</h3>
      <p>{tr(project.overview[0])}</p>
      <p className="st">
        <b>{tr(copy.builtWith)}</b>
        {project.stack}
      </p>
      <div className="lk">
        <button type="button" className="open" onClick={() => goTo(`/projeto/${project.id}`)}>
          {tr(copy.openProject)}
        </button>
      </div>
    </div>
  );
}

export function WorkSection() {
  const { tr } = useLanguage();
  const { goTo } = useTransition();
  const wide = useMediaQuery("(min-width: 901px)");
  const canHover = useMediaQuery("(hover: hover)");
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const [swapping, setSwapping] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const select = (index: number) => {
    if (index === active) return;
    setActive(index);
    setSwapping(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setShown(index);
      setSwapping(false);
    }, 120);
  };

  return (
    <section id="trabalho" className="work band">
      <div className="wrap">
        <Rise>{tr(copy.selectedWork)}</Rise>
        <div className="grid">
          <ul className="idx">
            {projects.map((project, index) => (
              <Reveal as="li" key={project.id} delay={index * 0.06}>
                <button
                  type="button"
                  className="r"
                  aria-current={index === active}
                  onClick={() => (wide ? goTo(`/projeto/${project.id}`) : select(index))}
                  onFocus={() => wide && select(index)}
                  onMouseEnter={() => wide && canHover && select(index)}
                >
                  <span className="n">{tr(project.name)}</span>
                  <span className="y">{project.year}</span>
                </button>
                <div className="inl" hidden={index !== active}>
                  <ProjectSummary project={project} />
                </div>
              </Reveal>
            ))}
          </ul>
          <aside className={`side ${swapping ? "sw" : ""}`} aria-live="polite">
            <div className="in">
              <ProjectSummary project={projects[shown]} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
