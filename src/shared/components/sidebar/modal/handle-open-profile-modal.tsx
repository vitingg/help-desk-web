import { useModal } from "../../modal/hooks/useModalContext";
import { EditProfileModal } from "./components/edit-profile-modal";

export function useHandleOpenProfileModal() {
  const { openModal, closeModal } = useModal();

  const openHandleOpenProfileModal = () => {
    openModal(<EditProfileModal onClose={closeModal} />);
  };
  return { openHandleOpenProfileModal };
}
