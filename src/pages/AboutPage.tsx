import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Target,
  Heart,
  Users,
  Lightbulb,
  Award,
  Globe,
  Code2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { SpotlightBackground } from "@/components/effects/SpotlightBackground";

/* const team = [
  {
    name: "Alex Rivera",
    role: "CEO & Co-Founder",
    bio: "10+ years building software. Previously at Google and Stripe. Passionate about creating products that make a difference.",
    initials: "AR",
    expertise: ["Strategy", "Planning", "Leadership"],
  },
  {
    name: "Jordan Kim",
    role: "CTO & Co-Founder",
    bio: "Software engineer and mobile expert. Built apps used by millions. Focused on speed and quality.",
    initials: "JK",
    expertise: ["Mobile", "Server Systems", "Automation"],
  },
  {
    name: "Maya Chen",
    role: "Head of Design",
    bio: "Product designer with a background in how people think. Creates designs that are easy to use, accessible, and beautiful.",
    initials: "MC",
    expertise: ["Design", "Visual Systems", "Research"],
  },
  {
    name: "Theo Okafor",
    role: "Lead Engineer",
    bio: "Specializes in fast, reliable websites and online systems. Open-source contributor and conference speaker.",
    initials: "TO",
    expertise: ["Web Apps", "Server Systems", "Data"],
  },
  {
    name: "Sara Novak",
    role: "iPhone Lead",
    bio: "Apple platform expert. Multiple apps featured on the App Store. Passionate about building great iPhone and iPad experiences.",
    initials: "SN",
    expertise: ["Apple Apps", "Apple Design", "AR Features"],
  },
  {
    name: "Dae-Jung Park",
    role: "Android Lead",
    bio: "Android expert focused on building fast, easy-to-use apps that work beautifully on every Android device.",
    initials: "DP",
    expertise: ["Android Apps", "Modern Design", "App Structure"],
  },
]; */

const values = [
  {
    icon: Target,
    title: "Precision Matters",
    desc: "We care about every detail. Every choice — from how things work to how they look — is made with purpose.",
  },
  {
    icon: Heart,
    title: "We Care About Results",
    desc: "We don't just deliver software. We care whether our work actually helps your business grow.",
  },
  {
    icon: Lightbulb,
    title: "Always Learning",
    desc: "Technology changes fast. We invest in staying up to date with the best tools and methods.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    desc: "We work alongside your team, not as an outside vendor. Your success is our success.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    desc: "We build for the long term. Well-organized code, clear documentation, and systems that are easy to maintain.",
  },
  {
    icon: Zap,
    title: "Speed with Quality",
    desc: "Fast doesn't mean sloppy. Our process is designed to deliver high-quality work on schedule.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Founded",
    desc: "Started as a two-person studio in Accra.",
  },
  {
    year: "2025",
    title: "First 2 Clients",
    desc: "Reached 2 business clients and grew the team to 3 people.",
  },
  {
    year: "2026",
    title: "Mobile Expansion",
    desc: "Added dedicated iPhone and Android teams.",
  },
  {
    year: "2026",
    title: "2+ Projects",
    desc: "Shipped over 5 products across web and mobile.",
  },
];

export function AboutPage() {
  return (
    <div className="overflow-x-hidden pt-16">
      {/* Hero */}
      <SpotlightBackground className="py-24 bg-background grid-bg relative">
        <div className="absolute inset-0 spotlight pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-4 border-primary/30 text-primary bg-primary/5"
              >
                About Us
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                We're the Team Behind
                <br />
                <span className="hero-gradient">Great Products</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Bluvel Cloud Systems is a technology company dedicated to
                helping businesses succeed online. We provide digital solutions,
                professional guidance, and expert support to help you grow and
                thrive in the digital world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact" className="gap-2">
                    Work With Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/projects" className="gap-2">
                    See Our Work <Code2 className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </SpotlightBackground>

      {/* Stats */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 2, suffix: "+", label: "Years Building", icon: Award },
              {
                value: 2,
                suffix: "+",
                label: "Products Shipped",
                icon: Code2,
              },
              { value: 2, suffix: "+", label: "Happy Clients", icon: Users },
              { value: 1, suffix: "", label: "Country Served", icon: Globe },
            ].map((stat, i) => (
              <ScrollReveal
                key={stat.label}
                delay={i * 0.1}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-extrabold text-foreground mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <Badge
                variant="outline"
                className="mb-4 border-primary/30 text-primary bg-primary/5"
              >
                Our Story
              </Badge>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
                Built to Help Businesses Thrive
              </h2>
              <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed">
                <p>
                  Bluvel Cloud Systems was founded by technology professionals
                  who understood what businesses really need: solutions that
                  work, support that cares, and partners they can trust. We saw
                  too many businesses struggle with outdated systems, unclear
                  technology decisions, and vendors who didn't really understand
                  their needs.
                </p>
                <p>
                  We set out to build a different kind of technology partner —
                  one that treats clients as collaborators, delivers quality on
                  time, and genuinely cares about your success. We believe in
                  combining expertise with accessibility, making technology work
                  for businesses of all sizes.
                </p>
                <p>
                  Today, we're a team of skilled professionals who've helped
                  many businesses with websites, mobile apps, and digital
                  solutions. Our clients range from small businesses to
                  established companies, and our commitment remains the same:
                  build solutions that actually work, that your customers love,
                  and that help your business grow.
                </p>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal direction="right">
              <div className="relative pl-8 border-l-2 border-border flex flex-col gap-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="text-xs font-bold text-primary mb-1 tracking-wide">
                      {m.year}
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {m.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary bg-primary/5"
            >
              Our Values
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-4">
              The Principles We Work By
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These aren't just words on a wall. They're the principles that
              guide every project and every hire.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-7 card-glow h-full">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section id="team" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary bg-primary/5"
            >
              Our Team
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-4">
              The People Who Make It Happen
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Talented engineers, designers, and strategists — all in one team.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-7 card-glow group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-lg font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {member.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {member.name}
                      </div>
                      <div className="text-sm text-primary">{member.role}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-accent text-accent-foreground rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* Hiring CTA */}
      <section id="careers" className="py-24 bg-cta relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5 pointer-events-none" />
        <ScrollReveal className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-cta-foreground mb-6">
            We're Always Hiring
          </h2>
          <p className="text-xl text-cta-foreground/80 mb-8">
            We're looking for talented people who want to build products that
            make a difference. Remote-first, competitive pay.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
              asChild
            >
              <Link to="/contact" className="gap-2">
                See Open Positions <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 border-cta-foreground/20 text-cta-foreground bg-blue-620 hover:bg-cta-foreground/10 transition-all"
              asChild
            >
              <Link to="/contact">Say Hello</Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
