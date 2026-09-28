'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from './language-provider'
import { LanguageToggle } from './language-toggle'
import { assetPath } from '@/lib/utils'

export function SiteHeader() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/services', label: t.nav.services },
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/about', label: t.nav.about },
    { href: '/insights', label: t.nav.insights },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg shadow-navy/20">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 md:h-[72px] md:px-6 lg:px-8">
        <Link href="/" aria-label={t.nav.home} className="relative z-10 shrink-0 self-start">
          <Image
            src={assetPath('/images/kmb-logo.png')}
            alt="KMB Data Bridge"
            width={112}
            height={112}
            priority
            className="mt-1 size-[72px] rounded-full bg-white p-0.5 shadow-md md:size-[100px]"
          />
        </Link>

        <nav aria-label="Primary" className="ml-6 hidden lg:ml-14 lg:block">
          <ul className="flex items-center gap-10 text-[17px]">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/90 transition-colors hover:text-brand-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4 md:gap-6">
          <LanguageToggle className="hidden sm:flex" />
          <Link
            href="/contact"
            className="hidden rounded-md bg-brand-cyan px-5 py-3 text-[15px] font-bold text-navy shadow-md shadow-brand-cyan/20 transition-colors hover:bg-white md:inline-flex"
          >
            {t.nav.cta}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="inline-flex size-10 items-center justify-center rounded-md text-white hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-navy px-4 pb-6 pt-8 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-lg text-white/90 hover:bg-white/5 hover:text-brand-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between gap-4 px-3">
            <LanguageToggle />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-brand-cyan px-4 py-2.5 text-sm font-bold text-navy md:hidden"
            >
              {t.nav.cta}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
