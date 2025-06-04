import { Content } from "./content";
import { Detail } from "./second-content";

export function Dashboard() {
  return (
    <div
      className="md:flex-1 rounded-tl-3xl rounded-tr-3xl md:rounded-tl-xl md:rounded-tr-none 
    h-full bg-gray-600 text-gray-200"
    >
      <div className="h-full pl-12 pr-12">
        <Detail />
      </div>
    </div>
  );
}
