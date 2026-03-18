import { Badge } from "@/components/ui/badge";
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
    <section id="skills" className="py-24 bg-secondary/20 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">#</span> tech_stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on expertise across cloud platforms, systems administration, DevOps tooling, and data technologies.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="group h-full bg-background border border-border rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <h3 className="text-base font-semibold font-mono text-foreground mb-4 pb-2 border-b border-border group-hover:border-primary/30 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`${category.color} px-2 py-1 text-xs font-medium rounded-lg`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
