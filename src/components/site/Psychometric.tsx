import { useMemo, useState } from "react";
import { Brain, ArrowRight, RotateCcw, Sparkles } from "lucide-react";

type Track = "Explorer" | "Builder" | "Strategist" | "Connector";

const questions: { q: string; options: { label: string; track: Track }[] }[] = [
  {
    q: "When facing a new challenge, you usually…",
    options: [
      { label: "Research every angle before acting", track: "Strategist" },
      { label: "Jump in and start building", track: "Builder" },
      { label: "Talk it through with people", track: "Connector" },
      { label: "Look for a new perspective", track: "Explorer" },
    ],
  },
  {
    q: "Your ideal weekend project is…",
    options: [
      { label: "Visiting somewhere you've never been", track: "Explorer" },
      { label: "Building or fixing something with your hands", track: "Builder" },
      { label: "Mapping out a plan for the next 6 months", track: "Strategist" },
      { label: "Hosting friends or organising a meetup", track: "Connector" },
    ],
  },
  {
    q: "In a team, people count on you to…",
    options: [
      { label: "Bring fresh ideas", track: "Explorer" },
      { label: "Get things shipped", track: "Builder" },
      { label: "Keep the strategy clear", track: "Strategist" },
      { label: "Keep the team aligned", track: "Connector" },
    ],
  },
  {
    q: "You feel most energised when…",
    options: [
      { label: "Learning something completely new", track: "Explorer" },
      { label: "Seeing a finished result", track: "Builder" },
      { label: "Solving a complex problem", track: "Strategist" },
      { label: "Helping someone unlock potential", track: "Connector" },
    ],
  },
  {
    q: "Five years from now, success looks like…",
    options: [
      { label: "A career that keeps reinventing itself", track: "Explorer" },
      { label: "Products or work people use every day", track: "Builder" },
      { label: "Leading decisions that move the needle", track: "Strategist" },
      { label: "A community I helped grow", track: "Connector" },
    ],
  },
];

const profiles: Record<Track, { title: string; tag: string; copy: string; paths: string[] }> = {
  Explorer: {
    title: "The Explorer",
    tag: "Curious • Adaptive • Open-minded",
    copy: "You thrive when ideas and environments change. Careers built around discovery, research, and reinvention suit you best.",
    paths: ["Product Research", "Consulting", "Journalism", "UX Research", "International Business"],
  },
  Builder: {
    title: "The Builder",
    tag: "Hands-on • Practical • Outcome-driven",
    copy: "You like to make things real. You'll do well in roles where you create, ship, and iterate on tangible outcomes.",
    paths: ["Engineering", "Product Design", "Entrepreneurship", "Architecture", "Operations"],
  },
  Strategist: {
    title: "The Strategist",
    tag: "Analytical • Structured • Long-view",
    copy: "You see the system behind the surface. Roles that reward analysis, planning, and decision-making fit you best.",
    paths: ["Management Consulting", "Finance", "Data Science", "Policy", "Corporate Strategy"],
  },
  Connector: {
    title: "The Connector",
    tag: "Empathetic • Collaborative • Persuasive",
    copy: "You bring people and ideas together. You'll shine in roles built around relationships, communication, and growth.",
    paths: ["Marketing", "HR & People Ops", "Sales", "Public Relations", "Community & Brand"],
  },
};

export function Psychometric() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Track[]>([]);

  const done = step >= questions.length;
  const progress = Math.round((step / questions.length) * 100);

  const result: Track | null = useMemo(() => {
    if (!done) return null;
    const tally = answers.reduce<Record<string, number>>((acc, t) => {
      acc[t] = (acc[t] || 0) + 1;
      return acc;
    }, {});
    return (Object.entries(tally).sort((a, b) => b[1] - a[1])[0]?.[0] as Track) || "Explorer";
  }, [done, answers]);

  const choose = (track: Track) => {
    setAnswers((a) => [...a, track]);
    setStep((s) => s + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <section id="psychometric" className="py-28 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand inline-flex items-center gap-2">
            <Brain className="size-4" /> Discover your direction
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            A 2-minute psychometric snapshot.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Five quick questions to surface the kind of work, environments, and career paths that fit how
            you naturally think and operate.
          </p>
        </div>

        <div className="mt-12 surface-card p-8 md:p-12 max-w-3xl">
          {!done ? (
            <>
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Question {step + 1} of {questions.length}</span>
                <span>{progress}%</span>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-border overflow-hidden">
                <div
                  className="h-full bg-brand transition-all duration-500"
                  style={{ width: `${((step) / questions.length) * 100}%` }}
                />
              </div>

              <h3 className="mt-8 text-2xl md:text-3xl font-semibold tracking-tight">
                {questions[step].q}
              </h3>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => choose(opt.track)}
                    className="group text-left p-5 rounded-xl border border-border bg-background hover:border-brand hover:shadow-md transition-all"
                  >
                    <span className="text-foreground font-medium">{opt.label}</span>
                    <ArrowRight className="size-4 mt-3 text-muted-foreground group-hover:text-brand group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </>
          ) : result ? (
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-brand bg-brand/10 px-3 py-1 rounded-full">
                <Sparkles className="size-3.5" /> Your profile
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                {profiles[result].title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{profiles[result].tag}</p>
              <p className="mt-6 text-lg text-foreground leading-relaxed">{profiles[result].copy}</p>

              <p className="mt-8 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Suggested paths to explore
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profiles[result].paths.map((p) => (
                  <span key={p} className="px-3 py-1.5 rounded-full bg-background border border-border text-sm">
                    {p}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-5 h-11 hover:bg-foreground/90 transition-colors"
                >
                  Discuss this with a mentor <ArrowRight className="size-4" />
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-full border border-border text-sm font-medium px-5 h-11 hover:bg-background transition-colors"
                >
                  <RotateCcw className="size-4" /> Retake
                </button>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                This snapshot is indicative, not diagnostic. Pair it with a guided session for deeper clarity.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
