import type { MouseEvent, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToHash } from "./ScrollToRoute";

type SiteNavLinkProps = {
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  to: string;
};

export function SiteNavLink({ children, className, onClick, to }: SiteNavLinkProps) {
  const { pathname } = useLocation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !to.includes("#")) {
      return;
    }

    const [rawPath, rawHash] = to.split("#");
    const targetPath = rawPath || pathname;
    const targetHash = rawHash ? `#${rawHash}` : "";

    if (!targetHash || targetPath !== pathname) {
      return;
    }

    event.preventDefault();

    const nextUrl = `${pathname}${targetHash}`;
    if (`${pathname}${window.location.hash}` !== nextUrl) {
      window.history.pushState(null, "", nextUrl);
    }

    scrollToHash(targetHash);
  };

  return (
    <Link className={className} onClick={handleClick} to={to}>
      {children}
    </Link>
  );
}
