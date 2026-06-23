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

const interests = [
  "Career Direction",
  "Psychometric & Aptitude",
  "Profile Building",
  "Interview Readiness",
  "LinkedIn & Resume",
  "Study Abroad Guidance",
  "Workshops",
  "Parent Consultation",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  stage: z.string().trim().min(1, "Select your stage"),
  interests: z.array(z.string()).min(1, "Pick at least one"),
  message: z.string().trim().max(600).optional(),
});

const stages = [
  "Class 9–10",
  "Class 11–12",
  "Undergraduate",
  "Postgraduate",
  "Working Professional",
  "Parent",
];

const API_URL = (
  import.meta.env.VITE_API_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState("");

  const toggle = (i: string) =>
    setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      stage: String(fd.get("stage") || ""),
      interests: selected,
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
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
        setSubmitted(true);
        setServerMessage(json.message ?? "We'll be in touch soon!");
      } else if (res.status === 422 && json.errors) {
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

  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container-page grid lg:grid-cols-5 gap-14">
        <div className="lg:col-span-2">
          <p className="text-sm font-medium text-brand">Get in touch</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Tell us where you are.
            <br />
            We'll show you what's next.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Share a few details and the areas you'd like support with. A
            4UPGRADE mentor will get back within one working day.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <a
              href="mailto:hello@4upgrade.in"
              className="flex items-center gap-3 text-foreground hover:text-brand transition-colors"
            >
              <Mail className="size-4 text-muted-foreground" />{" "}
              hello@4upgrade.in
            </a>
            <a
              href="tel:+91 8590210369"
              className="flex items-center gap-3 text-foreground hover:text-brand transition-colors"
            >
              <Phone className="size-4 text-muted-foreground" /> +91 85902 10369
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="surface-card p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto size-14 rounded-full bg-brand/10 grid place-items-center">
                  <CheckCircle2 className="size-7 text-brand" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  Thanks — we've got it.
                </h3>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  {serverMessage ||
                    "A 4UPGRADE mentor will reach out within one working day to plan your next step."}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSelected([]);
                    setStatus("idle");
                    setServerMessage("");
                  }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-border text-sm font-medium px-5 h-10 hover:bg-background transition-colors"
                >
                  Send another <ArrowRight className="size-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    What are you looking for? *
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {interests.map((i) => {
                      const on = selected.includes(i);
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => toggle(i)}
                          className={`px-3.5 py-2 rounded-full text-sm border transition-all ${
                            on
                              ? "bg-foreground text-background border-foreground"
                              : "bg-background text-foreground border-border hover:border-foreground"
                          }`}
                        >
                          {i}
                        </button>
                      );
                    })}
                  </div>
                  {errors.interests && (
                    <p className="mt-2 text-xs text-destructive">
                      {errors.interests}
                    </p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Full name"
                    name="name"
                    icon={<User className="size-4" />}
                    error={errors.name}
                    placeholder="Jane Doe"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    icon={<Mail className="size-4" />}
                    error={errors.email}
                    placeholder="you@email.com"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    icon={<Phone className="size-4" />}
                    error={errors.phone}
                    placeholder="+91 ..."
                  />
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Your stage *
                    </label>
                    <div className="mt-2 relative">
                      <GraduationCap className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <select
                        name="stage"
                        defaultValue=""
                        className="w-full h-11 pl-9 pr-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-foreground"
                      >
                        <option value="" disabled>
                          Select…
                        </option>
                        {stages.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    {errors.stage && (
                      <p className="mt-1.5 text-xs text-destructive">
                        {errors.stage}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Anything specific? (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={600}
                    placeholder="Tell us a little about your goals or questions…"
                    className="mt-2 w-full rounded-lg border border-border bg-background p-3 text-sm focus:outline-none focus:border-foreground resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">{serverMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-6 h-11 hover:bg-foreground/90 transition-colors disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request a callback <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by 4UPGRADE about
                  your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  icon,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  icon: React.ReactNode;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <div className="mt-2 relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full h-11 pl-9 pr-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-foreground"
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
