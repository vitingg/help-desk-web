import { createContext } from "react";

interface ModalContextProps {
  onClose?: () => void;
  open?: boolean;
}

export const ModalContext = createContext<ModalContextProps>({});


