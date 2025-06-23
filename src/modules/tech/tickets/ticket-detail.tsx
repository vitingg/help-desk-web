import { Button } from "../../../shared/components/button";
import { HeaderAction } from "../../../shared/components/header-action";
import { AdditionalService } from "../../../shared/components/tickets/additional-services";
import { TicketDetail } from "../../../shared/components/tickets/ticket-detail";
import { PriceHistory } from "../../../shared/components/tickets/price-history";

export function TechDetail() {
  return (
    <div className="pt-14">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6">
        <HeaderAction title="Chamado detalhado" />
        <div className="flex gap-2 items-center ">
          <Button variant={"secondary"} className="font-bold">
            Encerrar
          </Button>
          <Button
            size={"2xl"}
            className="flex items-center justify-center font-bold"
          >
            Iniciar atendimento
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2">
          <TicketDetail />
          <AdditionalService />
        </div>
        <div>
          <PriceHistory />
        </div>
      </div>
    </div>
  );
}
