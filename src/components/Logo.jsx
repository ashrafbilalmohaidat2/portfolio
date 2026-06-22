export default function Logo({ size = 50 }) {
  const s = size
  const cx = s / 2
  const cy = s / 2
  const r  = s * 0.47

  const hex = (r) => {
    const angles = [90, 30, 330, 270, 210, 150]
    return angles.map(a => {
      const rad = (a * Math.PI) / 180
      return `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`
    }).join(' ')
  }

  return (
    <svg
      width={s} height={s} viewBox={`0 0 ${s} ${s}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* Hex background fill */}
      <polygon points={hex(r)} fill="#22c55e" fillOpacity="0.08" />
      {/* Hex outer ring */}
      <polygon points={hex(r)} fill="none" stroke="#22c55e" strokeWidth={s * 0.028} />
      {/* Hex inner ring */}
      <polygon points={hex(r * 0.77)} fill="none" stroke="#22c55e" strokeWidth={s * 0.007} opacity="0.3" />
      {/* Side dashes */}
      <line x1="0" y1={cy} x2={cx - r * 0.55} y2={cy} stroke="#22c55e" strokeWidth={s * 0.014} opacity="0.5" />
      <line x1={cx + r * 0.55} y1={cy} x2={s} y2={cy} stroke="#22c55e" strokeWidth={s * 0.014} opacity="0.5" />
      {/* "A" — uses currentColor so it adapts to parent text color (dark in light mode, white in dark) */}
      <text
        x={cx - s * 0.15} y={cy + s * 0.14}
        fontFamily="sans-serif"
        fontSize={s * 0.30}
        fontWeight="800"
        fill="currentColor"
        textAnchor="middle"
      >A</text>
      {/* "M" — always emerald green */}
      <text
        x={cx + s * 0.15} y={cy + s * 0.14}
        fontFamily="sans-serif"
        fontSize={s * 0.30}
        fontWeight="800"
        fill="#22c55e"
        textAnchor="middle"
      >M</text>
    </svg>
  )
}
