import { AdminSidebar } from "./components/sidebar-admin";
import { Dashboard } from "../../shared/components/layouts-pages/dashboard";
import { Outlet } from "react-router";
import { Layout } from "../../shared/components/layouts-pages/layout";
import { SidebarLayout } from "../../shared/components/sidebar/sidebar-layout";
import { SidebarHeader } from "../../shared/components/sidebar/sidebar-header";
import { SidebarFooter } from "../../shared/components/sidebar/sidebar-footer";

export function AdminPage() {
  return (
    <Layout>
      <SidebarLayout>
        <SidebarHeader userClass="ADMIN" />
        <AdminSidebar />
        <SidebarFooter userName="Usuário adm" userEmail="user.adm@test.com" />
      </SidebarLayout>
      <Dashboard>
        <Outlet />
      </Dashboard>
    </Layout>
  );
}
