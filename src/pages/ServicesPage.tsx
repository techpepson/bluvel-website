import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Globe,
  Smartphone,
  Code2,
  ArrowRight,
  Database,
  Cloud,
  Lock,
  BarChart,
  RefreshCw,
  Palette,
  Server,
  CheckCircle,
  Lightbulb,
  MessageCircle,
  Wifi,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/effects/ScrollReveal"
import { MovingBorderCard } from "@/components/effects/MovingBorderCard"
import { SpotlightBackground } from "@/components/effects/SpotlightBackground"
import { cn } from "@/lib/utils"

const mainServices = [
  {
    id: "web",
    icon: Globe,
    title: "Professional Business Website Design",
    headline: "Websites That Bring Results",
    description:
      "We design custom websites that showcase your business and bring customers to you. From simple business sites to full-featured platforms, every website is built to perform.",
    features: [
      "Custom, modern website design",
      "Mobile-friendly and fast",
      "Search engine optimized",
      "Easy to update and maintain",
      "Integrated contact and booking forms",
      "Professional hosting setup",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
    borderColor: "border-primary/20",
    accentBg: "bg-primary/5",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Custom Mobile Applications",
    headline: "Apps for iPhone and Android",
    description:
      "Build one app that works on both iPhone and Android at the same time. We create mobile solutions that give your customers a great experience on every device.",
    features: [
      "Works on iPhone and Android",
      "One set of features on each phone",
      "Works without internet when needed",
      "Push notifications and alerts",
      "Published on App Store and Google Play",
      "Regular updates and improvements",
    ],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    accentBg: "bg-blue-500/5",
  },
  {
    id: "solutions",
    icon: Code2,
    title: "Digital Business Solutions",
    headline: "Automation and Business Tools",
    description:
      "Streamline your operations with custom software designed for your specific business needs. Automate repetitive tasks and focus on growth.",
    features: [
      "Custom business software",
      "Workflow automation",
      "Data management systems",
      "Integration with existing tools",
      "Real-time reporting and analytics",
      "Scalable infrastructure",
    ],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    accentBg: "bg-emerald-500/5",
  },
  {
    id: "advisory",
    icon: Lightbulb,
    title: "Technology Advisory",
    headline: "Expert Guidance for Digital Success",
    description:
      "Navigate technology decisions with confidence. Our advisors help you plan your digital strategy and make smart technology choices for your business.",
    features: [
      "Technology strategy planning",
      "Digital transformation roadmap",
      "Cost optimization analysis",
      "Security and compliance review",
      "Vendor selection guidance",
      "Ongoing technology consultation",
    ],
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    accentBg: "bg-amber-500/5",
  },
  {
    id: "networking",
    icon: Wifi,
    title: "Computer Networking",
    headline: "Reliable Network Infrastructure",
    description:
      "Set up, maintain, and troubleshoot your network to keep your business connected. We handle internet connectivity, network configuration, and diagnostics.",
    features: [
      "Internet connectivity setup",
      "Network troubleshooting",
      "WiFi and LAN configuration",
      "Network security setup",
      "Bandwidth optimization",
      "24/7 network monitoring",
    ],
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    accentBg: "bg-cyan-500/5",
  },
]

const additionalServices = [
  { icon: Database, title: "Data Setup & Management", desc: "Organizing, optimizing, and safely moving your data" },
  { icon: Cloud, title: "Online Hosting & Setup", desc: "Setting up and managing your online servers" },
  { icon: Lock, title: "Security Checkups", desc: "Finding and fixing security weak points" },
  { icon: BarChart, title: "Business Insights & Reports", desc: "Custom dashboards and data tracking" },
  { icon: RefreshCw, title: "System Upgrades", desc: "Bringing outdated systems up to date" },
  { icon: Palette, title: "Design & User Experience", desc: "Research, layouts, and visual design" },
  { icon: Server, title: "Automated Updates & Monitoring", desc: "Automatic software updates and health checks" },
  { icon: MessageCircle, title: "Support & Maintenance", desc: "Ongoing technical support for your systems" },
]

export function ServicesPage() {
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
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5">
              Our Services
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-6">
              Complete Business
              <br />
              <span className="hero-gradient">Technology Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              From websites to mobile apps and beyond — we handle every part of your digital strategy to help your business grow.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Get a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </SpotlightBackground>

      {/* Main Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-24">
            {mainServices.map((service, i) => (
              <div key={service.id} id={service.id}>
              <ScrollReveal>
                <div className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                  i % 2 === 1 && "lg:[&>*:first-child]:order-2"
                )}>
                  <div>
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", service.bg)}>
                      <service.icon className={cn("w-7 h-7", service.color)} />
                    </div>
                    <Badge variant="outline" className={cn("mb-4 text-xs", `border-current/20 ${service.color}`)}>
                      {service.title}
                    </Badge>
                    <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-4">
                      {service.headline}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                      {service.description}
                    </p>
                    <Button asChild>
                      <Link to="/contact" className="gap-2">
                        Start Your Project <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className={cn("rounded-2xl border p-8", service.borderColor, service.accentBg)}>
                    <h4 className="font-semibold text-foreground mb-5 text-sm tracking-wide uppercase">What You Get</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <CheckCircle className={cn("w-4 h-4 mt-0.5 flex-shrink-0", service.color)} />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5">
              More We Can Do
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-4">
              More Ways We Can Help
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Beyond building your product, we offer extra services to make sure everything works together perfectly.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.07}>
                <MovingBorderCard containerClassName="bg-card h-full" className="p-5 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{service.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                </MovingBorderCard>
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
            Not Sure Where to Begin?
          </h2>
          <p className="text-xl text-cta-foreground/80 mb-8">
            Book a free 30-minute call with us. We'll help you figure out the best path forward for your idea.
          </p>
          <Button
            size="lg"
            className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            asChild
          >
            <Link to="/contact" className="gap-2">
              Book a Free Call <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </section>
    </div>
  )
}
