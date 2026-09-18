import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks } from "@/data/site";
import Button from "@/components/ui/Button";
import logo from "@/assets/ocp-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-brand-navy/80 shadow-lg backdrop-blur-xl"
          : "border-b border-white/5 bg-brand-navy"
      }`}
    >
      <div
        className={`container-mw container-px flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <a
          href="#/"
          onClick={() => setOpen(false)}
          className="flex items-center"
          aria-label="On Call Prime home"
        >
          <img
            src={logo}
            alt="On Call Prime"
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled ? "h-11" : "h-14"
            }`}
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.slice(1).map((link) => (
            <a
              key={link.path}
              href={`#/` + link.path.replace(/^\/+/, "")}
              className="group relative py-2 text-sm font-semibold text-white/75 transition-colors duration-300 hover:text-white"
            >
              {link.label}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-brand-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button to="/contact" size="sm">
            Let's Talk
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-brand-blue/30 hover:bg-brand-blue/10 hover:text-brand-blueLight lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-white/10 bg-brand-navy/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-mw container-px py-6">
              <div className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.path}
                    href={`#/` + link.path.replace(/^\/+/, "")}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.04,
                      duration: 0.25,
                    }}
                    className="group flex items-center justify-between border-b border-white/10 py-4 text-base font-semibold text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}

                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navLinks.length * 0.04,
                  duration: 0.25,
                }}
                className="mt-6"
              >
                <Button
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full justify-center"
                >
                  Schedule a Consultation
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </motion.div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-6 bg-white/10" />

                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
                  On Call Prime
                </span>

                <span className="h-px w-6 bg-white/10" />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
