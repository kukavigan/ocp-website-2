import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { motion } from "motion/react";
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
        className="relative overflow-hidden bg-white py-20 md:py-28"
      >
        {/* Background accents */}
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-brand-blue/[0.035] blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-brand-green/[0.035] blur-[100px]" />

        <div className="container-mw container-px relative">
          {/* INTRO */}
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  Our story
                </p>

                <span className="h-px w-8 bg-brand-green" />
              </div>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                Built where ambition{" "}
                <span className="text-brand-blue">meets discipline.</span>
              </h2>

              <div className="mx-auto mt-7 max-w-3xl">
                <p className="leading-relaxed text-brand-navy/65">
                  OCP was founded to help insurance organizations operate with
                  more capacity, consistency, and care. From our operations in
                  Pristina, Kosovo, we support U.S. insurance carriers,
                  adjusting firms, TPAs, and claims organizations with work that
                  demands accuracy and judgment.
                </p>

                <p className="mt-4 leading-relaxed text-brand-navy/65">
                  We are not a volume-first call center. We are a specialized
                  operations team that understands the claims lifecycle and
                  takes pride in the details.
                </p>
              </div>
            </div>
          </Reveal>

          {/* FACTS */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 border-y border-surface-200 py-6 sm:grid-cols-3">
            <Reveal delay={0.08}>
              <div className="text-center">
                <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-brand-green" />

                <p className="text-base font-bold text-brand-navy">
                  Pristina, Kosovo
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-navy/40">
                  Operations hub
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="text-center">
                <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-brand-blue" />

                <p className="text-base font-bold text-brand-navy">
                  U.S. Insurance
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-navy/40">
                  Industry focus
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="text-center">
                <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-brand-green" />

                <p className="text-base font-bold text-brand-navy">
                  Specialized teams
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-navy/40">
                  Claims operations
                </p>
              </div>
            </Reveal>
          </div>

          {/* WIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-12"
          >
            {/* Navy offset */}
            <div className="absolute -bottom-5 left-8 right-8 h-24 rounded-2xl bg-brand-navy" />

            {/* Image */}
            <div className="group relative overflow-hidden rounded-2xl shadow-float">
              <motion.img
                src={images.pristina}
                alt="Pristina, Kosovo"
                whileHover={{ scale: 1.025 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-[360px] w-full object-cover md:h-[460px] lg:h-[520px]"
              />

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent" />

              {/* Bottom information */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-green" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green">
                    Pristina, Kosovo
                  </span>
                </div>

                <p className="mt-2 text-xl font-bold text-white md:text-2xl">
                  A global operations hub
                </p>
              </div>

              {/* Corner detail */}
              <div className="absolute right-6 top-6 hidden rounded-full border border-white/15 bg-brand-navy/40 px-4 py-2 backdrop-blur-md sm:block">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-30" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/70">
                    European operations
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28">
        {/* Background details */}
        <div className="absolute inset-0 grid-bg opacity-[0.035]" />

        <div className="absolute -right-40 -top-32 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-brand-green/[0.07] blur-[100px]" />

        <div className="container-mw container-px relative">
          {/* Heading */}
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  Mission, vision & values
                </p>

                <span className="h-px w-8 bg-brand-green" />
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                How we <span className="text-brand-blueLight">show up.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
                The principles behind how we work, how we grow, and how we
                support our partners.
              </p>
            </div>
          </Reveal>

          {/* Mission + Vision */}
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-7 md:p-8"
            >
              {/* Hover accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-brand-green transition-all duration-500 group-hover:w-full" />

              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/15">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
                </div>

                <span className="text-[10px] font-bold tracking-[0.2em] text-white/20">
                  01
                </span>
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
                Our mission
              </p>

              <p className="mt-4 text-xl font-bold leading-snug text-white md:text-2xl">
                To strengthen insurance operations through skilled people,
                disciplined processes, and meaningful partnership.
              </p>

              <div className="mt-7 h-px w-12 bg-brand-green/50 transition-all duration-500 group-hover:w-24" />
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-7 md:p-8"
            >
              {/* Hover accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-brand-blue transition-all duration-500 group-hover:w-full" />

              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/15">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
                </div>

                <span className="text-[10px] font-bold tracking-[0.2em] text-white/20">
                  02
                </span>
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-brand-blueLight">
                Our vision
              </p>

              <p className="mt-4 text-xl font-bold leading-snug text-white md:text-2xl">
                A claims experience where every interaction is accurate, timely,
                and human.
              </p>

              <div className="mt-7 h-px w-12 bg-brand-blue/60 transition-all duration-500 group-hover:w-24" />
            </motion.div>
          </div>

          {/* Values */}
          <div className="mt-14">
            <div className="mb-7 flex items-center gap-4">
              <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                What guides our work
              </p>

              <div className="h-px w-full bg-white/10" />
            </div>

            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="group flex h-full gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blueLight transition-all duration-300 group-hover:bg-brand-green/15 group-hover:text-brand-green">
                      <Check className="h-4 w-4" />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">{value.title}</h3>

                      <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                        {value.desc}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Background accents */}
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-brand-blue/[0.04] blur-[100px]" />

        <div className="container-mw container-px relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            {/* LEFT — IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Navy offset panel */}
              <div className="absolute -bottom-5 -left-5 h-[82%] w-[82%] rounded-2xl bg-brand-navy md:-left-7" />

              {/* Image */}
              <div className="group relative overflow-hidden rounded-2xl shadow-float">
                <motion.img
                  src={images.training}
                  alt="OCP training and development"
                  whileHover={{ scale: 1.035 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-[400px] w-full object-cover md:h-[480px] lg:h-[520px]"
                />

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green">
                      Training & development
                    </span>
                  </div>

                  <p className="mt-2 text-lg font-bold text-white">
                    Investing in the people who power the work
                  </p>
                </div>
              </div>

              {/* Floating detail */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                }}
                className="absolute -right-3 top-7 hidden rounded-xl border border-surface-200 bg-white px-4 py-3 shadow-card md:block"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-30" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-brand-navy/50">
                    Growing talent
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT — CONTENT */}
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  Why Kosovo
                </p>
              </div>

              <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                Talent with a{" "}
                <span className="text-brand-blue">global perspective.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-relaxed text-brand-navy/65">
                Pristina gives OCP access to a highly educated, multilingual,
                and motivated workforce. Our team brings cultural fluency,
                strong communication skills, and a genuine commitment to
                professional growth.
              </p>

              {/* Location panel */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.15,
                }}
                className="group mt-8 overflow-hidden rounded-2xl border border-surface-200 bg-surface-50 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-card"
              >
                <div className="flex items-start gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                      Pristina, Kosovo
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
                      A growing European operations hub with strong connections
                      to U.S. business hours.
                    </p>
                  </div>
                </div>

                <div className="h-px w-0 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-500 group-hover:w-full" />
              </motion.div>

              {/* Small supporting points */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="border-t border-surface-300 pt-4"
                >
                  <p className="text-sm font-bold text-brand-navy">
                    Multilingual
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-navy/40">
                    Communication
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.28 }}
                  className="border-t border-brand-green/50 pt-4"
                >
                  <p className="text-sm font-bold text-brand-navy">
                    Globally minded
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-navy/40">
                    Professional teams
                  </p>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-50 py-20 md:py-28">
        {/* Background accents */}
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-brand-blue/[0.04] blur-[100px]" />
        <div className="absolute -right-40 top-0 h-72 w-72 rounded-full bg-brand-green/[0.04] blur-[100px]" />

        <div className="container-mw container-px relative">
          {/* Heading */}
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  Leadership
                </p>

                <span className="h-px w-8 bg-brand-green" />
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                Experienced people.{" "}
                <span className="text-brand-blue">Clear direction.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-navy/55">
                Meet the leadership team guiding OCP forward.
              </p>
            </div>
          </Reveal>

          {/* Leadership cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {leadership.map((person, i) => (
              <Reveal key={person.role} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group h-full"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-surface-200 bg-white transition-all duration-500 hover:border-brand-blue/20 hover:shadow-float">
                    {/* Portrait */}
                    <div className="relative overflow-hidden bg-surface-200">
                      <motion.img
                        src={images[`portrait${i + 1}` as keyof typeof images]}
                        alt={person.name}
                        whileHover={{ scale: 1.04 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="aspect-[4/4.4] w-full object-cover object-top"
                      />

                      {/* Image overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                      {/* Role on image */}
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />

                          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                            OCP Leadership
                          </span>
                        </div>

                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-blueLight">
                          {person.role}
                        </p>
                      </div>
                    </div>

                    {/* Person details */}
                    <div className="relative p-6">
                      {/* Hover accent */}
                      <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-500 group-hover:w-full" />

                      <h3 className="text-xl font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
                        {person.name}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-brand-navy/60">
                        {person.bio}
                      </p>

                      <div className="mt-6 flex items-center gap-3">
                        <span className="h-px w-6 bg-brand-green transition-all duration-500 group-hover:w-10" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-brand-navy/35">
                          On Call Prime
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
