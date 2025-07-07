import { Button } from "../../../shared/components/button";
import { HeaderAction } from "../../../shared/components/header-action";
import { AdditionalService } from "../../../shared/components/tickets/ticket-additional-services";
import { TicketDetail } from "../../../shared/components/tickets/ticket-detail";
import { PriceHistory } from "../../../shared/components/tickets/ticket-price-history";
import { CircleCheckBig, Clock2 } from "lucide-react";

const ticketData = {
  id: "00004",
  title: "Backup não está funcionando",
  status: "Aberto",
  description:
    "O sistema de backup automático parou de funcionar. Última execução bem-sucedida foi há uma semana.",
  category: "Recuperação de Dados",
  createdAt: "12/04/25 09:12",
  updatedAt: "12/04/25 15:20",
  client: {
    initials: "AC",
    name: "André Costa",
  },
} as const;

export function TechDetail() {
  return (
    <div className="flex justify-center">
      <div className="pt-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6">
          <HeaderAction title="Chamado detalhado" />
          <div className="flex gap-2 items-center ">
            <Button
              size={"xl"}
              variant={"secondary"}
              className="font-bold w-1/2 flex gap-2 items-center justify-center"
            >
              <CircleCheckBig />
              Encerrar
            </Button>
            <Button
              size={"2xl"}
              className="flex items-center justify-center font-bold w-1/2 gap-2"
            >
              <Clock2 />
              Iniciar atendimento
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <TicketDetail ticket={ticketData} />
            <AdditionalService />
          </div>
          <PriceHistory />
        </div>
      </div>
    </div>
  );
}
