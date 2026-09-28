import { LanguageProvider } from '@/components/language-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { About } from '@/components/about'
import { LinkedInStrip } from '@/components/linkedin-strip'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <LinkedInStrip />
        <Contact />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
