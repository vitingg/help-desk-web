import { useEffect, useState } from "react";
import { Button } from "../../../shared/components/button";
import { HeaderAction } from "../../../shared/components/header-action";
import {
  AdditionalService,
  AdditionalServiceSkeleton,
} from "../components/ticket-additional-services";
import {
  TicketDetail,
  TicketDetailSkeleton,
} from "../../../shared/components/tickets/ticket-detail";
import {
  PriceHistory,
  PriceHistorySkeleton,
} from "../../../shared/components/tickets/ticket-price-history";
import { CircleCheckBig, Clock2 } from "lucide-react";
import { useParams } from "react-router";
import type { Ticket } from "../../../shared/types/tickets/ticket-response";
import { api } from "../../../shared/lib/api";

export function TechDetail() {
  const [data, setData] = useState<Ticket>();
  const { id } = useParams();

  async function getTicket() {
    try {
      const response = await api.get(`/services/${id}`);
      setData(response.data.tickets);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTicket();
  }, []);

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
            {data ? <TicketDetail data={data} /> : <TicketDetailSkeleton />}

            {data ? (
              <AdditionalService data={data} onSubmit={getTicket} />
            ) : (
              <AdditionalServiceSkeleton />
            )}
          </div>
          {data ? <PriceHistory data={data} /> : <PriceHistorySkeleton />}
        </div>
      </div>
    </div>
  );
}
