import { useState } from "react";
import lightVector from "../../../shared/assets/vectors/Logo_IconLight.svg";
import { Menu } from "lucide-react";
import { SidebarModal } from "./modal/sidebar-modal";
import { AdminSidebar } from "../../../modules/admin/components/sidebar-admin";
import { TechSidebar } from "../../../modules/tech/components/sidebar-tech";
import { ClientSidebar } from "../../../modules/client/components/sidebar-client";
import { useAuth } from "../../context/auth-context";

type SidebarHeaderProps = {
  userClass: "ADMIN" | "CLIENTE" | "TÉCNICO";
};

export function SidebarHeader({ userClass }: SidebarHeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();

  const roleLabels: Record<string, string> = {
    ADMIN: "Administrador",
    TECH: "Técnico",
    CLIENT: "Cliente",
  };

  return (
    <nav className="pt-6 pb-6 flex gap-4 justify-center md:border-b-1 md:border-b-gray-300 md:w-full">
      <div
        className="bg-gray-200 ml-6 mr-4 text-gray-600 p-3 rounded-lg md:hidden cursor-pointer"
        onClick={() => setSidebarOpen((e) => !e)}
      >
        <Menu />{" "}
        {sidebarOpen && (
          <div className="absolute z-50 top-32 left-20  md:top-auto md:right-auto md:bottom-1 md:left-50">
            <SidebarModal modalTitle="MENU" width="sidebar">
              <ClientSidebar />
            </SidebarModal>
          </div>
        )}
      </div>
      <img src={lightVector} alt="" className="w-11 h-11" />
      <span>
        <p className="text-lg">HelpDesk</p>
        <p className="text-2xs text-blue-light">{userClass}</p>
      </span>
    </nav>
  );
}
