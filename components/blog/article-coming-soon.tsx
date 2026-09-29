'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { LINKEDIN_URL } from '@/lib/i18n'
import { articles, BLOG_NAME, BLOG_PATH, blogCopy } from '@/lib/blog'
import { useLanguage } from '../language-provider'
import { BridgeArt } from '../bridge-art'

export function ArticleComingSoon({ slug }: { slug: string }) {
  const { lang } = useLanguage()
  const b = blogCopy[lang]
  const article = articles.find((a) => a.slug === slug) ?? articles[0]

  return (
    <main className="bg-gradient-to-br from-[#f5fbff] via-pale to-[#d5edfb]">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-14 md:px-6 md:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-navy/60">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-royal">
                {b.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={BLOG_PATH} className="hover:text-royal">
                {BLOG_NAME}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-navy">
              {b.comingSoon}
            </li>
          </ol>
        </nav>

        <article className="flex flex-col gap-5 rounded-3xl border border-navy/10 bg-white p-7 shadow-xl shadow-navy/10 md:p-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="rounded-full bg-pale px-3 py-1 text-royal">{article.category[lang]}</span>
            <span className="rounded-full bg-brand-amber/20 px-3 py-1 text-navy">{b.comingSoon}</span>
          </div>
          <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-4xl">
            {article.title[lang]}
          </h1>
          <p className="text-lg leading-relaxed text-navy/75">{article.summary[lang]}</p>
          <p className="inline-flex items-center gap-2 text-sm text-navy/60">
            <Clock aria-hidden="true" className="size-4" />
            {b.readingTime}
          </p>
          <BridgeArt variant="arch" className="my-2 w-full text-navy opacity-35" />
          <p className="leading-relaxed text-navy/80">{b.comingSoonBody}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={BLOG_PATH}
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-royal px-5 py-3 font-bold text-royal transition-colors hover:bg-royal hover:text-white"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              {b.back}
            </Link>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-royal px-5 py-3 font-bold text-white transition-colors hover:bg-navy"
            >
              {b.followLinkedIn}
              <ArrowRight aria-hidden="true" className="size-4" />
              <span className="sr-only">{b.newTab}</span>
            </a>
          </div>
        </article>
      </div>
    </main>
  )
}
