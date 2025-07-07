import { Paragraph } from "./components/paragraph";
import { CardBox } from "./components/card-box";
import { TicketLayout } from "./ticket-layout";
import { Status } from "../status";

type StatusType = "Aberto" | "Em Atendimento" | "Fechado";

type TicketDetailProps = {
  ticket: {
    id: string;
    title: string;
    status: StatusType;
    description: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    client: {
      name: string;
      initials: string;
    };
  };
};

export function TicketDetail({ ticket }: TicketDetailProps) {
  return (
    <TicketLayout>
      <div className="flex justify-between items-center pb-5">
        <CardBox className="pb-0 pr-30">
          <Paragraph size="xs">{ticket.id}</Paragraph>
          <Paragraph size="md">{ticket.title}</Paragraph>
        </CardBox>
        <Status status={ticket.status} />
      </div>
      <CardBox>
        <Paragraph size="xs">Descrição</Paragraph>
        <Paragraph size="sm">{ticket.description}</Paragraph>
      </CardBox>

      <CardBox>
        <Paragraph size="xs">Categoria</Paragraph>
        <Paragraph size="sm">{ticket.category}</Paragraph>
      </CardBox>

      <CardBox className="flex">
        <div className="flex flex-col w-1/2">
          <Paragraph size="xs">Criado em</Paragraph>
          <Paragraph size="sm">{ticket.createdAt}</Paragraph>
        </div>
        <div className="flex flex-col w-1/2">
          <Paragraph size="xs">Atualizado em</Paragraph>
          <Paragraph size="sm">{ticket.updatedAt}</Paragraph>
        </div>
      </CardBox>

      <div className="">
        <Paragraph className="pb-2" size="xs">
          Cliente
        </Paragraph>
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 bg-blue-dark rounded-full text-2xs text-gray-600 flex justify-center items-center">
            {ticket.client.initials}
          </div>
          <Paragraph size="sm">{ticket.client.name}</Paragraph>
        </div>
      </div>
    </TicketLayout>
  );
}
