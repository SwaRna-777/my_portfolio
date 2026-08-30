import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Network, Lock, Brain } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-6 bg-accent/60" aria-hidden="true"></span>
              About
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Infrastructure experience with a product mindset.
            </h2>
          </div>
          <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            I work close to systems where reliability matters: cloud platforms, servers, automation, identity, and monitoring.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl mix-blend-screen"></div>
              <div className="absolute inset-4 border border-border/70 rounded-[2rem] rotate-3 transition-transform hover:rotate-0 duration-500"></div>
              <div className="absolute inset-4 border border-accent/30 rounded-[2rem] -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
              <img
                src={`${import.meta.env.BASE_URL}images/avatar.png`}
                alt="Swarna Sagar Katuri"
                className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.28)] border border-border/70 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.12)] sm:p-8">
              <div className="space-y-5 text-base text-muted-foreground">
                <p className="text-lg leading-8">
                  I am <strong className="text-foreground font-semibold">Swarna Sagar Katuri</strong>, a Cloud & Infrastructure Engineer based in <strong className="text-foreground">Berlin, Germany</strong>, with hands-on experience supporting enterprise IT environments.
                </p>
                <p className="leading-8">
                  My work spans <strong className="text-foreground">Linux and Windows administration</strong>, VMware ESXi, Azure/AWS cloud services, infrastructure monitoring, and scripting with Python, Bash, and PowerShell.
                </p>
                <p className="leading-8">
                  I am currently pursuing a <strong className="text-foreground">Master's degree in Data Science</strong> at Arden University, bringing AI and data thinking into modern cloud-native operations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">
              <Card className="rounded-2xl bg-background/40 border-border/60 hover:-translate-y-0.5 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Cloud & Compute</h3>
                    <p className="text-xs text-muted-foreground">Azure, AWS, VMware ESXi</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-background/40 border-border/60 hover:-translate-y-0.5 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent shrink-0">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">DevOps & Automation</h3>
                    <p className="text-xs text-muted-foreground">CI/CD, Terraform, Git</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-background/40 border-border/60 hover:-translate-y-0.5 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500 shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Identity & Security</h3>
                    <p className="text-xs text-muted-foreground">Azure AD, RBAC, MFA</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-background/40 border-border/60 hover:-translate-y-0.5 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 shrink-0">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">AI & Data Science</h3>
                    <p className="text-xs text-muted-foreground">Python, ML, Data Analytics</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
