// import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, ExternalLink, GraduationCap, Trophy } from "lucide-react";
import ledgie from "../assets/ledgiess.webp";
import bliss from "../assets/blissss1.webp";
import thl from "../assets/thlss.webp";
import adyalam from "../assets/adyalamss.webp";
import tbc from "../assets/tbcss.webp";
import sv from "../assets/svss.webp";

// export const Route = createFileRoute("/projects")({
//   head: () => ({
//     meta: [
//       { title: "Projects — Hema R." },
//       {
//         name: "description",
//         content:
//           "Selected frontend case studies, challenges, and outcomes by Hema R.",
//       },
//       { property: "og:title", content: "Projects — Hema R." },
//       {
//         property: "og:description",
//         content: "Selected frontend case studies and outcomes.",
//       },
//     ],
//   }),
//   component: ProjectsPage,
// });

type Category = "work" | "personal" 
// | "showcase" | "learning"
;

export type Case = {
  n: string;
  title: string;
  year: string;
  role: string;
  category: Category;
  tagline: string;
  problem: string;
  solution: string;
  challenges: string[];
  features: string[];
  stack: string[];
  // highlights: { k: string; v: string }[];
  imgSrc?: string;
  imgAlt?: string;
  liveUrl: string;
  accent?: string;
};

export const cases: Case[] = [
  {
    n: "01",
    title: "The Business Company",
    year: "2026",
    role: "Junior Frontend Developer",
    category: "work",

    tagline:
      "A story-driven company website built from Figma with subtle motion, scroll-based interactions, and performance-conscious media.",

    problem:
      "The website needed to translate a detailed Figma design into a responsive experience while keeping a text-heavy brand story engaging through motion and interaction.",

    solution:
      "Built React components from the Figma designs and added scroll-triggered animations, optimized video behavior, responsive navigation, and interactive sections to create a more engaging storytelling experience.",

    challenges: [
      "Triggering animations and counters only when sections enter the viewport.",
      "Designing video autoplay and pause behavior around user attention and browser restrictions.",
      "Creating responsive navigation with different desktop and mobile interaction patterns.",
    ],

    features: [
      "Intersection Observer–based scroll reveals and counters",
      "Smart video autoplay and pause based on viewport visibility",
      "Responsive desktop and mobile navigation",
      "CSS-based motion and performance-conscious animations",
      "Responsive contact form with client-side validation",
    ],

    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Intersection Observer",
      "CSS Animations",
    ],

    imgSrc: tbc,
    imgAlt: "The Business Company website landing page",
    liveUrl: "https://thebusinesscompany.in/campaign/",
    accent: "from-[color:var(--sage)]/40 to-[color:var(--forest)]/30",
  },
  {
    n: "02",
    title: "Adyalam",
    year: "2026",
    role: "Junior Frontend Developer",
    category: "work",

    tagline:
      "A responsive business website adapted from an existing React template and extended with custom interactive sections.",

    problem:
      "The project started from a large pre-built template with unused sections, dense CSS, and content that needed to be adapted for the company's services and offerings.",

    solution:
      "Reworked the existing React frontend by removing unnecessary sections, adapting content and visuals, fixing responsive layouts, and building custom pricing experiences for digital marketing and website plans.",

    challenges: [
      "Working within an unfamiliar Bootstrap and custom CSS codebase with 8,100+ lines in the main stylesheet.",
      "Making a pre-built desktop-oriented template responsive across screen sizes.",
      "Turning large pricing datasets into scannable interfaces without overwhelming users.",
    ],

    features: [
      "Responsive template customization and UI refinements",
      "Custom digital marketing and website pricing sections",
      "Plan comparison layouts with service-specific visual cues",
      "URL-based plan selection carried into the contact form",
      "Client-side form validation without a validation library",
    ],

    stack: ["React", "JavaScript", "Bootstrap", "CSS"],

    imgSrc: adyalam,
    imgAlt: "Adyalam pricing section interface",
    liveUrl: "https://adyalam.com/",
  },
  {
    n: "03",
    title: "The Pure Bliss",
    year: "2025",
    role: "Junior Frontend Developer",
    category: "work",

    tagline:
      "A premium incense products ecommerce experience built for modern rituals.",

    problem:
      "The site needed a polished, responsive shopping experience while handling API-driven content, image-heavy pages, SEO, and performance requirements.",

    solution:
      "Contributed to the React frontend through responsive UI development, blog API integration, SEO implementation, image optimization, and reusable loading and analytics patterns.",

    challenges: [
      "Improving loading performance across image-heavy ecommerce pages.",
      "Creating clear loading states for API-driven content.",
      "Tracking page views correctly across React Router navigation.",
    ],

    features: [
      "Responsive ecommerce UI and reusable components",
      "Blog API integration",
      "SEO metadata and Open Graph implementation",
      "WebP conversion, lazy loading, and hero image prioritization",
      "Route-aware Google Analytics tracking",
    ],

    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "REST API",
      "react-helmet-async",
    ],

    imgSrc: bliss,
    imgAlt: "The Pure Bliss premium incense ecommerce website",
    liveUrl: "https://thepurebliss.in/",
    accent: "from-[color:var(--tan)]/40 to-[color:var(--brown)]/30",
  },
  {
    n: "04",
    title: "Teak Heirlooms",
    year: "2025",
    role: "Junior Frontend Developer",
    category: "work",

    tagline:
      "A premium furniture ecommerce experience spanning product discovery, bespoke solutions, and campaign-led pages.",

    problem:
      "The site required ongoing frontend development across a growing set of ecommerce, content, and campaign pages, with a strong focus on responsive presentation across devices.",

    solution:
      "Contributed to the React frontend by building static user-facing pages, implementing responsive UI improvements across existing sections, and developing a campaign page within the site's established design system.",

    challenges: [
      "Building new pages while maintaining consistency with an existing frontend and visual system.",
      "Resolving responsive layout issues across different page structures and screen sizes.",
      "Developing a campaign page that remained visually polished and responsive across devices.",
    ],

    features: [
      "Responsive ecommerce and content pages",
      "Static page and section development",
      "Reusable React UI components and skeleton loaders",
      "Campaign page development",
    ],

    stack: ["React", "JavaScript", "Tailwind CSS", "React Query"],

    imgSrc: thl,
    imgAlt: "Teak Heirlooms furniture ecommerce website",
    liveUrl: "https://teakheirlooms.com/",
  },
  {
    n: "05",
    title: "Shilpa Vummiti",
    year: "2025",
    role: "Junior Frontend Developer",
    category: "work",

    tagline:
      "A premium couture storefront refined with responsive UI, smoother navigation, and subtle interaction design.",

    problem:
      "The evolving storefront needed responsive page layouts and a smoother product-browsing experience as client requirements changed.",

    solution:
      "Contributed to the React frontend through page development, UX restructuring, reusable loading states, and subtle motion to make product discovery clearer and more responsive.",

    challenges: [
      "Replacing state-based category switching with route-based navigation so browser back navigation worked naturally.",
      "Keeping product grids, cart, wishlist, and order views responsive while providing appropriate loading feedback.",
      "Adding subtle motion to product grids without making the shopping experience feel distracting.",
    ],

    features: [
      "Route-based category product pages with natural browser navigation",
      "Responsive static pages and evolving client-driven layouts",
      "Reusable skeleton loaders across product, cart, wishlist, and order views",
      "Staggered product-grid entrance and hover interactions",
      "Responsive React UI across desktop and mobile",
    ],

    stack: ["React", "JavaScript", "Tailwind CSS", "React Router"],

    imgSrc: sv,
    imgAlt: "Shilpa Vummiti premium couture ecommerce website",
    liveUrl: "https://shilpavummiti.com/",
  },
  {
    n: "06",
    title: "Ledgie",
    year: "2026",
    role: "Personal Project",
    category: "personal",
    tagline:
      "A simple bookkeeping app for tracking income and expenses without the clutter.",

    problem:
      "I wanted a lightweight way to record everyday income and expenses without the complexity of a full-featured finance platform.",

    solution:
      "Built a responsive React application with reusable components and custom hooks, using browser localStorage to persist transactions entirely on the client.",

    challenges: [
      "Managing transaction state and keeping the balance synchronized with additions, edits, and deletions.",
      "Building form validation for amounts, titles, descriptions, and transaction types.",
      "Creating responsive layouts and interactions that remain clear across screen sizes.",
    ],

    features: [
      "Income and expense transaction management",
      "Transaction editing, deletion, and filtering",
      "Animated total balance calculations",
      "Form validation with accessible confirmation dialogs",
    ],

    stack: ["React", "JavaScript", "Tailwind CSS", "localStorage", "Vercel"],

    // highlights: [
    //   { k: "Transactions", v: "CRUD" },
    //   { k: "Persistence", v: "localStorage" },
    //   { k: "Deployment", v: "Vercel" },
    // ],
    imgSrc: ledgie,
    imgAlt: "Ledgie bookkeeping app interface",
    liveUrl: "https://ledgie-puce.vercel.app/",
    accent: "from-[color:var(--cream)]/60 to-[color:var(--tan)]/30",
  },
  // {
  //   n: "07",
  //   title: "Crafted Compass",
  //   year: "2026",
  //   role: "Junior Frontend Developer",
  //   category: "work",
  //   tagline:
  //     "A simple bookkeeping app for tracking income and expenses without the clutter.",

  //   problem:
  //     "I wanted a lightweight way to record everyday income and expenses without the complexity of a full-featured finance platform.",

  //   solution:
  //     "Built a responsive React application with reusable components and custom hooks, using browser localStorage to persist transactions entirely on the client.",

  //   challenges: [
  //     "Managing transaction state and keeping the balance synchronized with additions, edits, and deletions.",
  //     "Building form validation for amounts, titles, descriptions, and transaction types.",
  //     "Creating responsive layouts and interactions that remain clear across screen sizes.",
  //   ],

  //   features: [
  //     "Income and expense transaction management",
  //     "Transaction editing, deletion, and filtering",
  //     "Animated total balance calculations",
  //     "Form validation with accessible confirmation dialogs",
  //   ],

  //   stack: ["Next.js", "TypeScript", "Tailwind CSS"],

  //   imgSrc: ledgie,
  //   imgAlt: "Ledgie bookkeeping app interface",
  //   liveUrl: "https://ledgie-puce.vercel.app/",
  //   accent: "from-[color:var(--cream)]/60 to-[color:var(--tan)]/30",
  // },
];

