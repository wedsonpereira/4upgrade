import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp, Briefcase, Home, Mail, Menu, Route, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SiteNavLink } from "./SiteNavLink";

const homeLinks = [
  { href: "/#who", label: "Who we serve", icon: Route },
  { href: "/#services", label: "What we do", icon: Briefcase },
  { href: "/#why", label: "Why us", icon: ArrowUp },
  { href: "/#how", label: "How it works", icon: Route },
  { href: "/#contact", label: "Contact", icon: Mail },
  { href: "/get-hired", label: "For job seekers", icon: Briefcase },
];

const getHiredLinks = [
  { href: "/", label: "Main site", icon: Home },
  { href: "/get-hired#form", label: "Profile review", icon: Mail },
  { href: "/get-hired", label: "Starter pack", icon: Briefcase },
];

export function FloatingNavMenu() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const isGetHired = pathname.startsWith("/get-hired");
  const links = isGetHired ? getHiredLinks : homeLinks;

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, Math.round((scrollTop / scrollable) * 100)) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <div
        className={cn(
          "w-64 origin-bottom-right rounded-2xl border border-border bg-card/95 p-2 shadow-premium backdrop-blur transition-all duration-200",
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0",
        )}
      >
        <div className="mb-1 flex items-center justify-between px-3 py-2">
          <p className="text-xs font-semibold uppercase text-primary">Navigate</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
        <nav className="grid gap-1">
          {links.map((item) => (
            <SiteNavLink
              key={`${item.href}-${item.label}`}
              to={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-4 w-4" />
              </span>
              {item.label}
            </SiteNavLink>
          ))}
        </nav>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="relative grid h-16 w-16 place-items-center rounded-full text-primary-foreground shadow-glow transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        style={{
          background: `conic-gradient(hsl(var(--primary)) ${progress * 3.6}deg, hsl(var(--border)) 0deg)`,
        }}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        <span className="absolute inset-1 rounded-full bg-gradient-brand" />
        <span className="relative grid h-12 w-12 place-items-center rounded-full bg-teal text-primary-foreground">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </span>
        <span className="sr-only">{progress}% scrolled</span>
      </button>
    </div>
  );
}
