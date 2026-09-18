import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Our services"
        title="The operational capacity your claims team needs."
        description="Specialized insurance operations support across the claims lifecycle — designed to integrate with your workflows and scale with your business."
        image="support"
        cta="Talk to our team"
      />

      <section
        id="content"
        className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28"
      >
        {/* Background accents */}
        <div className="absolute inset-0 grid-bg opacity-[0.035]" />

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-brand-green/[0.07] blur-[110px]" />

        <div className="container-mw container-px relative">
          {/* Section intro */}
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_.7fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  Capabilities
                </p>
              </div>

              <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                One partner.{" "}
                <span className="text-brand-blueLight">
                  Every critical handoff.
                </span>
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-lg text-base leading-relaxed text-white/60">
                Choose the support you need today. Build the operational
                foundation you need tomorrow.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-30" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Explore each capability
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="h-full"
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.045] p-6 transition-all duration-500 hover:border-brand-blue/40 hover:bg-white/[0.075]"
                  >
                    {/* Animated top line */}
                    <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-500 group-hover:w-full" />

                    {/* Icon + arrow */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blueLight transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-green" />
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-lg font-bold text-white transition-colors duration-300 group-hover:text-brand-blueLight">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      {service.shortDesc}
                    </p>

                    {/* Explore */}
                    <div className="mt-auto pt-7">
                      <div className="flex items-center gap-3">
                        <span className="h-px w-6 bg-brand-blue transition-all duration-500 group-hover:w-10 group-hover:bg-brand-green" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35 transition-colors duration-300 group-hover:text-white/70">
                          Explore service
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-50 py-20 md:py-28">
        {/* Background accents */}
        <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-brand-blue/[0.04] blur-[100px]" />

        <div className="container-mw container-px relative">
          <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            {/* LEFT SIDE */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                    Designed for your operation
                  </p>
                </div>

                <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                  A flexible layer that fits{" "}
                  <span className="text-brand-blue">the way you work.</span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-navy/60">
                  OCP adapts to your processes instead of forcing your operation
                  into a predefined model. The result is support that feels like
                  an extension of your own team.
                </p>

                {/* Small supporting statement */}
                <div className="mt-8 flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-30" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-navy/40">
                    Built around your operation
                  </span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE — CAPABILITY GRID */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* 01 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.05,
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-surface-200 bg-white p-6 transition-all duration-300 hover:border-brand-blue/25 hover:shadow-card"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-brand-blue transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center justify-between"></div>

                <h3 className="mt-6 text-lg font-bold text-brand-navy">
                  Client-specific workflows
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">
                  Processes configured around your requirements, systems, and
                  operational standards.
                </p>
              </motion.div>

              {/* 02 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-surface-200 bg-white p-6 transition-all duration-300 hover:border-brand-green/30 hover:shadow-card"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-brand-green transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center justify-between"></div>

                <h3 className="mt-6 text-lg font-bold text-brand-navy">
                  Dedicated support teams
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">
                  Teams aligned to your business, workflows, expectations, and
                  service requirements.
                </p>
              </motion.div>

              {/* 03 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-surface-200 bg-white p-6 transition-all duration-300 hover:border-brand-green/30 hover:shadow-card"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-brand-green transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center justify-between"></div>

                <h3 className="mt-6 text-lg font-bold text-brand-navy">
                  Clear performance reporting
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">
                  Operational visibility that helps your team understand
                  performance, quality, and capacity.
                </p>
              </motion.div>

              {/* 04 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-surface-200 bg-white p-6 transition-all duration-300 hover:border-brand-blue/25 hover:shadow-card"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-brand-blue transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center justify-between"></div>

                <h3 className="mt-6 text-lg font-bold text-brand-navy">
                  Scalable capacity
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">
                  Flexible operational capacity designed to grow and adapt as
                  your business needs change.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
