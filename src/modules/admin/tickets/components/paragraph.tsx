import type { ReactNode } from "react";
import { clsx } from "clsx";

type paragraphProps = {
  children: ReactNode;
  className?: string;
  size: "small" | "extraSmall";
};

export function Paragraph({
  children,
  className,
  size = "small",
}: paragraphProps) {
  const sizeClasses = {
    small: "text-sm text-gray-200",
    extraSmall: "text-xs font-bold text-gray-400",
  };

  return <p className={clsx(sizeClasses[size], className)}>{children}</p>;
}
