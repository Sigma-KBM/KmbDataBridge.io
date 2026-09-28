'use client'

import { cn } from '@/lib/utils'
import { useLanguage } from './language-provider'
import type { Lang } from '@/lib/i18n'

export function LanguageToggle({ className, tone = 'dark' }: { className?: string; tone?: 'dark' | 'light' }) {
  const { lang, setLang, t } = useLanguage()
  const options: Lang[] = ['en', 'es']

  return (
    <div role="group" aria-label={t.nav.language} className={cn('flex items-center gap-2 text-sm font-semibold', className)}>
      {options.map((option, i) => (
        <span key={option} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden="true" className={tone === 'dark' ? 'text-white/40' : 'text-navy/30'}>
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={lang === option}
            className={cn(
              'rounded px-0.5 uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan',
              tone === 'dark'
                ? lang === option
                  ? 'text-white underline decoration-brand-cyan decoration-2 underline-offset-4'
                  : 'text-white/60 hover:text-white'
                : lang === option
                  ? 'text-navy underline decoration-royal decoration-2 underline-offset-4'
                  : 'text-navy/60 hover:text-navy',
            )}
          >
            {option}
          </button>
        </span>
      ))}
    </div>
  )
}
