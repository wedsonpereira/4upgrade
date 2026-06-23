import {
  GraduationCap, Sparkles, Briefcase, Compass, Globe, Users,
  FileText, Linkedin, MessageSquare, MicVocal, ShieldCheck, Search,
  ArrowUpRight, Building2,
} from "lucide-react";
import w1 from "@/assets/workshop-1.jpg";
import w2 from "@/assets/workshop-2.jpg";
import w3 from "@/assets/workshop-3.jpg";
import w4 from "@/assets/workshop-4.jpg";

/* SECTION 2 */
export function WhyExists() {
  const gaps = [
    "Career direction", "Professional profiles", "Interview confidence",
    "Industry exposure", "Real-world readiness",
  ];
  return (
    <section className="py-28 bg-surface">
      <div className="container-page grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm font-medium text-brand">Why 4UPGRADE exists</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Education alone isn't enough.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Students spend years preparing for exams. Few are taught how to prepare for opportunities.
            We bridge the gap between education and the working world.
          </p>
        </div>
        <div className="surface-card p-8">
          <p className="text-sm text-muted-foreground">Many graduate without —</p>
          <ul className="mt-6 space-y-4">
            {gaps.map((g, i) => (
              <li key={g} className="flex items-center gap-4 border-b border-border last:border-0 pb-4 last:pb-0">
                <span className="text-xs font-mono text-muted-foreground w-8">0{i + 1}</span>
                <span className="text-foreground font-medium">{g}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-5 rounded-xl bg-primary text-primary-foreground">
            <p className="text-sm leading-relaxed">
              4UPGRADE bridges the gap between <span className="text-brand font-semibold">education</span> and{" "}
              <span className="text-brand font-semibold">opportunity</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* SECTION 3 */
const pillars = [
  {
    icon: GraduationCap, title: "Education",
    items: ["Career exploration", "Course selection", "College selection", "Admission guidance", "Overseas pathways"],
  },
  {
    icon: Sparkles, title: "Readiness",
    items: ["Resume building", "LinkedIn optimization", "Communication skills", "Interview preparation"],
  },
  {
    icon: Briefcase, title: "Opportunity",
    items: ["Internships", "Industry exposure", "Career readiness", "Professional development"],
  },
];
export function WhatIs() {
  return (
    <section id="services" className="py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">What is 4UPGRADE</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            More than admission guidance.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={p.title} className="surface-card p-8 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foreground text-background">
                  <p.icon className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
              <ul className="mt-5 space-y-2.5 flex-1">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 w-1 h-1 rounded-full bg-brand shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECTION 5 */
const support = [
  { icon: Compass, title: "Career & Education Guidance", desc: "Personalized direction for every stage of your education." },
  { icon: GraduationCap, title: "Admission Support", desc: "Navigate applications with clarity and confidence." },
  { icon: Globe, title: "Overseas Pathways", desc: "Plan international education with structured support." },
  { icon: Sparkles, title: "Career Readiness", desc: "Build the skills and profiles employers actually look for." },
  { icon: Users, title: "Mentorship", desc: "Long-term guidance from people who've walked the path." },
];
export function HowWeSupport() {
  return (
    <section className="py-28 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">How we support you</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Built around every stage of the student journey.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {support.map((s) => (
            <a key={s.title} href="#cta" className="surface-card p-7 group">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-card text-foreground group-hover:bg-brand group-hover:border-brand group-hover:text-brand-foreground transition-colors">
                  <s.icon className="w-5 h-5" />
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-brand transition-colors" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECTION 6 */
const readiness = [
  { icon: FileText, title: "Resume Building" },
  { icon: Linkedin, title: "LinkedIn Optimization" },
  { icon: MessageSquare, title: "Interview Readiness" },
  { icon: MicVocal, title: "Communication Skills" },
  { icon: ShieldCheck, title: "Professional Etiquette" },
  { icon: Search, title: "Job Search Preparation" },
];
export function Readiness() {
  return (
    <section id="readiness" className="py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">Career readiness</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Because success doesn't start after graduation.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {readiness.map((r) => (
            <div key={r.title} className="bg-background p-8 hover:bg-surface transition-colors group">
              <r.icon className="w-6 h-6 text-brand" />
              <h3 className="mt-6 text-xl font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Structured, hands-on preparation that builds genuine confidence.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECTION 7 */
export function Workshops() {
  return (
    <section id="workshops" className="py-28 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">Workshops & student engagement</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Learning beyond the classroom.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[w1, w2, w3, w4].map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl border border-border bg-card ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/5] md:translate-y-8"
                }`}
            >
              <img src={src} alt="Workshop" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECTION 8 */
const parentBenefits = [
  { t: "Clarity before commitment", d: "Make informed decisions before investing time and resources." },
  { t: "Trusted guidance", d: "Frameworks and advice grounded in real student outcomes." },
  { t: "Structured planning", d: "A clear roadmap that removes guesswork from key transitions." },
  { t: "Long-term perspective", d: "Decisions today aligned with opportunities five years ahead." },
];
export function ForParents() {
  return (
    <section id="parents" className="py-28">
      <div className="container-page grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-brand">For parents</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Helping families make better education decisions.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            A structured, transparent partnership for the most important choices your child will make.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {parentBenefits.map((b, i) => (
            <div key={b.t} className="surface-card p-6">
              <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECTION 9 */
const journeys = [
  { tag: "Course Selection", t: "From confused to committed in 6 weeks", d: "A Class 12 student navigated 14 program options to a confident final choice." },
  { tag: "Internship", t: "Landing the first meaningful internship", d: "Targeted profile work plus interview prep opened doors at a growing startup." },
  { tag: "Overseas", t: "Building a structured overseas plan", d: "From university shortlists to applications — clarity at every checkpoint." },
  { tag: "Career Readiness", t: "Graduating ready, not anxious", d: "Resume, LinkedIn, and communication coaching built lasting confidence." },
];
export function Journeys() {
  return (
    <section className="py-28 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">Student journeys</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Real student journeys.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {journeys.map((j) => (
            <article key={j.t} className="surface-card p-8 flex flex-col">
              <span className="self-start text-xs font-medium text-brand bg-brand/10 px-2.5 py-1 rounded-full">{j.tag}</span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{j.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{j.d}</p>
              <a href="#cta" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-brand transition-colors">
                Read the story <ArrowUpRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECTION 10 */
export function Institutions() {
  return (
    <section className="py-28">
      <div className="container-page">
        <div className="surface-card p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-brand bg-brand/10 px-3 py-1.5 rounded-full">
              <Building2 className="w-3.5 h-3.5" /> Institution partnerships
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Supporting institutions beyond admissions.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We collaborate with schools, colleges, and educational institutions through workshops, student
              engagement initiatives, career readiness programs, and transition support activities.
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <a href="tel:+91 8590210369" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 h-12 text-sm font-medium hover:bg-foreground/90 transition-colors">
              Partner with 4UPGRADE <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* SECTION 11 */
// const posts = [
//   { cat: "Career Planning", t: "Choosing a career when everything feels interesting", r: "5 min read" },
//   { cat: "Course Selection", t: "How to compare programs without getting overwhelmed", r: "7 min read" },
//   { cat: "Industry Insights", t: "The skills employers actually screen for in 2026", r: "6 min read" },
//   { cat: "Study Abroad", t: "Building an overseas plan that holds up under pressure", r: "8 min read" },
//   { cat: "Employability", t: "Your first LinkedIn profile, done right", r: "4 min read" },
// ];
// export function Resources() {
//   return (
//     <section id="resources" className="py-28 bg-surface">
//       <div className="container-page">
//         <div className="flex items-end justify-between flex-wrap gap-6">
//           <div className="max-w-2xl">
//             <p className="text-sm font-medium text-brand">Resource hub</p>
//             <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
//               Sharp thinking on careers, courses, and readiness.
//             </h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

/* SECTION 12 */
export function FinalCTA() {
  return (
    <section id="cta" className="py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-12 md:p-20 text-center">
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{ background: "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--brand) 55%, transparent), transparent 70%)" }}
          />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Ready to explore your <span className="text-gradient-brand">next step</span>?
            </h2>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Whether you're choosing a course, planning higher education, preparing for opportunities,
              or exploring overseas pathways — we're here to help.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-brand text-brand-foreground h-12 px-7 text-sm font-medium hover:opacity-90 transition-opacity">
                Book Consultation
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/25 h-12 px-7 text-sm font-medium hover:bg-white/5 transition-colors">
                Talk to our team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
