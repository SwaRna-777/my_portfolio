import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/60 py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-foreground">
            SS
          </span>
          <span className="font-medium tracking-tight text-foreground">
            Swarna Sagar Katuri
          </span>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Swarna Sagar Katuri · Berlin, Germany
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:katuriswarnasagar3@gmail.com"
            className="p-2 rounded-full border border-border hover:border-accent hover:text-accent text-muted-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/katuri-swarna-sagar-959a07190/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border hover:border-accent hover:text-accent text-muted-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-2 text-xs font-mono text-accent bg-card px-3 py-1.5 rounded-full border border-border ml-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
}
