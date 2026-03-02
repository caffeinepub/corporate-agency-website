import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Briefcase,
  ChevronRight,
  Globe,
  Megaphone,
  Palette,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useGetSiteStats } from "../hooks/useQueries";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    icon: <Palette size={28} />,
    title: "Brand Strategy & Identity",
    description:
      "We craft compelling brand identities that resonate with your audience, from visual systems to messaging frameworks that set you apart.",
  },
  {
    icon: <Globe size={28} />,
    title: "Digital Experience Design",
    description:
      "Award-winning UI/UX design and development that converts visitors into customers through intentional, beautiful digital experiences.",
  },
  {
    icon: <Megaphone size={28} />,
    title: "Growth Marketing",
    description:
      "Data-driven campaigns that amplify your reach across channels, combining creative storytelling with performance analytics.",
  },
];

const portfolioItems = [
  {
    img: "/assets/generated/portfolio-1.dim_800x600.jpg",
    title: "Corporate Website Redesign",
    category: "Web",
  },
  {
    img: "/assets/generated/portfolio-2.dim_800x600.jpg",
    title: "Brand Identity Suite",
    category: "Branding",
  },
  {
    img: "/assets/generated/portfolio-3.dim_800x600.jpg",
    title: "FinTech Mobile App",
    category: "Mobile",
  },
];

const testimonials = [
  {
    text: "Apex Studio transformed our brand from the ground up. Their strategic thinking and creative execution exceeded every expectation we had.",
    author: "Catherine Moore",
    role: "CEO, Meridian Financial Group",
    stars: 5,
  },
  {
    text: "The team at Apex brought a level of professionalism and creativity we hadn't experienced before. Our new website increased conversions by 340%.",
    author: "David Park",
    role: "Founder, Nexus Health Technologies",
    stars: 5,
  },
  {
    text: "Working with Apex Studio was a game-changer. They don't just deliver designs — they deliver results that move the needle on real business goals.",
    author: "Amanda Torres",
    role: "VP Marketing, Solaris Ventures",
    stars: 5,
  },
];

