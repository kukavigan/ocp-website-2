import type { LucideIcon } from "lucide-react";
import { images } from "@/data/images";

interface ImageCardProps {
  image: keyof typeof images;
  label?: string;
  caption?: string;
  icon?: LucideIcon;
  aspect?: "square" | "video" | "wide" | "tall" | "portrait";
  className?: string;
  overlay?: "none" | "light" | "navy";
}

const aspectClasses: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
  tall: "aspect-[4/5]",
  portrait: "aspect-[3/4]",
};

export default function ImageCard({
  image,
  label,
  caption,
  icon: Icon,
  aspect = "video",
  className = "",
  overlay = "light",
}: ImageCardProps) {
  const overlayClass =
    overlay === "navy"
      ? "bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent"
      : overlay === "light"
        ? "bg-gradient-to-t from-black/30 via-transparent to-transparent"
        : "";
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-surface-100 shadow-card ${aspectClasses[aspect]} ${className}`}
    >
      <img
        src={images[image]}
        alt={label || image}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
      {(label || caption) && (
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {Icon && (
            <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue/90 text-white">
              <Icon className="h-4 w-4" />
            </div>
          )}
          {label && (
            <p className="text-sm font-bold uppercase tracking-wider text-white drop-shadow">
              {label}
            </p>
          )}
          {caption && (
            <p className="mt-1 text-xs text-white/80 drop-shadow">{caption}</p>
          )}
        </div>
      )}
    </div>
  );
}
