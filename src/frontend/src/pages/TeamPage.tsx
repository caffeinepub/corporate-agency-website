import { Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

const teamMembers = [
  {
    id: 1,
    img: "/assets/generated/team-ceo.dim_400x400.jpg",
    name: "James Morrison",
    role: "CEO & Founder",
    bio: "With over 20 years in brand strategy and creative direction, James founded Apex Studio with a vision to make world-class design accessible to ambitious companies. Previously at TBWA and Ogilvy.",
  },
  {
    id: 2,
    img: "/assets/generated/team-coo.dim_400x400.jpg",
    name: "Sarah Chen",
    role: "Chief Operations Officer",
    bio: "Sarah oversees all client operations and internal processes, ensuring every project delivers on time and exceeds expectations. MBA from Wharton, ex-McKinsey consultant.",
  },
  {
    id: 3,
    img: "/assets/generated/team-creative.dim_400x400.jpg",
    name: "Marcus Reid",
    role: "Creative Director",
    bio: "Marcus leads creative strategy and execution across all client work. Award-winning designer with campaigns recognized at Cannes Lions, D&AD, and the Clio Awards.",
  },
  {
    id: 4,
    img: "/assets/generated/team-marketing.dim_400x400.jpg",
    name: "Elena Vasquez",
    role: "Marketing Director",
    bio: "Elena drives growth marketing strategy for both Apex and our clients. Former head of growth at two unicorn startups with a track record of scaling brands through data-driven campaigns.",
  },
];

const culturePoints = [
  {
    title: "Radical Collaboration",
    description:
      "We believe the best work comes from diverse perspectives working together. Every voice matters and every idea is considered.",
  },
  {
    title: "Continuous Learning",
    description:
      "Industry evolves fast. We invest in our team's growth through education budgets, conference attendance, and internal knowledge sharing.",
  },
  {
    title: "Work-Life Balance",
    description:
      "Great work requires a rested mind. We have flexible hours, remote work options, and generous time-off policies.",
  },
  {
    title: "Shared Ownership",
    description:
      "Every team member has equity and a stake in the company's success. We win together.",
  },
];

export default function TeamPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <img
          src="/assets/generated/hero-team.dim_1600x900.jpg"
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
            Our People
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-display text-5xl lg:text-6xl text-white max-w-2xl"
          >
            Meet the Minds Behind the Work
          </motion.h1>
        </div>
      </section>

      {/* ─── Team Grid ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Leadership Team
            </p>
            <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.175_0.065_258)] mb-4">
              Exceptional Talent, Shared Vision
            </h2>
            <p className="text-[oklch(0.5_0.02_258)] text-lg max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience from the
              world's top agencies, consultancies, and technology companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                data-ocid={`team.item.${member.id}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-5 aspect-square">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[oklch(0.175_0.065_258/0)] group-hover:bg-[oklch(0.175_0.065_258/0.6)] transition-all duration-300 flex items-end justify-center pb-5">
                    <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[oklch(0.73_0.12_76)] hover:text-[oklch(0.12_0.055_260)] transition-all"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[oklch(0.73_0.12_76)] hover:text-[oklch(0.12_0.055_260)] transition-all"
                      >
                        <Twitter size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-[oklch(0.175_0.065_258)]">
                  {member.name}
                </h3>
                <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-[oklch(0.5_0.02_258)] leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Culture ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-[oklch(0.175_0.065_258)]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Our Culture
            </p>
            <h2 className="heading-display text-4xl text-white mb-4">
              A Place Where Talent Thrives
            </h2>
            <p className="text-[oklch(0.65_0.015_252)] text-lg max-w-2xl mx-auto">
              We've built a culture that attracts the best and brings out the
              best in everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {culturePoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[oklch(1_0_0/0.06)] rounded-xl p-8"
              >
                <div className="w-2 h-8 rounded-full bg-[oklch(0.73_0.12_76)] mb-4" />
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-[oklch(0.7_0.015_252)] leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-[oklch(1_0_0/0.06)] rounded-2xl p-12">
            <h3 className="heading-display text-3xl text-white mb-4">
              Join the Apex Studio Team
            </h3>
            <p className="text-[oklch(0.65_0.015_252)] mb-8 max-w-lg mx-auto">
              We're always looking for exceptional talent to join our growing
              team. If you're passionate about creative excellence, we'd love to
              hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 gold-btn rounded-md font-heading font-semibold"
            >
              View Open Positions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
