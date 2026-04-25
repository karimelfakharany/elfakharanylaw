import { Helmet } from "react-helmet-async";
import { useLang } from "@/i18n/LanguageContext";

interface SEOProps {
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  path?: string;
  jsonLd?: object | object[];
}

export const SEO = ({ titleEn, titleAr, descEn, descAr, path = "/", jsonLd }: SEOProps) => {
  const { lang, isRTL } = useLang();
  const title = lang === "ar" ? titleAr : titleEn;
  const description = lang === "ar" ? descAr : descEn;
  const url = `https://elfakharany-law.com${path}`;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <html lang={lang} dir={isRTL ? "rtl" : "ltr"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="ar" href={`https://elfakharany-law.com${path}`} />
      <link rel="alternate" hrefLang="en" href={`https://elfakharany-law.com${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={lang === "ar" ? "ar_EG" : "en_US"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
};
