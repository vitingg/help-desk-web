import clsx from "clsx";
import { BriefcaseBusiness, ClipboardList, Users, Wrench } from "lucide-react";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";
import {
  baseLinkClasses,
  activeLinkClasses,
} from "../../../shared/components/sidebar/export-sidebar-variance";

export function AdminSidebar() {
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
  return (
    <div className="hidden md:flex flex-col flex-1 justify-start pt-5">
      <ul className="space-y-1 flex flex-col items-start">
        {navItem.map((item) => (
          <li className="flex" key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                twMerge(
                  clsx(baseLinkClasses, isActive && activeLinkClasses),
                  "flex items-center justify-center pl-6"
                )
              }
            >
              <span className="flex gap-2 w-full">
                {item.icon} {item.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
