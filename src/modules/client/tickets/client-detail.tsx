import { HeaderAction } from "../../../shared/components/header-action";
import { TicketComplete } from "../../../shared/components/tickets/ticket-complete";
import { PriceHistory } from "../../../shared/components/tickets/ticket-price-history";

export function ClientDetail() {
  return (
    <div className="p-14">
      <HeaderAction title="Chamado detalhado" />

      <div className="pt-6 flex gap-2">
        <TicketComplete />
        <PriceHistory />
      </div>
    </div>
  );
}
