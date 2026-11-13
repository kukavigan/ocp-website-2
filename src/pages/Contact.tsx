import { FormEvent, useState } from "react";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "Claims Operations",
  "Claim Quality Assurance (QA)",
  "FNOL Support",
  "Adjuster Support",
  "Customer Care",
  "Back Office Operations",
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
      {/* CONTACT SECTION */}
      <section
        id="content"
        className="relative overflow-hidden bg-brand-navy pb-16 pt-24 text-white md:pb-20 md:pt-28"
      >
        {/* Background details */}
        <div className="absolute inset-0 grid-bg opacity-[0.035]" />

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-brand-green/[0.06] blur-[110px]" />

        <div className="container-mw container-px relative">
          {/* Centered introduction */}
          <Reveal>
            <div className="mx-auto mb-7 max-w-2xl text-center md:mb-8">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-9 bg-brand-green" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  Get in touch
                </p>
                <span className="h-px w-9 bg-brand-green" />
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Start a{" "}
                <span className="text-brand-blueLight">conversation.</span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/65">
                Whether you are looking to increase capacity, improve quality,
                or strengthen performance, we're ready to help.
              </p>
            </div>
          </Reveal>

          {/* Compact, centered contact form */}
          <Reveal delay={0.1}>
            <div
              id="contact-form"
              className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white p-6 shadow-float sm:p-8"
            >
              {sent ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green">
                    Preview submission
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-brand-navy">
                    Form preview complete.
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-navy/60">
                    This form is not connected to an email service yet. No
                    message has been sent.
                  </p>
                </div>
              ) : (
                <>
                  {/* Form intro */}
                  <div className="mb-5 border-b border-surface-200 pb-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                      Tell us about your operation
                    </p>
                  </div>

                  <form
                    onSubmit={submit}
                    className="grid gap-x-6 gap-y-6 sm:grid-cols-2"
                  >
                    {/* First Name */}
                    <label className="text-sm font-semibold text-brand-navy">
                      First name
                      <input
                        required
                        name="firstName"
                        autoComplete="given-name"
                        className="mt-1 w-full border-b border-surface-300 bg-transparent px-0 py-2 text-sm outline-none transition focus:border-brand-blue"
                      />
                    </label>

                    {/* Last Name */}
                    <label className="text-sm font-semibold text-brand-navy">
                      Last name
                      <input
                        required
                        name="lastName"
                        autoComplete="family-name"
                        className="mt-1 w-full border-b border-surface-300 bg-transparent px-0 py-2 text-sm outline-none transition focus:border-brand-blue"
                      />
                    </label>

                    {/* Work Email */}
                    <label className="text-sm font-semibold text-brand-navy">
                      Work email
                      <input
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="name@company.com"
                        className="mt-1 w-full border-b border-surface-300 bg-transparent px-0 py-2 text-sm outline-none transition placeholder:text-brand-navy/25 focus:border-brand-blue"
                      />
                    </label>

                    {/* Organization */}
                    <label className="text-sm font-semibold text-brand-navy">
                      Organization
                      <input
                        required
                        name="organization"
                        autoComplete="organization"
                        className="mt-1 w-full border-b border-surface-300 bg-transparent px-0 py-2 text-sm outline-none transition focus:border-brand-blue"
                      />
                    </label>

                    {/* Service */}
                    <label className="text-sm font-semibold text-brand-navy sm:col-span-2">
                      How can we help?
                      <select
                        name="service"
                        defaultValue=""
                        className="mt-1 w-full border-b border-surface-300 bg-transparent px-0 py-2 text-sm outline-none transition focus:border-brand-blue"
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

                    {/* Message */}
                    <label className="text-sm font-semibold text-brand-navy sm:col-span-2">
                      Message
                      <textarea
                        required
                        name="message"
                        rows={3}
                        placeholder="Tell us about your current needs, challenges, or goals..."
                        className="mt-2 w-full resize-none border-b border-surface-300 bg-transparent px-0 py-2 text-sm outline-none transition placeholder:text-brand-navy/25 focus:border-brand-blue"
                      />
                    </label>

                    {/* Submit */}
                    <div className="mt-1 flex flex-col items-start gap-3 sm:col-span-2">
                      <Button type="submit" size="lg">
                        Send inquiry
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>

                      <p className="max-w-md text-[10px] leading-relaxed text-brand-navy/45">
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
      </section>
    </div>
  );
}
