import { useState, useEffect } from "react";
import { Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
    >
      <nav
        aria-label="Primary"
        className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-300 sm:px-4 ${
          isScrolled
            ? "border-border/70 bg-card/80 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div
          className="flex w-full items-center justify-between"
        >
          <a href="#home" className="group flex items-center gap-2.5 pl-1">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-foreground transition-transform group-hover:scale-105">
              SS
            </span>
            <span className="hidden text-sm font-medium tracking-tight sm:block">
              Swarna Sagar Katuri
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] hover:bg-primary/90 active:scale-95 sm:inline-flex">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>

            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-foreground/80 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="absolute left-4 right-4 top-20 rounded-[1.5rem] border border-border/70 bg-card/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:hidden">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-full px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
