"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
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
  const mobileNavItemClass =
    "group flex w-full items-center gap-3 rounded-xl border border-[color:var(--lightest-navy)]/80 bg-[rgba(10,25,47,0.45)] px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--blue)]/70 hover:bg-[rgba(17,34,64,0.92)]";
  const resolveNavHref = (url: string) => (isHome && url.startsWith("/#") ? url.slice(1) : url);
  const navOffset = () => {
    const root = getComputedStyle(document.documentElement);
    const raw = root.getPropertyValue("--nav-scroll-height").trim();
    const parsed = Number.parseInt(raw.replace("px", ""), 10);
    return Number.isFinite(parsed) ? parsed + 12 : 82;
  };

  const handleHashNav = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    setMenuOpen(false);

    const target = document.querySelector(href);
    if (!(target instanceof HTMLElement)) return;

    const top = target.getBoundingClientRect().top + window.scrollY - navOffset();
    window.history.replaceState(null, "", href);
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setScrolledToTop(window.pageYOffset < 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
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
        className="relative z-52 mx-auto flex h-full w-full max-w-400 items-center justify-between font-mono text-(--lightest-slate)"
        aria-label="Main navigation"
      >
        <div tabIndex={-1}>
          <Link
            href={isHome ? "/" : "/"}
            aria-label="home"
            className="group relative block h-10.5 w-10.5 text-(--blue) transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1"
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
                {resolveNavHref(item.url).startsWith("#") ? (
                  <a
                    href={resolveNavHref(item.url)}
                    className="px-2.5 py-2 text-(--lightest-slate) transition-colors hover:text-(--blue)"
                    onClick={(event) => handleHashNav(event, resolveNavHref(item.url))}
                  >
                    <span className="mr-1.5 text-[11px] text-(--blue)">{`0${index + 1}.`}</span>
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={resolveNavHref(item.url)}
                    className="px-2.5 py-2 text-(--lightest-slate) transition-colors hover:text-(--blue)"
                  >
                    <span className="mr-1.5 text-[11px] text-(--blue)">{`0${index + 1}.`}</span>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
          <div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="ml-4 border-(--blue) bg-transparent font-mono text-(--blue) transition duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-(--blue)/10 hover:text-(--blue) hover:shadow-[3px_3px_0_0_var(--blue)]"
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
            className="relative z-55 -mr-2 rounded-md p-2 text-(--blue) transition-colors hover:bg-(--lightest-navy)/50"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <div className="relative h-7 w-8">
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-full rounded bg-(--blue) transition-all duration-200",
                  menuOpen && "top-1/2 -translate-y-1/2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-(--blue) transition-all duration-200",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-1.5 left-0 h-0.5 w-full rounded bg-(--blue) transition-all duration-200",
                  menuOpen && "bottom-1/2 translate-y-1/2 -rotate-45",
                )}
              />
            </div>
          </button>

          <div
            className={cn(
              "pointer-events-none fixed inset-0 z-53 bg-[rgba(2,12,27,0.72)] opacity-0 transition-opacity duration-300",
              menuOpen && "pointer-events-auto opacity-100",
            )}
            onClick={() => setMenuOpen(false)}
          />

          <aside
            className={cn(
              "fixed bottom-0 right-0 top-0 z-54 flex h-screen w-[min(82vw,420px)] translate-x-full items-center bg-(--light-navy) px-4 py-20 shadow-[-10px_0_30px_-15px_var(--navy-shadow)] transition-transform duration-300",
              menuOpen && "translate-x-0",
            )}
            aria-hidden={!menuOpen}
            id="mobile-nav-panel"
          >
            <nav
              className="flex w-full flex-col text-(--lightest-slate)"
              aria-label="Mobile navigation"
            >

              <ol className="m-0 grid w-full list-none gap-3 p-0">
                {navLinks.map((item, index) => (
                  <li key={item.name}>
                    {resolveNavHref(item.url).startsWith("#") ? (
                      <a
                        href={resolveNavHref(item.url)}
                        className={mobileNavItemClass}
                        onClick={(event) => handleHashNav(event, resolveNavHref(item.url))}
                      >
                        <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-(--blue)/25 bg-[rgba(10,25,47,0.9)] font-mono text-sm text-(--blue)">
                          {`0${index + 1}.`}
                        </span>
                        <span className="text-[clamp(16px,4.2vw,20px)] font-semibold tracking-[0.01em] text-(--lightest-slate) transition-colors group-hover:text-(--blue)">
                          {item.name}
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={resolveNavHref(item.url)}
                        className={mobileNavItemClass}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-(--blue)/25 bg-[rgba(10,25,47,0.9)] font-mono text-sm text-(--blue)">
                          {`0${index + 1}.`}
                        </span>
                        <span className="text-[clamp(16px,4.2vw,20px)] font-semibold tracking-[0.01em] text-(--lightest-slate) transition-colors group-hover:text-(--blue)">
                          {item.name}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ol>

              <Button
                asChild
                variant="outline"
                className="mt-8 w-full border-(--blue) bg-transparent py-6 font-mono text-[17px] text-(--blue) transition duration-200 hover:bg-(--blue)/10 hover:text-(--blue)"
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
