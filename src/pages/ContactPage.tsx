import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Apple,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SpotlightBackground } from "@/components/effects/SpotlightBackground";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { icon: Globe, label: "Website or Web App" },
  { icon: Smartphone, label: "Mobile App (iPhone & Android)" },
  { icon: Apple, label: "iPhone App" },
  { icon: Code2, label: "Android App" },
];

const budgetOptions = [
  "Under GH₵ 20,000",
  "GH₵ 20,000 – GH₵ 50,000",
  "GH₵ 50,000 – GH₵ 100,000",
  "GH₵ 100,000 – GH₵ 200,000",
  "GH₵ 200,000+",
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@bluvelhq.com",
    href: "mailto:info@bluvelhq.com",
    desc: "We respond within 24 hours",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+233 551 875 432",
    href: "tel:+233551875432",
    desc: "Mon - Fri, 9am - 6pm",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Accra, Ghana",
    href: "#",
    desc: "Adenta, Madina, Accra",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "< 24 hours",
    href: "#",
    desc: "We'll get back to you fast",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "It depends on how complex it is. A simple website takes 1 - 2 weeks. A full-featured platform can take 1 - 2 months. We'll give you a clear timeline after we understand your needs.",
  },
  {
    q: "Do you offer fixed-price projects?",
    a: "Yes. For projects with a clear scope, we offer fixed-price agreements. For larger or changing projects, we recommend a flexible approach that adapts as we go.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Absolutely. We offer monthly support and maintenance plans, and we're always available for new feature development after launch.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "We work with all kinds of businesses, from new startups to large corporations. What matters most is that we share the same goals and values.",
  },
];

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
              Get In Touch
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-6">
              Let's Build Something
              <br />
              <span className="hero-gradient">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your idea. We'll get back to you within 24 hours
              with a free consultation.
            </p>
          </motion.div>
        </div>
      </SpotlightBackground>

      {/* Contact Info Row */}
      <section className="py-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactDetails.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-accent/50 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.desc}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form + FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-8 sm:p-10">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        Message Received!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thanks for reaching out. A member of our team will
                        contact you within 24 hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Tell Us About Your Idea
                      </h2>
                      <p className="text-muted-foreground mb-8 text-sm">
                        Fill out the form and we'll be in touch within 24 hours.
                      </p>

                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                      >
                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                            <Label htmlFor="name" className="text-sm">
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              placeholder="John Smith"
                              value={formData.name}
                              onChange={(e) =>
                                updateField("name", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Label htmlFor="email" className="text-sm">
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@company.com"
                              value={formData.email}
                              onChange={(e) =>
                                updateField("email", e.target.value)
                              }
                              required
                            />
                          </div>
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="company" className="text-sm">
                            Company / Organization
                          </Label>
                          <Input
                            id="company"
                            placeholder="Acme Corp"
                            value={formData.company}
                            onChange={(e) =>
                              updateField("company", e.target.value)
                            }
                          />
                        </div>

                        {/* Service */}
                        <div className="flex flex-col gap-2">
                          <Label className="text-sm">What Do You Need? *</Label>
                          <div className="grid grid-cols-2 gap-2">
                            {serviceOptions.map((opt) => (
                              <button
                                type="button"
                                key={opt.label}
                                onClick={() =>
                                  updateField("service", opt.label)
                                }
                                className={cn(
                                  "flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-medium transition-all text-left",
                                  formData.service === opt.label
                                    ? "border-primary bg-primary/8 text-primary"
                                    : "border-border bg-background hover:border-primary/40 text-muted-foreground hover:text-foreground",
                                )}
                              >
                                <opt.icon className="w-4 h-4 flex-shrink-0" />
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Budget */}
                        <div className="flex flex-col gap-2">
                          <Label className="text-sm">Approximate Budget</Label>
                          <div className="flex flex-wrap gap-2">
                            {budgetOptions.map((opt) => (
                              <button
                                type="button"
                                key={opt}
                                onClick={() => updateField("budget", opt)}
                                className={cn(
                                  "px-3 py-1.5 rounded-lg border text-xs font-medium transition-all",
                                  formData.budget === opt
                                    ? "border-primary bg-primary/8 text-primary"
                                    : "border-border hover:border-primary/40 text-muted-foreground hover:text-foreground",
                                )}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="message" className="text-sm">
                            Tell Us About Your Idea *
                          </Label>
                          <Textarea
                            id="message"
                            placeholder="Describe your idea, what you want to achieve, your timeline, and anything else we should know..."
                            value={formData.message}
                            onChange={(e) =>
                              updateField("message", e.target.value)
                            }
                            required
                            className="min-h-32 resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full gap-2 h-12"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message <Send className="w-4 h-4" />
                            </>
                          )}
                        </Button>

                        {/* <p className="text-xs text-center text-muted-foreground">
                          By submitting, you agree to our{" "}
                          <a
                            href="/privacy"
                            className="text-primary hover:underline"
                          >
                            Privacy Policy
                          </a>
                          . We never spam.
                        </p> */}
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* FAQs */}
            <div className="lg:col-span-2" id="faqs">
              <ScrollReveal delay={0.2}>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Common Questions
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Common questions answered.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {faqs.map((faq, i) => (
                    <motion.div
                      key={faq.q}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="bg-card border border-border rounded-xl p-5"
                    >
                      <h4 className="font-semibold text-foreground text-sm mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Direct CTA */}
                <div className="mt-8 p-6 bg-primary/5 border border-primary/15 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">
                    Prefer to talk directly?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a free 30-minute call directly on our calendar.
                  </p>
                  <Button variant="outline" className="w-full gap-2">
                    Book a Call <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
