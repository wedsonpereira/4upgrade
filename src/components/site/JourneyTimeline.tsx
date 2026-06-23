import { useState } from "react";
import { Compass, GitBranch, Sparkles, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Compass, title: "Explore", desc: "Understand interests, strengths, careers, and future possibilities." },
  { icon: GitBranch, title: "Decide", desc: "Choose the right course, institution, and pathway." },
  { icon: Sparkles, title: "Prepare", desc: "Build skills, confidence, communication, and professional profiles." },
  { icon: Rocket, title: "Launch", desc: "Prepare for internships, higher education, or employment." },
  { icon: TrendingUp, title: "Grow", desc: "Continue learning through mentorship and opportunities." },
];

export function JourneyTimeline() {
  const [active, setActive] = useState(0);
  const Active = steps[active].icon;

  return (
    <section id="journey" className="py-28 bg-teal text-teal-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 0%, color-mix(in oklab, var(--brand) 40%, transparent), transparent 70%), radial-gradient(50% 50% at 90% 100%, color-mix(in oklab, var(--brand) 25%, transparent), transparent 70%)",
        }}
      />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">The 4UPGRADE Journey</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Five stages. One clear path forward.
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            A guided system that takes students from self-discovery to real-world opportunity.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-7 h-px bg-white/15" />
          <div
            className="absolute left-0 top-7 h-px bg-brand transition-all duration-500"
            style={{ width: `${((active + 1) / steps.length) * 100}%` }}
          />
          <div className="grid grid-cols-5 gap-2 md:gap-6 relative">
            {steps.map((s, i) => {
              const isActive = i === active;
              const isPast = i < active;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className="group flex flex-col items-center text-center"
                >
                  <span
                    className={`relative flex items-center justify-center w-14 h-14 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "bg-brand border-brand scale-110 shadow-[0_0_0_8px_color-mix(in_oklab,var(--brand)_20%,transparent)]"
                        : isPast
                        ? "bg-brand/80 border-brand/60"
                        : "bg-white/5 border-white/15 group-hover:border-white/40"
                    }`}
                  >
                    <span className={`text-xs font-bold ${isActive || isPast ? "text-white" : "text-white/60"}`}>
                      0{i + 1}
                    </span>
                    {isActive && <span className="absolute inset-0 rounded-full bg-brand/40 animate-pulse-dot" />}
                  </span>
                  <span
                    className={`mt-4 text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-white/55 group-hover:text-white/80"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div key={active} className="mt-14 grid md:grid-cols-12 gap-10 items-center animate-fade-up">
          <div className="md:col-span-5">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand/15 border border-brand/30 text-brand">
              <Active className="w-7 h-7" />
            </div>
            <h3 className="mt-6 text-3xl md:text-4xl font-semibold">{steps[active].title}</h3>
          </div>
          <div className="md:col-span-7">
            <p className="text-xl md:text-2xl text-white/85 leading-relaxed">{steps[active].desc}</p>
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                className="px-4 h-10 rounded-full border border-white/20 text-sm hover:bg-white/5 transition-colors disabled:opacity-30"
                disabled={active === 0}
              >
                ← Previous
              </button>
              <button
                onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
                className="px-4 h-10 rounded-full bg-brand text-brand-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-30"
                disabled={active === steps.length - 1}
              >
                Next stage →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
