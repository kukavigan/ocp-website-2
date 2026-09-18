import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection({
  title = "Ready to strengthen your insurance operations?",
  description = "Let’s talk about how OCP can help your team scale with precision.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-mw container-px">
        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl bg-brand-navy px-7 py-14 text-center shadow-float md:px-16 md:py-20">
            {/* Subtle grid */}
            <div className="absolute inset-0 grid-bg opacity-[0.05]" />

            {/* Blue glow */}
            <motion.div
              animate={{
                x: [0, 25, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand-blue/20 blur-[100px]"
            />

            {/* Green glow */}
            <motion.div
              animate={{
                x: [0, -20, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-brand-green/10 blur-[100px]"
            />

            {/* Decorative top line */}
            <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />

            <div className="relative z-10">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="mb-6 flex items-center justify-center gap-3"
              >
                <span className="h-px w-8 bg-brand-green" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-green">
                  Start a conversation
                </span>

                <span className="h-px w-8 bg-brand-green" />
              </motion.div>

              {/* Title */}
              <p className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                {title}
              </p>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60">
                {description}
              </p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="mt-9"
              >
                <Button to="/contact" size="lg">
                  Schedule a consultation
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                }}
                className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                    Quality focused
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                    Security minded
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                    Insurance focused
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
