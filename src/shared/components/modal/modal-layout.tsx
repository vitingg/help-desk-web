import type { ReactNode } from "react";

type ModalLayoutProps = {
  children: ReactNode;
  open?: boolean;
};

export function ModalLayout({ children, open }: ModalLayoutProps) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "scale-100 opacity-100" : "scale-125 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
