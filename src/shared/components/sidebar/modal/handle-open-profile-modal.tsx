import { Trash, Upload } from "lucide-react";
import { ModalContent } from "../../modal/modal-content";
import { ModalHeader } from "../../modal/modal-header";
import { ModalLayout } from "../../modal/modal-layout";
import { Input } from "../../input";
import { Button } from "../../button";
import { ModalFooter } from "../../modal/modal-footer";
import { useModal } from "../../modal/hooks/useModalContext";

export function useHandleOpenProfileModal() {
  const { openModal } = useModal();



  const openHandleOpenProfileModal = () => {
    openModal(
      <ModalLayout>
        <ModalHeader>Perfil</ModalHeader>
        <ModalContent>
          {/* Responsável pela foto/ upload de foto*/}
          <span className="flex gap-2">
            <div className=" flex items-center justify-center border-black">
              <img src="" alt="" />
              <p className="w-12 h-12 bg-black rounded-full"></p>
            </div>
            <div className="flex items-center gap-4">
              <input type="file" id="file" className="hidden" />
              <label
                htmlFor="file"
                className="cursor-pointer bg-gray-500 text-black px-3 py-2 rounded-lg hover:bg-gray-400 "
              >
                <Upload
                  width={16}
                  height={16}
                  className="inline mr-2 font-bold"
                />
                Nova imagem
              </label>
              <button className="px-3 py-3 items-center justify-center p-4 rounded-lg text-red-600 bg-gray-500 hover:bg-gray-400 hover:text-red-700">
                <Trash height={16} width={16} />
              </button>
            </div>
          </span>
          {/* Até aqui */}
        </ModalContent>

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
  return { openHandleOpenProfileModal };
}
