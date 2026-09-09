import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { workflowSteps } from "@/data/site";

export default function Workflow() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="relative hidden items-center justify-between md:flex">
        {workflowSteps.map((item, index) => (
          <div
            key={item.step}
            className="relative z-10 flex flex-col items-center"
          >
            <button
              onClick={() => setActive(index)}
              className={`flex h-14 w-14 items-center justify-center rounded-full border-2 text-sm font-bold transition-all ${active === index ? "border-brand-blue bg-brand-blue text-white shadow-glow" : "border-surface-300 bg-white text-brand-navy/50 hover:border-brand-blue/50"}`}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
            <p
              className={`mt-4 text-center text-xs font-bold ${active === index ? "text-brand-blue" : "text-brand-navy/60"}`}
            >
              {item.step}
            </p>
            {index < workflowSteps.length - 1 && (
              <div className="absolute left-[calc(50%+32px)] top-7 h-px w-[calc(100%+56px)] bg-surface-300">
                <motion.div
                  animate={{ scaleX: index < active ? 1 : 0 }}
                  className="h-full origin-left bg-brand-blue"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-2xl border border-surface-200 bg-surface-50 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Step {String(active + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-xl font-bold text-brand-navy">
              {workflowSteps[active].step}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
              {workflowSteps[active].desc}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 md:hidden">
        {workflowSteps.map((item, index) => (
          <button
            key={item.step}
            onClick={() => setActive(index)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold ${active === index ? "bg-brand-blue text-white" : "bg-surface-100 text-brand-navy/60"}`}
          >
            {item.step}
          </button>
        ))}
      </div>
    </div>
  );
}
