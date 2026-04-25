import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const helps = [
  "CV / Resume review",
  "LinkedIn optimisation",
  "Interview readiness",
  "Career guidance",
  "IELTS / Overseas prep",
  "Institute partnership",
];

const statuses = ["Student", "Fresh graduate", "Working professional", "Overseas aspirant", "Institute / Trainer"];

export const ContactForm = ({ compact = false }: { compact?: boolean }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const toggle = (h: string) =>
    setSelected((s) => (s.includes(h) ? s.filter((x) => x !== h) : [...s, h]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSelected([]);
    }, 700);
  };

  return (
    <form onSubmit={onSubmit} className={`bg-card border border-border rounded-2xl ${compact ? "p-6 sm:p-8" : "p-8 sm:p-10"} shadow-premium space-y-5`}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" required type="tel" placeholder="+91 ..." />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" required type="email" placeholder="you@email.com" />
      </div>
      <div className="space-y-2">
        <Label>Current status</Label>
        <div className="flex flex-wrap gap-2">
          {statuses.map((s) => (
            <label key={s} className="cursor-pointer">
              <input type="radio" name="status" value={s} className="peer sr-only" required />
              <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-background peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary transition-smooth">
                {s}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label>What help do you need?</Label>
        <div className="grid sm:grid-cols-2 gap-2">
          {helps.map((h) => (
            <label key={h} className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border hover:border-primary/40 cursor-pointer transition-smooth has-[:checked]:bg-accent has-[:checked]:border-primary/50">
              <Checkbox checked={selected.includes(h)} onCheckedChange={() => toggle(h)} />
              <span className="text-sm">{h}</span>
            </label>
          ))}
        </div>
      </div>
      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit & Get Guidance"} <ArrowRight />
      </Button>
      <p className="text-xs text-center text-muted-foreground">We respect your privacy. No spam, ever.</p>
    </form>
  );
};
