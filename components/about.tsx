'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { useLanguage } from './language-provider'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 border-t border-navy/5 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-14 pt-4 md:grid-cols-[auto_1fr] md:gap-12 md:px-6 lg:px-8">
        <Image src="/images/kmb-logo.png" alt="" width={160} height={160} className="hidden size-40 md:block" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">{t.about.eyebrow}</p>
          <h2 id="about-title" className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-navy">
            {t.about.title}
          </h2>
          <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-navy/80">{t.about.body}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {t.about.focus.map((item) => (
              <li key={item} className="flex items-center gap-1.5 rounded-full bg-pale px-3 py-1.5 text-sm font-medium text-navy">
                <Check aria-hidden="true" className="size-4 text-royal" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
