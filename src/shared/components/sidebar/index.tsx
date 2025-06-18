import { SidebarHeader } from "./sidebar-header";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarSeparator } from "./sidebar-separator";
import type { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode
}

export function Sidebar({children}: SidebarProps) {
  return (
    <nav className="md:h-full md:w-52 flex md:flex-col md:justify-between items-center justify-between">
      <SidebarHeader userClass="ADMIN" />

      <SidebarSeparator />

      {children}

      <SidebarSeparator />

      <SidebarFooter userName="Usuário adm" userEmail="user.adm@test.com" />
    </nav>
  );
}
