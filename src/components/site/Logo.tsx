import { Link } from "react-router-dom";
import logo from "@/assets/4upgrade.png";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex h-16 w-32 shrink-0 items-center overflow-hidden sm:w-40 lg:w-48">
    <span className={`inline-flex w-full items-center ${light ? "brightness-0 invert" : ""}`}>
      <img src={logo} alt="4upgrade" className="h-auto w-full object-contain" />
    </span>
  </Link>
);
