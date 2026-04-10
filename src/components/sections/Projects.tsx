import { Server, LayoutPanelLeft, GitBranch, Brain, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <section id="projects" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">#</span> architecture_builds
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Infrastructure projects, automation initiatives, and applied data science work.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="h-full"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <Card className="h-full flex flex-col bg-secondary/20 border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="mb-3 p-3 bg-secondary/50 rounded-xl w-fit border border-border group-hover:bg-primary/10 transition-colors">
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-mono text-xs bg-secondary/60">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-border/50">
                  <Button variant="ghost" size="sm" className="font-mono text-xs hover:text-primary" asChild>
                    <a href="#contact" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" /> Discuss this project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
