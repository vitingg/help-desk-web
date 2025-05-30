import type { ReactNode } from "react";

type TableHeaderProps = {
  children: ReactNode;
};

export function TableHeader({ children }: TableHeaderProps) {
  return <thead className="">{children}</thead>;
}
