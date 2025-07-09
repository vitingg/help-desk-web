import ReactDOM from "react-dom";
import { ModalLayout } from "../modal-layout";
import React, {
  createContext,
  useState,
  useContext,
  type ReactNode,
} from "react";

interface ModalContextType {
  openModal: (content: ReactNode, options?: ModalOptions) => void;
  closeModal: () => void;
  isOpen: boolean;
}

interface ModalOptions {
  size?: "sm" | "md" | "lg";
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = (content: ReactNode, options?: ModalOptions) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setModalContent(null), 300);
  };

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      {isOpen &&
        ReactDOM.createPortal(
          // Aqui você usa seu componente de layout de modal genérico
          // Ele pode ter o fundo escuro (overlay) e o container central
          <ModalLayout onClose={closeModal}>{modalContent}</ModalLayout>,
          modalRoot
        )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal deve ser usado dentro de um ModalProvider");
  }
  return context;
};
