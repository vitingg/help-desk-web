import type { ReactNode } from "react";

type tableProps = {
  children: ReactNode;
};

export function Table({ children }: tableProps) {
  return (
    <table
      className="border-separate border-spacing-0 w-full 
    border border-gray-500 rounded-lg overflow-hidden"
    >
      {children}
    </table>
  );
}
