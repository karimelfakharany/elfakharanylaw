import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { content } from "@/i18n/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SEO } from "@/components/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10).max(2000),
});

const Contact = () => {
  const { lang } = useLang();

  // ✅ SAFE LANGUAGE (NO CRASH)
  const safeLang = lang || "en";
  const t = content.contact[safeLang] || content.contact.en;

  if (!t) return null;

  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const onChange = (k: string, v: string) =>
    setForm({ ...form, [k]: v });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(
        safeLang === "en"
          ? "Please check your details and try again."
          : "يرجى التحقّق من البيانات والمحاولة مرة أخرى."
      );
      return;
    }

    setSubmitting(true);

    try {
      // ✅ FIXED (NO WHITE SCREEN)
      await fetch("/?no-cache=1", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...form,
        }).toString(),
      });

      toast.success(t.sent);

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }

    setSubmitting(false);
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Elfakharany Law Firm",
    url: "https://elfakharanylaw.com/contact",
    telephone: "+201000200363",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: safeLang === "ar" ? "الرئيسية" : "Home",
        item: "https://elfakharanylaw.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: safeLang === "ar" ? "تواصل معنا" : "Contact",
        item: "https://elfakharanylaw.com/contact",
      },
    ],
  };

  return (
    <PageLayout>
      <SEO
        path="/contact"
        titleEn="Contact"
        titleAr="تواصل معنا"
        descEn="Contact Elfakharany Law Firm in Cairo, Egypt. Speak with a lawyer and request a confidential legal consultation."
        descAr="تواصل مع مكتب الفخراني للمحاماة في القاهرة، مصر، واحصل على استشارة قانونية بسرية تامة."
        jsonLd={[localBusinessSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20 hero-gradient">
        <div className="container-prose max-w-4xl">
          <p className="eyebrow mb-6 text-accent">
            <span className="gold-divider me-3" />
            {t.eyebrow}
          </p>

          <h1 className="heading-display text-primary-foreground mb-6">
            {t.title}
          </h1>

          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            {t.lead}
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-prose grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* FORM */}
          <div className="lg:col-span-7">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={onSubmit}
              className="bg-card border border-border rounded-sm p-8 lg:p-10 shadow-card space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => onChange("name", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => onChange("email", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.phone}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={(e) => onChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t.subject}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={(e) => onChange("subject", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => onChange("message", e.target.value)}
                />
              </div>

              <Button type="submit" variant="gold" size="lg" disabled={submitting}>
                <Send className="h-4 w-4" />
                {submitting
                  ? (safeLang === "en" ? "Sending..." : "جارٍ الإرسال...")
                  : t.submit}
              </Button>
            </form>
          </div>

          {/* INFO */}
          <aside className="lg:col-span-5">
            <div className="surface-dark rounded-sm p-8 lg:p-10 shadow-elegant">
              <p className="eyebrow text-accent mb-6">
                <span className="gold-divider me-3" />
                {t.info}
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin />
                  <a href="https://www.google.com/maps/place/..." target="_blank" rel="noopener noreferrer">
                    {t.addressValue}
                  </a>
                </li>

                <li className="flex items-start gap-4">
                  <Phone />
                  <a href="tel:+201000200363">{t.phoneValue}</a>
                </li>

                <li className="flex items-start gap-4">
                  <Mail />
                  <a href="mailto:info@elfakharanylaw.com">{t.emailValue}</a>
                </li>

                <li className="flex items-start gap-4">
                  <Clock />
                  <div>{t.hoursValue}</div>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;