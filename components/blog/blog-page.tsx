'use client'

import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'
import { articles, BLOG_NAME, blogCopy } from '@/lib/blog'
import { useLanguage } from '../language-provider'
import { BridgeArt } from '../bridge-art'
import { ArticleCard, FeaturedArticle } from './article-cards'

const container = 'mx-auto max-w-7xl px-4 md:px-6 lg:px-8'

export function BlogPage() {
  const { lang } = useLanguage()
  const b = blogCopy[lang]
  const [featured, ...rest] = articles

  return (
    <main>
      <section className="border-b border-royal/10 bg-gradient-to-br from-[#f5fbff] via-pale to-[#d5edfb]">
        <div className={`${container} grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.2fr_1fr] lg:py-24`}>
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-navy/60">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-royal">
                    {b.home}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-semibold text-navy">
                  {BLOG_NAME}
                </li>
              </ol>
            </nav>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-royal">
              <span aria-hidden="true" className="h-0.5 w-8 bg-royal" />
              {b.eyebrow}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {BLOG_NAME}
            </h1>
            <p className="mt-5 text-pretty text-xl font-semibold text-royal md:text-2xl">{b.subtitle}</p>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-navy/75">{b.body}</p>
          </div>
          <BridgeArt variant="arch" className="mx-auto w-full max-w-sm text-navy opacity-40 lg:max-w-lg" />
        </div>
      </section>

      <section aria-label={b.featured} className="bg-white">
        <div className={`${container} py-16 md:py-20`}>
          <FeaturedArticle article={featured} lang={lang} b={b} />
        </div>
      </section>

      <section aria-labelledby="articles-title" className="bg-pale">
        <div className={`${container} py-16 md:py-20`}>
          <h2 id="articles-title" className="text-3xl font-extrabold tracking-tight text-navy">
            {b.moreTitle}
          </h2>
          <p className="mt-4 flex max-w-3xl items-start gap-3 text-sm font-medium text-navy/75">
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-royal" />
            {b.draftNote}
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} lang={lang} b={b} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className={`${container} flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between`}>
          <div>
            <h2 className="text-balance text-2xl font-bold md:text-3xl">{b.ctaTitle}</h2>
            <p className="mt-2 max-w-2xl text-white/75">{b.ctaBody}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-md bg-brand-cyan px-6 py-3.5 font-bold text-navy shadow-lg shadow-brand-cyan/20 transition-colors hover:bg-white"
          >
            {b.cta}
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
