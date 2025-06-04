import lightVector from "../../shared/assets/vectors/Logo_IconLight.svg";
import {
  ClipboardList,
  Users,
  BriefcaseBusiness,
  Wrench,
  Menu,
} from "lucide-react";

export function Sidebar() {
  return (
    <nav className="md:h-full md:w-52 flex md:flex-col md:justify-between items-center justify-between">
      <div className="pt-6 pb-6 flex gap-4 justify-center">
        <div className="bg-gray-200 ml-6 mr-4 text-gray-600 p-3 rounded-lg md:hidden">
          <Menu />
        </div>
        <img src={lightVector} alt="" className="w-11 h-11" />
        <span>
          <p className="text-lg">HelpDesk</p>
          <p className="text-2xs text-blue-light">ADMIN</p>
        </span>
      </div>

      <hr className="my-4 hidden md:table-cell w-full border-t-1 border-gray-500 opacity-10" />

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

      <hr className="my-4 hidden md:table-cell w-full border-t-1 border-gray-500 opacity-10" />

      <div className="md:p-4 pt-0 mr-5">
        <div className="flex gap-2 items-center justify-center">
          <p className="bg-blue-dark text-lg rounded-full w-12 h-12 text-white flex items-center justify-center">
            UA
          </p>
          <div className="hidden md:flex flex-col">
            <p className="text-sm font-semibold text-white">Usuário Adm</p>
            <p className="text-xs text-gray-400">user.adm@test.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
