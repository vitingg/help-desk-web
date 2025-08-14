import { type ReactNode } from "react";
import { CircleUser, LogOut } from "lucide-react";
import { useModal } from "../../modal/hooks/useModalContext";
import { ModalLayout } from "../../modal/modal-layout";
import { ModalHeader } from "../../modal/modal-header";
import { ModalContent } from "../../modal/modal-content";
import { Input } from "../../input";
import { ModalFooter } from "../../modal/modal-footer";
import { Button } from "../../button";
import { CircleAlert, Upload, Trash } from "lucide-react";

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
  const { openModal, closeModal } = useModal();

  const handleOpenModal = () => {
    openModal(
      <ModalLayout>
        <ModalHeader>Editar perfil</ModalHeader>
        {/* Responsável pela foto/ upload de foto*/}
        <span className="flex ">
          <div className="rounded-full w-12 h-12 flex items-center justify-center border-black">
            <img src="" alt="" />
            <p>p</p>
          </div>
          <div className="flex items-center gap-4">
            <input type="file" id="file" className="hidden" />
            <label
              htmlFor="file"
              className="cursor-pointer bg-gray-500 text-black px-4 py-3 rounded-lg hover:bg-gray-400 "
            >
              <Upload width={16} height={16} className="inline mr-2" />
              Nova imagem
            </label>
            <button className="px-4 py-4 items-center justify-center p-4 rounded-lg text-red-600 bg-gray-500 hover:bg-gray-400 hover:text-red-700">
              <Trash height={16} width={16} />
            </button>
          </div>
        </span>
        {/* Até aqui */}
        <ModalContent>
          <Input
            legend="NOME"
            placeholder="Insira seu nome"
            className="font-bold"
          />

          <Input
            legend="E-MAIL"
            placeholder="seu.email@email.com"
            className="font-bold"
          />

          <div className="flex justify-between items-center">
            <Input
              legend="SENHA"
              placeholder="********"
              className="font-bold"
              type="password"
              disabled
            />
            <Button>Alterar</Button>
          </div>
        </ModalContent>
        <ModalFooter>Salvar</ModalFooter>
      </ModalLayout>
    );
  };
  const handleLeaveAccount = () => {
    openModal(
      <ModalLayout>
        <ModalContent>
          <p className="flex items-center justify-center text-red-600 ">
            <CircleAlert width={128} height={128} />
          </p>
          <p className="text-lg font-bold">Você tem certeza que deseja sair?</p>
          <div className="flex gap-2">
            <Button variant={"primary"} size={"2xl"} onClick={closeModal}>
              Cancelar
            </Button>
            <Button variant={"primary"} size={"2xl"} className="bg-red-600">
              Sair
            </Button>
          </div>
        </ModalContent>
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
          <div
            className="flex gap-2 items-center text-feedback-danger"
            onClick={handleLeaveAccount}
          >
            <LogOut width={20} /> Sair
          </div>
        </div>
      )}

      <div className="p-5 pt-0">{children}</div>
    </div>
  );
}
