import { cn } from '@/lib/utils'

export type BridgeVariant = 'blueprint' | 'dataflow' | 'lineart' | 'nodes' | 'calm'

const LEFT_TOWER = 380
const RIGHT_TOWER = 820
const TOWER_TOP = 40
const DECK = 220

function centerCableY(x: number) {
  const t = (x - LEFT_TOWER) / (RIGHT_TOWER - LEFT_TOWER)
  return TOWER_TOP + 440 * t - 440 * t * t
}

const hangers = Array.from({ length: 10 }, (_, i) => 420 + i * 40)

const cablePath = `M40 212 Q220 190 ${LEFT_TOWER} ${TOWER_TOP} Q600 260 ${RIGHT_TOWER} ${TOWER_TOP} Q980 190 1160 212`

function Structure({ withHangers = true, strokeWidth = 3 }: { withHangers?: boolean; strokeWidth?: number }) {
  return (
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
      <path d={cablePath} />
      <path d={`M${LEFT_TOWER} ${TOWER_TOP - 10} V${DECK + 12}`} strokeWidth={strokeWidth * 2.4} />
      <path d={`M${RIGHT_TOWER} ${TOWER_TOP - 10} V${DECK + 12}`} strokeWidth={strokeWidth * 2.4} />
      {withHangers &&
        hangers.map((x) => <path key={x} d={`M${x} ${centerCableY(x)} V${DECK}`} strokeWidth={strokeWidth * 0.6} />)}
      <path d={`M20 ${DECK} H1180`} strokeWidth={strokeWidth * 1.6} />
      <path d="M430 262 H770 M500 280 H700 M560 296 H640" strokeWidth={strokeWidth * 0.9} opacity={0.7} />
    </g>
  )
}

export function BridgeArt({ variant, className }: { variant: BridgeVariant; className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 310"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      className={cn('pointer-events-none select-none', className)}
    >
      {variant === 'blueprint' && (
        <>
          <Structure strokeWidth={2} />
          <g fill="none" stroke="currentColor" strokeWidth={1.2} strokeDasharray="6 6" opacity={0.8}>
            <path d={`M${LEFT_TOWER} 12 H${RIGHT_TOWER}`} />
            <path d={`M${LEFT_TOWER} 4 V22 M${RIGHT_TOWER} 4 V22`} strokeDasharray="none" />
            <path d="M40 245 H1160" />
            <path d={`M${LEFT_TOWER - 60} ${TOWER_TOP} H${LEFT_TOWER - 20}`} />
            <circle cx={600} cy={centerCableY(600)} r={18} />
          </g>
          <g fill="currentColor">
            {[40, LEFT_TOWER, 600, RIGHT_TOWER, 1160].map((x) => (
              <circle key={x} cx={x} cy={DECK} r={5} />
            ))}
          </g>
        </>
      )}

      {variant === 'dataflow' && (
        <>
          <Structure strokeWidth={2.5} />
          <path
            d={cablePath}
            fill="none"
            stroke="var(--color-brand-cyan)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeDasharray="10 22"
            className="motion-safe:animate-[bridge-flow_3s_linear_infinite]"
          />
          <path
            d={`M20 ${DECK} H1180`}
            fill="none"
            stroke="var(--color-brand-cyan)"
            strokeWidth={3}
            strokeDasharray="4 18"
            className="motion-safe:animate-[bridge-flow_4s_linear_infinite]"
          />
          {[40, 600, 1160].map((x) => (
            <circle key={x} cx={x} cy={DECK} r={10} fill="var(--color-brand-cyan)" />
          ))}
        </>
      )}

      {variant === 'lineart' && (
        <>
          <Structure strokeWidth={2.5} />
          {[
            { x: 40, fill: 'white' },
            { x: 600, fill: 'var(--color-brand-amber)' },
            { x: 1160, fill: 'white' },
          ].map(({ x, fill }) => (
            <circle key={x} cx={x} cy={DECK} r={16} fill={fill} stroke="currentColor" strokeWidth={4} />
          ))}
        </>
      )}

      {variant === 'nodes' && (
        <>
          <Structure strokeWidth={2.5} />
          <g stroke="currentColor" strokeWidth={2} fill="none">
            <path d={`M${LEFT_TOWER} ${TOWER_TOP} L300 70 L250 30 M300 70 L270 130`} />
            <path d={`M${RIGHT_TOWER} ${TOWER_TOP} L900 64 L950 24 M900 64 L940 120 L1000 100`} />
            <path d={`M600 ${centerCableY(600)} L600 110 L560 80 M600 110 L645 86`} />
          </g>
          <g fill="var(--color-brand-cyan)">
            {[
              [300, 70],
              [250, 30],
              [270, 130],
              [900, 64],
              [950, 24],
              [940, 120],
              [1000, 100],
              [560, 80],
              [645, 86],
            ].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={9} />
            ))}
          </g>
          <circle cx={600} cy={110} r={12} fill="var(--color-brand-amber)" />
        </>
      )}

      {variant === 'calm' && (
        <g fill="none" stroke="currentColor" strokeLinecap="round">
          <path d={cablePath} strokeWidth={1.5} />
          <path d={`M20 ${DECK} H1180`} strokeWidth={1.5} />
          <path d={`M${LEFT_TOWER} ${TOWER_TOP} V${DECK} M${RIGHT_TOWER} ${TOWER_TOP} V${DECK}`} strokeWidth={2.5} />
          <path d="M470 262 H730" strokeWidth={1.2} opacity={0.6} />
        </g>
      )}
    </svg>
  )
}
