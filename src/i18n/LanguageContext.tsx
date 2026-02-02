import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Lang = 'en' | 'ko';

type LanguageContextValue = {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>(() => {
        const saved = localStorage.getItem('lang');
        return saved === 'ko' ? 'ko' : 'en';
    });

    useEffect(() => {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang; // optional but nice for accessibility/SEO
    }, [lang]);

    const value = useMemo(
        () => ({
            lang,
            setLang,
            toggleLang: () => setLang((prev) => (prev === 'en' ? 'ko' : 'en')),
        }),
        [lang]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
}
