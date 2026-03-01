import Image from "next/image";
import type { FeaturedProject } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "../icons";

type FeaturedProjectsProps = {
  projects: FeaturedProject[];
};

export const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => (
  <section id="projects" className="py-16 md:py-20 lg:py-24">
    <h2 className="numbered-heading">My Featured Projects</h2>

    <ul className="m-0 list-none p-0">
      {projects.map((project, index) => {
        const isOdd = index % 2 === 0;

        return (
          <li
            key={project.title}
            className={cn(
              "relative grid items-center gap-2.5 md:grid-cols-12",
              "mb-8 md:mb-16 lg:mb-24",
            )}
          >
            <div
              className={cn(
                "relative z-[5] md:row-[1/-1]",
                "rounded-[var(--border-radius)] p-6 md:rounded-none md:p-0",
                "bg-[color:var(--light-navy)]/85 backdrop-blur-[1px] md:bg-transparent",
                "md:col-span-7",
                isOdd ? "md:col-start-7 md:text-right" : "md:col-start-1 md:text-left",
              )}
            >
              <Badge
                variant="outline"
                className={cn(
                  "mb-3 border-[color:var(--blue)]/40 bg-[color:var(--blue)]/10 font-mono text-[11px] text-[color:var(--blue)]",
                  isOdd && "md:ml-auto",
                )}
              >
                Featured Project
              </Badge>

              <h3 className="text-[clamp(24px,5vw,28px)] font-semibold text-[color:var(--lightest-slate)]">
                <a href={project.external ?? project.github ?? "#"} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h3>

              <div
                className="mt-4 rounded-[var(--border-radius)] bg-[color:var(--light-navy)] p-5 text-[18px] text-[color:var(--light-slate)] shadow-[0_10px_30px_-15px_var(--navy-shadow)] md:p-6 [&_a]:inline-link"
                dangerouslySetInnerHTML={{ __html: project.html }}
              />

              {project.tech.length > 0 ? (
                <ul
                  className={cn(
                    "mt-5 flex list-none flex-wrap gap-2 p-0",
                    isOdd ? "md:justify-end" : "md:justify-start",
                  )}
                >
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

              <div
                className={cn(
                  "mt-4 flex items-center gap-1 text-[color:var(--lightest-slate)]",
                  isOdd ? "md:justify-end" : "md:justify-start",
                )}
              >
                {project.cta ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-[color:var(--blue)] bg-transparent font-mono text-[color:var(--blue)] hover:-translate-x-1 hover:-translate-y-1 hover:bg-[color:var(--blue)]/10 hover:text-[color:var(--blue)] hover:shadow-[3px_3px_0_0_var(--blue)]"
                  >
                    <a href={project.cta} aria-label="Course Link" target="_blank" rel="noreferrer">
                      Learn More
                    </a>
                  </Button>
                ) : null}
                {project.github ? (
                  <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer" className="p-2.5">
                    <Icon name="GitHub" className="size-5" />
                  </a>
                ) : null}
                {project.external && !project.cta ? (
                  <a
                    href={project.external}
                    aria-label="External Link"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5"
                  >
                    <Icon name="External" className="size-[22px]" />
                  </a>
                ) : null}
              </div>
            </div>

            <div
              className={cn(
                "relative rounded-[var(--border-radius)] shadow-[0_10px_30px_-15px_var(--navy-shadow)] md:row-[1/-1]",
                "md:col-span-7",
                isOdd ? "md:col-start-1" : "md:col-start-6",
              )}
            >
              <a
                href={project.external ?? project.github ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="group relative block h-full w-full overflow-hidden rounded-[var(--border-radius)] bg-[color:var(--blue)]"
              >
                {project.cover ? (
                  <Image
                    src={project.cover}
                    alt={project.title}
                    className="h-full w-full rounded-[var(--border-radius)] object-cover mix-blend-multiply grayscale brightness-[0.65] contrast-100 transition duration-300 group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:brightness-100"
                    width={700}
                    height={438}
                  />
                ) : null}
                <span className="pointer-events-none absolute inset-0 bg-[color:var(--navy)] mix-blend-screen transition duration-300 group-hover:bg-transparent" />
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);