export default function HomePage() {
  const { data: stats } = useGetSiteStats();

  const statsData = [
    {
      value: stats ? `${stats.projectsCompleted}+` : "250+",
      label: "Projects Completed",
      icon: <Briefcase size={22} />,
    },
    {
      value: stats ? `${stats.clientsServed}+` : "180+",
      label: "Happy Clients",
      icon: <Users size={22} />,
    },
    {
      value: stats ? `${stats.yearsOfExperience}+` : "12+",
      label: "Years Experience",
      icon: <Award size={22} />,
    },
    {
      value: stats ? `${stats.teamMembers}+` : "35+",
      label: "Team Members",
      icon: <TrendingUp size={22} />,
    },
  ];

  return (
    <div>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/assets/generated/hero-home.dim_1600x900.jpg"
          alt="Corporate cityscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 container-wide text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.p
              variants={fadeUp}
              className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-[0.2em] mb-6"
            >
              Award-Winning Creative Agency
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]"
            >
              Building{" "}
              <span className="text-[oklch(0.73_0.12_76)] italic">
                Exceptional
              </span>{" "}
              Brands
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[oklch(0.85_0.01_250)] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              We partner with ambitious companies to create brand identities,
              digital experiences, and growth strategies that drive measurable
              results.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/portfolio"
                data-ocid="home.hero_primary_button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-heading font-semibold rounded-md gold-btn text-base hover:shadow-gold"
              >
                View Our Work
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                data-ocid="home.hero_secondary_button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-heading font-semibold rounded-md text-white border border-[oklch(1_0_0/0.3)] hover:bg-[oklch(1_0_0/0.1)] transition-all duration-200 text-base"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="w-6 h-10 rounded-full border-2 border-[oklch(1_0_0/0.3)] flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-[oklch(0.73_0.12_76)]" />
          </motion.div>
        </div>
      </section>

      {/* ─── Stats Bar ────────────────────────────────────────────────────── */}
      <section className="bg-[oklch(0.175_0.065_258)] py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 text-[oklch(0.73_0.12_76)] mb-2">
                  {stat.icon}
                </div>
                <div className="heading-sans text-3xl lg:text-4xl text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[oklch(0.65_0.015_252)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3"
            >
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-display text-4xl lg:text-5xl text-[oklch(0.175_0.065_258)] mb-4"
            >
              Services That Drive Growth
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[oklch(0.5_0.02_258)] text-lg max-w-2xl mx-auto"
            >
              From brand strategy to digital execution, we offer comprehensive
              creative services under one roof.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 rounded-xl border border-[oklch(0.9_0.01_250)] bg-white card-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-[oklch(0.175_0.065_258/0.07)] flex items-center justify-center text-[oklch(0.175_0.065_258)] mb-6 group-hover:bg-[oklch(0.73_0.12_76)] group-hover:text-[oklch(0.12_0.055_260)] transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="heading-sans text-xl text-[oklch(0.175_0.065_258)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[oklch(0.5_0.02_258)] leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-heading font-semibold text-[oklch(0.175_0.065_258)] hover:text-[oklch(0.73_0.12_76)] transition-colors group"
            >
              View All Services
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── About Teaser ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-[oklch(0.96_0.005_250)]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/assets/generated/about-values.dim_1200x600.jpg"
                alt="Our team at work"
                className="rounded-2xl w-full object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[oklch(0.175_0.065_258)] rounded-xl p-6 shadow-xl hidden lg:block">
                <p className="heading-sans text-3xl text-[oklch(0.73_0.12_76)]">
                  12+
                </p>
                <p className="text-sm text-white mt-1">Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.175_0.065_258)] mb-6">
                A Studio Built on Results
              </h2>
              <p className="text-[oklch(0.4_0.02_258)] leading-relaxed mb-5">
                Founded in 2012, Apex Studio has grown from a boutique design
                shop into a full-service creative agency trusted by global
                brands. We combine strategic thinking with bold creative
                execution to deliver work that makes a difference.
              </p>
              <p className="text-[oklch(0.4_0.02_258)] leading-relaxed mb-8">
                Our team of 35+ designers, strategists, developers, and
                marketers brings diverse expertise to every project. We don't
                just create—we solve problems and drive growth.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-heading font-semibold rounded-md bg-[oklch(0.175_0.065_258)] text-white hover:bg-[oklch(0.12_0.055_260)] transition-all duration-200"
              >
                Our Story
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Portfolio Teaser ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.175_0.065_258)] mb-4">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[oklch(0.12_0.055_260/0)] group-hover:bg-[oklch(0.12_0.055_260/0.75)] transition-all duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[oklch(0.73_0.12_76)] text-xs font-heading font-semibold uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h3 className="text-white font-heading font-bold text-lg mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 font-heading font-semibold rounded-md bg-[oklch(0.175_0.065_258)] text-white hover:bg-[oklch(0.12_0.055_260)] transition-all duration-200"
            >
              View Full Portfolio
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-[oklch(0.175_0.065_258)]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Client Stories
            </p>
            <h2 className="heading-display text-4xl lg:text-5xl text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-[oklch(1_0_0/0.06)] rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }, (_, j) => (
                    <Star
                      key={`${t.author}-star-${j + 1}`}
                      size={16}
                      className="fill-[oklch(0.73_0.12_76)] text-[oklch(0.73_0.12_76)]"
                    />
                  ))}
                </div>
                <p className="text-[oklch(0.85_0.01_250)] leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-heading font-bold text-white">
                    {t.author}
                  </p>
                  <p className="text-sm text-[oklch(0.55_0.015_252)] mt-0.5">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[oklch(0.73_0.12_76)]">
        <div className="container-wide text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-display text-4xl lg:text-5xl text-[oklch(0.12_0.055_260)] mb-4"
          >
            Ready to Build Something Exceptional?
          </motion.h2>
          <p className="text-[oklch(0.2_0.06_260)] text-lg mb-10 max-w-xl mx-auto">
            Let's discuss your project and explore how we can help transform
            your brand.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[oklch(0.12_0.055_260)] text-white font-heading font-semibold rounded-md hover:bg-[oklch(0.175_0.065_258)] transition-all duration-200 text-base"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
