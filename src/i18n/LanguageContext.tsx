import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "ar" | "en";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  dir: "rtl" | "ltr";
  isRTL: boolean;
}

const Ctx = createContext<LangCtx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "ar";
    return (localStorage.getItem("lang") as Lang) || "ar";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);

  return (
    <Ctx.Provider
      value={{
        lang,
        setLang,
        toggle: () => setLang(lang === "ar" ? "en" : "ar"),
        dir: lang === "ar" ? "rtl" : "ltr",
        isRTL: lang === "ar",
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
