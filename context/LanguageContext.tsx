'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'en' | 'hi';

interface LangContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LangContextValue>({ lang: 'en', toggleLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <LanguageContext.Provider value={{ lang, toggleLang: () => setLang(l => (l === 'en' ? 'hi' : 'en')) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
