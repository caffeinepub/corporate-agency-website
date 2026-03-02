import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", path: "/", ocid: "nav.home_link" },
  { label: "About", path: "/about", ocid: "nav.about_link" },
  { label: "Services", path: "/services", ocid: "nav.services_link" },
  { label: "Portfolio", path: "/portfolio", ocid: "nav.portfolio_link" },
  { label: "Team", path: "/team", ocid: "nav.team_link" },
  { label: "Blog", path: "/blog", ocid: "nav.blog_link" },
  { label: "Audit Report", path: "/audit-report", ocid: "nav.audit_link" },
  { label: "Contact", path: "/contact", ocid: "nav.contact_link" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (currentPath) setMobileOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.12_0.055_260/0.97)] shadow-lg backdrop-blur-md"
          : "bg-[oklch(0.12_0.055_260/0.85)] backdrop-blur-sm"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/generated/logo-transparent.dim_300x80.png"
              alt="Apex Studio"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-ocid={link.ocid}
                className={`px-4 py-2 text-sm font-medium font-heading rounded-md transition-all duration-200 ${
                  currentPath === link.path
                    ? "text-[oklch(0.73_0.12_76)] bg-[oklch(1_0_0/0.08)]"
                    : "text-[oklch(0.9_0.01_250)] hover:text-[oklch(0.73_0.12_76)] hover:bg-[oklch(1_0_0/0.06)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              data-ocid="nav.cta_button"
              className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold font-heading rounded-md gold-btn transition-all duration-200 hover:shadow-gold"
            >
              Get in Touch
            </Link>

            <button
              type="button"
              className="lg:hidden p-2 text-white rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[oklch(0.12_0.055_260)] border-t border-[oklch(1_0_0/0.1)]"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-ocid={link.ocid}
                  className={`px-4 py-3 text-sm font-medium font-heading rounded-md transition-colors ${
                    currentPath === link.path
                      ? "text-[oklch(0.73_0.12_76)] bg-[oklch(1_0_0/0.08)]"
                      : "text-[oklch(0.9_0.01_250)] hover:text-[oklch(0.73_0.12_76)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-4 py-3 text-sm font-semibold font-heading rounded-md gold-btn text-center"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
