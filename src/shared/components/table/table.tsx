import type { ReactNode } from "react";

type tableProps = {
  children: ReactNode;
};

export function Table({ children }: tableProps) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <table className="w-full border border-gray-500">{children}</table>
    </div>
  );
}
