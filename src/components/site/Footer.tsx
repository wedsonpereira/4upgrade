import { Logo } from "./Logo";
import { Linkedin, Instagram, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-secondary/40">
    <div className="container-tight py-12 grid gap-10 md:grid-cols-3">
      <div className="space-y-3">
        <Logo />
        <p className="text-sm text-muted-foreground max-w-xs">
          Career readiness and transition support - built for real outcomes.
        </p>
      </div>
      <div className="text-sm space-y-2">
        <p className="font-semibold text-foreground">Contact</p>
        <p className="text-muted-foreground">hello@4upgrade.in</p>
        <p className="text-muted-foreground">+91 8590210369</p>
      </div>
      <div className="text-sm space-y-2">
        <p className="font-semibold text-foreground">Connect</p>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/company/4upgrade" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-smooth"><Linkedin className="h-4 w-4" /></a>
          <a href="https://www.instagram.com/4upgrade.in" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-smooth"><Instagram className="h-4 w-4" /></a>
          <a href="mailto:hello@4upgrade.in" className="h-9 w-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-smooth"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container-tight py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>Copyright {new Date().getFullYear()} 4upgrade. All rights reserved.</p>
        <p>Made with intent. Built for outcomes.</p>
      </div>
    </div>
  </footer>
);
