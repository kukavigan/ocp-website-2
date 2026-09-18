import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import type { Service } from "@/data/services";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group h-full"
    >
      <Link
        to={`/services/${service.slug}`}
        className="relative flex h-full flex-col overflow-hidden border-t border-surface-300 px-1 py-7 transition-all duration-500 hover:border-transparent"
      >
        {/* Animated top line */}
        <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-500 group-hover:w-full" />

        {/* Subtle hover background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-blue/[0.04] via-transparent to-brand-green/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="flex items-start justify-between">
          {/* Icon */}
          <motion.div
            whileHover={{
              rotate: -4,
              scale: 1.08,
            }}
            transition={{
              duration: 0.25,
            }}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-100 text-brand-blue transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-lg"
          >
            <Icon className="h-5 w-5" />
          </motion.div>

          {/* Arrow */}
          <ArrowUpRight className="h-5 w-5 text-brand-navy/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-green" />
        </div>

        <h3 className="mt-5 text-lg font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
          {service.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-brand-navy/60">
          {service.shortDesc}
        </p>

        <span className="mt-auto flex items-center gap-2 pt-5 text-xs font-bold uppercase tracking-wider text-brand-blue transition-all duration-300 group-hover:gap-3 group-hover:text-brand-green">
          Explore service
          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
        </span>
      </Link>
    </motion.div>
  );
}
