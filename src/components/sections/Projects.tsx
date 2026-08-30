import { Server, LayoutPanelLeft, GitBranch, Brain, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { useInView } from "@/hooks/use-in-view";

const PROJECTS = [
  {
    title: "Azure Hybrid Cloud Setup",
    description:
      "Designed and deployed a hybrid cloud environment using Microsoft Azure Virtual Machines, Virtual Networks, and Azure Monitor. Configured VNet peering, DNS, and IAM using RBAC and Azure AD for secure access management.",
    icon: <Server className="w-7 h-7 text-primary" />,
    tags: ["Azure", "VNet", "Azure AD", "RBAC", "Azure Monitor", "Log Analytics"],
  },
  {
    title: "Linux & Windows Server Hardening",
    description:
      "Administered both Linux (Ubuntu/RHEL) and Windows Server environments, implementing group policy hardening, user provisioning automation, and performance monitoring using Azure Monitor and Log Analytics.",
    icon: <LayoutPanelLeft className="w-7 h-7 text-accent" />,
    tags: ["Linux", "Windows Server", "PowerShell", "Bash", "Group Policy", "VMware ESXi"],
  },
  {
    title: "CI/CD & IaC Automation",
    description:
      "Built foundational CI/CD pipelines using Git-based workflows and explored Infrastructure as Code with Terraform and ARM Templates. Automated environment provisioning and configuration management tasks.",
    icon: <GitBranch className="w-7 h-7 text-emerald-400" />,
    tags: ["Git", "Terraform", "ARM Templates", "Docker", "CI/CD", "Bash"],
  },
  {
    title: "Data Science & ML Exploration",
    description:
      "Applied Python-based data analysis and machine learning fundamentals as part of MSc Data Science studies. Built data processing pipelines and visualization dashboards combining cloud infrastructure knowledge with AI concepts.",
    icon: <Brain className="w-7 h-7 text-purple-400" />,
    tags: ["Python", "Machine Learning", "Data Analysis", "Visualization", "Pandas"],
  },
];

export function ProjectsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="relative border-t border-border/60 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent/60" aria-hidden="true"></span>
            Projects
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Selected infrastructure and automation work.
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            Infrastructure projects, automation initiatives, and applied data science work.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="h-full"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <SpotlightCard className="h-full overflow-hidden rounded-[2rem] transition-all duration-300 hover:-translate-y-1">
                <Card className="h-full flex flex-col border-border/70 bg-card/70 transition-all duration-300 group hover:border-accent/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
                  <CardHeader className="pb-4">
                    <div className="mb-3 p-3 bg-secondary/50 rounded-2xl w-fit border border-border group-hover:bg-accent/10 transition-colors">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full font-mono text-[11px] uppercase tracking-[0.16em] bg-secondary/60">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-border/50">
                    <Button variant="ghost" size="sm" className="rounded-full text-xs font-medium hover:text-accent" asChild>
                      <a href="#contact" className="flex items-center gap-1">
                        <ExternalLink className="w-4 h-4" /> Discuss this project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
