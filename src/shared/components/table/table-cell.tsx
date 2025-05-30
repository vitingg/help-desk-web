import { CircleHelp, Clock2, CircleCheckBig } from "lucide-react";
import type { ReactNode } from "react";

type TableCellProps = {
  children?: ReactNode;
  hasAbbreviation?: string;
  status?: "Aberto" | "Em Atendimento" | "Fechado";
};

function Profile({ children, hasAbbreviation }: TableCellProps) {
  return (
    <td className="px-6 py-2 gap-2">
      <div className="flex items-center justify-center gap-2">
        <div className="flex  items-center justify-center gap-2">
          <p className="bg-blue-dark rounded-full w-8 h-8 text-white flex items-center justify-center">
            {hasAbbreviation}
          </p>
        </div>
        <p>{children}</p>
      </div>
    </td>
  );
}

function Status({ status }: TableCellProps) {
  if (status === "Aberto") {
    return (
      <div className="p-1 gap-1 flex items-center justify-center bg-feedback-openBackground text-feedback-open rounded-2xl">
        <CircleHelp width={"16"} height={"16"} />
        <p className="text-xs font-semibold">Aberto</p>
      </div>
    );
  } else if (status === "Em Atendimento") {
    return (
      <div className="p-1 gap-1 flex items-center justify-center bg-feedback-progressBackground text-feedback-progress rounded-2xl">
        <Clock2 width={"16"} height={"16"} />
        <p className="text-xs font-semibold">Em Atendimento</p>
      </div>
    );
  } else {
    return (
      <div className="p-1 gap-1 flex items-center justify-center bg-feedback-doneBackground text-feedback-done rounded-2xl">
        <CircleCheckBig width={"16"} height={"16"} />
        <p className="text-xs font-semibold">Fechado</p>
      </div>
    );
  }
}

export function TableCell({
  children,
  status,
  hasAbbreviation,
}: TableCellProps) {
  if (hasAbbreviation) {
    return <Profile hasAbbreviation={hasAbbreviation}>{children}</Profile>;
  } else if (status) {
    return (
      <td className="px-4 py-3">
        <Status status={status} />
      </td>
    );
  } else {
    return <td className="px-4 py-3">{children}</td>;
  }
}
