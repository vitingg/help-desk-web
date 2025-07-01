import { SidebarHeader } from "./sidebar-header";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarLayout } from "./sidebar-layout";
import type { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  return (
    <SidebarLayout>
      <SidebarHeader userClass="ADMIN" />
      {children}
      <SidebarFooter userName="Usuário adm" userEmail="user.adm@test.com" />
    </SidebarLayout>
  );
}
