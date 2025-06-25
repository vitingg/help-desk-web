import { X } from "lucide-react";
import { type ReactNode } from "react";
import { useModalContext } from "./hooks/useModalContext";

type ModalHeaderProps = {
  children: ReactNode;
};

export function ModalHeader({ children }: ModalHeaderProps) {
  const { onClose } = useModalContext();
  return (
    <div className="flex items-center justify-between gap-2 p-5">
      <p className="font-bold text-md">{children}</p>
      <button onClick={onClose} className="cursor-pointer">
        <X size={18} />
      </button>
    </div>
  );
}
