import { Icon } from "../../../shared/components/edit-icon";
import { Status } from "../../../shared/components/status";
import { Table } from "../../../shared/components/table/table";
import { TableBody } from "../../../shared/components/table/table-body";
import { TableCell } from "../../../shared/components/table/table-cell";
import { TableHead } from "../../../shared/components/table/table-head";
import { TableHeader } from "../../../shared/components/table/table-header";
import { TableRow } from "../../../shared/components/table/table-row";

export function ClientTickets() {
  return (
    <>
      <div className="flex pt-14">
        <p className="text-blue-dark font-semibold text-xl">Chamados</p>
      </div>
      <div className="pt-6">
        <Table className="table-auto w-full">
          <TableHeader>
            <TableRow isBody={false}>
              <TableHead>Atualizado em</TableHead>
              <TableHead hideOnMobile>Id</TableHead>
              <TableHead>Serviço</TableHead>
              <TableHead hideOnMobile>Valor total</TableHead>
              <TableHead hideOnMobile>Técnico</TableHead>
              <TableHead>Status</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>13/04/25 20:56</TableCell>
              <TableCell hideOnMobile className="font-semibold ">
                00003
              </TableCell>
              <TableCell>
                <div className="text-sm font-medium text-gray-200">
                  Recuperação de Dados{" "}
                </div>
              </TableCell>
              <TableCell hideOnMobile>R$ 180,00</TableCell>
              <TableCell hideOnMobile hasAbbreviation="CS">
                Carlos Silva
              </TableCell>
              <TableCell>
                <Status status="Aberto"/>
              </TableCell>
              <TableCell className="flex justify-end items-center">
                <Icon variant="look" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
