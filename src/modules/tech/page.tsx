import { SidebarHeader } from "../../shared/components/sidebar/sidebar-header";
import { SidebarFooter } from "../../shared/components/sidebar/sidebar-footer";
import { SidebarLayout } from "../../shared/components/sidebar/sidebar-layout";
import { TechSidebar } from "./components/sidebar-tech";

import { Dashboard } from "../../shared/components/layouts-pages/dashboard";
import { Layout } from "../../shared/components/layouts-pages/layout";
import { Outlet } from "react-router";

export function TechPage() {
  return (
    <Layout>
      <SidebarLayout>
        <SidebarHeader userClass="TÉCNICO" />
        <TechSidebar />
        <SidebarFooter userName="Usuário adm" userEmail="user.adm@test.com" />
      </SidebarLayout>
      <Dashboard>
        <Outlet />
      </Dashboard>
    </Layout>
  );
}
