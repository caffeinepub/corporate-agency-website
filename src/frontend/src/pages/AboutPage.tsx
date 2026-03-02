import { Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Heart, Target, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useGetSiteStats } from "../hooks/useQueries";

const values = [
  {
    icon: <Target size={24} />,
    title: "Results-Oriented",
    description:
      "Every decision we make is grounded in measurable outcomes. We track what matters and iterate toward excellence.",
  },
  {
    icon: <Eye size={24} />,
    title: "Creative Vision",
    description:
      "We push creative boundaries while maintaining commercial focus — producing work that's both beautiful and effective.",
  },
  {
    icon: <Heart size={24} />,
    title: "Client Partnership",
    description:
      "We treat every project as a collaboration. Your business goals become our mission, and your success is our success.",
  },
  {
    icon: <Zap size={24} />,
    title: "Agile Excellence",
    description:
      "We move with speed and precision, adapting to your timeline while never compromising on the quality of our output.",
  },
];

export default function AboutPage() {
  const { data: stats } = useGetSiteStats();

  const statsData = [
    {
      value: stats ? `${stats.projectsCompleted}+` : "250+",
      label: "Projects Delivered",
    },
    {
      value: stats ? `${stats.clientsServed}+` : "180+",
      label: "Satisfied Clients",
    },
    {
      value: stats ? `${stats.yearsOfExperience}+` : "12+",
      label: "Years in Business",
    },
    { value: stats ? `${stats.teamMembers}+` : "35+", label: "Team Members" },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <img
          src="/assets/generated/hero-about.dim_1600x900.jpg"
          alt="Our team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-wide">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[oklch(0.73_0.12_76)] font-heading text-sm uppercase tracking-widest mb-3 font-semibold"
          >
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-display text-5xl lg:text-6xl text-white max-w-2xl"
          >
            The Story Behind Apex Studio
          </motion.h1>
        </div>
      </section>

      {/* ─── Company Story ────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                Our Journey
              </p>
              <h2 className="heading-display text-4xl text-[oklch(0.175_0.065_258)] mb-6">
                From Boutique Studio to Global Creative Partner
              </h2>
              <p className="text-[oklch(0.4_0.02_258)] leading-relaxed mb-5">
                Apex Studio was founded in 2012 by James Morrison with a simple
                conviction: that great design is a competitive advantage, not a
                luxury. Starting with a team of three in a small Manhattan
                office, we delivered brand identities for local businesses that
                earned national recognition.
              </p>
              <p className="text-[oklch(0.4_0.02_258)] leading-relaxed mb-5">
                Over the next decade, we grew deliberately—adding talent,
                expanding our service offering, and deepening our expertise
                across industries. Today, Apex Studio is a full-service creative
                and digital agency with clients across 28 countries.
              </p>
              <p className="text-[oklch(0.4_0.02_258)] leading-relaxed">
                What hasn't changed is our founding philosophy: we build brands
                that outlast trends, and digital experiences that drive
                measurable growth. Every project we take on is approached with
                the same rigor, creativity, and commitment to excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  year: "2012",
                  title: "Founded in Manhattan",
                  desc: "Three designers with a shared vision of creating work that matters.",
                },
                {
                  year: "2015",
                  title: "Expanded to 20 team members",
                  desc: "Added development, strategy, and marketing practices to become full-service.",
                },
                {
                  year: "2018",
                  title: "First international clients",
                  desc: "Expanded our reach globally, working with brands across Europe and Asia.",
                },
                {
                  year: "2021",
                  title: "Recognized by Fast Company",
                  desc: "Named one of the Most Innovative Design Agencies in North America.",
                },
                {
                  year: "2024",
                  title: "35+ strong and growing",
                  desc: "Continuing to scale while maintaining our boutique quality and client focus.",
                },
              ].map((item) => (
                <div key={item.year} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[oklch(0.175_0.065_258)] flex items-center justify-center">
                    <span className="text-[oklch(0.73_0.12_76)] text-xs font-heading font-bold">
                      {item.year.slice(2)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[oklch(0.175_0.065_258)] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[oklch(0.5_0.02_258)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Values Section ───────────────────────────────────────────────── */}
      <section className="section-padding bg-[oklch(0.96_0.005_250)]">
        <div className="container-wide">
          <div className="mb-16">
            <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Our Values
            </p>
            <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.175_0.065_258)] mb-4">
              What Drives Everything We Do
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-[oklch(0.175_0.065_258)] flex items-center justify-center text-[oklch(0.73_0.12_76)] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-heading font-bold text-[oklch(0.175_0.065_258)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[oklch(0.5_0.02_258)] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/generated/about-values.dim_1200x600.jpg"
                alt="Our team culture"
                className="rounded-2xl w-full object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Mission / Vision ─────────────────────────────────────────────── */}
      <section className="section-padding bg-[oklch(0.175_0.065_258)]">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[oklch(1_0_0/0.06)] rounded-2xl p-10"
            >
              <div className="w-12 h-12 rounded-lg bg-[oklch(0.73_0.12_76)] flex items-center justify-center mb-6">
                <Target size={22} className="text-[oklch(0.12_0.055_260)]" />
              </div>
              <h3 className="heading-display text-2xl text-white mb-4">
                Our Mission
              </h3>
              <p className="text-[oklch(0.75_0.015_252)] leading-relaxed">
                To empower businesses with creative and strategic solutions that
                don't just look good—but perform. We exist to bridge the gap
                between ambitious vision and exceptional execution, making
                world-class design accessible to brands at every stage of
                growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="bg-[oklch(1_0_0/0.06)] rounded-2xl p-10"
            >
              <div className="w-12 h-12 rounded-lg bg-[oklch(0.73_0.12_76)] flex items-center justify-center mb-6">
                <Eye size={22} className="text-[oklch(0.12_0.055_260)]" />
              </div>
              <h3 className="heading-display text-2xl text-white mb-4">
                Our Vision
              </h3>
              <p className="text-[oklch(0.75_0.015_252)] leading-relaxed">
                To become the definitive creative partner for forward-thinking
                companies globally—recognized not just for the work we create,
                but for the transformations we catalyze. We envision a world
                where every brand tells a story worth remembering.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Stats ────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {statsData.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="heading-sans text-5xl text-[oklch(0.73_0.12_76)] mb-2">
                  {stat.value}
                </p>
                <p className="text-[oklch(0.5_0.02_258)] font-heading font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.96_0.005_250)]">
        <div className="container-wide text-center">
          <h2 className="heading-display text-4xl text-[oklch(0.175_0.065_258)] mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-[oklch(0.5_0.02_258)] text-lg mb-8 max-w-xl mx-auto">
            Let's start a conversation about your next project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 gold-btn rounded-md font-heading font-semibold"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
