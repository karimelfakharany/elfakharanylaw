import { Link } from "react-router-dom";
import { ArrowRight, Building2, Scale, Home as HomeIcon, Plane, FileSignature, User } from "lucide-react";
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
    en: { problems: "Problems we solve", discuss: "Discuss your matter" },
    ar: { problems: "المشكلات التي نحلّها", discuss: "ناقش قضيتك" },
  }[lang];

  // ✅ LEGAL SERVICE SCHEMA
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Elfakharany Law Firm",
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: areas.map((a) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: a.en.title,
          description: a.en.intro,
        },
      })),
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
        name: lang === "ar" ? "مجالات العمل" : "Practice Areas",
        item: "https://elfakharany-law.com/practice-areas",
      },
    ],
  };

  return (
    <PageLayout>
      <SEO
        path="/practice-areas"
        titleEn="Practice Areas"
        titleAr="مجالات العمل"
        descEn="Explore the legal services offered by Elfakharany Law Firm in Cairo, Egypt, providing trusted legal solutions across a wide range of legal matters."
        descAr="استكشف مجالات العمل في مكتب الفخراني للمحاماة في القاهرة، مصر، حيث نقدم حلولاً قانونية موثوقة في مختلف القضايا القانونية."
        jsonLd={[legalServiceSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 hero-gradient">
        <div className="container-prose max-w-4xl">
          <p className="eyebrow mb-6 text-accent">
            <span className="gold-divider me-3" />
            {t.eyebrow}
          </p>
          <h1 className="heading-display text-primary-foreground mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            {t.subtitle}
          </p>
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
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start ${
                  !isEven ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <div className="sticky top-32 bg-secondary/50 border border-border rounded-sm p-10 shadow-card">
                    <Icon className="h-12 w-12 text-accent mb-6" />
                    <p className="eyebrow mb-3">0{idx + 1}</p>
                    <h2 className="font-serif text-3xl text-primary leading-tight">
                      {a.title}
                    </h2>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-8">
                  <p className="text-lg text-foreground/85 leading-relaxed">
                    {a.intro}
                  </p>

                  <div className="border-s-2 border-accent ps-6">
                    <p className="eyebrow mb-2">{labels.problems}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {a.problems}
                    </p>
                  </div>

                  <Button asChild variant="outlineDark">
                    <Link to="/contact">
                      {labels.discuss}
                      <ArrowRight className={isRTL ? "rotate-180" : ""} />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Hidden SEO */}
        <div className="hidden">
          {lang === "ar"
            ? "محامي في القاهرة، مكتب محاماة في مصر، خدمات قانونية في مصر، مكتب الفخراني للمحاماة"
            : "lawyer in Cairo Egypt, law firm Egypt, legal services Egypt, Elfakharany Law Firm"}
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

export default PracticeAreas;