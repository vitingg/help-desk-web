import { CircleAlert } from "lucide-react";
import { ModalContent } from "../../modal/modal-content";
import { ModalLayout } from "../../modal/modal-layout";
import { Button } from "../../button";
import { useModal } from "../../modal/hooks/useModalContext";
import { useAuth } from "../../../context/auth-context";
import { api } from "../../../lib/api";

export function useHandleLeaveAccount() {
  const { openModal, closeModal } = useModal();
  const { setUser } = useAuth();

  const handleLogout = async () => {
    await api.post("/sign-out");
    setUser(null);
    closeModal();
  };

  const openHandleLeaveAccount = () => {
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
            <Button
              onClick={handleLogout}
              variant={"primary"}
              size={"2xl"}
              className="bg-red-600"
            >
              Sair
            </Button>
          </div>
        </ModalContent>
      </ModalLayout>
    );
  };
  return { openHandleLeaveAccount };
}
