// Original wedge concept car, drawn as inline SVG (no external assets).
export default function Car() {
  const Wheel = ({ cx }) => (
    <g className="wheel">
      <circle cx={cx} cy="150" r="32" fill="#1b1f33" />
      <circle cx={cx} cy="150" r="20" fill="#d8d2c4" />
      <path d={`M${cx} 132v36M${cx - 18} 150h36M${cx - 13} 137l26 26M${cx + 13} 137l-26 26`} stroke="#1b1f33" strokeWidth="4" />
      <circle cx={cx} cy="150" r="5" fill="#ff7a2f" />
    </g>
  );

  return (
    <svg viewBox="0 0 560 200" role="img" aria-label="Wedge concept car" className="block h-auto w-full overflow-visible">
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f4efe6" /><stop offset="1" stopColor="#b9b2c9" /></linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2b3a67" /><stop offset="1" stopColor="#0d1226" /></linearGradient>
        <radialGradient id="glow" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#ff9d3c" stopOpacity=".75" /><stop offset="1" stopColor="#ff9d3c" stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="290" cy="178" rx="260" ry="14" fill="url(#glow)" />
      <path d="M22 118 L22 84 L70 84 L92 112 Z" fill="#241b3d" />
      <path d="M20 146 L34 122 L150 98 L300 58 L404 62 L474 104 L546 126 L552 146 Z" fill="url(#body)" />
      <path d="M168 98 L300 66 L392 68 L438 100 Z" fill="url(#glass)" />
      <path d="M300 66 L318 100" stroke="#f4efe6" strokeWidth="5" />
      <path d="M34 128 L520 128" stroke="#ff7a2f" strokeWidth="5" strokeLinecap="round" />
      <path d="M486 112 L540 128" stroke="#7ff3ff" strokeWidth="7" strokeLinecap="round" />
      <rect x="24" y="104" width="30" height="7" rx="3" fill="#ff3d5a" />
      <circle cx="130" cy="150" r="40" fill="#0d1226" />
      <circle cx="440" cy="150" r="40" fill="#0d1226" />
      <Wheel cx={130} />
      <Wheel cx={440} />
    </svg>
  );
}
