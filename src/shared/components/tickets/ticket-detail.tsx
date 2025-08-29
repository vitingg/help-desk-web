import { Paragraph } from "./components/paragraph";
import { CardBox } from "./components/card-box";
import { TicketLayout } from "./ticket-layout";
import { StatusTicket } from "../table/components/status-ticket";
import { getInitials } from "../../utils/get-initial-name";
import { formattedDate } from "../../utils/format-date";

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

type TicketStatus = "PENDING" | "IN_PROGRESS" | "COMPLETE";

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

interface TicketDetailProps {
  data: Ticket;
}

export function TicketDetail({ data }: TicketDetailProps) {
  return (
    <TicketLayout>
      <div className="flex justify-between items-center pb-5">
        <CardBox className="pb-0 pr-30">
          <Paragraph size="xs">{data.id}</Paragraph>
          <Paragraph size="md">{data.title}</Paragraph>
        </CardBox>
        {StatusTicket(data.status)}
      </div>
      <CardBox>
        <Paragraph size="xs">Descrição</Paragraph>
        <Paragraph size="sm">{data.description}</Paragraph>
      </CardBox>

      <CardBox>
        <Paragraph size="xs">Categoria</Paragraph>
        <Paragraph size="sm">
          <p>categoria ai hein</p>
        </Paragraph>
      </CardBox>

      <CardBox className="flex">
        <div className="flex flex-col w-1/2">
          <Paragraph size="xs">Criado em</Paragraph>
          <Paragraph size="sm">{formattedDate(data.createdAt)}</Paragraph>
        </div>
        <div className="flex flex-col w-1/2">
          <Paragraph size="xs">Atualizado em</Paragraph>
          <Paragraph size="sm">{formattedDate(data.updatedAt)}</Paragraph>
        </div>
      </CardBox>

      <div className="">
        <Paragraph className="pb-2" size="xs">
          Cliente
        </Paragraph>
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 bg-blue-dark rounded-full text-2xs text-gray-600 flex justify-center items-center">
            {getInitials(data.client.username)}
          </div>
          <Paragraph size="sm">{data.client.username}</Paragraph>
        </div>
      </div>
    </TicketLayout>
  );
}
