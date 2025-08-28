import { Button } from "../../../../shared/components/button";
import { Input } from "../../../../shared/components/input";
import { useModal } from "../../../../shared/components/modal/hooks/useModalContext";
import { ModalContent } from "../../../../shared/components/modal/modal-content";
import { ModalFooter } from "../../../../shared/components/modal/modal-footer";
import { ModalHeader } from "../../../../shared/components/modal/modal-header";
import { ModalLayout } from "../../../../shared/components/modal/modal-layout";

export function useEditClient() {
  const { openModal, closeModal } = useModal();

  const handleOpenEditModal = () => {
    openModal(
      <ModalLayout className="">
        <ModalHeader>Cliente</ModalHeader>
        <ModalContent>
          <div className="w-sm space-y-4">
            <Input
              legend="NOME"
              placeholder="Insira seu nome"
              className="font-bold"
            />

            <Input
              legend="E-MAIL"
              placeholder="Seuemail@email.com"
              className="font-bold"
            />
          </div>
        </ModalContent>
        <ModalFooter>
          <Button onClick={closeModal} size={"5xl"}>
            fechar
          </Button>
        </ModalFooter>
      </ModalLayout>
    );
  };

  return { handleOpenEditModal };
}
