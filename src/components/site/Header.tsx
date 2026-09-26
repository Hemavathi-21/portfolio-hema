import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../lib/theme";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/portfoliologosvg.svg";

const links = [
  { to: "/", label: "Index", n: "01" },
  { to: "/projects", label: "Projects", n: "02" },
  { to: "/experience", label: "Experience", n: "03" },
  { to: "/about", label: "About", n: "04" },
] as const;

export function Header() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Scroll to hash target after route/page is mounted
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.substring(1);
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [location.pathname, location.hash]);

  // Lock scroll
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.1, 1], delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto w-full xl:max-w-[90%] px-5 md:px-8 pt-5">
        <div className="flex items-center justify-between rounded-full border border-border/70 bg-background/70 backdrop-blur-xl pl-5 pr-2 py-2 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_10px_40px_-20px_rgba(0,0,0,0.25)]">
          <Link to="/" className="flex items-center gap-2 group min-w-0">
            {/* <span className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground font-display font-bold text-sm">
              h
              <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            </span> */}
            <img
              src={logo}
              alt="portfolio logo"
              className="h-8 w-8 object-contain"
            />
            {/* <span className="font-display text-sm font-semibold tracking-tight truncate">
              <span className="text-muted-foreground">hemavathi R.</span>
            </span> */}
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="nav-link font-mono-code text-[12px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors"
                  data-active={active}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Desktop-only theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="hidden md:flex relative h-9 w-9 rounded-full border border-border bg-surface hover:bg-surface-2 transition-colors items-center justify-center overflow-hidden"
            >
              <motion.span
                key={theme}
                initial={{ y: -20, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" strokeWidth={1.8} />
                ) : (
                  <Moon className="h-4 w-4" strokeWidth={1.8} />
                )}
              </motion.span>
            </button>
            <Link
              to="/about#contact"
              // hash="contact"
              className="hidden sm:inline-flex h-9 items-center rounded-full bg-foreground text-background px-4 font-mono-code text-[11px] uppercase tracking-[0.16em] hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Get in touch
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden relative h-9 w-9 rounded-full border border-border bg-surface hover:bg-surface-2 transition-colors flex items-center justify-center"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <motion.line
                  x1="3"
                  x2="21"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  animate={
                    open
                      ? { y1: 12, y2: 12, rotate: 45 }
                      : { y1: 7, y2: 7, rotate: 0 }
                  }
                  transition={{ duration: 0.35, ease: [0.2, 0.7, 0.1, 1] }}
                  style={{ transformOrigin: "12px 12px" }}
                />
                <motion.line
                  x1="3"
                  x2="21"
                  y1="12"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  animate={
                    open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.2 }}
                  style={{ transformOrigin: "12px 12px" }}
                />
                <motion.line
                  x1="3"
                  x2="21"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  animate={
                    open
                      ? { y1: 12, y2: 12, rotate: -45 }
                      : { y1: 17, y2: 17, rotate: 0 }
                  }
                  transition={{ duration: 0.35, ease: [0.2, 0.7, 0.1, 1] }}
                  style={{ transformOrigin: "12px 12px" }}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-background/50 backdrop-blur-xl"
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.2, 0.7, 0.1, 1] }}
              className="md:hidden fixed inset-x-4 top-24 z-50 rounded-3xl border border-border bg-card/95 backdrop-blur-2xl shadow-2xl overflow-hidden"
            >
              <div className="px-6 pt-6 pb-3 flex items-center justify-between border-b border-border/60">
                <span className="font-mono-code text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Menu
                </span>
                <span className="flex items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Online
                </span>
              </div>

              <nav className="px-3 py-3">
                {links.map((l, i) => {
                  const active = location.pathname === l.to;
                  return (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.08 + i * 0.07,
                        ease: [0.2, 0.7, 0.1, 1],
                      }}
                    >
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline justify-between gap-4 px-4 py-4 rounded-2xl hover:bg-surface transition-colors"
                        data-active={active}
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono-code text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            {l.n}
                          </span>
                          <span
                            className="font-display text-3xl font-semibold tracking-[-0.02em]"
                            style={{
                              color: active ? "var(--accent)" : undefined,
                            }}
                          >
                            {l.label}
                          </span>
                        </span>
                        <span
                          className="font-mono-code text-xs text-muted-foreground transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden
                        >
                          →
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="px-6 py-5 border-t border-border/60 flex items-center justify-between gap-4"
              >
                <button
                  type="button"
                  onClick={toggle}
                  className="flex items-center gap-3 font-mono-code text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Toggle theme"
                >
                  <span className="relative h-8 w-8 rounded-full border border-border bg-surface flex items-center justify-center overflow-hidden">
                    <motion.span
                      key={theme}
                      initial={{ y: -16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {theme === "dark" ? (
                        <Sun className="h-4 w-4" strokeWidth={1.8} />
                      ) : (
                        <Moon className="h-4 w-4" strokeWidth={1.8} />
                      )}
                    </motion.span>
                  </span>
                  {theme === "dark" ? "Light mode" : "Dark mode"}
                </button>

                <a
                  href="mailto:hemavathitechnical@gmail.com"
                  className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-foreground border-b border-foreground pb-0.5"
                >
                  Say hello →
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
