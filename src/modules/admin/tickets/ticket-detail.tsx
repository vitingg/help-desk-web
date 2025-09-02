import { Clock2, CircleCheckBig } from "lucide-react";
import { HeaderAction } from "../../../shared/components/header-action";
import { useParams } from "react-router";
import { TicketDetail } from "../../../shared/components/tickets/ticket-detail";
import { PriceHistory } from "../../../shared/components/tickets/ticket-price-history";
import { useEffect, useState } from "react";
import { api } from "../../../shared/lib/api";
import { TicketDetailSkeleton } from "../../../shared/components/tickets/ticket-detail";

type TicketStatus = "PENDING" | "IN_PROGRESS" | "COMPLETE";
interface Category {
  id: number;
  name: string;
  basePrice: number;
}
interface Client {
  id: number;
  username: string;
}
interface Tech {
  id: number;
  username: string;
}
interface Ticket {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
  clientId: number;
  techId: number;
  categoryId: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  client: Client;
  tech: Tech;
  category: Category;
}

export function AdminDetail() {
  const [data, setData] = useState<Ticket>();

  const { ticketId } = useParams();

  useEffect(() => {
    async function getTicket() {
      try {
        const response = await api.get(`/services/${ticketId}`);
        setData(response.data.tickets);
        console.log(response.data.tickets);
      } catch (error) {
        console.log(error);
      }
    }
    getTicket();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div>
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

        <div className="pt-6 flex flex-col md:flex-row md:items-start gap-6 ">
          {data ? <TicketDetail data={data} /> : <TicketDetailSkeleton />}
          <PriceHistory />
        </div>
      </div>
    </div>
  );
}
