import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { projects } from "../data/projects";
import { useLanguage } from "../state/LanguageContext";

export function ProjectPage() {
  const { slug } = useParams();
  const { language, pick, t } = useLanguage();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-page missing-page">
        <div className="container">
          <h1>{t.projects.missing}</h1>
          <Link className="button secondary" to="/#projects"><ArrowLeft size={17} /> {t.projects.back}</Link>
        </div>
      </main>
    );
  }

  const index = projects.findIndex((item) => item.id === project.id);
  const next = projects[(index + 1) % projects.length];
  const seoDescription = pick(project.description);

  return (
    <main className="project-page">
      <Seo title={`${pick(project.title)} | Vlad Zozulia`} description={seoDescription} />
      <section className="project-hero">
        <div className="container">
          <Link className="back-link" to="/#projects"><ArrowLeft size={16} /> {t.projects.back}</Link>
          <div className="project-title-grid">
            <div>
              <div className="project-kicker">
                <span>{pick(project.status)}</span>
                <time dateTime={project.date}>{project.date}</time>
                {project.featured && <span>{t.projects.featured}</span>}
              </div>
              <h1>{pick(project.title)}</h1>
              <p>{pick(project.description)}</p>
            </div>
            <div className="project-cta-stack">
              {project.demoUrl ? (
                <a className="button primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                  {t.projects.live} <ArrowUpRight size={17} />
                </a>
              ) : (
                <button className="button primary" disabled>{t.projects.live} · {t.projects.unavailable}</button>
              )}
              {project.githubUrl ? (
                <a className="button secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
              ) : (
                <button className="button secondary" disabled><Github size={17} /> {t.projects.unavailable}</button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section project-content">
        <div className="container">
          <div className="gallery-grid">
            {project.images.map((image, indexValue) => (
              <figure key={image.src} className={indexValue === 0 ? "gallery-main" : ""}>
                <img src={image.src} alt={pick(image.alt)} />
              </figure>
            ))}
          </div>

          <div className="case-grid">
            <article>
              <p className="eyebrow">{t.projects.task}</p>
              <h2>{pick(project.task)}</h2>
            </article>
            <article>
              <p className="eyebrow">{t.projects.functions}</p>
              <ul className="feature-list">
                {project.features[language].map((item) => <li key={item}><Check size={17} /> {item}</li>)}
              </ul>
            </article>
            <article className="technology-panel">
              <p className="eyebrow">{t.projects.technologies}</p>
              <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <dl>
                <div><dt>{t.projects.status}</dt><dd>{pick(project.status)}</dd></div>
                <div><dt>{t.projects.added}</dt><dd>{project.date}</dd></div>
              </dl>
            </article>
          </div>

          <Link className="next-project" to={`/projects/${next.slug}`}>
            <span>{t.projects.next}</span>
            <strong>{pick(next.title)}</strong>
            <ArrowRight size={21} />
          </Link>
        </div>
      </section>
    </main>
  );
}
