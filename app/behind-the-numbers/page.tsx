import type { Metadata } from 'next'
import { BlogPage } from '@/components/blog/blog-page'
import { LanguageProvider } from '@/components/language-provider'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Behind the Numbers | KMB Data Bridge',
  description: 'Practical notes on data, operations, and better decisions from KMB Data Bridge.',
}

export default function BehindTheNumbersPage() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <BlogPage />
      <SiteFooter />
    </LanguageProvider>
  )
}
