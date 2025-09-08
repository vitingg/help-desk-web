import { useEffect, useState } from "react";
import { HeaderAction } from "../../../shared/components/header-action";
import {
  TicketDetail,
  TicketDetailSkeleton,
} from "../../../shared/components/tickets/ticket-detail";
import {
  PriceHistory,
  PriceHistorySkeleton,
} from "../../../shared/components/tickets/ticket-price-history";
import type { Ticket } from "../../../shared/types/tickets/ticket-response";
import { useParams } from "react-router";
import { api } from "../../../shared/lib/api";

export function ClientDetail() {
  const [data, setData] = useState<Ticket>();

  const { id } = useParams();

  useEffect(() => {
    async function getTicket() {
      try {
        const response = await api.get(`/services/${id}`);
        setData(response.data.tickets);
        console.log(response.data.tickets);
      } catch (error) {
        console.log(error);
      }
    }
    getTicket();
  }, []);

  return (
    <div className="p-14">
      <HeaderAction title="Chamado detalhado" />

      <div className="pt-6 flex gap-2">
        {data ? <TicketDetail data={data} /> : <TicketDetailSkeleton />}
        {data ? <PriceHistory data={data} /> : <PriceHistorySkeleton />}
      </div>
    </div>
  );
}
