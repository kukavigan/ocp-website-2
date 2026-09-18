import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "@/data/images";
import Button from "@/components/ui/Button";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: keyof typeof images;
  cta?: string;
  ctaTo?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image = "team",
  cta,
  ctaTo = "/contact",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-surface-200 bg-surface-50 pt-32 md:pt-36">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />

      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-brand-blue/[0.05] blur-[100px]" />

      <div className="container-mw container-px relative">
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:pb-24">
          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-brand-green" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                {eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-brand-navy md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-xl text-base leading-relaxed text-brand-navy/65 md:text-lg"
            >
              {description}
            </motion.p>

            {cta && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.24,
                }}
                className="mt-8"
              >
                <Button to={ctaTo}>
                  {cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* Small page identity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-10 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-navy/35">
                On Call Prime
              </span>

              <span className="h-px w-8 bg-surface-300" />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-navy/35">
                {eyebrow}
              </span>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:pl-8"
          >
            {/* Navy panel behind image */}
            <div className="absolute -bottom-5 -right-5 top-5 w-[85%] rounded-2xl bg-brand-navy md:-right-7" />

            {/* OCP diamond accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -right-3 -top-3 z-20 h-20 w-20"
            >
              <div className="absolute right-1 top-1 h-11 w-11 rotate-45 bg-brand-green shadow-lg" />
            </motion.div>

            {/* Image */}
            <div className="group relative overflow-hidden rounded-2xl shadow-float">
              <motion.img
                src={images[image]}
                alt={title}
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-[330px] w-full object-cover md:h-[420px] lg:h-[460px]"
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-5 left-5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/75">
                    OCP Operations
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom floating label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.55,
              }}
              className="absolute -bottom-2 right-3 z-20 hidden items-center gap-3 rounded-lg border border-white/10 bg-brand-navy px-4 py-3 text-white shadow-lg md:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">
                People · Process · Performance
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        to="#content"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-brand-navy/30 transition-colors hover:text-brand-blue md:flex"
      >
        Scroll to explore
        <ArrowDownRight className="h-3.5 w-3.5" />
      </Link>
    </section>
  );
}
