import type { ReactNode } from "react";

type TicketLayoutProps = {
  children: ReactNode;
};

export function TicketLayout({ children }: TicketLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-6">
      <div className="border border-gray-500 flex-1 md:flex-none md:max-w[30rem] rounded-md p-6">
        {children}
      </div>
    </div>
  );
}
