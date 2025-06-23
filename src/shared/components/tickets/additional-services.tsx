import { Button } from "../button";
import { Plus } from "lucide-react";
import { TicketLayout } from "./ticket-layout";
import { Icon } from "../edit-icon";

export function AdditionalService() {
  return (
    <TicketLayout>
      <div className="flex justify-between items-center">
        <p className="text-xs font-bold text-gray-400">Serviços adicionais</p>
        <Button size={"4xs"} className="flex items-center justify-center">
          <Plus />
        </Button>
      </div>
      <div className="flex justify-between gap-8 items-center pt-4">
        <p className="font-bold text-sm">Assinatura de backup</p>
        <div className="flex gap-4 items-center">
          <p className="text-gray-200 text-sm">R$ 120,00</p>
          <Icon variant="delete" />
        </div>
      </div>
      <div className="pt-1 pb-1 border-0 border-b-1 border-b-gray-500" />

      <div className="flex justify-between items-center pt-3">
        <p className="font-bold text-sm">Assinatura de backup</p>
        <div className="flex gap-4 items-center">
          <p className="text-gray-200 text-sm">R$ 120,00</p>
          <Icon variant="delete" />
        </div>
      </div>
    </TicketLayout>
  );
}
