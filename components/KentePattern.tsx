
import React from 'react';

const KentePattern = ({ className }: { className?: string }) => (
  <svg
    className={`pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="kente-pattern"
        patternUnits="userSpaceOnUse"
        width="100"
        height="100"
        patternTransform="scale(1) rotate(0)"
      >
        {/* Main background color */}
        <rect width="100" height="100" fill="transparent" />

        {/* Vertical Stripes */}
        <rect x="0" y="0" width="10" height="100" fill="currentColor" className="text-brand-gold/20" />
        <rect x="20" y="0" width="15" height="100" fill="currentColor" className="text-brand-red/20" />
        <rect x="50" y="0" width="5" height="100" fill="currentColor" className="text-brand-green/20" />
        <rect x="70" y="0" width="10" height="100" fill="currentColor" className="text-brand-gold/20" />

        {/* Horizontal Weave */}
        <path d="M 0 10 L 100 10 M 0 30 L 100 30 M 0 50 L 100 50 M 0 70 L 100 70 M 0 90 L 100 90" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-charcoal/10" />

        {/* Detail blocks */}
        <rect x="12" y="5" width="6" height="30" fill="currentColor" className="text-brand-green/30" />
        <rect x="37" y="40" width="10" height="10" fill="currentColor" className="text-brand-gold/30" />
        <rect x="75" y="60" width="20" height="8" fill="currentColor" className="text-brand-red/30" />
        <rect x="57" y="85" width="10" height="10" fill="currentColor" className="text-brand-green/30" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#kente-pattern)" />
  </svg>
);

export default KentePattern;