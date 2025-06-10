type SidebarFooterProps = {
  userName: string;
  userEmail: string;
};

export function SidebarFooter({ userName, userEmail }: SidebarFooterProps) {
  return (
    <div className="md:p-4 pt-0 mr-5">
      <div className="flex gap-2 items-center justify-center">
        <p className="bg-blue-dark text-lg rounded-full w-12 h-12 text-white flex items-center justify-center">
          UA
        </p>
        <div className="hidden md:flex flex-col">
          <p className="text-sm font-semibold text-white">{userName}</p>
          <p className="text-xs text-gray-400">{userEmail}</p>
        </div>
      </div>
    </div>
  );
}
