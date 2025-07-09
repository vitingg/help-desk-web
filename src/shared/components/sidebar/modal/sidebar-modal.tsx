import { type ReactNode } from "react";
import { CircleUser, LogOut } from "lucide-react";

type SidebarModal = {
  modalTitle: "OPÇÕES" | "MENU";
  children?: ReactNode;
  profile?: boolean;
  width: "profile" | "sidebar";
};

const widthClasses = {
  profile: "w-[12.375rem] h-[8.875rem]",
  sidebar: "w-[21.75rem]",
};

export function SidebarModal({
  modalTitle,
  children,
  profile = true,
  width,
}: SidebarModal) {
  profile;
  return (
    <div
      className={`bg-gray-100 text-gray-600 rounded-xl ${widthClasses[width]}`}
    >
      <p className="text-2xs text-gray-400 font-bold pt-4 pl-5 pb-4">
        {modalTitle}
      </p>
      {modalTitle === "OPÇÕES" && (
        <div className="p-5 pt-0 flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <CircleUser width={20} /> Perfil
          </div>
          <div className="flex gap-2 items-center text-feedback-danger">
            <LogOut width={20} /> Sair
          </div>
        </div>
      )}

      <div className="p-5 pt-0">{children}</div>
    </div>
  );
}
