import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { SiteNavLink } from "./SiteNavLink";

const links = [
  { href: "#who", label: "Who we serve" },
  { href: "#services", label: "What we do" },
  { href: "#why", label: "Why us" },
  { href: "#how", label: "How it works" },
];

export const Navbar = () => {
  const { pathname } = useLocation();
  const onAds = pathname.startsWith("/get-hired");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container-tight flex h-16 items-center justify-between">
        <Logo />
        {!onAds && (
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <SiteNavLink
                key={l.href}
                to={`/${l.href}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              >
                {l.label}
              </SiteNavLink>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-3">
          {onAds ? (
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link to="/">Main site</Link>
            </Button>
          ) : (
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link to="/get-hired">For job seekers</Link>
            </Button>
          )}
          <Button asChild variant="default" size="sm">
            <SiteNavLink to={onAds ? "/get-hired#form" : "/#contact"}>Get Started</SiteNavLink>
          </Button>
        </div>
      </div>
    </header>
  );
};
