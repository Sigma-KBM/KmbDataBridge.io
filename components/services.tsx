'use client'

import { ArrowRight, ChartColumn, Network, Search } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from './language-provider'

const icons = [ChartColumn, Search, Network]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-20 bg-pale">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:px-6 lg:grid-cols-[240px_1fr] lg:items-center lg:px-8">
        <div>
          <h2 id="services-title" className="text-3xl font-extrabold tracking-tight text-navy">
            {t.services.title}
          </h2>
          <p className="mt-2 text-xs font-medium uppercase leading-relaxed tracking-[0.2em] text-navy/60">{t.services.subtitle}</p>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <li key={item.title}>
                <Link
                  href="/services"
                  className="group flex h-full items-center gap-4 rounded-lg bg-white p-5 shadow-sm ring-1 ring-navy/5 transition-shadow hover:shadow-md"
                >
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-pale text-royal">
                    <Icon aria-hidden="true" className="size-7" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-lg font-bold text-navy">{item.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-navy/70">{item.body}</span>
                  </span>
                  <ArrowRight aria-hidden="true" className="size-5 shrink-0 text-royal transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
