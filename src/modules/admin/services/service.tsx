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
import { Form } from "../../../shared/components/form";
import { useForm } from "react-hook-form";
import {
  createServiceSchema,
  type createServiceSchemaData,
} from "../../../shared/schemas/services/create-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { createService } from "./services/create-service";

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

  async function handleUpdateStatus(id: number): Promise<void> {
    try {
      await api.put(`/categories/toggle/${id}`);

      const response = await api.get("/categories/all-categories");
      setData(response.data.category);
      console.log(`Meu id: ${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  const { register, handleSubmit, reset } = useForm<createServiceSchemaData>({
    resolver: zodResolver(createServiceSchema),
  });
  const handleCreateService = async (formData: createServiceSchemaData) => {
    try {
      await createService(formData);
      console.log("OPA");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenModal = () => {
    openModal(
      <ModalLayout>
        <ModalHeader>Cadastro de serviço</ModalHeader>
        <ModalContent>
          <Form onSubmit={handleSubmit(handleCreateService)}>
            <Input
              legend="TÍTULO"
              placeholder="Nome do serviço"
              className="font-bold"
              {...register("title")}
            />
            <div className="relative">
              <p className="absolute top-4 font-bold">R$</p>
              <Input
                legend="VALOR"
                placeholder="0,00"
                className="pl-6 font-bold"
                {...register("basePrice")}
              />
            </div>
            <Button size={"5xl"} className="font-medium mt-7" type="submit">
              Salvar
            </Button>
          </Form>
        </ModalContent>
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
                  <TableCell hideOnMobile>
                    {formattedPrice(data.basePrice)}
                  </TableCell>
                  <TableCell />
                  <TableCell>{StatusService(data.isActive)}</TableCell>
                  <TableCell className="">
                    <ChangeStatus
                      status={data.isActive}
                      id={data.id}
                      onChangeStatus={handleUpdateStatus}
                    />
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
