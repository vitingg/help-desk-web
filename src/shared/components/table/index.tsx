import { Table } from "./table";
import { TableBody } from "./table-body";
import { TableCell } from "./table-cell";
import { TableHead } from "./table-head";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";


export function TableWorking(){
  return (
    <Table>
      <TableHeader>
        <TableRow>
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
        <TableCell>Oi</TableCell>
        <TableCell>Oi</TableCell>
        <TableCell>Oi</TableCell>
        <TableCell>Oi</TableCell>
        <TableCell>Oi</TableCell>
        <TableCell>Oi</TableCell>
        <TableCell>Oi</TableCell>
      </TableBody>
    </Table>
  )
}