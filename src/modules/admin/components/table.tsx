import { Button } from "../../../shared/components/button";
import { PenLine } from "lucide-react";
import { TableWorking } from "../../../shared/components/table/index";
import { CircleHelp } from "lucide-react";

export function TicketTable() {
  return <TableWorking />;
}
<table className="border rounded-md border-gray-500">
  <thead className="">
    <tr className="">
      <th className="px-4 py-3">Atualizado em</th>
    </tr>
  </thead>

  <tbody>
    <tr className="border border-gray-500">
      <td className="px-6 py-2">13/04/25 20:56</td>

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

      <td className="px-6 py-2">
        <div className="p-1 gap-1 flex items-center justify-center bg-feedback-openBackground text-feedback-open rounded-2xl">
          <CircleHelp width={"16"} height={"16"} />
          <p className="text-xs font-semibold">Aberto</p>
        </div>
      </td>

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
</table>;
