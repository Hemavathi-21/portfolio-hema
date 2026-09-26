import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cases, type Case } from "../../pages/Projects";
// import tbc from "../../assets/images/tbcss.png";

export function FeaturedProjects() {
  const featuredProjectIds = ["01", "03", "06"];

  const featuredProjects = featuredProjectIds
    .map((id) => cases.find((project) => project.n === id))
    .filter((project): project is Case => Boolean(project));
  return (
    <section className="mx-auto w-full xl:max-w-[90%] px-5 md:px-8 mt-32">
      <div className="flex items-end justify-between gap-6 mb-12">
        <div>
          <div className="eyebrow">/ selected work</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
            Things I've shipped.
          </h2>
        </div>
        <Link
          to="/projects"
          className="hidden md:inline-flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
        >
          All projects <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="space-y-6">
        {featuredProjects.map((p, i) => (
          <motion.article
            key={p.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.2, 0.7, 0.1, 1],
            }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card"
          >
            <Link
              to="/projects"
              className="grid md:grid-cols-[1fr_1.1fr] items-stretch"
            >
              {/* left text */}
              <div className="p-7 md:p-10 flex flex-col justify-between gap-8">
                <div className="flex items-center justify-between">
                  <div className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.n} · {p.role} · {p.year}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-500 group-hover:rotate-45 group-hover:text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] leading-[1.05]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground max-w-md">
                    {p.tagline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* right visual */}
              <div
                className={`relative min-h-[260px] md:min-h-[340px] overflow-hidden bg-gradient-to-br ${p.accent}`}
              >
                <div
                  className="absolute inset-0 opacity-60 mix-blend-overlay"
                  aria-hidden
                >
                  <svg className="h-full w-full">
                    <defs>
                      <pattern
                        id={`g${i}`}
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.4"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#g${i})`} />
                  </svg>
                </div>

                {/* mock browser */}
                <div className="absolute inset-6 md:inset-10 rounded-xl border border-border bg-background/80 backdrop-blur-sm shadow-2xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.03] group-hover:-translate-y-1">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-surface">
                    <span className="win-dot bg-[#E96A5A]" />
                    <span className="win-dot bg-[#E4B040]" />
                    <span className="win-dot bg-[#5DBE6B]" />
                    <span className="ml-2 font-mono-code text-[10px] text-muted-foreground truncate">
                      {p.title.toLowerCase().replace(/\s+/g, "-")}.app
                    </span>
                  </div>
                      <img
                        src={p.imgSrc}
                        alt={p.imgAlt}
                        className="w-full h-full object-cover object-top"
                      />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
