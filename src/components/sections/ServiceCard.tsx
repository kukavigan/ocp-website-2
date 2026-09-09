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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group"
    >
      <Link
        to={`/services/${service.slug}`}
        className="flex h-full flex-col border-t border-surface-300 py-6 transition-colors hover:border-brand-blue"
      >
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-100 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
            <Icon className="h-5 w-5" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-brand-navy/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-blue" />
        </div>
        <h3 className="mt-5 text-lg font-bold text-brand-navy">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-navy/60">
          {service.shortDesc}
        </p>
        <span className="mt-auto pt-5 text-xs font-bold uppercase tracking-wider text-brand-blue">
          Explore service
        </span>
      </Link>
    </motion.div>
  );
}
