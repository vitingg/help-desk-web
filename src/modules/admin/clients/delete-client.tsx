import { useModal } from "../../../shared/components/modal/hooks/useModalContext";

export function useDeleteCliente() {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(<p>oi</p>);
  };

  return { handleOpenModal };
}
