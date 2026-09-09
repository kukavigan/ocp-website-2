import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
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
    <section className="relative overflow-hidden border-b border-surface-200 bg-surface-50 pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="container-mw container-px relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-brand-blue" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              {eyebrow}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-brand-navy md:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-navy/70"
          >
            {description}
          </motion.p>
          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-8"
            >
              <Button to={ctaTo}>
                {cta} <ArrowDownRight className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl border border-brand-blue/10" />
          <div className="overflow-hidden rounded-2xl shadow-float">
            <img
              src={images[image]}
              alt={title}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-xl border border-surface-200 bg-white px-4 py-3 shadow-card">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
            <span className="text-xs font-bold text-brand-navy">
              Operational excellence, always
            </span>
          </div>
        </motion.div>
      </div>
      <Link
        to="#content"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy/40 md:flex"
      >
        Scroll to explore <ArrowDownRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
