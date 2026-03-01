"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/portfolio-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconHex, IconLogo } from "./icons";
import { useScrollDirection } from "./hooks";

type NavProps = {
  isHome?: boolean;
};

export const Nav = ({ isHome = false }: NavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection(10);

  useEffect(() => {
    const onScroll = () => setScrolledToTop(window.pageYOffset < 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("hidden", menuOpen);
    return () => document.body.classList.remove("hidden");
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const headerClasses = cn(
    "fixed top-0 z-50 w-full px-6 md:px-10 lg:px-12",
    "h-[var(--nav-height)] transition-all duration-300",
    scrolledToTop ? "bg-transparent backdrop-blur-0" : "bg-[rgba(10,25,47,0.85)] backdrop-blur-[10px]",
    scrollDirection === "up" &&
    !scrolledToTop &&
    "h-[var(--nav-scroll-height)] translate-y-0 shadow-[0_10px_30px_-10px_var(--navy-shadow)]",
    scrollDirection === "down" &&
    !scrolledToTop &&
    "h-[var(--nav-scroll-height)] -translate-y-[var(--nav-scroll-height)] shadow-[0_10px_30px_-10px_var(--navy-shadow)]",
  );

  return (
    <header className={headerClasses}>
      <nav
        className="relative z-[52] mx-auto flex h-full w-full max-w-[1600px] items-center justify-between font-mono text-[color:var(--lightest-slate)]"
        aria-label="Main navigation"
      >
        <div tabIndex={-1}>
          <Link
            href={isHome ? "/" : "/"}
            aria-label="home"
            className="group relative block h-[42px] w-[42px] text-[color:var(--blue)] transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1"
          >
            <div className="absolute inset-0 -z-10 transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1 [&_svg]:size-full">
              <IconHex />
            </div>
            <div className="relative z-10 [&_svg]:size-full">
              <IconLogo />
            </div>
          </Link>
        </div>

        <div className="hidden items-center md:flex">
          <ol className="flex items-center gap-1">
            {navLinks.map((item, index) => (
              <li key={item.name} className="text-[13px]">
                <Link
                  href={item.url}
                  className="px-2.5 py-2 text-[color:var(--lightest-slate)] transition-colors hover:text-[color:var(--blue)]"
                >
                  <span className="mr-1.5 text-[11px] text-[color:var(--blue)]">{`0${index + 1}.`}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ol>
          <div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="ml-4 border-[color:var(--blue)] bg-transparent font-mono text-[color:var(--blue)] transition duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-[color:var(--blue)]/10 hover:text-[color:var(--blue)] hover:shadow-[3px_3px_0_0_var(--blue)]"
            >
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="relative z-[55] -mr-3 p-3 text-[color:var(--blue)]"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <div className="relative h-6 w-[var(--hamburger-width)]">
              <span
                className={cn(
                  "absolute right-0 top-1/2 h-[2px] w-[var(--hamburger-width)] -translate-y-1/2 rounded bg-[color:var(--blue)] transition-transform duration-200",
                  menuOpen && "rotate-[225deg]",
                )}
              />
              <span
                className={cn(
                  "absolute right-0 top-0 h-[2px] w-[120%] rounded bg-[color:var(--blue)] transition-all duration-200",
                  menuOpen && "top-1/2 w-full -translate-y-1/2 opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 right-0 h-[2px] w-[80%] rounded bg-[color:var(--blue)] transition-all duration-200",
                  menuOpen && "bottom-1/2 w-full translate-y-1/2 -rotate-90",
                )}
              />
            </div>
          </button>

          <div
            className={cn(
              "pointer-events-none fixed inset-0 z-[53] bg-[rgba(2,12,27,0.5)] backdrop-blur-sm opacity-0 transition-opacity duration-300",
              menuOpen && "pointer-events-auto opacity-100",
            )}
            onClick={() => setMenuOpen(false)}
          />

          <aside
            className={cn(
              "fixed bottom-0 right-0 top-0 z-[54] flex h-screen w-[min(75vw,400px)] translate-x-full items-center justify-center bg-[color:var(--light-navy)] px-3 py-12 shadow-[-10px_0_30px_-15px_var(--navy-shadow)] transition-transform duration-300",
              menuOpen && "translate-x-0",
            )}
            aria-hidden={!menuOpen}
          >
            <nav
              className="flex w-full flex-col items-center text-center text-[color:var(--lightest-slate)]"
              aria-label="Mobile navigation"
            >
              <ol className="m-0 w-full list-none p-0">
                {navLinks.map((item, index) => (
                  <li key={item.name} className="mb-4">
                    <Link
                      href={item.url}
                      className="block px-5 pb-5 pt-1 text-[clamp(14px,4vw,18px)]"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="mb-1 block text-sm text-[color:var(--blue)]">{`0${index + 1}.`}</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ol>

              <Button
                asChild
                variant="outline"
                className="mt-8 border-[color:var(--blue)] bg-transparent px-12 py-5 font-mono text-[color:var(--blue)] transition duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-[color:var(--blue)]/10 hover:text-[color:var(--blue)] hover:shadow-[3px_3px_0_0_var(--blue)]"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  Resume
                </a>
              </Button>
            </nav>
          </aside>
        </div>
      </nav>
    </header>
  );
};
