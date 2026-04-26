import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { content } from "@/i18n/content";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { PageLayout } from "@/components/layout/PageLayout";

const About = () => {
  const { lang, isRTL } = useLang();
  const t = content.about[lang];

  // ✅ PERSON SCHEMA
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gamal Elfakharany",
    alternateName: "جمال الفخراني",
    jobTitle: "Lawyer",
    worksFor: {
      "@type": "Organization",
      name: "Elfakharany Law Firm",
    },
  };

  // ✅ BREADCRUMB SCHEMA
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "ar" ? "الرئيسية" : "Home",
        item: "https://elfakharany-law.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: lang === "ar" ? "عن المكتب" : "About",
        item: "https://elfakharany-law.com/about",
      },
    ],
  };

  return (
    <PageLayout>
      <SEO
        path="/about"
        titleEn="About"
        titleAr="عن المكتب"
        descEn="Learn about Elfakharany Law Firm in Cairo, Egypt, founded in 1984 by Gamal Elfakharany, providing trusted legal services across Egypt."
        descAr="تعرف على مكتب الفخراني للمحاماة في القاهرة، مصر، الذي تأسس عام 1984 على يد المحامي جمال الفخراني، ويقدم خدمات قانونية موثوقة في جميع أنحاء مصر."
        jsonLd={[personSchema, breadcrumbSchema]} // ✅ BOTH SCHEMAS HERE
      />

      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 hero-gradient">
        <div className="container-prose">
          <p className="eyebrow mb-6 text-accent">
            <span className="gold-divider me-3" />{t.eyebrow}
          </p>

          <h1 className="heading-display text-primary-foreground max-w-4xl mb-8">
            {t.title}
          </h1>

          <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
            {t.lead}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-prose max-w-4xl mx-auto space-y-6">

          {/* Lawyer Info */}
          <div className="mb-10">
            <p className="eyebrow mb-3 text-accent">
              {lang === "en" ? "The Founding Attorney" : "المحامي المؤسّس"}
            </p>

            <h3 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-3 tracking-[0.03em]">
              {t.lawyer.name}
            </h3>

            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
              {t.lawyer.role}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t.lawyer.bio}
            </p>
          </div>

          {/* Story */}
          {t.story.map((p, i) => (
            <p
              key={i}
              className="text-lg text-foreground/85 leading-relaxed"
            >
              {p}
            </p>
          ))}

          {/* Values */}
          <div className="pt-10 mt-10 border-t border-border grid sm:grid-cols-2 gap-8">
            {t.values.map((v, i) => (
              <div key={i}>
                <div className="font-serif text-xl text-primary mb-2 flex items-center gap-3">
                  <span className="h-px w-6 bg-accent" />
                  {v.t}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.d}
                </p>
              </div>
            ))}
          </div>

          {/* Hidden SEO */}
          <div className="hidden">
            {lang === "ar"
              ? "مكتب الفخراني للمحاماة، جمال الفخراني، محامي في القاهرة، مكتب محاماة في مصر، خدمات قانونية في مصر"
              : "Elfakharany Law Firm, Gamal Elfakharany, lawyer in Cairo Egypt, law firm Egypt, legal services Egypt"}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 surface-dark">
        <div className="container-prose text-center max-w-3xl mx-auto">
          <h2 className="heading-section text-primary-foreground mb-6">
            {content.cta[lang].title}
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-8">
            {content.cta[lang].subtitle}
          </p>

          <Button asChild variant="gold" size="xl">
            <Link to="/contact">
              {content.cta[lang].btn}
              <ArrowRight className={isRTL ? "rotate-180" : ""} />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;