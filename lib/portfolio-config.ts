export const siteConfig = {
  siteUrl: "https://daffastack.dev",
  title: "Portfolio - Daffa Stack",
  description:
    "Personal portfolio DaffaStack made with Nextjs 16, Tailwindcss, Shadcn UI, Aceternity UI",
  image: "/og.png", // TODO: change image source
  twitterUsername: "@daffastack",
};

export const email = "daffastack@gmail.com";

export const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/daffafikri19",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/daffastack/",
  },
  {
    name: "Twitter",
    url: "https://x.com/daffastack19",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/daffa-fikri-fahresi-2568822b8/",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/V77CXAD0Bo/",
  },
] as const;

export const navLinks = [
  {
    name: "About",
    url: "/#about",
  },
  {
    name: "Tech Stack",
    url: "/#tech-stack",
  },
  {
    name: "Experiences",
    url: "/#experiences",
  },
  {
    name: "Projects",
    url: "/#projects",
  },
  {
    name: "Learning",
    url: "/#learning",
  },
  {
    name: "Contact",
    url: "/#contact",
  },
] as const;

export const heroContent = {
  intro: "Hi, i'm",
  name: "daffastack.dev",
  subtitle: "Software Engineer",
  description:
    "I design and build scalable Apps, optimize performance, and refactor legacy architectures into maintainable solutions. Passionate about clean code, distributed systems, and continuous learning.",
  ctaLabel: "Check Me Out",
  ctaHref: "/#projects",
};

export const aboutContent = {
  heading: "About Me",
  paragraphs: [
    "Hello! My name is Daffa and I am detail-oriented Software Engineer with several year of experience in developing, and deploying scalable web applications. Proficient in full-stack development using JavaScript, TypeScript, Python with a strong focus on delivering user-friendly, high-quality solutions.",
    "I always optimizing performance, and implementing API services to support business objectives. Passionate about leveraging problemsolving skills and clean code practices to build innovative, secure systems.",
    "I am also a continuous learner who actively explores various aspects of software engineering every day, including backend architecture, system design, microservices, Domain-Driven Design (DDD), performance optimization, and emerging technologies. I believe continuous learning is essential to staying adaptable and delivering long-term technical value.",
  ],
  photo: "/images/daffastack.png",
  photoAlt: "DaffaStack",
};

export const techStackContent = {
  heading: "Tech I've Used to",
  groups: [
    {
      title: "Language",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "Dart", "MySQL", "PostgreSQL", "Oracle"],
    },
    {
      title: "Framework - Library",
      items: ["Vite.js", "Next.js", "Node.js - Express", "Django", "Flutter", "Electron.js"],
    },
    {
      title: "Tools",
      items: ["Docker", "DBeaver", "k6", "Firebase", "Minio", "AWS S3", "GitHub", "GitLab", "Bitbucket"],
    },
  ],
  learningPhase: {
    heading: "My Learning Phase",
    description:
      "Technologies I am actively studying and deepening to strengthen my software engineering capabilities and architectural understanding.",
    groups: [
      {
        title: "Framework",
        items: [
          {
            name: "NestJS",
            icon: "nestjs",
            url: "https://nestjs.com/"
          },
          {
            name: "Go Fiber",
            icon: "go-fiber",
            url: "https://go.dev/"
          },
          {
            name: "Spring Boot",
            icon: "spring-boot",
            url: "https://spring.io/projects/spring-boot"
          },
        ],
      },
      {
        title: "Language",
        items: [
          {
            name: "Golang",
            icon: "golang",
            url: "https://go.dev/"
          },
          {
            name: "Java",
            icon: "java",
            url: "https://www.java.com/en/"
          },
        ],
      }
    ],
  },
};

export const contactContent = {
  heading: "My Contact",
  title: "Get In Touch",
  description:
    "I am currently open to select opportunities and collaborations. If you have a project, an idea, or just want to say hi, my inbox is always open.",
  chatButtonLabel: "Chat Me",
  emailButtonLabel: "Email Me",
  whatsappUrl: "https://wa.me/62895413114300",
};
