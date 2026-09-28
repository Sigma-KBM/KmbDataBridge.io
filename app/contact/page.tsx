import { InnerPage } from '@/components/inner-page'
import { LanguageProvider } from '@/components/language-provider'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function ContactPage() {
  return <LanguageProvider><SiteHeader /><InnerPage kind="contact" /><SiteFooter /></LanguageProvider>
}
