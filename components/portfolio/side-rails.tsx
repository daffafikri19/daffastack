import { email, socialMedia } from "@/lib/portfolio-config";
import { Icon, type IconName } from "./icons";

export const SocialRail = () => (
  <div
    className="fixed bottom-0 left-5 z-40 hidden w-10 text-(--light-slate) lg:block"
    aria-label="Social links"
  >
    <ul className="m-0 flex list-none flex-col items-center p-0 after:mx-auto after:mt-1 after:block after:h-22.5 after:w-px after:bg-(--light-slate)">
      {socialMedia.map((item, index) => (
        <li key={item.name} className={index === socialMedia.length - 1 ? "mb-5" : ""}>
          <a
            href={item.url}
            aria-label={item.name}
            target="_blank"
            rel="noreferrer"
            className="inline-flex size-10 items-center justify-center transition-transform duration-200 hover:-translate-y-1"
          >
            <Icon name={item.name as IconName} className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const EmailRail = () => (
  <div
    className="fixed bottom-0 right-5 z-40 hidden w-10 text-(--light-slate) lg:block"
    aria-label="Email address"
  >
    <div className="flex flex-col items-center after:mx-auto after:block after:h-22.5 after:w-px after:bg-(--light-slate)">
      <a
        href={`mailto:${email}`}
        target="_blank"
        className="my-5 p-2.5 font-mono text-[12px] leading-4.5 tracking-widest [writing-mode:vertical-rl] transition-transform duration-200 hover:-translate-y-1"
      >
        {email}
      </a>
    </div>
  </div>
);