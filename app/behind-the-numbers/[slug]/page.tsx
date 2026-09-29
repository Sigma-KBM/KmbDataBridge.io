import type { Metadata } from 'next'
import { ArticleComingSoon } from '@/components/blog/article-coming-soon'
import { LanguageProvider } from '@/components/language-provider'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { articles } from '@/lib/blog'

export const dynamicParams = false

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  return {
    title: `${article?.title.en ?? 'Coming soon'} | Behind the Numbers`,
    description: article?.summary.en,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <LanguageProvider>
      <SiteHeader />
      <ArticleComingSoon slug={slug} />
      <SiteFooter />
    </LanguageProvider>
  )
}