const categoryMeta: Record<
  Category,
  { label: string; sub: string; tone: string }
> = {
  work: {
    label: "Work projects",
    sub: "Shipped with teams, in production.",
    tone: "from-[color:var(--sage)]/30 to-[color:var(--forest)]/15",
  },
  personal: {
    label: "Personal projects",
    sub: "Built to scratch an itch, explore ideas, and learn by making.",
    tone: "from-[color:var(--tan)]/25 to-[color:var(--brown)]/15",
  },
  // showcase: {
  //   label: "Showcase",
  //   sub: "Craft pieces — motion, design, interaction.",
  //   tone: "from-[color:var(--cream)]/40 to-[color:var(--tan)]/15",
  // },
  // learning: {
  //   label: "Learning & practice",
  //   sub: "Built to learn something new in public.",
  //   tone: "from-[color:var(--sage)]/20 to-[color:var(--cream)]/25",
  // },
};

const order: Category[] = ["work", "personal", 
  // "showcase", "learning"
];

function CaseStudy({ c, i }: { c: Case; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.05 + i * 0.04 }}
      className="relative rounded-3xl border border-border bg-card overflow-hidden"
    >
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 md:p-12">
          <div className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            case {c.n} · {c.role} · {c.year}
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.02]">
            {c.title}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl">
            {c.tagline}
          </p>

          {/* <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {c.highlights.map((h) => (
              <div
                key={h.k}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <div className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {h.k}
                </div>
                <div className="mt-1 font-display text-2xl font-semibold text-[color:var(--sage)] dark:text-[color:var(--cream)]">
                  {h.v}
                </div>
              </div>
            ))}
          </div> */}
        </div>

        <div
          className={`relative min-h-[240px] lg:min-h-[340px] bg-gradient-to-br ${categoryMeta[c.category].tone} overflow-hidden`}
        >
          <div className="absolute inset-8 rounded-2xl border border-border bg-background/85 backdrop-blur-sm shadow-2xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-surface">
              <span className="win-dot bg-[#E96A5A]" />
              <span className="win-dot bg-[#E4B040]" />
              <span className="win-dot bg-[#5DBE6B]" />

              <span className="ml-2 font-mono-code text-[10px] text-muted-foreground truncate">
                {c.title.toLowerCase().replace(/\s+/g, "-")}.app
              </span>
            </div>

            <div className="relative h-[calc(100%-33px)] overflow-hidden">
              <img
                src={c.imgSrc}
                alt={c.imgAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 px-8 md:px-12 pb-12 mt-3">
        <div>
          <div className="eyebrow">/ problem</div>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {c.problem}
          </p>
        </div>
        <div>
          <div className="eyebrow">/ solution</div>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {c.solution}
          </p>
        </div>
        <div>
          <div className="eyebrow">/ challenges</div>
          <ul className="mt-3 space-y-2">
            {c.challenges.map((x) => (
              <li key={x} className="flex gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow">/ features</div>
          <ul className="mt-3 space-y-2">
            {c.features.map((x) => (
              <li key={x} className="flex gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--tan)]" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 border-t border-border pt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
          <a
            href={c.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.18em] hover:text-accent transition-colors"
          >
            View live <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function CategorySection({ cat, items }: { cat: Category; items: Case[] }) {
  if (items.length === 0) return null;
  const meta = categoryMeta[cat];
  return (
    <section id={cat} className="mt-20 first:mt-0 scroll-mt-28">
      <div className="flex items-end justify-between gap-6 mb-8 border-t border-border pt-8">
        <div>
          <div className="eyebrow">/ {cat}</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
            {meta.label}
          </h2>
          <p className="mt-2 text-muted-foreground text-sm">{meta.sub}</p>
        </div>
        <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {String(items.length).padStart(2, "0")}{" "}
          {items.length === 1 ? "project" : "projects"}
        </span>
      </div>
      <div className="space-y-8">
        {items.map((c, i) => (
          <CaseStudy key={c.n} c={c} i={i} />
        ))}
      </div>
    </section>
  );
}

function Certifications() {
const items = [
  {
    icon: GraduationCap,
    title: "B.Com · Computer Applications",
    meta: "Guru Nanak College, Chennai · 2022–2025",
  },
  {
    icon: Award,
    title: "Get Started with AI-Assisted Development using GitHub Copilot",
    meta: "Microsoft · 2026",
  },
  {
    icon: Award,
    title: "Masterclass on Full Stack Development",
    meta: "Novitech R&D Pvt Ltd · 2025",
  },
  {
    icon: Award,
    title: "JavaScript Bootcamp",
    meta: "LetsUpgrade · 2026",
  },
  {
    icon: Trophy,
    title: "React — Silver Level",
    meta: "HackerRank · 2026",
  },
];

  return (
    <section className="mt-24">
      <div className="flex items-end justify-between gap-6 mb-8">
        <div>
          <div className="eyebrow">/ learning &amp; milestones</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
            Credentials
          </h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-5 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-start gap-4">
                <span className="h-10 w-10 rounded-xl bg-surface flex items-center justify-center border border-border">
                  <Icon className="h-4 w-4 text-[color:var(--sage)] dark:text-[color:var(--cream)]" />
                </span>
                <div>
                  <div className="font-display text-base font-semibold leading-tight">
                    {it.title}
                  </div>
                  <div className="mt-1 font-mono-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {it.meta}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const grouped = order.map((cat) => ({
    cat,
    items: cases.filter((c) => c.category === cat),
  }));

  return (
    <section className="mx-auto w-full xl:max-w-[90%] px-5 md:px-8 py-12 mt-14">
      <header className="max-w-2xl mb-10">
        <div className="eyebrow">/ projects</div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1] text-balance">
          Case studies, not screenshots.
        </h1>
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
          Real work, personal builds, and the frontend decisions behind them.
        </p>
      </header>

      {/* Category quick-nav */}
      <nav
        aria-label="Project categories"
        className="flex flex-wrap gap-2 mb-12"
      >
        {order.map((cat) => {
          const count = cases.filter((c) => c.category === cat).length;
          if (count === 0) return null;
          return (
            <a
              key={cat}
              href={`#${cat}`}
              className="chip hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              {categoryMeta[cat].label}
              <span className="ml-1 text-foreground/70">· {count}</span>
            </a>
          );
        })}
      </nav>

      {grouped.map(({ cat, items }) => (
        <CategorySection key={cat} cat={cat} items={items} />
      ))}

      <Certifications />
    </section>
  );
}
