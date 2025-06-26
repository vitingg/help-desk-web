import { Input } from "../../../shared/components/input";
import { CardBox } from "../../../shared/components/tickets/card-box";
import { Paragraph } from "../../../shared/components/tickets/paragraph";

export function CreateTicket() {
  return (
    <>
      <div className="p-14">
        <p className="text-blue-dark font-semibold text-xl">Clientes</p>
      </div>
      <div className="pt-6 flex gap-4 items-start">
        <div className="border p-8 rounded-2xl border-gray-500">
          <CardBox className="pt-6">
            <Paragraph size="md">Informações</Paragraph>
            <Paragraph size="xs">
              Configure os dias e horários em que você está disponível para
              atender chamados
            </Paragraph>
          </CardBox>
          <div className="space-y-2">
            <Input legend="TÍTULO" placeholder="Backup não está funcionando" />
            <Input
              className="pb-24"
              legend="DESCRIÇÃO"
              placeholder={`O sistema de backup automático parou de funcionar. ${(
                <br />
              )} Última execução bem-sucedida foi há uma semana.`}
            />
            {/* SELECT COMPONENT */}
          </div>
        </div>
        <div className="border p-8 rounded-2xl border-gray-500"></div>
      </div>
    </>
  );
}
