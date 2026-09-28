'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { dictionaries, type Dictionary, type Lang } from '@/lib/i18n'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = window.localStorage.getItem('kmb-language')
    if (saved === 'en' || saved === 'es') setLang(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  function selectLanguage(nextLang: Lang) {
    setLang(nextLang)
    window.localStorage.setItem('kmb-language', nextLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: selectLanguage, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
