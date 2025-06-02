import type { ReactNode } from "react";

type TableHeadProps = {
  children: ReactNode;
};

export function TableHead({ children }: TableHeadProps) {
  return <th className="px-4 py-3 text-gray-400">{children}</th>;
}
