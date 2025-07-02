import { Paragraph } from "./components/paragraph";
import { CardBox } from "./components/card-box";
import { TicketLayout } from "./ticket-layout";
import { Status } from "../status";

export function TicketComplete() {
  return (
    <TicketLayout>
      <div className="flex justify-between items-center pb-5">
        <CardBox className="pb-0">
          <Paragraph size="xs">00004</Paragraph>
          <Paragraph size="md">Backup não está funcionando</Paragraph>
        </CardBox>
        <Status status="Aberto" />
      </div>
      <CardBox>
        <Paragraph size="xs">Descrição</Paragraph>
        <Paragraph size="sm">
          O sistema de backup automático parou de funcionar. Última execução
          bem-sucedida foi há uma semana.
        </Paragraph>
      </CardBox>

      <CardBox>
        <Paragraph size="xs">Categoria</Paragraph>
        <Paragraph size="sm">Recuperação de Dados</Paragraph>
      </CardBox>

      <CardBox className="flex">
        <div className="flex flex-col w-1/2">
          <Paragraph size="xs">Criado em</Paragraph>
          <Paragraph size="sm">12/04/25 09:12</Paragraph>
        </div>
        <div className="flex flex-col w-1/2">
          <Paragraph size="xs">Atualizado em</Paragraph>
          <Paragraph size="sm">12/04/25 15:20</Paragraph>
        </div>
      </CardBox>

      <div className="">
        <Paragraph className="pb-2" size="xs">
          Cliente
        </Paragraph>
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 bg-blue-dark rounded-full text-2xs text-gray-600 flex justify-center items-center">
            AC
          </div>
          <Paragraph size="sm">André Costa</Paragraph>
        </div>
      </div>
    </TicketLayout>
  );
}
