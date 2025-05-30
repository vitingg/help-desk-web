import type { ReactNode } from "react";
import { Icon } from "./edit-icon";

type TableBodyProps = {
  children: ReactNode;
};

// Aqui eu devo acrescentar o botão com a caneta, no figma, seria o "editar"

export function TableBody({ children }: TableBodyProps) {
  return <tbody>{children} <Icon />
  </tbody>;
}
