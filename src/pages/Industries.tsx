import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { industries } from "@/data/site";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

export default function Industries() {
  return (
    <div>
      <PageHero
        eyebrow="Industries"
        title="Built for the complexity of insurance."
        description="OCP brings specialized operations support to the organizations shaping the future of claims."
        image="partnership"
        cta="Explore a partnership"
      />
      <section
        id="content"
        className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28"
      >
        {/* Background details */}
        <div className="absolute inset-0 grid-bg opacity-[0.035]" />

        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />

        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-brand-green/[0.06] blur-[110px]" />

        <div className="container-mw container-px relative">
          {/* Heading */}
          <Reveal>
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_.7fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                    Where we help
                  </p>
                </div>

                <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Deep context.{" "}
                  <span className="text-brand-blueLight">
                    Practical support.
                  </span>
                </h2>
              </div>

              <p className="max-w-lg text-base leading-relaxed text-white/55 lg:pb-1">
                Every segment has different pressures. Our operations adapt to
                the realities of yours.
              </p>
            </div>
          </Reveal>

          {/* Industries */}
          <div className="mt-14 border-t border-white/10">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 0.05}>
                <Link
                  to="/contact"
                  className="group relative grid gap-6 border-b border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.025] md:grid-cols-[240px_1fr_180px] md:items-start md:px-4"
                >
                  {/* Animated bottom accent */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-500 group-hover:w-full" />

                  {/* Industry title */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blueLight">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand-blueLight">
                      {industry.title}
                    </h3>
                  </div>

                  {/* Description + points */}
                  <div>
                    <p className="max-w-xl text-sm leading-relaxed text-white/60">
                      {industry.desc}
                    </p>

                    <div className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {industry.points.map((point) => (
                        <span
                          key={point}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-white/50"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />

                          {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="md:flex md:justify-end">
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blueLight transition-colors duration-300 group-hover:text-brand-green">
                      Discuss your needs
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
