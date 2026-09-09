import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/sections/ServiceCard";
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
        className="container-mw container-px py-20 md:py-28"
      >
        <SectionHeading
          eyebrow="Capabilities"
          title="One partner. Every critical handoff."
          subtitle="Choose the support you need today. Build the operational foundation you need tomorrow."
        />
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>
      <section className="bg-surface-50 py-20 md:py-28">
        <div className="container-mw container-px grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Designed for your operation
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-brand-navy">
              A flexible layer that fits the way you work.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Client-specific workflows",
              "Dedicated support teams",
              "Clear performance reporting",
              "Scalable capacity",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-t border-surface-300 pt-4 text-sm font-bold text-brand-navy"
              >
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                {item}
                <ArrowUpRight className="ml-auto h-4 w-4 text-brand-blue" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
