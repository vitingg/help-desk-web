import { Button } from "../../../../shared/components/button";
import { Ban, CircleCheck } from "lucide-react";

export function ChangeStatus(status: boolean) {
  if (status == true) {
    return (
      <button className="flex">
        <Ban className="w-3 h-3" />
        Clique para desativar
      </button>
    );
  } else {
    return <Button>Clique para ativar</Button>;
  }
}
