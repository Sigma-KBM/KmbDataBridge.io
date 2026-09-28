'use client'

import Link from 'next/link'
import { ArrowRight, BarChart3, Check, FileText, Info, Search, Workflow } from 'lucide-react'
import { LINKEDIN_URL } from '@/lib/i18n'
import { useLanguage } from './language-provider'
import { Contact } from './contact'
import { BridgeArt } from './bridge-art'
import { EnergyFrame, ManufacturingFrame, QualityFrame } from './portfolio-cards'

type PageKind = 'services' | 'portfolio' | 'about' | 'insights' | 'contact'
type Pair = readonly [string, string]

const copy = {
  en: {
    home: 'Home',
    cta: 'Tell us what you need',
    ctaBandTitle: 'Have an operational question worth clarifying?',
    ctaBandBody: 'Send a short written summary. You will receive a written reply with the appropriate next step.',
    services: {
      eyebrow: 'Services',
      title: 'Make operational data easier to use.',
      body: 'KMB Data Bridge is an independent BI and data analytics consulting practice for small and mid-sized teams that need clearer reporting, focused analysis, and documented next steps.',
      offersTitle: 'Three focused ways to help.',
      outcome: 'Typical outcome',
      offers: [
        ['BI Dashboards', 'Decision-ready dashboards for operations, quality, production, sales, or finance.', 'A focused KPI view, agreed metric definitions, and reporting designed for its audience.'],
        ['Operational & Quality Analytics', 'Explore trends, bottlenecks, defects, downtime, and recurring performance questions.', 'A structured analytical view to compare performance and prioritize investigation.'],
        ['Data Foundations for AI', 'Prepare reliable, documented data for future automation or AI initiatives.', 'Clear data definitions, practical documentation, and a business purpose before technical complexity.'],
      ],
      processEyebrow: 'How we work',
      processTitle: 'A clear, written working process.',
      process: [
        ['Frame the request', 'You send a short written summary of the problem, decision, audience, and information available.'],
        ['Define the scope', 'We document the question, deliverables, assumptions, data needs, and next steps before work begins.'],
        ['Build and review', 'You receive a practical deliverable and a written explanation of how to use it and what it does not conclude.'],
      ],
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Examples built around operational decisions.',
      body: 'Each example shows how KMB Data Bridge approaches reporting, analysis, and documentation—starting from the decision it needs to support.',
      featured: 'Featured case study',
      caseTitle: 'KMB Manufacturing — Quality & Operations Analytics',
      caseBody: 'A four-page Power BI portfolio project for a fictional manufacturing scenario using synthetic, reproducible data. It demonstrates executive oversight, line control, tactical performance management, and quality investigation.',
      pages: ['Executive oversight', 'Line control', 'Tactical performance', 'Quality investigation'],
      highlights: ['Shared star-schema semantic model', 'Governed KPI targets and status logic', 'Documented data, validation, and accessibility approach'],
      moreTitle: 'Connected dashboard examples',
      note: 'Portfolio examples are demonstrations, not client results or claims of certification.',
    },
    about: {
      eyebrow: 'About',
      title: 'A practical bridge between operations, data, and action.',
      body: 'KMB Data Bridge is the independent consulting practice of Manuel Marín, focused on helping leaders convert operational information into understandable, traceable decisions.',
      bridge: [
        ['Operations', 'Where the questions and daily decisions live.'],
        ['Data', 'Defined, validated, and documented information.'],
        ['Action', 'Clear next steps that teams can own.'],
      ],
      principlesEyebrow: 'Principles',
      principlesTitle: 'How the practice works.',
      principles: [
        ['Business first', 'Start with the operational decision and the people who need to make it—not with a tool.'],
        ['Clarity over complexity', 'Use the simplest useful reporting and analysis approach for the question at hand.'],
        ['Traceability by design', 'Keep requirements, assumptions, definitions, and decisions documented in writing.'],
      ],
    },
    insights: {
      eyebrow: 'Insights',
      title: 'Useful ideas for better operational decisions.',
      body: 'LinkedIn is the channel for short, practical perspectives on reporting, operational analysis, and data foundations.',
      topicsTitle: 'Recurring topics',
      topics: [
        ['Dashboards with a decision purpose', 'A good dashboard answers a question, identifies an owner, and makes the next action easier to see.'],
        ['Operational metrics with context', 'Metrics become more useful when teams understand their definition, time period, target, and context.'],
        ['Reliable foundations before AI', 'AI becomes more practical when data is documented, trusted, and connected to a meaningful use case.'],
      ],
      linkedinTitle: 'Follow the perspectives on LinkedIn',
      linkedinBody: 'Short posts, written for leaders and teams who work with operational data every day.',
      linkedinCta: 'Follow on LinkedIn',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell us what you need.',
      body: 'First contact stays in writing so requirements are clear and every assumption and next step remains traceable. A concise message is enough to start.',
      stepsTitle: 'What to expect',
      steps: [
        ['Describe the goal', 'What decision, process, or performance question would you like to improve?'],
        ['Add the context', 'Mention the team, current tools, data sources, timing, and any relevant constraints.'],
        ['Receive a written response', 'You will receive a written reply to clarify the request and discuss the appropriate next step.'],
      ],
    },
  },
  es: {
    home: 'Inicio',
    cta: 'Cuéntanos qué necesitas',
    ctaBandTitle: '¿Tienes una pregunta operativa que vale la pena aclarar?',
    ctaBandBody: 'Envía un breve resumen por escrito. Recibirás una respuesta escrita con el siguiente paso adecuado.',
    services: {
      eyebrow: 'Servicios',
      title: 'Haz que los datos operativos sean más fáciles de usar.',
      body: 'KMB Data Bridge es una práctica independiente de consultoría en BI y analítica de datos para equipos pequeños y medianos que necesitan reportes más claros, análisis enfocados y próximos pasos documentados.',
      offersTitle: 'Tres formas enfocadas de ayudar.',
      outcome: 'Resultado típico',
      offers: [
        ['Dashboards de BI', 'Dashboards listos para decidir en operaciones, calidad, producción, ventas o finanzas.', 'Una vista de KPI enfocada, definiciones de métricas acordadas y reportes diseñados para su audiencia.'],
        ['Analítica operativa y de calidad', 'Explora tendencias, cuellos de botella, defectos, paradas y preguntas de desempeño recurrentes.', 'Una vista analítica estructurada para comparar desempeño y priorizar la investigación.'],
        ['Bases de datos para IA', 'Prepara datos confiables y documentados para futuras iniciativas de automatización o IA.', 'Definiciones de datos claras, documentación práctica y un propósito de negocio antes de la complejidad técnica.'],
      ],
      processEyebrow: 'Cómo trabajamos',
      processTitle: 'Un proceso de trabajo claro y por escrito.',
      process: [
        ['Encuadrar la solicitud', 'Envías un breve resumen escrito del problema, la decisión, la audiencia y la información disponible.'],
        ['Definir el alcance', 'Documentamos la pregunta, entregables, supuestos, necesidades de datos y próximos pasos antes de comenzar.'],
        ['Construir y revisar', 'Recibes un entregable práctico y una explicación escrita de cómo usarlo y qué no permite concluir.'],
      ],
    },
    portfolio: {
      eyebrow: 'Portafolio',
      title: 'Ejemplos construidos alrededor de decisiones operativas.',
      body: 'Cada ejemplo muestra cómo KMB Data Bridge aborda reportes, análisis y documentación, partiendo de la decisión que debe apoyar.',
      featured: 'Caso destacado',
      caseTitle: 'KMB Manufacturing — Analítica de calidad y operaciones',
      caseBody: 'Proyecto de portafolio de Power BI de cuatro páginas para un escenario ficticio de manufactura con datos sintéticos y reproducibles. Demuestra supervisión ejecutiva, control de línea, gestión táctica del desempeño e investigación de calidad.',
      pages: ['Supervisión ejecutiva', 'Control de línea', 'Desempeño táctico', 'Investigación de calidad'],
      highlights: ['Modelo semántico compartido en esquema estrella', 'Objetivos de KPI y lógica de estado gobernados', 'Enfoque documentado de datos, validación y accesibilidad'],
      moreTitle: 'Ejemplos de dashboards conectados',
      note: 'Los ejemplos de portafolio son demostraciones, no resultados de clientes ni afirmaciones de certificación.',
    },
    about: {
      eyebrow: 'Acerca de',
      title: 'Un puente práctico entre operaciones, datos y acción.',
      body: 'KMB Data Bridge es la práctica independiente de consultoría de Manuel Marín, enfocada en ayudar a líderes a convertir la información operativa en decisiones comprensibles y trazables.',
      bridge: [
        ['Operaciones', 'Donde viven las preguntas y decisiones diarias.'],
        ['Datos', 'Información definida, validada y documentada.'],
        ['Acción', 'Próximos pasos claros que los equipos pueden asumir.'],
      ],
      principlesEyebrow: 'Principios',
      principlesTitle: 'Cómo funciona la práctica.',
      principles: [
        ['Primero el negocio', 'Comenzamos con la decisión operativa y las personas que deben tomarla, no con una herramienta.'],
        ['Claridad antes que complejidad', 'Usamos el enfoque de reportes y análisis más simple que sea útil para la pregunta.'],
        ['Trazabilidad por diseño', 'Mantenemos requisitos, supuestos, definiciones y decisiones documentados por escrito.'],
      ],
    },
    insights: {
      eyebrow: 'Ideas',
      title: 'Ideas útiles para mejores decisiones operativas.',
      body: 'LinkedIn es el canal para perspectivas breves y prácticas sobre reportes, análisis operativo y bases de datos.',
      topicsTitle: 'Temas recurrentes',
      topics: [
        ['Dashboards con propósito de decisión', 'Un buen dashboard responde una pregunta, identifica un responsable y hace más visible la siguiente acción.'],
        ['Métricas operativas con contexto', 'Las métricas son más útiles cuando el equipo entiende su definición, período, objetivo y contexto.'],
        ['Bases confiables antes de IA', 'La IA se vuelve más práctica cuando los datos están documentados, son confiables y se conectan a un caso de uso relevante.'],
      ],
      linkedinTitle: 'Sigue las perspectivas en LinkedIn',
      linkedinBody: 'Publicaciones breves, escritas para líderes y equipos que trabajan con datos operativos cada día.',
      linkedinCta: 'Seguir en LinkedIn',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Cuéntanos qué necesitas.',
      body: 'El primer contacto se mantiene por escrito para que los requisitos sean claros y cada supuesto y próximo paso quede trazable. Un mensaje conciso es suficiente para comenzar.',
      stepsTitle: 'Qué esperar',
      steps: [
        ['Describe el objetivo', '¿Qué decisión, proceso o pregunta de desempeño te gustaría mejorar?'],
        ['Añade el contexto', 'Indica el equipo, herramientas actuales, fuentes de datos, tiempos y restricciones relevantes.'],
        ['Recibe una respuesta escrita', 'Recibirás una respuesta escrita para aclarar la solicitud y conversar sobre el siguiente paso adecuado.'],
      ],
    },
  },
} as const

