import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Category = "All" | "Branding" | "Web" | "Mobile" | "Print";

const portfolioItems = [
  {
    id: 1,
    img: "/assets/generated/portfolio-1.dim_800x600.jpg",
    title: "Corporate Website Redesign",
    category: "Web" as Category,
    client: "Meridian Financial Group",
    description:
      "A complete digital overhaul resulting in 340% increase in lead conversion.",
  },
  {
    id: 2,
    img: "/assets/generated/portfolio-2.dim_800x600.jpg",
    title: "Brand Identity Suite",
    category: "Branding" as Category,
    client: "Solaris Ventures",
    description:
      "Comprehensive brand identity for a Series B fintech startup entering competitive markets.",
  },
  {
    id: 3,
    img: "/assets/generated/portfolio-3.dim_800x600.jpg",
    title: "FinTech Mobile App",
    category: "Mobile" as Category,
    client: "Nexus Health Technologies",
    description:
      "Intuitive iOS and Android app with 4.8-star rating across 50,000+ downloads.",
  },
  {
    id: 4,
    img: "/assets/generated/portfolio-4.dim_800x600.jpg",
    title: "Luxury E-Commerce Platform",
    category: "Web" as Category,
    client: "Aurelius Couture",
    description:
      "High-fashion e-commerce experience with editorial photography and bespoke checkout flow.",
  },
  {
    id: 5,
    img: "/assets/generated/portfolio-5.dim_800x600.jpg",
    title: "Digital Campaign Suite",
    category: "Branding" as Category,
    client: "Pinnacle Capital",
    description:
      "Award-winning multi-channel campaign that drove 2.4M impressions in 90 days.",
  },
  {
    id: 6,
    img: "/assets/generated/portfolio-6.dim_800x600.jpg",
    title: "Annual Report Design",
    category: "Print" as Category,
    client: "Global Horizons Corp",
    description:
      "Elegantly designed 80-page annual report that won the Design Excellence Award.",
  },
];

const categories: Category[] = ["All", "Branding", "Web", "Mobile", "Print"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="pt-16 lg:pt-20">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <img
          src="/assets/generated/hero-portfolio.dim_1600x900.jpg"
          alt="Our portfolio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-wide">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[oklch(0.73_0.12_76)] font-heading text-sm uppercase tracking-widest mb-3 font-semibold"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-display text-5xl lg:text-6xl text-white max-w-2xl"
          >
            A Portfolio Built on Excellence
          </motion.h1>
        </div>
      </section>

      {/* ─── Portfolio Grid ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                data-ocid="portfolio.filter.tab"
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-[oklch(0.175_0.065_258)] text-white"
                    : "bg-[oklch(0.96_0.005_250)] text-[oklch(0.4_0.02_258)] hover:bg-[oklch(0.9_0.01_250)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  data-ocid={`portfolio.item.${item.id}`}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[oklch(0.12_0.055_260/0)] group-hover:bg-[oklch(0.12_0.055_260/0.85)] transition-all duration-300 flex flex-col justify-end p-6">
                    <div className="translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block px-3 py-1 bg-[oklch(0.73_0.12_76)] text-[oklch(0.12_0.055_260)] text-xs font-heading font-bold rounded-full uppercase tracking-wider mb-3">
                        {item.category}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[oklch(0.7_0.015_252)] mb-3">
                        {item.client}
                      </p>
                      <p className="text-sm text-[oklch(0.85_0.01_250)] line-clamp-2">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-[oklch(0.73_0.12_76)] text-sm font-heading font-semibold">
                        View Project <ExternalLink size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.175_0.065_258)]">
        <div className="container-wide text-center">
          <h2 className="heading-display text-4xl text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-[oklch(0.65_0.015_252)] text-lg mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your vision to life with the same
            level of craft and intention.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 gold-btn rounded-md font-heading font-semibold"
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
