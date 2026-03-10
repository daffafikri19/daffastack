"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "../icons";

type ProjectsGridProps = {
  projects: Project[];
};

const GRID_LIMIT = 6;

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [showMore, setShowMore] = useState(false);

  const projectsToShow = useMemo(
    () => (showMore ? projects : projects.slice(0, GRID_LIMIT)),
    [projects, showMore],
  );

  return (
    <section className="flex flex-col items-center py-16 md:py-20 lg:py-24">
      <h2 className="text-center text-[clamp(24px,5vw,var(--fz-heading))] text-(--lightest-slate)">
        Other Projects
      </h2>

      <ul className="mt-12 grid w-full list-none gap-4 p-0 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {projectsToShow.map((project) => (
          <li key={project.title} className="group relative">
            <div className="flex h-full flex-col overflow-hidden rounded-(--border-radius) border border-(--lightest-navy)/75 bg-(--light-navy) shadow-[0_10px_30px_-15px_var(--navy-shadow)] transition duration-200 group-hover:-translate-y-1.5 group-hover:border-(--blue)/40 group-hover:shadow-[0_20px_35px_-15px_var(--navy-shadow)]">
              <div className="relative overflow-hidden border-b border-(--lightest-navy)/75 bg-(--lightest-navy)/20">
                {project.thumbnail ? (
                  <>
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      width={640}
                      height={360}
                      className="absolute inset-0 h-44 w-full scale-110 object-cover blur-sm brightness-[0.45]"
                      aria-hidden="true"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-linear-to-b from-(--navy)/20 via-(--navy)/45 to-(--navy)/70" />
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      width={640}
                      height={360}
                      className="relative z-10 h-44 w-full object-contain px-3 py-2 transition duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </>
                ) : (
                  <div className="relative flex h-44 items-center justify-center bg-[radial-gradient(circle_at_top,rgba(87,203,255,0.18),rgba(10,25,47,0.9)_62%)]">
                    <div className="flex items-center gap-3 rounded-full border border-(--blue)/35 bg-(--navy)/70 px-4 py-2 text-(--blue)">
                      <Icon name="Folder" className="size-6" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Thumbnail Soon</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex h-full flex-col justify-between px-7 py-6">
                <header>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="text-(--blue)">
                      <Icon name="Folder" className="size-9" />
                    </div>
                    <div className="-mr-2 flex items-center text-(--light-slate)">
                      {project.github ? (
                        <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer" className="p-1.5">
                          <Icon name="GitHub" className="size-5" />
                        </a>
                      ) : null}
                      {project.external ? (
                        <a
                          href={project.external}
                          aria-label="External Link"
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5"
                        >
                          <Icon name="External" className="size-5.5" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <h3 className="mb-2.5 text-[22px] text-(--lightest-slate)">
                    <a href={project.external ?? project.github ?? "#"} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>

                  <div
                    className="text-[17px] text-(--light-slate) [&_a]:inline-link"
                    dangerouslySetInnerHTML={{ __html: project.html }}
                  />
                </header>

                <footer>
                  {project.tech.length > 0 ? (
                    <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
                      {project.tech.map((item) => (
                        <li key={`${project.title}-${item}`}>
                          <Badge
                            variant="secondary"
                            className="border-transparent bg-(--lightest-navy) px-2 py-1 font-mono text-[10px] text-(--lightest-slate)"
                          >
                            {item}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </footer>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {projects.length > GRID_LIMIT && (
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="mt-16 border-(--blue) bg-transparent font-mono text-(--blue) hover:-translate-x-1.5 hover:-translate-y-1.5 hover:bg-(--blue)/10 hover:text-(--blue) hover:shadow-[4px_4px_0_0_var(--blue)]"
          onClick={() => setShowMore((state) => !state)}
        >
          Show {showMore ? "Less" : "More"}
        </Button>
      )}

    </section>
  );
};
