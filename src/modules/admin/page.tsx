import { Sidebar } from "../../shared/components/sidebar/index";
import { Dashboard } from "./components/dashboard";
import { Layout } from "./components/layout";

export function Page() {
  return (
    <Layout>
      <Sidebar />
      <Dashboard />
    </Layout>
  );
}
