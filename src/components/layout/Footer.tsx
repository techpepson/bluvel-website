import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Code2, Globe, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/official-logo.jpeg";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  Services: [
    { label: "Web Development", href: "/services#web" },
    { label: "Mobile Apps", href: "/services#mobile" },
    { label: "iPhone Apps", href: "/services#ios" },
    { label: "Android Apps", href: "/services#android" },
  ],
  Resources: [
    { label: "Case Studies", href: "/projects" },
    { label: "FAQ", href: "/contact/#faqs" },
  ],
};

const socials = [
  { icon: Code2, href: "https://www.github.com/bluvelhq", label: "GitHub" },
  { icon: Globe, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <img
                  src={logo}
                  alt="Bluvel Cloud Systems"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-base tracking-tight">
                  Bluvel Cloud Systems
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              We build digital products people love to use. From websites to
              mobile apps, we help businesses of all sizes bring their ideas to
              life.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href="mailto:info@bluvelhq.com"
                className="flex items-center gap-2.5 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                info@bluvelhq.com
              </a>
              <a
                href="tel:+15555555555"
                className="flex items-center gap-2.5 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                +233 551875432
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 flex-shrink-0 text-primary" />
                Accra, Ghana.
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm text-foreground mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5 translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator />

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bluvel Cloud Systems. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
              >
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
