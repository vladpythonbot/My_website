import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "../state/LanguageContext";
import { useTheme } from "../state/ThemeContext";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const home = location.pathname === "/";

  const navItems = [
    ["projects", t.nav.projects],
    ["services", t.nav.services],
    ["process", t.nav.process],
    ["about", t.nav.about],
    ["contact", t.nav.contact],
  ];

  const target = (id) => (home ? `#${id}` : `/#${id}`);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="Vlad Zozulia home">
          <span className="brand-mark">VZ</span>
          <span>Vlad Zozulia</span>
        </Link>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a key={id} href={target(id)} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="language-switch" aria-label={t.common.language}>
            {["en", "uk"].map((code) => (
              <button
                key={code}
                className={language === code ? "active" : ""}
                onClick={() => setLanguage(code)}
                aria-pressed={language === code}
              >
                {code === "en" ? "EN" : "UA"}
              </button>
            ))}
          </div>
          <button className="icon-button" onClick={toggleTheme} aria-label={t.common.theme} title={t.common.theme}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            className="icon-button desktop-github"
            href="https://github.com/vladpythonbot"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <button
            className="icon-button menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? t.common.close : t.common.menu}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
