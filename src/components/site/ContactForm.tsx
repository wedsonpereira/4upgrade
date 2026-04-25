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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    status: "",
    helpNeeded: [] as string[],
  });
  const [submitting, setSubmitting] = useState(false);

  const toggle = (h: string) =>
    setFormData((prev) => ({
      ...prev,
      helpNeeded: prev.helpNeeded.includes(h)
        ? prev.helpNeeded.filter((x) => x !== h)
        : [...prev.helpNeeded, h],
    }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = { ...formData };

    try {
      const response = await fetch("https://fourupgradebackend.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitting(false);
      toast.success("Thanks! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        status: "",
        helpNeeded: [],
      });
    } catch {
      setSubmitting(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className={`bg-card border border-border rounded-2xl ${compact ? "p-6 sm:p-8" : "p-8 sm:p-10"} shadow-premium space-y-5`}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            required
            type="tel"
            placeholder="+91 ..."
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          required
          type="email"
          placeholder="you@email.com"
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
        />
      </div>
      <div className="space-y-2">
        <Label>Current status</Label>
        <div className="flex flex-wrap gap-2">
          {statuses.map((s) => (
            <label key={s} className="cursor-pointer">
              <input
                type="radio"
                name="status"
                value={s}
                className="peer sr-only"
                required
                checked={formData.status === s}
                onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value }))}
              />
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
              <Checkbox checked={formData.helpNeeded.includes(h)} onCheckedChange={() => toggle(h)} />
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
