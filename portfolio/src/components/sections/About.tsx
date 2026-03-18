import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Network, Lock, Brain } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">#</span> about_me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full"></div>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl mix-blend-screen"></div>
              <div className="absolute inset-4 border-2 border-primary/30 rounded-3xl rotate-6 transition-transform hover:rotate-0 duration-500"></div>
              <div className="absolute inset-4 border-2 border-accent/30 rounded-3xl -rotate-6 transition-transform hover:rotate-0 duration-500"></div>
              <img
                src={`${import.meta.env.BASE_URL}images/avatar.png`}
                alt="Swarna Sagar Katuri"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl border border-border grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground">
            <p className="text-lg leading-relaxed">
              I am <strong className="text-foreground font-semibold">Swarna Sagar Katuri</strong> — a Cloud & Infrastructure Engineer based in <strong className="text-foreground">Berlin, Germany</strong> with hands-on experience supporting enterprise IT environments and developing expertise in cloud platforms, DevOps practices, and automation.
            </p>
            <p className="leading-relaxed">
              Skilled in <strong className="text-foreground">Linux and Windows system administration</strong>, virtualization (VMware ESXi), cloud services (Azure, AWS), infrastructure monitoring, and scripting using Python, Bash, and PowerShell.
            </p>
            <p className="leading-relaxed">
              Currently pursuing a <strong className="text-foreground">Master's degree in Data Science</strong> at Arden University, Germany, expanding my knowledge in artificial intelligence, data analytics, and intelligent systems. Passionate about bridging the gap between traditional infrastructure and modern cloud-native solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Card className="bg-secondary/50 border-border/50 hover:border-primary/50 transition-colors">
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

              <Card className="bg-secondary/50 border-border/50 hover:border-accent/50 transition-colors">
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

              <Card className="bg-secondary/50 border-border/50 hover:border-emerald-500/50 transition-colors">
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

              <Card className="bg-secondary/50 border-border/50 hover:border-purple-500/50 transition-colors">
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
