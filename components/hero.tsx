'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from './language-provider'
import { HeroKpiPanel } from './hero-kpi-panel'
import { assetPath } from '@/lib/utils'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-to-b from-[#f3f9ff] to-pale">
      <Image
        src={assetPath('/images/hero-bridge.png')}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-60 mix-blend-multiply"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 pt-12 md:px-6 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8 lg:pb-16 lg:pt-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">{t.hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-4 text-balance text-5xl font-extrabold leading-[0.95] tracking-tight text-navy sm:text-6xl xl:text-7xl">
            {t.hero.line1}{' '}
            <span className="text-royal">{t.hero.accent1}</span>{' '}
            <span className="bg-gradient-to-r from-sky-500 to-brand-cyan bg-clip-text text-transparent">{t.hero.accent2}</span>
          </h1>
          <p className="mt-5 text-lg font-medium text-navy md:text-xl">{t.hero.support}</p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-royal px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-royal/25 transition-colors hover:bg-navy"
            >
              {t.hero.primary}
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-md border-2 border-royal bg-white/70 px-7 py-3 text-base font-bold text-royal transition-colors hover:bg-white"
            >
              {t.hero.secondary}
            </Link>
          </div>

          <p className="mt-5 max-w-md text-sm text-navy/70">{t.hero.note}</p>

          <ul className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium uppercase tracking-[0.22em] text-navy/60">
            {t.hero.tags.map((tag, i) => (
              <li key={tag} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden="true">|</span>}
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="absolute -top-2 left-0 hidden -translate-x-[115%] 2xl:block">
            <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.3em] text-navy/70">
              {t.hero.sideLeft.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <span className="mt-3 block h-0.5 w-12 bg-brand-cyan" />
          </div>
          <HeroKpiPanel />
        </div>
      </div>
    </section>
  )
}
