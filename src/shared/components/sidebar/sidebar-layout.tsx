import type { ReactNode } from "react";

type SidebarLayout = {
  children: ReactNode;
};

export function SidebarLayout({ children }: SidebarLayout) {
  return (
    <nav className="md:h-full md:w-52 flex md:flex-col md:justify-between items-center justify-between">
      {children}
    </nav>
  );
}
