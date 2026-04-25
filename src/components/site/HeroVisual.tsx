// Abstract upward growth graphic, pure SVG and themed.
export const HeroVisual = () => (
  <div className="relative aspect-square w-full max-w-md mx-auto">
    <div className="absolute inset-0 bg-gradient-radial rounded-full" />
    <svg viewBox="0 0 400 400" className="relative h-full w-full">
      <defs>
        <linearGradient id="g1" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(198 73% 14%)" />
          <stop offset="100%" stopColor="hsl(142 76% 36%)" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="hsl(142 76% 36% / 0.1)" />
          <stop offset="100%" stopColor="hsl(142 76% 36% / 0.4)" />
        </linearGradient>
      </defs>

      {/* Grid */}
      <g stroke="hsl(214 32% 91%)" strokeWidth="1">
        {[80, 140, 200, 260, 320].map((y) => (
          <line key={y} x1="40" y1={y} x2="360" y2={y} />
        ))}
      </g>

      {/* Area under curve */}
      <path d="M40 320 L120 280 L200 220 L280 150 L360 70 L360 320 Z" fill="url(#g2)" />

      {/* Curve */}
      <path d="M40 320 L120 280 L200 220 L280 150 L360 70" fill="none" stroke="url(#g1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Points */}
      {[
        [40, 320], [120, 280], [200, 220], [280, 150], [360, 70],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="8" fill="white" stroke="hsl(142 76% 36%)" strokeWidth="3" />
        </g>
      ))}

      {/* Arrow up */}
      <g transform="translate(360 70)">
        <circle r="20" fill="hsl(142 76% 36%)" />
        <path d="M-7 3 L0 -6 L7 3" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>

    {/* Floating tags */}
    <div className="absolute -left-2 top-10 bg-card border border-border rounded-xl shadow-elegant px-4 py-3 animate-float">
      <p className="text-xs text-muted-foreground">CV Score</p>
      <p className="text-lg font-bold text-primary">92<span className="text-sm text-muted-foreground">/100</span></p>
    </div>
    <div className="absolute -right-2 bottom-12 bg-card border border-border rounded-xl shadow-elegant px-4 py-3 animate-float" style={{ animationDelay: "1.5s" }}>
      <p className="text-xs text-muted-foreground">Interviews</p>
      <p className="text-lg font-bold text-teal">+5 this week</p>
    </div>
  </div>
);
