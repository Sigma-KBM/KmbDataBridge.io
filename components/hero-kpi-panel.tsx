'use client'

import { Factory, Leaf, Settings, TrendingDown, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from './language-provider'
import { MiniBars, Sparkline } from './dashboard/mini-charts'

type Kpi = {
  icon: LucideIcon
  title: string
  value: string
  caption: string
  delta: string
  deltaLabel: string
  trend: 'up' | 'down'
  chart: React.ReactNode
}

export function HeroKpiPanel() {
  const { t } = useLanguage()

  const kpis: Kpi[] = [
    {
      icon: Factory,
      title: t.kpi.manufacturing,
      value: '92.4%',
      caption: t.kpi.oee,
      delta: '+6.3%',
      deltaLabel: t.kpi.lastMonth,
      trend: 'up',
      chart: <MiniBars values={[30, 42, 38, 55, 48, 72, 60, 52, 68, 80]} className="h-16" />,
    },
    {
      icon: Settings,
      title: t.kpi.quality,
      value: '1.8%',
      caption: t.kpi.defect,
      delta: '-42%',
      deltaLabel: t.kpi.lastQuarter,
      trend: 'down',
      chart: <Sparkline points={[80, 66, 70, 52, 60, 40, 34]} className="h-16 w-full" />,
    },
    {
      icon: Leaf,
      title: t.kpi.energy,
      value: '-18.7%',
      caption: t.kpi.usage,
      delta: '-18.7%',
      deltaLabel: t.kpi.lastYear,
      trend: 'down',
      chart: (
        <MiniBars
          values={[80, 64, 72, 50, 55, 44, 62, 48, 70, 82]}
          className="h-16"
          barClassName="bg-gradient-to-t from-cyan-500 to-brand-cyan"
        />
      ),
    },
  ]

  return (
    <figure
      aria-label={t.kpi.label}
      className="relative rounded-xl border-4 border-[#0d3565] bg-navy p-3 shadow-2xl shadow-navy/40 [transform:perspective(1600px)_rotateY(-6deg)] sm:p-4"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {kpis.map(({ icon: Icon, ...kpi }) => (
          <div key={kpi.title} className="flex flex-col rounded-lg border border-white/10 bg-gradient-to-b from-[#0e3564] to-[#0a2b52] p-4 text-white">
            <div className="flex items-center gap-2">
              <Icon aria-hidden="true" className="size-5 text-sky-400" />
              <span className="text-[13px] font-semibold">{kpi.title}</span>
            </div>
            <p className="mt-4 text-3xl font-bold tabular-nums tracking-tight">{kpi.value}</p>
            <p className="mt-1 text-[11px] text-white/75">{kpi.caption}</p>
            <p className="mt-2 flex items-center gap-1.5 text-[11px]">
              {kpi.trend === 'up' ? (
                <TrendingUp aria-hidden="true" className="size-3.5 text-emerald-400" />
              ) : (
                <TrendingDown aria-hidden="true" className="size-3.5 text-emerald-400" />
              )}
              <span className="font-semibold text-emerald-400">{kpi.delta}</span>
              <span className="text-white/70">{kpi.deltaLabel}</span>
            </p>
            <div className="mt-4 border-t border-white/10 pt-3">{kpi.chart}</div>
          </div>
        ))}
      </div>
    </figure>
  )
}
