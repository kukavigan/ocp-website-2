import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/data/site";
import { images } from "@/data/images";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "Claims File Services",
  "FNOL Support",
  "Customer Care",
  "Back Office Operations",
  "QA & Auditing",
  "Adjuster Support",
  "Survey & Reporting",
  "Multiple Services",
];
export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let’s make your operations stronger."
        description="Tell us what you’re working through. We’ll bring the right people to the conversation."
        image="team"
        cta="Jump to the form"
        ctaTo="#contact-form"
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
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            {/* LEFT SIDE */}
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                    Get in touch
                  </p>
                </div>

                <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Start with a{" "}
                  <span className="text-brand-blueLight">conversation.</span>
                </h2>

                <p className="mt-6 max-w-md leading-relaxed text-white/60">
                  Whether you’re scaling for growth, navigating a surge, or
                  improving a specific workflow, we’d like to understand where
                  we can help.
                </p>

                {/* Contact details */}
                <div className="mt-10 border-t border-white/10">
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="group flex items-center gap-4 border-b border-white/10 py-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-brand-blueLight transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                      <Mail className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                        Email
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white/75 transition-colors group-hover:text-white">
                        {companyInfo.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="group flex items-center gap-4 border-b border-white/10 py-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-brand-blueLight transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                      <Phone className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                        Phone
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white/75 transition-colors group-hover:text-white">
                        {companyInfo.phone}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 border-b border-white/10 py-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-brand-green">
                      <MapPin className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                        Operations center
                      </p>

                      <p className="mt-1 max-w-xs text-sm font-semibold leading-relaxed text-white/75">
                        {companyInfo.addressFull}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Small trust message */}
                <div className="mt-7 flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-30" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                    Let’s find the right operational solution
                  </span>
                </div>
              </div>
            </Reveal>

            {/* CONTACT FORM */}
            <Reveal delay={0.1}>
              <div
                id="contact-form"
                className="rounded-2xl border border-white/10 bg-white p-6 shadow-float md:p-9 lg:p-10"
              >
                {sent ? (
                  <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green">
                      Inquiry received
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-brand-navy">
                      Thanks for reaching out.
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-navy/60">
                      Your message is ready to be reviewed by our team. We’ll be
                      in touch soon.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Form intro */}
                    <div className="mb-8 border-b border-surface-200 pb-7">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                        Tell us about your operation
                      </p>

                      <h3 className="mt-3 text-2xl font-bold text-brand-navy">
                        How can OCP help?
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-brand-navy/50">
                        Share a few details and our team can start the
                        conversation with the right context.
                      </p>
                    </div>

                    <form
                      onSubmit={submit}
                      className="grid gap-6 sm:grid-cols-2"
                    >
                      <label className="text-sm font-semibold text-brand-navy">
                        First name
                        <input
                          required
                          name="firstName"
                          autoComplete="given-name"
                          className="mt-2 w-full border-b border-surface-300 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-brand-blue"
                        />
                      </label>

                      <label className="text-sm font-semibold text-brand-navy">
                        Last name
                        <input
                          required
                          name="lastName"
                          autoComplete="family-name"
                          className="mt-2 w-full border-b border-surface-300 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-brand-blue"
                        />
                      </label>

                      <label className="text-sm font-semibold text-brand-navy sm:col-span-2">
                        Work email
                        <input
                          required
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="name@company.com"
                          className="mt-2 w-full border-b border-surface-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-brand-navy/25 focus:border-brand-blue"
                        />
                      </label>

                      <label className="text-sm font-semibold text-brand-navy sm:col-span-2">
                        Organization
                        <input
                          required
                          name="organization"
                          autoComplete="organization"
                          className="mt-2 w-full border-b border-surface-300 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-brand-blue"
                        />
                      </label>

                      <label className="text-sm font-semibold text-brand-navy sm:col-span-2">
                        How can we help?
                        <select
                          name="service"
                          defaultValue=""
                          className="mt-2 w-full border-b border-surface-300 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-brand-blue"
                        >
                          <option value="" disabled>
                            Select a service
                          </option>

                          {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="text-sm font-semibold text-brand-navy sm:col-span-2">
                        Message
                        <textarea
                          required
                          name="message"
                          rows={4}
                          placeholder="Tell us about your current needs, challenges, or goals..."
                          className="mt-2 w-full resize-none border-b border-surface-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-brand-navy/25 focus:border-brand-blue"
                        />
                      </label>

                      <div className="mt-2 sm:col-span-2">
                        <Button type="submit" size="lg">
                          Send inquiry
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>

                        <p className="mt-4 text-[10px] leading-relaxed text-brand-navy/35">
                          By submitting this form, you’re asking OCP to contact
                          you about your inquiry.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Background accent */}
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-brand-blue/[0.035] blur-[100px]" />

        <div className="container-mw container-px relative">
          <div className="grid items-center gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            {/* LEFT — OFFICE INFO */}
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-green" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  Our office
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
                Pristina, <span className="text-brand-blue">Kosovo.</span>
              </h2>

              <p className="mt-6 max-w-md leading-relaxed text-brand-navy/60">
                Our operations center is based in Pristina, connecting
                exceptional local talent with insurance organizations across the
                United States.
              </p>

              {/* Location */}
              <div className="mt-9 border-t border-surface-300">
                <div className="flex items-start gap-4 py-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-brand-navy/35">
                      Operations center
                    </p>

                    <p className="mt-1 max-w-xs text-sm font-semibold leading-relaxed text-brand-navy/70">
                      {companyInfo.addressFull}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connection detail */}
              <div className="mt-2 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-30" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-brand-navy/35">
                  European operations · U.S. insurance support
                </span>
              </div>
            </Reveal>

            {/* RIGHT — PRISTINA IMAGE */}
            <Reveal delay={0.1}>
              <div className="relative">
                {/* Offset border */}
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-brand-blue/10" />

                <div className="group relative min-h-[360px] overflow-hidden rounded-3xl shadow-float md:min-h-[480px]">
                  <img
                    src={images.pristina}
                    alt="Pristina, Kosovo"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/10 to-transparent" />

                  {/* Image label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-green">
                        OCP Operations
                      </span>
                    </div>

                    <div className="mt-3 flex items-end justify-between gap-6">
                      <div>
                        <p className="text-2xl font-bold text-white">
                          Pristina
                        </p>

                        <p className="mt-1 text-sm text-white/55">
                          Kosovo · Europe
                        </p>
                      </div>

                      <MapPin className="h-5 w-5 shrink-0 text-brand-blueLight" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
