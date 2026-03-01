import { techStackContent } from "@/lib/portfolio-config";

export const TechStack = () => (
  <section id="tech-stack" className="mx-auto max-w-[900px] py-16 md:py-20 lg:py-24">
    <h2 className="numbered-heading">{techStackContent.heading}</h2>

    <div className="space-y-12 px-6 md:px-4">
      <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {techStackContent.groups.map((group) => (
          <article key={group.title} className="group relative h-full">
            <div className="relative z-[1] h-full overflow-hidden rounded-[var(--border-radius)] border border-[color:var(--lightest-navy)]/75 bg-[color:var(--light-navy)] p-5 shadow-[0_10px_30px_-15px_var(--navy-shadow)] transition duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-[color:var(--blue)]/45">
              <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-[color:var(--blue)]">
                {group.title}
              </h3>

              <ul className="mt-3 list-none space-y-2 p-0">
                {group.items.map((item) => (
                  <li
                    key={`${group.title}-${item}`}
                    className="relative pl-7 text-[18px] leading-[1.4] text-[color:var(--light-slate)] before:absolute before:left-0 before:top-[0.6em] before:h-0 before:w-0 before:-translate-y-1/2 before:border-y-[4px] before:border-y-transparent before:border-l-[6px] before:border-l-[color:var(--blue)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <span className="pointer-events-none absolute left-3 top-3 -z-[1] h-full w-full rounded-[var(--border-radius)] border-2 border-[color:var(--blue)]/85 transition duration-200 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
          </article>
        ))}
      </div>
    </div>
  </section>
);
