
import { Ticket } from "../tickets/ticket";
import { Technicians } from "../technicians/technicians";
import { TechniciansProfile } from "../technicians/technicians-profile";
import { Detail } from "../tickets/ticket-detail";

export function Dashboard() {
  return (
    <div
      className="md:flex-1 rounded-tl-3xl rounded-tr-3xl md:rounded-tl-xl md:rounded-tr-none 
    h-full bg-gray-600 text-gray-200"
    >
      <div className="h-full pl-12 pr-12">
        <TechniciansProfile />
      </div>
    </div>
  );
}
