export function AutomationScene({
  size = 104,
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
          className="ae-stroke"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <line className="ae-ground" x1="8" y1="80" x2="88" y2="80" strokeWidth="2" />

          <g className="ae-relax">
            <line x1="14" y1="52" x2="40" y2="68" />
            <line x1="14" y1="52" x2="18" y2="68" />
            <line x1="18" y1="68" x2="40" y2="68" />
            <line x1="18" y1="68" x2="17" y2="80" />
            <line x1="40" y1="68" x2="42" y2="80" />

            <circle cx="20" cy="46" r="4" />
            <line x1="24" y1="50" x2="38" y2="62" />
            <path d="m38 62 7-3 4 5" />

            <g className="ae-arm">
              <path d="m27 52 6-4" />
              <line x1="33" y1="46" x2="35" y2="44" />
            </g>
          </g>

          <g className="ae-console">
            <rect x="52" y="70" width="14" height="6" rx="1.5" strokeWidth="2" />
            <circle className="ae-blip" cx="55.5" cy="73" r="1.1" fill="currentColor" stroke="none" />
          </g>

          <g className="ae-bot">
            <circle className="ae-wheel" cx="76" cy="77" r="3.5" strokeWidth="2" />
            <line x1="68" y1="75" x2="68" y2="80" strokeWidth="2" />
            <rect x="64" y="54" width="16" height="22" rx="4" />
            <line x1="64" y1="62" x2="80" y2="62" strokeWidth="2" />

            <g className="ae-bot-arm">
              <path d="m64 60-7 4" />
              <line x1="57" y1="64" x2="55" y2="69" strokeWidth="2" />
            </g>

            <g className="ae-head">
              <path d="M64 54a8 8 0 0 1 16 0" />
              <circle cx="72" cy="50" r="2.4" fill="currentColor" stroke="none" />
            </g>

            <line x1="72" y1="42" x2="72" y2="38" strokeWidth="2" />
          </g>

          <g strokeWidth="2">
            <path className="ae-wave ae-wave-1" d="M69 36a4 4 0 0 1 6 0" />
            <path className="ae-wave ae-wave-2" d="M66 33a7 7 0 0 1 12 0" />
            <path className="ae-wave ae-wave-3" d="M63 30a10 10 0 0 1 18 0" />
          </g>
        </g>
      </svg>
    </span>
  );
}
