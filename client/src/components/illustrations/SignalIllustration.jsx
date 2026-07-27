// Original illustration for the Contact page — concentric "signal" arcs
// suggesting a message being sent and received.

export default function SignalIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="signal-illustration"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a signal being sent"
    >
      <circle cx="100" cy="100" r="8" fill="#c89b3c" />
      <circle cx="100" cy="100" r="32" fill="none" stroke="#1d8a8a" strokeWidth="2" opacity="0.55" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="#1d8a8a" strokeWidth="1.5" opacity="0.35" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="#b5533c" strokeWidth="1.5" opacity="0.2" />
    </svg>
  );
}
