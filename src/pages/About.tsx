import { motion } from "framer-motion";
import { Contact } from "../components/sections/Contact";

// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       { title: "About — Hema R." },
//       {
//         name: "description",
//         content:
//           "About Hema R. — frontend developer focused on building user-friendly, polished web applications.",
//       },
//       { property: "og:title", content: "About — Hema R." },
//       { property: "og:description", content: "Frontend developer focused on craft and product." },
//     ],
//   }),
//   component: AboutPage,
// });

const values = [
  {
    k: "Thoughtful UI",
    v: "I care about the small details that make an interface feel clear, polished, and easy to use.",
  },
  {
    k: "Keep Learning",
    v: "I enjoy understanding how things work and gradually improving my frontend skills through real projects and experimentation.",
  },
  {
    k: "Performance",
    v: "I believe a good interface should feel fast and responsive, not just look good.",
  },
  {
    k: "User-first",
    v: "I aim to build interfaces that are intuitive, responsive, and comfortable to use across different devices.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 md:px-8 py-12 mt-14">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="eyebrow">/ about</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.98] text-balance">
            I build user-friendly web apps,
            <span className="text-muted-foreground">
              {" "}
              one detail at a time.
            </span>
          </h1>
        </motion.header>

        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              I'm Hema — a frontend developer who discovered a genuine interest
              in web development during college. What began with learning the
              fundamentals has grown into building production React
              applications, where I enjoy creating responsive interfaces and
              improving the overall user experience.
            </p>

            <p>
              Most of my work is centered around{" "}
              <strong className="text-foreground">React</strong>,{" "}
              <strong className="text-foreground">JavaScript</strong>,{" "}
              <strong className="text-foreground">Tailwind CSS</strong>, and
              modern frontend development. I enjoy breaking interfaces into
              reusable React components, building responsive layouts, and
              creating intuitive user experiences that work consistently across
              different devices.
            </p>

            <p>
              Working on production e-commerce applications has taught me to
              look beyond the interface. I focus on performance, accessibility,
              SEO, and writing maintainable code, believing that small
              improvements often have the biggest impact on the overall user
              experience.
            </p>

            <p>
              I'm naturally curious about how modern frontend applications are
              built. Whether it's strengthening my React fundamentals, learning
              Next.js and TypeScript, or exploring performance optimization, I
              enjoy understanding not just how something works, but why it's
              built that way. I believe continuous learning is one of the most
              important parts of being a developer.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="eyebrow">/ now</div>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>Reading</span>
                  <span className="font-mono-code text-muted-foreground">
                    Frontend docs
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Building</span>
                  <span className="font-mono-code text-muted-foreground">
                    Portfolio
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Learning</span>
                  <span className="font-mono-code text-muted-foreground">
                    Next.js • TypeScript
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Exploring</span>
                  <span className="font-mono-code text-muted-foreground">
                    Web Performance
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-4 md:p-6">
              <div className="eyebrow">/ specialties</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "Responsive UI",
                  "E-commerce Frontends",
                  "Tailwind CSS",
                  "UI Development",
                ].map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-20">
          <div className="eyebrow">/ what I care about</div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="font-display text-xl font-semibold">{v.k}</div>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {v.v}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
