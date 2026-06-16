import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Globe,
  Smartphone,
  Zap,
  CheckCircle,
  ChevronRight,
  ExternalLink,
  Users,
  TrendingUp,
  Award,
  Clock,
  Code2,
  Shield,
  Lightbulb,
  Wifi,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/effects/ScrollReveal"
import { AnimatedCounter } from "@/components/effects/AnimatedCounter"
import { TypewriterText } from "@/components/effects/TypewriterText"
import { MovingBorderCard } from "@/components/effects/MovingBorderCard"
import { SpotlightBackground } from "@/components/effects/SpotlightBackground"
import { cn } from "@/lib/utils"
import project1 from "@/assets/project1.png"
import project2 from "@/assets/project2.png"

const services = [
  {
    icon: Globe,
    title: "Professional Business Website Design",
    description: "Custom websites designed to attract customers and grow your business online.",
    color: "text-primary",
    bg: "bg-primary/10",
    href: "/services#web",
  },
  {
    icon: Smartphone,
    title: "Custom Mobile Applications",
    description: "Mobile apps for iPhone and Android that deliver seamless user experiences.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    href: "/services#mobile",
  },
  {
    icon: Code2,
    title: "Digital Business Solutions",
    description: "Automation and optimization tools designed specifically for your business needs.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    href: "/services#solutions",
  },
  {
    icon: Lightbulb,
    title: "Technology Advisory",
    description: "Expert guidance on technology strategy and digital transformation.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    href: "/services#advisory",
  },
  {
    icon: Wifi,
    title: "Computer Networking",
    description: "Internet connectivity, network troubleshooting, and infrastructure setup for reliable operations.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    href: "/services#networking",
  },
]

const stats = [
  { value: 3, suffix: "+", label: "Projects Completed", icon: CheckCircle },
  { value: 3, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 2, suffix: " yrs", label: "Years of Experience", icon: Award },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: TrendingUp },
]

const clients = [
  "College of Medicine and Allied Sciences", "Vertex Solutions", "Digital Hub", "Tech Forward",
  "Innovation Labs", "Growth Systems", "Future Tech", "Smart Business",
  "Premier Digital", "Advanced Systems", "Creative Tech", "Strategic Cloud",
]

const testimonials = [
  {
    name: "Dickson Ackah",
    role: "Owner, Local Business",
    avatar: "DA",
    content: "Bluvel Cloud Systems completely transformed our online presence. Their team was professional, responsive, and delivered exactly what we needed. Highly recommended!",
    rating: 5,
  },
  {
    name: "Dr. Yussif Osman",
    role: "Business Owner",
    avatar: "DYO",
    content: "We partnered with Bluvel for our digital transformation project and couldn't be happier. Their solutions are robust, scalable, and designed for real business needs.",
    rating: 5,
  },
]

