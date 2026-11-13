import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ocpLogo from "@/assets/ocp-logo-2.png";
import { images } from "@/data/images";
import { leadership, values } from "@/data/site";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

const storyHighlights = [
  {
    title: "Pristina, Kosovo",
    subtitle: "Operations Hub",
  },
  {
    title: "Insurance Operations",
    subtitle: "Industry Focus",
  },
  {
    title: "Skilled Professionals",
    subtitle: "Operational Support",
  },
];

const workforceAdvantages = [
  "Highly educated professionals",
  "Strong English communication skills",
  "Young, ambitious talent",
  "Technology-enabled and adaptable",
  "Aligned with Western business practices",
];

const updatedValues: Record<string, string> = {
  Integrity:
    "We act with honesty, accountability, and transparency in everything we do.",
  "People First":
    "We invest in our people, fostering growth, well-being, and long-term success.",
  "Security Mindset":
    "We safeguard information through disciplined practices and a culture of responsibility.",
};

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function About() {
  return (
    <div>
      {/* ================================================================ */}
      {/* 01 — ABOUT OCP HERO                                              */}
      {/* ================================================================ */}

      <PageHero
        eyebrow="About OCP"
        title="The people behind better insurance operations."
        description="On Call Prime is an insurance operations partner built around one idea: the right people, supported by the right processes, can make complex work feel simple."
        image="meeting"
        cta="Start a conversation"
      />

      {/*OUR STORY*/}

      {/* ================================================================ */}
      {/* 02 — OUR STORY                                                   */}
      {/* ================================================================ */}

      <section
        id="content"
        className="relative overflow-hidden bg-[#F7F9FC] pt-20 pb-24 md:pt-28 md:pb-28"
      >
        {/* OCP watermark — fitted to the introduction area */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] overflow-hidden md:h-[650px]">
          {/* Original background */}
          <div className="absolute inset-0 bg-[#F7F9FC]" />

          {/* Centered OCP watermark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={ocpLogo}
              alt=""
              aria-hidden="true"
              className="h-auto w-[90%] max-w-[1150px] object-contain opacity-[0.065] md:w-[75%]"
              style={{
                maskImage:
                  "radial-gradient(ellipse at center, black 35%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 35%, transparent 80%)",
              }}
            />
          </div>

          {/* Soft fade toward the bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 45%, rgba(247,249,252,0.35) 75%, #F7F9FC 100%)",
            }}
          />
        </div>

        <div className="container-mw container-px relative">
          {/* Introduction */}
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  Our Story
                </p>

                <span className="h-px w-8 bg-brand-green" />
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                Built where ambition{" "}
                <span className="text-brand-blue">meets discipline.</span>
              </h2>

              <div className="mx-auto mt-8 max-w-3xl">
                <p className="leading-relaxed text-brand-navy/65">
                  OCP was founded to help insurance organizations operate with
                  more capacity, consistency, and care. From our operations in
                  Pristina, Kosovo, we support North American insurance
                  carriers, adjusting firms, TPAs, and claims organizations with
                  work that demands accuracy and judgment.
                </p>

                <p className="mt-5 leading-relaxed text-brand-navy/65">
                  OCP is a specialized operations partner that provides the
                  people, processes, and operational support insurance service
                  organizations need to improve performance, increase capacity,
                  and maintain quality at scale.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Animated highlights */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3">
            {storyHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-brand-navy/[0.07] bg-white px-6 py-7 text-center shadow-sm transition-shadow duration-300 hover:shadow-card"
              >
                <div
                  className={`mx-auto mb-5 h-1 w-9 rounded-full ${
                    index === 1 ? "bg-brand-blue" : "bg-brand-green"
                  }`}
                />

                <h3 className="text-base font-bold text-brand-navy">
                  {item.title}
                </h3>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-navy/40">
                  {item.subtitle}
                </p>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full-width Pristina image */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-16 w-full"
        >
          <div className="group relative h-[420px] overflow-hidden md:h-[540px] lg:h-[620px]">
            <motion.img
              src={images.pristina}
              alt="Pristina, Kosovo"
              whileHover={{ scale: 1.025 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/15 to-transparent" />

            <div className="container-mw container-px relative flex h-full items-end">
              <div className="flex w-full flex-col items-start justify-between gap-6 pb-10 md:flex-row md:items-end md:pb-14">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-green" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green">
                      Pristina, Kosovo
                    </span>
                  </div>

                  <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                    Central European
                    <br />
                    Operations Hub
                  </h3>
                </div>

                <a
                  href="https://askdata.rks-gov.net/pxweb/en/ASKdata/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button inline-flex shrink-0 items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-brand-navy"
                >
                  Explore Kosovo
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/*MISSION, VISION & VALUES*/}

      <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28">
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
                  Mission, Vision & Values
                </p>

                <span className="h-px w-8 bg-brand-green" />
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                How we <span className="text-brand-blueLight">show up.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
                The values that shape our culture, guide our decisions, and
                strengthen our partnerships.
              </p>
            </div>
          </Reveal>

          {/* Mission and Vision */}
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
              <div className="absolute left-0 top-0 h-1 w-0 bg-brand-green transition-all duration-500 group-hover:w-full" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/20">
                  01
                </span>
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
                Our Mission
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
              <div className="absolute left-0 top-0 h-1 w-0 bg-brand-blue transition-all duration-500 group-hover:w-full" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/20">
                  02
                </span>
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-brand-blueLight">
                Our Vision
              </p>

              <p className="mt-4 text-xl font-bold leading-snug text-white md:text-2xl">
                To be the trusted partner behind high-performing insurance
                operations.
              </p>

              <div className="mt-7 h-px w-12 bg-brand-blue/60 transition-all duration-500 group-hover:w-24" />
            </motion.div>
          </div>

          {/* Values */}
          <div className="mt-14">
            <div className="mb-7 flex items-center gap-4">
              <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                What Guides Our Work
              </p>

              <div className="h-px w-full bg-white/10" />
            </div>

            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 0.05}>
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
                        {updatedValues[value.title] ?? value.desc}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*WHY KOSOVO*/}

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-brand-blue/[0.04] blur-[100px]" />

        <div className="container-mw container-px relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            {/* Image */}
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
              <div className="absolute -bottom-5 -left-5 h-[82%] w-[82%] rounded-2xl bg-brand-navy md:-left-7" />

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

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green">
                      Training & Development
                    </span>
                  </div>

                  <p className="mt-2 text-lg font-bold text-white">
                    Investing in the people who power the work
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                    Why Kosovo
                  </p>
                </div>

                <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                  A workforce built for{" "}
                  <span className="text-brand-blue">modern operations.</span>
                </h2>

                <p className="mt-6 max-w-xl leading-relaxed text-brand-navy/65">
                  Kosovo provides access to a highly educated and motivated
                  talent pool, helping OCP build teams known for
                  professionalism, adaptability, and a commitment to excellence.
                </p>

                {/* Five requested advantages */}
                <div className="mt-8 space-y-4">
                  {workforceAdvantages.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/15">
                        <Check className="h-3.5 w-3.5 text-brand-green" />
                      </div>

                      <p className="text-sm font-medium text-brand-navy/80">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/*LEADERSHIP*/}

      <section className="relative overflow-hidden bg-surface-50 py-20 md:py-28">
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-brand-blue/[0.04] blur-[100px]" />

        <div className="absolute -right-40 top-0 h-72 w-72 rounded-full bg-brand-green/[0.04] blur-[100px]" />

        <div className="container-mw container-px relative">
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
                Experienced leaders.{" "}
                <span className="text-brand-blue">Shared vision.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-navy/55">
                Meet the leadership guiding OCP's growth through expertise,
                accountability, and partnership.
              </p>
            </div>
          </Reveal>

          {/* Leadership cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {leadership.map((person, index) => (
              <Reveal key={person.role} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group h-full"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-surface-200 bg-white transition-all duration-500 hover:border-brand-blue/20 hover:shadow-float">
                    <div className="relative overflow-hidden bg-surface-200">
                      <motion.img
                        src={
                          images[`portrait${index + 1}` as keyof typeof images]
                        }
                        alt={person.name}
                        whileHover={{ scale: 1.04 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="aspect-[4/4.4] w-full object-cover object-top"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

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

                    <div className="relative p-6">
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

      {/*COMPACT CTA*/}

      <section className="relative w-full overflow-hidden bg-brand-blue py-14 text-white md:py-16">
        <div className="absolute inset-0 grid-bg opacity-[0.06]" />

        <div className="absolute -right-32 -top-40 h-80 w-80 rounded-full bg-white/10 blur-[100px]" />

        <div className="container-mw container-px relative">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Start a Conversation
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                  Let's build stronger operations together.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80">
                  Discover how OCP can support your team with the people,
                  processes, and expertise your operation needs.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Talk to Our Team
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Three requested highlights */}
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6">
              {[
                "Operational Expertise",
                "Trusted Partnership",
                "Scalable Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-brand-green" />

                  <span className="text-xs font-semibold text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
