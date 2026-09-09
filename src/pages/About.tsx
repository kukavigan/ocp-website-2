import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { images } from "@/data/images";
import { leadership, values } from "@/data/site";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImageCard from "@/components/ui/ImageCard";
import CTASection from "@/components/sections/CTASection";

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About OCP"
        title="The people behind better insurance operations."
        description="On Call Prime is an insurance operations partner built around one idea: the right people, supported by the right processes, can make complex work feel simple."
        image="meeting"
        cta="Start a conversation"
      />
      <section
        id="content"
        className="container-mw container-px py-20 md:py-28"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Our story
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-brand-navy md:text-5xl">
              Built where ambition meets discipline.
            </h2>
            <p className="mt-6 leading-relaxed text-brand-navy/65">
              OCP was founded to help insurance organizations operate with more
              capacity, consistency, and care. From our operations in Pristina,
              Kosovo, we support U.S. insurance carriers, adjusting firms, TPAs,
              and claims organizations with work that demands accuracy and
              judgment.
            </p>
            <p className="mt-4 leading-relaxed text-brand-navy/65">
              We are not a volume-first call center. We are a specialized
              operations team that understands the claims lifecycle and takes
              pride in the details.
            </p>
          </Reveal>
          <ImageCard
            image="pristina"
            label="Pristina, Kosovo"
            caption="A global operations hub"
            aspect="tall"
            overlay="navy"
          />
        </div>
      </section>
      <section className="bg-surface-50 py-20 md:py-28">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="Mission, vision, values"
            title="How we show up."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="bg-brand-navy p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-blueLight">
                Our mission
              </p>
              <p className="mt-5 text-2xl font-bold leading-snug">
                To strengthen insurance operations through skilled people,
                disciplined processes, and meaningful partnership.
              </p>
            </div>
            <div className="bg-white p-8 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Our vision
              </p>
              <p className="mt-5 text-2xl font-bold leading-snug text-brand-navy">
                A claims experience where every interaction is accurate, timely,
                and human.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.05}>
                <div className="border-t border-surface-300 pt-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Check className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 font-bold text-brand-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy/60">
                    {value.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="container-mw container-px py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <ImageCard
            image="training"
            label="Training & development"
            caption="Investing in the people who power the work"
            aspect="video"
            overlay="navy"
          />
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Why Kosovo
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-brand-navy">
              Talent with a global perspective.
            </h2>
            <p className="mt-6 leading-relaxed text-brand-navy/65">
              Pristina gives OCP access to a highly educated, multilingual, and
              motivated workforce. Our team brings cultural fluency, strong
              communication skills, and a genuine commitment to professional
              growth.
            </p>
            <div className="mt-7 flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-brand-blue" />
              <p className="text-sm leading-relaxed text-brand-navy/65">
                A growing European operations hub with strong connections to
                U.S. business hours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-surface-50 py-20 md:py-28">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="Leadership"
            title="Experienced people. Clear direction."
            subtitle="Meet the leadership team guiding OCP forward."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {leadership.map((person, i) => (
              <Reveal key={person.role} delay={i * 0.08}>
                <div>
                  <div className="overflow-hidden rounded-2xl bg-surface-200">
                    <img
                      src={images[`portrait${i + 1}` as keyof typeof images]}
                      alt={person.role}
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-brand-blue">
                    {person.role}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-brand-navy">
                    {person.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-navy/60">
                    {person.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
