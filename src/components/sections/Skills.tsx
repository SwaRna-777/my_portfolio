import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { useInView } from "@/hooks/use-in-view";

const SKILL_CATEGORIES = [
  {
    title: "Cloud Platforms",
    skills: [
      "Microsoft Azure", "Azure VMs", "Azure Storage", "Azure Virtual Networks",
      "Azure App Services", "Azure Monitor", "Log Analytics", "Azure CLI",
      "AWS EC2", "AWS S3", "AWS IAM",
    ],
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    title: "Infrastructure & Systems",
    skills: [
      "Linux Administration", "Windows Server Administration",
      "VMware ESXi", "Hybrid Cloud Infrastructure",
    ],
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    title: "DevOps & Automation",
    skills: [
      "CI/CD Fundamentals", "Infrastructure as Code", "Git Version Control",
      "PowerShell", "Bash", "Python Scripting",
    ],
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    title: "Containers & IaC",
    skills: [
      "Docker", "Kubernetes (Basic)", "Terraform", "ARM Templates",
    ],
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    title: "Networking & Security",
    skills: [
      "TCP/IP Networking", "Virtual Networks (VNet)", "DNS", "VPN Concepts",
      "Firewall & Network Security", "Microsoft Entra ID (Azure AD)",
      "RBAC", "MFA", "Conditional Access",
    ],
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    title: "Monitoring & AI / Data",
    skills: [
      "Azure Monitor", "Log Analytics", "Performance Monitoring",
      "Incident & Change Management",
      "Machine Learning Fundamentals", "Python for Data Analysis",
      "Data Processing & Visualization",
    ],
    color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  },
];

export function SkillsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="relative border-y border-border/60 bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent/60" aria-hidden="true"></span>
            Skills
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Practical tools for cloud, automation, and resilient systems.
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            Hands-on expertise across cloud platforms, systems administration, DevOps tooling, and data technologies.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <SpotlightCard
              key={idx}
              className="group h-full rounded-[1.5rem] border border-border/70 bg-card/70 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <h3 className="text-base font-semibold text-foreground mb-4 pb-2 border-b border-border/60 group-hover:border-accent/30 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`${category.color} rounded-full px-2.5 py-1 text-xs font-medium`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
