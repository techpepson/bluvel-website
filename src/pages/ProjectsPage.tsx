import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Globe,
  Smartphone,
  Apple,
  Code2,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SpotlightBackground } from "@/components/effects/SpotlightBackground";
import { cn } from "@/lib/utils";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import launchingSoon from "@/assets/launching_soon.png";

type Category = "All" | "Web App" | "Mobile App" | "iPhone" | "Android";

const categories: Category[] = [
  "All",
  "Web App",
  "Mobile App",
  "iPhone",
  "Android",
];

const projects = [
  {
    id: 1,
    title: "College of Medicine & Allied Sciences Web Portal",
    client: "College of Medicine and Allied Sciences",
    category: "Web App",
    description:
      "A comprehensive university web portal and management system for the College of Medicine and Allied Sciences, handling student applications, admissions, academic records, and institutional content.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    icon: Globe,
    highlight: true,
    metrics: [
      "5k+ Active Students",
      "99.9% Portal Uptime",
      "Automated Admissions",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
    url: "https://www.comas.edu.gh",
    image: project1,
  },
  {
    id: 2,
    title: "FaceCheck Attendance App",
    client: "College of Medicine and Allied Sciences",
    category: "Web App",
    description:
      "A secure and efficient face recognition-based attendance management system for real-time monitoring of students presence in classes.",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase", "Express"],
    icon: Globe,
    highlight: true,
    metrics: [
      "1.2k+ Clinical Trainees",
      "Real-Time Tracking",
      "Mobile-Optimized Layout",
    ],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    url: "https://face.comas.edu.gh",
    image: project2,
  },
];

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const iconMap: Record<Category, React.ReactNode> = {
    All: <Filter className="w-3.5 h-3.5" />,
    "Web App": <Globe className="w-3.5 h-3.5" />,
    "Mobile App": <Smartphone className="w-3.5 h-3.5" />,
    iPhone: <Apple className="w-3.5 h-3.5" />,
    Android: <Code2 className="w-3.5 h-3.5" />,
  };

  return (
    <div className="overflow-x-hidden pt-16">
      {/* Hero */}
      <SpotlightBackground className="py-24 bg-background grid-bg relative">
        <div className="absolute inset-0 spotlight pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary bg-primary/5"
            >
              Our Portfolio
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-6">
              Work We're
              <br />
              <span className="hero-gradient">Proud Of</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From small startups to large companies — here's a selection of
              products we've built and launched.
            </p>
          </motion.div>
        </div>
      </SpotlightBackground>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-30 backdrop-blur-lg bg-background/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex-shrink-0",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                {iconMap[cat]}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className={cn(
                    "group bg-card border border-border rounded-xl overflow-hidden card-glow flex flex-col",
                    project.highlight && "md:col-span-2 lg:col-span-1",
                  )}
                >
                  {/* Top visual */}
                  <div className="relative h-52 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <>
                        <div className="dot-pattern absolute inset-0" />
                        <div className="relative z-10 flex flex-col items-center gap-3">
                          <div
                            className={cn(
                              "w-16 h-16 rounded-2xl flex items-center justify-center",
                              project.bg,
                            )}
                          >
                            <project.icon
                              className={cn("w-8 h-8", project.color)}
                            />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground">
                            {project.client}
                          </span>
                        </div>
                      </>
                    )}
                    <div className="absolute top-3 right-3 z-10">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    {project.highlight && (
                      <div className="absolute top-3 left-3 z-10">
                        <Badge className="text-xs bg-primary">Featured</Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-foreground text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((m) => (
                        <span
                          key={m}
                          className="px-2 py-1 bg-primary/8 text-primary rounded-md text-xs font-medium border border-primary/15"
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-accent text-accent-foreground rounded text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all"
                      >
                        Visit live site <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all"
                      >
                        See project details{" "}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center py-16 px-4">
              <div className="relative w-64 h-64 mb-6 rounded-2xl overflow-hidden shadow-2xl border border-primary/20 bg-card group">
                <img
                  src={launchingSoon}
                  alt="Launching soon"
                  className="w-full h-full object-cover transition-transform duration-75 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 animate-pulse">
                Launching Projects Soon
              </h3>
              <p className="text-muted-foreground max-w-md">
                We are actively developing premium products in this category.
                Stay tuned as we prepare to showcase our upcoming digital
                solutions and mobile products!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary bg-primary/5"
            >
              How We Work
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A proven process refined over 8 years and 120+ projects.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Understanding Your Needs",
                desc: "In-depth conversations to understand your goals, what you need, and the best way to get there.",
              },
              {
                step: "02",
                title: "Design Phase",
                desc: "Research, layouts, and polished design previews — all reviewed and approved by you.",
              },
              {
                step: "03",
                title: "Building Your Product",
                desc: "Step-by-step building with weekly progress demos. Full transparency at every stage.",
              },
              {
                step: "04",
                title: "Launch & Ongoing Care",
                desc: "Getting your product live, keeping an eye on performance, and ongoing support and updates.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-7 relative overflow-hidden h-full">
                  <div className="text-6xl font-black text-primary/8 absolute -top-2 -right-2 leading-none select-none">
                    {item.step}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 relative z-10">
                    <span className="text-sm font-bold text-primary">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cta relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5 pointer-events-none" />
        <ScrollReveal className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-cta-foreground mb-6">
            Have an Idea for a Project?
          </h2>
          <p className="text-xl text-cta-foreground/80 mb-8">
            Let's turn your idea into reality. Get a free consultation and price
            quote today.
          </p>
          <Button
            size="lg"
            className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            asChild
          >
            <Link to="/contact" className="gap-2">
              Let's Talk <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </section>
    </div>
  );
}
