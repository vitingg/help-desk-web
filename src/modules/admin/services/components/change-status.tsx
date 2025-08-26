import { Ban, CircleCheck } from "lucide-react";

export function ChangeStatus(status: boolean) {
  if (status == true) {
    return (
      <button className="flex items-center justify-center p-2">
        <Ban className="w-5 h-5" />
        <p>Desativar</p>
      </button>
    );
  } else {
    return (
      <button className="flex items-center justify-center p-2">
        <CircleCheck className="w-5 h-5" />
        <p>Reativar</p>
      </button>
    );
  }
}
