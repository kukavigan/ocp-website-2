import { Check, LockKeyhole, ArrowUpRight } from "lucide-react";
import { images } from "@/data/images";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import ocpLogo from "@/assets/ocp-logo.png";

export default function Certifications() {
  return (
    <div>
      <PageHero
        eyebrow="Certifications"
        title="Trust is built into the process."
        description="OCP’s quality and information security practices are grounded in internationally recognized management systems."
        image="agent"
        cta="Talk about our standards"
      />
      <section
        id="content"
        className="container-mw container-px py-20 md:py-28"
      >
        <div className="space-y-20">
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div className="flex aspect-square max-w-sm items-center justify-center overflow-hidden rounded-3xl bg-white p-6 shadow-soft">
                <img
                  src={images.iso9001}
                  alt="ISO 9001 Quality Management Certification"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  01 / Quality Management
                </p>
                <h2 className="mt-5 text-4xl font-bold text-brand-navy">
                  Consistency you can measure.
                </h2>
                <p className="mt-6 leading-relaxed text-brand-navy/65">
                  Our ISO 9001 quality management practices support consistent
                  service delivery, structured process control, and continuous
                  improvement across OCP operations.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    "Documented operational processes",
                    "Structured quality assurance",
                    "Continuous improvement loops",
                    "Client-focused performance review",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 text-sm font-semibold text-brand-navy/75"
                    >
                      <Check className="h-4 w-4 text-brand-green" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
              <div className="order-2 lg:order-1">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  02 / Information Security
                </p>
                <h2 className="mt-5 text-4xl font-bold text-brand-navy">
                  Information protected by design.
                </h2>
                <p className="mt-6 leading-relaxed text-brand-navy/65">
                  Our ISO 27001 information security management practices
                  provide a structured framework for protecting the information
                  entrusted to OCP — across people, processes, and technology.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    "Structured information security management",
                    "Risk-aware operational practices",
                    "Access and information controls",
                    "Security-minded team training",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 text-sm font-semibold text-brand-navy/75"
                    >
                      <Check className="h-4 w-4 text-brand-blue" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 overflow-hidden rounded-3xl lg:order-2">
                <img
                  src={images.security}
                  alt="Information security"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-surface-50 py-20 md:py-28">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="Operational trust"
            title="A standard for every interaction."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {["People", "Process", "Technology"].map((item, i) => (
              <div
                key={item}
                className="border-t border-brand-blue pt-5 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-soft">
                  <span className="font-bold">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-bold text-brand-navy">{item}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/60">
                  Every layer contributes to a more dependable operation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
