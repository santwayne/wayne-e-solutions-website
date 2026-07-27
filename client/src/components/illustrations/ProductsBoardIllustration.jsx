// Original illustration for the Products page header — a grid of small
// status tiles, echoing the actual product-status-board content below it.

export default function ProductsBoardIllustration() {
  const statuses = ['live', 'live', 'beta', 'dev', 'beta', 'live', 'dev', 'dev', 'beta', 'live', 'dev', 'beta'];
  const colors = { live: '#1d8a8a', beta: '#c89b3c', dev: 'rgba(18,18,43,0.28)' };

  return (
    <svg
      viewBox="0 0 380 140"
      className="products-board-illustration"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Grid representing live, beta and in-development products"
    >
      {statuses.map((s, i) => {
        const col = i % 6;
        const row = Math.floor(i / 6);
        const x = 10 + col * 62;
        const y = 10 + row * 62;
        return (
          <g key={i}>
            <rect x={x} y={y} width="48" height="48" rx="6" fill="var(--paper, #fff)" stroke="var(--line-on-light, rgba(18,18,43,0.12))" />
            <circle cx={x + 24} cy={y + 24} r="7" fill={colors[s]} opacity={s === 'dev' ? 0.6 : 0.95} />
          </g>
        );
      })}
    </svg>
  );
}
