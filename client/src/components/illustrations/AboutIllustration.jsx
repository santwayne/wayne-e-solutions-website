// Original illustration: two overlapping panels representing the two
// halves of the business (marketing + software) merging into one system.

export default function AboutIllustration() {
  return (
    <svg
      viewBox="0 0 320 280"
      className="about-illustration"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of marketing and software combining"
    >
      <rect x="20" y="30" width="160" height="160" rx="6" fill="#f4f3ee" stroke="var(--line-on-light, rgba(18,18,43,0.12))" />
      <rect x="120" y="90" width="180" height="160" rx="6" fill="#12122b" opacity="0.94" />

      {/* marketing panel marks */}
      <g stroke="#b5533c" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M42 150 L 70 110 L 96 130 L 130 80" />
      </g>
      <circle cx="42" cy="150" r="3.5" fill="#b5533c" />
      <circle cx="70" cy="110" r="3.5" fill="#b5533c" />
      <circle cx="96" cy="130" r="3.5" fill="#b5533c" />
      <circle cx="130" cy="80" r="3.5" fill="#b5533c" />

      {/* software panel marks */}
      <g fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#c89b3c" opacity="0.9">
        <text x="142" y="130">{'<>'}</text>
        <text x="142" y="150">01001</text>
        <text x="142" y="170">build --ok</text>
      </g>
      <circle cx="270" cy="220" r="10" fill="#1d8a8a" opacity="0.85" />
    </svg>
  );
}
