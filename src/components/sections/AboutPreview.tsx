import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Visual: "Component architecture" — a tree of UI primitives composing
 * into a screen. Animated with a subtle reveal + breathing pulse on edges.
 */
function ArchitectureVisual() {
  const nodes = [
    { id: "app", x: 200, y: 40, label: "<App />", kind: "root" },
    { id: "layout", x: 90, y: 130, label: "<Layout />", kind: "branch" },
    { id: "route", x: 310, y: 130, label: "<Route />", kind: "branch" },
    { id: "nav", x: 35, y: 230, label: "<Nav />", kind: "leaf" },
    { id: "main", x: 145, y: 230, label: "<Main />", kind: "leaf" },
    { id: "card", x: 255, y: 230, label: "<Card />", kind: "leaf" },
    { id: "form", x: 365, y: 230, label: "<Form />", kind: "leaf" },
  ];
  const edges: Array<[string, string]> = [
    ["app", "layout"],
    ["app", "route"],
    ["layout", "nav"],
    ["layout", "main"],
    ["route", "card"],
    ["route", "form"],
  ];
  const map = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg viewBox="0 0 400 320" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--sage)" stopOpacity="0.9" />
          <stop offset="1" stopColor="var(--tan)" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* edges */}
      {edges.map(([a, b], i) => {
        const A = map[a];
        const B = map[b];
        return (
          <motion.path
            key={`${a}-${b}`}
            d={`M ${A.x} ${A.y + 14} C ${A.x} ${(A.y + B.y) / 2}, ${B.x} ${(A.y + B.y) / 2}, ${B.x} ${B.y - 14}`}
            stroke="url(#edge)"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="240"
            initial={{ strokeDashoffset: 240, opacity: 0 }}
            whileInView={{ strokeDashoffset: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.3 + i * 0.08,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* nodes */}
      {nodes.map((n, i) => {
        const w = n.kind === "root" ? 90 : n.kind === "branch" ? 84 : 76;
        return (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
          >
            <rect
              x={n.x - w / 2}
              y={n.y - 14}
              width={w}
              height={28}
              rx={8}
              className="fill-[color:var(--card)] dark:fill-[color:var(--surface)]"
              stroke="var(--border)"
            />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="11"
              className="fill-foreground"
            >
              {n.label}
            </text>
            {n.kind === "root" && (
              <motion.circle
                cx={n.x + w / 2 - 6}
                cy={n.y - 8}
                r={3}
                fill="var(--accent)"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.g>
        );
      })}

      {/* state pulse traveling down a path */}
      <motion.circle
        r="3"
        fill="var(--accent)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.4 }}
      >
        <animateMotion
          dur="2.2s"
          repeatCount="indefinite"
          path="M 200 54 C 200 92, 90 92, 90 116 L 90 216 C 90 216, 145 216, 145 216"
        />
      </motion.circle>
    </svg>
  );
}

export function AboutPreview() {
  return (
    <section className="mx-auto w-full xl:max-w-[90%] px-5 md:px-8 mt-32">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="eyebrow">/ about</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-balance">
            I build things that feel
            <span className="text-[color:var(--sage)] dark:text-[color:var(--cream)]">
              {" "}
              obvious in hindsight
            </span>
            .
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground max-w-xl leading-relaxed">
            <p>
              I'm a frontend developer who enjoys turning ideas and designs into
              responsive, user-friendly web experiences. Since starting my
              career in 2025, I've worked on production websites using React and
              Tailwind CSS, focusing on clean interfaces and consistent user
              experiences across devices.
            </p>
            <p>
              Beyond building UI, I'm interested in web performance,
              accessibility, and SEO. I enjoy learning how small
              improvements—from image optimization to structured data and Core
              Web Vitals—can make websites faster and more effective for users.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.18em] text-foreground border-b border-foreground pb-1"
          >
            Read the full story →
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-square w-full max-w-md mx-auto"
        >
          <div className="absolute inset-0 rounded-3xl border border-border bg-gradient-to-br from-[color:var(--sage)]/15 via-[color:var(--cream)]/20 to-[color:var(--tan)]/15 overflow-hidden">
            <div className="absolute inset-0 grain" />
            {/* faint grid */}
            <svg
              className="absolute inset-0 h-full w-full opacity-40"
              aria-hidden
            >
              <defs>
                <pattern
                  id="archgrid"
                  width="24"
                  height="24"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 24 0 L 0 0 0 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.3"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#archgrid)" />
            </svg>
            {/* file header */}
            <div className="absolute top-3 left-3 right-3 flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-background/70 backdrop-blur-sm">
              <span className="win-dot bg-[#E96A5A]" />
              <span className="win-dot bg-[#E4B040]" />
              <span className="win-dot bg-[#5DBE6B]" />
              <span className="ml-2 font-mono-code text-[10px] text-muted-foreground">
                app/tree.tsx
              </span>
            </div>
            <div className="absolute inset-0 pt-12 pb-4">
              <ArchitectureVisual />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 chip bg-background/90 shadow-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Component composition
          </div>
        </motion.div>
      </div>
    </section>
  );
}
