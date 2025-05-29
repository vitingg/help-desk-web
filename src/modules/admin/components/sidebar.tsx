import lightVector from "../../../shared/assets/vectors/Logo_IconLight.svg";

export function Sidebar() {
  return (
    <div className="flex gap-4 justify-center border-b  border-gray-500">
      <img src={lightVector} alt="" className="w-11 h-11" />
      <span>
        <p className="text-lg">HelpDesk</p>
        <p className="text-2xs text-blue-light">ADMIN</p>
      </span>
    </div>
  );
}
