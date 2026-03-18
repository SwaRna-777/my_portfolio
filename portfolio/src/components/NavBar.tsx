import { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border shadow-lg shadow-black/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight">
              sagar<span className="text-primary">.dev</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-mono"
                  >
                    <span className="text-primary/50 mr-1">/</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono shadow-lg shadow-primary/20">
              <a href="#contact">init_contact</a>
            </Button>
          </nav>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors font-mono"
              >
                <span className="text-primary/50 mr-2">/</span>
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full bg-primary font-mono">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>init_contact</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
