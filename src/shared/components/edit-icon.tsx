import { PenLine } from "lucide-react";
import { Button } from "./button";

export function Icon() {
  return (
    <Button
      size="4xs"
      variant={"secondary"}
      className="flex items-center justify-center"
    >
      <PenLine width={"14"} height={"14"} />
    </Button>
  );
}
