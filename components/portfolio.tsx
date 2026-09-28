'use client'

import { ArrowRight, Info } from 'lucide-react'
import { useLanguage } from './language-provider'
import { EnergyFrame, ManufacturingFrame, QualityFrame } from './portfolio-cards'

export function Portfolio() {
  const { t } = useLanguage()
  const p = t.portfolio

  const projects = [
    { key: 'manufacturing', title: p.manufacturing.title, body: p.manufacturing.body, visual: <ManufacturingFrame t={p.manufacturing} /> },
    { key: 'energy', title: p.energy.title, body: p.energy.body, visual: <EnergyFrame t={p.energy} /> },
    { key: 'quality', title: p.quality.title, body: p.quality.body, visual: <QualityFrame t={p.quality} /> },
  ]

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
            <h2 id="portfolio-title" className="text-3xl font-extrabold tracking-tight text-navy">
              {p.title}
            </h2>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-navy/60">{p.subtitle}</p>
          </div>
          <p className="flex items-center gap-1.5 text-sm font-medium text-royal">
            <Info aria-hidden="true" className="size-4" />
            {p.synthetic}
          </p>
        </div>

        <ul className="mt-6 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <li key={project.key}>
              <article>
                <a
                  href="#contact"
                  aria-label={`${project.title}: ${p.ask}`}
                  className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal"
                >
                  <div className="transition-transform duration-300 group-hover:-translate-y-1">{project.visual}</div>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy">{project.title}</h3>
                      <p className="text-sm text-navy/70">{project.body}</p>
                    </div>
                    <ArrowRight aria-hidden="true" className="mt-2 size-5 shrink-0 text-royal transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
