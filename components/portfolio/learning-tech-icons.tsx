import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement>;

const IconBase = ({ children, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
);

const IconNestJs = () => (
  <IconBase>
    <path d="M12 3 4 8v8l8 5 8-5V8z" />
    <path d="M8 16V8l8 8V8" />
  </IconBase>
);

const IconSpringBoot = () => (
  <IconBase>
    <path d="M4 14c0-5 4-9 9-9 2.8 0 5.2 1 7 2.8-1.2 5.2-4.7 10.2-10.5 10.2A7.5 7.5 0 0 1 4 14z" />
    <path d="M8 15c2.3-2.6 4.9-4.4 8-5.4" />
  </IconBase>
);

const IconGoFiber = () => (
  <IconBase>
    <path d="M4 7h16" />
    <path d="M4 11h10" />
    <path d="M4 15h8" />
    <path d="M12 7v10" />
    <path d="M12 11h6" />
  </IconBase>
);

const IconGolang = () => (
  <IconBase>
    <circle cx="8" cy="12" r="3.2" />
    <path d="M14 9h6" />
    <path d="M14 12h7" />
    <path d="M14 15h6" />
    <path d="M8 12h1.8" />
  </IconBase>
);

const IconJava = () => (
  <IconBase>
    <path d="M8 9c1.1-1 1.4-2 0-3" />
    <path d="M12 8c1.1-1.4 1.4-2.8 0-4" />
    <path d="M16 9c1.1-1 1.4-2 0-3" />
    <path d="M6 12h12v2a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4z" />
    <path d="M18 13h1.6a1.4 1.4 0 1 1 0 2.8H18" />
  </IconBase>
);

export const LearningTechIcon = ({ name, className }: { name: string; className?: string }) => {
  const icon = (() => {
    switch (name.toLowerCase()) {
      case "nestjs":
        return <IconNestJs />;
      case "springboot":
      case "spring-boot":
        return <IconSpringBoot />;
      case "gofiber":
      case "go-fiber":
        return <IconGoFiber />;
      case "golang":
        return <IconGolang />;
      case "java":
        return <IconJava />;
      default:
        return <IconNestJs />;
    }
  })();

  return <span className={cn("inline-flex size-5 shrink-0 [&>svg]:size-full", className)}>{icon}</span>;
};
