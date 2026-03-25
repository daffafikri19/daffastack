"use client";

import { socialMedia } from "@/lib/portfolio-config";
import { Icon, type IconName } from "./icons";

export const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex min-h-17.5 flex-col items-center justify-center p-4 text-center">
      <div className="mb-2 block w-full max-w-67.5 text-(--light-slate) md:hidden">
        <ul className="m-0 flex list-none items-center justify-between p-0">
          {socialMedia.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                aria-label={item.name}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-10 items-center justify-center"
              >
                <Icon name={item.name as IconName} className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="font-mono text-[12px] leading-none text-(--light-slate) space-y-1" tabIndex={-1}>
        <div>daffastack.dev &copy;{currentYear} | Made With <a href="https://nextjs.org" referrerPolicy="no-referrer">Next.js</a></div>
      </div>
    </footer>
  );
};
