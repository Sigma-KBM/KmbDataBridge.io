import type { Lang } from './i18n'

export const BLOG_NAME = 'Behind the Numbers'
export const BLOG_PATH = '/behind-the-numbers'

type Localized = Record<Lang, string>

export type Article = {
  slug: string
  category: Localized
  title: Localized
  summary: Localized
}

export const articles: Article[] = [
  {
    slug: 'useful-operations-dashboard',
    category: { en: 'Dashboards', es: 'Dashboards' },
    title: {
      en: 'What makes a dashboard useful for operations?',
      es: '¿Qué hace útil un dashboard para operaciones?',
    },
    summary: {
      en: 'A look at purpose, audience, and the questions a daily operations view should answer before any chart is chosen.',
      es: 'Una mirada al propósito, la audiencia y las preguntas que una vista operativa diaria debe responder antes de elegir cualquier gráfico.',
    },
  },
  {
    slug: 'kpi-definitions-before-reports',
    category: { en: 'KPIs', es: 'KPI' },
    title: {
      en: 'Why KPI definitions matter before building a report',
      es: 'Por qué las definiciones de KPI importan antes de construir un reporte',
    },
    summary: {
      en: 'How agreeing on formulas, time periods, and targets early prevents conflicting numbers later.',
      es: 'Cómo acordar fórmulas, períodos y objetivos desde el inicio evita cifras contradictorias más adelante.',
    },
  },
  {
    slug: 'spreadsheets-to-traceable-reporting',
    category: { en: 'Reporting process', es: 'Proceso de reportes' },
    title: {
      en: 'From spreadsheets to a traceable reporting process',
      es: 'De hojas de cálculo a un proceso de reportes trazable',
    },
    summary: {
      en: 'Practical steps for moving recurring spreadsheet reports toward a documented, repeatable process.',
      es: 'Pasos prácticos para llevar reportes recurrentes en hojas de cálculo hacia un proceso documentado y repetible.',
    },
  },
  {
    slug: 'data-quality-checks',
    category: { en: 'Data quality', es: 'Calidad de datos' },
    title: {
      en: 'Data quality: practical checks before analysis',
      es: 'Calidad de datos: verificaciones prácticas antes del análisis',
    },
    summary: {
      en: 'Simple checks for completeness, duplicates, and consistency that make analysis easier to trust.',
      es: 'Verificaciones simples de completitud, duplicados y consistencia que hacen el análisis más confiable.',
    },
  },
  {
    slug: 'operational-data-for-ai',
    category: { en: 'AI foundations', es: 'Bases para IA' },
    title: {
      en: 'Preparing operational data for AI without unnecessary complexity',
      es: 'Preparar datos operativos para IA sin complejidad innecesaria',
    },
    summary: {
      en: 'Why documentation, clear definitions, and a real use case come before any AI tooling decision.',
      es: 'Por qué la documentación, las definiciones claras y un caso de uso real van antes de cualquier decisión sobre herramientas de IA.',
    },
  },
  {
    slug: 'written-requirements-analytics',
    category: { en: 'Requirements', es: 'Requisitos' },
    title: {
      en: 'How written requirements improve analytics projects',
      es: 'Cómo los requisitos escritos mejoran los proyectos de analítica',
    },
    summary: {
      en: 'Writing down the question, assumptions, and scope keeps analytics work focused and reviewable.',
      es: 'Escribir la pregunta, los supuestos y el alcance mantiene el trabajo analítico enfocado y revisable.',
    },
  },
]

export const blogCopy = {
  en: {
    home: 'Home',
    eyebrow: 'KMB Data Bridge Blog',
    subtitle: 'Practical notes on data, operations, and better decisions.',
    body: 'Short, written perspectives on business intelligence, data analytics, quality, productivity, and practical AI foundations.',
    featured: 'Featured article',
    moreTitle: 'Planned articles',
    draft: 'Sample draft',
    draftNote: 'These are planned topics. Full articles will be published here as they are completed.',
    readingTime: 'Reading time: to be confirmed',
    read: 'Read article',
    comingSoon: 'Coming soon',
    comingSoonBody: 'This article is being written. Check back soon, or follow on LinkedIn for short updates in the meantime.',
    back: 'Back to Behind the Numbers',
    followLinkedIn: 'Follow on LinkedIn',
    explore: 'Explore Behind the Numbers',
    ctaTitle: 'Have a question you would like covered?',
    ctaBody: 'Send a short written note about the reporting or data challenge you are working through.',
    cta: 'Tell us what you need',
    newTab: '(opens in a new tab)',
  },
  es: {
    home: 'Inicio',
    eyebrow: 'Blog de KMB Data Bridge',
    subtitle: 'Notas prácticas sobre datos, operaciones y mejores decisiones.',
    body: 'Perspectivas breves y escritas sobre inteligencia de negocio, análisis de datos, calidad, productividad y bases prácticas para IA.',
    featured: 'Artículo destacado',
    moreTitle: 'Artículos planificados',
    draft: 'Borrador de ejemplo',
    draftNote: 'Estos son temas planificados. Los artículos completos se publicarán aquí a medida que estén listos.',
    readingTime: 'Tiempo de lectura: por confirmar',
    read: 'Leer artículo',
    comingSoon: 'Próximamente',
    comingSoonBody: 'Este artículo está en preparación. Vuelve pronto o sigue las actualizaciones breves en LinkedIn mientras tanto.',
    back: 'Volver a Behind the Numbers',
    followLinkedIn: 'Seguir en LinkedIn',
    explore: 'Explorar Behind the Numbers',
    ctaTitle: '¿Tienes una pregunta que te gustaría ver tratada?',
    ctaBody: 'Envía una nota breve por escrito sobre el reto de reportes o datos en el que estás trabajando.',
    cta: 'Cuéntanos qué necesitas',
    newTab: '(se abre en una pestaña nueva)',
  },
} as const

export type BlogCopy = (typeof blogCopy)[Lang]

export function articleHref(slug: string) {
  return `${BLOG_PATH}/${slug}`
}
