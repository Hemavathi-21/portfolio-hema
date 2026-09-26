import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

/* ---------- Typing animation ---------- */
function Typer({ text, delay = 800 }: { text: string; delay?: number }) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  const [hideCaret, setHideCaret] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    const start = setTimeout(function tick() {
      setOut(text.slice(0, i + 1));
      i++;
      if (i < text.length) {
        const ch = text[i - 1];
        const wait = ch === " " ? 60 : 55 + Math.random() * 70;
        timeoutId = setTimeout(tick, wait);
      } else {
        setDone(true);
        // blink twice (~2s) then hide
        setTimeout(() => setHideCaret(true), 2100);
      }
    }, delay);
    return () => {
      clearTimeout(start);
      clearTimeout(timeoutId);
    };
  }, [text, delay]);

  return (
    <span className="relative inline-block">
      <span>{out}</span>
      {!hideCaret && (
        <span
          className={`inline-block align-baseline w-[0.55ch] h-[0.95em] translate-y-[0.12em] ml-1 bg-accent ${
            done ? "caret-blink" : ""
          }`}
          style={{ animation: done ? undefined : "none" }}
        />
      )}
    </span>
  );
}

/* ---------- Live "code window" feature card ---------- */
function CodeWindow() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [6, -6]), {
    stiffness: 120,
    damping: 14,
  });
  const ry = useSpring(useTransform(mx, [-50, 50], [-8, 8]), {
    stiffness: 120,
    damping: 14,
  });

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left - r.width / 2);
        my.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="relative w-full"
    >
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/30 via-cream/10 to-tan/20 blur-2xl drift -z-10" />

      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-[0_30px_80px_-30px_rgba(16,40,32,0.45)]">
        {/* title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface">
          <div className="flex items-center gap-1.5">
            <span className="win-dot bg-[#E96A5A]" />
            <span className="win-dot bg-[#E4B040]" />
            <span className="win-dot bg-[#5DBE6B]" />
          </div>
          <div className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            hero.tsx — hema.dev
          </div>
          <div className="font-mono-code text-[10px] text-muted-foreground">
            ⌘K
          </div>
        </div>

        {/* body */}
        <div className="grid grid-cols-[42px_1fr] font-mono-code text-[13px] leading-[1.75]">
          <div className="bg-surface/60 text-right pr-2 py-4 text-muted-foreground/60 select-none">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <pre className="py-4 px-4 overflow-hidden">
            {`export const `}
            <span className="text-[color:var(--sage)]">Hema</span>
            {` = () => {
  const `}
            <span className="text-[color:var(--tan)]">stack</span>
            {` = [`}
            <span className="text-foreground/80">{`'React'`}</span>
            {`, `}
            <span className="text-foreground/80">{`'Tailwind'`}</span>
            {`];

  return (
    <`}
            <span className="text-[color:var(--sage)]">Product</span>
            {`
      `}
            <span className="text-[color:var(--tan)]">obsession</span>
            {`={`}
            <span className="text-foreground/80">{`'details'`}</span>
            {`}
      `}
            <span className="text-[color:var(--tan)]">perf</span>
            {`={`}
            <span className="text-foreground/80">{`'always'`}</span>
            {`}
      `}
            <span className="text-[color:var(--tan)]">ship</span>
            {`={true}
    >
      {`}
            <span className="text-muted-foreground">{`/* real apps, not demos */`}</span>
            {`}
    </`}
            <span className="text-[color:var(--sage)]">Product</span>
            {`>
  );
}`}
          </pre>
        </div>

        {/* status bar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-surface font-mono-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Live · 60fps
          </span>
          <span>main · ✓ no errors</span>
        </div>
      </div>

      {/* floating chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute -left-6 top-1/3 hidden md:block"
      >
        <div className="chip bg-background/90 shadow-lg">
          <Sparkles className="h-3 w-3 text-accent" /> Lighthouse 100
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        className="absolute -right-4 bottom-10 hidden md:block"
      >
        <div className="chip bg-background/90 shadow-lg">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--sage)]" />{" "}
          a11y · AA+
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12">
      {/* background flourishes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[color:var(--sage)]/25 blur-[120px] drift" />
        <div
          className="absolute top-32 -right-40 h-[480px] w-[480px] rounded-full bg-[color:var(--tan)]/30 blur-[120px] drift"
          style={{ animationDelay: "-6s" }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 64 0 L 0 0 0 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto w-full xl:max-w-[90%] px-5 md:px-8 pt-12 md:pt-20 pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <span className="chip normal-case">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />{" "}
              Open to opportunities
            </span>
            <span className="font-mono-code text-[11px] tracking-[0.18em] text-muted-foreground hidden sm:inline">
              Chennai, India
            </span>
          </motion.div>

          <h1 className="mt-6 font-display font-semibold tracking-[-0.03em] leading-[0.95] text-[clamp(2.75rem,7vw,5.75rem)] text-balance">
            <motion.span
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.1, 1] }}
              className="block text-[55px] md:text-7xl lg:text-8xl"
            >
              Hemavathi R.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.2, 0.7, 0.1, 1],
              }}
              className="block text-muted-foreground text-[52px] md:text-6xl lg:text-7xl mt-2"
            >
              Frontend Developer
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="block mt-4 text-[color:var(--sage)] dark:text-[color:var(--cream)] text-4xl lg:text-6xl"
            >
              <Typer text="Crafting Web Experiences" delay={900} />
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-xl font-sans text-base md:text-lg text-muted-foreground text-balance leading-relaxed"
          >
            I create modern web interfaces with React and Tailwind CSS, focusing
            on performance, accessibility, and the details that make digital
            experiences feel intuitive and polished.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-3 py-2.5 font-mono-code text-[11px] uppercase tracking-[0.18em] hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              See selected work
              <span className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/10 group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <a
              href="https://github.com/hemavathi-21"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 font-mono-code text-[11px] uppercase tracking-[0.18em] hover:bg-surface-2 transition-colors"
            >
              {/* <Github className="h-3.5 w-3.5" /> Github */}
              <FaGithub className="w-5 h-5" />
            </a>
          </motion.div>

          {/* meta strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-12 grid grid-cols-3 max-w-md border-t border-border pt-5"
          >
            {[
              { k: "Focus", v: "Frontend · UI" },
              { k: "Stack", v: "React · Tailwind" },
              { k: "Based", v: "Chennai" },
            ].map((m) => (
              <div key={m.k}>
                <div className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {m.k}
                </div>
                <div className="font-display text-sm font-medium mt-1">
                  {m.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
        >
          <CodeWindow />
        </motion.div>
      </div>

      {/* marquee */}
      <div className="relative border-y border-border bg-surface/60 overflow-hidden">
        <div className="marquee-track py-4">
          {Array.from({ length: 2 }).map((_, k) => (
            <div
              key={k}
              className="flex items-center gap-12 pr-12 font-display text-2xl md:text-3xl font-medium"
            >
              {[
                "React",
                "JavaScript",
                "Tailwind CSS",
                "Framer Motion",
                "Accessibility",
                "Performance",
                "Responsive Design",
                "UI Development",
                "Web Animations",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-12 text-muted-foreground"
                >
                  {t}
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
