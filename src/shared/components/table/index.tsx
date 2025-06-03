import { Table } from "./table";
import { TableBody } from "./table-body";
import { TableCell } from "./table-cell";
import { TableHead } from "./table-head";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";

export function TableWorking() {
  return (
    <Table>
      <TableHeader>
        <TableRow isBody={false}>
          <TableHead>Atualizado em</TableHead>
          <TableHead hideOnMobile>Id</TableHead>
          <TableHead>Título e Serviço</TableHead>
          <TableHead hideOnMobile>Valor total</TableHead>
          <TableHead hideOnMobile>Cliente</TableHead>
          <TableHead hideOnMobile>Técnico</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>13/04/25 20:56</TableCell>
          <TableCell hideOnMobile className="font-semibold ">00003</TableCell>
          <TableCell>
            <div className="text-sm font-semibold text-gray-200">
              Backup não está funcionando
            </div>
            <div className="text-xs text-gray-200">Recuperação de Dados </div>
          </TableCell>
          <TableCell hideOnMobile>R$ 180,00</TableCell>
          <TableCell hideOnMobile hasAbbreviation="AC">André Costa</TableCell>
          <TableCell hideOnMobile hasAbbreviation="CS">Carlos Silva</TableCell>
          <TableCell status="Aberto" />
        </TableRow>
      </TableBody>
    </Table>
  );
}
