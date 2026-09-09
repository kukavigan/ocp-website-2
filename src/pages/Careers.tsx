import { ArrowUpRight, MapPin, BriefcaseBusiness } from "lucide-react";
import { images } from "@/data/images";
import { openPositions } from "@/data/site";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

export default function Careers() {
  return (
    <div>
      <PageHero
        eyebrow="Careers"
        title="Do work that makes a difference."
        description="Join a team that is helping insurance organizations work better — and building a culture worth showing up for."
        image="celebration"
        cta="See open roles"
        ctaTo="#open-positions"
      />
      <section
        id="content"
        className="container-mw container-px py-20 md:py-28"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Working at OCP
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-brand-navy md:text-5xl">
              Bring your best thinking. We’ll help it grow.
            </h2>
            <p className="mt-6 leading-relaxed text-brand-navy/65">
              Our work is demanding, collaborative, and meaningful. We invest in
              the training, tools, and relationships that help people build
              lasting careers in insurance operations.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={images.team}
              alt="OCP team"
              className="aspect-[3/4] rounded-2xl object-cover"
            />
            <img
              src={images.training}
              alt="Training session"
              className="mt-10 aspect-[3/4] rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-surface-50 py-20 md:py-28">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="Life at OCP"
            title="A culture built on progress."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <img
                src={images.meeting}
                alt="Team collaboration"
                className="h-full min-h-[280px] w-full rounded-2xl object-cover"
              />
            </div>
            <img
              src={images.celebration}
              alt="Company event"
              className="min-h-[280px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
      <section
        id="open-positions"
        className="container-mw container-px py-20 md:py-28"
      >
        <SectionHeading
          eyebrow="Open positions"
          title="Find your place on the team."
          subtitle="We’re always looking for thoughtful, motivated people to join us in Pristina."
        />
        <div className="mx-auto mt-14 max-w-4xl divide-y divide-surface-300 border-y border-surface-300">
          {openPositions.map((position, i) => (
            <Reveal key={position.title} delay={i * 0.04}>
              <a
                href={`mailto:careers@oncallprime.com?subject=${encodeURIComponent(position.title)}`}
                className="group grid gap-3 py-6 md:grid-cols-[1fr_150px_150px_auto] md:items-center"
              >
                <div>
                  <h3 className="font-bold text-brand-navy">
                    {position.title}
                  </h3>
                  <p className="mt-1 text-xs text-brand-navy/55">
                    {position.dept}
                  </p>
                </div>
                <span className="flex items-center gap-2 text-xs text-brand-navy/60">
                  <MapPin className="h-3.5 w-3.5 text-brand-blue" />
                  {position.location}
                </span>
                <span className="flex items-center gap-2 text-xs text-brand-navy/60">
                  <BriefcaseBusiness className="h-3.5 w-3.5 text-brand-blue" />
                  {position.type}
                </span>
                <ArrowUpRight className="h-5 w-5 text-brand-navy/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-blue" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection
        title="Don’t see the right role?"
        description="We’re always open to meeting people who care about doing great work. Send us a note."
      />
    </div>
  );
}
