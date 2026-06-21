import { useEffect } from "react";
import { useLanguage } from "../state/LanguageContext";

export function Seo({ title, description }) {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
    document.documentElement.lang = language;
  }, [description, language, title]);

  return null;
}
