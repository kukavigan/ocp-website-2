import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { workflowSteps } from "@/data/site";

export default function Workflow() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Desktop workflow */}
      <div className="relative hidden items-start justify-between md:flex">
        {workflowSteps.map((item, index) => {
          const isActive = active === index;
          const isCompleted = index < active;

          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative z-10 flex flex-1 flex-col items-center"
            >
              {/* Step button */}
              <motion.button
                onClick={() => setActive(index)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className={`relative flex h-14 w-14 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "border-brand-blue bg-brand-blue text-white shadow-glow"
                    : isCompleted
                      ? "border-brand-green bg-brand-green text-white"
                      : "border-white/20 bg-white/5 text-white/50 hover:border-brand-blue/60 hover:text-white"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  String(index + 1).padStart(2, "0")
                )}

                {isActive && (
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.45, opacity: 0 }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 rounded-full border border-brand-blue"
                  />
                )}
              </motion.button>

              {/* Step name */}
              <p
                className={`mt-4 max-w-[130px] text-center text-xs font-bold transition-colors duration-300 ${
                  isActive
                    ? "text-brand-blueLight"
                    : isCompleted
                      ? "text-brand-green"
                      : "text-white/45"
                }`}
              >
                {item.step}
              </p>

              {/* Connecting line */}
              {index < workflowSteps.length - 1 && (
                <div className="absolute left-1/2 top-7 -z-10 h-px w-full bg-white/10">
                  <motion.div
                    initial={false}
                    animate={{
                      scaleX: index < active ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full origin-left bg-gradient-to-r from-brand-blue to-brand-green"
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Active step information */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-start gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white shadow-glow">
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
                Step {String(active + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                {workflowSteps[active].step}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
                {workflowSteps[active].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile workflow */}
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2 md:hidden">
        {workflowSteps.map((item, index) => (
          <button
            key={item.step}
            onClick={() => setActive(index)}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition-all ${
              active === index
                ? "border-brand-blue bg-brand-blue text-white"
                : index < active
                  ? "border-brand-green/40 bg-brand-green/10 text-brand-green"
                  : "border-white/10 bg-white/5 text-white/50"
            }`}
          >
            {item.step}
          </button>
        ))}
      </div>
    </div>
  );
}
