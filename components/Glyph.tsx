import type { GlyphKind } from "@/lib/products";

/**
 * Technical line drawings of each product type, drawn on a blueprint grid.
 * Used wherever Ephmet does not have its own photo, so no borrowed images are needed.
 */
export function Glyph({ kind, className = "" }: { kind: GlyphKind; className?: string }) {
  return (
    <svg
      viewBox="0 0 160 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {drawings[kind]}
    </svg>
  );
}

const dim = { strokeWidth: 1, strokeDasharray: "3 3", opacity: 0.6 } as const;

const drawings: Record<GlyphKind, React.ReactNode> = {
  coil: (
    <>
      <ellipse cx="62" cy="50" rx="30" ry="34" />
      <ellipse cx="62" cy="50" rx="11" ry="12.5" />
      <ellipse cx="62" cy="50" rx="18" ry="20.5" opacity={0.5} />
      <ellipse cx="62" cy="50" rx="24" ry="27.5" opacity={0.5} />
      <path d="M62 16h44M62 84h44" />
      <path d="M106 16a30 34 0 0 1 0 68" />
      <path d="M92 50h40" {...dim} />
      <path d="M132 44v12" strokeWidth={1} opacity={0.6} />
    </>
  ),
  plate: (
    <>
      <path d="M20 58 62 34h78L98 58Z" />
      <path d="M20 58v12h78V58M98 70l42-24V34" />
      <path d="M150 34v36" {...dim} />
      <path d="M146 34h8M146 46h8" strokeWidth={1} opacity={0.6} />
    </>
  ),
  chequer: (
    <>
      <path d="M18 64 58 36h86l-40 28Z" />
      <path d="M18 64v8h86v-8M104 72l40-28v-8" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4, 5].map((c) => {
          const x = 40 + c * 14 - r * 9;
          const y = 42 + r * 6;
          return <path key={`${r}-${c}`} d={`M${x} ${y}l${(r + c) % 2 ? 5 : -5} 3`} strokeWidth={2.4} />;
        }),
      )}
    </>
  ),
  can: (
    <>
      <path d="M14 70 48 52h62L76 70Z" opacity={0.6} />
      <path d="M14 70v4h62v-4M76 74l34-18v-4" opacity={0.6} />
      <ellipse cx="118" cy="30" rx="18" ry="6" />
      <path d="M100 30v46M136 30v46" />
      <path d="M100 76a18 6 0 0 0 36 0" />
      <path d="M100 38a18 6 0 0 0 36 0M100 68a18 6 0 0 0 36 0" opacity={0.5} />
    </>
  ),
  billet: (
    <>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${i * 8} ${i * 18})`}>
          <path d="M20 22h96l14-10H34Z" />
          <path d="M20 22v14h96V22M116 36l14-10V12" />
        </g>
      ))}
    </>
  ),
  rebar: (
    <>
      {[26, 50, 74].map((y) => (
        <g key={y}>
          <path d={`M16 ${y - 6}h128M16 ${y + 6}h128`} />
          <ellipse cx="16" cy={y} rx="3" ry="6" />
          <path d={`M144 ${y - 6}a3 6 0 0 1 0 12`} />
          {Array.from({ length: 13 }, (_, i) => (
            <path key={i} d={`M${24 + i * 9.5} ${y + 6}l6 -12`} strokeWidth={1.5} />
          ))}
        </g>
      ))}
    </>
  ),
  wirecoil: (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <ellipse key={i} cx={60 + i * 7} cy="50" rx="22" ry="36" opacity={i % 2 ? 0.55 : 1} />
      ))}
      <path d="M95 86c14 0 30-4 40-10" />
    </>
  ),
  mesh: (
    <>
      <path d="M14 76 46 24h100l-32 52Z" />
      {[1, 2, 3, 4].map((i) => (
        <path key={`a${i}`} d={`M${14 + i * 20} 76 ${46 + i * 20} 24`} />
      ))}
      {[1, 2, 3].map((i) => {
        const t = i / 4;
        return <path key={`b${i}`} d={`M${14 + 32 * t} ${76 - 52 * t}h100`} />;
      })}
    </>
  ),
  ibeam: (
    <>
      <path d="M30 18h48v8H58v48h20v8H30v-8h20V26H30Z" />
      <path d="M78 18l50-6M78 26l50-6M78 74l50-6M78 82l50-6M58 26v48" opacity={0.5} />
      <path d="M128 12v8M128 68v8" opacity={0.5} />
      <path d="M22 18v64" {...dim} />
    </>
  ),
  bars: (
    <>
      <rect x="14" y="40" width="44" height="14" rx="1" />
      <circle cx="86" cy="47" r="16" />
      <rect x="116" y="33" width="28" height="28" rx="1" />
      <path d="M14 70h44M70 70h32M116 70h28" {...dim} />
    </>
  ),
  hollow: (
    <>
      <rect x="14" y="22" width="56" height="56" rx="4" />
      <rect x="22" y="30" width="40" height="40" rx="2" />
      <circle cx="112" cy="50" r="30" />
      <circle cx="112" cy="50" r="23" />
    </>
  ),
  rail: (
    <>
      <path d="M62 14h36v14l-10 6v30l24 10v10H48V74l24-10V34l-10-6Z" />
      <path d="M38 14v70" {...dim} />
      <path d="M48 92h64" {...dim} />
    </>
  ),
  drum: (
    <>
      <ellipse cx="80" cy="20" rx="30" ry="8" />
      <path d="M50 20v60M110 20v60" />
      <path d="M50 80a30 8 0 0 0 60 0" />
      <path d="M50 40a30 8 0 0 0 60 0M50 60a30 8 0 0 0 60 0" />
      <ellipse cx="92" cy="18" rx="5" ry="1.8" opacity={0.6} />
    </>
  ),
  dump: (
    <>
      <path d="M14 72V48l8-14h20v38" />
      <path d="M22 48h20" opacity={0.6} />
      <path d="M44 72h106" />
      <path d="M52 66 62 26h80l-6 40Z" />
      <path d="M58 46h80" opacity={0.5} />
      {[28, 98, 126].map((x) => (
        <g key={x}>
          <circle cx={x} cy="78" r="10" />
          <circle cx={x} cy="78" r="3.5" />
        </g>
      ))}
    </>
  ),
  cargo: (
    <>
      <path d="M14 72V48l8-14h20v38" />
      <path d="M22 48h20" opacity={0.6} />
      <path d="M44 72h106" />
      <path d="M50 66V40h96v26" />
      {[66, 82, 98, 114, 130].map((x) => (
        <path key={x} d={`M${x} 40v26`} opacity={0.5} />
      ))}
      {[28, 98, 126].map((x) => (
        <g key={x}>
          <circle cx={x} cy="78" r="10" />
          <circle cx={x} cy="78" r="3.5" />
        </g>
      ))}
    </>
  ),
};
