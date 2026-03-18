import { Terminal, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-mono font-bold text-lg tracking-tight text-foreground">
            sagar<span className="text-primary">.dev</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground font-mono text-center">
          © {new Date().getFullYear()} Swarna Sagar Katuri · Berlin, Germany
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:katuriswarnasagar3@gmail.com"
            className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/katuri-swarna-sagar-959a07190/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-border hover:border-blue-400 hover:text-blue-400 text-muted-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-background px-3 py-1.5 rounded-full border border-border ml-2">
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