type Copy = (typeof copy)[keyof typeof copy]

const container = 'mx-auto max-w-7xl px-4 md:px-6 lg:px-8'

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] ${light ? 'text-brand-cyan' : 'text-royal'}`}>
      <span aria-hidden="true" className={`h-0.5 w-8 ${light ? 'bg-brand-cyan' : 'bg-royal'}`} />
      {children}
    </p>
  )
}

function CtaLink({ label, variant = 'primary' }: { label: string; variant?: 'primary' | 'cyan' }) {
  return (
    <Link
      href="/contact"
      className={
        variant === 'cyan'
          ? 'inline-flex items-center gap-3 rounded-md bg-brand-cyan px-6 py-3.5 font-bold text-navy shadow-lg shadow-brand-cyan/20 transition-colors hover:bg-white'
          : 'inline-flex items-center gap-3 rounded-md bg-royal px-6 py-3.5 font-bold text-white shadow-lg shadow-royal/20 transition-colors hover:bg-navy'
      }
    >
      {label}
      <ArrowRight aria-hidden="true" className="size-5" />
    </Link>
  )
}

function PageHero({ c, eyebrow, title, body, showCta = true }: { c: Copy; eyebrow: string; title: string; body: string; showCta?: boolean }) {
  return (
    <section className="relative overflow-hidden border-b border-royal/10 bg-gradient-to-br from-[#f5fbff] via-pale to-[#d5edfb]">
      <div aria-hidden="true" className="absolute -right-24 -top-24 size-96 rounded-full bg-brand-cyan/15 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 left-1/3 size-80 rounded-full bg-royal/10 blur-3xl" />
      <div className={`${container} relative py-14 md:py-20 lg:py-24`}>
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-navy/60">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-royal">
                {c.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-navy">
              {eyebrow}
            </li>
          </ol>
        </nav>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-navy/75">{body}</p>
        {showCta && (
          <div className="mt-8">
            <CtaLink label={c.cta} />
          </div>
        )}
      </div>
    </section>
  )
}

function CtaBand({ c }: { c: Copy }) {
  return (
    <section className="bg-navy text-white">
      <div className={`${container} flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between`}>
        <div>
          <h2 className="text-balance text-2xl font-bold md:text-3xl">{c.ctaBandTitle}</h2>
          <p className="mt-2 max-w-2xl text-white/75">{c.ctaBandBody}</p>
        </div>
        <CtaLink label={c.cta} variant="cyan" />
      </div>
    </section>
  )
}

function StepNumber({ n, tone = 'light' }: { n: number; tone?: 'light' | 'dark' }) {
  return (
    <span
      className={`flex size-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold ring-4 ${
        tone === 'dark' ? 'bg-royal text-white ring-white' : 'bg-navy text-brand-cyan ring-pale'
      }`}
    >
      {String(n).padStart(2, '0')}
    </span>
  )
}

const serviceIcons = [BarChart3, Search, Workflow]

function ServicesPage({ c }: { c: Copy }) {
  const s = c.services
  return (
    <main>
      <PageHero c={c} eyebrow={s.eyebrow} title={s.title} body={s.body} />

      <section aria-labelledby="offers-title" className="bg-white">
        <div className={`${container} py-16 md:py-20`}>
          <h2 id="offers-title" className="text-3xl font-extrabold tracking-tight text-navy">
            {s.offersTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {s.offers.map(([title, body, outcome], i) => {
              const Icon = serviceIcons[i]
              return (
                <article
                  key={title}
                  className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-royal/10"
                >
                  <span className="flex size-14 items-center justify-center rounded-xl bg-pale text-royal transition-colors group-hover:bg-royal group-hover:text-white">
                    <Icon aria-hidden="true" className="size-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-navy">{title}</h3>
                  <p className="mt-3 leading-relaxed text-navy/75">{body}</p>
                  <div className="mt-auto pt-6">
                    <div className="rounded-xl bg-pale p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">{s.outcome}</p>
                      <p className="mt-2 text-sm leading-relaxed text-navy/80">{outcome}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="process-title"
        className="relative overflow-hidden bg-pale"
        style={{
          backgroundImage:
            'linear-gradient(rgba(18,104,179,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(18,104,179,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      >
        <BridgeArt variant="blueprint" className="absolute inset-x-0 bottom-0 mx-auto w-[140%] max-w-none -translate-x-[14%] text-royal opacity-[0.14] md:w-full md:translate-x-0" />
        <div className={`${container} relative py-16 md:py-20`}>
          <Eyebrow>{s.processEyebrow}</Eyebrow>
          <h2 id="process-title" className="mt-3 text-3xl font-extrabold tracking-tight text-navy">
            {s.processTitle}
          </h2>
          <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
            <span aria-hidden="true" className="absolute left-12 right-12 top-6 hidden h-0.5 border-t-2 border-dashed border-royal/30 md:block" />
            {s.process.map(([title, body], i) => (
              <li key={title} className="relative">
                <StepNumber n={i + 1} />
                <div className="mt-5 rounded-2xl border border-navy/10 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-2 leading-relaxed text-navy/75">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand c={c} />
    </main>
  )
}

function PortfolioPage({ c }: { c: Copy }) {
  const p = c.portfolio
  const { t } = useLanguage()
  const tp = t.portfolio
  const examples = [
    { key: 'manufacturing', title: tp.manufacturing.title, body: tp.manufacturing.body, visual: <ManufacturingFrame t={tp.manufacturing} /> },
    { key: 'energy', title: tp.energy.title, body: tp.energy.body, visual: <EnergyFrame t={tp.energy} /> },
    { key: 'quality', title: tp.quality.title, body: tp.quality.body, visual: <QualityFrame t={tp.quality} /> },
  ]

  return (
    <main>
      <PageHero c={c} eyebrow={p.eyebrow} title={p.title} body={p.body} />

      <section aria-labelledby="case-title" className="bg-white">
        <div className={`${container} py-16 md:py-20`}>
          <article className="grid overflow-hidden rounded-3xl bg-navy text-white shadow-2xl shadow-navy/20 lg:grid-cols-[1.05fr_1fr]">
            <div className="flex flex-col p-7 md:p-10">
              <Eyebrow light>{p.featured}</Eyebrow>
              <h2 id="case-title" className="mt-4 text-balance text-2xl font-extrabold leading-tight md:text-3xl">
                {p.caseTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-white/80">{p.caseBody}</p>
              <ul className="mt-6 grid gap-3">
                {p.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20 text-brand-cyan">
                      <Check aria-hidden="true" className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-5 bg-gradient-to-br from-[#0d3566] to-navy p-7 md:p-10">
              <ManufacturingFrame t={tp.manufacturing} />
              <ol className="grid grid-cols-2 gap-2 text-sm">
                {p.pages.map((page, i) => (
                  <li key={page} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <span className="font-bold text-brand-cyan">{i + 1}</span>
                    <span className="text-white/85">{page}</span>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="examples-title" className="relative overflow-hidden bg-pale">
        <div className={`${container} relative py-16 md:py-20`}>
          <h2 id="examples-title" className="text-3xl font-extrabold tracking-tight text-navy">
            {p.moreTitle}
          </h2>
          <div className="relative mt-10">
            <BridgeArt variant="dataflow" className="absolute inset-x-0 top-1/2 hidden w-full -translate-y-1/2 text-royal opacity-25 lg:block" />
            <ul className="relative grid gap-8 lg:grid-cols-3 lg:gap-10">
              {examples.map((ex) => (
                <li key={ex.key} className="rounded-2xl bg-white p-3 shadow-lg shadow-navy/10">
                  {ex.visual}
                  <div className="px-2 pb-2 pt-4">
                    <h3 className="text-lg font-bold text-navy">{ex.title}</h3>
                    <p className="text-sm text-navy/70">{ex.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 flex items-start gap-3 rounded-xl border border-royal/20 bg-white px-5 py-4 text-sm font-medium text-navy">
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-royal" />
            {p.note}
          </p>
        </div>
      </section>

      <CtaBand c={c} />
    </main>
  )
}

function AboutPage({ c }: { c: Copy }) {
  const a = c.about
  return (
    <main>
      <PageHero c={c} eyebrow={a.eyebrow} title={a.title} body={a.body} />

      <section aria-label={a.bridge.map(([t]) => t).join(', ')} className="bg-white">
        <div className={`${container} py-16 md:py-20`}>
          <BridgeArt variant="lineart" className="mx-auto w-full max-w-5xl text-navy opacity-80" />
          <ol className="mx-auto mt-6 grid max-w-5xl gap-6 text-center sm:grid-cols-3">
            {a.bridge.map(([title, body], i) => (
              <li key={title} className={i === 0 ? 'sm:text-left' : i === 2 ? 'sm:text-right' : ''}>
                <p className={`text-xl font-extrabold ${i === 1 ? 'text-royal' : 'text-navy'}`}>{title}</p>
                <p className="mt-1 text-sm text-navy/70">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="principles-title" className="bg-pale">
        <div className={`${container} py-16 md:py-20`}>
          <Eyebrow>{a.principlesEyebrow}</Eyebrow>
          <h2 id="principles-title" className="mt-3 text-3xl font-extrabold tracking-tight text-navy">
            {a.principlesTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {a.principles.map(([title, body], i) => (
              <article key={title} className="rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                <p className="text-5xl font-extrabold text-pale [-webkit-text-stroke:1.5px_var(--color-royal)]">{`0${i + 1}`}</p>
                <h3 className="mt-4 text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 leading-relaxed text-navy/75">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand c={c} />
    </main>
  )
}

function InsightsPage({ c }: { c: Copy }) {
  const s = c.insights
  return (
    <main>
      <PageHero c={c} eyebrow={s.eyebrow} title={s.title} body={s.body} showCta={false} />

      <section aria-labelledby="topics-title" className="relative overflow-hidden bg-white">
        <BridgeArt variant="nodes" className="absolute inset-x-0 top-6 mx-auto w-full max-w-6xl text-royal opacity-[0.13]" />
        <div className={`${container} relative py-16 md:py-20`}>
          <h2 id="topics-title" className="text-3xl font-extrabold tracking-tight text-navy">
            {s.topicsTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {s.topics.map(([title, body], i) => (
              <article key={title} className="rounded-2xl border border-navy/10 bg-white/95 p-7 shadow-sm backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <span aria-hidden="true" className={`size-3 rounded-full ${i === 1 ? 'bg-brand-amber' : 'bg-brand-cyan'}`} />
                  <FileText aria-hidden="true" className="size-5 text-royal" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 leading-relaxed text-navy/75">{body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-6 rounded-3xl bg-navy p-7 text-white shadow-2xl shadow-navy/20 md:flex-row md:items-center md:p-10">
            <span aria-hidden="true" className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-[#0A66C2] text-3xl font-bold">
              in
            </span>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{s.linkedinTitle}</h2>
              <p className="mt-2 text-white/75">{s.linkedinBody}</p>
            </div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-brand-cyan px-7 py-4 text-lg font-bold text-navy shadow-lg shadow-brand-cyan/20 transition-colors hover:bg-white"
            >
              {s.linkedinCta}
              <ArrowRight aria-hidden="true" className="size-5" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <CtaBand c={c} />
    </main>
  )
}

function ContactPage({ c }: { c: Copy }) {
  const s = c.contact
  return (
    <main>
      <PageHero c={c} eyebrow={s.eyebrow} title={s.title} body={s.body} showCta={false} />

      <section aria-labelledby="steps-title" className="relative overflow-hidden bg-white">
        <BridgeArt variant="calm" className="absolute inset-x-0 top-1/2 mx-auto w-full -translate-y-1/2 text-royal opacity-[0.12]" />
        <div className={`${container} relative py-16 md:py-20`}>
          <h2 id="steps-title" className="text-3xl font-extrabold tracking-tight text-navy">
            {s.stepsTitle}
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {(s.steps as readonly Pair[]).map(([title, body], i) => (
              <li key={title} className="flex gap-4 rounded-2xl border border-navy/10 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
                <StepNumber n={i + 1} tone="dark" />
                <div>
                  <h3 className="text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-2 leading-relaxed text-navy/75">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Contact />
    </main>
  )
}

export function InnerPage({ kind }: { kind: PageKind }) {
  const { lang } = useLanguage()
  const c = copy[lang]

  if (kind === 'services') return <ServicesPage c={c} />
  if (kind === 'portfolio') return <PortfolioPage c={c} />
  if (kind === 'about') return <AboutPage c={c} />
  if (kind === 'insights') return <InsightsPage c={c} />
  return <ContactPage c={c} />
}
