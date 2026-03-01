import { PageShell } from "@/components/portfolio";
import {
  About,
  Contact,
  FeaturedProjects,
  Hero,
  JobsTabs,
  Learning,
  ProjectsGrid,
  TechStack,
} from "@/components/portfolio/sections";
import { getFeaturedProjects, getJobs, getProjects } from "@/lib/content";

export default function Home() {
  const jobs = getJobs();
  const featuredProjects = getFeaturedProjects();
  const allProjects = getProjects();
  const otherProjects = allProjects.filter((project) => project.showInProjects !== false);

  return (
    <PageShell isHome>
      <main
        id="content-main"
        className="mx-auto w-full max-w-400 px-6 sm:px-10 lg:px-25 xl:px-37.5"
        style={{ counterReset: "section" }}
      >
        <Hero />
        <About />
        <TechStack />
        <JobsTabs jobs={jobs} />
        <FeaturedProjects projects={featuredProjects} />
        <ProjectsGrid projects={otherProjects} />
        <Learning />
        <Contact />
      </main>
    </PageShell>
  );
}
