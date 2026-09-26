export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface">
      <div className="mx-auto w-full xl:max-w-[90%] px-5 md:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-display text-lg font-semibold">Hemavathi R.</div>
          <div className="font-mono-code text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-1">
            Frontend Developer · India
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono-code text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <a
            href="mailto:hemavathitechnical@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            hemavathitechnical@gmail.com
          </a>
          <a
            href="https://github.com/hemavathi-21"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hemavathi-rajini "
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/resume-hema.pdf"
            download="resume-hema.pdf"
            className="hover:text-foreground transition-colors"
          >
            Resume ↓
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto w-full xl:max-w-[90%] px-5 md:px-8 py-4 flex items-center justify-between font-mono-code text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()} — Built with intention</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Available for work
          </span>
        </div>
      </div>
    </footer>
  );
}
