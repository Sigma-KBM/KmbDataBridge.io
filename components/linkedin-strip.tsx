'use client'

import { ArrowRight } from 'lucide-react'
import { LINKEDIN_URL } from '@/lib/i18n'
import { useLanguage } from './language-provider'

export function LinkedInStrip() {
  const { t } = useLanguage()

  return (
    <section id="insights" aria-labelledby="insights-title" className="scroll-mt-20 bg-gradient-to-r from-pale via-[#dcebfa] to-[#c9def3]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 md:flex-row md:items-center md:gap-8 md:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2] text-3xl font-bold text-white">
            in
          </span>
          <div>
            <h2 id="insights-title" className="text-lg font-bold text-navy">
              {t.linkedin.title}
            </h2>
            <p className="text-sm text-navy/75">{t.linkedin.body}</p>
          </div>
        </div>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-md border-2 border-royal bg-white/60 px-6 py-2.5 text-sm font-bold text-royal transition-colors hover:bg-white md:ml-auto"
        >
          {t.linkedin.cta}
          <ArrowRight aria-hidden="true" className="size-4" />
        </a>
        <p aria-hidden="true" className="hidden text-xs font-medium uppercase leading-relaxed tracking-[0.2em] text-navy/60 xl:block">
          {t.linkedin.side.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
