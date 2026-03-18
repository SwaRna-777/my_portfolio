import { Mail, MapPin, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";

export function ContactSection() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">#</span> init_connection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to cloud & infrastructure roles, DevOps positions, and interesting projects. Let's connect.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="mailto:katuriswarnasagar3@gmail.com" className="group">
            <Card className="bg-secondary/30 border-border h-full hover:border-primary/50 hover:bg-secondary/60 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-primary/10 border border-border rounded-xl group-hover:bg-primary/20 transition-colors shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="font-mono text-foreground text-sm break-all">katuriswarnasagar3@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href="tel:+49176622505664" className="group">
            <Card className="bg-secondary/30 border-border h-full hover:border-primary/50 hover:bg-secondary/60 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-primary/10 border border-border rounded-xl group-hover:bg-primary/20 transition-colors shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                  <p className="font-mono text-foreground text-sm">+49 176 622 505 664</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://www.linkedin.com/in/katuri-swarna-sagar-959a07190/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="bg-secondary/30 border-border h-full hover:border-blue-500/50 hover:bg-secondary/60 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 border border-border rounded-xl group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">LinkedIn</p>
                  <p className="font-mono text-foreground text-sm">katuri-swarna-sagar</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <Card className="bg-secondary/30 border-border h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 border border-border rounded-xl shrink-0">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                <p className="font-mono text-foreground text-sm">Berlin, Germany</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">Open to remote & hybrid roles</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono" asChild>
            <a href="mailto:katuriswarnasagar3@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Send an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
