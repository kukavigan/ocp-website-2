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
import { services } from "@/data/services";
import { metrics, whyOcp, techCapabilities } from "@/data/site";
import { images } from "@/data/images";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImageCard from "@/components/ui/ImageCard";
import ServiceCard from "@/components/sections/ServiceCard";
import Workflow from "@/components/sections/Workflow";
import CTASection from "@/components/sections/CTASection";
import plrbLogo from "@/assets/plrb_logo_2023-1.png";

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

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[90vh] overflow-hidden bg-brand-navy pt-32 text-white md:pt-40">
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

        <div className="container-mw container-px relative grid min-h-[calc(90vh-8rem)] items-center gap-14 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:pb-24">
          {/* LEFT SIDE */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
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

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-[5rem]"
            >
              Scaling insurance
              <br />
              operations{" "}
              <span className="text-brand-blueLight">with precision.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
            >
              OCP helps insurance organizations strengthen claims operations,
              customer care, quality assurance, and back-office processes — with
              the people and discipline to perform at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.28,
              }}
              className="mt-9 flex flex-wrap gap-3"
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

            {/* ISO indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-semibold text-white/50"
            >
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                </span>
                ISO 9001 Quality
              </span>

              <span className="h-4 w-px bg-white/15" />

              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue" />
                </span>
                ISO 27001 Security
              </span>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
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
                y: [0, -8, 0],
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
                alt="OCP team collaborating in an operations environment"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="aspect-[4/5] w-full object-cover md:aspect-[4/3] lg:aspect-[4/5]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blueLight">
                  The OCP difference
                </p>

                <p className="mt-3 max-w-sm text-xl font-bold leading-snug text-white md:text-2xl">
                  Operational rigor.
                  <br />
                  Human connection.
                  <br />
                  Better outcomes.
                </p>
              </div>
            </div>

            {/* Floating status card */}
            <motion.div
              initial={{ opacity: 0, x: -25, y: 15 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -6, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.7 },
                x: { duration: 0.5, delay: 0.7 },
                y: {
                  duration: 4,
                  delay: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-6 -left-3 hidden rounded-2xl border border-white/10 bg-brand-navy/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
                  <BarChart3 className="h-5 w-5" />
                </div>

                <div className="group relative">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Operations status
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Built to scale
                  </p>

                  {/* Hover message */}
                  <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 translate-y-2 whitespace-nowrap rounded-lg bg-white px-3 py-2 text-xs font-semibold text-brand-navy opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Ha-Ha, It's not a badge! 😄
                    {/* Tooltip arrow */}
                    <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small decorative element */}
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

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
      </section>

      <section className="border-y border-surface-200 bg-white">
        <div className="container-mw container-px grid grid-cols-2 divide-x divide-surface-200 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 0.06}
              className="px-4 py-8 text-center first:pl-0 last:pr-0 md:py-10"
            >
              <p
                className={`text-3xl font-bold md:text-4xl ${
                  index === 1
                    ? "text-brand-blue"
                    : index === 2
                      ? "text-brand-green"
                      : "text-brand-navy"
                }`}
              >
                {metric.value === "24/7" ? (
                  metric.value
                ) : (
                  <AnimatedNumber
                    value={parseInt(metric.value)}
                    suffix={metric.value.includes("%") ? "%" : ""}
                  />
                )}
              </p>

              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-brand-navy/50 md:text-xs">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-mw container-px py-20 md:py-28">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              The operations layer behind{" "}
              <span className="text-brand-blue">better claims.</span>
            </>
          }
          subtitle="From the first notice of loss to final resolution, OCP brings structure, skill, and care to the work that keeps insurance moving."
        />
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/services" variant="outline">
            View all services <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28">
        {/* Background decoration */}
        <div className="absolute inset-0 grid-bg opacity-[0.05]" />

        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />

        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-brand-green/[0.07] blur-[100px]" />

        <div className="container-mw container-px relative">
          <Reveal>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  The claims journey
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                A better-connected{" "}
                <span className="text-brand-blueLight">workflow.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-relaxed text-white/60">
                Every handoff matters. OCP creates continuity across the entire
                claims lifecycle.
              </p>
            </div>
          </Reveal>

          <div className="mt-14">
            <Workflow />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Subtle background detail */}
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-brand-green/[0.04] blur-[100px]" />

        <div className="container-mw container-px relative">
          <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
            {/* LEFT CONTENT */}
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  Real operations. Real people.
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                Built around the work{" "}
                <span className="text-brand-blue">that matters.</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-relaxed text-brand-navy/65">
                Insurance is personal. Our operations are too. OCP combines
                skilled people, disciplined processes, and practical technology
                to create a support experience your policyholders and adjusters
                can feel.
              </p>

              {/* Small values */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {["People", "Process", "Technology"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + index * 0.1,
                    }}
                    className="flex items-center gap-2"
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        index === 1 ? "bg-brand-green" : "bg-brand-blue"
                      }`}
                    />

                    <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/50">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Button to="/about" variant="outline" className="mt-8">
                Meet OCP <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Reveal>

            {/* RIGHT IMAGE GRID */}
            <div className="relative">
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                >
                  <ImageCard
                    image="support"
                    label="Claims Operations Center"
                    caption="Where precision meets empathy"
                    aspect="tall"
                    overlay="navy"
                  />
                </motion.div>

                <div className="space-y-4 pt-8">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ x: -4 }}
                  >
                    <ImageCard
                      image="agent"
                      label="FNOL Support Team"
                      aspect="video"
                      overlay="navy"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ x: -4 }}
                  >
                    <ImageCard
                      image="analytics"
                      label="Analytics & Reporting"
                      aspect="video"
                      overlay="navy"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Floating OCP element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                animate={{
                  y: [0, -6, 0],
                }}
                className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-surface-200 bg-white px-5 py-4 shadow-xl md:block"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-30" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-green" />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-navy/40">
                      OCP Operations
                    </p>

                    <p className="mt-1 text-xs font-bold text-brand-navy">
                      People powered. Process driven.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28">
        {/* Background effects */}
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
          <div className="grid items-start gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            {/* LEFT SIDE */}
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

                <p className="mt-6 max-w-md leading-relaxed text-white/60">
                  We bring the capability, care, and operational maturity
                  insurance organizations need to move forward with confidence.
                </p>

                {/* Partnership badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.25,
                  }}
                  className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-30" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-green" />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                    Built for long-term partnership
                  </span>
                </motion.div>
              </div>
            </Reveal>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-3">
              {whyOcp.slice(0, 4).map((item, index) => (
                <Reveal key={item.title} delay={index * 0.07}>
                  <motion.div
                    whileHover={{
                      x: 6,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-all duration-500 hover:border-brand-blue/30 hover:bg-white/[0.07]"
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
                        <Check className="h-4 w-4" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <h3 className="font-bold text-white transition-colors duration-300 group-hover:text-brand-blueLight">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/65">
                          {item.desc}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      <div className="ml-auto hidden shrink-0 sm:block">
                        <div className="h-1.5 w-1.5 rounded-full bg-white/15 transition-all duration-300 group-hover:scale-150 group-hover:bg-brand-green" />
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-50 py-20 md:py-28">
        {/* Subtle background accents */}
        <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-brand-blue/[0.05] blur-[100px]" />
        <div className="absolute -bottom-40 left-0 h-72 w-72 rounded-full bg-brand-green/[0.05] blur-[100px]" />

        <div className="container-mw container-px relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
            {/* LEFT SIDE */}
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  Technology & operations
                </p>
              </div>

              <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                The discipline of process.{" "}
                <span className="text-brand-blue">The clarity of data.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-navy/65">
                We use practical technology and operational intelligence to make
                work more visible, more consistent, and more scalable — without
                losing the human touch.
              </p>

              {/* Capabilities */}
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {techCapabilities.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                        <WorkflowIcon className="h-4 w-4" />
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

                    {/* Small animated accent */}
                    <div className="mt-3 h-px w-0 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                ))}
              </div>
            </Reveal>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Outer frame */}
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

              {/* Image */}
              <div className="group relative overflow-hidden rounded-2xl shadow-float">
                <motion.img
                  src={images.analytics}
                  alt="Analytics dashboard"
                  whileHover={{
                    scale: 1.035,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative h-[420px] w-full object-cover md:h-[500px] lg:h-[560px]"
                />

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/25 via-transparent to-transparent" />
              </div>

              {/* Security card */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.35,
                }}
                whileHover={{
                  y: -5,
                }}
                className="absolute -bottom-5 -left-3 rounded-xl border border-surface-200 bg-white p-4 shadow-card md:-left-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                    <LockKeyhole className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-brand-green">
                      Protected operations
                    </p>

                    <p className="mt-1 text-xs font-bold text-brand-navy">
                      Security-minded by design
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Data indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="absolute -right-3 top-6 hidden rounded-xl border border-surface-200 bg-white/95 px-4 py-3 shadow-card backdrop-blur-md sm:block md:-right-5"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-30" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue" />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-brand-navy/50">
                    Operational intelligence
                  </span>
                </div>
              </motion.div>
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
                    ISO 9001
                  </p>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-green">
                  Quality Management
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-brand-navy/60">
                  Structured quality management practices that support
                  consistent service delivery and continuous improvement.
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
                    ISO 27001
                  </p>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
                  Information Security
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-brand-navy/60">
                  Structured information security management practices that
                  protect the information entrusted to us.
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
                    PLRB Affiliate
                  </p>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
                  Industry Affiliation
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-brand-navy/60">
                  Connected to the property and casualty insurance community
                  through affiliation with PLRB.
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
              Quality controlled · Security minded · Industry connected
            </p>

            <span className="h-px w-8 bg-brand-blue/40" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
