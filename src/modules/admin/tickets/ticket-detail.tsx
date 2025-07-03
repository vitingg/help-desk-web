import { Clock2, CircleCheckBig } from "lucide-react";
import { HeaderAction } from "../../../shared/components/header-action";

import { TicketDetail } from "../../../shared/components/tickets/ticket-detail";
import { PriceHistory } from "../../../shared/components/tickets/ticket-price-history";

export function AdminDetail() {
  return (
    <div className="flex items-center justify-center">
      <div className="pr-6 pl-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-14">
          <HeaderAction title="Chamado detalhado" />
          <div className="font-semibold text-gray-300 flex gap-2 ">
            <div className="text-sm md:text-md p-4 flex items-center justify-center gap-2 flex-1 md:flex-none bg-gray-500 rounded-md">
              <Clock2 />
              <p className="text-gray-200 ">Em atendimento</p>
            </div>
            <div className="text-sm md:text-md p-4 flex items-center justify-center gap-2 flex-1 md:flex-none bg-gray-500 rounded-md">
              <CircleCheckBig />
              <p className="text-gray-200 ">Encerrado</p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row md:items-start gap-6">
          <TicketDetail />
          <PriceHistory />
        </div>
      </div>
    </div>
  );
}
