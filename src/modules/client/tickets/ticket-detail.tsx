import { HeaderAction } from "../../../shared/components/header-action";
import { TicketDetail } from "../../../shared/components/tickets/ticket-detail";
import { PriceHistory } from "../../../shared/components/tickets/ticket-price-history";

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

export function ClientDetail() {
  return (
    <div className="p-14">
      <HeaderAction title="Chamado detalhado" />

      <div className="pt-6 flex gap-2">
        <TicketDetail ticket={ticketData} />
        <PriceHistory />
      </div>
    </div>
  );
}
