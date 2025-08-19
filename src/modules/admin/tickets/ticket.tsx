import { useEffect, useState } from "react";
import { Icon } from "../../../shared/components/edit-icon";
import { Table } from "../../../shared/components/table/table";
import { TableBody } from "../../../shared/components/table/table-body";
import { TableCell } from "../../../shared/components/table/table-cell";
import { TableHead } from "../../../shared/components/table/table-head";
import { TableHeader } from "../../../shared/components/table/table-header";
import { TableRow } from "../../../shared/components/table/table-row";
import { api } from "../../../shared/lib/api";
import { formatDate } from "../../../shared/lib/format-date";
import { Status } from "../../../shared/components/status";
import { StatusTable } from "../../../shared/components/status-table";

interface Client {
  id: number;
  username: string;
}
interface Tech {
  id: number;
  username: string;
}
interface Category {
  id: number;
  name: string;
  basePrice: number;
}
interface Ticket {
  id: number;
  title: string;
  description: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETE";
  clientId: number;
  techId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  client: Client;
  tech: Tech;
  category: Category;
}

export function Ticket() {
  const [data, setData] = useState<Ticket[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchServices() {
      try {
        const response = await api.get("/service", {
          signal: controller.signal,
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(data);
    fetchServices();

    return () => {
      controller.abort();
    };
  }, []);

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
              <TableHead>Título e Serviço</TableHead>
              <TableHead hideOnMobile>Valor total</TableHead>
              <TableHead hideOnMobile>Cliente</TableHead>
              <TableHead hideOnMobile>Técnico</TableHead>
              <TableHead>Status</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((data) => {
              return (
                <TableRow key={data.id}>
                  <TableCell>{formatDate(data.updatedAt)}</TableCell>
                  <TableCell>{data.id}</TableCell>
                  <TableCell className="flex flex-col">
                    <div>{data.title}</div>
                    <div>{data.description}</div>
                  </TableCell>
                  <TableCell>{data.category.basePrice}</TableCell>
                  <TableCell>{data.client.username}</TableCell>
                  <TableCell>{data.tech.username}</TableCell>
                  <TableCell>{StatusTable(data.status)}</TableCell>
                  <TableCell>
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
