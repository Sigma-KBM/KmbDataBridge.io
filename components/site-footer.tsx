'use client'

import { useLanguage } from './language-provider'
import { LanguageToggle } from './language-toggle'

export function SiteFooter() {
  const { t } = useLanguage()
  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#about', label: t.nav.about },
    { href: '#insights', label: t.nav.insights },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="bg-pale text-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-4 text-xs md:flex-row md:justify-between md:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} KMB Data Bridge. {t.footer.rights}
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {links.map((link, i) => (
              <li key={link.href} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-navy/30">|</span>}
                <a href={link.href} className="hover:text-royal">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageToggle tone="light" className="text-xs" />
      </div>
    </footer>
  )
}
