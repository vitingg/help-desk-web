import lightVector from "../../../shared/assets/vectors/Logo_IconLight.svg";
import { Menu } from "lucide-react";

type SidebarHeaderProps = {
  userClass: string
}

export function SidebarHeader({userClass}: SidebarHeaderProps) {
  return (
    <div className="pt-6 pb-6 flex gap-4 justify-center">
      <div className="bg-gray-200 ml-6 mr-4 text-gray-600 p-3 rounded-lg md:hidden">
        <Menu />
      </div>
      <img src={lightVector} alt="" className="w-11 h-11" />
      <span>
        <p className="text-lg">HelpDesk</p>
        <p className="text-2xs text-blue-light">{userClass}</p>
      </span>
    </div>
  );
}
