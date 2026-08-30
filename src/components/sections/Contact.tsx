import { Mail, MapPin, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";

export function ContactSection() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border/60 bg-background py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" aria-hidden="true"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent/60" aria-hidden="true"></span>
            Contact
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Let’s talk about cloud roles and infrastructure work.
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            Open to cloud & infrastructure roles, DevOps positions, and interesting projects. Let's connect.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="mailto:katuriswarnasagar3@gmail.com" className="group">
            <Card className="rounded-[1.5rem] bg-card/70 border-border/70 h-full hover:-translate-y-0.5 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-accent/10 border border-border rounded-2xl group-hover:bg-accent/20 transition-colors shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="text-foreground text-sm break-all">katuriswarnasagar3@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href="tel:+49176622505664" className="group">
            <Card className="rounded-[1.5rem] bg-card/70 border-border/70 h-full hover:-translate-y-0.5 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-accent/10 border border-border rounded-2xl group-hover:bg-accent/20 transition-colors shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-foreground text-sm">+49 176 622 505 664</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://www.linkedin.com/in/katuri-swarna-sagar-959a07190/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="rounded-[1.5rem] bg-card/70 border-border/70 h-full hover:-translate-y-0.5 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 border border-border rounded-xl group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">LinkedIn</p>
                  <p className="text-foreground text-sm">katuri-swarna-sagar</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <Card className="rounded-[1.5rem] bg-card/70 border-border/70 h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 border border-border rounded-xl shrink-0">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                <p className="text-foreground text-sm">Berlin, Germany</p>
                <p className="text-xs text-muted-foreground mt-1">Open to remote & hybrid roles</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium" asChild>
            <a href="mailto:katuriswarnasagar3@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Send an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
