'use client'

import Link from 'next/link'
import { ArrowRight, BarChart3, Check, Search, Workflow } from 'lucide-react'
import { useLanguage } from './language-provider'
import { Services } from './services'
import { Portfolio } from './portfolio'
import { About } from './about'
import { Contact } from './contact'
import { LinkedInStrip } from './linkedin-strip'

type PageKind = 'services' | 'portfolio' | 'about' | 'insights' | 'contact'

const copy = {
  en: {
    services: {
      eyebrow: 'Consulting services', title: 'Make operational data easier to use.',
      body: 'KMB Data Bridge helps small and mid-sized teams turn disconnected operational information into clear reporting, focused analysis, and documented next steps.',
      offers: [
        ['BI Dashboards', 'Design decision-ready dashboards for operations, quality, production, sales, or finance.', 'A focused KPI view, agreed metric definitions, and a reporting experience built for its audience.'],
        ['Operational & Quality Analytics', 'Explore trends, bottlenecks, defects, downtime, or recurring performance questions.', 'A structured analytical view that helps frame questions, compare performance, and prioritize investigation.'],
        ['Data Foundations for AI', 'Prepare data so future automation or AI initiatives begin with reliable information.', 'Clear data definitions, practical documentation, and a business purpose before adding technical complexity.'],
      ],
      processTitle: 'A clear, written working process.',
      process: [
        ['1. Frame the request', 'You send a short written summary of the problem, decision, audience, and information available.'],
        ['2. Define the scope', 'We document the question, deliverables, assumptions, data needs, and next steps before work begins.'],
        ['3. Build and review', 'You receive a practical deliverable and a written explanation of how to use it and what it does not conclude.'],
      ],
    },
    portfolio: {
      eyebrow: 'Selected portfolio work', title: 'Examples built around operational decisions.',
      body: 'The portfolio demonstrates how KMB Data Bridge approaches reporting, analysis, and documentation. Examples clearly identify when data is synthetic or publicly sourced.',
      manufacturingTitle: 'KMB Manufacturing — Quality & Operations Analytics',
      manufacturingBody: 'A four-page Power BI portfolio project for a fictional manufacturing scenario. It uses synthetic, reproducible data to demonstrate executive oversight, line control, tactical performance management, and quality investigation.',
      highlights: ['Shared star-schema semantic model', 'Governed KPI targets and status logic', 'Documented data, validation, and accessibility approach'],
      note: 'Portfolio examples are demonstrations, not client results or claims of certification.',
    },
    about: {
      eyebrow: 'About KMB Data Bridge', title: 'A practical bridge between operations, data, and action.',
      body: 'KMB Data Bridge is the independent consulting practice of Manuel Marín. Its purpose is straightforward: help leaders turn operational information into understandable, traceable decisions.',
      principlesTitle: 'How the practice works.',
      principles: [
        ['Business first', 'Start with the operational decision and the people who need to make it—not with a tool.'],
        ['Clarity over complexity', 'Use the simplest useful reporting and analysis approach for the question at hand.'],
        ['Traceability by design', 'Keep requirements, assumptions, definitions, and decisions documented in writing.'],
      ],
    },
    insights: {
      eyebrow: 'Practical insights', title: 'Useful ideas for better operational decisions.',
      body: 'LinkedIn is where KMB Data Bridge shares short, practical perspectives on dashboards, data quality, operational analysis, and AI-ready foundations.',
      topics: [
        ['Dashboards with a decision purpose', 'A good dashboard answers a question, identifies an owner, and makes the next action easier to see.'],
        ['Operational metrics with context', 'Metrics become more useful when teams can understand their definition, time period, target, and operational context.'],
        ['Reliable foundations before AI', 'AI becomes more practical when data is documented, trusted, and connected to a meaningful business use case.'],
      ],
    },
    contact: {
      eyebrow: 'Start in writing', title: 'Tell us what you need.',
      body: 'The first exchange stays in writing so the request, assumptions, and next steps are clear from the beginning. A concise message is enough to start.',
      steps: [
        ['Describe the goal', 'What decision, process, or performance question would you like to improve?'],
        ['Add the context', 'Mention the team, current tools, data sources, timing, and any relevant constraints.'],
        ['Receive a written response', 'You will receive a written reply to clarify the request and discuss the appropriate next step.'],
      ],
    }, cta: 'Tell us what you need',
  },
  es: {
    services: {
      eyebrow: 'Servicios de consultoría', title: 'Haz que los datos operativos sean más fáciles de usar.',
      body: 'KMB Data Bridge ayuda a equipos pequeños y medianos a convertir información operativa desconectada en reportes claros, análisis enfocados y próximos pasos documentados.',
      offers: [
        ['Dashboards de BI', 'Diseño de dashboards listos para decidir en operaciones, calidad, producción, ventas o finanzas.', 'Una vista de KPI enfocada, definiciones acordadas y una experiencia de reporte diseñada para su audiencia.'],
        ['Analítica operativa y de calidad', 'Exploración de tendencias, cuellos de botella, defectos, paradas o preguntas de desempeño recurrentes.', 'Una vista analítica estructurada que ayuda a encuadrar preguntas, comparar desempeño y priorizar la investigación.'],
        ['Bases de datos para IA', 'Preparación de datos para que futuras iniciativas de automatización o IA inicien con información confiable.', 'Definiciones claras, documentación práctica y un propósito de negocio antes de añadir complejidad técnica.'],
      ],
      processTitle: 'Un proceso de trabajo claro y por escrito.',
      process: [
        ['1. Encuadrar la solicitud', 'Envías un breve resumen escrito del problema, la decisión, la audiencia y la información disponible.'],
        ['2. Definir el alcance', 'Documentamos la pregunta, entregables, supuestos, necesidades de datos y próximos pasos antes de comenzar.'],
        ['3. Construir y revisar', 'Recibes un entregable práctico y una explicación escrita de cómo usarlo y qué no permite concluir.'],
      ],
    },
    portfolio: {
      eyebrow: 'Trabajo seleccionado de portafolio', title: 'Ejemplos construidos alrededor de decisiones operativas.',
      body: 'El portafolio demuestra cómo KMB Data Bridge aborda reportes, análisis y documentación. Los ejemplos identifican claramente cuándo los datos son sintéticos o públicos.',
      manufacturingTitle: 'KMB Manufacturing — Analítica de calidad y operaciones',
      manufacturingBody: 'Proyecto de portafolio de Power BI de cuatro páginas para un escenario ficticio de manufactura. Utiliza datos sintéticos y reproducibles para demostrar supervisión ejecutiva, control de línea, gestión táctica del desempeño e investigación de calidad.',
      highlights: ['Modelo semántico compartido en esquema estrella', 'Objetivos de KPI y lógica de estado gobernados', 'Enfoque documentado de datos, validación y accesibilidad'],
      note: 'Los ejemplos de portafolio son demostraciones, no resultados de clientes ni afirmaciones de certificación.',
    },
    about: {
      eyebrow: 'Acerca de KMB Data Bridge', title: 'Un puente práctico entre operaciones, datos y acción.',
      body: 'KMB Data Bridge es la práctica independiente de consultoría de Manuel Marín. Su propósito es directo: ayudar a líderes a convertir la información operativa en decisiones comprensibles y trazables.',
      principlesTitle: 'Cómo funciona la práctica.',
      principles: [
        ['Primero el negocio', 'Comenzamos con la decisión operativa y las personas que deben tomarla, no con una herramienta.'],
        ['Claridad antes que complejidad', 'Usamos el enfoque de reportes y análisis más simple que sea útil para la pregunta.'],
        ['Trazabilidad por diseño', 'Mantenemos requisitos, supuestos, definiciones y decisiones documentados por escrito.'],
      ],
    },
    insights: {
      eyebrow: 'Ideas prácticas', title: 'Ideas útiles para mejores decisiones operativas.',
      body: 'LinkedIn es el espacio donde KMB Data Bridge comparte perspectivas breves y prácticas sobre dashboards, calidad de datos, análisis operativo y bases listas para IA.',
      topics: [
        ['Dashboards con propósito de decisión', 'Un buen dashboard responde una pregunta, identifica un responsable y hace más visible la siguiente acción.'],
        ['Métricas operativas con contexto', 'Las métricas son más útiles cuando el equipo entiende su definición, período, objetivo y contexto operativo.'],
        ['Bases confiables antes de IA', 'La IA se vuelve más práctica cuando los datos están documentados, son confiables y se conectan a un caso de uso relevante.'],
      ],
    },
    contact: {
      eyebrow: 'Comienza por escrito', title: 'Cuéntanos qué necesitas.',
      body: 'El primer intercambio se mantiene por escrito para que la solicitud, los supuestos y los próximos pasos sean claros desde el inicio. Un mensaje conciso es suficiente para comenzar.',
      steps: [
        ['Describe el objetivo', '¿Qué decisión, proceso o pregunta de desempeño te gustaría mejorar?'],
        ['Añade el contexto', 'Indica el equipo, herramientas actuales, fuentes de datos, tiempos y restricciones relevantes.'],
        ['Recibe una respuesta escrita', 'Recibirás una respuesta escrita para aclarar la solicitud y conversar sobre el siguiente paso adecuado.'],
      ],
    }, cta: 'Cuéntanos qué necesitas',
  },
} as const

