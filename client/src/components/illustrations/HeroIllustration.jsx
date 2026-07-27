// Original, hand-built SVG illustration — an abstract network of connected
// nodes, echoing the "product status board" idea: several products (nodes),
// linked, with a few marked as live. No stock imagery, no third-party assets.

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="hero-illustration"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of connected software products"
    >
      <defs>
        <linearGradient id="nodeLive" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d8a8a" />
          <stop offset="100%" stopColor="#2fb3b3" />
        </linearGradient>
        <linearGradient id="nodeGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c89b3c" />
          <stop offset="100%" stopColor="#e0b45c" />
        </linearGradient>
      </defs>

      {/* connecting lines */}
      <g stroke="rgba(246,244,238,0.22)" strokeWidth="1.5" fill="none">
        <path d="M120 300 L 230 210" />
        <path d="M230 210 L 360 260" />
        <path d="M230 210 L 300 110" />
        <path d="M300 110 L 420 150" />
        <path d="M120 300 L 190 360" />
        <path d="M360 260 L 430 320" />
        <path d="M300 110 L 180 70" />
      </g>

      {/* pulse ring on the primary node */}
      <circle cx="230" cy="210" r="34" fill="none" stroke="#1d8a8a" strokeWidth="1.5" opacity="0.5">
        <animate attributeName="r" values="30;46;30" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.55;0;0.55" dur="3.2s" repeatCount="indefinite" />
      </circle>

      {/* nodes */}
      <circle cx="230" cy="210" r="22" fill="url(#nodeLive)" />
      <circle cx="120" cy="300" r="14" fill="url(#nodeGold)" />
      <circle cx="360" cy="260" r="16" fill="url(#nodeLive)" />
      <circle cx="300" cy="110" r="12" fill="rgba(246,244,238,0.5)" />
      <circle cx="420" cy="150" r="10" fill="url(#nodeGold)" />
      <circle cx="190" cy="360" r="9" fill="rgba(246,244,238,0.35)" />
      <circle cx="430" cy="320" r="9" fill="rgba(246,244,238,0.35)" />
      <circle cx="180" cy="70" r="8" fill="rgba(246,244,238,0.3)" />

      {/* status labels near the two main nodes */}
      <text x="252" y="204" fill="#f6f4ee" fontSize="11" fontFamily="IBM Plex Mono, monospace" opacity="0.85">
        LIVE
      </text>
      <text x="378" y="256" fill="#f6f4ee" fontSize="11" fontFamily="IBM Plex Mono, monospace" opacity="0.85">
        LIVE
      </text>
    </svg>
  );
}
