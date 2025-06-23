import type { ReactNode } from "react";
import { clsx } from "clsx";

type paragraphProps = {
  children: ReactNode;
  className?: string;
  size: "sm" | "xs" | "md";
};

export function Paragraph({
  children,
  className,
  size = "sm",
}: paragraphProps) {
  const sizeClasses = {
    md: "text-gray-200 text-md font-bold",
    sm: "text-sm text-gray-200",
    xs: "text-xs font-bold text-gray-400",
  };

  return <p className={clsx(sizeClasses[size], className)}>{children}</p>;
}
