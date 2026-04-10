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
    <section id="education" className="py-24 relative bg-secondary/10 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">#</span> education_log
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full"></div>
        </div>

        <div
          ref={ref}
          className={`relative border-l-2 border-border ml-3 md:ml-6 space-y-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              <div className="absolute w-6 h-6 bg-background rounded-full -left-[13px] top-1 flex items-center justify-center border-2 border-primary shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                <GraduationCap className="w-3 h-3 text-primary" />
              </div>

              <div className="bg-secondary/30 border border-border rounded-2xl p-6 hover:bg-secondary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <div className="text-lg text-primary font-mono mt-1">@ {edu.school}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" /> {edu.location}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono bg-background px-3 py-1 rounded-full border border-border">
                      <Calendar className="w-3 h-3" /> {edu.period}
                    </div>
                    <span className={`text-xs font-mono px-2 py-1 rounded-full border ${edu.statusColor}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{edu.description}</p>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h) => (
                    <span key={h} className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border border-border">
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
