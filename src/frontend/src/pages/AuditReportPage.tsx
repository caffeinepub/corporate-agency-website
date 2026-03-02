import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart2,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Cpu,
  Database,
  FileText,
  Presentation,
  Search,
  Shield,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useGetAllAuditSteps } from "../hooks/useQueries";

const fallbackAuditSteps = [
  {
    stepNumber: BigInt(1),
    title: "Initial Assessment",
    description:
      "Gathering baseline data and defining the scope of the audit engagement. We establish objectives, identify key stakeholders, and create a detailed audit plan.",
  },
  {
    stepNumber: BigInt(2),
    title: "Data Collection",
    description:
      "Systematic collection of evidence and documentation across all relevant business units. This includes interviews, document review, and observation of processes.",
  },
  {
    stepNumber: BigInt(3),
    title: "Analysis & Review",
    description:
      "Deep analysis of collected data against established benchmarks and regulatory requirements. We identify patterns, anomalies, and areas of non-compliance.",
  },
  {
    stepNumber: BigInt(4),
    title: "Finding Documentation",
    description:
      "Documenting issues, risks, and recommendations in a structured format. Each finding is categorized by severity and impact on the organization.",
  },
  {
    stepNumber: BigInt(5),
    title: "Report Drafting",
    description:
      "Compiling findings into a structured, comprehensive audit report. The report includes executive summary, detailed findings, evidence, and actionable recommendations.",
  },
  {
    stepNumber: BigInt(6),
    title: "Presentation & Follow-up",
    description:
      "Presenting findings to stakeholders and senior management. Establishing corrective action plans and monitoring timelines for issue resolution.",
  },
];

const stepIcons = [
  ClipboardList,
  Database,
  BarChart2,
  FileText,
  BookOpen,
  Presentation,
];

const auditTypes = [
  {
    icon: <TrendingUp size={24} />,
    title: "Financial Audit",
    description:
      "Examination of financial statements to ensure accuracy, completeness, and compliance with accounting standards (GAAP or IFRS). Identifies misstatements and potential fraud.",
  },
  {
    icon: <Shield size={24} />,
    title: "Compliance Audit",
    description:
      "Assessment of adherence to regulatory requirements, industry standards, and internal policies. Critical for organizations operating in regulated industries.",
  },
  {
    icon: <Search size={24} />,
    title: "Operational Audit",
    description:
      "Evaluation of business processes and procedures for efficiency, effectiveness, and economy. Identifies bottlenecks and opportunities for improvement.",
  },
  {
    icon: <Cpu size={24} />,
    title: "IT Systems Audit",
    description:
      "Review of IT infrastructure, security controls, and data management practices. Ensures systems are secure, reliable, and aligned with business objectives.",
  },
];

const auditBenefits = [
  {
    title: "Risk Identification",
    description:
      "Proactively identify operational, financial, and compliance risks before they become costly problems.",
  },
  {
    title: "Process Improvement",
    description:
      "Uncover inefficiencies and bottlenecks that are costing your organization time and money.",
  },
  {
    title: "Stakeholder Confidence",
    description:
      "Build trust with investors, regulators, and partners through transparent, verified reporting.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Stay ahead of regulatory requirements and avoid penalties through proactive compliance monitoring.",
  },
  {
    title: "Strategic Insights",
    description:
      "Gain actionable intelligence about your business operations to inform strategic decision-making.",
  },
  {
    title: "Performance Benchmarking",
    description:
      "Measure your operations against industry standards and best practices to identify competitive gaps.",
  },
];

