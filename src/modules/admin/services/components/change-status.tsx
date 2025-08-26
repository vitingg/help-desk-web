import { Ban, CircleCheck } from "lucide-react";

export function ChangeStatus(status: boolean) {
  if (status == true) {
    return (
      <button className="flex items-center justify-center">
        <Ban className="w-5 h-5" />
        <p>Clique para desativar</p>
      </button>
    );
  } else {
    return (
      <button className="flex items-center justify-center">
        <CircleCheck className="w-5 h-5" />
        <p>Clique para reativar</p>
      </button>
    );
  }
}
