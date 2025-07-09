import { type ReactNode } from "react";
import { cn } from "../../lib/utils";
import { ModalProvider } from "./context/modal-context";
import { useModal } from "./hooks/useModalContext";

type ModalLayoutProps = {
  open?: boolean;
  children?: ReactNode;
  className?: string;
};
export function ModalLayout({ children, onClose }: ModalLayoutProps) {
  const {} = useModal();

  if (!open) {
    return null;
  }
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/20 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-600 shadow text-gray-200 rounded-2xl transition-all"
      >
        {children}
      </div>
    </div>
  );
}
