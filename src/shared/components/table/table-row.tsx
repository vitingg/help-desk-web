import type { ReactNode } from "react";
import { Icon } from "./edit-icon";

type TableRowProps = {
  children: ReactNode;
  isBody?: boolean;
}

export function TableRow({ children, isBody = true }: TableRowProps) {
  return <tr className="">{children} {isBody && ( <Icon /> )}</tr>;
}
