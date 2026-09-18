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
        className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28"
      >
        {/* Background */}
        <div className="absolute inset-0 grid-bg opacity-[0.035]" />

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-brand-green/[0.06] blur-[110px]" />

        <div className="container-mw container-px relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr] lg:gap-20">
            {/* CONTENT */}
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  Working at OCP
                </p>
              </div>

              <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Bring your best thinking.{" "}
                <span className="text-brand-blueLight">
                  We’ll help it grow.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-relaxed text-white/60">
                Our work is demanding, collaborative, and meaningful. We invest
                in the training, tools, and relationships that help people build
                lasting careers in insurance operations.
              </p>

              {/* Supporting points */}
              <div className="mt-9 grid grid-cols-2 gap-6">
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white">Keep learning</p>

                  <p className="mt-1 text-xs leading-relaxed text-white/40">
                    Develop skills through real operational experience.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white">Grow together</p>

                  <p className="mt-1 text-xs leading-relaxed text-white/40">
                    Work alongside people who care about doing things well.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-30" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                  Build your career at OCP
                </span>
              </div>
            </Reveal>

            {/* IMAGES */}
            <div className="relative grid grid-cols-2 gap-4">
              <Reveal delay={0.08}>
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={images.team}
                    alt="OCP team"
                    className="h-[390px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] md:h-[470px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-brand-green">
                      Team
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Grow together
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="group relative mt-10 overflow-hidden rounded-2xl">
                  <img
                    src={images.training}
                    alt="OCP training session"
                    className="h-[390px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] md:h-[470px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-brand-blueLight">
                      Development
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Keep learning
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-50 py-20 md:py-28">
        <div className="container-mw container-px relative">
          <Reveal>
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_.7fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                    Life at OCP
                  </p>
                </div>

                <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                  A culture built on{" "}
                  <span className="text-brand-blue">progress.</span>
                </h2>
              </div>

              <p className="max-w-lg text-base leading-relaxed text-brand-navy/55 lg:pb-1">
                Great work comes from an environment where people can
                collaborate, learn, celebrate progress, and build something
                together.
              </p>
            </div>
          </Reveal>

          {/* Gallery */}
          <div className="mt-12 grid gap-4 md:grid-cols-[1.6fr_.8fr]">
            <Reveal>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src={images.meeting}
                  alt="OCP team collaboration"
                  className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] md:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-green">
                      Collaboration
                    </span>
                  </div>

                  <p className="mt-2 text-xl font-bold text-white">
                    Better work happens together.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src={images.celebration}
                  alt="OCP company event"
                  className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] md:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blueLight" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-blueLight">
                      Culture
                    </span>
                  </div>

                  <p className="mt-2 text-lg font-bold text-white">
                    Celebrate progress.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="open-positions"
        className="relative overflow-hidden bg-white py-20 md:py-28"
      >
        {/* Background accents */}
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-brand-blue/[0.035] blur-[100px]" />

        <div className="container-mw container-px relative">
          {/* Heading */}
          <Reveal>
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_.7fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                    Open positions
                  </p>
                </div>

                <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                  Find your place{" "}
                  <span className="text-brand-blue">on the team.</span>
                </h2>
              </div>

              <p className="max-w-lg text-base leading-relaxed text-brand-navy/55 lg:pb-1">
                We’re always looking for thoughtful, motivated people to join us
                in Pristina.
              </p>
            </div>
          </Reveal>

          {/* Column labels — desktop */}
          <div className="mt-14 hidden grid-cols-[1fr_160px_160px_40px] border-b border-surface-300 pb-4 md:grid">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-navy/30">
              Position
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-navy/30">
              Location
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-navy/30">
              Type
            </span>

            <span />
          </div>

          {/* Positions */}
          <div className="border-b border-surface-300">
            {openPositions.map((position, i) => (
              <Reveal key={position.title} delay={i * 0.04}>
                <a
                  href={`mailto:careers@oncallprime.com?subject=${encodeURIComponent(
                    position.title,
                  )}`}
                  className="group relative grid gap-4 border-t border-surface-200 py-7 transition-all duration-300 first:border-t-0 md:grid-cols-[1fr_160px_160px_40px] md:items-center"
                >
                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-500 group-hover:w-full" />

                  {/* Position */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                      <h3 className="text-lg font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
                        {position.title}
                      </h3>
                    </div>

                    <p className="mt-1.5 pl-[18px] text-xs text-brand-navy/45">
                      {position.dept}
                    </p>
                  </div>

                  {/* Location */}
                  <span className="flex items-center gap-2 text-xs text-brand-navy/60">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-blue" />

                    {position.location}
                  </span>

                  {/* Employment type */}
                  <span className="flex items-center gap-2 text-xs text-brand-navy/60">
                    <BriefcaseBusiness className="h-3.5 w-3.5 shrink-0 text-brand-green" />

                    {position.type}
                  </span>

                  {/* Apply arrow */}
                  <div className="flex justify-start md:justify-end">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-200 text-brand-navy/30 transition-all duration-300 group-hover:border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Application hint */}
          <Reveal delay={0.1}>
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-green" />

              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-navy/35">
                Select a position to apply by email
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Don’t see the right role?"
        description="We’re always open to meeting people who care about doing great work. Send us a note."
      />
    </div>
  );
}
