export function Ufo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="60" cy="40" rx="50" ry="8" fill="oklch(0.3 0.05 285)" />
      <ellipse cx="60" cy="38" rx="50" ry="6" fill="oklch(0.45 0.08 285)" />
      <path
        d="M30 38 Q60 5 90 38 Z"
        fill="oklch(0.85 0.18 200 / 0.5)"
        stroke="oklch(0.85 0.22 155)"
        strokeWidth="1.5"
      />
      <circle cx="50" cy="42" r="2" fill="oklch(0.85 0.22 155)">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="44" r="2" fill="oklch(0.85 0.22 155)">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="42" r="2" fill="oklch(0.85 0.22 155)">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <path d="M50 46 L60 58 L70 46 Z" fill="oklch(0.85 0.22 155 / 0.2)" />
    </svg>
  );
}
