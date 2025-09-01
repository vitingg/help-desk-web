import { useModal } from "../../../../shared/components/modal/hooks/useModalContext";
import { EditClientModal } from "./components/edit-client-modal";

export function useEditClient() {
  const { openModal, closeModal } = useModal();

  const handleOpenEditModal = (id: number) => {
    openModal(<EditClientModal id={id} onClose={closeModal} />);
  };

  return { handleOpenEditModal };
}
