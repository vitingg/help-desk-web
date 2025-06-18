import { TechSidebar } from "./components/sidebar";
import { Dashboard } from "../../shared/components/layouts/dashboard";
import { Outlet } from "react-router";
import { Layout } from "../../shared/components/layouts/layout";
import { Sidebar } from "../../shared/components/sidebar";
import { SidebarHeader } from "../../shared/components/sidebar/sidebar-header";
import { SidebarSeparator } from "../../shared/components/sidebar/sidebar-separator";
import { SidebarFooter } from "../../shared/components/sidebar/sidebar-footer";
import { SidebarLayout } from "../../shared/components/sidebar/sidebar-layout";

export function TechPage() {
  return (
    <Layout>
      <SidebarLayout>
        <SidebarHeader userClass="TÉCNICO" />
        <SidebarSeparator />
        <TechSidebar />
        <SidebarSeparator />
        <SidebarFooter userName="Usuário adm" userEmail="user.adm@test.com" />
      </SidebarLayout>
      <Dashboard>
        <Outlet />
      </Dashboard>
    </Layout>
  );
}
