import clsx from "clsx";
import { ClipboardList, Plus } from "lucide-react";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

export function ClientSidebar() {
  const navItem = [
    {
      name: "Meus chamados",
      icon: <ClipboardList />,
      path: "/dashboard/client/tickets",
    },
    {
      name: "Criar chamado",
      icon: <Plus />,
      path: "/dashboard/client/create-ticket",
    },
  ];
  const baseLinkClasses =
    "text-gray-400 px-6 py-4 border-0 rounded-md hover:bg-gray-200 hover:text-gray-400";
  const activeLinkClasses =
    "text-white px-6 py-4 border-0 rounded-lg bg-blue-dark hover:text-white hover:bg-blue-dark";

  return (
    <div className=" bg-gray-100 rounded-xl p-2 absolute top-32 left-10 md:p-0 md:rounded-none md:bg-inherit md:static md:flex flex-col flex-1 justify-start pt-5">
      <ul className="space-y-1 flex flex-col pr-4 pl-4">
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
