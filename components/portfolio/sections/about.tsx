import Image from "next/image";
import { aboutContent } from "@/lib/portfolio-config";

export const About = () => (
  <section id="about" className="mx-auto max-w-225 py-16 md:py-20 lg:py-24">
    <h2 className="numbered-heading">{aboutContent.heading}</h2>

    <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
      <div>
        <div>
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 w-[70%] max-w-75 md:mt-0 md:w-full">
        <div className="group relative isolate block w-full">
          <div className="relative z-10 overflow-hidden rounded-(--border-radius) border border-(--lightest-navy)/75 bg-(--light-navy) shadow-[0_10px_30px_-15px_var(--navy-shadow)] transition duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-(--blue)/45">
            <Image
              src={aboutContent.photo}
              width={500}
              height={500}
              quality={95}
              alt={aboutContent.photoAlt}
              className="h-auto w-full rounded-(--border-radius) object-cover transition duration-200 md:grayscale md:contrast-100 md:group-hover:grayscale-0"
            />
            <span className="pointer-events-none absolute inset-0 hidden rounded-(--border-radius) bg-(--blue)/10 mix-blend-screen transition duration-200 group-hover:bg-transparent md:block" />
          </div>
          <span className="pointer-events-none absolute left-3.5 top-3.5 z-0 h-full w-full rounded-(--border-radius) border-2 border-(--blue)/85 transition duration-200 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
        </div>
      </div>
    </div>
  </section>
);
