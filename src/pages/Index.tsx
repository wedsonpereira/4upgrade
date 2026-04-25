import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { HeroVisual } from "@/components/site/HeroVisual";
import { ContactForm } from "@/components/site/ContactForm";
import {
  GraduationCap, Plane, Building2, FileText, Linkedin, MessageSquare,
  Compass, Globe2, Users, Briefcase, Target, Sparkles, MapPin, Layers,
  Search, ListChecks, LifeBuoy, Rocket, ArrowRight, CheckCircle2,
} from "lucide-react";

const audiences = [
  { icon: GraduationCap, title: "Students & Fresh Graduates", desc: "Get clarity on what to do next - from first internship to first job." },
  { icon: Plane, title: "Overseas Aspirants", desc: "IELTS preparation, profile readiness and structured guidance to study or work abroad." },
  { icon: Building2, title: "Institutes & Training Providers", desc: "Partner with us to add career outcomes to your existing programs." },
];

const studentServices = [
  { icon: FileText, label: "CV & resume optimisation" },
  { icon: Linkedin, label: "LinkedIn profile build" },
  { icon: MessageSquare, label: "Interview readiness" },
  { icon: Compass, label: "1:1 career guidance" },
  { icon: Globe2, label: "IELTS & overseas readiness" },
];

const instituteServices = [
  { icon: Users, label: "Career readiness workshops" },
  { icon: Briefcase, label: "Placement support programs" },
  { icon: Layers, label: "Structured batch training" },
];

const reasons = [
  { icon: Target, title: "Outcome-focused", desc: "Every step is tied to a real result - interviews, offers, admits." },
  { icon: Sparkles, title: "No-fluff support", desc: "Practical, structured, and built around your actual goals." },
  { icon: MapPin, title: "Tier 2 & 3 ready", desc: "Designed for students who don't have access to premium career help." },
  { icon: Rocket, title: "Real opportunities", desc: "We focus on what moves the needle - not generic advice." },
];

const steps = [
  { icon: Search, title: "Understand", desc: "We learn your goals, background and current status." },
  { icon: ListChecks, title: "Identify gaps", desc: "We pinpoint what's actually holding you back." },
  { icon: LifeBuoy, title: "Support", desc: "Structured help - CV, LinkedIn, interviews, IELTS, guidance." },
  { icon: Rocket, title: "Transition", desc: "You move into the role, program or country you wanted." },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="absolute inset-0 bg-gradient-radial opacity-70" />
        <div className="container-tight relative py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Career readiness, done right
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-teal">
              From Confusion to <span className="text-gradient-brand">Career Clarity</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Structured career readiness and transition support for students, overseas aspirants, and institutes.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="hero" size="lg">
                <a href="#contact">Get Started <ArrowRight /></a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#partner">Partner With Us</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 1:1 mentoring</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Outcome-driven</div>
            </div>
          </div>
          <div className="animate-fade-in">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section id="who" className="py-20 sm:py-28">
        <div className="container-tight">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Who we work with</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal">Built for the people who need real direction.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <div key={a.title} className="group p-7 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-elegant transition-smooth">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <a.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="py-20 sm:py-28 bg-secondary/40">
        <div className="container-tight">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What we do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal">Two clear tracks. One focused outcome.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">For Students</h3>
              </div>
              <ul className="space-y-3">
                {studentServices.map((s) => (
                  <li key={s.label} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                    <s.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-teal text-teal-foreground">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary-glow" />
                </div>
                <h3 className="text-xl font-semibold">For Institutes</h3>
              </div>
              <ul className="space-y-3">
                {instituteServices.map((s) => (
                  <li key={s.label} className="flex items-center gap-3 py-2 border-b border-white/10 last:border-0">
                    <s.icon className="h-4 w-4 text-primary-glow" />
                    <span className="text-sm">{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY 4UPGRADE */}
      <section id="why" className="py-20 sm:py-28">
        <div className="container-tight">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why 4upgrade</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal">Real support. Real outcomes. No noise.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="p-6 rounded-xl border border-border bg-card hover:shadow-elegant transition-smooth">
                <r.icon className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 sm:py-28 bg-secondary/40">
        <div className="container-tight">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal">A simple, structured path.</h2>
          </div>
          <div className="relative grid md:grid-cols-4 gap-6">
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30" />
            {steps.map((s, i) => (
              <div key={s.title} className="relative bg-card border border-border rounded-2xl p-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-brand text-primary-foreground flex items-center justify-center mb-4 shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-semibold text-primary mb-1">STEP 0{i + 1}</p>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section id="partner" className="py-20 sm:py-28">
        <div className="container-tight">
          <div className="rounded-3xl bg-teal text-teal-foreground p-10 sm:p-14 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-sm font-semibold text-primary-glow uppercase tracking-wider mb-3">Partner with us</p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Add real career outcomes to your program.</h2>
                <p className="text-white/70 leading-relaxed mb-6 max-w-lg">
                  We work with IELTS trainers, institutes, and overseas agencies to deliver structured career readiness - under your brand or co-branded.
                </p>
                <Button asChild variant="hero" size="lg">
                  <a href="#contact">Become a partner <ArrowRight /></a>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["IELTS trainers", "Institutes", "Overseas agencies", "Colleges"].map((p) => (
                  <div key={p} className="px-5 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                    <p className="font-medium">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 sm:py-28 bg-secondary/40">
        <div className="container-tight grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Get Started</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-4">Tell us where you are. We'll show you what's next.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Share a few details and our team will reach out with a structured plan tailored to your goals.
            </p>
            <ul className="space-y-3 text-sm">
              {["Free 15-min discovery call", "Structured next-step plan", "Honest, practical guidance"].map((b) => (
                <li key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {b}</li>
              ))}
            </ul>
            <div className="mt-8 p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold mb-1">Looking for job-ready help?</p>
              <p className="text-sm text-muted-foreground mb-3">Check our focused starter pack for job seekers.</p>
              <Button asChild variant="outline" size="sm">
                <Link to="/get-hired">View starter pack <ArrowRight /></Link>
              </Button>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
