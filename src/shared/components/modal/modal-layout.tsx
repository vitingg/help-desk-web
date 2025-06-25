import { type ReactNode } from "react";
import { cn } from "../../lib/utils";
import { ModalContext } from "./context/modal-context";

type ModalLayoutProps = {
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
};
export function ModalLayout({
  children,
  open,
  onClose,
  className,
}: ModalLayoutProps) {
  return (
    <ModalContext.Provider value={{ open, onClose }}>
      <div
        className={cn(
          `fixed inset-0 flex justify-center items-center transition-colors`,
          open ? "visible bg-black/20" : "invisible",
          className
        )}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-gray-600 shadow text-gray-200 rounded-2xl transition-all ${
            open ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}
