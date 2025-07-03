import { Input } from "../../../shared/components/input";
import { CardBox } from "../../../shared/components/tickets/components/card-box";
import { Paragraph } from "../../../shared/components/tickets/components/paragraph";
import { Select } from "../../../shared/components/select";
import { useState } from "react";
import { Button } from "../../../shared/components/button";

const problemsOptions = [
  { value: "recuperação", label: "Recuperação de Dados" },
  { value: "assinatura", label: "Assinatura de Backup" },
  { value: "instalação", label: "Instalação de Rede" },
];

export function CreateTicket() {
  const [selectProblems, setSelectProblems] = useState<string | null>(null);
  return (
    <>
      <div className="flex justify-center">
        <div className="pt-14">
          <span>
            <p className="text-blue-dark font-semibold text-xl">Clientes</p>
          </span>
          <div className="pt-6 flex gap-4 flex-col md:flex-row items-start">
            <div className="border p-8 rounded-2xl border-gray-500 w-full md:w-[32rem]">
              <CardBox className="pt-6">
                <Paragraph size="md">Informações</Paragraph>
                <Paragraph size="xs">
                  Configure os dias e horários em que você está disponível para
                  atender chamados
                </Paragraph>
              </CardBox>
              <div className="space-y-2">
                <Input
                  legend="TÍTULO"
                  placeholder="Digite um título para o chamado"
                />
                <Input
                  className="pb-24 flex items-start justify-start"
                  legend="DESCRIÇÃO"
                  placeholder={`Descreva o que está acontecendo`}
                />
                <CardBox className="space-y-1">
                  <p className="uppercase text-2xs text-gray-300">
                    Categoria de serviço
                  </p>
                  <Select
                    placeholder="Selecione a categoria de atendimento"
                    options={problemsOptions}
                    value={selectProblems}
                    onChange={(value) => setSelectProblems(value)}
                  />
                </CardBox>
              </div>
            </div>
            <div className="border p-8 rounded-2xl border-gray-500 w-full md:w-[20rem]">
              <CardBox>
                <Paragraph size="md">Resumo</Paragraph>
                <Paragraph size="xs" className="text-gray-300">
                  Valores e detalhes
                </Paragraph>
              </CardBox>
              <CardBox>
                <Paragraph size="xs">Categoria de serviço</Paragraph>
                <Paragraph size="sm" className="font-bold">
                  Erro de rede
                </Paragraph>
              </CardBox>
              <CardBox className="pb-0">
                <Paragraph size="xs">Custo inicial</Paragraph>
                <span className="text-gray-200 font-bold text-xs flex items-baseline-last gap-1">
                  R$ <p className="text-lg font-bold">200,00</p>
                </span>
              </CardBox>
              <Paragraph size="xs" className="py-6">
                O chamado será automaticamente atribuído a um técnico disponível
              </Paragraph>
              <Button size={"4xl"}>Criar chamado</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
