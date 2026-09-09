import { ArrowUpRight } from "lucide-react";
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
    <section className="container-mw container-px py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-brand-blue px-7 py-12 text-center shadow-glow md:px-16 md:py-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[40px] border-brand-navy/10" />
          <div className="relative">
            <p className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              {title}
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80">
              {description}
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="secondary" size="lg">
                Schedule a consultation <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
