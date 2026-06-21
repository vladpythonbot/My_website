import { ArrowUpRight, Github, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../state/LanguageContext";

export function ProjectCard({ project, compact = false }) {
  const { pick, t } = useLanguage();
  const image = project.images[0];

  return (
    <article className={`project-card ${project.featured ? "is-featured" : ""} ${compact ? "is-compact" : ""}`}>
      <Link className="project-visual" to={`/projects/${project.slug}`} aria-label={`${t.projects.details}: ${pick(project.title)}`}>
        <img src={image.src} alt={pick(image.alt)} loading="lazy" />
        {project.featured && <span className="featured-label">{t.projects.featured}</span>}
      </Link>
      <div className="project-body">
        <div className="project-meta">
          <span className="status"><Radio size={13} /> {pick(project.status)}</span>
          <time dateTime={project.date}>{project.date}</time>
        </div>
        <h3><Link to={`/projects/${project.slug}`}>{pick(project.title)}</Link></h3>
        <p>{pick(project.description)}</p>
        <div className="tag-list" aria-label={t.projects.technologies}>
          {project.stack.slice(0, compact ? 4 : 5).map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="project-actions">
          <Link className="text-link" to={`/projects/${project.slug}`}>
            {t.projects.details} <ArrowUpRight size={15} />
          </Link>
          <div className="project-icon-links">
            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                {t.projects.live} <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="disabled-icon" title={t.projects.unavailable}><ArrowUpRight size={17} /></span>
            )}
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github size={15} /> GitHub
              </a>
            ) : (
              <span className="disabled-icon" title={t.projects.unavailable}><Github size={17} /></span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
