import { Github, Send } from "lucide-react";
import { useLanguage } from "../state/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>Vlad Zozulia</strong>
          <p>{t.footer}</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/vladpythonbot" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          <a href="https://t.me/vladpythonbot" target="_blank" rel="noreferrer"><Send size={17} /> Telegram</a>
        </div>
      </div>
    </footer>
  );
}
