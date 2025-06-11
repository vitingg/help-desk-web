import { TableLayout } from "../../../shared/components/table";

export function Ticket() {
  return (
    <>
      <div className="flex pt-14">
        <p className="text-blue-dark font-semibold text-xl">Chamados</p>
      </div>
      <div className="pt-6">
        <TableLayout />
      </div>
    </>
  );
}
