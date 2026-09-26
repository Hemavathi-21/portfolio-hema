import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiFramer } from "react-icons/si";
import { ShieldCheck } from "lucide-react";
import { Gauge } from "lucide-react";
import { LuFileCode2 } from "react-icons/lu";
import type { IconType } from "react-icons";

const groups = [
  {
    k: "Core",
    items: [
      { icon: FaReact, name: "React" },
      { icon: FaJs, name: "JavaScript" },
      { icon: LuFileCode2, name: "HTML / CSS" },
    ],
  },
  {
    k: "UI & Motion",
    items: [
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiFramer, name: "Framer Motion" },
      { icon: ShieldCheck, name: "Accessibility" },
    ],
  },
  {
    k: "Learning & Familiar",
    items: [
      { icon: SiTypescript, name: "TypeScript" },
      { icon: FaGitAlt, name: "Git / GitHub" },
      { icon: Gauge, name: "Performance Optimization" },
    ],
  },
];

// flatten all skills once
const allSkills = groups.flatMap((g) => g.items);

export function Skills() {
  const [active, setActive] = useState("All");

  const isActive = (skill: {
    name: string;
    icon: IconType | React.ComponentType<{ className?: string }>;
  }) => {
    if (active === "All") return true;

    const group = groups.find((g) => g.k === active);
    return group?.items.some((item) => item.name === skill.name);
  };

  return (
    <section className="mx-auto w-full xl:max-w-[90%] px-5 md:px-8 mt-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="eyebrow">/ stack</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
            Technologies & Skills
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {["All", ...groups.map((g) => g.k)].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-4 py-2 font-mono-code text-[11px] uppercase tracking-[0.16em] border transition-all duration-200 ${
                active === tab
                  ? "bg-foreground text-background border-foreground"
                  : "bg-surface text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Skills grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-x-8 xl:gap-x-16 2xl:gap-x-20 "
      >
        {allSkills.map((skill) => {
          const highlighted = isActive(skill);
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                scale: highlighted ? 1 : 0.96,
              }}
              transition={{ duration: 0.25 }}
              className={`group relative flex flex-row items-center gap-4 rounded-2xl border py-2 lg:py-3 px-4 lg:px-6 transition-all duration-300 ${
                highlighted
                  ? "border-gradient-to-r from-[color:var(--sage)] to-[color:var(--tan)] border-2 bg-card shadow-md"
                  : "border-border bg-card/40 opacity-60"
              }`}
            >
              <Icon className="h-5 w-5 lg:h-6 lg:w-6 shrink-0" />
              <div className="font-display text-lg font-semibold">
                {skill.name}
              </div>

              {/* subtle highlight indicator */}
              {highlighted && (
                <motion.div
                  layoutId={`glow-${skill.name}`}
                  className="absolute inset-0 rounded-2xl bg-[color:var(--sage)]/5 pointer-events-none"
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
