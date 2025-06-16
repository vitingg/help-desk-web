import { PenLine, Trash } from "lucide-react";
import { Icon } from "../../../shared/components/edit-icon";
import { Table } from "../../../shared/components/table/table";
import { TableBody } from "../../../shared/components/table/table-body";
import { TableCell } from "../../../shared/components/table/table-cell";
import { TableHead } from "../../../shared/components/table/table-head";
import { TableHeader } from "../../../shared/components/table/table-header";
import { TableRow } from "../../../shared/components/table/table-row";

export function Clients() {
  return (
    <>
      <div className="flex pt-14 justify-start">
        <p className="text-blue-dark font-semibold text-xl">Clientes</p>
      </div>
      <div className="pt-6">
        <Table className="table-auto w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead hideOnMobile>Email</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="flex items-center" hasAbbreviation="CS">
                Carlos Silva
              </TableCell>
              <TableCell>carlos.silva@test.com</TableCell>
              <TableCell className="flex gap-2 justify-end">
              <Icon variant="delete"/>
              <Icon variant="edit"/>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
