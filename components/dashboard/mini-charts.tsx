import { cn } from '@/lib/utils'

export function MiniBars({
  values,
  className,
  barClassName = 'bg-gradient-to-t from-royal to-sky-400',
}: {
  values: number[]
  className?: string
  barClassName?: string
}) {
  return (
    <div aria-hidden="true" className={cn('flex items-end gap-[3px]', className)}>
      {values.map((v, i) => (
        <span key={i} className={cn('flex-1 rounded-t-[2px]', barClassName)} style={{ height: `${v}%` }} />
      ))}
    </div>
  )
}

export function Sparkline({
  points,
  className,
  stroke = '#39D7D7',
  area = false,
}: {
  points: number[]
  className?: string
  stroke?: string
  area?: boolean
}) {
  const w = 100
  const h = 40
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w
    const y = h - 4 - ((p - min) / range) * (h - 8)
    return [x, y] as const
  })
  const line = coords.map(([x, y]) => `${x},${y}`).join(' ')
  const gradientId = `spark-${points.join('-')}`

  return (
    <svg aria-hidden="true" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={cn('overflow-visible', className)}>
      {area && (
        <>
          <defs>
            <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
              <stop offset="100%" stopColor={stroke} stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={`0,${h} ${line} ${w},${h}`} fill={`url(#${gradientId})`} />
        </>
      )}
      <polyline points={line} fill="none" stroke={stroke} strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
      {coords.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill={stroke} />
      ))}
    </svg>
  )
}

export function Gauge({ value, label, className }: { value: number; label: string; className?: string }) {
  const r = 42
  const circumference = 2 * Math.PI * r
  const sweep = 0.75
  const track = circumference * sweep
  const filled = track * (value / 100)

  return (
    <div className={cn('relative aspect-square', className)}>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="size-full rotate-[135deg]">
        <defs>
          <linearGradient id="gauge-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#39D7D7" />
            <stop offset="75%" stopColor="#39D7D7" />
            <stop offset="100%" stopColor="#FFC34D" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${track} ${circumference}`} />
        <circle cx="50" cy="50" r={r} fill="none" stroke="url(#gauge-gradient)" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${filled} ${circumference}`} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="text-lg font-bold leading-none tabular-nums sm:text-xl">{value}%</span>
        <span className="mt-1 text-[10px] font-semibold tracking-wide text-white/80">{label}</span>
      </div>
    </div>
  )
}
