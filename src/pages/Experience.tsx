import { motion } from "framer-motion";

// export const Route = createFileRoute("/experience")({
//   head: () => ({
//     meta: [
//       { title: "Experience — Hema R." },
//       {
//         name: "description",
//         content: "The story of Hema R.'s frontend journey — roles, lessons, and growth.",
//       },
//       { property: "og:title", content: "Experience — Hema R." },
//       { property: "og:description", content: "Frontend journey, roles, and lessons." },
//     ],
//   }),
//   component: ExperiencePage,
// });

const chapters = [
  {
    year: "Jun 2025",
    title: "The beginning",
    role: "Frontend Developer Intern",
    body: "Joined The Business Company as a Frontend Developer Intern. Started with responsive testing, UI validation, layout fixes, and static page development while learning professional development workflows and team collaboration.",
    lessons: [
      "Professional workflow",
      "Responsive design",
      "Writing maintainable code",
    ],
  },
  {
    year: "Oct 2025",
    title: "Earning the next step",
    role: "Junior Frontend Developer",
    body: "Converted to a full-time role after consistently contributing to production projects. Began developing customer-facing React interfaces for live e-commerce websites and collaborating closely with designers and backend developers.",
    lessons: [
      "Production development",
      "Cross-team collaboration",
      "Ownership",
    ],
  },
  {
    year: "2026",
    title: "Beyond the interface",
    role: "Frontend Performance",
    body: "Focused on improving performance, accessibility, and SEO through image optimization, metadata implementation, schema markup, and Core Web Vitals best practices. Learned that a great frontend experience is measured by more than visuals alone.",
    lessons: ["Performance optimization", "Technical SEO", "Accessibility"],
  },
  {
    year: "Present",
    title: "Building what's next",
    role: "Junior Frontend Developer",
    body: "Continuing to build responsive React applications while refining frontend architecture, performance optimization, and user experience. Every release brings new opportunities to learn and deliver better products.",
    lessons: ["React ecosystem", "Continuous improvement", "Craftsmanship"],
  },
];

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-5xl px-5 md:px-8 py-12 mt-14">
      <header className="mb-16">
        <div className="eyebrow">/ experience</div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1] text-balance">
          A story, told in chapters.
        </h1>
        <p className="mt-5 text-muted-foreground text-lg max-w-2xl leading-relaxed">
          I'm early in my career, and I think that's a feature, not a bug.
          Here's the path so far — and what each step taught me.
        </p>
      </header>

      <div className="relative">
        {/* center line */}
        <div className="absolute left-[14px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

        <div className="space-y-16">
          {chapters.map((c, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={c.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >
                {/* node */}
                <span className="absolute left-[14px] md:left-1/2 top-3 -translate-x-1/2 flex h-4 w-4 items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="absolute h-4 w-4 rounded-full border border-accent/40 animate-ping" />
                </span>

                <div
                  className={`pl-10 md:pl-0 ${
                    left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="font-display text-6xl md:text-7xl font-bold text-foreground/10 leading-none">
                    {c.year}
                  </div>
                  <h2 className="-mt-4 font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em]">
                    {c.title}
                  </h2>
                  <div className="mt-1 font-mono-code text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {c.role}
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {c.body}
                  </p>
                  <div
                    className={`mt-4 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}
                  >
                    {c.lessons.map((l) => (
                      <span key={l} className="chip">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
