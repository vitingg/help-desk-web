import { useModal } from "../../../shared/components/modal/hooks/useModalContext";

export function useDeleteCliente() {
  const { openModal, closeModal } = useModal();

  const handleOpenDeleteModal = (id: number) => {
    openModal(
      <div className="p-12">
        {" "}
        <button onClick={closeModal}>{id}</button>
      </div>
    );
  };

  return { handleOpenDeleteModal };
}
