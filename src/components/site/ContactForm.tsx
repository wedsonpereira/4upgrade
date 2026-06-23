import { useState } from "react";
import { z } from "zod";
import {
  Mail,
  Phone,
  User,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Match the same schema used on the server ─────────────────────────────────
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  stage: z.string().trim().min(1, "Please select your stage"),
  interests: z.array(z.string()).min(1, "Pick at least one area"),
  message: z.string().trim().max(600).optional(),
});

const INTERESTS = [
  "Career Direction",
  "Psychometric & Aptitude",
  "Profile Building",
  "Interview Readiness",
  "LinkedIn & Resume",
  "Study Abroad Guidance",
  "Workshops",
  "Parent Consultation",
] as const;

const STAGES = [
  "Class 9–10",
  "Class 11–12",
  "Undergraduate",
  "Postgraduate",
  "Working Professional",
  "Parent",
];

// Read the API URL from Vite env (falls back to localhost for dev)
const API_URL = (
  import.meta.env.VITE_API_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

interface ContactFormProps {
  /** When true, renders a more compact single-column layout */
  compact?: boolean;
}

export function ContactForm({ compact = false }: ContactFormProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState("");

  const toggle = (interest: string) =>
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((x) => x !== interest)
        : [...prev, interest],
    );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      stage: String(fd.get("stage") ?? ""),
      interests: selected,
      message: String(fd.get("message") ?? ""),
    };

    // Client-side validation first
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        errs[String(issue.path[0])] = issue.message;
      });
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success) {
        setStatus("success");
        setServerMessage(json.message ?? "We'll be in touch soon!");
      } else if (res.status === 422 && json.errors) {
        // Server-side field errors
        setErrors(json.errors);
        setStatus("idle");
      } else {
        setStatus("error");
        setServerMessage(
          json.message ??
            json.error ??
            "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "Could not reach the server. Please check your connection and try again.",
      );
    }
  };

  // ── Success state ─────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-12 px-6 rounded-2xl border border-border bg-card">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 animate-in zoom-in-50">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Thanks — we've got it!
        </h3>
        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
          {serverMessage}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => {
            setStatus("idle");
            setSelected([]);
            setServerMessage("");
          }}
        >
          Send another enquiry <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={`space-y-6 rounded-2xl border border-border bg-card p-6 sm:p-8 ${compact ? "max-w-2xl mx-auto" : ""}`}
    >
      {/* Interests */}
      <div>
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          What are you looking for? <span className="text-destructive">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((interest) => {
            const active = selected.includes(interest);
            return (
              <button
                key={interest}
                type="button"
                onClick={() => toggle(interest)}
                className={`px-3.5 py-2 rounded-full text-sm border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background text-foreground border-border hover:border-primary/50 hover:text-primary"
                }`}
              >
                {interest}
              </button>
            );
          })}
        </div>
        {errors.interests && (
          <p className="mt-2 text-xs text-destructive">{errors.interests}</p>
        )}
      </div>

      {/* Fields */}
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field
          label="Full name"
          name="name"
          icon={<User className="h-4 w-4" />}
          error={errors.name}
          placeholder="Jane Doe"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          icon={<Mail className="h-4 w-4" />}
          error={errors.email}
          placeholder="you@email.com"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          icon={<Phone className="h-4 w-4" />}
          error={errors.phone}
          placeholder="+91 98765 43210"
        />

        {/* Stage select */}
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Your stage <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <select
              name="stage"
              defaultValue=""
              className="w-full h-11 pl-9 pr-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            >
              <option value="" disabled>
                Select…
              </option>
              {STAGES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          {errors.stage && (
            <p className="mt-1.5 text-xs text-destructive">{errors.stage}</p>
          )}
        </div>
      </div>

      {/* Optional message */}
      <div>
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
          Anything specific?{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={4}
          maxLength={600}
          placeholder="Tell us a little about your goals or current situation…"
          className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
        />
      </div>

      {/* Server error */}
      {status === "error" && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {serverMessage}
        </div>
      )}

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Button
          type="submit"
          variant="hero"
          size="lg"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Request a callback <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
        <p className="text-xs text-muted-foreground">
          By submitting you agree to be contacted by 4UPGRADE about your
          enquiry.
        </p>
      </div>
    </form>
  );
}
