import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Team", path: "/team" },
  { label: "Blog", path: "/blog" },
  { label: "Audit Report", path: "/audit-report" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Brand Strategy",
  "UI/UX Design",
  "Web Development",
  "Digital Marketing",
  "Content Creation",
  "SEO Optimization",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.1_0.045_260)] text-[oklch(0.85_0.01_250)]">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/assets/generated/logo-transparent.dim_300x80.png"
              alt="Apex Studio"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed text-[oklch(0.65_0.015_252)] mb-6">
              We build exceptional brands and digital experiences that drive
              growth and captivate audiences across all touchpoints.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="https://apexstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-[oklch(1_0_0/0.08)] flex items-center justify-center text-[oklch(0.65_0.015_252)] hover:text-[oklch(0.73_0.12_76)] hover:bg-[oklch(1_0_0/0.12)] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[oklch(0.65_0.015_252)] hover:text-[oklch(0.73_0.12_76)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-[oklch(0.65_0.015_252)] hover:text-[oklch(0.73_0.12_76)] transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[oklch(0.73_0.12_76)]"
                />
                <span className="text-sm text-[oklch(0.65_0.015_252)]">
                  142 Madison Avenue, Suite 1200
                  <br />
                  New York, NY 10016
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="shrink-0 text-[oklch(0.73_0.12_76)]"
                />
                <a
                  href="tel:+12125550100"
                  className="text-sm text-[oklch(0.65_0.015_252)] hover:text-[oklch(0.73_0.12_76)] transition-colors"
                >
                  +1 (212) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="shrink-0 text-[oklch(0.73_0.12_76)]"
                />
                <a
                  href="mailto:hello@apexstudio.com"
                  className="text-sm text-[oklch(0.65_0.015_252)] hover:text-[oklch(0.73_0.12_76)] transition-colors"
                >
                  hello@apexstudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[oklch(1_0_0/0.08)]">
        <div className="container-wide py-6 flex items-center justify-center">
          <p className="text-xs text-[oklch(0.5_0.012_252)]">
            © {year} Apex Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
