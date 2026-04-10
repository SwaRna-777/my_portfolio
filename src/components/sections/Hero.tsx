import { Terminal, Download, ArrowRight, Server, Cloud, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Tech background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/80 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Swarna Sagar<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Katuri</span>
            </h1>

            <p className="text-lg text-primary font-mono mb-4">
              Cloud & Infrastructure Engineer | DevOps & Automation | AI & Data Systems
            </p>

            <p className="text-base text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Building resilient cloud infrastructure and automating enterprise IT environments.
              Based in <span className="text-foreground font-medium">Berlin, Germany</span>.
              Currently pursuing MSc Data Science at Arden University.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 group">
                <a href="#skills">
                  View Skills
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-mono border-border hover:bg-secondary group">
                <a href="mailto:katuriswarnasagar3@gmail.com" className="flex items-center gap-2">
                  Get in Touch
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-muted-foreground font-mono text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-primary" /> Azure & AWS
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-accent" /> Cloud Native
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" /> Zero Trust
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up-delay">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-2xl blur-2xl opacity-40"></div>
            <div className="relative bg-secondary/80 backdrop-blur-xl border border-border rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-background/50 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  sagar@cloud-infra:~
                </div>
                <div className="w-16"></div>
              </div>

              <div className="p-6 font-mono text-sm md:text-base leading-relaxed text-slate-300">
                <div className="mb-4">
                  <span className="text-primary">➜</span> <span className="text-accent">~</span> whoami
                  <br />
                  <span className="text-muted-foreground">Swarna Sagar Katuri — Cloud & Infra Engineer</span>
                </div>
                <div className="mb-4">
                  <span className="text-primary">➜</span> <span className="text-accent">~</span> ./skills.sh
                  <br />
                  <span className="text-emerald-400">[OK]</span> Microsoft Azure — VMs, VNets, App Services
                  <br />
                  <span className="text-emerald-400">[OK]</span> Linux & Windows Server Administration
                  <br />
                  <span className="text-emerald-400">[OK]</span> Docker, Kubernetes (foundational)
                  <br />
                  <span className="text-emerald-400">[OK]</span> PowerShell, Bash, Python Scripting
                </div>
                <div>
                  <span className="text-primary">➜</span> <span className="text-accent">~</span> systemctl status career
                  <br />
                  <span className="text-emerald-400">●</span> career.service — Active in Berlin, DE
                  <br />
                  <span className="pl-4 text-muted-foreground">Status:</span> <span className="text-emerald-400 font-bold">open to opportunities</span>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-primary">➜</span> <span className="text-accent">~</span>
                  <span className="animate-pulse w-2 h-5 bg-foreground ml-2 inline-block align-middle"></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
