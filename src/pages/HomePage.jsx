import {
  ArrowRight,
  Bot,
  Braces,
  CheckCircle2,
  CircleDot,
  Code2,
  CreditCard,
  Database,
  Github,
  MessageCircle,
  Rocket,
  Send,
  Smartphone,
  Wrench,
} from "lucide-react";
import { useMemo, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { projects } from "../data/projects";
import { useLanguage } from "../state/LanguageContext";

const serviceIcons = [Bot, Smartphone, Braces, Database, CreditCard, Wrench];
const processIcons = [CircleDot, Code2, Braces, CheckCircle2, Rocket];

export function HomePage() {
  const { language, pick, t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const filtered = useMemo(
    () => projects.filter((project) => filter === "all" || project.types.includes(filter)),
    [filter],
  );

  const seo = language === "en"
    ? {
        title: "Vlad Zozulia | Telegram Bot & Mini App Developer",
        description: "Telegram bots, Mini Apps, API integrations, and automation tools for small businesses.",
      }
    : {
        title: "Vlad Zozulia | Розробник Telegram-ботів і Mini Apps",
        description: "Розробка Telegram-ботів, Mini Apps, API-інтеграцій та автоматизації для малого бізнесу.",
      };

  const contacts = [
    { name: "Telegram", icon: Send, href: "https://t.me/vladpythonbot", available: true },
    { name: "GitHub", icon: Github, href: "https://github.com/vladpythonbot", available: true },
    {
      name: "Freelancehunt",
      icon: MessageCircle,
      href: "https://freelancehunt.com/freelancer/vladvzozulia.html",
      available: true,
    },
  ];

  return (
    <>
      <Seo {...seo} />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="availability"><span /> {t.hero.availability}</p>
              <h1>Vlad Zozulia</h1>
              <h2>{t.hero.role}</h2>
              <p className="hero-description">{t.hero.description}</p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">{t.hero.projects} <ArrowRight size={17} /></a>
                <a className="button secondary" href="#contact">{t.hero.contact}</a>
                <a className="button icon-text" href="https://github.com/vladpythonbot" target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
              </div>
              <p className="hero-focus">{t.hero.focus}</p>
            </div>
            <div className="hero-projects" aria-label={t.projects.title}>
              {projects.filter((project) => project.featured).slice(0, 2).map((project) => (
                <ProjectCard key={project.id} project={project} compact />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-heading-row">
              <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} description={t.projects.description} />
              <div className="filter-tabs" role="tablist" aria-label={t.projects.title}>
                {Object.entries(t.projects.filters).map(([value, label]) => (
                  <button
                    key={value}
                    role="tab"
                    aria-selected={filter === value}
                    className={filter === value ? "active" : ""}
                    onClick={() => setFilter(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="projects-grid">
              {filtered.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          </div>
        </section>

        <section id="services" className="section section-band">
          <div className="container">
            <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} />
            <div className="services-grid">
              {t.services.items.map(([title, text], index) => {
                const Icon = serviceIcons[index];
                return (
                  <article className="service-item" key={title}>
                    <Icon size={21} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />
            <ol className="process-list">
              {t.process.items.map(([title, text], index) => {
                const Icon = processIcons[index];
                return (
                  <li key={title}>
                    <div className="process-number">{String(index + 1).padStart(2, "0")}</div>
                    <Icon size={20} />
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section id="about" className="section section-band">
          <div className="container about-grid">
            <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
            <div className="about-copy">
              <p>{t.about.text}</p>
              <div className="fact-list">
                {t.about.facts.map((fact) => <span key={fact}><CheckCircle2 size={16} /> {fact}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.text} />
            </div>
            <div className="contact-list">
              {contacts.map(({ name, icon: Icon, href, available }) =>
                available ? (
                  <a key={name} href={href} target="_blank" rel="noreferrer">
                    <Icon size={20} />
                    <span><strong>{name}</strong><small>{t.contact.open}</small></span>
                    <ArrowRight size={18} />
                  </a>
                ) : (
                  <div className="contact-disabled" key={name}>
                    <Icon size={20} />
                    <span><strong>{name}</strong><small>{t.contact.pending}</small></span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
