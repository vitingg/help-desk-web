import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../button";

type ModalLayoutProps = {
  children: ReactNode;
  open?: boolean;
  onClose?: () => void;
  modalTitle: string;
  className?: string;
};

export function ModalLayout({
  children,
  open,
  onClose,
  modalTitle,
  className,
}: ModalLayoutProps) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-gray-600 shadow text-gray-200 rounded-2xl transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-2 p-5">
          <p className="font-bold text-md">{modalTitle}</p>
          <button onClick={onClose} className="">
            <X size={18} />
          </button>
        </div>
        <hr className="my-4 text-gray-500" />
        <div className="flex flex-col gap-4 pt-6 p-7 pb-">
          {children}
        </div>
        <hr className="my-4 text-gray-500" />
        <div className="flex items-center justify-between gap-2 pt-6 p-7 pb-8">
          <Button size={"5xl"}>Salvar</Button>
        </div>
      </div>
    </div>
  );
}
