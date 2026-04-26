import { Link } from "react-router-dom";
import { ArrowRight, Building2, Scale, Heart, Home as HomeIcon, Plane, FileSignature, User} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { content } from "@/i18n/content";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { PageLayout } from "@/components/layout/PageLayout";

const areaIcons: Record<string, React.ElementType> = {
  corporate: Building2,
  litigation: Scale,
  family: User,
  "real-estate": HomeIcon,
  immigration: Plane,
  contracts: FileSignature,
};

const PracticeAreas = () => {
  const { lang, isRTL } = useLang();
  const t = content.practice[lang];
  const areas = content.practice.areas;

  const labels = {
    en: { problems: "Problems we solve", trust: "", discuss: "Discuss your matter" },
    ar: { problems: "المشكلات التي نحلّها", trust: "", discuss: "ناقش قضيتك" },
  }[lang];

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Elfakharany Law Firm — Practice Areas",
    areaServed: { "@type": "Country", name: "Egypt" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: areas.map((a) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: a.en.title, description: a.en.intro },
      })),
    },
  };

  return (
    <PageLayout>
      <SEO
        path="/practice-areas"
        titleEn="Practice Areas"
        titleAr="مجالات العمل | الشركات، المدني، الأسرة والمزيد — محامي القاهرة"
        descEn="Specialized legal services in Cairo and across Egypt: corporate law, civil litigation, family law, real estate, immigration and contract law."
        descAr="خدمات قانونية متخصّصة في القاهرة وجميع أنحاء مصر: قانون الشركات، التقاضي المدني، الأسرة، العقارات، الهجرة، والعقود."
        jsonLd={legalServiceSchema}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 hero-gradient">
        <div className="container-prose max-w-4xl">
          <p className="eyebrow mb-6 text-accent"><span className="gold-divider me-3" />{t.eyebrow}</p>
          <h1 className="heading-display text-primary-foreground mb-6">{t.title}</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">{t.subtitle}</p>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-prose space-y-20 lg:space-y-28">
          {areas.map((area, idx) => {
            const Icon = areaIcons[area.slug] || Scale;
            const a = area[lang];
            const isEven = idx % 2 === 0;
            return (
              <article
                key={area.slug}
                id={area.slug}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="lg:col-span-5">
                  <div className="sticky top-32 bg-secondary/50 border border-border rounded-sm p-10 shadow-card">
                    <Icon className="h-12 w-12 text-accent mb-6" />
                    <p className="eyebrow mb-3">{lang === "en" ? `0${idx + 1}` : `0${idx + 1}`}</p>
                    <h2 className="font-serif text-3xl text-primary leading-tight">{a.title}</h2>
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-8">
                  <p className="text-lg text-foreground/85 leading-relaxed">{a.intro}</p>
                  <div className="border-s-2 border-accent ps-6">
                    <p className="eyebrow mb-2">{labels.problems}</p>
                    <p className="text-muted-foreground leading-relaxed">{a.problems}</p>
                  </div>
                  <div className="border-s-2 border-primary ps-6">
                    <p className="eyebrow mb-2 text-primary">{labels.trust}</p>
                    <p className="text-muted-foreground leading-relaxed">{}</p>
                  </div>
                  <Button asChild variant="outlineDark">
                    <Link to="/contact">{labels.discuss}<ArrowRight className={isRTL ? "rotate-180" : ""} /></Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 surface-dark">
        <div className="container-prose text-center max-w-3xl mx-auto">
          <h2 className="heading-section text-primary-foreground mb-6">{content.cta[lang].title}</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">{content.cta[lang].subtitle}</p>
          <Button asChild variant="gold" size="xl">
            <Link to="/contact">{content.cta[lang].btn}<ArrowRight className={isRTL ? "rotate-180" : ""} /></Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default PracticeAreas;
