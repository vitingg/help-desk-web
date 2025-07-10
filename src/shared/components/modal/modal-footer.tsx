import { type ReactNode } from "react";
import { Button } from "../button";

type ModalFooterProps = {
  children: ReactNode;
};

export function ModalFooter({ children }: ModalFooterProps) {
  return (
    <div className="flex items-center justify-between gap-2 pt-6 p-7 pb-8">
      <Button size={"5xl"}>{children}</Button>
    </div>
  );
}
