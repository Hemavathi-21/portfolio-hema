import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";

export function Contact() {
  const email = "hemavathitechnical@gmail.com";
  const [copied, setCopied] = useState(false);

  return (
    <section
      id="contact"
      className="mx-auto w-full xl:max-w-[90%] px-5 md:px-8 mt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-[color:var(--forest)] text-[color:var(--cream)] p-10 xl:p-16"
      >
        {/* background */}
        <div className="absolute inset-0 -z-0 opacity-30" aria-hidden>
          <svg className="absolute inset-0 h-full w-full">
            <defs>
              <pattern
                id="contact-grid"
                width="48"
                height="48"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 48 0 L 0 0 0 48"
                  fill="none"
                  stroke="var(--cream)"
                  strokeWidth="0.4"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
          {/* <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[color:var(--sage)]/40 blur-[100px] drift" /> */}
        </div>

        <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-6 xl:gap-10 items-end">
          <div>
            <div className="eyebrow text-[color:var(--cream)]/70">
              / get in touch
            </div>
            <h2 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-balance">
              Let's connect
              <br />
              <span className="text-[color:var(--cream)]/60">and create</span>
            </h2>
            <p className="mt-6 max-w-lg text-[color:var(--cream)]/70 leading-relaxed">
              I'm a frontend developer focused on building clean, responsive,
              and accessible user interfaces. If you have an opportunity,
              project, or simply want to say hello, feel free to reach out.
            </p>
          </div>

          <div className="flex flex-col gap-3 min-w-0">
            <a
              href={`mailto:${email}`}
              className="group relative inline-flex items-center justify-between rounded-2xl bg-[color:var(--cream)] text-[color:var(--forest)] px-5 py-4"
            >
              <div>
                <div className="font-mono-code text-[10px] uppercase tracking-[0.2em] opacity-60">
                  send a message
                </div>
                <div className="font-display text-lg font-semibold break-all">
                  {email}
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
            </a>

            <button
              onClick={() => {
                navigator.clipboard.writeText(email);
                setCopied(true);
                setTimeout(() => setCopied(false), 1800);
              }}
              className="inline-flex items-center justify-between rounded-2xl border border-[color:var(--cream)]/20 px-5 py-4 hover:bg-[color:var(--cream)]/5 transition-colors"
            >
              <div className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-[color:var(--cream)]/80">
                {copied ? "Copied to clipboard" : "or copy email"}
              </div>
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
              {[
                {
                  l: <FaGithub className="h-4 w-4" />,
                  t: "GitHub",
                  h: "https://github.com/hemavathi-21",
                },
                {
                  l: <FaLinkedin className="h-4 w-4" />,
                  t: "LinkedIn",
                  h: "https://www.linkedin.com/in/hemavathi-rajini",
                },
                {
                  l: <IoCodeSlashSharp className="h-4 w-4" />,
                  t: "hackerrank",
                  h: "https://www.hackerrank.com/profile/hemavathi212005",
                },
              ].map((s) => (
                <a
                  // key={s.l}
                  href={s.h}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center justify-center gap-2  rounded-xl border border-[color:var(--cream)]/15 px-3 py-3 text-center font-mono-code text-[11px] uppercase tracking-[0.16em] text-[color:var(--cream)]/80 hover:bg-[color:var(--cream)]/5 transition-colors"
                >
                  <span className="shrink-0">{s.l}</span> {s.t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
