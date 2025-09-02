import Skeleton from "react-loading-skeleton";
import { Paragraph } from "./components/paragraph";
import { TicketLayout } from "./ticket-layout";
import type { Ticket } from "../../types/tickets/ticket-response";
import { getInitials } from "../../utils/get-initial-name";
import { formattedPrice } from "../../utils/format-price";

interface TicketDetailProps {
  data: Ticket;
}

export function PriceHistory({ data }: TicketDetailProps) {
  return (
    <TicketLayout className="min-w-sm">
      <div>
        <Paragraph size="xs" className="pb-2 pr-26">
          Técnico responsável
        </Paragraph>
        <div className="flex gap-2 items-center pb-8">
          <div className="w-8 h-8 bg-blue-dark rounded-full text-sm text-gray-600 flex justify-center items-center">
            {getInitials(data.tech.username)}
          </div>
          <div>
            <Paragraph size="sm">{data.tech.username}</Paragraph>
            <Paragraph size="xs">{data.tech.email}</Paragraph>
          </div>
        </div>

        <div className="space-y-1.5">
          <Paragraph size="xs">Valores</Paragraph>
          <span className="flex justify-between items-center text-xs">
            <p>Preço base</p>
            <p>{formattedPrice(data.categories[0].category.basePrice)}</p>
          </span>
          <span className="flex justify-between items-center text-xs">
            <p>Adicionais</p>
            <p>R$ 195,00</p>
          </span>

          <div className="pb-2 border-0 border-b-1 border-b-gray-500" />
          <span className="flex justify-between items-center font-bold text-sm">
            <p>Total</p>
            <p>R$ 295,00</p>
          </span>
        </div>
      </div>
    </TicketLayout>
  );
}

export function PriceHistorySkeleton() {
  return (
    <TicketLayout className="min-w-sm">
      <div>
        <Paragraph size="xs" className="pb-2 pr-26">
          Técnico responsável
        </Paragraph>
        <div className="flex gap-2 items-center pb-8">
          <Skeleton />
          <div>
            <Skeleton />
            <Skeleton />
          </div>
        </div>

        <div className="space-y-1.5">
          <Paragraph size="xs">Valores</Paragraph>
          <span className="flex justify-between items-center text-xs">
            <p>Preço base</p>
            <Skeleton />
          </span>
          <span className="flex justify-between items-center text-xs">
            <p>Adicionais</p>
            <Skeleton />
          </span>

          <div className="pb-2 border-0 border-b-1 border-b-gray-500" />
          <span className="flex justify-between items-center font-bold text-sm">
            <p>Total</p>
            <Skeleton />
          </span>
        </div>
      </div>
    </TicketLayout>
  );
}
