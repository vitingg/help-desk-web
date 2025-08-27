import { Plus } from "lucide-react";
import { Button } from "../../../shared/components/button";
import { Input } from "../../../shared/components/input";
import { ModalLayout } from "../../../shared/components/modal/modal-layout";
import { ModalHeader } from "../../../shared/components/modal/modal-header";
import { ModalContent } from "../../../shared/components/modal/modal-content";
import { ModalFooter } from "../../../shared/components/modal/modal-footer";
import { useModal } from "../../../shared/components/modal/hooks/useModalContext";
import { Table } from "../../../shared/components/table/table";
import { TableHeader } from "../../../shared/components/table/table-header";
import { TableRow } from "../../../shared/components/table/table-row";
import { TableHead } from "../../../shared/components/table/table-head";
import { TableBody } from "../../../shared/components/table/table-body";
import { TableCell } from "../../../shared/components/table/table-cell";
import { Icon } from "../../../shared/components/edit-icon";
import { StatusService } from "../../../shared/components/table/components/status-service";
import { useEffect, useState } from "react";
import { api } from "../../../shared/lib/api";
import { ChangeStatus } from "./components/change-status";
import { formattedPrice } from "../../../shared/utils/format-price";

type GetAllCategories = {
  id: number;
  name: string;
  basePrice: number;
  isActive: boolean;
};

export function Service() {
  const { openModal } = useModal();
  const [data, setData] = useState<GetAllCategories[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchServices() {
      try {
        const response = await api.get("/categories/all-categories", {
          signal: controller.signal,
        });
        setData(response.data.category);
        // console.log(response.data.category);
      } catch (error) {
        console.log(error);
      }
    }
    fetchServices();

    return () => {
      controller.abort();
    };
  }, []);

  const handleOpenModal = () => {
    openModal(
      <ModalLayout>
        <ModalHeader>Cadastro de serviço</ModalHeader>
        <ModalContent>
          <Input
            legend="TÍTULO"
            placeholder="Nome do serviço"
            className="font-bold"
          />
          <div className="relative">
            <p className="absolute top-4 font-bold">R$</p>
            <Input
              legend="VALOR"
              placeholder="0,00"
              className="pl-6 font-bold"
            />
          </div>
        </ModalContent>
        <ModalFooter>Salvar</ModalFooter>
      </ModalLayout>
    );
  };

  return (
    <>
      <div className="flex pt-14 justify-between">
        <p className="text-blue-dark font-semibold text-xl">Serviços</p>
        <Button
          size={"lg"}
          className="flex items-center justify-center gap-2"
          onClick={handleOpenModal}
        >
          <Plus />
          <span className="hidden md:table-cell">Novo</span>
        </Button>
      </div>
      <div className="pt-6">
        <Table className="table-auto w-full">
          <TableHeader>
            <TableRow isBody={false}>
              <TableHead>Título</TableHead>
              <TableHead hideOnMobile>Valor</TableHead>
              <TableHead></TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((data) => {
              return (
                <TableRow key={data.id}>
                  <TableCell className="font-bold">{data.name}</TableCell>
                  <TableCell>{formattedPrice(data.basePrice)}</TableCell>
                  <TableCell />
                  <TableCell>{StatusService(data.isActive)}</TableCell>
                  <TableCell className="">
                    {ChangeStatus(data.isActive)}
                  </TableCell>
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
