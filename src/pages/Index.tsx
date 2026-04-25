import { Link } from "react-router-dom";
import { ArrowRight, Scale, Building2, Heart, Home as HomeIcon, Plane, FileSignature, Award, ShieldCheck, Users, Sparkles } from "lucide-react";
//import { createIcons, idCardLanyard } from 'lucide';
import { useLang } from "@/i18n/LanguageContext";
import { content } from "@/i18n/content";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import heroImg from "@/assets/hero-justice.jpg";
import cairoImg from "@/assets/cairo-skyline.jpg";

const areaIcons: Record<string, React.ElementType> = {
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
  const why = content.why[lang];
  const faq = content.faq[lang];
  const cta = content.cta[lang];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: "Elfakharany Law Firm",
    alternateName: "مكتب الفخراني للمحاماة والاستشارات القانونية",
    description: "Cairo-based law firm offering corporate, civil, family, real estate, immigration and contract legal services across Egypt for over 40 years.",
    url: "https://elfakharany-law.com",
    telephone: "+201000200363",
    email: "info@elfakharany-law.com",
    areaServed: [{ "@type": "City", name: "Cairo" }, { "@type": "Country", name: "Egypt" }],
    address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
    founder: { "@type": "Person", name: "Gamal Elfakharany", jobTitle: "Founding Attorney" },
    foundingDate: "1989",
    priceRange: "$$$",
    openingHours: "Su-Th 09:00-18:00",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.en.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <PageLayout>
      <SEO
        path="/"
        titleEn="Elfakharany Law Firm"
        titleAr="مكتب الفخراني للمحاماة و الاستشارات القانونية"
        descEn="Cairo law firm with 40+ years of experience. Corporate, civil, family, real estate, immigration & contract law services across Egypt. Book a consultation."
        descAr="مكتب محاماة في القاهرة بخبرة تتجاوز 40 عامًا. خدمات قانونية للشركات والتقاضي المدني والأسرة والعقارات والهجرة والعقود في جميع أنحاء مصر. احجز استشارتك."
        jsonLd={[localBusinessSchema, faqSchema]}
      />

      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={heroImg}
            alt="Scales of justice on a desk — symbol of Egyptian legal practice"
            className="w-full h-full object-cover"
            width={1600}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="container-prose relative z-10 pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 animate-fade-up">
            <p className="eyebrow mb-6">
              <span className="gold-divider me-3" />
              {hero.eyebrow}
            </p>
            <h1 className="heading-display text-primary-foreground mb-8 max-w-4xl">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed mb-10">
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="gold" size="xl">
                <Link to="/contact">
                  {hero.ctaPrimary}
                  <ArrowRight className={isRTL ? "rotate-180" : ""} />
                </Link>
              </Button>
              <Button asChild variant="ghostLight" size="xl">
                <Link to="/practice-areas">{hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 animate-fade-up delay-200">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-px bg-primary-foreground/15 rounded-sm overflow-hidden border border-primary-foreground/15">
              {[
                { v: hero.stat1, l: hero.stat1Label },
                { v: hero.stat2, l: hero.stat2Label },
                { v: hero.stat3, l: hero.stat3Label },
              ].map((s, i) => (
                <div key={i} className="bg-primary p-6 lg:p-8">
                  <div className="font-serif text-3xl lg:text-4xl text-accent mb-1">{s.v}</div>
                  <div className="text-xs lg:text-sm text-primary-foreground/70 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-prose grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4"><span className="gold-divider me-3" />{intro.eyebrow}</p>
            <h2 className="heading-section text-primary">{intro.title}</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-muted-foreground leading-relaxed">{intro.body}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="outlineDark" size="lg">
                <Link to="/about">
                  {lang === "en" ? "Read more about the firm" : "اقرأ المزيد عن المكتب"}
                  <ArrowRight className={isRTL ? "rotate-180" : ""} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-24 lg:py-32 bg-secondary/40 border-y border-border">
        <div className="container-prose">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow mb-4"><span className="gold-divider me-3" />{practice.eyebrow}</p>
            <h2 className="heading-section text-primary mb-6">{practice.title}</h2>
            <p className="text-lg text-muted-foreground">{practice.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden border border-border">
            {content.practice.areas.map((a) => {
              const Icon = areaIcons[a.slug] || Scale;
              const t = a[lang];
              return (
                <article key={a.slug} className="group bg-background p-8 lg:p-10 transition-all duration-500 hover:bg-primary hover:text-primary-foreground">
                  <Icon className="h-8 w-8 text-accent mb-6" />
                  <h3 className="font-serif text-2xl mb-3 text-primary group-hover:text-primary-foreground transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
                    {t.short}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outlineDark" size="lg">
              <Link to="/practice-areas">
                {lang === "en" ? "Explore all practice areas" : "استعرض جميع مجالات العمل"}
                <ArrowRight className={isRTL ? "rotate-180" : ""} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-24 lg:py-32 surface-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={cairoImg} alt="Cairo skyline at dusk" loading="lazy" className="w-full h-full object-cover" width={1600} height={900} />
        </div>
        <div className="container-prose relative z-10">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow mb-4"><span className="gold-divider me-3" />{why.eyebrow}</p>
            <h2 className="heading-section text-primary-foreground">{why.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {why.items.map((item, i) => {
              const icons = [Award, ShieldCheck, Users, Sparkles, ShieldCheck, HomeIcon];
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="border-t border-accent/40 pt-6">
                  <Icon className="h-6 w-6 text-accent mb-4" />
                  <h3 className="font-serif text-xl text-primary-foreground mb-2">{item.t}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed text-sm">{item.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-prose grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4"><span className="gold-divider me-3" />{faq.eyebrow}</p>
            <h2 className="heading-section text-primary">{faq.title}</h2>
            <p className="mt-6 text-muted-foreground">
              {lang === "en"
                ? "Have a different question? We respond personally to every enquiry."
                : "هل لديك سؤال آخر؟ نردّ شخصيًا على كل استفسار."}
            </p>
            <Button asChild variant="outlineDark" className="mt-6">
              <Link to="/contact">{content.nav[lang].contact}</Link>
            </Button>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faq.items.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-start font-serif text-lg text-primary hover:no-underline hover:text-accent py-6">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 lg:py-28 hero-gradient overflow-hidden">
        <div className="container-prose relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="heading-section text-primary-foreground mb-6">{cta.title}</h2>
          <p className="text-lg text-primary-foreground/80 mb-10">{cta.subtitle}</p>
          <Button asChild variant="gold" size="xl">
            <Link to="/contact">
              {cta.btn}
              <ArrowRight className={isRTL ? "rotate-180" : ""} />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
