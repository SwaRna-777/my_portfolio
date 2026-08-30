import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const EDUCATION = [
  {
    degree: "Master of Science — Data Science",
    school: "Arden University",
    location: "Berlin, Germany",
    period: "Aug 2025 – Expected 2026",
    status: "In Progress",
    statusColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    description:
      "Expanding knowledge in artificial intelligence, data analytics, machine learning, and intelligent systems. Applying data science principles to cloud infrastructure and automation challenges.",
    highlights: ["Machine Learning", "Data Analytics", "AI Systems", "Python for Data Science", "Data Visualization"],
  },
  {
    degree: "Bachelor of Engineering",
    school: "Sathyabama University",
    location: "India",
    period: "Jun 2015 – Jul 2019",
    status: "Completed",
    statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    description:
      "Foundation in engineering principles, computer science, and systems. Built the technical base that underpins current expertise in infrastructure and systems administration.",
    highlights: ["Computer Science", "Systems Engineering", "Networking", "Programming"],
  },
];

export function EducationSection() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="relative border-t border-border/60 bg-secondary/10 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent/60" aria-hidden="true"></span>
            Education
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Academic foundation for infrastructure and data systems.
          </h2>
        </div>

        <div
          ref={ref}
          className={`relative border-l border-border/70 ml-3 md:ml-6 space-y-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              <div className="absolute w-6 h-6 bg-background rounded-full -left-[13px] top-1 flex items-center justify-center border border-accent/50 shadow-[0_0_24px_hsl(var(--accent)/0.22)]">
                <GraduationCap className="w-3 h-3 text-accent" />
              </div>

              <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 sm:p-7">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <div className="text-lg text-accent mt-1">{edu.school}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" /> {edu.location}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm bg-background/70 px-3 py-1 rounded-full border border-border">
                      <Calendar className="w-3 h-3" /> {edu.period}
                    </div>
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${edu.statusColor}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{edu.description}</p>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h) => (
                    <span key={h} className="text-xs text-muted-foreground bg-background/70 px-2.5 py-1 rounded-full border border-border">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
