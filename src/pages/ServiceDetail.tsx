import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
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
      <section
        id="content"
        className="container-mw container-px py-20 md:py-28"
      >
        <div className="grid gap-14 lg:grid-cols-[1fr_.8fr]">
          <Reveal>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white">
              <Icon className="h-7 w-7" />
            </div>
            <h2 className="mt-7 text-3xl font-bold text-brand-navy">
              Operational support that moves work forward.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-navy/65">
              {service.overview}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-surface-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                Capabilities
              </p>
              <div className="mt-6 space-y-3">
                {service.capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex gap-3 text-sm text-brand-navy/75"
                  >
                    <Check className="h-4 w-4 shrink-0 text-brand-green" />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-surface-50 py-20 md:py-28">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="How it works"
            title="A process built for clarity."
          />
          <div className="mx-auto mt-14 max-w-4xl space-y-4">
            {service.workflow.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.05}>
                <div className="grid items-center gap-4 border-t border-surface-300 py-5 md:grid-cols-[80px_180px_1fr]">
                  <span className="text-3xl font-bold text-brand-blue/30">
                    0{i + 1}
                  </span>
                  <h3 className="font-bold text-brand-navy">{item.step}</h3>
                  <p className="text-sm leading-relaxed text-brand-navy/60">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="container-mw container-px py-20 md:py-28">
        <SectionHeading
          eyebrow="The OCP advantage"
          title="Outcomes your team can feel."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.05}>
              <div className="border-t border-brand-blue pt-5">
                <h3 className="font-bold text-brand-navy">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-navy/60">
                  {benefit.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-surface-50 py-20 md:py-28">
        <div className="container-mw container-px max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions, answered." />
          <div className="mt-12 divide-y divide-surface-300 border-y border-surface-300">
            {service.faqs.map((faq, i) => (
              <div key={faq.q}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-bold text-brand-navy"
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180 text-brand-blue" : "text-brand-navy/40"}`}
                  />
                </button>
                {open === i && (
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-brand-navy/60">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title={`Need more capacity in ${service.title.toLowerCase()}?`}
        description="Tell us what is slowing your operation down. We’ll show you a better way forward."
      />
    </div>
  );
}
