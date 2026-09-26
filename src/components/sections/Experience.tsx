import { motion } from "framer-motion";

const items = [
  {
    when: "Oct 2025 to present",
    role: "Junior Frontend Developer",
    org: "the business company, Chennai",
    desc: "Developing responsive React interfaces for production e-commerce websites. Built and maintained customer-facing pages while improving performance, accessibility, and SEO through image optimization, metadata implementation, schema markup, and Core Web Vitals best practices.",
    tags: ["React", "Responsive Design", "SEO", "Core Web Vitals"],
  },
  {
    when: "Jun 2025 to Oct 2025",
    role: "Frontend Developer Intern",
    org: "the business company, Chennai",
    desc: "Contributed to responsive testing, UI validation, and layout fixes across existing components. Later developed static informational pages and gained hands-on experience with production workflows, leading to a full-time role conversion.",
    tags: ["HTML", "CSS", "React", "UI Development"],
  },
];

export function Experience() {
  return (
    <section className="mx-auto w-full xl:max-w-[90%] px-5 md:px-8 mt-32">
      <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12">
        <div className="lg:sticky lg:top-32 self-start">
          <div className="eyebrow">/ experience</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
            A short, growing story.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-sm">
            Each role taught me something I couldn't have learned in a tutorial
            - taste, trade-offs, and how to ship.
          </p>
        </div>

        <ol className="relative border-l border-border pl-8 md:pl-10 space-y-12">
          {items.map((it, i) => (
            <motion.li
              key={it.role}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[45px] md:-left-[52px] top-2 flex h-6 w-6 items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="absolute h-6 w-6 rounded-full border border-accent/40 animate-ping" />
              </span>
              <div className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {it.when}
              </div>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em]">
                {it.role}
                <span className="block text-muted-foreground text-base font-sans font-normal mt-1">
                  {it.org}
                </span>
              </h3>
              <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">
                {it.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
