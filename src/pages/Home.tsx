import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  LockKeyhole,
  BarChart3,
  Workflow as WorkflowIcon,
} from "lucide-react";
import { motion } from "framer-motion";
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

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-surface-50 pt-32 md:pt-40">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="container-mw container-px relative grid items-center gap-10 pb-20 lg:grid-cols-[1.1fr_.9fr] lg:pb-28">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                Insurance operations, reimagined
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-brand-navy md:text-7xl"
            >
              Scaling insurance operations{" "}
              <span className="text-gradient-blue">with precision.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-brand-navy/70"
            >
              OCP helps insurance organizations strengthen claims operations,
              customer care, quality assurance, and back-office processes — with
              the people and discipline to perform at scale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button to="/contact" size="lg">
                Let's talk <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button to="/services" variant="outline" size="lg">
                Explore services <ArrowDownRight className="h-4 w-4" />
              </Button>
            </motion.div>
            <div className="mt-10 flex items-center gap-6 text-xs font-semibold text-brand-navy/55">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-green" /> ISO
                9001 quality
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-blue" /> ISO
                27001 security
              </span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2rem] border border-brand-blue/10" />
            <div className="relative overflow-hidden rounded-[1.5rem] shadow-float">
              <img
                src={images.team}
                alt="OCP team collaborating in an operations environment"
                className="aspect-[4/5] w-full object-cover md:aspect-[4/3] lg:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blueLight">
                  The OCP difference
                </p>
                <p className="mt-2 max-w-xs text-xl font-bold leading-snug text-white">
                  Operational rigor. Human connection. Better outcomes.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-surface-200 bg-white p-4 shadow-card sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green">
                  <BarChart3 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-navy/50">
                    Operations status
                  </p>
                  <p className="text-sm font-bold text-brand-navy">
                    Built to scale
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="border-y border-surface-200 bg-white">
        <div className="container-mw container-px grid grid-cols-2 divide-x divide-surface-200 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 0.06}
              className="px-4 py-8 text-center first:pl-0 last:pr-0 md:py-10"
            >
              <p className="text-3xl font-bold text-brand-navy md:text-4xl">
                {metric.value}
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
      <section className="bg-surface-50 py-20 md:py-28">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="The claims journey"
            title="A better-connected workflow."
            subtitle="Every handoff matters. OCP creates continuity across the entire claims lifecycle."
          />
          <div className="mt-14">
            <Workflow />
          </div>
        </div>
      </section>
      <section className="container-mw container-px py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Real operations. Real people.
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
              Built around the work that matters.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-brand-navy/65">
              Insurance is personal. Our operations are too. OCP combines
              skilled people, disciplined processes, and practical technology to
              create a support experience your policyholders and adjusters can
              feel.
            </p>
            <Button to="/about" variant="outline" className="mt-8">
              Meet OCP <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <ImageCard
              image="support"
              label="Claims Operations Center"
              caption="Where precision meets empathy"
              aspect="tall"
              overlay="navy"
            />
            <div className="space-y-4 pt-8">
              <ImageCard
                image="agent"
                label="FNOL Support Team"
                aspect="video"
                overlay="navy"
              />
              <ImageCard
                image="analytics"
                label="Analytics & Reporting"
                aspect="video"
                overlay="navy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-navy py-20 text-white md:py-28">
        <div className="container-mw container-px">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blueLight">
                Why OCP
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                More than support.
                <br />
                <span className="text-brand-blueLight">
                  A true operations partner.
                </span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-white/65">
                We bring the capability, care, and operational maturity
                insurance organizations need to move forward with confidence.
              </p>
            </Reveal>
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {whyOcp.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="flex gap-4 border-t border-white/15 pt-5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blueLight">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface-50 py-20 md:py-28">
        <div className="container-mw container-px">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                Technology & operations
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                The discipline of process. The clarity of data.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-navy/65">
                We use practical technology and operational intelligence to make
                work more visible, more consistent, and more scalable — without
                losing the human touch.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {techCapabilities.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <WorkflowIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                    <div>
                      <h3 className="text-sm font-bold text-brand-navy">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-brand-navy/55">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border border-brand-blue/10" />
              <img
                src={images.analytics}
                alt="Analytics dashboard"
                className="relative rounded-2xl shadow-float"
              />
              <div className="absolute -bottom-5 -left-5 rounded-xl border border-surface-200 bg-white p-4 shadow-card">
                <LockKeyhole className="h-5 w-5 text-brand-green" />
                <p className="mt-2 text-xs font-bold text-brand-navy">
                  Security-minded
                  <br />
                  by design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-mw container-px py-20 md:py-28">
        <SectionHeading
          eyebrow="Built on trust"
          title="Quality and security are not extras."
          subtitle="They are the foundation of how we operate."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-5 md:grid-cols-2">
          <Link
            to="/certifications"
            className="group border border-surface-300 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-card"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
                <Check className="h-6 w-6" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-brand-navy/30 transition group-hover:text-brand-blue" />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-brand-green">
              ISO 9001
            </p>
            <h3 className="mt-2 text-2xl font-bold text-brand-navy">
              Quality Management
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/60">
              Structured quality management practices that support consistent
              service delivery and continuous improvement.
            </p>
          </Link>
          <Link
            to="/certifications"
            className="group border border-surface-300 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-card"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <LockKeyhole className="h-6 w-6" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-brand-navy/30 transition group-hover:text-brand-blue" />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-brand-blue">
              ISO 27001
            </p>
            <h3 className="mt-2 text-2xl font-bold text-brand-navy">
              Information Security
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/60">
              Structured information security management practices that protect
              the information entrusted to us.
            </p>
          </Link>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
