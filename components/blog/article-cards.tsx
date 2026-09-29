import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import type { Lang } from '@/lib/i18n'
import { articleHref, type Article, type BlogCopy } from '@/lib/blog'
import { BridgeArt } from '../bridge-art'

function Badges({ category, b, dark = false }: { category: string; b: BlogCopy; dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
      <span className={dark ? 'rounded-full bg-brand-cyan/15 px-3 py-1 text-brand-cyan' : 'rounded-full bg-pale px-3 py-1 text-royal'}>
        {category}
      </span>
      <span
        className={
          dark
            ? 'rounded-full border border-white/25 px-3 py-1 text-white/80'
            : 'rounded-full border border-navy/15 px-3 py-1 text-navy/70'
        }
      >
        {b.draft}
      </span>
    </div>
  )
}

function ReadLink({ article, lang, b, dark = false }: { article: Article; lang: Lang; b: BlogCopy; dark?: boolean }) {
  return (
    <Link
      href={articleHref(article.slug)}
      className={
        dark
          ? 'inline-flex items-center gap-2 rounded-md bg-brand-cyan px-5 py-3 font-bold text-navy transition-colors hover:bg-white'
          : 'inline-flex items-center gap-2 rounded-md border-2 border-royal px-4 py-2 text-sm font-bold text-royal transition-colors hover:bg-royal hover:text-white'
      }
    >
      {b.read}
      <span className="sr-only">: {article.title[lang]}</span>
      <ArrowRight aria-hidden="true" className="size-4" />
    </Link>
  )
}

function Meta({ b, dark = false }: { b: BlogCopy; dark?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm ${dark ? 'text-white/70' : 'text-navy/60'}`}>
      <span className="inline-flex items-center gap-1.5">
        <Clock aria-hidden="true" className="size-4" />
        {b.readingTime}
      </span>
      <span className={`font-semibold ${dark ? 'text-brand-amber' : 'text-royal'}`}>{b.comingSoon}</span>
    </div>
  )
}

export function FeaturedArticle({ article, lang, b, headingLevel = 'h2' }: { article: Article; lang: Lang; b: BlogCopy; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel
  return (
    <article className="grid overflow-hidden rounded-3xl bg-navy text-white shadow-2xl shadow-navy/20 lg:grid-cols-[1.3fr_1fr]">
      <div className="flex flex-col gap-5 p-7 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan">{b.featured}</p>
        <Badges category={article.category[lang]} b={b} dark />
        <Heading className="text-balance text-2xl font-extrabold leading-tight md:text-3xl">{article.title[lang]}</Heading>
        <p className="max-w-xl leading-relaxed text-white/80">{article.summary[lang]}</p>
        <Meta b={b} dark />
        <div className="pt-1">
          <ReadLink article={article} lang={lang} b={b} dark />
        </div>
      </div>
      <div className="flex items-center justify-center border-t border-white/10 bg-gradient-to-br from-[#0d3566] to-navy p-8 lg:border-l lg:border-t-0">
        <BridgeArt variant="arch" className="w-full max-w-md text-white/50" />
      </div>
    </article>
  )
}

export function ArticleCard({ article, lang, b }: { article: Article; lang: Lang; b: BlogCopy }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-royal/10">
      <Badges category={article.category[lang]} b={b} />
      <h3 className="text-pretty text-lg font-bold leading-snug text-navy">{article.title[lang]}</h3>
      <p className="leading-relaxed text-navy/75">{article.summary[lang]}</p>
      <div className="mt-auto flex flex-col gap-4 pt-2">
        <Meta b={b} />
        <div>
          <ReadLink article={article} lang={lang} b={b} />
        </div>
      </div>
    </article>
  )
}
