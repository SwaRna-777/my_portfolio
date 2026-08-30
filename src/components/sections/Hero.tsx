import { ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_78%)]"></div>
        <div className="absolute left-1/2 top-[-8%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"></div>
        <div className="absolute right-[6%] top-[28%] h-[320px] w-[320px] rounded-full bg-accent/10 blur-[110px]"></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:max-w-5xl">

          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              Available for Cloud & DevOps Roles in Germany
            </span>
          </div>

          <div className="animate-fade-in-up-delay">
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-gradient">I build cloud systems</span>
              <span className="block text-gradient">that run reliably.</span>
            </h1>
          </div>

          <div className="animate-fade-in-up-delay">
            <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              I'm <span className="font-medium text-foreground">Swarna Sagar Katuri</span>, a Cloud & Infrastructure Engineer based in Berlin. I design Azure/AWS environments, automate operations, and bring a reliability-first mindset to modern infrastructure.
            </p>
          </div>

          <div className="animate-fade-in-up-delay">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" asChild className="group rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_10px_35px_rgba(0,0,0,0.16)] active:scale-[0.98]">
                <a href="#projects">
                  Explore selected work
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-border/70 bg-card/60 px-6 py-3 text-sm font-medium backdrop-blur transition-all duration-300 hover:border-accent/50 hover:text-accent">
                <a href="mailto:katuriswarnasagar3@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-in-up-delay">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                Berlin, Germany
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Azure · AWS · DevOps · Automation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
