import { type ReactNode } from "react";
import { CircleUser, LogOut } from "lucide-react";
import { useModal } from "../../modal/hooks/useModalContext";
import { ModalLayout } from "../../modal/modal-layout";
import { ModalHeader } from "../../modal/modal-header";
import { ModalContent } from "../../modal/modal-content";
import { Input } from "../../input";
import { ModalFooter } from "../../modal/modal-footer";

type SidebarModal = {
  modalTitle: "OPÇÕES" | "MENU";
  children?: ReactNode;
  profile?: boolean;
  width: "profile" | "sidebar";
};

const widthClasses = {
  profile: "w-[12.375rem] h-[8.875rem]",
  sidebar: "w-[21.75rem]",
};

export function SidebarModal({ modalTitle, children, width }: SidebarModal) {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(
      <ModalLayout>
        <ModalHeader>Perfil</ModalHeader>
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
    <div
      className={`bg-gray-100 text-gray-600 rounded-xl ${widthClasses[width]}`}
    >
      <p className="text-2xs text-gray-400 font-bold pt-4 pl-5 pb-4">
        {modalTitle}
      </p>
      {modalTitle === "OPÇÕES" && (
        <div className="p-5 pt-0 flex flex-col gap-3">
          <div className="flex gap-2 items-center" onClick={handleOpenModal}>
            <CircleUser width={20} /> Perfil
          </div>
          <div className="flex gap-2 items-center text-feedback-danger">
            <LogOut width={20} /> Sair
          </div>
        </div>
      )}

      <div className="p-5 pt-0">{children}</div>
    </div>
  );
}
