import { Clock2, CircleCheckBig, CircleHelp } from "lucide-react";
import { HeaderAction } from "../../../shared/components/header-action";
import { Paragraph } from "./components/paragraph";
import { CardBox } from "./components/card-box";

export function Detail() {
  return (
    <div className="md:pr-30 md:pl-30 pr-6 pl-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-14">
        <HeaderAction title="Chamado detalhado" />
        <div className="font-semibold text-gray-300 flex gap-2 ">
          <div className="p-4 flex gap-2 flex-1 md:flex-none bg-gray-500  rounded-md">
            <Clock2 />
            <p className="text-gray-200">Em atendimento</p>
          </div>
          <div className="p-4 flex gap-2 flex-1 md:flex-none bg-gray-500 rounded-md">
            <CircleCheckBig />
            <p className="text-gray-200">Encerrado</p>
          </div>
        </div>
      </div>

      <div className="pt-6 flex flex-col md:flex-row md:items-start gap-6">
        <div className="border border-gray-500 flex-1 md:flex-none md:max-w-md rounded-md p-6">
          <div className="flex justify-between items-center pb-5">
            <div className="  ">
              <p className="text-xs text-gray-300">00004</p>
              <p className="text-gray-200 text-md">
                Backup não está funcionando{" "}
              </p>
            </div>
            <div className="flex">
              <p className="flex text-sm items-center gap-1.5 bg-feedback-openBackground p-1.5 rounded-3xl text-feedback-open font-semibold">
                <CircleHelp height={18} width={18} /> Aberto
              </p>
            </div>
          </div>
          <CardBox>
            <Paragraph size="extraSmall">Descrição</Paragraph>
            <Paragraph size="small">
              O sistema de backup automático parou de funcionar. Última execução
              bem-sucedida foi há uma semana.
            </Paragraph>
          </CardBox>

          <CardBox>
            <Paragraph size="extraSmall">Categoria</Paragraph>
            <Paragraph size="small">Recuperação de Dados</Paragraph>
          </CardBox>

          <CardBox className="flex">
            <div className="flex flex-col w-1/2">
              <Paragraph size="extraSmall">Criado em</Paragraph>
              <Paragraph size="small">12/04/25 09:12</Paragraph>
            </div>
            <div className="flex flex-col w-1/2">
              <Paragraph size="extraSmall">Atualizado em</Paragraph>
              <Paragraph size="small">12/04/25 15:20</Paragraph>
            </div>
          </CardBox>

          <div className="">
            <Paragraph className="pb-2" size="extraSmall">
              Cliente
            </Paragraph>
            <div className="flex gap-2 items-center">
              <div className="w-6 h-6 bg-blue-dark rounded-full text-2xs text-gray-600 flex justify-center items-center">
                AC
              </div>
              <Paragraph size="small">André Costa</Paragraph>
            </div>
          </div>
        </div>

        <div className="border border-gray-500 rounded-md flex-1 p-6 md:max-w-80">
          <div className="space-y-2 pb-6">
            <p className="text-xs text-gray-400 font-bold">
              Técnico responsável
            </p>
            <div className="flex items-center gap-2">
              <div className="w-9 gap-0.5 h-9 rounded-full bg-blue-dark flex justify-center items-center text-gray-600 text-md">
                <p>C</p>
                <p>S</p>
              </div>
              <span className="flex flex-col">
                <p className="text-sm text-gray-200">Carlos Silva</p>
                <p className="text-xs text-gray-300">carlos.silva@test.com</p>
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-xs font-bold pb-2">Valores</p>
          <span className="text-gray-200 text-xs flex justify-between items-center pb-6">
            <p>Preço base</p>
            <p>R$ 200,00</p>
          </span>
          <p className="text-gray-400 text-xs font-bold pb-2">Adicionais</p>
          <span className="text-gray-200 text-xs flex justify-between items-center">
            <p>Assinatura de backup</p>
            <p>R$ 120,00</p>
          </span>
          <span className="text-gray-200 text-xs flex justify-between items-center pb-6">
            <p>Formatação do PC</p>
            <p>R$ 75,00</p>
          </span>
          <hr className="border-b-1 border-gray-500 mb-4" />
          <span className="flex justify-between">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">R$395,00</p>
          </span>
        </div>
      </div>
    </div>
  );
}
