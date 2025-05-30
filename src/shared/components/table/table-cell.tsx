import type { ReactNode } from "react";

type TableCellProps = {
  children: ReactNode;
};

export function TableCell({ children }: TableCellProps) {
  return <td className="px-6 py-2">{children}</td>
}