const icons = [BarChart3, Search, Workflow]

function Intro({ eyebrow, title, body, cta }: { eyebrow: string; title: string; body: string; cta?: string }) {
  return <section className="border-b border-royal/10 bg-gradient-to-br from-[#f5fbff] via-pale to-[#d5edfb]"><div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-royal">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-navy/75">{body}</p>{cta && <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-md bg-royal px-6 py-3.5 font-bold text-white shadow-lg shadow-royal/20 transition-colors hover:bg-navy">{cta}<ArrowRight aria-hidden="true" className="size-5" /></Link>}</div></section>
}

function ThreeCards({ items, numbered = false }: { items: readonly (readonly [string, string])[]; numbered?: boolean }) {
  return <section className="bg-white"><div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 md:grid-cols-3 md:px-6 lg:px-8">{items.map(([title, body], index) => { const Icon = icons[index]; return <article key={title} className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm"><span className="flex size-12 items-center justify-center rounded-full bg-pale text-royal">{numbered ? <span className="font-extrabold">0{index + 1}</span> : <Icon className="size-6" />}</span><h2 className="mt-5 text-xl font-bold text-navy">{title}</h2><p className="mt-3 leading-relaxed text-navy/70">{body}</p></article> })}</div></section>
}

export function InnerPage({ kind }: { kind: PageKind }) {
  const { lang } = useLanguage()
  const t = copy[lang]

  if (kind === 'services') return <main><Intro {...t.services} cta={t.cta} /><section className="bg-white"><div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8"><div className="grid gap-5 md:grid-cols-3">{t.services.offers.map(([title, body, deliverable], index) => { const Icon = icons[index]; return <article key={title} className="rounded-xl border border-navy/10 p-6 shadow-sm"><Icon className="size-8 text-royal" /><h2 className="mt-5 text-xl font-bold text-navy">{title}</h2><p className="mt-3 leading-relaxed text-navy/75">{body}</p><p className="mt-5 border-t border-navy/10 pt-4 text-sm leading-relaxed text-navy/65"><span className="font-bold text-navy">{lang === 'en' ? 'Typical outcome: ' : 'Resultado típico: '}</span>{deliverable}</p></article> })}</div></div></section><section className="bg-pale"><div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8"><h2 className="text-3xl font-extrabold tracking-tight text-navy">{t.services.processTitle}</h2></div></section><ThreeCards items={t.services.process} numbered /><Services /><LinkedInStrip /></main>

  if (kind === 'portfolio') return <main><Intro {...t.portfolio} cta={t.cta} /><section className="bg-white"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-6 lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">Power BI portfolio project</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy">{t.portfolio.manufacturingTitle}</h2><p className="mt-4 max-w-3xl leading-relaxed text-navy/75">{t.portfolio.manufacturingBody}</p></div><ul className="grid gap-2">{t.portfolio.highlights.map((item) => <li key={item} className="flex items-start gap-2 text-sm font-medium text-navy"><Check className="mt-0.5 size-4 shrink-0 text-royal" />{item}</li>)}</ul></div></section><Portfolio /><p className="bg-pale px-4 py-5 text-center text-sm text-navy/70">{t.portfolio.note}</p><LinkedInStrip /></main>

  if (kind === 'about') return <main><Intro {...t.about} cta={t.cta} /><section className="bg-pale"><div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8"><h2 className="text-3xl font-extrabold tracking-tight text-navy">{t.about.principlesTitle}</h2></div></section><ThreeCards items={t.about.principles} /><About /><LinkedInStrip /></main>

  if (kind === 'insights') return <main><Intro {...t.insights} cta={t.cta} /><ThreeCards items={t.insights.topics} /><LinkedInStrip /></main>

  return <main><Intro {...t.contact} /><ThreeCards items={t.contact.steps} numbered /><Contact /></main>
}
