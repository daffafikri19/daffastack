"use client";

import type { CSSProperties, KeyboardEvent } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Job } from "@/lib/content";

type JobsTabsProps = {
  jobs: Job[];
};

export const JobsTabs = ({ jobs }: JobsTabsProps) => {
  const [activeTabId, setActiveTabId] = useState(0);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveTabId((prev) => (prev - 1 + jobs.length) % jobs.length);
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveTabId((prev) => (prev + 1) % jobs.length);
    }
  };

  return (
    <section id="experiences" className="mx-auto max-w-[900px] py-16 md:py-20 lg:py-24">
      <h2 className="numbered-heading">My Experiences</h2>

      <div className="block sm:flex">
        <div
          className="relative mb-8 -ml-[25px] flex w-[calc(100%+50px)] overflow-x-auto pl-[25px] sm:mb-0 sm:ml-0 sm:block sm:w-max sm:overflow-visible sm:pl-0"
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={onKeyDown}
          style={{ "--active-tab": String(activeTabId) } as CSSProperties}
        >
          {jobs.map((job, index) => (
            <button
              type="button"
              key={job.company}
              className={cn(
                "min-w-[120px] border-b-2 border-[color:var(--lightest-navy)] px-4 py-3 text-center font-mono text-[13px] text-[color:var(--slate)] transition sm:h-[var(--tab-height)] sm:w-full sm:border-b-0 sm:border-l-2 sm:px-5 sm:py-0 sm:text-left",
                "hover:bg-[color:var(--light-navy)]",
                activeTabId === index && "text-[color:var(--blue)]",
              )}
              onClick={() => setActiveTabId(index)}
              id={`tab-${index}`}
              role="tab"
              tabIndex={activeTabId === index ? 0 : -1}
              aria-selected={activeTabId === index}
              aria-controls={`panel-${index}`}
            >
              <span>{job.company}</span>
            </button>
          ))}

          <div
            className="absolute bottom-0 left-[25px] h-0.5 w-[var(--tab-width)] bg-[color:var(--blue)] transition-transform sm:hidden"
            style={{ transform: "translateX(calc(var(--active-tab) * var(--tab-width)))" }}
          />
          <div
            className="absolute left-0 top-0 hidden h-[var(--tab-height)] w-0.5 bg-[color:var(--blue)] transition-transform sm:block"
            style={{ transform: "translateY(calc(var(--active-tab) * var(--tab-height)))" }}
          />
        </div>

        <div className="relative w-full sm:ml-5">
          {jobs.map((job, index) => (
            <div
              key={`${job.company}-${job.range}`}
              className="w-full px-1 py-2.5"
              id={`panel-${index}`}
              role="tabpanel"
              tabIndex={activeTabId === index ? 0 : -1}
              aria-labelledby={`tab-${index}`}
              aria-hidden={activeTabId !== index}
              hidden={activeTabId !== index}
            >
              <h3 className="mb-1 text-[22px] font-medium leading-[1.3] text-[color:var(--lightest-slate)]">
                <span>{job.title}</span>
                {job.url ? (
                  <span className="text-[color:var(--blue)]">
                    {" @ "}
                    <a href={job.url} className="inline-link" target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                  </span>
                ) : (
                  <span className="text-[color:var(--blue)]"> @ {job.company}</span>
                )}
              </h3>

              <p className="mb-6 font-mono text-[13px] text-[color:var(--light-slate)]">{job.range}</p>
              <p className="pt-1 text-[18px] font-medium leading-[1.3] text-[color:var(--lightest-slate)]">Key of Contributions:</p>
              <div
                className="text-[18px] [&_ul]:m-0 [&_ul]:list-none [&_ul]:p-0 [&_ul_li]:relative [&_ul_li]:mb-2.5 [&_ul_li]:pl-7 [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:top-[0.5em] [&_ul_li]:before:h-0 [&_ul_li]:before:w-0 [&_ul_li]:before:-translate-y-1/2 [&_ul_li]:before:border-y-[4px] [&_ul_li]:before:border-y-transparent [&_ul_li]:before:border-l-[6px] [&_ul_li]:before:border-l-[color:var(--blue)]"
                dangerouslySetInnerHTML={{ __html: job.html }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
