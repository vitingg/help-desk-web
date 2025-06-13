import { Plus } from "lucide-react";
import { Button } from "../../../shared/components/button";

export function Service() {
  return (
    <>
      <div className="flex pt-14 justify-between">
        <p className="text-blue-dark font-semibold text-xl">Serviços</p>
        <Button size={"xs"} className="flex items-center justify-center gap-2">
          <Plus />
          <span className="hidden md:table-cell">Novo</span>
        </Button>
      </div>
    </>
  );
}
