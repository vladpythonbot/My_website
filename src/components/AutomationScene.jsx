export function AutomationScene({
  size = 76,
  className = "",
  title = "",
}) {
  const decorative = title === "";

  return (
    <span
      className={`automation-emblem ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        className="ae-root"
        width={size}
        height={size}
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role={decorative ? "presentation" : "img"}
        aria-hidden={decorative || undefined}
        aria-label={decorative ? undefined : title}
      >
        {!decorative && <title>{title}</title>}

        <g
          className="ae-bulb"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g className="ae-rays">
            <path d="M48 9v8" />
            <path d="m25 18 6 7" />
            <path d="m71 18-6 7" />
            <path d="M15 41h9" />
            <path d="M72 41h9" />
          </g>

          <path
            className="ae-glass"
            d="M48 20c-15 0-25 10-25 24 0 9 5 15 11 21 3 3 5 7 5 11h18c0-4 2-8 5-11 6-6 11-12 11-21 0-14-10-24-25-24Z"
          />
          <path d="M39 76h18M40 82h16M44 88h8" fill="none" />
        </g>
      </svg>
    </span>
  );
}
