import { SidebarHeader } from "./sidebar-header";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarSeparator } from "./sidebar-separator";
import { ClipboardList, Users, BriefcaseBusiness, Wrench } from "lucide-react";
import { NavLink } from "react-router";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function Sidebar() {
  const navItem = [
    {
      name: "Chamados",
      icon: <ClipboardList />,
      path: "/dashboard/admin/ticket",
    },
    { name: "Técnicos", icon: <Users />, path: "/dashboard/admin/tech" },
    {
      name: "Clientes",
      icon: <BriefcaseBusiness />,
      path: "/dashboard/admin/client",
    },
    { name: "Serviços", icon: <Wrench />, path: "/dashboard/admin/services" },
  ];

  const baseLinkClasses = "text-gray-400 px-6 py-4 border-0 rounded-md";
  const activeLinkClasses =
    "text-white px-6 py-4 border-0 rounded-lg bg-blue-dark";

  return (
    <nav className="md:h-full md:w-52 flex md:flex-col md:justify-between items-center justify-between">
      <SidebarHeader userClass="ADMIN" />

      <SidebarSeparator />

      <div className="hidden md:flex flex-col flex-1 justify-start pt-5">
        <ul className="space-y-1 flex flex-col pr-4 pl-4">
          {navItem.map((item) => (
            <li className="flex" key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  twMerge(clsx(baseLinkClasses, isActive && activeLinkClasses))
                }
              >
                <span className="flex gap-2">{item.icon} {item.name}</span>
                
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <SidebarSeparator />

      <SidebarFooter userName="Usuário adm" userEmail="user.adm@test.com" />
    </nav>
  );
}
