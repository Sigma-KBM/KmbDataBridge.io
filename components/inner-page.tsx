'use client'

import Link from 'next/link'
import { ArrowRight, Check, ClipboardList, Lightbulb, Workflow } from 'lucide-react'
import { useLanguage } from './language-provider'
import { Services } from './services'
import { Portfolio } from './portfolio'
import { About } from './about'
import { Contact } from './contact'
import { LinkedInStrip } from './linkedin-strip'

type PageKind = 'services' | 'portfolio' | 'about' | 'insights' | 'contact'

const content = {
  en: {
    services: {
      eyebrow: 'How I can help',
      title: 'From scattered data to focused action.',
      body: 'Practical business intelligence and analytics designed around the decisions your team needs to make.',
      steps: [
        ['Clarify', 'Start with the operational question, the decision owner, and the measure that matters.'],
        ['Design', 'Build a clear, traceable view that connects the data to the business context.'],
        ['Improve', 'Turn the insight into an action plan your team can use and sustain.'],
      ],
    },
    portfolio: {
      eyebrow: 'Selected work',
      title: 'Portfolio built around real operational questions.',
      body: 'These demonstration projects show how information can be organized for production, energy, and quality decisions.',
      points: ['Decision-focused KPI design', 'Clear, governed reporting views', 'Synthetic data for responsible demonstrations'],
    },
    about: {
      eyebrow: 'About KMB Data Bridge',
      title: 'A practical bridge between operations, data, and action.',
      body: 'KMB Data Bridge brings a business-process perspective to analytics so information is useful to the people responsible for quality, productivity, and improvement.',
      points: ['Operational understanding', 'Traceable recommendations', 'Practical communication'],
    },
    insights: {
      eyebrow: 'Ideas for practical improvement',
      title: 'Useful insights, shared in the open.',
      body: 'Follow concise perspectives on operational data, dashboards, analytics, and AI-ready foundations for real businesses.',
      cards: [
        ['Data with context', 'A dashboard becomes useful when it answers a business question, not merely when it displays a metric.'],
        ['Quality and performance', 'Connect performance measures to the operational processes that create them.'],
        ['AI-ready foundations', 'Start with reliable data, shared definitions, and a clear decision purpose.'],
      ],
    },
    contact: {
      eyebrow: 'Start in writing',
      title: 'Tell us what you need.',
      body: 'Share your goals, the challenge you are seeing, and any information that will help frame the request. Written communication keeps requirements clear from the first conversation.',
    },
    cta: 'Tell us what you need',
  },
  es: {
    services: {
      eyebrow: 'Cómo puedo ayudar',
      title: 'De datos dispersos a una acción enfocada.',
      body: 'Inteligencia de negocio y análisis prácticos, diseñados alrededor de las decisiones que tu equipo necesita tomar.',
      steps: [
        ['Aclarar', 'Comenzamos con la pregunta operativa, el responsable de la decisión y la medida que importa.'],
        ['Diseñar', 'Construimos una vista clara y trazable que conecta los datos con el contexto del negocio.'],
        ['Mejorar', 'Convertimos el hallazgo en un plan de acción que tu equipo pueda usar y sostener.'],
      ],
    },
    portfolio: {
      eyebrow: 'Trabajo seleccionado',
      title: 'Portafolio construido alrededor de preguntas operativas reales.',
      body: 'Estos proyectos de demostración muestran cómo organizar la información para decisiones de producción, energía y calidad.',
      points: ['Diseño de KPI orientado a decisiones', 'Vistas de reportes claras y gobernadas', 'Datos sintéticos para demostraciones responsables'],
    },
    about: {
      eyebrow: 'Acerca de KMB Data Bridge',
      title: 'Un puente práctico entre operaciones, datos y acción.',
      body: 'KMB Data Bridge incorpora una perspectiva de procesos de negocio a la analítica, para que la información sea útil a quienes lideran calidad, productividad y mejora.',
      points: ['Comprensión operativa', 'Recomendaciones trazables', 'Comunicación práctica'],
    },
    insights: {
      eyebrow: 'Ideas para mejorar de forma práctica',
      title: 'Insights útiles, compartidos abiertamente.',
      body: 'Sigue perspectivas breves sobre datos operativos, dashboards, analítica y bases listas para IA en empresas reales.',
      cards: [
        ['Datos con contexto', 'Un dashboard es útil cuando responde una pregunta de negocio, no solo cuando muestra una métrica.'],
        ['Calidad y desempeño', 'Conecta las medidas de desempeño con los procesos operativos que las generan.'],
        ['Bases listas para IA', 'Comienza con datos confiables, definiciones compartidas y un propósito de decisión claro.'],
      ],
    },
    contact: {
      eyebrow: 'Comienza por escrito',
      title: 'Cuéntanos qué necesitas.',
      body: 'Comparte tus objetivos, el reto que observas y la información que ayude a encuadrar la solicitud. La comunicación escrita mantiene los requisitos claros desde el primer contacto.',
    },
    cta: 'Cuéntanos qué necesitas',
  },
} as const

const icons = [ClipboardList, Workflow, Lightbulb]

export function InnerPage({ kind }: { kind: PageKind }) {
  const { lang } = useLanguage()
  const copy = content[lang][kind]
  const hasSteps = kind === 'services'
  const hasCards = kind === 'insights'
  const hasPoints = kind === 'portfolio' || kind === 'about'

  return (
    <main>
      <section className="border-b border-royal/10 bg-gradient-to-br from-[#f5fbff] via-pale to-[#d5edfb]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-royal">{copy.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">{copy.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy/75">{copy.body}</p>
          {kind !== 'contact' && (
            <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-md bg-royal px-6 py-3.5 font-bold text-white shadow-lg shadow-royal/20 transition-colors hover:bg-navy">
              {content[lang].cta}<ArrowRight aria-hidden="true" className="size-5" />
            </Link>
          )}
        </div>
      </section>

      {hasSteps && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
            <ol className="grid gap-5 md:grid-cols-3">
              {copy.steps.map(([title, body], index) => {
                const Icon = icons[index]
                return <li key={title} className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm"><span className="flex size-12 items-center justify-center rounded-full bg-pale text-royal"><Icon className="size-6" /></span><p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-royal">0{index + 1}</p><h2 className="mt-2 text-2xl font-bold text-navy">{title}</h2><p className="mt-3 leading-relaxed text-navy/70">{body}</p></li>
              })}
            </ol>
          </div>
        </section>
      )}

      {hasPoints && (
        <section className="bg-white"><div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8"><ul className="flex flex-wrap gap-3">{copy.points.map((point) => <li key={point} className="flex items-center gap-2 rounded-full bg-pale px-4 py-2 text-sm font-semibold text-navy"><Check className="size-4 text-royal" />{point}</li>)}</ul></div></section>
      )}

      {hasCards && (
        <section className="bg-white"><div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 md:grid-cols-3 md:px-6 lg:px-8">{copy.cards.map(([title, body], index) => { const Icon = icons[index]; return <article key={title} className="rounded-xl border border-navy/10 p-6 shadow-sm"><Icon className="size-8 text-royal" /><h2 className="mt-5 text-xl font-bold text-navy">{title}</h2><p className="mt-3 leading-relaxed text-navy/70">{body}</p></article> })}</div></section>
      )}

      {kind === 'services' && <Services />}
      {kind === 'portfolio' && <Portfolio />}
      {kind === 'about' && <About />}
      {kind === 'insights' && <LinkedInStrip />}
      {kind === 'contact' && <Contact />}
      {kind !== 'contact' && kind !== 'insights' && <LinkedInStrip />}
    </main>
  )
}
