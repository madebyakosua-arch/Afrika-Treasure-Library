
import React from 'react';

const GeometricPattern = ({ className }: { className?: string }) => (
  <svg
    width="100%"
    height="100%"
    className={`pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="geometric-pattern"
        patternUnits="userSpaceOnUse"
        width="80"
        height="80"
        patternTransform="scale(1) rotate(45)"
      >
        <path
          d="M 20 0 L 20 80 M 60 0 L 60 80 M 0 20 L 80 20 M 0 60 L 80 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <circle cx="60" cy="60" r="3" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
  </svg>
);

export default GeometricPattern;
