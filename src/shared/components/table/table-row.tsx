import type { ReactNode } from "react";

type TableRowProps = {
  children: ReactNode;
  isBody?: boolean;
}

export function TableRow({ children}: TableRowProps) {
  return <tr className="">{children}</tr>;
}
