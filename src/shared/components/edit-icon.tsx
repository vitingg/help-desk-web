import { PenLine, Trash } from "lucide-react";
import { Button } from "./button";
import type {
  ReactNode,
} from "react";

const iconMap = {
  edit: <PenLine width={"14"} height={"14"} />,
  delete: <Trash width={"14"} height={"14"} className="text-red-500" />,
};

type iconProps = {
  variant: keyof typeof iconMap;
};

export function Icon({ variant = "edit"}: iconProps) {
  const IconComponent: ReactNode = iconMap[variant];
  return (
    <Button
      size="4xs"
      variant={"secondary"}
      className="flex items-center justify-center"
    >
      {IconComponent}
    </Button>
  );
}
