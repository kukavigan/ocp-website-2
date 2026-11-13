import { Check, LockKeyhole, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "@/data/images";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import plrbLogo from "@/assets/plrb_logo_2023-1.png";

export default function Certifications() {
  return (
    <div>
      <PageHero
        eyebrow="Certifications"
        title="Trust is built into the process."
        description="OCP’s commitment to quality and information security is supported by internationally recognized management systems."
        image="agent"
        cta="Learn More"
      />
      <section
        id="content"
        className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28"
      >
        {/* Background details */}
        <div className="absolute inset-0 grid-bg opacity-[0.035]" />

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-brand-green/[0.06] blur-[110px]" />

        <div className="container-mw container-px relative">
          <Reveal>
            <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
              {/* ISO LOGO */}
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-brand-green/20" />

                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-white p-8 shadow-float">
                  <img
                    src={images.iso9001}
                    alt="ISO 9001 Quality Management Certification"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                    01 / Quality Management
                  </p>
                </div>

                <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Consistency you{" "}
                  <span className="text-brand-blueLight">can measure.</span>
                </h2>

                <p className="mt-6 max-w-xl leading-relaxed text-white/60">
                  Our ISO 9001 quality management practices support consistent
                  service delivery, structured process control, and continuous
                  improvement across OCP operations.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Documented operational processes",
                    "Structured quality assurance",
                    "Continuous improvement loops",
                    "Client-focused performance review",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border-t border-white/10 pt-4 text-sm font-semibold text-white/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* ISO 9001 certificate verification */}
                <div className="mt-9 rounded-2xl border border-white/15 bg-white/[0.05] p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green">
                    Certificate verification
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    ISO 9001
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    Open the TÜV NORD certificate database and enter certificate
                    number 4410023320247 to look up the certificate.
                  </p>
                  <a
                    href="https://www.tuev-nord.de/en/certificate-database/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blueLight transition-colors hover:text-white"
                  >
                    Verify ISO 9001 certificate
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-brand-blue/[0.04] blur-[100px]" />

        <div className="container-mw container-px relative">
          <Reveal>
            <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
              {/* CONTENT */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-brand-blue" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                    02 / Information Security
                  </p>
                </div>

                <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                  Information protected{" "}
                  <span className="text-brand-blue">by design.</span>
                </h2>

                <p className="mt-6 max-w-xl leading-relaxed text-brand-navy/65">
                  Our ISO 27001 information security management practices
                  provide a structured framework for protecting the information
                  entrusted to OCP — across people, processes, and technology.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Structured information security management",
                    "Risk-aware operational practices",
                    "Access and information controls",
                    "Security-minded team training",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border-t border-surface-300 pt-4 text-sm font-semibold text-brand-navy/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* ISO 27001 certificate verification */}
                <div className="mt-9 rounded-2xl border border-surface-200 bg-surface-50 p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                    Certificate verification
                  </p>
                  <p className="mt-2 text-sm font-semibold text-brand-navy">
                    ISO/IEC 27001
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy/60">
                    View OCP's certificate listing on Certipedia and check
                    certificate number 011532230581.
                  </p>
                  <a
                    href="https://www.certipedia.com/companies/668738/system_certificates?locale=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-navy"
                  >
                    View ISO 27001 certificate listing
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative">
                <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-brand-navy" />

                <div className="relative overflow-hidden rounded-3xl shadow-float">
                  <img
                    src={images.security}
                    alt="Information security"
                    className="aspect-square w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-2">
                      <LockKeyhole className="h-4 w-4 text-brand-green" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green">
                        Security minded
                      </span>
                    </div>

                    <p className="mt-2 text-lg font-bold text-white">
                      Protection at every layer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28">
        {/* Background details */}
        <div className="absolute inset-0 grid-bg opacity-[0.035]" />

        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-brand-green/[0.06] blur-[110px]" />
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />

        <div className="container-mw container-px relative">
          <Reveal>
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
              {/* CONTENT */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                    03 / Industry Affiliation
                  </p>
                </div>

                <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Connected to the{" "}
                  <span className="text-brand-blueLight">
                    insurance community.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl leading-relaxed text-white/60">
                  As a PLRB Affiliate, OCP is connected to a professional
                  community focused on property and liability claims, industry
                  knowledge, and the evolving needs of insurance organizations.
                </p>

                {/* Supporting points */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Claims-focused industry connection",
                    "Professional community engagement",
                    "Continued industry awareness",
                    "Insurance operations perspective",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border-t border-white/10 pt-4 text-sm font-semibold text-white/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />

                      {item}
                    </div>
                  ))}
                </div>

                {/* Small clarification */}
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                    PLRB Affiliate
                  </span>
                </div>
              </div>

              {/* PLRB LOGO */}
              <div className="relative mx-auto w-full max-w-md">
                {/* Offset outline */}
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-brand-green/20" />

                <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-brand-navy p-10 shadow-float md:min-h-[380px] md:p-14">
                  {/* Subtle glow */}
                  <div className="absolute h-52 w-52 rounded-full bg-brand-blue/10 blur-[70px]" />

                  <img
                    src={plrbLogo}
                    alt="PLRB Affiliate"
                    className="relative z-10 w-full max-w-[280px] object-contain"
                  />

                  {/* Bottom label */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2">
                    <span className="h-px w-6 bg-brand-green/50" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                      Industry affiliation
                    </span>

                    <span className="h-px w-6 bg-brand-green/50" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact call-to-action replaces Operational Trust */}
      <section className="relative overflow-hidden bg-surface-50 py-20 md:py-28">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-brand-blue/[0.05] blur-[110px]" />
        <div className="container-mw container-px relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                Let's connect
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                Confidence starts with a conversation.
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-brand-navy/60">
                Learn more about our quality standards, information security
                practices, and how OCP can support your operations.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-navy"
              >
                Talk to our team
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
