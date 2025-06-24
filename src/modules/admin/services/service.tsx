import { Plus } from "lucide-react";
import { Button } from "../../../shared/components/button";
import { useState } from "react";

export function Service() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex pt-14 justify-between">
        <p className="text-blue-dark font-semibold text-xl">Serviços</p>
        <Button size={"md"} className="flex items-center justify-center gap-2"
        onClick={() => setOpen(open)}
        >
          <Plus />
          <span className="hidden md:table-cell">Novo</span>
        </Button>
      </div>
    </>
  );
}
