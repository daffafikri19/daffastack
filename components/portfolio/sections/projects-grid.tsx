"use client";

import Link from "next/link";
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
      <h2 className="text-center text-[clamp(24px,5vw,var(--fz-heading))] text-[color:var(--lightest-slate)]">
        Other Projects
      </h2>

      <ul className="mt-12 grid w-full list-none gap-4 p-0 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {projectsToShow.map((project) => (
          <li key={project.title} className="group relative">
            <div className="flex h-full flex-col justify-between overflow-auto rounded-[var(--border-radius)] bg-[color:var(--light-navy)] px-7 py-8 shadow-[0_10px_30px_-15px_var(--navy-shadow)] transition duration-200 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_30px_-15px_var(--navy-shadow)]">
              <header>
                <div className="mb-8 flex items-center justify-between">
                  <div className="text-[color:var(--blue)]">
                    <Icon name="Folder" className="size-10" />
                  </div>
                  <div className="-mr-2 flex items-center text-[color:var(--light-slate)]">
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
                        <Icon name="External" className="size-[22px]" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <h3 className="mb-2.5 text-[22px] text-[color:var(--lightest-slate)]">
                  <a href={project.external ?? project.github ?? "#"} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>

                <div
                  className="text-[17px] text-[color:var(--light-slate)] [&_a]:inline-link"
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
                          className="border-transparent bg-[color:var(--lightest-navy)] px-2 py-1 font-mono text-[10px] text-[color:var(--lightest-slate)]"
                        >
                          {item}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </footer>
            </div>
          </li>
        ))}
      </ul>

      {projects.length > GRID_LIMIT && (
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="mt-16 border-[color:var(--blue)] bg-transparent font-mono text-[color:var(--blue)] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:bg-[color:var(--blue)]/10 hover:text-[color:var(--blue)] hover:shadow-[4px_4px_0_0_var(--blue)]"
          onClick={() => setShowMore((state) => !state)}
        >
          Show {showMore ? "Less" : "More"}
        </Button>
      )}

    </section>
  );
};
