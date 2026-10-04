import { useEffect, type ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
import { copy } from "../data/copy";
import { findProject, projects } from "../data/projects";
import { useLanguage } from "../context/language";
import { useTransition } from "../context/transition";
import { Diagram } from "../components/Diagram";
import { RevealItem } from "../components/RevealItem";

function Meta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

export function ProjectPage() {
  const { id } = useParams();
  const { tr } = useLanguage();
  const { goTo } = useTransition();
  const project = findProject(id);
  const name = project ? tr(project.name) : "";

  useEffect(() => {
    if (name) document.title = `${name} - Alisson Oliveira`;
  }, [name]);

  if (!project) return <Navigate to="/" replace />;

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <div className="wrap">
        <button type="button" className="back" onClick={() => goTo("/", "trabalho")}>
          {tr(copy.allProjects)}
        </button>

        <section className="ph">
          <p className="kind">{tr(project.kind)}</p>
          <h1 aria-label={name}>
            <span className="ln" aria-hidden="true">
              <span>{name}</span>
            </span>
          </h1>
          <p className="one">{tr(project.tagline)}</p>
          <dl className="meta">
            <Meta label={tr(copy.year)}>{project.year}</Meta>
            <Meta label={tr(copy.context)}>{tr(project.context)}</Meta>
            <Meta label={tr(copy.role)}>{tr(project.role)}</Meta>
            <Meta label={tr(copy.code)}>
              {project.link ? (
                <>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {tr(copy.code)}
                  </a>
                  {project.site && (
                    <>
                      {"  "}
                      <a href={project.site} target="_blank" rel="noopener noreferrer">
                        {tr(copy.site)}
                      </a>
                    </>
                  )}
                </>
              ) : (
                tr(project.code)
              )}
            </Meta>
          </dl>
        </section>

        <section className="pv">
          <div className="cols">
            <h2>{tr(copy.overview)}</h2>
            <div className="tx">
              {project.overview.map((paragraph) => (
                <p key={paragraph.en}>{tr(paragraph)}</p>
              ))}
              {project.draft && <p>{tr(copy.draftNote)}</p>}
            </div>
          </div>
        </section>
      </div>

      <section className="dgband blue">
        <div className="wrap">
          <h2>{tr(copy.howItWorks)}</h2>
          <div className="dgw">
            <Diagram key={project.id} spec={project.diagram} />
          </div>
          <p className="cap">{tr(project.diagram.caption)}</p>
        </div>
      </section>

      <div className="wrap">
        {project.decisions.length > 0 && (
          <section className="dec">
            <div className="cols">
              <h2>{tr(copy.decisions)}</h2>
              <ol>
                {project.decisions.map((decision, index) => (
                  <RevealItem key={decision.title.en} delay={index * 0.08}>
                    <h3>{tr(decision.title)}</h3>
                    <p>{tr(decision.text)}</p>
                  </RevealItem>
                ))}
              </ol>
            </div>
          </section>
        )}

        <section className="pst">
          <dl>
            <dt>Stack</dt>
            <dd>{project.stack}</dd>
          </dl>
        </section>

        <button type="button" className="nx" onClick={() => goTo(`/projeto/${next.id}`)}>
          <small>{tr(copy.nextProject)}</small>
          <span>{tr(next.name)}</span>
        </button>
      </div>
    </>
  );
}
