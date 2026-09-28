'use client'

import Image from 'next/image'
import { Factory, Leaf, TrendingDown, TrendingUp } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n'
import { Gauge, MiniBars, Sparkline } from './dashboard/mini-charts'
import { assetPath } from '@/lib/utils'

const frame = 'relative flex h-44 overflow-hidden rounded-lg bg-navy shadow-lg shadow-navy/25 ring-1 ring-white/10 sm:h-48 lg:h-44 xl:h-48'
const imageSizes = '(min-width: 1024px) 20vw, 60vw'

export function ManufacturingFrame({ t }: { t: Dictionary['portfolio']['manufacturing'] }) {
  return (
    <div className={frame}>
      <div className="relative w-[42%] shrink-0">
        <Image src={assetPath('/images/portfolio-manufacturing.png')} alt="" fill sizes={imageSizes} className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy/30 to-navy" />
        <p className="absolute left-3 top-3 flex items-center gap-1.5 text-[11px] font-semibold text-white drop-shadow">
          <Factory aria-hidden="true" className="size-3.5" />
          {t.frame}
        </p>
        <MiniBars values={[45, 70, 55, 85, 60, 90]} className="absolute bottom-4 right-3 h-14 w-16" />
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-2 p-3">
        <div className="flex h-full flex-1 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] p-1.5 sm:flex-none">
          <Gauge value={92.4} label={t.oee} className="size-20 shrink-0 xl:size-24" />
        </div>
        <ul className="hidden h-full min-w-0 flex-1 flex-col justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2.5 text-[11px] text-white/85 sm:flex">
          {t.list.map((item, i) => (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden="true" className={`size-1.5 shrink-0 rounded-full ${i === 0 ? 'bg-brand-cyan' : 'bg-white/30'}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function EnergyFrame({ t }: { t: Dictionary['portfolio']['energy'] }) {
  return (
    <div className={frame}>
      <div className="relative w-[55%] shrink-0 sm:w-[60%]">
        <Image src={assetPath('/images/portfolio-energy.png')} alt="" fill sizes={imageSizes} className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy/80" />
        <p className="absolute left-3 top-3 text-[11px] font-semibold text-white drop-shadow">{t.frame}</p>
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-3">
        <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] p-2">
          <Leaf aria-hidden="true" className="size-6 shrink-0 fill-emerald-400/30 text-emerald-400" />
          <div className="text-white">
            <p className="flex items-center gap-1 text-lg font-bold leading-none tabular-nums">
              -18.7%
              <TrendingDown aria-hidden="true" className="size-3.5 text-emerald-400" />
            </p>
            <p className="mt-1 text-[10px] text-white/75">{t.usage}</p>
          </div>
        </div>
        <MiniBars
          values={[80, 55, 62, 48, 58, 44, 70, 86]}
          className="h-16 rounded-md border border-white/10 bg-white/[0.03] p-2"
          barClassName="bg-gradient-to-t from-cyan-500 to-brand-cyan"
        />
      </div>
    </div>
  )
}

export function QualityFrame({ t }: { t: Dictionary['portfolio']['quality'] }) {
  const rows = [
    { label: t.rows[0], value: '1.8%', trend: 'down' as const },
    { label: t.rows[1], value: '0.9%', trend: 'down' as const },
    { label: t.rows[2], value: '98.1%', trend: 'up' as const },
  ]

  return (
    <div className={frame}>
      <div className="relative w-[48%] shrink-0">
        <Image src={assetPath('/images/portfolio-quality.png')} alt="" fill sizes={imageSizes} className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5 p-3 text-white">
        <p className="text-[11px] font-semibold">{t.frame}</p>
        <Sparkline points={[40, 52, 44, 58, 50, 62, 55, 66, 52, 74]} className="h-10 w-full" stroke="#38bdf8" area />
        <dl className="mt-auto divide-y divide-white/10 text-[10px] sm:text-[11px]">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center gap-2 py-1">
              <dt className="flex-1 truncate text-white/80">{row.label}</dt>
              <dd className="flex items-center gap-1.5 font-semibold tabular-nums">
                {row.value}
                {row.trend === 'up' ? (
                  <TrendingUp aria-hidden="true" className="size-3 text-emerald-400" />
                ) : (
                  <TrendingDown aria-hidden="true" className="size-3 text-emerald-400" />
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
