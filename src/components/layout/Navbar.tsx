import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { content } from "@/i18n/content";
import { cn } from "@/lib/utils";
import logo from "@/assets/EFLOGO.png";

export const Navbar = () => {
  const { lang, toggle } = useLang();
  const t = content.nav[lang];
  const brand = content.brand[lang];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const links = [
    { to: "/", label: t.home },
    { to: "/about", label: t.about },
    { to: "/practice-areas", label: t.practice },
    { to: "/contact", label: t.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-background/95 backdrop-blur-lg shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="container-prose flex h-24 items-center justify-between gap-6">

        {/* LOGO + BRAND */}
        <Link to="/" className="group flex items-center gap-5" aria-label={brand.name}>
          
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Elfakharany Law Firm"
              className="h-16 w-16 object-contain"
            />
          </div>

          <div className="hidden sm:flex flex-col leading-tight">
            <span
              className={cn(
                lang === "ar"
                  ? "font-arabic text-2xl font-bold"
                  : "font-serif text-2xl font-bold",
                "tracking-[0.06em]",
                scrolled || open
                  ? "text-primary"
                  : "text-primary lg:text-primary-foreground"
              )}
            >
              {lang === "en" ? "ELFAKHARANY" : "الفخراني"}
            </span>

            <span
              className={cn(
                lang === "ar"
                  ? "font-arabic text-sm font-bold"
                  : "font-serif text-sm font-bold",
                "uppercase tracking-[0.32em]",
                scrolled || open
                  ? "text-muted-foreground"
                  : "text-primary-foreground/60"
              )}
            >
              {lang === "en" ? "Law Firm" : "للمحاماة والاستشارات القانونية"}
            </span>
          </div>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative text-sm font-medium tracking-wide transition-colors",
                  scrolled
                    ? isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                    : isActive
                    ? "text-accent"
                    : "text-primary-foreground/85 hover:text-accent",
                  "after:absolute after:-bottom-1.5 after:start-0 after:h-px after:bg-accent after:transition-all",
                  "after:w-0 hover:after:w-full"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* ACTIONS (NO BUTTON) */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className={cn(
              "flex items-center gap-1.5 rounded-sm border px-3 py-1.5 text-xs font-semibold tracking-wider transition-colors",
              scrolled || open
                ? "border-border text-primary hover:bg-secondary"
                : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            )}
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "ar" ? "EN" : "ع"}
          </button>

          <button
            className={cn(
              "lg:hidden p-2",
              scrolled || open ? "text-primary" : "text-primary-foreground"
            )}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-prose py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-base font-medium py-2",
                    isActive ? "text-accent" : "text-primary"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};