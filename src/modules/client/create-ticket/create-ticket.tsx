import { Input } from "../../../shared/components/input";
import { CardBox } from "../../../shared/components/tickets/components/card-box";
import { Paragraph } from "../../../shared/components/tickets/components/paragraph";
import { Select } from "../../../shared/components/select";
import { useState } from "react";

const problemsOptions = [
  { value: "recuperação", label: "Recuperação de Dados" },
  { value: "assinatura", label: "Assinatura de Backup" },
  { value: "instalação", label: "Instalação de Rede" },
];

export function CreateTicket() {
  const [selectProblems, setSelectProblems] = useState<string | null>(null);
  return (
    <>
      <div className="pt-14">
        <p className="text-blue-dark font-semibold text-xl">Clientes</p>
      </div>
      <div className="pt-6 flex gap-4 flex-col md:flex-row items-start">
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
              className="h-24 flex items-start justify-start"
              legend="DESCRIÇÃO"
              placeholder={`O sistema de backup automático parou de funcionar. Última execução bem-sucedida foi há uma semana.`}
            />
            <CardBox className="space-y-1">
              <p className="uppercase text-2xs text-gray-300">
                Categoria de serviço
              </p>
              <Select
                placeholder="Selecione um problema..."
                options={problemsOptions}
                value={selectProblems}
                onChange={(value) => setSelectProblems(value)}
              />
            </CardBox>
          </div>
        </div>
        <div className="border p-8 rounded-2xl border-gray-500"></div>
      </div>
    </>
  );
}
