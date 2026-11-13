import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { services } from "@/data/services";
import PageHero from "@/components/sections/PageHero";

/* -------------------------------------------------------------------------- */
/* UPDATED SERVICE DESCRIPTIONS                                               */
/* -------------------------------------------------------------------------- */

const serviceDescriptions: Record<string, string> = {
  "Claims Operations":
    "Operational support across the claims lifecycle, delivering consistency, accuracy, and efficiency",

  "Claim Quality Assurance (QA)":
    "Objective claim reviews that identify risk, reduce leakage, and support continuous improvement",

  "FNOL Support":
    "Accurate, efficient FNOL intake handled with care, speed and accuracy.",

  "Adjuster Support":
    "Administrative coordination to help you manage adjuster availability and workloads more efficiently and effectively.",

  "Customer Care":
    "Customer care services designed to enhance the policyholder experience throughout the claim journey.",

  "Back Office Operations":
    "Reliable back-office services that keep insurance operations organized, accurate, and moving forward.",
};

/* -------------------------------------------------------------------------- */
/* SERVICES PAGE                                                              */
/* -------------------------------------------------------------------------- */

export default function Services() {
  return (
    <div>
      {/* ================================================================ */}
      {/* 01 — OUR SERVICES HERO                                           */}
      {/* ================================================================ */}

      <PageHero
        eyebrow="Our Services"
        title="The support behind high-performing insurance operations."
        description="Supporting insurance organizations with skilled talent, disciplined processes, and operational expertise that help teams scale with confidence."
        image="support"
      />

      {/* ================================================================ */}
      {/* 02 — CAPABILITIES                                                */}
      {/* ================================================================ */}

      <section
        id="content"
        className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28"
      >
        {/* Background accents */}
        <div className="absolute inset-0 grid-bg opacity-[0.035]" />

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-brand-green/[0.07] blur-[110px]" />

        <div className="container-mw container-px relative">
          {/* Capabilities section label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-brand-green" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
              Capabilities
            </p>
          </motion.div>

          {/* Six service tiles */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;

              const description =
                serviceDescriptions[service.title] ?? service.shortDesc;

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "-40px",
                  }}
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

                    {/* Icon and arrow */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blueLight transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-green" />
                    </div>

                    {/* Service title */}
                    <h3 className="mt-6 text-lg font-bold text-white transition-colors duration-300 group-hover:text-brand-blueLight">
                      {service.title}
                    </h3>

                    {/* Updated service description */}
                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      {description}
                    </p>

                    {/* Explore link */}
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

          {/* Talk to our team button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 flex justify-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand-navy hover:shadow-lg"
            >
              Talk to our team
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
