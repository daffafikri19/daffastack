import { LearningTechIcon } from "@/components/portfolio/learning-tech-icons";
import { techStackContent } from "@/lib/portfolio-config";

export const Learning = () => (
<section id="learning" className="mx-auto max-w-225 py-16 md:py-20 lg:py-24">
    <h2 className="numbered-heading">{techStackContent.learningPhase.heading}</h2>

    <div className="relative overflow-hidden px-5 py-6 md:px-7 md:py-7">

        <div className="relative z-1">
            <p className="max-w-3xl text-[17px] leading-[1.6]">
                {techStackContent.learningPhase.description}
            </p>

            <div className="mt-7 space-y-8">
                {techStackContent.learningPhase.groups.map((group) => (
                    <div key={group.title}>
                        <h4 className="font-mono text-[13px] uppercase tracking-[0.08em] text-(--blue)">
                            {group.title}
                        </h4>
                        <ul className="mt-4 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
                            {group.items.map((item) => (
                                <li key={`${group.title}-${item.name}`} className="h-full">
                                    <a href={item.url} referrerPolicy="no-referrer" className="block h-full">
                                        <article className="group relative h-full">
                                            <div className="relative z-1 h-full overflow-hidden rounded-(--border-radius) border border-(--lightest-navy)/75 bg-(--light-navy) p-4 shadow-[0_10px_30px_-15px_var(--navy-shadow)] transition duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-(--blue)/45">
                                                <div className="relative flex items-center gap-3">
                                                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-(--blue)/35 bg-(--blue)/10 text-(--blue)">
                                                        <LearningTechIcon name={item.icon} className="size-5" />
                                                    </span>

                                                    <div className="min-w-0">
                                                        <p className="truncate text-[18px] font-medium leading-[1.35] text-(--lightest-slate)">
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <span className="pointer-events-none absolute left-3 top-3 -z-1 h-full w-full rounded-(--border-radius) border-2 border-(--blue)/85 transition duration-200 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                                        </article>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>
);
