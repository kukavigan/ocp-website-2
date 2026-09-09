import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { industries } from "@/data/site";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
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
        className="container-mw container-px py-20 md:py-28"
      >
        <SectionHeading
          eyebrow="Where we help"
          title="Deep context. Practical support."
          subtitle="Every segment has different pressures. Our operations adapt to the realities of yours."
        />
        <div className="mt-14 space-y-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 0.05}>
              <Link
                to="/contact"
                className="group grid gap-6 border-t border-surface-300 py-7 md:grid-cols-[240px_1fr_180px] md:items-start"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-brand-navy">
                    {industry.title}
                  </h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-brand-navy/65">
                    {industry.desc}
                  </p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {industry.points.map((point) => (
                      <span
                        key={point}
                        className="flex gap-2 text-xs text-brand-navy/60"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-brand-green" />
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue md:justify-end">
                  Discuss your needs{" "}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </div>
  );
}
