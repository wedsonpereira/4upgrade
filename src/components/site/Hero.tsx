import { ArrowRight, Compass, GitBranch, Sparkles, Rocket, TrendingUp } from "lucide-react";

const path = [
  { icon: Compass, label: "Explore" },
  { icon: GitBranch, label: "Decide" },
  { icon: Sparkles, label: "Prepare" },
  { icon: Rocket, label: "Launch" },
  { icon: TrendingUp, label: "Grow" },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
      <div className="container-page grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            Student readiness & career transition platform
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-foreground">
            From career confusion to{" "}
            <span className="text-gradient-brand">future readiness</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Helping students make better education decisions, build real-world readiness,
            and prepare for future opportunities.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 h-12 text-sm font-medium hover:bg-foreground/90 transition-all"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-6 h-12 text-sm font-medium hover:border-foreground/30 transition-colors"
            >
              Explore Your Pathway
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span>Trusted by students from</span>
            <span className="font-semibold text-foreground/80">Class 10 · 11 · 12</span>
            <span className="font-semibold text-foreground/80">Undergraduates</span>
            <span className="font-semibold text-foreground/80">Fresh Graduates</span>
          </div>
        </div>

        {/* Journey graphic */}
        <div className="lg:col-span-5 animate-fade-up [animation-delay:120ms]">
          <div className="relative rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-muted-foreground">Your pathway</p>
                <p className="text-sm font-semibold mt-0.5">Education → Readiness → Opportunity</p>
              </div>
              <span className="text-[10px] font-medium tracking-wider text-brand bg-brand/10 px-2 py-1 rounded-full">
                LIVE
              </span>
            </div>
            <ol className="space-y-3">
              {path.map((p, i) => (
                <li
                  key={p.label}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-4 hover:border-brand/40 hover:bg-card transition-all"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-foreground text-background">
                    <p.icon className="w-4.5 h-4.5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{p.label}</p>
                    <p className="text-xs text-muted-foreground">Stage {String(i + 1).padStart(2, "0")}</p>
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-brand transition-colors">
                    {i < path.length - 1 ? "↓" : "✓"}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
