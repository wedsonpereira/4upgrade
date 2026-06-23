import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#journey", label: "Journey" },
  { href: "#services", label: "Services" },
  { href: "#readiness", label: "Readiness" },
  { href: "#psychometric", label: "Test" },
  { href: "#workshops", label: "Workshops" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
        ? "backdrop-blur-xl bg-background/75 border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="4UPGRADE" width={36} height={36} className="rounded-sm" />
          <span className="font-bold tracking-tight text-foreground text-lg">4UPGRADE</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-foreground text-background text-sm font-medium px-4 h-9 hover:bg-foreground/90 transition-colors"
        >
          Book Consultation
        </a>
      </div>
    </header>
  );
}
