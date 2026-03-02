import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, ChevronRight, User } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const blogPosts = [
  {
    id: 1,
    img: "/assets/generated/blog-1.dim_800x500.jpg",
    category: "Technology",
    title: "The Future of Digital Transformation",
    excerpt:
      "As AI reshapes every industry, businesses that embrace digital transformation thoughtfully — and strategically — will define the next decade. We explore the frameworks separating winners from laggards.",
    author: "James Morrison",
    date: "February 14, 2026",
  },
  {
    id: 2,
    img: "/assets/generated/blog-2.dim_800x500.jpg",
    category: "Branding",
    title: "Building a Powerful Brand Identity",
    excerpt:
      "A strong brand identity is more than a logo — it's the entire ecosystem of visual and verbal cues that communicate your values, attract your audience, and set you apart in a crowded market.",
    author: "Marcus Reid",
    date: "January 28, 2026",
  },
  {
    id: 3,
    img: "/assets/generated/blog-3.dim_800x500.jpg",
    category: "Design",
    title: "Why UX Design Matters More Than Ever",
    excerpt:
      "In an era of endless digital options, user experience has become the ultimate differentiator. Companies that invest in UX design see measurable improvements in conversion, retention, and brand perception.",
    author: "Sarah Chen",
    date: "January 10, 2026",
  },
];

const categoryColors: Record<string, string> = {
  Technology: "bg-[oklch(0.55_0.12_258/0.12)] text-[oklch(0.35_0.1_258)]",
  Branding: "bg-[oklch(0.73_0.12_76/0.15)] text-[oklch(0.4_0.1_60)]",
  Design: "bg-[oklch(0.55_0.12_300/0.12)] text-[oklch(0.35_0.1_300)]",
};

export default function BlogPage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you for subscribing! Check your inbox soon.");
    setEmail("");
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <img
          src="/assets/generated/hero-blog.dim_1600x900.jpg"
          alt="Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-wide">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[oklch(0.73_0.12_76)] font-heading text-sm uppercase tracking-widest mb-3 font-semibold"
          >
            Insights & Thinking
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-display text-5xl lg:text-6xl text-white max-w-2xl"
          >
            Perspectives on Brand, Design & Growth
          </motion.h1>
        </div>
      </section>

      {/* ─── Blog Grid ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Latest Articles
            </p>
            <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.175_0.065_258)] mb-4">
              Ideas Worth Sharing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                data-ocid={`blog.item.${post.id}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group rounded-xl overflow-hidden border border-[oklch(0.9_0.01_250)] bg-white card-hover"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-heading font-semibold ${
                        categoryColors[post.category] || ""
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[oklch(0.175_0.065_258)] mb-3 line-clamp-2 group-hover:text-[oklch(0.73_0.12_76)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[oklch(0.5_0.02_258)] leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[oklch(0.9_0.01_250)]">
                    <div className="flex items-center gap-3 text-xs text-[oklch(0.6_0.015_252)]">
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="flex items-center gap-1 text-xs font-heading font-semibold text-[oklch(0.175_0.065_258)] hover:text-[oklch(0.73_0.12_76)] transition-colors group/btn"
                    >
                      Read More
                      <ChevronRight
                        size={14}
                        className="group-hover/btn:translate-x-0.5 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Newsletter ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-[oklch(0.175_0.065_258)]">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                Stay Informed
              </p>
              <h2 className="heading-display text-4xl text-white mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-[oklch(0.65_0.015_252)] text-lg mb-8">
                Monthly insights on brand strategy, design trends, and digital
                growth. No spam — just substance.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[oklch(1_0_0/0.1)] border-[oklch(1_0_0/0.15)] text-white placeholder:text-[oklch(0.55_0.015_252)] focus-visible:ring-[oklch(0.73_0.12_76)]"
                  required
                />
                <Button
                  type="submit"
                  className="gold-btn px-6 py-2.5 rounded-md shrink-0"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-[oklch(0.5_0.012_252)] mt-4">
                By subscribing you agree to our privacy policy. Unsubscribe any
                time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.96_0.005_250)]">
        <div className="container-wide text-center">
          <h2 className="heading-display text-4xl text-[oklch(0.175_0.065_258)] mb-4">
            Ready to Start Your Project?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[oklch(0.175_0.065_258)] text-white font-heading font-semibold rounded-md hover:bg-[oklch(0.12_0.055_260)] transition-all"
          >
            Talk to Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
