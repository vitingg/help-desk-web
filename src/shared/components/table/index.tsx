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
        <TableRow isBody={false} >
          <TableHead>Atualizado em</TableHead>
          <TableHead>Id</TableHead>
          <TableHead>Título e Serviço</TableHead>
          <TableHead>Valor total</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Técnico</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>13/04/25 20:56</TableCell>
          <TableCell>00003</TableCell>
          <TableCell>Rede lenta, Instalação de Rede</TableCell>
          <TableCell>R$ 180,00</TableCell>
          <TableCell hasAbbreviation="AC">André Costa</TableCell>
          <TableCell hasAbbreviation="CS">Carlos Silva</TableCell>
          <TableCell status="Aberto" />
        </TableRow>
      </TableBody>
    </Table>
  );
}
