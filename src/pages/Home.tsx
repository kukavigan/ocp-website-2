import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  LockKeyhole,
  BarChart3,
  Workflow as WorkflowIcon,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { whyOcp } from "@/data/site";
import { images } from "@/data/images";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImageCard from "@/components/ui/ImageCard";
import CTASection from "@/components/sections/CTASection";
import plrbLogo from "@/assets/plrb_logo_2023-1.png";
import sentryLogo from "@/assets/SentryLogo.png";

function AnimatedNumber({
  value,
  suffix = "",
  duration = 1.5,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let frame: number;

    const animate = (time: number) => {
      if (startTime === null) {
        startTime = time;
      }

      const progress = Math.min((time - startTime) / (duration * 1000), 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplay(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function AnimatedMetric({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Smooth ease-out animation
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const homepageServices = [
    {
      number: "01",
      title: "Claims Operations",
      shortTitle: "Claims Operations",
      description:
        "Operational support across the claims lifecycle, delivering consistency, accuracy, and efficiency.",
      path: "/services/claims-operations",
    },
    {
      number: "02",
      title: "Claim Quality Assurance (QA)",
      shortTitle: "Claim QA",
      description:
        "Objective claim reviews that identify risk, reduce leakage, and support continuous improvement.",
      path: "/services/claim-quality-assurance",
    },
    {
      number: "03",
      title: "FNOL Support",
      shortTitle: "FNOL Support",
      description:
        "Accurate, efficient FNOL intake handled with care, speed and accuracy.",
      path: "/services/fnol-support",
    },
    {
      number: "04",
      title: "Adjuster Support",
      shortTitle: "Adjuster Support",
      description:
        "Administrative coordination to help you manage adjuster availability and workloads more efficiently and effectively.",
      path: "/services/adjuster-support",
    },
    {
      number: "05",
      title: "Customer Care",
      shortTitle: "Customer Care",
      description:
        "Customer care services designed to enhance the policyholder experience throughout the claim journey.",
      path: "/services/customer-care",
    },
    {
      number: "06",
      title: "Back Office Operations",
      shortTitle: "Back Office",
      description:
        "Reliable back-office services that keep insurance operations organized, accurate, and moving forward.",
      path: "/services/back-office-operations",
    },
  ];

  const technologyCapabilities = [
    {
      title: "Workflow Optimization",
      desc: "OCP’s streamlined workflows improve efficiency, reduce bottlenecks, and support consistent execution.",
    },
    {
      title: "Operational Analytics",
      desc: "OCP utilizes actionable insights into performance, quality, workload, and operational effectiveness.",
    },
    {
      title: "Secure Infrastructure",
      desc: "OCP employs secure and managed systems and disciplined controls designed to protect data and support compliance.",
    },
    {
      title: "Process Automation",
      desc: "OCP automation processes reduce manual effort, improve speed, and increase operational accuracy.",
    },
    {
      title: "Scalable Support",
      desc: "OCP exercises flexible support models that adapt from day-to-day operations to catastrophe events.",
    },
    {
      title: "Quality Control",
      desc: "OCP engages in structured quality controls with auditing, feedback, and continuous improvement processes.",
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-brand-navy pt-28 text-white md:pt-32">
        {/* Background effects */}
        <div className="absolute inset-0 grid-bg opacity-[0.08]" />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-brand-green/10 blur-[120px]"
        />

        {/* Decorative vertical line */}
        <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.04] xl:block" />

        <div className="container-mw container-px relative">
          {/* MAIN HERO */}
          <div className="grid items-center gap-12 pb-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:pb-12">
            {/* ================= LEFT SIDE ================= */}
            <div className="relative z-10">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex items-center gap-3"
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="h-px bg-brand-blue"
                />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blueLight">
                  Insurance operations, reimagined
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-[4.6rem]"
              >
                Scaling insurance
                <br />
                operations{" "}
                <span className="text-brand-blueLight">with precision.</span>
              </motion.h1>

              {/* Client-approved paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-[17px]"
              >
                OCP helps insurance organizations strengthen claims operations,
                customer care, quality assurance, and back-office processes
                through specialized teams and operational discipline that
                deliver consistent results at scale.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.28,
                }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Button to="/contact" size="lg">
                  Let's talk <ArrowUpRight className="h-4 w-4" />
                </Button>

                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-brand-blue hover:bg-white/5 hover:text-brand-blueLight"
                >
                  Explore services
                  <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </Link>
              </motion.div>

              {/* Client requested statements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.42,
                }}
                className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-semibold text-white/55"
              >
                {/* Built for Insurance */}
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                  </span>
                  Built for Insurance.
                </span>

                <span className="hidden h-4 w-px bg-white/15 sm:block" />

                {/* Powered by people */}
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue" />
                  </span>
                  Powered by people.
                </span>
              </motion.div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative lg:pl-6"
            >
              {/* Decorative frame */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 rounded-[2rem] border border-white/10"
              />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
                <motion.img
                  src={images.team}
                  alt="OCP team"
                  initial={{
                    scale: 1.06,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="aspect-[4/3] w-full object-cover lg:aspect-[16/11]"
                />

                {/* Very subtle image depth only — no text */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" />
              </div>

              {/* ISO BADGES — UNDER PHOTO */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.65,
                }}
                className="relative z-10 mt-4 grid grid-cols-2 gap-3"
              >
                {/* ISO 9001 */}
                <Link
                  to="/certifications"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-brand-green/40 hover:bg-white/[0.08]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green">
                    <Check className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white">ISO 9001</p>

                    <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/40">
                      Quality Management
                    </p>
                  </div>
                </Link>

                {/* ISO 27001 */}
                <Link
                  to="/certifications"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-brand-blue/40 hover:bg-white/[0.08]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blueLight">
                    <LockKeyhole className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white">ISO 27001</p>

                    <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/40">
                      Information Security
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* Decorative circle */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-8 top-12 hidden h-16 w-16 rounded-full border border-dashed border-brand-blue/30 xl:block"
              >
                <div className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-brand-blue" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
      </section>
      {/*HERO METRICS */}
      <section className="relative z-20 -mt-5 w-full bg-white">
        <div className="container-mw container-px">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {/* 24/7 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="relative flex min-h-[125px] flex-col items-center justify-center border-b border-r border-surface-200 px-4 text-center md:min-h-[145px] md:border-b-0"
            >
              <p className="text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">
                <AnimatedMetric value={24} />
                <span>/7</span>
              </p>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.1em] text-brand-navy/45 md:text-xs">
                Operations Coverage
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-brand-navy"
              />
            </motion.div>

            {/* +20 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="relative flex min-h-[125px] flex-col items-center justify-center border-b border-surface-200 px-4 text-center md:min-h-[145px] md:border-b-0 md:border-r"
            >
              <p className="text-4xl font-bold tracking-tight text-brand-blue md:text-5xl">
                <AnimatedMetric value={20} prefix="+" />
              </p>

              <p className="mt-3 max-w-[170px] text-[10px] font-bold uppercase tracking-[0.1em] text-brand-navy/45 md:text-xs">
                Years of Industry Experience
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-brand-blue"
              />
            </motion.div>

            {/* 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="relative flex min-h-[125px] flex-col items-center justify-center border-r border-surface-200 px-4 text-center md:min-h-[145px]"
            >
              <p className="text-4xl font-bold tracking-tight text-brand-green md:text-5xl">
                <AnimatedMetric value={2} />
              </p>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.1em] text-brand-navy/45 md:text-xs">
                ISO Certifications
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-brand-green"
              />
            </motion.div>

            {/* 100% */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="relative flex min-h-[125px] flex-col items-center justify-center px-4 text-center md:min-h-[145px]"
            >
              <p className="text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">
                <AnimatedMetric value={100} suffix="%" />
              </p>

              <p className="mt-3 max-w-[210px] text-[10px] font-bold uppercase tracking-[0.1em] text-brand-navy/45 md:text-xs">
                Security Operations Center Coverage
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-brand-navy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
    SERVICES — INTERACTIVE OPERATIONS CAPABILITIES
========================================================= */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28">
        {/* Background */}
        <div className="absolute inset-0 grid-bg opacity-[0.05]" />

        <div className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-brand-blue/10 blur-[130px]" />

        <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-brand-green/[0.07] blur-[120px]" />

        <div className="container-mw container-px relative">
          {/* ================= HEADING ================= */}
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  What we do
                </p>

                <span className="h-px w-10 bg-brand-green" />
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Precision execution across{" "}
                <span className="text-brand-blueLight">
                  insurance operations.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
                Across the insurance lifecycle, OCP brings structure, skill, and
                care to the operational work that drives consistency,
                efficiency, and service quality.
              </p>
            </div>
          </Reveal>

          {/* =====================================================
        DESKTOP SERVICE NAVIGATION
    ===================================================== */}

          <div className="relative mt-12 hidden md:block">
            {/* Connecting line */}
            <div className="absolute left-[8%] right-[8%] top-7 h-px bg-white/15" />

            <div className="relative z-10 grid grid-cols-6">
              {homepageServices.map((service, index) => {
                const active = activeService === index;

                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveService(index)}
                    className="group flex flex-col items-center text-center"
                  >
                    {/* Number circle */}
                    <motion.div
                      animate={{
                        scale: active ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-14 w-14 items-center justify-center rounded-full border text-sm font-bold transition-all duration-300 ${
                        active
                          ? "border-brand-blue bg-brand-blue text-white shadow-[0_0_30px_rgba(40,171,230,0.25)]"
                          : "border-white/25 bg-brand-navy text-white/50 group-hover:border-brand-blue/70 group-hover:text-white"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>

                    {/* Service title */}
                    <span
                      className={`mt-4 max-w-[150px] text-xs font-semibold leading-5 transition-colors duration-300 ${
                        active
                          ? "text-brand-blue"
                          : "text-white/50 group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =====================================================
        MOBILE / TABLET SERVICE NAVIGATION
    ===================================================== */}
          <div className="mt-12 grid grid-cols-2 gap-3 lg:hidden">
            {homepageServices.map((service, index) => {
              const isActive = activeService === index;

              return (
                <motion.button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveService(index)}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className={`relative overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-brand-blue/60 bg-brand-blue/10"
                      : "border-white/10 bg-white/[0.035]"
                  }`}
                >
                  {/* Top accent */}
                  <div
                    className={`absolute left-0 top-0 h-[2px] transition-all duration-300 ${
                      isActive
                        ? "w-full bg-gradient-to-r from-brand-blue to-brand-green"
                        : "w-0 bg-brand-blue"
                    }`}
                  />

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p
                        className={`text-[9px] font-bold uppercase tracking-[0.18em] ${
                          isActive ? "text-brand-green" : "text-white/30"
                        }`}
                      >
                        {service.number}
                      </p>

                      <p
                        className={`mt-2 text-sm font-bold leading-snug ${
                          isActive ? "text-white" : "text-white/60"
                        }`}
                      >
                        {service.shortTitle}
                      </p>
                    </div>

                    <span
                      className={`mt-1 h-2 w-2 shrink-0 rounded-full transition-colors duration-300 ${
                        isActive ? "bg-brand-green" : "bg-white/15"
                      }`}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/*ACTIVE SERVICE PANEL*/}
          <div className="mx-auto mt-12 max-w-5xl">
            <motion.div
              key={activeService}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-sm"
            >
              {/* Top gradient */}
              <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-brand-blue via-brand-green to-transparent" />

              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/[0.08] blur-[80px]" />

              <div className="relative grid items-center gap-8 p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:p-10">
                {/* Number */}
                <div className="hidden md:block">
                  <p className="text-5xl font-bold tracking-[-0.05em] text-white/[0.08]">
                    {homepageServices[activeService].number}
                  </p>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blueLight">
                      OCP Service
                    </p>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {homepageServices[activeService].title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
                    {homepageServices[activeService].description}
                  </p>
                </div>

                {/* Explore button */}
                <div className="md:pl-6">
                  <Link
                    to={homepageServices[activeService].path}
                    className="group inline-flex items-center gap-2 rounded-xl border border-brand-blue/30 bg-brand-blue/10 px-5 py-3 text-xs font-bold text-brand-blueLight transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                  >
                    Explore service
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
        ALL SERVICES LINK
    ===================================================== */}
          <Reveal delay={0.2}>
            <div className="mt-8 text-center">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/40 transition-colors duration-300 hover:text-brand-green"
              >
                View all service capabilities
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
    REAL PEOPLE. REAL OPERATIONS.
========================================================= */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Background accents */}
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-brand-green/[0.04] blur-[100px]" />

        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-brand-blue/[0.04] blur-[100px]" />

        <div className="container-mw container-px relative">
          <div className="grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
            {/* =====================================================
          LEFT CONTENT
      ===================================================== */}
            <Reveal>
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                    Real People. Real Operations.
                  </p>
                </div>

                {/* Heading */}
                <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                  Insurance is personal.{" "}
                  <span className="text-brand-blue">
                    Our operations are, too.
                  </span>
                </h2>

                {/* Client-approved paragraph */}
                <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-navy/65">
                  Insurance operations may run on processes and systems, but
                  trust is built through human interaction. OCP combines
                  specialized insurance expertise, disciplined execution, and
                  scalable support teams to help our clients deliver consistent
                  service and better customer experiences.
                </p>

                {/* Values */}
                <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                  {[
                    {
                      label: "People",
                      color: "bg-brand-green",
                    },
                    {
                      label: "Expertise",
                      color: "bg-brand-blue",
                    },
                    {
                      label: "Execution",
                      color: "bg-brand-green",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.15 + index * 0.1,
                      }}
                      className="flex items-center gap-2"
                    >
                      <span className={`h-2 w-2 rounded-full ${item.color}`} />

                      <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/50">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Stronger CTA */}
                <div className="mt-9">
                  <Link
                    to="/about"
                    className="group inline-flex items-center gap-3 rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:shadow-xl"
                  >
                    Meet OCP
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* =====================================================
          RIGHT — PEOPLE PHOTOGRAPHY
      ===================================================== */}
            <div className="relative">
              <div className="grid gap-4 sm:grid-cols-[1.08fr_.92fr]">
                {/* Large image */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <motion.img
                    src={images.support}
                    alt="OCP team"
                    whileHover={{
                      scale: 1.025,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="h-[520px] w-full object-cover sm:h-[560px]"
                  />

                  {/* Very subtle depth overlay only */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/10 via-transparent to-transparent" />
                </motion.div>

                {/* Two smaller images */}
                <div className="grid gap-4 sm:grid-rows-2 sm:pt-8">
                  {/* Image 2 */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      x: -4,
                    }}
                    className="relative overflow-hidden rounded-2xl"
                  >
                    <motion.img
                      src={images.agent}
                      alt="OCP team member"
                      whileHover={{
                        scale: 1.035,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="h-[250px] w-full object-cover sm:h-full"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/10 via-transparent to-transparent" />
                  </motion.div>

                  {/* Image 3 */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      x: -4,
                    }}
                    className="relative overflow-hidden rounded-2xl"
                  >
                    <motion.img
                      src={images.analytics}
                      alt="OCP operations team"
                      whileHover={{
                        scale: 1.035,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="h-[250px] w-full object-cover sm:h-full"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/10 via-transparent to-transparent" />
                  </motion.div>
                </div>
              </div>

              {/* Decorative accent */}
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-4 h-[2px] origin-left bg-gradient-to-r from-brand-green via-brand-blue to-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/*WHY OCP */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28">
        <div className="absolute inset-0 grid-bg opacity-[0.04]" />

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]"
        />

        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-brand-green/[0.06] blur-[100px]" />

        <div className="container-mw container-px relative">
          <div className="grid items-start gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
            <Reveal>
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                    Why OCP
                  </p>
                </div>

                <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  More than support.
                  <br />
                  <span className="text-brand-blueLight">
                    A true operations partner.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg leading-relaxed text-white/60">
                  Insurance operations require more than additional capacity.
                  They demand expertise, discipline, and a partner committed to
                  performance. OCP delivers all three through experienced teams,
                  proven processes, and operational accountability.
                </p>

                <div className="mt-10 border-t border-white/10 pt-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                    Cybersecurity partnership
                  </p>

                  <div className="mt-4">
                    <a
                      href="https://sentry.security/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-all duration-300 hover:border-brand-blue/30 hover:bg-white/[0.07]"
                    >
                      {/* Sentry Logo */}
                      <div className="flex h-12 w-32 items-center justify-center rounded-lg bg-white px-3 py-2">
                        <img
                          src={sentryLogo}
                          alt="Sentry Security"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Managed cybersecurity expertise
                        </p>

                        <p className="mt-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35 transition-colors duration-300 group-hover:text-brand-blueLight">
                          Visit Sentry Security
                          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* =====================================================
          RIGHT — LINKED REASONS
      ===================================================== */}
            <div className="flex flex-col gap-3">
              {whyOcp.slice(0, 4).map((item, index) => {
                /*
            Temporary destination mapping.

            Once we confirm every final site page, these can
            be adjusted without changing the card design.
          */
                const links = [
                  "/about",
                  "/services",
                  "/certifications",
                  "/certifications",
                ];

                return (
                  <Reveal key={item.title} delay={index * 0.07}>
                    <motion.div
                      whileHover={{
                        x: 6,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <Link
                        to={links[index]}
                        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-all duration-500 hover:border-brand-blue/30 hover:bg-white/[0.07]"
                      >
                        {/* Animated left accent */}
                        <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-brand-blue to-brand-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="flex items-center gap-5">
                          {/* Number */}
                          <p className="w-6 shrink-0 text-[10px] font-bold tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-brand-green">
                            {String(index + 1).padStart(2, "0")}
                          </p>

                          {/* Icon */}
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blueLight transition-all duration-300 group-hover:bg-brand-green/15 group-hover:text-brand-green">
                            {index === 3 ? (
                              <LockKeyhole className="h-4 w-4" />
                            ) : (
                              <Check className="h-4 w-4" />
                            )}
                          </div>

                          {/* Content */}
                          <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-white transition-colors duration-300 group-hover:text-brand-blueLight">
                              {item.title}
                            </h3>

                            <p className="mt-1 text-sm leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/65">
                              {index === 3
                                ? "ISO 27001-aligned controls backed by managed cybersecurity expertise."
                                : item.desc}
                            </p>
                          </div>

                          {/* Link indicator */}
                          <div className="ml-auto hidden shrink-0 sm:block">
                            <ArrowUpRight className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-green" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
    TECHNOLOGY & OPERATIONS
========================================================= */}
      <section className="relative overflow-hidden bg-surface-50 py-20 md:py-28">
        {/* Background */}
        <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-brand-blue/[0.05] blur-[100px]" />

        <div className="absolute -bottom-40 left-0 h-72 w-72 rounded-full bg-brand-green/[0.05] blur-[100px]" />

        <div className="container-mw container-px relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
            {/* =====================================================
          LEFT
      ===================================================== */}
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  Technology & Operations
                </p>
              </div>

              <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                The discipline of process.{" "}
                <span className="text-brand-blue">The clarity of data.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-navy/65">
                OCP combines disciplined processes, practical technology, and
                actionable insights to improve visibility, strengthen
                performance, and support scalable operations without losing the
                human touch.
              </p>

              {/* Capabilities */}
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {technologyCapabilities.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="group rounded-xl border border-surface-200 bg-white p-4 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-card"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                        {index === 2 ? (
                          <LockKeyhole className="h-4 w-4" />
                        ) : index === 5 ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <WorkflowIcon className="h-4 w-4" />
                        )}
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs leading-relaxed text-brand-navy/55">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 h-px w-0 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                ))}
              </div>
            </Reveal>

            {/* =====================================================
          RIGHT — IMAGE
      ===================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Decorative frame */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 rounded-3xl border border-brand-blue/10"
              />

              {/* Temporary image — replace during final photo pass */}
              <div className="group relative overflow-hidden rounded-2xl shadow-float">
                <motion.img
                  src={images.analytics}
                  alt="OCP operations"
                  whileHover={{
                    scale: 1.035,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative h-[420px] w-full object-cover md:h-[500px] lg:h-[560px]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" />

                {/* Minimal visual accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-brand-blue via-brand-green to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Background accents */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-green/[0.04] blur-[100px]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-brand-blue/[0.05] blur-[100px]" />

        <div className="container-mw container-px relative">
          <SectionHeading
            eyebrow="Built on trust"
            title="Quality, security, and industry connection."
            subtitle="Standards and relationships that strengthen how we operate."
          />

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
            {/* ISO 9001 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
            >
              <Link
                to="/certifications"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white p-7 transition-all duration-500 hover:border-brand-green/30 hover:shadow-card"
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-brand-green transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green transition-all duration-300 group-hover:bg-brand-green group-hover:text-white">
                    <Check className="h-6 w-6" />
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-brand-navy/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-green" />
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-7 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
                    Quality Management
                  </p>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-green">
                  ISO 9001
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-brand-navy/60">
                  Proven framework for quality, consistency, and continuous
                  improvement
                </p>

                <div className="mt-auto pt-7">
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-navy/35 transition-colors duration-300 group-hover:text-brand-green">
                    Explore certification
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* ISO 27001 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
            >
              <Link
                to="/certifications"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white p-7 transition-all duration-500 hover:border-brand-blue/30 hover:shadow-card"
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-brand-blue transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <LockKeyhole className="h-6 w-6" />
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-brand-navy/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-blue" />
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-7 bg-brand-blue" />

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                    Information Security
                  </p>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
                  ISO 27001
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-brand-navy/60">
                  Internationally recognized security standards for protecting
                  entrusted information.
                </p>

                <div className="mt-auto pt-7">
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-navy/35 transition-colors duration-300 group-hover:text-brand-blue">
                    Explore certification
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* PLRB Affiliate */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
            >
              <Link
                to="/certifications"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white p-7 transition-all duration-500 hover:border-brand-blue/30 hover:shadow-card"
              >
                {/* Blue → Green top accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-36 items-center justify-center overflow-hidden rounded-xl bg-brand-navy px-3">
                    <img
                      src={plrbLogo}
                      alt="PLRB Affiliate"
                      className="h-auto w-full object-contain"
                    />
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-brand-navy/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-green" />
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-7 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                    Industry Affiliation
                  </p>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
                  PLRB Affiliate
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-brand-navy/60">
                  Connected to the P&C insurance industry through professional
                  relationships and engagement.”.
                </p>

                <div className="mt-auto pt-7">
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-navy/35 transition-colors duration-300 group-hover:text-brand-green">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Bottom trust statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mx-auto mt-8 flex max-w-4xl items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-brand-green/40" />

            <p className="text-center text-[10px] font-bold uppercase tracking-[0.18em] text-brand-navy/35">
              Built on standards · Guided by security · Connected through
              industry
            </p>

            <span className="h-px w-8 bg-brand-blue/40" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
