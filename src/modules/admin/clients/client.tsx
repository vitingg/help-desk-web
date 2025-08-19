import { useEffect, useState } from "react";
import { Icon } from "../../../shared/components/edit-icon";
import { Table } from "../../../shared/components/table/table";
import { TableBody } from "../../../shared/components/table/table-body";
import { TableCell } from "../../../shared/components/table/table-cell";
import { TableHead } from "../../../shared/components/table/table-head";
import { TableHeader } from "../../../shared/components/table/table-header";
import { TableRow } from "../../../shared/components/table/table-row";
import { api } from "../../../shared/lib/api";

type GetClientsType = {
  id: number;
  username: string;
  email: string;
};

export function Clients() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchClients() {
      try {
        const response = await api.get("/clients", {
          signal: controller.signal,
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(data);
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
            {data?.map((data: GetClientsType) => {
              return (
                <TableRow key={data.id}>
                  <TableCell>{data.username}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell className="flex gap-2 items-center justify-end">
                    <Icon variant="delete" />
                    <Icon variant="edit" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
