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
        className="container-mw container-px py-20 md:py-28"
      >
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Get in touch
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-brand-navy">
              Start with a conversation.
            </h2>
            <p className="mt-6 leading-relaxed text-brand-navy/65">
              Whether you’re scaling for growth, navigating a surge, or
              improving a specific workflow, we’d like to understand where we
              can help.
            </p>
            <div className="mt-9 space-y-5 text-sm text-brand-navy/70">
              <p className="flex gap-3">
                <Mail className="h-5 w-5 text-brand-blue" />
                {companyInfo.email}
              </p>
              <p className="flex gap-3">
                <Phone className="h-5 w-5 text-brand-blue" />
                {companyInfo.phone}
              </p>
              <p className="flex gap-3">
                <MapPin className="h-5 w-5 text-brand-blue" />
                {companyInfo.addressFull}
              </p>
            </div>
          </Reveal>
          <div
            id="contact-form"
            className="border border-surface-300 bg-white p-6 shadow-card md:p-9"
          >
            {sent ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-brand-navy">
                  Thanks for reaching out.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-navy/60">
                  Your message is ready to be reviewed by our team. We’ll be in
                  touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-brand-navy">
                  First name
                  <input
                    required
                    name="firstName"
                    className="mt-2 w-full border-b border-surface-300 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-brand-blue"
                  />
                </label>
                <label className="text-sm font-semibold text-brand-navy">
                  Last name
                  <input
                    required
                    name="lastName"
                    className="mt-2 w-full border-b border-surface-300 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-brand-blue"
                  />
                </label>
                <label className="text-sm font-semibold text-brand-navy sm:col-span-2">
                  Work email
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full border-b border-surface-300 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-brand-blue"
                  />
                </label>
                <label className="text-sm font-semibold text-brand-navy sm:col-span-2">
                  Organization
                  <input
                    required
                    name="organization"
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
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-semibold text-brand-navy sm:col-span-2">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none border-b border-surface-300 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-brand-blue"
                  />
                </label>
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg">
                    Send inquiry <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <section className="bg-surface-50 py-20 md:py-28">
        <div className="container-mw container-px">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                Our office
              </p>
              <h2 className="mt-5 text-3xl font-bold text-brand-navy">
                Pristina, Kosovo
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-navy/65">
                Our operations center is based in Pristina, connecting
                exceptional local talent with insurance organizations across the
                United States.
              </p>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl">
              <img
                src={images.pristina}
                alt="Pristina, Kosovo"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/35" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-card">
                <MapPin className="h-5 w-5 text-brand-blue" />
                <span className="text-sm font-bold text-brand-navy">
                  OCP Operations · Pristina
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
