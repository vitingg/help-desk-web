import { useForm } from "react-hook-form";
import {
  createServiceSchema,
  type createServiceSchemaData,
} from "../../../../shared/schemas/services/create-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "../../../../shared/components/modal/hooks/useModalContext";
import { ModalLayout } from "../../../../shared/components/modal/modal-layout";
import { ModalContent } from "../../../../shared/components/modal/modal-content";
import { ModalHeader } from "../../../../shared/components/modal/modal-header";
import { Input } from "../../../../shared/components/input";
import { Form } from "../../../../shared/components/form";
import { Button } from "../../../../shared/components/button";

export function useCreateServiceModal({
  onSubmit,
}: {
  onSubmit: (data: createServiceSchemaData) => void;
}) {
  const { openModal, closeModal } = useModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<createServiceSchemaData>({
    resolver: zodResolver(createServiceSchema),
  });

  const nameError = errors.name?.message;
  const basePriceError = errors.basePrice?.message;

  const handleCreateModal = () => {
    openModal(
      <ModalLayout>
        <ModalHeader>Serviço</ModalHeader>
        <ModalContent>
          <Form
            onSubmit={handleSubmit(async (formData) => {
              await onSubmit(formData);
              reset();
              closeModal();
            })}
            className="space-y-4"
          >
            <Input
              legend="TÍTULO"
              placeholder="Nome do serviço"
              className="font-bold"
              {...register("name")}
              isError={!!nameError}
              helperText={nameError}
            />
            <div className="relative">
              <p className="absolute top-4 font-bold">R$</p>
              <Input
                legend="VALOR"
                placeholder="0,00"
                className="pl-6 font-bold"
                type="number"
                {...register("basePrice", { valueAsNumber: true })}
                isError={!!basePriceError}
                helperText={basePriceError}
              />
            </div>
            <Button size={"5xl"} className="font-medium mt-7">
              Salvar
            </Button>
          </Form>
        </ModalContent>
      </ModalLayout>
    );
  };

  return { handleCreateModal };
}
