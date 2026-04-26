import { Link } from "react-router-dom";
import type { ElementType } from "react";
import {
  ArrowRight,
  Scale,
  Building2,
  Home as HomeIcon,
  Plane,
  FileSignature,
  Award,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";

import { useLang } from "@/i18n/LanguageContext";
import { content } from "@/i18n/content";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import heroImg from "@/assets/hero-justice.jpg";
import cairoImg from "@/assets/cairo-skyline.jpg";

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
  const why = content.why[lang];
  const faq = content.faq[lang];
  const cta = content.cta[lang];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: "Elfakharany Law Firm",
    alternateName: "مكتب الفخراني للمحاماة والاستشارات القانونية",
    description:
      "Cairo-based law firm offering corporate, civil, family, real estate, immigration and contract legal services across Egypt for over 40 years.",
    url: "https://elfakharany-law.com",
    telephone: "+201000200363",
    email: "info@elfakharany-law.com",
    areaServed: [
      { "@type": "City", name: "Cairo" },
      { "@type": "Country", name: "Egypt" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    founder: {
      "@type": "Person",
      name: "Gamal Elfakharany",
      jobTitle: "Founding Attorney",
    },
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
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
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
            alt="Scales of justice"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="container-prose relative z-10 pt-32 pb-20">
          <h1 className="heading-display text-primary-foreground mb-6">
            {hero.title}
          </h1>
          <Button asChild variant="gold">
            <Link to="/contact">
              {hero.ctaPrimary}
              <ArrowRight className={isRTL ? "rotate-180" : ""} />
            </Link>
          </Button>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-20 bg-background">
        <div className="container-prose grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.practice.areas.map((a) => {
            const Icon =
              areaIcons[a.slug as keyof typeof areaIcons] || Scale;

            const t = a[lang];

            return (
              <div key={a.slug} className="p-6 border rounded">
                <Icon className="h-6 w-6 mb-4" />
                <h3 className="text-lg font-bold">{t.title}</h3>
                <p>{t.short}</p>
              </div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;