const featuredProjects = [
  {
    title: "College of Medicine & Allied Sciences Web Portal",
    category: "Web App",
    description: "A comprehensive university web portal and management system for the College of Medicine and Allied Sciences, supporting academic operations and student applications.",
    href: "/projects",
    image: project1,
  },
  {
    title: "FaceCheck Attendance App",
    category: "Web App",
    description: "A secure and efficient face recognition-based attendance management system for real-time monitoring of students presence in classes.",
    href: "/projects",
    image: project2,
  },
]

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <SpotlightBackground className="relative min-h-screen flex items-center pt-16 grid-bg">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 spotlight pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="outline" className="gap-1.5 px-3 py-1.5 text-xs border-primary/30 text-primary bg-primary/5">
                <Zap className="w-3 h-3" />
                Turning ideas into real solutions
              </Badge>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
            >
              <span className="hero-gradient">We Build</span>
              <br />
              <span className="text-foreground">
                <TypewriterText
                  words={["Websites", "Mobile Apps", "Business Solutions", "Digital Tools"]}
                  className="text-primary"
                />
              </span>
              <br />
              <span className="hero-gradient">That Work</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10"
            >
              Bluvel Cloud Systems is a technology company that builds digital solutions for businesses of all sizes. We help you reach customers, streamline operations, and grow your business online.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Button size="lg" className="gap-2 px-6 h-12 text-base" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-6 h-12 text-base bg-secondary" asChild>
                <Link to="/projects">
                  See Our Work
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              {["No long-term contracts", "Clear upfront pricing", "Regular progress updates"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </div>
      </SpotlightBackground>

      {/* Stats Section */}
      <section className="py-20 border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-extrabold text-foreground mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5">
              What We Do
            </Badge>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">
              Complete Business Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From websites to mobile apps, we deliver everything your business needs to succeed online.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <MovingBorderCard
                  containerClassName="h-full bg-card"
                  className="p-8 h-full"
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-5", service.bg)}>
                    <service.icon className={cn("w-6 h-6", service.color)} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </MovingBorderCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services" className="gap-2">
                See All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5">
                Our Work
              </Badge>
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
                Featured Projects
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/projects" className="gap-2">
                See all projects <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 card-glow h-full">
                  {/* Project image/visual */}
                  <div className="h-48 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <>
                        <div className="dot-pattern absolute inset-0 opacity-50" />
                        <div className="relative z-10 text-center p-4">
                          <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                            <Code2 className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                      </>
                    )}
                    <div className="absolute top-3 left-3 z-10">
                      <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground text-lg mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <Link
                      to={project.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all"
                    >
                      See project details <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Scroll */}
      <section className="py-20 bg-background border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <ScrollReveal className="text-center">
            <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-2">
              Trusted By
            </p>
            <h3 className="text-2xl font-bold text-foreground">
              Businesses That Trust Us
            </h3>
          </ScrollReveal>
        </div>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client}-${i}`}
                  className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-card text-muted-foreground font-medium text-sm hover:text-foreground hover:border-primary/40 transition-colors cursor-default flex-shrink-0"
                >
                  <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                    <Shield className="w-3 h-3 text-primary" />
                  </div>
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5">
              Testimonials
            </Badge>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Don't take our word for it — hear from the teams we've worked with.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} delay={i * 0.12}>
                <div className="bg-card border border-border rounded-xl p-8 card-glow h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array(testimonial.rating).fill(0).map((_, j) => (
                      <svg key={j} className="w-4 h-4 fill-amber-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-foreground/90 leading-relaxed mb-6 flex-1 text-[15px]">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5">
                Why Bluvel
              </Badge>
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground mb-6">
                Great Work, Delivered On Time
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine deep know-how with a focus on what matters most: making sure your product works well and launches on time. Every decision is made with care and purpose.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: Zap, title: "Fast Delivery", desc: "Regular updates, weekly progress demos, and on-time launches every time." },
                  { icon: Shield, title: "Secure by Design", desc: "Safety and privacy built in from day one, not added as an afterthought." },
                  { icon: Code2, title: "Built to Last", desc: "Reliable, easy-to-maintain software designed for the long haul." },
                  { icon: Clock, title: "Ongoing Support", desc: "We're your long-term partner, not just a one-time service." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                {/* Process steps */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { step: "01", title: "Understanding Your Needs", desc: "We learn your goals, your customers, and what you need." },
                    { step: "02", title: "Design Phase", desc: "Design that your customers will love, based on research." },
                    { step: "03", title: "Building Your Product", desc: "Step-by-step building with weekly progress updates." },
                    { step: "04", title: "Launch & Grow", desc: "Launch, keep an eye on things, and keep making it better." },
                  ].map((item, i) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
                    >
                      <div className="text-3xl font-black text-primary/20 mb-2">{item.step}</div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cta relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-cta-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cta-foreground/80 mb-10 max-w-2xl mx-auto">
              Let's talk about your project. We'll give you a free consultation and a clear price quote within 48 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                asChild
              >
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-cta-foreground/20 text-cta-foreground hover:bg-cta-foreground/10 transition-all bg-blue"
                asChild
              >
                <Link to="/projects">See Our Work</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
