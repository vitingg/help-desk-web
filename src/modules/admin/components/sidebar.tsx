import clsx from "clsx";
import { BriefcaseBusiness, ClipboardList, Users, Wrench } from "lucide-react";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

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
  const baseLinkClasses =
    "text-gray-400 px-6 py-4 border-0 rounded-md hover:bg-gray-200 hover:text-gray-400";
  const activeLinkClasses =
    "text-white px-6 py-4 border-0 rounded-lg bg-blue-dark hover:text-white hover:bg-blue-dark";
  return (
    <div className="hidden md:flex flex-col flex-1 justify-start pt-5">
      <ul className="space-y-1 flex flex-col items-start">
        {navItem.map((item) => (
          <li className="flex" key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                twMerge(clsx(baseLinkClasses, isActive && activeLinkClasses))
              }
            >
              <span className="flex gap-2">
                {item.icon} {item.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
