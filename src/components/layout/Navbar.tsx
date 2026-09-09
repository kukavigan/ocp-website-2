import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { navLinks } from "@/data/site";
import Button from "@/components/ui/Button";
import logo from "@/assets/ocp-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-200/70 bg-brand-navy backdrop-blur-xl">
      <div className="container-mw container-px flex h-20 items-center justify-between">
        <a href="#/" className="flex items-center">
          <img
            src={logo}
            alt="On Call Prime"
            className="h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.slice(1).map((link) => (
            <a
              key={link.path}
              href={`#/` + link.path.replace(/^\/+/, "")}
              className="text-sm font-semibold text-white transition-colors hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button to="/contact" size="sm">
            Let's Talk <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          className="rounded-lg p-2 text-white transition-colors hover:text-brand-blue lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-surface-200 bg-white px-5 py-5 lg:hidden"
        >
          <div className="container-mw flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={`#/` + link.path.replace(/^\/+/, "")}
                onClick={() => setOpen(false)}
                className="py-1 text-base font-semibold text-brand-navy"
              >
                {link.label}
              </a>
            ))}

            <Button to="/contact" onClick={() => setOpen(false)}>
              Schedule a Consultation
            </Button>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
