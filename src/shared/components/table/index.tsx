import { Table } from "./table";
import { TableBody } from "./table-body";
import { TableCell } from "./table-cell";
import { TableHead } from "./table-head";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";
import { Icon } from "../edit-icon";

export function TableLayout() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Victor</TableCell>
          <TableCell>
            <Icon variant="edit"/>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
