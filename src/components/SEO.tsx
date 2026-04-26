import { Helmet } from "react-helmet-async";
import { useLang } from "@/i18n/LanguageContext";

interface SEOProps {
  titleEn?: string;
  titleAr?: string;
  descEn?: string;
  descAr?: string;
  path?: string;
  jsonLd?: object | object[];
}

export const SEO = ({
  titleEn,
  titleAr,
  descEn,
  descAr,
  path = "/",
  jsonLd,
}: SEOProps) => {
  const { lang, isRTL } = useLang();

  // ✅ DEFAULT GLOBAL TITLE
  const defaultTitle =
    "Elfakharany Law Firm | مكتب الفخراني للمحاماة و الاستشارات القانونية";

  // ✅ USE PAGE TITLE OR FALLBACK
  const title =
    titleEn || titleAr
      ? lang === "ar"
        ? `${titleAr} | مكتب الفخراني للمحاماة`
        : `${titleEn} | Elfakharany Law Firm`
      : defaultTitle;

  // ✅ DEFAULT DESCRIPTION
  const defaultDesc =
    lang === "ar"
      ? "مكتب الفخراني للمحاماة والاستشارات القانونية هو مكتب قانوني رائد في القاهرة، مصر، تأسس عام 1984 على يد جمال الفخراني، ويقدم خدمات قانونية متكاملة واستشارات قانونية موثوقة في جميع أنحاء مصر."
      : "Elfakharany Law Firm is a well-established law firm in Cairo, Egypt, founded in 1984 by Gamal Elfakharany, providing comprehensive legal services and trusted legal consultation across Egypt.";

  const description =
    descEn || descAr
      ? lang === "ar"
        ? descAr
        : descEn
      : defaultDesc;

  const url = `https://elfakharany-law.com${path}`;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <html lang={lang} dir={isRTL ? "rtl" : "ltr"} />

      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="icon" href="/EFLOGO.png" />

      <meta
        name="keywords"
        content="مكتب محاماة, مكتب الفخراني للمحاماة, جمال الفخراني, محاماة, محامي في القاهرة, مكتب محاماة في مصر, خدمات قانونية في مصر, استشارات قانونية, تسوية المنازعات, التحكيم, law firm, lawyer, Gamal Elfakharany, Elfakharany Law Firm, law firm Egypt, lawyer Cairo Egypt, legal services Egypt"
      />

      <link rel="canonical" href={url} />

      <link rel="alternate" hrefLang="ar" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={lang === "ar" ? "ar_EG" : "en_US"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Elfakharany Law Firm",
          url: "https://elfakharany-law.com",
          logo: "https://elfakharany-law.com/EFLOGO.png",
          founder: {
            "@type": "Person",
            name: "Gamal Elfakharany",
          },
        })}
      </script>

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};