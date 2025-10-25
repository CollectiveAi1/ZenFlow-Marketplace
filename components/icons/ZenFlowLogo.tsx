import React from 'react';

const ZenFlowLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="zenLogoCircleTop" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#f87171" /> {/* red-400 */}
        <stop offset="100%" stopColor="#f59e0b" /> {/* amber-500 */}
      </linearGradient>
      <linearGradient id="zenLogoCircleBottom" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#fbbf24" /> {/* amber-400 */}
        <stop offset="100%" stopColor="#4ade80" /> {/* green-400 */}
      </linearGradient>
      <linearGradient id="zenLogoGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fef3c7" /> {/* primary-100 */}
        <stop offset="50%" stopColor="#fcd34d" /> {/* primary-300 */}
        <stop offset="100%" stopColor="#d97706" /> {/* primary-600 */}
      </linearGradient>
    </defs>

    {/* Circles */}
    <g>
      {/* Outer Circle */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="url(#zenLogoCircleTop)" strokeWidth="3" pathLength="1" strokeDasharray="0.5 0.5" strokeDashoffset="0.75" />
      <circle cx="50" cy="50" r="48" fill="none" stroke="url(#zenLogoCircleBottom)" strokeWidth="3" pathLength="1" strokeDasharray="0.5 0.5" strokeDashoffset="0.25" />
      {/* Inner Circle */}
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#zenLogoCircleTop)" strokeWidth="3" pathLength="1" strokeDasharray="0.5 0.5" strokeDashoffset="0.75" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#zenLogoCircleBottom)" strokeWidth="3" pathLength="1" strokeDasharray="0.5 0.5" strokeDashoffset="0.25" />
    </g>

    {/* ZenFlow Text */}
    <text 
      x="50" 
      y="45" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
      fontSize="18"
      fontWeight="600"
      letterSpacing="1"
      fill="url(#zenLogoGoldGradient)"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      ZenFlow
    </text>

    {/* Lotus Flower */}
    <g transform="translate(50, 68) scale(0.25)" fill="url(#zenLogoGoldGradient)">
        <path d="M0,0 C-15,-10 -25,-25 -25,-25 C-25,-40 -10,-50 0,-50 C10,-50 25,-40 25,-25 C25,-25 15,-10 0,0 Z" />
        <path d="M0,-15 C-10,-25 -15,-35 -15,-35 C-15,-45 -5,-50 0,-50 C5,-50 15,-45 15,-35 C15,-35 10,-25 0,-15 Z" />
        <path d="M-25,-25 C-20,-35 -10,-40 0,-40 C10,-40 20,-35 25,-25" fill="none" stroke="url(#zenLogoGoldGradient)" strokeWidth="8" strokeLinecap="round" />
    </g>
  </svg>
);

export default ZenFlowLogo;
