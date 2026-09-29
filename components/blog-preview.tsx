'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { articles, BLOG_NAME, BLOG_PATH, blogCopy } from '@/lib/blog'
import { useLanguage } from './language-provider'
import { ArticleCard, FeaturedArticle } from './blog/article-cards'

export function BlogPreview() {
  const { lang } = useLanguage()
  const b = blogCopy[lang]
  const [featured, second, third] = articles

  return (
    <section id="behind-the-numbers" aria-labelledby="blog-preview-title" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-royal">{b.eyebrow}</p>
            <h2 id="blog-preview-title" className="mt-2 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              {BLOG_NAME}
            </h2>
            <p className="mt-2 text-pretty text-navy/70">{b.subtitle}</p>
          </div>
          <Link
            href={BLOG_PATH}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-royal px-5 py-3 font-bold text-white transition-colors hover:bg-navy md:self-auto"
          >
            {b.explore}
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <FeaturedArticle article={featured} lang={lang} b={b} headingLevel="h3" />
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {[second, third].map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} lang={lang} b={b} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
