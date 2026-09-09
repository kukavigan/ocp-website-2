import { Link } from "react-router-dom";
import { motion } from "motion/react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "green";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blueDark shadow-soft hover:shadow-glow",
  secondary: "bg-brand-navy text-white hover:bg-brand-navyLight shadow-soft",
  ghost: "bg-transparent text-brand-navy hover:bg-surface-100",
  outline:
    "bg-transparent text-brand-navy border border-surface-300 hover:border-brand-blue hover:text-brand-blue",
  green: "bg-brand-green text-white hover:bg-brand-greenDark shadow-soft",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
