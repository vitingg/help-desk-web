import { type ReactNode } from "react";
import { Button } from "../button";
import { useModalContext } from "./hooks/useModalContext";

type ModalFooterProps = {
  children: ReactNode;
};

export function ModalFooter({ children }: ModalFooterProps) {
  const { onClose } = useModalContext();
  return (
    <div className="flex items-center justify-between gap-2 pt-6 p-7 pb-8">
      <Button onClick={onClose} size={"5xl"}>
        {children}
      </Button>
    </div>
  );
}
