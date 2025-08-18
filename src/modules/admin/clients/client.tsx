import { useCallback, useEffect, useState } from "react";
import { Icon } from "../../../shared/components/edit-icon";
import { Table } from "../../../shared/components/table/table";
import { TableBody } from "../../../shared/components/table/table-body";
import { TableCell } from "../../../shared/components/table/table-cell";
import { TableHead } from "../../../shared/components/table/table-head";
import { TableHeader } from "../../../shared/components/table/table-header";
import { TableRow } from "../../../shared/components/table/table-row";
import { api } from "../../../shared/lib/api";

export function Clients() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchClients() {
      try {
        const response = await api.get("/clients", {
          signal: controller.signal,
        });
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchClients();

    return () => {
      controller.abort();
    };
  }, []);

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
              {data?.map((data) => (
                <TableRow key={data.id}>{data.username}</TableRow>
              ))}
              {data?.map((data) => (
                <TableRow key={data.id}>{data.email}</TableRow>
              ))}

              <TableCell className="flex gap-2 items-center justify-end">
                <Icon variant="delete" />
                <Icon variant="edit" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
