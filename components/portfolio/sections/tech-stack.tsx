import type { CSSProperties } from "react";
import { TechStackIcon, getTechIconAccent } from "@/components/portfolio/tech-stack-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { techStackContent } from "@/lib/portfolio-config";
import { cn } from "@/lib/utils";

type TechGroup = (typeof techStackContent.groups)[number];
type TechItem = TechGroup["items"][number];

const TechStackIconItem = ({ item }: { item: TechItem }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        type="button"
        aria-label={item.note ? `${item.name}, ${item.note}` : item.name}
        style={{ "--tech-accent": getTechIconAccent(item.icon) } as CSSProperties}
        className={cn(
          "group/icon relative flex size-18 items-center justify-center rounded-2xl border border-transparent bg-transparent",
          "text-(--tech-accent) transition duration-200",
          "hover:-translate-y-1 hover:border-(--blue)/20 hover:bg-(--light-navy)/45 hover:shadow-[0_18px_34px_-20px_rgba(87,203,255,0.24)]",
          "focus-visible:-translate-y-1 focus-visible:border-(--blue)/20 focus-visible:bg-(--light-navy)/45 focus-visible:outline-none focus-visible:shadow-[0_18px_34px_-20px_rgba(87,203,255,0.24)]",
        )}
      >
        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(87,203,255,0.12),transparent_62%)] opacity-0 transition duration-200 group-hover/icon:opacity-100 group-focus-visible/icon:opacity-100" />
        <TechStackIcon name={item.icon} className="relative z-10 size-[2.3rem] transition duration-200" />

        {item.note ? (
          <span className="absolute right-1.5 top-1.5 rounded-full border border-(--blue)/30 bg-(--navy)/92 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-(--blue)">
            VC
          </span>
        ) : null}
      </button>
    </TooltipTrigger>

    <TooltipContent
      side="top"
      sideOffset={10}
      className="border border-(--lightest-navy) bg-(--light-navy)/96 px-3 py-2 text-(--lightest-slate) shadow-[0_18px_45px_-24px_rgba(2,12,27,0.9)] backdrop-blur-md"
    >
      <div>
        <p className="text-[13px] font-medium leading-none text-center">{item.name}</p>
        {item.note ? <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-(--blue)">{item.note}</p> : null}
      </div>
    </TooltipContent>
  </Tooltip>
);

const TechGroupRow = ({ group }: { group: TechGroup }) => (
  <div className="border-b border-(--lightest-navy)/45 pb-10 last:border-b-0 last:pb-0">
    <h3 className="font-mono text-[clamp(20px,4vw,28px)] font-semibold uppercase tracking-[0.12em] text-(--lightest-slate)">
      {group.title}
    </h3>
    <p className="mt-3 max-w-3xl text-[15px] leading-[1.8] text-(--slate)">{group.description}</p>

    <ul className="mt-6 flex list-none flex-wrap gap-x-5 gap-y-4 p-0 md:gap-x-6 md:gap-y-5">
      {group.items.map((item) => (
        <li key={`${group.title}-${item.name}`}>
          <TechStackIconItem item={item} />
        </li>
      ))}
    </ul>
  </div>
);

export const TechStack = () => (
  <section id="tech-stack" className="mx-auto max-w-225 py-16 md:py-20 lg:py-24">
    <h2 className="numbered-heading">{techStackContent.heading}</h2>

    <TooltipProvider delayDuration={60}>
      <div className="space-y-10">
        {techStackContent.groups.map((group) => (
          <TechGroupRow key={group.title} group={group} />
        ))}
      </div>
    </TooltipProvider>
  </section>
);
