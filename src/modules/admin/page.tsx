import { Sidebar } from "./components/sidebar";
import { Dashboard } from "./components/dashboard";

export function Page() {
  return (
    <div className="bg-gray-100 h-screen text-gray-600 pt-4 flex">
      <div className="h-full flex gap-4 pl-5 pt-6 pb-6 pr-9 border">
        <Sidebar />
      </div>
      <div className="h-full w-full">
        <Dashboard />
      </div>
    </div>
  );
}
