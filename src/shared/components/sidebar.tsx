import lightVector from "../../shared/assets/vectors/Logo_IconLight.svg";
import { ClipboardList, Users, BriefcaseBusiness, Wrench } from "lucide-react";

type SidebarProps = {
  isPc: boolean;
};

export function Sidebar({isPc}: SidebarProps) {
  return (
    <nav className="h-full w-52 justify-center pl-5 pr-5 ">
      <div className="pt-6 pb-6 flex gap-4 justify-center">
        <img src={lightVector} alt="" className="w-11 h-11" />
        <span>
          <p className="text-lg">HelpDesk</p>
          <p className="text-2xs text-blue-light">ADMIN</p>
        </span>
      </div>
      <div className="pt-2 flex flex-col items-center justify-center">
        <ul className="pt-4 space-y-4">
          <li>
            <a className="flex gap-3 items-center" href="">
              <ClipboardList />
              <p>Chamados</p>
            </a>
          </li>
          <li>
            <a className="flex gap-3 items-center" href="">
              <Users />
              <p>Chamados</p>
            </a>
          </li>
          <li>
            <a className="flex gap-3 items-center" href="">
              <BriefcaseBusiness />
              <p>Clientes</p>
            </a>
          </li>
          <li>
            <a className="flex gap-3 items-center" href="">
              <Wrench />
              <p>Serviços</p>
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}
