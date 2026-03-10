import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

type Frontmatter = Record<string, unknown>;

export type Job = {
  title: string;
  company: string;
  location?: string;
  range: string;
  url?: string;
  date: string;
  html: string;
};

export type FeaturedProject = {
  title: string;
  tech: string[];
  github?: string;
  external?: string;
  cta?: string;
  date: string;
  cover?: string;
  html: string;
};

export type Project = {
  title: string;
  tech: string[];
  github?: string;
  external?: string;
  thumbnail?: string;
  ios?: string;
  android?: string;
  company?: string;
  showInProjects?: boolean;
  date: string;
  html: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

const isMarkdownFile = (fileName: string) => fileName.endsWith(".md");

const readFileSafe = (filePath: string) =>
  fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";

const normalizeText = (text: string) =>
  text
    .replaceAll("â€™", "'")
    .replaceAll("â€œ", '"')
    .replaceAll("â€", '"')
    .replaceAll("â€“", "-")
    .replaceAll("â€”", "-")
    .replaceAll("â€¦", "...")
    .replaceAll("â€", '"')
    .replaceAll("\u00a0", " ");

const dateWeight = (value: string) => {
  if (!value) return 0;
  if (/^\d+$/.test(value)) return Number(value);
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
};

const parseMarkdown = (raw: string) => {
  const { data, content } = matter(raw);
  const normalized = normalizeText(content.trim());
  return {
    data: data as Frontmatter,
    html: marked.parse(normalized) as string,
  };
};

const readDirectories = (relativeDir: string) => {
  const fullDir = path.join(CONTENT_ROOT, relativeDir);
  if (!fs.existsSync(fullDir)) {
    return [];
  }
  return fs
    .readdirSync(fullDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      name: entry.name,
      fullPath: path.join(fullDir, entry.name),
    }));
};

const readMarkdownFiles = (relativeDir: string) => {
  const fullDir = path.join(CONTENT_ROOT, relativeDir);
  if (!fs.existsSync(fullDir)) {
    return [];
  }
  return fs
    .readdirSync(fullDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && isMarkdownFile(entry.name))
    .map((entry) => ({
      name: entry.name,
      fullPath: path.join(fullDir, entry.name),
    }));
};

export const getJobs = (): Job[] => {
  const jobs = readDirectories("jobs")
    .map((dir) => {
      const raw = readFileSafe(path.join(dir.fullPath, "index.md"));
      const parsed = parseMarkdown(raw);
      return {
        title: String(parsed.data.title ?? ""),
        company: String(parsed.data.company ?? ""),
        location: parsed.data.location ? String(parsed.data.location) : undefined,
        range: String(parsed.data.range ?? ""),
        url: parsed.data.url ? String(parsed.data.url) : undefined,
        date: String(parsed.data.date ?? ""),
        html: parsed.html,
      } satisfies Job;
    })
    .filter((job) => Boolean(job.title && job.company));

  return jobs.sort((a, b) => dateWeight(b.date) - dateWeight(a.date));
};

export const getFeaturedProjects = (): FeaturedProject[] => {
  const featured = readDirectories("featured")
    .map((dir) => {
      const raw = readFileSafe(path.join(dir.fullPath, "index.md"));
      const parsed = parseMarkdown(raw);
      const cover = parsed.data.cover ? String(parsed.data.cover) : "";
      const coverFile = cover.replace("./", "");

      return {
        title: String(parsed.data.title ?? ""),
        tech: Array.isArray(parsed.data.tech) ? parsed.data.tech.map(String) : [],
        github: parsed.data.github ? String(parsed.data.github) : undefined,
        external: parsed.data.external ? String(parsed.data.external) : undefined,
        cta: parsed.data.cta ? String(parsed.data.cta) : undefined,
        date: String(parsed.data.date ?? ""),
        cover: coverFile ? `/images/featured/${dir.name}/${coverFile}` : undefined,
        html: parsed.html,
      } satisfies FeaturedProject;
    })
    .filter((project) => Boolean(project.title));

  return featured.sort((a, b) => dateWeight(a.date) - dateWeight(b.date));
};

export const getProjects = (): Project[] => {
  const projects = readMarkdownFiles("projects")
    .map((file) => {
      const raw = readFileSafe(file.fullPath);
      const parsed = parseMarkdown(raw);
      return {
        title: String(parsed.data.title ?? ""),
        tech: Array.isArray(parsed.data.tech) ? parsed.data.tech.map(String) : [],
        github: parsed.data.github ? String(parsed.data.github) : undefined,
        external: parsed.data.external ? String(parsed.data.external) : undefined,
        thumbnail: parsed.data.thumbnail ? String(parsed.data.thumbnail) : undefined,
        ios: parsed.data.ios ? String(parsed.data.ios) : undefined,
        android: parsed.data.android ? String(parsed.data.android) : undefined,
        company: parsed.data.company ? String(parsed.data.company) : undefined,
        showInProjects:
          typeof parsed.data.showInProjects === "boolean"
            ? parsed.data.showInProjects
            : undefined,
        date: String(parsed.data.date ?? ""),
        html: parsed.html,
      } satisfies Project;
    })
    .filter((project) => Boolean(project.title));

  return projects.sort((a, b) => dateWeight(b.date) - dateWeight(a.date));
};
