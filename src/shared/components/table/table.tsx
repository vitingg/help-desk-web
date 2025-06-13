import type { ReactNode } from "react";

type tableProps = {
  children: ReactNode;
  className?: string;
};

export function Table({ children, className }: tableProps) {
  return (
    <table
      className={`
    border border-gray-500 rounded-lg ${className}`}
    >
      {children}
    </table>
  );
}
