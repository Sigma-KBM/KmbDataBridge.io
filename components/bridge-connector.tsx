import { cn } from '@/lib/utils'

const LEFT_TOWER = 400
const RIGHT_TOWER = 800
const TOWER_TOP = 22
const DECK = 132
const BOTTOM = 200
const NODES = [200, 600, 1000] as const

function centerCableY(x: number) {
  const t = (x - LEFT_TOWER) / (RIGHT_TOWER - LEFT_TOWER)
  return TOWER_TOP * (1 - t) ** 2 + 2 * 176 * t * (1 - t) + TOWER_TOP * t ** 2
}

const hangers = Array.from({ length: 9 }, (_, i) => 440 + i * 40)
const cablePath = `M40 ${DECK} Q230 110 ${LEFT_TOWER} ${TOWER_TOP} Q600 176 ${RIGHT_TOWER} ${TOWER_TOP} Q970 110 1160 ${DECK}`

const satellites: Record<number, [number, number][]> = {
  200: [
    [150, 78],
    [248, 70],
  ],
  600: [
    [548, 60],
    [652, 60],
  ],
  1000: [
    [952, 70],
    [1050, 78],
  ],
}

export function BridgeConnector({
  from,
  variant = 'data',
  className,
}: {
  from: 'md' | 'lg'
  variant?: 'data' | 'knowledge'
  className?: string
}) {
  return (
    <div aria-hidden="true" className={cn(from === 'md' ? 'hidden md:block' : 'hidden lg:block', className)}>
      <svg viewBox={`0 0 1200 ${BOTTOM}`} focusable="false" className="pointer-events-none block w-full select-none text-navy opacity-[0.45]">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d={cablePath} strokeWidth={3} />
          <path d={`M${LEFT_TOWER} ${TOWER_TOP - 8} V${DECK + 10} M${RIGHT_TOWER} ${TOWER_TOP - 8} V${DECK + 10}`} strokeWidth={7} />
          {hangers.map((x) => (
            <path key={x} d={`M${x} ${centerCableY(x)} V${DECK}`} strokeWidth={1.6} />
          ))}
          <path d={`M20 ${DECK} H1180`} strokeWidth={5} />
        </g>

        <g fill="none" stroke="var(--color-brand-cyan)" strokeWidth={3} strokeLinecap="round" strokeDasharray="2 10">
          {NODES.map((x) => (
            <path key={x} d={`M${x} ${DECK + 16} V${BOTTOM - 2}`} />
          ))}
        </g>

        {variant === 'knowledge' && (
          <g stroke="currentColor" strokeWidth={1.6} fill="var(--color-brand-cyan)">
            {NODES.flatMap((x) =>
              satellites[x].map(([sx, sy]) => (
                <g key={`${sx}-${sy}`}>
                  <path d={`M${x} ${DECK} L${sx} ${sy}`} fill="none" />
                  <circle cx={sx} cy={sy} r={7} stroke="none" />
                </g>
              )),
            )}
          </g>
        )}

        <circle cx={LEFT_TOWER} cy={TOWER_TOP - 8} r={7} fill="var(--color-brand-cyan)" />
        <circle cx={RIGHT_TOWER} cy={TOWER_TOP - 8} r={7} fill="var(--color-brand-cyan)" />
        {NODES.map((x) => (
          <circle
            key={x}
            cx={x}
            cy={DECK}
            r={13}
            fill={x === 600 ? 'var(--color-brand-amber)' : 'var(--color-brand-cyan)'}
            stroke="currentColor"
            strokeWidth={3}
          />
        ))}
      </svg>
    </div>
  )
}

export function MobileConnector({ from, gap = 'h-8' }: { from: 'md' | 'lg'; gap?: 'h-6' | 'h-8' }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute left-1/2 top-full flex -translate-x-1/2 flex-col items-center justify-center gap-1 opacity-60',
        gap,
        from === 'md' ? 'md:hidden' : 'lg:hidden',
      )}
    >
      <span className="w-0.5 flex-1 rounded-full bg-navy/60" />
      <span className="size-2.5 rounded-full border-2 border-navy/60 bg-brand-cyan" />
      <span className="w-0.5 flex-1 rounded-full bg-navy/60" />
    </span>
  )
}
