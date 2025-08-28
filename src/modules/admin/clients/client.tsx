import { useEffect, useState } from "react";
import { Icon } from "../../../shared/components/edit-icon";
import { Table } from "../../../shared/components/table/table";
import { TableBody } from "../../../shared/components/table/table-body";
import { TableCell } from "../../../shared/components/table/table-cell";
import { TableHead } from "../../../shared/components/table/table-head";
import { TableHeader } from "../../../shared/components/table/table-header";
import { TableRow } from "../../../shared/components/table/table-row";
import { api } from "../../../shared/lib/api";
import { getInitials } from "../../../shared/utils/get-initial-name";
import { useDeleteCliente } from "./modals/delete-client";
import { useEditClient } from "./modals/edit-client";

type GetClientsType = {
  id: number;
  username: string;
  email: string;
  profilePicture: string;
};

export function Clients() {
  const [data, setData] = useState([]);
  const { handleOpenDeleteModal } = useDeleteCliente({
    onDeleted: fetchClients,
  });
  const { handleOpenEditModal } = useEditClient();

  async function fetchClients() {
    try {
      const response = await api.get("/clients");
      setData(response.data.clients);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const controller = new AbortController();

    async function fetchClients() {
      try {
        const response = await api.get("/clients", {
          signal: controller.signal,
        });
        setData(response.data.clients);
        // console.log(response.data.clients);
      } catch (error) {
        console.log(error);
      }
    }
    // console.log(data);
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
                  <TableCell
                    hasAbbreviation={
                      data?.profilePicture
                        ? data.profilePicture
                        : getInitials(data.username)
                    }
                  >
                    {data.username}
                  </TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell className="flex gap-2 items-center justify-end">
                    <Icon
                      variant="delete"
                      onClick={() =>
                        handleOpenDeleteModal(data.id, data.username)
                      }
                    />
                    <Icon
                      variant="edit"
                      onClick={() => handleOpenEditModal()}
                    />
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
