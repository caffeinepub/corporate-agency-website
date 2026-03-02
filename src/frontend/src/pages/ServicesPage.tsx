import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart2,
  CheckCircle2,
  Code2,
  Globe,
  Megaphone,
  Palette,
  Search,
} from "lucide-react";
import { motion } from "motion/react";
import { useGetAllServices } from "../hooks/useQueries";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={28} />,
  Globe: <Globe size={28} />,
  Megaphone: <Megaphone size={28} />,
  BarChart2: <BarChart2 size={28} />,
  Code2: <Code2 size={28} />,
  Search: <Search size={28} />,
};

const fallbackServices = [
  {
    icon: "Palette",
    title: "Brand Strategy & Identity",
    description:
      "We develop comprehensive brand identities that resonate with target audiences and stand out in crowded markets. From visual systems to messaging frameworks, we craft brands built to last.",
  },
  {
    icon: "Globe",
    title: "UI/UX Design & Development",
    description:
      "Award-winning digital experiences crafted with precision. We design and build websites and applications that convert visitors into loyal customers through intentional, beautiful design.",
  },
  {
    icon: "Megaphone",
    title: "Digital Marketing & Growth",
    description:
      "Data-driven campaigns across all channels — social, search, email, and beyond. We combine creative storytelling with performance analytics to maximize your marketing ROI.",
  },
  {
    icon: "BarChart2",
    title: "Content Strategy & Creation",
    description:
      "Compelling content that tells your story and builds authority. From editorial strategy to production, we create content that engages audiences and drives organic growth.",
  },
  {
    icon: "Code2",
    title: "Web & Mobile Development",
    description:
      "High-performance websites and mobile applications built with cutting-edge technologies. We prioritize speed, accessibility, and conversion optimization in every build.",
  },
  {
    icon: "Search",
    title: "SEO & Performance Optimization",
    description:
      "Technical SEO and performance audits that improve search rankings and user experience. We make sure your digital presence is discoverable and lightning-fast.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "We begin every project with deep discovery — understanding your business, audience, competitive landscape, and goals before proposing any solutions.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Using insights from discovery, we develop a strategic roadmap that aligns creative direction with business objectives and timeline.",
  },
  {
    number: "03",
    title: "Creative Development",
    description:
      "Our creative team brings the strategy to life through iterative design concepts, gathering feedback and refining until we reach something exceptional.",
  },
  {
    number: "04",
    title: "Production & Build",
    description:
      "With approved designs, we move into production — whether that's building a website, producing content, or developing a brand system.",
  },
  {
    number: "05",
    title: "Launch & Optimization",
    description:
      "We manage a meticulous launch process and continue to optimize based on real-world performance data and client feedback.",
  },
];

export default function ServicesPage() {
  const { data: backendServices } = useGetAllServices();
  const services =
    backendServices && backendServices.length > 0
      ? backendServices
      : fallbackServices;

  return (
    <div className="pt-16 lg:pt-20">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <img
          src="/assets/generated/hero-services.dim_1600x900.jpg"
          alt="Our services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-wide">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[oklch(0.73_0.12_76)] font-heading text-sm uppercase tracking-widest mb-3 font-semibold"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-display text-5xl lg:text-6xl text-white max-w-2xl"
          >
            Services Designed to Accelerate Growth
          </motion.h1>
        </div>
      </section>

      {/* ─── Services Grid ────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Our Capabilities
            </p>
            <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.175_0.065_258)] mb-4">
              Full-Service Creative Agency
            </h2>
            <p className="text-[oklch(0.5_0.02_258)] text-lg max-w-2xl mx-auto">
              From brand strategy to digital execution, we offer comprehensive
              creative services designed to grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl border border-[oklch(0.9_0.01_250)] bg-white card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-[oklch(0.175_0.065_258/0.07)] flex items-center justify-center text-[oklch(0.175_0.065_258)] mb-6 group-hover:bg-[oklch(0.175_0.065_258)] group-hover:text-[oklch(0.73_0.12_76)] transition-all duration-300">
                  {iconMap[service.icon] || <Globe size={28} />}
                </div>
                <h3 className="font-heading font-bold text-xl text-[oklch(0.175_0.065_258)] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[oklch(0.5_0.02_258)] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-[oklch(0.96_0.005_250)]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.175_0.065_258)] mb-4">
              Our Process
            </h2>
            <p className="text-[oklch(0.5_0.02_258)] text-lg max-w-2xl mx-auto">
              A proven methodology that takes you from concept to launch with
              clarity and confidence.
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 items-start bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-[oklch(0.175_0.065_258)] flex items-center justify-center">
                  <span className="heading-sans text-xl text-[oklch(0.73_0.12_76)]">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[oklch(0.175_0.065_258)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[oklch(0.5_0.02_258)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ────────────────────────────────────────────────── */}
      <section className="section-padding bg-[oklch(0.175_0.065_258)]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                Why Apex Studio
              </p>
              <h2 className="heading-display text-4xl text-white mb-8">
                The Difference Is in the Details
              </h2>
              <div className="space-y-4">
                {[
                  "Dedicated project manager on every engagement",
                  "Transparent pricing with no hidden fees",
                  "Unlimited revisions until you're satisfied",
                  "Post-launch support and optimization included",
                  "Cross-functional team with industry specialists",
                  "12-year track record of measurable results",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-[oklch(0.73_0.12_76)] mt-0.5 shrink-0"
                    />
                    <span className="text-[oklch(0.85_0.01_250)]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[oklch(1_0_0/0.06)] rounded-2xl p-10">
              <h3 className="heading-display text-2xl text-white mb-6">
                Start Your Project
              </h3>
              <p className="text-[oklch(0.75_0.015_252)] mb-8 leading-relaxed">
                Ready to see what we can do for your brand? Let's start with a
                free 30-minute strategy session to explore the possibilities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 gold-btn rounded-md font-heading font-semibold w-full justify-center"
              >
                Book a Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
