import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitContactForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(form);
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <img
          src="/assets/generated/hero-contact.dim_1600x900.jpg"
          alt="Contact us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-wide">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[oklch(0.73_0.12_76)] font-heading text-sm uppercase tracking-widest mb-3 font-semibold"
          >
            Let's Connect
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-display text-5xl lg:text-6xl text-white max-w-2xl"
          >
            Start a Conversation
          </motion.h1>
        </div>
      </section>

      {/* ─── Contact Form + Info ──────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                Get in Touch
              </p>
              <h2 className="heading-display text-3xl text-[oklch(0.175_0.065_258)] mb-2">
                Send Us a Message
              </h2>
              <p className="text-[oklch(0.5_0.02_258)] mb-8">
                Tell us about your project and we'll respond within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  data-ocid="contact.success_state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[oklch(0.96_0.005_250)] border border-[oklch(0.73_0.12_76/0.3)] rounded-xl p-10 text-center"
                >
                  <CheckCircle
                    size={48}
                    className="text-[oklch(0.73_0.12_76)] mx-auto mb-4"
                  />
                  <h3 className="font-heading font-bold text-xl text-[oklch(0.175_0.065_258)] mb-2">
                    Message Received!
                  </h3>
                  <p className="text-[oklch(0.5_0.02_258)]">
                    Thank you for reaching out. A member of our team will be in
                    touch within 24 business hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-heading font-semibold text-[oklch(0.25_0.04_258)]"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      data-ocid="contact.name_input"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="h-12 border-[oklch(0.88_0.015_252)] focus-visible:ring-[oklch(0.73_0.12_76)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-heading font-semibold text-[oklch(0.25_0.04_258)]"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      data-ocid="contact.email_input"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="h-12 border-[oklch(0.88_0.015_252)] focus-visible:ring-[oklch(0.73_0.12_76)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="font-heading font-semibold text-[oklch(0.25_0.04_258)]"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      data-ocid="contact.textarea"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, and goals..."
                      required
                      rows={6}
                      className="border-[oklch(0.88_0.015_252)] focus-visible:ring-[oklch(0.73_0.12_76)] resize-none"
                    />
                  </div>

                  {mutation.isError && (
                    <div
                      data-ocid="contact.error_state"
                      className="flex items-center gap-2 text-sm text-destructive"
                    >
                      <AlertCircle size={16} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={mutation.isPending}
                    className="w-full h-12 gold-btn rounded-md font-heading font-semibold text-base"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                Find Us
              </p>
              <h2 className="heading-display text-3xl text-[oklch(0.175_0.065_258)] mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.175_0.065_258)] flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[oklch(0.73_0.12_76)]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[oklch(0.175_0.065_258)] mb-1">
                      Office Address
                    </h4>
                    <p className="text-[oklch(0.5_0.02_258)]">
                      142 Madison Avenue, Suite 1200
                      <br />
                      New York, NY 10016
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.175_0.065_258)] flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-[oklch(0.73_0.12_76)]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[oklch(0.175_0.065_258)] mb-1">
                      Phone
                    </h4>
                    <p className="text-[oklch(0.5_0.02_258)]">
                      <a
                        href="tel:+12125550100"
                        className="hover:text-[oklch(0.73_0.12_76)] transition-colors"
                      >
                        +1 (212) 555-0100
                      </a>
                      <br />
                      <a
                        href="tel:+12125550101"
                        className="hover:text-[oklch(0.73_0.12_76)] transition-colors"
                      >
                        +1 (212) 555-0101
                      </a>{" "}
                      (fax)
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.175_0.065_258)] flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-[oklch(0.73_0.12_76)]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[oklch(0.175_0.065_258)] mb-1">
                      Email
                    </h4>
                    <p className="text-[oklch(0.5_0.02_258)]">
                      <a
                        href="mailto:hello@apexstudio.com"
                        className="hover:text-[oklch(0.73_0.12_76)] transition-colors"
                      >
                        hello@apexstudio.com
                      </a>
                      <br />
                      <a
                        href="mailto:careers@apexstudio.com"
                        className="hover:text-[oklch(0.73_0.12_76)] transition-colors"
                      >
                        careers@apexstudio.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.175_0.065_258)] flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-[oklch(0.73_0.12_76)]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[oklch(0.175_0.065_258)] mb-1">
                      Business Hours
                    </h4>
                    <p className="text-[oklch(0.5_0.02_258)]">
                      Monday – Friday: 9:00 AM – 6:00 PM EST
                      <br />
                      Saturday: 10:00 AM – 2:00 PM EST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Map Placeholder ──────────────────────────────────────────────── */}
      <section className="bg-[oklch(0.96_0.005_250)]">
        <div className="container-wide py-16">
          <div className="rounded-2xl overflow-hidden h-80 bg-[oklch(0.175_0.065_258)] relative flex items-center justify-center">
            <img
              src="/assets/generated/hero-contact.dim_1600x900.jpg"
              alt="Location"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[oklch(0.73_0.12_76)] flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-[oklch(0.12_0.055_260)]" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-1">
                Apex Studio HQ
              </h3>
              <p className="text-[oklch(0.65_0.015_252)] text-sm">
                142 Madison Avenue, Suite 1200, New York, NY 10016
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
