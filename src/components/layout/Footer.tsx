import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, companyInfo } from "@/data/site";
import ocpLogo from "@/assets/ocp-logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      {/* Background details */}
      <div className="absolute inset-0 grid-bg opacity-[0.025]" />

      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-brand-blue/10 blur-[120px]" />
      <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-brand-green/[0.05] blur-[110px]" />

      <div className="container-mw container-px relative">
        {/* Top statement */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand-green" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green">
                On Call Prime
              </p>
            </div>

            <p className="mt-4 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
              Better insurance operations start with the{" "}
              <span className="text-brand-blueLight">right partner.</span>
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-brand-blue/40 hover:bg-brand-blue"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Main footer */}
        <div className="grid gap-12 py-14 md:py-16 lg:grid-cols-[1.4fr_.8fr_.8fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src={ocpLogo}
                alt="On Call Prime"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
              Insurance operations support built for precision, scale, and the
              people who count on you.
            </p>

            {/* LinkedIn */}
            <div className="mt-7">
              <a
                href="https://www.linkedin.com/company/on-call-prime-llc/"
                target="_blank"
                rel="noreferrer"
                aria-label="On Call Prime on LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-brand-blue hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blueLight">
              Explore
            </p>

            <div className="mt-6 flex flex-col gap-3.5">
              {navLinks.slice(1, 5).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-brand-green transition-all duration-300 group-hover:w-3" />

                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blueLight">
              Company
            </p>

            <div className="mt-6 flex flex-col gap-3.5">
              {navLinks.slice(5).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-brand-green transition-all duration-300 group-hover:w-3" />

                  {link.label}
                </Link>
              ))}

              <Link
                to="/services"
                className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-brand-green transition-all duration-300 group-hover:w-3" />
                All Services
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blueLight">
              Get in touch
            </p>

            <div className="mt-6 border-t border-white/10">
              {/* Address */}
              <div className="flex items-start gap-3 border-b border-white/10 py-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/25">
                    Operations center
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-white/55">
                    {companyInfo.address}
                  </p>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="group flex items-start gap-3 border-b border-white/10 py-4"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-blueLight" />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/25">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-white/55 transition-colors group-hover:text-white">
                    {companyInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${companyInfo.phone}`}
                className="group flex items-start gap-3 py-4"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-blueLight" />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/25">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-white/55 transition-colors group-hover:text-white">
                    {companyInfo.phone}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[10px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 On Call Prime. All rights reserved.</span>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />

            <span className="font-bold uppercase tracking-[0.14em]">
              Built for better insurance operations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
