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
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
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
  const faq = content.faq[lang];

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

        <div className="container-prose relative z-10 pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-8">
            <p className="eyebrow mb-6">
              <span className="gold-divider me-3" />
              {hero.eyebrow}
            </p>

            <h1 className="heading-display text-primary-foreground mb-8 max-w-4xl">
              {hero.title}
            </h1>

            {hero.subtitle && (
              <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed mb-10">
                {hero.subtitle}
              </p>
            )}

            {/* ✅ FIXED BUTTON (ONLY ONE CTA) */}
            <div className="flex gap-4 justify-start">
              <Button asChild variant="gold">
                <Link to="/contact">
                  {hero.ctaPrimary}
                  <ArrowRight className={isRTL ? "rotate-180" : ""} />
                </Link>
              </Button>
            </div>
          </div>

          {/* STATS */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-px bg-primary-foreground/15 border border-primary-foreground/15">

              {[hero.stat1, hero.stat2, hero.stat3].map((s, i) => {
                const labels = [
                  hero.stat1Label,
                  hero.stat2Label,
                  hero.stat3Label,
                ];
                return (
                  <div key={i} className="bg-primary p-6 lg:p-8">
                    <div className="font-serif text-3xl lg:text-4xl text-accent mb-1">
                      {s}
                    </div>
                    <div className="text-xs lg:text-sm text-primary-foreground/70 uppercase tracking-wider">
                      {labels[i]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-background">
        <div className="container-prose grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-6">{intro.eyebrow}</p>

            <h2 className="heading-section mb-6 max-w-2xl">
              {intro.title}
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {intro.body}
            </p>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-24 bg-background">
        <div className="container-prose text-center mb-14">
          <p className="eyebrow mb-4">{practice.eyebrow}</p>

          <h2 className="heading-section mb-4">
            {practice.title}
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {practice.subtitle}
          </p>
        </div>

        <div className="container-prose grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.practice.areas.map((a) => {
            const Icon =
              areaIcons[a.slug as keyof typeof areaIcons] || Scale;

            const t = a[lang];

            return (
              <div
                key={a.slug}
                className="p-8 border border-border bg-card rounded-sm shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <Icon className="h-6 w-6 mb-5 text-accent" />

                <h3 className="font-serif text-[20px] leading-snug mb-3 text-foreground tracking-tight">
                  {t.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {t.short}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-background">
        <div className="container-prose max-w-4xl">

          <p className="eyebrow mb-4 text-center">
            {lang === "ar" ? "إجابات قانونية" : "Legal Guidance"}
          </p>

          <h2 className="heading-section text-center mb-6">
            {lang === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>

          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            {lang === "ar"
              ? "إجابات واضحة لأهم الاستفسارات القانونية من عملائنا."
              : "Clear answers to the most common legal enquiries from our clients."}
          </p>

          <Accordion type="single" collapsible className="w-full border-t border-border">
            {faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger
                  className="
                    text-left
                    font-serif
                    text-[20px]
                    leading-snug
                    py-6
                    hover:no-underline
                    tracking-tight
                  "
                >
                  {item.q}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pr-6 text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </section>

    </PageLayout>
  );
};

export default Index;