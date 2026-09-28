'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Send } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/i18n'
import { useLanguage } from './language-provider'
import { assetPath } from '@/lib/utils'

const fieldClass =
  'mt-1.5 w-full rounded-md border border-white/15 bg-white/[0.06] px-3.5 py-2.5 text-white placeholder:text-white/40 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/40'

export function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const [emailError, setEmailError] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const company = String(data.get('company') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const improve = String(data.get('improve') ?? '').trim()

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    setEmailError(!validEmail)
    if (!validEmail) return

    const subject = `${c.subject}${company ? ` — ${company}` : ''}`
    const body = [`${c.name}: ${name}`, `${c.company}: ${company}`, `${c.email}: ${email}`, '', `${c.improve}`, improve].join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-6">
            <Image src={assetPath('/images/kmb-logo.png')} alt="" width={96} height={96} className="size-20 shrink-0 rounded-full bg-white md:size-24" />
            <span aria-hidden="true" className="hidden h-16 w-px bg-white/20 sm:block" />
            <h2 id="contact-title" className="text-balance text-2xl font-bold md:text-3xl">
              {c.title}
            </h2>
          </div>
          <p className="mt-6 max-w-lg leading-relaxed text-white/80">{c.body}</p>
          <p aria-hidden="true" className="mt-auto hidden pt-10 text-xs font-medium uppercase leading-relaxed tracking-[0.25em] text-white/70 lg:block">
            {c.side.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
            <span className="mt-3 block h-0.5 w-12 bg-brand-cyan" />
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate={false} className="grid gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-2 sm:p-6">
          <div>
            <label htmlFor="name" className="text-sm font-semibold">
              {c.name}
            </label>
            <input id="name" name="name" required autoComplete="name" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="company" className="text-sm font-semibold">
              {c.company}
            </label>
            <input id="company" name="company" required autoComplete="organization" className={fieldClass} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="text-sm font-semibold">
              {c.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              aria-invalid={emailError}
              aria-describedby={emailError ? 'email-error' : undefined}
              onChange={() => emailError && setEmailError(false)}
              className={fieldClass}
            />
            {emailError && (
              <p id="email-error" className="mt-1.5 text-sm text-brand-amber">
                {c.invalidEmail}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="improve" className="text-sm font-semibold">
              {c.improve}
            </label>
            <textarea id="improve" name="improve" required rows={4} placeholder={c.improvePlaceholder} className={`${fieldClass} resize-y`} />
          </div>
          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-cyan px-6 py-3 font-bold text-navy transition-colors hover:bg-white"
            >
              {c.submit}
              <Send aria-hidden="true" className="size-4" />
            </button>
            <p className="text-xs text-white/60">
              {c.helper} <span className="font-medium text-white/85">{CONTACT_EMAIL}</span>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
