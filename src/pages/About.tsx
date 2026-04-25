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

  return (
    <PageLayout>
      <SEO
        path="/about"
        titleEn="About Elfakharany Law Firm | 40+ Years of Experience"
        titleAr="عن مكتب الفخراني للمحاماة | أكثر من 40 عامًا"
        descEn="Founded by Gamal Elfakharany, Elfakharany Law Firm has served clients across Cairo and Egypt for more than 40 years with discretion and excellence."
        descAr="أسّسه الأستاذ جمال الفخراني، ويخدم مكتب الفخراني عملاءه في القاهرة وجميع أنحاء مصر لأكثر من 40 عامًا بسرية وتميّز."
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

            {/* 🔥 STRONG TITLE */}
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