import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, companyInfo } from "@/data/site";
import ocpLogo from "@/assets/ocp-logo.png";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-mw container-px py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={ocpLogo}
                alt="On Call Prime"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Insurance operations support built for precision, scale, and the
              people who count on you.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/on-call-prime-llc/"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-brand-blue hover:text-brand-blue"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Explore
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {navLinks.slice(1, 5).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Company
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {navLinks.slice(5).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/services"
                className="text-sm text-white/65 transition hover:text-white"
              >
                All Services
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Get in touch
            </p>
            <div className="mt-5 flex flex-col gap-4 text-sm text-white/65">
              <span className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand-blue" />
                {companyInfo.address}
              </span>
              <span className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-blue" />
                {companyInfo.email}
              </span>
              <span className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-blue" />
                {companyInfo.phone}
              </span>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-blue"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-mw container-px flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 On Call Prime. All rights reserved.</span>
          <span>Built for better insurance operations.</span>
        </div>
      </div>
    </footer>
  );
}
