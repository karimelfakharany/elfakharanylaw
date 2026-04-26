import { Link } from "react-router-dom";
import type { ElementType } from "react";
import {
  ArrowRight,
  Scale,
  Building2,
  Home as HomeIcon,
  Plane,
  FileSignature,
  Users,
} from "lucide-react";

import { useLang } from "@/i18n/LanguageContext";
import { content } from "@/i18n/content";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import heroImg from "@/assets/hero-justice.jpg";

const areaIcons: Record<string, ElementType> = {
  corporate: Building2,
  litigation: Scale,
  family: Users,
  "real-estate": HomeIcon,
  immigration: Plane,
  contracts: FileSignature,
};

const Index = () => {
  const { lang, isRTL } = useLang();

  const hero = content.hero[lang];
  const intro = content.intro[lang];
  const practice = content.practice[lang];

  return (
    <PageLayout>
      <SEO
        path="/"
        titleEn="Elfakharany Law Firm"
        titleAr="مكتب الفخراني للمحاماة و الاستشارات القانونية"
        descEn="A Law Firm with 40+ years of experience. Serving Clients across Egypt."
        descAr="مكتب محاماة في القاهرة بخبرة تتجاوز 40 عامًا."
      />

      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="container-prose relative z-10 pt-32 pb-20">

          {/* eyebrow */}
          <p className="text-xs tracking-[0.25em] text-yellow-400 uppercase mb-4">
            {hero.eyebrow}
          </p>

          {/* title */}
          <h1 className="heading-display text-primary-foreground mb-6">
            {hero.title}
          </h1>

          {/* subtitle (if exists) */}
          {hero.subtitle && (
            <p className="text-lg text-primary-foreground/80 mb-6 max-w-xl">
              {hero.subtitle}
            </p>
          )}

          {/* button */}
          <Button asChild variant="gold">
            <Link to="/contact">
              {hero.ctaPrimary}
              <ArrowRight className={isRTL ? "rotate-180" : ""} />
            </Link>
          </Button>

          {/* ✅ HERO STATS (WAS MISSING) */}
          <div className="flex gap-10 mt-10 text-white">
            <div>
              <p className="text-2xl font-bold">{hero.stat1}</p>
              <p className="text-sm opacity-70">{hero.stat1Label}</p>
            </div>

            <div>
              <p className="text-2xl font-bold">{hero.stat2}</p>
              <p className="text-sm opacity-70">{hero.stat2Label}</p>
            </div>

            <div>
              <p className="text-2xl font-bold">{hero.stat3}</p>
              <p className="text-sm opacity-70">{hero.stat3Label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-background">
        <div className="container-prose max-w-3xl">

          <p className="text-sm text-yellow-500 uppercase tracking-widest mb-3">
            {intro.eyebrow}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {intro.title}
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {intro.body}
          </p>

        </div>
      </section>

      {/* PRACTICE AREAS HEADER (WAS MISSING) */}
      <section className="py-20 bg-background">
        <div className="container-prose text-center mb-12">

          <p className="text-sm text-yellow-500 uppercase tracking-widest mb-3">
            {practice.eyebrow}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {practice.title}
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {practice.subtitle}
          </p>

        </div>

        {/* PRACTICE GRID */}
        <div className="container-prose grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.practice.areas.map((a) => {
            const Icon =
              areaIcons[a.slug as keyof typeof areaIcons] || Scale;

            const t = a[lang];

            return (
              <div key={a.slug} className="p-6 border rounded hover:shadow-lg transition">
                <Icon className="h-6 w-6 mb-4 text-yellow-500" />
                <h3 className="text-lg font-bold mb-2">{t.title}</h3>
                <p className="text-muted-foreground">{t.short}</p>
              </div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;