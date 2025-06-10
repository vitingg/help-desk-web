import { SidebarHeader } from "./sidebar-header";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarSeparator } from "./sidebar-separator";
import { ClipboardList, Users, BriefcaseBusiness, Wrench } from "lucide-react";

export function Sidebar() {
  return (
    <nav className="md:h-full md:w-52 flex md:flex-col md:justify-between items-center justify-between">
      <SidebarHeader userClass="ADMIN" />

      <SidebarSeparator />

      <div className="hidden md:flex flex-col flex-1 justify-start pt-5">
        <ul className="space-y-1 flex flex-col pr-4 pl-4">
          <li className=" text-white px-6 py-4 border-0 rounded-lg bg-blue-dark">
            <a className="flex gap-2 items-center" href="">
              <ClipboardList />
              <p>Chamados</p>
            </a>
          </li>

          <li className=" text-gray-400 hover:text-white px-6 py-4 border-0 rounded-md  hover:bg-blue-dark">
            <a className="flex gap-3 items-center" href="">
              <Users />
              <p>Técnicos</p>
            </a>
          </li>

          <li className=" text-gray-400 hover:text-white px-6 py-4 border-0 rounded-md hover:bg-blue-dark">
            <a className="flex gap-3 items-center" href="">
              <BriefcaseBusiness />
              <p>Clientes</p>
            </a>
          </li>

          <li className=" text-gray-400 hover:text-white px-6 py-4 border-0 rounded-md hover:bg-blue-dark">
            <a className="flex gap-3 items-center" href="">
              <Wrench />
              <p>Serviços</p>
            </a>
          </li>
        </ul>
      </div>

      <SidebarSeparator />

      <SidebarFooter userName="Usuário adm" userEmail="user.adm@test.com" />
    </nav>
  );
}