export default function AuditReportPage() {
  const { data: backendSteps } = useGetAllAuditSteps();
  const auditSteps =
    backendSteps && backendSteps.length > 0
      ? [...backendSteps].sort(
          (a, b) => Number(a.stepNumber) - Number(b.stepNumber),
        )
      : fallbackAuditSteps;

  return (
    <div className="pt-16 lg:pt-20">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <img
          src="/assets/generated/hero-audit.dim_1600x900.jpg"
          alt="Audit report"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-wide">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[oklch(0.73_0.12_76)] font-heading text-sm uppercase tracking-widest mb-3 font-semibold"
          >
            Audit Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-display text-5xl lg:text-6xl text-white max-w-3xl"
          >
            Understanding the Audit Report Process
          </motion.h1>
        </div>
      </section>

      {/* ─── Introduction ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                What is an Audit Report?
              </p>
              <h2 className="heading-display text-4xl text-[oklch(0.175_0.065_258)] mb-6">
                The Foundation of Business Accountability
              </h2>
              <p className="text-[oklch(0.4_0.02_258)] leading-relaxed mb-5">
                An audit report is a formal document produced by an independent
                auditor that presents findings after a systematic examination of
                an organization's financial records, processes, controls, or
                compliance status. It serves as the cornerstone of
                organizational transparency and governance.
              </p>
              <p className="text-[oklch(0.4_0.02_258)] leading-relaxed mb-5">
                Far from being a bureaucratic exercise, a well-executed audit
                provides actionable intelligence that helps organizations
                identify risks, optimize operations, and build trust with
                stakeholders. It is both a diagnostic tool and a strategic
                asset.
              </p>
              <p className="text-[oklch(0.4_0.02_258)] leading-relaxed">
                Whether required by regulation or pursued voluntarily, audit
                reports give decision-makers the verified data they need to lead
                with confidence and accountability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {[
                {
                  title: "Independence",
                  desc: "Conducted by an objective third party free from conflicts of interest.",
                },
                {
                  title: "Evidence-Based",
                  desc: "Every finding is supported by documented evidence and verifiable data.",
                },
                {
                  title: "Structured",
                  desc: "Follows a standardized framework for consistency and comparability.",
                },
                {
                  title: "Actionable",
                  desc: "Includes specific recommendations and a path to remediation.",
                },
              ].map((point) => (
                <div
                  key={point.title}
                  className="bg-[oklch(0.96_0.005_250)] rounded-xl p-6"
                >
                  <div className="w-8 h-8 rounded-lg bg-[oklch(0.73_0.12_76/0.15)] flex items-center justify-center mb-3">
                    <CheckCircle2
                      size={16}
                      className="text-[oklch(0.5_0.1_60)]"
                    />
                  </div>
                  <h4 className="font-heading font-bold text-[oklch(0.175_0.065_258)] mb-2">
                    {point.title}
                  </h4>
                  <p className="text-sm text-[oklch(0.5_0.02_258)] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Audit Process ────────────────────────────────────────────────── */}
      <section className="section-padding bg-[oklch(0.96_0.005_250)]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              The Audit Lifecycle
            </p>
            <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.175_0.065_258)] mb-4">
              How an Audit Report Works
            </h2>
            <p className="text-[oklch(0.5_0.02_258)] text-lg max-w-2xl mx-auto">
              A rigorous, six-phase methodology that transforms raw data into
              actionable organizational intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Steps */}
            <div className="space-y-5">
              {auditSteps.map((step, i) => {
                const IconComponent = stepIcons[i] || ClipboardList;
                return (
                  <motion.div
                    key={`step-${step.title}`}
                    data-ocid={`audit.step.${i + 1}`}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="shrink-0 flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-[oklch(0.175_0.065_258)] flex items-center justify-center text-[oklch(0.73_0.12_76)]">
                        <IconComponent size={20} />
                      </div>
                      <span className="text-xs font-heading font-bold text-[oklch(0.73_0.12_76)]">
                        {String(Number(step.stepNumber)).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[oklch(0.175_0.065_258)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[oklch(0.5_0.02_258)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Process Image */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <img
                src="/assets/generated/audit-process.dim_1200x600.jpg"
                alt="Audit process visualization"
                className="rounded-2xl w-full object-cover shadow-xl mb-8"
              />
              <div className="bg-[oklch(0.175_0.065_258)] rounded-xl p-8">
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  Typical Audit Timeline
                </h3>
                <div className="space-y-3">
                  {[
                    { phase: "Planning & Scoping", duration: "1–2 weeks" },
                    { phase: "Data Collection", duration: "2–4 weeks" },
                    { phase: "Analysis & Fieldwork", duration: "3–6 weeks" },
                    { phase: "Draft Report Review", duration: "1–2 weeks" },
                    { phase: "Final Report & Debrief", duration: "1 week" },
                  ].map((item) => (
                    <div
                      key={item.phase}
                      className="flex items-center justify-between py-2 border-b border-[oklch(1_0_0/0.08)] last:border-0"
                    >
                      <span className="text-sm text-[oklch(0.75_0.015_252)]">
                        {item.phase}
                      </span>
                      <span className="text-sm font-heading font-semibold text-[oklch(0.73_0.12_76)]">
                        {item.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Types of Audits ──────────────────────────────────────────────── */}
      <section className="section-padding bg-[oklch(0.175_0.065_258)]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Audit Types
            </p>
            <h2 className="heading-display text-4xl text-white mb-4">
              Which Audit Do You Need?
            </h2>
            <p className="text-[oklch(0.65_0.015_252)] text-lg max-w-2xl mx-auto">
              Different business needs call for different types of audit
              engagements. Here's an overview of the most common.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {auditTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[oklch(1_0_0/0.06)] rounded-xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.73_0.12_76)] flex items-center justify-center text-[oklch(0.12_0.055_260)] mb-5">
                  {type.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {type.title}
                </h3>
                <p className="text-[oklch(0.7_0.015_252)] leading-relaxed text-sm">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.73_0.12_76)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Why Audit?
            </p>
            <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.175_0.065_258)] mb-4">
              The Business Case for Regular Auditing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-[oklch(0.9_0.01_250)] hover:border-[oklch(0.73_0.12_76/0.4)] hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.73_0.12_76/0.12)] flex items-center justify-center mb-4">
                  <CheckCircle2
                    size={18}
                    className="text-[oklch(0.5_0.1_60)]"
                  />
                </div>
                <h3 className="font-heading font-bold text-[oklch(0.175_0.065_258)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[oklch(0.5_0.02_258)] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[oklch(0.73_0.12_76)]">
        <div className="container-wide text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-display text-4xl lg:text-5xl text-[oklch(0.12_0.055_260)] mb-4"
          >
            Ready for an Audit Engagement?
          </motion.h2>
          <p className="text-[oklch(0.2_0.06_260)] text-lg mb-10 max-w-xl mx-auto">
            Our audit professionals bring decades of cross-industry experience
            to help you gain clarity, manage risk, and build stakeholder
            confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[oklch(0.12_0.055_260)] text-white font-heading font-semibold rounded-md hover:bg-[oklch(0.175_0.065_258)] transition-all duration-200 text-base"
          >
            Request an Audit Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
