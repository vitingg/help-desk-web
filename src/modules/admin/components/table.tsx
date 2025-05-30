import { Button } from "../../../shared/components/button";
import { PenLine } from "lucide-react";
import { TableWorking } from "../../../shared/components/table/index";

export function TicketTable() {
  return (
    <table className="border rounded-md border-gray-500">
      <thead className="">
        <tr className="">
          <th className="px-4 py-3">Atualizado em</th>
          <th className="px-4 py-3">Id</th>
          <th className="px-4 py-3">Título e Serviço</th>
          <th className="px-4 py-3">Valor total</th>
          <th className="px-4 py-3">Cliente</th>
          <th className="px-4 py-3">Técnico</th>
          <th className="px-4 py-3">Status</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border border-gray-500">
          <td className="px-6 py-2">13/04/25 20:56</td>

          <td className="px-6 py-2">00003</td>

          <td className="px-6 py-2">
            <p className="text-sm">Rede lenta</p>
            <p className="text-xs">Instalação de Rede </p>
          </td>

          <td className="px-6 py-2">R$ 180,00</td>

          <td className="px-6 py-2 gap-2">
            <div className="flex items-center justify-center gap-2">
              <div className="flex  items-center justify-center gap-2">
                <p className="bg-blue-dark rounded-full w-8 h-8 text-white flex items-center justify-center">
                  AC
                </p>
              </div>
              <p>André Costa</p>
            </div>
          </td>

          <td className="px-6 py-2 gap-2">
            <div className="flex items-center justify-center gap-2">
              <div className="flex  items-center justify-center gap-2">
                <p className="bg-blue-dark rounded-full w-8 h-8 text-white flex items-center justify-center">
                  CS
                </p>
              </div>
              <p>Carlos Silva</p>
            </div>
          </td>

          <td className="px-6 py-2 gap-2">Aberto</td>

          <td className="px-6 py-2 gap-2">
            <Button
              size="4xs"
              variant={"secondary"}
              className="flex items-center justify-center"
            >
              <PenLine width={"14"} height={"14"} />
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
