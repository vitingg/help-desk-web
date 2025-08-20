import { Button } from "../../../shared/components/button";
import { Plus } from "lucide-react";
import { TableCell } from "../../../shared/components/table/table-cell";
import { TableHead } from "../../../shared/components/table/table-head";
import { TableRow } from "../../../shared/components/table/table-row";
import { TableHeader } from "../../../shared/components/table/table-header";
import { Table } from "../../../shared/components/table/table";
import { TableBody } from "../../../shared/components/table/table-body";
import { Icon } from "../../../shared/components/edit-icon";
import { useNavigate } from "react-router";
import { getInitials } from "../../../shared/lib/get-initial-name";
import { useEffect, useState } from "react";
import { api } from "../../../shared/lib/api";

type GetTechsType = {
  id: number;
  email: string;
  username: string;
  initial: string;
};

export function Technicians() {
  const [data, setData] = useState<GetTechsType[]>([]);

  // Precisa editar isso ai, so copiei e colei
  useEffect(() => {
    const controller = new AbortController();

    async function fetchTechs() {
      try {
        const response = await api.get("/techs", {
          signal: controller.signal,
        });
        setData(response.data);

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(data);
    fetchTechs();

    return () => {
      controller.abort();
    };
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="flex pt-14 justify-between">
        <p className="text-blue-dark font-semibold text-xl">Técnicos</p>
        <Button
          onClick={() => navigate("/dashboard/admin/technicians/form")}
          size={"md"}
          className="flex items-center justify-center gap-2"
        >
          <Plus width={18} height={18} />
          <span className="hidden md:table-cell">Novo</span>
        </Button>
      </div>
      <div className="pt-6">
        <Table className="table-auto w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead hideOnMobile>Email</TableHead>
              <TableHead>Disponibilidade</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((data) => {
              return (
                <TableRow key={data.id}>
                  <TableCell
                    className="flex items-center"
                    hasAbbreviation={getInitials(data.username)}
                  >
                    {data.username}
                  </TableCell>
                  <TableCell hideOnMobile>{data.email}</TableCell>
                  <TableCell>Sequencia de horários disponíveis</TableCell>
                  <TableCell className="flex justify-end">
                    <Icon variant="edit" to="admin/technicians/profile" />
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
