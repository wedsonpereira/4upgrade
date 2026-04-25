import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { SiteNavLink } from "@/components/site/SiteNavLink";
import { ArrowRight, MessageCircle, XCircle, CheckCircle2, FileText, Linkedin, MessageSquare, Compass } from "lucide-react";

const problems = [
  "Applied to dozens of jobs - no response",
  "Not sure if your CV is good enough",
  "LinkedIn isn't bringing in opportunities",
  "Interview rejections without clear feedback",
];

const offerItems = [
  { icon: FileText, label: "CV rebuilt for ATS + recruiters" },
  { icon: Linkedin, label: "LinkedIn profile that pulls inbound" },
  { icon: MessageSquare, label: "Interview basics - answers that land" },
  { icon: Compass, label: "1:1 guidance from a real mentor" },
];

const GetHired = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="absolute inset-0 bg-gradient-radial opacity-70" />
        <div className="container-tight relative py-20 sm:py-24 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium">
              Job Readiness Starter Pack
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-teal">
              Not getting interview calls? <span className="text-gradient-brand">Fix what's actually holding you back.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              We help you improve your CV, LinkedIn, and interview readiness - so you start getting real responses.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="hero" size="lg">
                <SiteNavLink to="/get-hired#form">Get my profile reviewed <ArrowRight /></SiteNavLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer"><MessageCircle /> Chat on WhatsApp</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-premium space-y-3">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">What you get</p>
              {offerItems.map((o) => (
                <div key={o.label} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                  <div className="h-8 w-8 rounded-md bg-accent flex items-center justify-center">
                    <o.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{o.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20">
        <div className="container-tight max-w-4xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Sound familiar?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-10">If any of this feels like you - you're not alone.</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((p) => (
              <div key={p} className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
                <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-sm">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 bg-teal text-teal-foreground">
        <div className="container-tight max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary-glow uppercase tracking-wider mb-4">The fix</p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            We don't just edit your CV. <br />
            <span className="text-primary-glow">We fix your job readiness.</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            A focused 1:1 program that addresses every weak spot recruiters see - so the response rate actually changes.
          </p>
        </div>
      </section>

      {/* OFFER */}
      <section className="py-20">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The offer</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-4">Job Readiness Starter Pack</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Everything you need to go from "applying and waiting" to "getting interview calls" - built around your profile and target roles.
              </p>
              <ul className="space-y-3">
                {[
                  "ATS-optimised CV rebuild",
                  "LinkedIn profile rewrite + strategy",
                  "Interview prep - answers, structure, mindset",
                  "1:1 mentor guidance throughout",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-brand p-8 sm:p-10 text-primary-foreground shadow-premium">
              <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Starter Pack</p>
              <p className="text-5xl font-bold mb-1">Custom</p>
              <p className="opacity-80 mb-6">Pricing based on your goals & timeline.</p>
              <Button asChild variant="secondary" size="lg" className="w-full">
                <a href="tel:+918590210369">Talk to our team <ArrowRight /></a>
              </Button>
              <p className="text-xs opacity-70 mt-4 text-center">Free 15-min discovery call included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-20 bg-secondary/40">
        <div className="container-tight max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Get started</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal">Tell us about your situation.</h2>
            <p className="text-muted-foreground mt-3">We'll review your profile and reach out within 24 hours.</p>
          </div>
          <ContactForm compact />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="container-tight max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-teal mb-6">Stop guessing. <span className="text-gradient-brand">Start getting responses.</span></h2>
          <Button asChild variant="hero" size="xl">
            <SiteNavLink className="p-3" to="/get-hired#form">Get my profile reviewed <ArrowRight /></SiteNavLink>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetHired;
