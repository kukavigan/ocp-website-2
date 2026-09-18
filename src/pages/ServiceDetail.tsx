import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import { images } from "@/data/images";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug) || services[0];
  const Icon = service.icon;
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.shortDesc}
        image={
          service.slug.includes("customer") || service.slug.includes("fnol")
            ? "agent"
            : service.slug.includes("qa")
              ? "analytics"
              : "documents"
        }
        cta="Discuss your needs"
      />

      <section id="content" className="bg-brand-navy py-20 text-white md:py-28">
        <div className="container-mw container-px">
          <div className="grid gap-14 lg:grid-cols-[1fr_.8fr]">
            <Reveal>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white">
                <Icon className="h-7 w-7" />
              </div>

              <h2 className="mt-7 text-3xl font-bold text-white">
                Operational support that moves work forward.
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-white/65">
                {service.overview}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-white/10 bg-white/[0.05] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blueLight">
                  Capabilities
                </p>

                <div className="mt-6 space-y-3">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex gap-3 text-sm text-white/75">
                      <Check className="h-4 w-4 shrink-0 text-brand-green" />

                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-50 py-20 md:py-28">
        {/* Background accent */}
        <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-brand-blue/[0.04] blur-[100px]" />

        <div className="container-mw container-px relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  How it works
                </p>

                <span className="h-px w-8 bg-brand-green" />
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                A process built for{" "}
                <span className="text-brand-blue">clarity.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-navy/55">
                A structured approach designed to keep work moving,
                responsibilities clear, and outcomes consistent.
              </p>
            </div>
          </Reveal>

          {/* Process */}
          <div className="mx-auto mt-14 max-w-5xl">
            {service.workflow.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.06}>
                <div className="group relative grid gap-4 border-t border-surface-300 py-7 transition-colors duration-300 hover:border-brand-blue/40 md:grid-cols-[100px_220px_1fr] md:items-center">
                  {/* Step number */}
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-brand-blue/25 transition-colors duration-300 group-hover:text-brand-blue">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`h-2 w-2 rounded-full ${
                        i % 2 === 0 ? "bg-brand-green" : "bg-brand-blue"
                      }`}
                    />
                  </div>

                  {/* Step title */}
                  <h3 className="text-base font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
                    {item.step}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-brand-navy/60">
                    {item.desc}
                  </p>

                  {/* Hover line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}

            <div className="border-t border-surface-300" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Background accents */}
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-brand-green/[0.035] blur-[100px]" />

        <div className="container-mw container-px relative">
          {/* Heading */}
          <Reveal>
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_.7fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                    The OCP advantage
                  </p>
                </div>

                <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                  Outcomes your team{" "}
                  <span className="text-brand-blue">can feel.</span>
                </h2>
              </div>

              <p className="max-w-lg text-base leading-relaxed text-brand-navy/55 lg:pb-1">
                Operational support should create a measurable difference in the
                way your team works — not simply add more people to the process.
              </p>
            </div>
          </Reveal>

          {/* Benefits */}
          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 0.06}>
                <div className="group relative h-full border-t border-surface-300 pt-6">
                  {/* Animated top line */}
                  <div
                    className={`absolute left-0 top-0 h-[2px] w-8 transition-all duration-500 group-hover:w-full ${
                      i % 2 === 0 ? "bg-brand-blue" : "bg-brand-green"
                    }`}
                  />

                  {/* Number */}
                  <span className="text-4xl font-bold tracking-tight text-brand-navy/[0.08] transition-colors duration-300 group-hover:text-brand-blue/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Benefit */}
                  <h3 className="mt-5 text-lg font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-navy/55">
                    {benefit.desc}
                  </p>

                  {/* Bottom detail */}
                  <div className="mt-6 flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        i % 2 === 0 ? "bg-brand-blue" : "bg-brand-green"
                      }`}
                    />

                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-brand-navy/30">
                      OCP Operations
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28">
        {/* Subtle background */}
        <div className="absolute inset-0 grid-bg opacity-[0.035]" />

        {/* Background glows */}
        <div className="absolute -right-40 -top-20 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-brand-green/[0.06] blur-[110px]" />

        <div className="container-mw container-px relative">
          {/* Heading */}
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  FAQ
                </p>

                <span className="h-px w-8 bg-brand-green" />
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Questions,{" "}
                <span className="text-brand-blueLight">answered.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50">
                A few common questions about how OCP supports insurance
                operations.
              </p>
            </div>
          </Reveal>

          {/* FAQ accordion */}
          <div className="mx-auto mt-12 max-w-3xl border-t border-white/10">
            {service.faqs.map((faq, i) => {
              const isOpen = open === i;

              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.04,
                  }}
                  className="border-b border-white/10"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      {/* Small accent */}
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
                          isOpen ? "bg-brand-green" : "bg-brand-blue"
                        }`}
                      />

                      <span
                        className={`font-bold transition-colors duration-300 ${
                          isOpen
                            ? "text-brand-blueLight"
                            : "text-white group-hover:text-brand-blueLight"
                        }`}
                      >
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-brand-green/30 bg-brand-green/10"
                          : "border-white/10 bg-white/[0.03] group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10"
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 text-brand-green"
                            : "text-white/40 group-hover:text-brand-blueLight"
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.25,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-5 pr-14 text-sm leading-relaxed text-white/55">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom detail */}
          <Reveal delay={0.15}>
            <div className="mx-auto mt-9 flex max-w-3xl items-center justify-center gap-3">
              <span className="h-px w-8 bg-white/10" />

              <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/25">
                Have another question?
              </span>

              <span className="h-px w-8 bg-white/10" />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={`Need more capacity in ${service.title.toLowerCase()}?`}
        description="Tell us what is slowing your operation down. We’ll show you a better way forward."
      />
    </div>
  );
}
