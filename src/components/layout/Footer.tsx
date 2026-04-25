import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { content } from "@/i18n/content";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/ELF2.png";

export const Footer = () => {
  const { lang } = useLang();
  const t = content.footer[lang];
  const nav = content.nav[lang];
  const contact = content.contact[lang];
  const brand = content.brand[lang];
  const areas = content.practice.areas;

  return (
    <footer className="surface-dark border-t border-primary-foreground/10">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        
        {/* LOGO SECTION */}
        <div
  className={`lg:col-span-1 flex flex-col items-start ${
    lang === "ar"
      ? "pl-8 border-l border-accent/40"
      : "pr-8 border-r border-accent/40"
  }`}
>

          {/* LOGO */}
          <img
            src={logo}
            alt="Elfakharany Law Firm"
            className="h-24 w-auto object-contain mb-4"
          />

          {/* 🔗 LINKEDIN */}
          <a
            href="https://www.linkedin.com/company/elfakharany-law/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors mb-3"
          >
            <Linkedin className="h-4 w-4 text-accent" />
            LinkedIn
          </a>

          {/* 📍 GOOGLE MAPS */}
          <a
            href="https://www.google.com/maps/place/%D9%85%D9%83%D8%AA%D8%A8+%D8%A7%D9%84%D9%81%D8%AE%D8%B1%D8%A7%D9%86%D9%8A+%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D8%A9+%D9%88+%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9%E2%80%AD/@30.0536988,31.3322346,17.25z/data=!4m6!3m5!1s0x14583f00122f3b53:0xbbd1818ada10454b!8m2!3d30.0536713!4d31.3344886!16s%2Fg%2F11vw_2cq7t!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors mb-4"
          >
            <MapPin className="h-4 w-4 text-accent" />
            {lang === "en" ? "View on Map" : "عرض الموقع"}
          </a>

          {/* TAGLINE */}
          <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            {t.tagline}
          </p>
        </div>

        {/* FIRM */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4">
            {t.sections.firm}
          </h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-accent transition-colors">{nav.home}</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">{nav.about}</Link></li>
            <li><Link to="/practice-areas" className="hover:text-accent transition-colors">{nav.practice}</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">{nav.contact}</Link></li>
          </ul>
        </div>

        {/* PRACTICE */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4">
            {t.sections.practice}
          </h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            {areas.slice(0, 6).map((a) => (
              <li key={a.slug}>
                <Link to="/practice-areas" className="hover:text-accent transition-colors">
                  {a[lang].title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4">
            {t.sections.contact}
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span>{contact.addressValue}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span dir="ltr">{contact.phoneValue}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span>{contact.emailValue}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {brand.name}. {t.rights}</p>
          <p>Cairo · Egypt</p>
        </div>
      </div>
    </footer>
  );
};