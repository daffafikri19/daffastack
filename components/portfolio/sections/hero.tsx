import { heroContent } from "@/lib/portfolio-config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export const Hero = () => (
  <section className="relative isolate flex min-h-screen flex-col items-start justify-center py-24 md:py-28">
    <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:radial-gradient(ellipse_75%_60%_at_50%_50%,black,transparent_100%)]">
      <DottedGlowBackground
        className="absolute inset-0 opacity-75"
        gap={16}
        radius={1.8}
        colorLightVar="--light-slate"
        colorDarkVar="--light-slate"
        glowColorLightVar="--blue"
        glowColorDarkVar="--blue"
        opacity={0.42}
        speedMin={0.35}
        speedMax={1.1}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(87,203,255,0.2),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(87,203,255,0.14),transparent_35%)]" />
    </div>

    <h1 className="sr-only">{heroContent.name}</h1>

    <Badge
      variant="link"
      className="mb-6 px-3 py-1 font-mono text-[12px] tracking-[0.08em] text-[color:var(--blue)]"
    >
      {heroContent.intro}
    </Badge>

    <h2 className="mb-1 text-[clamp(42px,11vw,96px)] font-semibold leading-[1.05] text-[color:var(--lightest-slate)]">
      {heroContent.name}
    </h2>
    <h3 className="text-[clamp(30px,8vw,72px)] font-semibold leading-[0.95] text-[color:var(--slate)]">
      {heroContent.subtitle}
    </h3>

    <p className="mt-6 max-w-xl text-[color:var(--light-slate)]">{heroContent.description}</p>

    <Button
      asChild
      variant="outline"
      size="lg"
      className="mt-10 border-[color:var(--blue)] bg-transparent font-mono text-[color:var(--blue)] shadow-none transition duration-200 hover:-translate-x-1.5 hover:-translate-y-1.5 hover:bg-[color:var(--blue)]/10 hover:text-[color:var(--blue)] hover:shadow-[4px_4px_0_0_var(--blue)]"
    >
      <a href={heroContent.ctaHref}>{heroContent.ctaLabel}</a>
    </Button>
  </section>
);
