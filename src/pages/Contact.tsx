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
  const t = content.contact[lang];
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const onChange = (k: string, v: string) => setForm({ ...form, [k]: v });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(lang === "en" ? "Please check your details and try again." : "يرجى التحقّق من البيانات والمحاولة مرة أخرى.");
      return;
    }
    setSubmitting(true);
    // Front-end demo: simulate submit
    await new Promise((r) => setTimeout(r, 800));
    toast.success(t.sent);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitting(false);
  };

  return (
    <PageLayout>
      <SEO
        path="/contact"
        titleEn="Contact Elfakharany Law Firm in Cairo, Egypt"
        titleAr="تواصل مع مكتب الفخراني للمحاماة في القاهرة، مصر"
        descEn="Reach our legal team in Cairo. Confidential consultations for individuals and businesses across Egypt. Most enquiries answered within one business day."
        descAr="تواصل مع فريقنا القانوني في القاهرة. استشارات سرّية للأفراد والشركات في جميع أنحاء مصر. نردّ على معظم الاستفسارات خلال يوم عمل واحد."
      />

      {/* Hero */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20 hero-gradient">
        <div className="container-prose max-w-4xl">
          <p className="eyebrow mb-6 text-accent"><span className="gold-divider me-3" />{t.eyebrow}</p>
          <h1 className="heading-display text-primary-foreground mb-6">{t.title}</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">{t.lead}</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-prose grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="bg-card border border-border rounded-sm p-8 lg:p-10 shadow-card space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.name}</Label>
                  <Input id="name" required value={form.name} onChange={(e) => onChange("name", e.target.value)} maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.email}</Label>
                  <Input id="email" type="email" required value={form.email} onChange={(e) => onChange("email", e.target.value)} maxLength={255} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.phone}</Label>
                  <Input id="phone" value={form.phone} onChange={(e) => onChange("phone", e.target.value)} maxLength={40} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t.subject}</Label>
                  <Input id="subject" required value={form.subject} onChange={(e) => onChange("subject", e.target.value)} maxLength={150} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t.message}</Label>
                <Textarea id="message" required rows={6} value={form.message} onChange={(e) => onChange("message", e.target.value)} maxLength={2000} />
              </div>
              <Button type="submit" variant="gold" size="lg" disabled={submitting} className="w-full md:w-auto">
                <Send className="h-4 w-4" />
                {submitting ? (lang === "en" ? "Sending..." : "جارٍ الإرسال...") : t.submit}
              </Button>
            </form>
          </div>

          {/* Info */}
          <aside className="lg:col-span-5">
            <div className="surface-dark rounded-sm p-8 lg:p-10 shadow-elegant">
              <p className="eyebrow text-accent mb-6"><span className="gold-divider me-3" />{t.info}</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/15 text-accent shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">{t.addressLabel}</div>
                    <div className="text-primary-foreground">{t.addressValue}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/15 text-accent shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">{t.phoneLabel}</div>
                    <div className="text-primary-foreground" dir="ltr">{t.phoneValue}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/15 text-accent shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">{t.emailLabel}</div>
                    <div className="text-primary-foreground">{t.emailValue}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/15 text-accent shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">{t.hoursLabel}</div>
                    <div className="text-primary-foreground">{t.hoursValue}</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 border border-border rounded-sm p-6 bg-secondary/40">
              <p className="font-serif text-lg text-primary mb-2">
                {lang === "en" ? "Confidentiality first" : "السرّية أولًا"}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {lang === "en"
                  ? "All enquiries are treated under strict attorney-client confidentiality."
                  : "تُعامل جميع الاستفسارات وفق سرّية تامة بين المحامي وموكّله."}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
