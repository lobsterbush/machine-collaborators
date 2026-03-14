/**
 * MC monogram mark.
 * M in current text color, C in terracotta.
 * Used in header (white via mix-blend-difference) and footer.
 */
export function Logo({ className = '', size = 28 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 32"
      width={size * 1.5}
      height={size}
      className={className}
      aria-label="Machine Collaborators"
      role="img"
    >
      {/* M — inherits currentColor */}
      <path
        d="M0 28V4h3.8l6.7 15.5L17.2 4H21v24h-3.5V12L12 24h-1.5L5 12v16H0z"
        fill="currentColor"
      />
      {/* C — terracotta accent */}
      <path
        d="M28 9.5C29 6.6 31 4.5 34 4.5c3.8 0 6.2 2.7 6.2 6v11c0 3.3-2.4 6-6.2 6-3 0-5-2.1-6-5l2.8-.8c.5 1.6 1.6 2.8 3.2 2.8 1.8 0 3-1.4 3-3V10.5c0-1.6-1.2-3-3-3-1.6 0-2.7 1.2-3.2 2.8L28 9.5z"
        fill="#c45d3e"
      />
    </svg>
  )
}
