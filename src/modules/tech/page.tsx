import { TechSidebar } from "./components/sidebar";
import { Dashboard } from "../../shared/components/layouts-pages/dashboard";
import { Outlet } from "react-router";
import { Layout } from "../../shared/components/layouts-pages/layout";
import { SidebarHeader } from "../../shared/components/sidebar/sidebar-header";
import { SidebarFooter } from "../../shared/components/sidebar/sidebar-footer";
import { SidebarLayout } from "../../shared/components/sidebar/sidebar-layout";

export function TechPage() {
  return (
    <Layout>
      <SidebarLayout>
        <SidebarHeader userClass="CLIENTE" />
        <TechSidebar />
        <SidebarFooter userName="Usuário adm" userEmail="user.adm@test.com" />
      </SidebarLayout>
      <Dashboard>
        <Outlet />
      </Dashboard>
    </Layout>
  );
}
