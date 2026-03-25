import type { ElementType } from "react";
import { Bot, Code2, Compass, Database, ScanSearch, Sparkles, TerminalSquare } from "lucide-react";
import {
  SiAntdesign,
  SiBootstrap,
  SiClaude,
  SiCss,
  SiDart,
  SiDbeaver,
  SiDjango,
  SiDocker,
  SiFigma,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiK6,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiWordpress,
  SiWoocommerce,
} from "react-icons/si";
import { cn } from "@/lib/utils";

type TechIconSpec = {
  color: string;
  component: ElementType;
  kind?: "brand" | "outline";
};

const techIconMap: Record<string, TechIconSpec> = {
  html: { component: SiHtml5, color: "#E34F26" },
  css: { component: SiCss, color: "#1572B6" },
  javascript: { component: SiJavascript, color: "#F7DF1E" },
  php: { component: SiPhp, color: "#777BB4" },
  python: { component: SiPython, color: "#3776AB" },
  dart: { component: SiDart, color: "#0175C2" },
  react: { component: SiReact, color: "#61DAFB" },
  nextjs: { component: SiNextdotjs, color: "#F8FAFC" },
  nodejs: { component: SiNodedotjs, color: "#5FA04E" },
  django: { component: SiDjango, color: "#44B78B" },
  nestjs: { component: SiNestjs, color: "#E0234E" },
  wordpress: { component: SiWordpress, color: "#21759B" },
  woocommerce: { component: SiWoocommerce, color: "#96588A" },
  flutter: { component: SiFlutter, color: "#02569B" },
  tailwindcss: { component: SiTailwindcss, color: "#06B6D4" },
  bootstrap5: { component: SiBootstrap, color: "#7952B3" },
  antdesign: { component: SiAntdesign, color: "#1677FF" },
  shadcnui: { component: SiShadcnui, color: "#E2E8F0" },
  mysql: { component: SiMysql, color: "#4479A1" },
  postgresql: { component: SiPostgresql, color: "#4169E1" },
  mongodb: { component: SiMongodb, color: "#47A248" },
  oracle: { component: Database, color: "#F80000", kind: "outline" },
  vscode: { component: Code2, color: "#24A3F3", kind: "outline" },
  postman: { component: SiPostman, color: "#FF6C37" },
  docker: { component: SiDocker, color: "#2496ED" },
  dbeaver: { component: SiDbeaver, color: "#382923" },
  git: { component: SiGit, color: "#F05032" },
  figma: { component: SiFigma, color: "#F24E1E" },
  "mongodb-compass": { component: Compass, color: "#47A248", kind: "outline" },
  "gpt-codex": { component: SiOpenai, color: "#10A37F" },
  "claude-code": { component: SiClaude, color: "#D97757" },
  "grafana-k6": { component: SiK6, color: "#7B5CFA" },
  mobaxterm: { component: TerminalSquare, color: "#57CBFF", kind: "outline" },
};

const fallbackTechIcon: TechIconSpec = {
  component: Sparkles,
  color: "#57CBFF",
  kind: "outline",
};

export const getTechIconAccent = (name: string) => (techIconMap[name] ?? fallbackTechIcon).color;

export const TechStackIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const spec = techIconMap[name] ?? fallbackTechIcon;
  const Icon = spec.component;

  if (spec.kind === "outline") {
    return <Icon className={cn("size-6", className)} strokeWidth={1.85} />;
  }

  return <Icon className={cn("size-6", className)} />;
};

export const TechStackOverlayIcon = ({ groupTitle }: { groupTitle: string }) => {
  const overlays: Record<string, ElementType> = {
    "Languages and Tools": Sparkles,
    "Libraries and Frameworks": Bot,
    Databases: Database,
    "Development Tools": ScanSearch,
  };

  const OverlayIcon = overlays[groupTitle] ?? Sparkles;

  return <OverlayIcon className="size-5" strokeWidth={1.6} />;
};
