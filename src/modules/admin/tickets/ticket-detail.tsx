import { Clock2, CircleCheckBig } from "lucide-react";
import { HeaderAction } from "../../../shared/components/header-action";

import { TicketDetail } from "../../../shared/components/tickets/ticket-detail";

export function AdminDetail() {
  return (
    <div className="flex items-center justify-center">
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
          <TicketDetail />

          <div className="border border-gray-500 rounded-md flex-1 p-6 md:min-w-80">
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
    </div>
  );
}
