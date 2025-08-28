import { Button } from "../../../shared/components/button";
import { Input } from "../../../shared/components/input";
import { useModal } from "../../../shared/components/modal/hooks/useModalContext";
import { ModalContent } from "../../../shared/components/modal/modal-content";
import { ModalFooter } from "../../../shared/components/modal/modal-footer";
import { ModalHeader } from "../../../shared/components/modal/modal-header";
import { ModalLayout } from "../../../shared/components/modal/modal-layout";

export function useEditClient() {
  const { openModal, closeModal } = useModal();

  const handleOpenEditModal = () => {
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

          <Button onClick={closeModal}>fechar</Button>
        </ModalContent>
        <ModalFooter>Salvar</ModalFooter>
      </ModalLayout>
    );
  };

  return { handleOpenEditModal };
}
