// Original illustration for the Custom Software page — a simple left-to-
// right pipeline, echoing the four-step "how we work" process below it.

export default function PipelineIllustration() {
  return (
    <svg
      viewBox="0 0 400 100"
      className="pipeline-illustration"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a four-step build pipeline"
    >
      <line x1="40" y1="50" x2="360" y2="50" stroke="rgba(18,18,43,0.14)" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" />

      {[40, 147, 253, 360].map((cx, i) => (
        <g key={cx}>
          <circle cx={cx} cy="50" r="16" fill={i < 2 ? '#1d8a8a' : i === 2 ? '#c89b3c' : 'rgba(18,18,43,0.75)'} opacity={i === 3 ? 0.9 : 1} />
          <text x={cx} y="55" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="IBM Plex Mono, monospace">
            {i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}
