import { useModal } from "../../modal/hooks/useModalContext";
import { EditProfileModal } from "./components/edit-profile-modal";

export function useHandleOpenProfileModal() {
  const { openModal } = useModal();

  const openHandleOpenProfileModal = () => {
    openModal(<EditProfileModal />);
  };
  return { openHandleOpenProfileModal };
}
