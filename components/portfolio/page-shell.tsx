import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Nav } from "./nav";
import { EmailRail, SocialRail } from "./side-rails";

type PageShellProps = {
  isHome?: boolean;
  children: ReactNode;
};

export const PageShell = ({ isHome = false, children }: PageShellProps) => (
  <div className="grid min-h-screen grid-rows-[1fr_auto] grid-cols-1">
    <Nav isHome={isHome} />
    <SocialRail />
    <EmailRail />

    <div id="content">
      {children}
      <Footer />
    </div>
  </div>
);
