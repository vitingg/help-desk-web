import { CircleCheckBig, Clock2, PenLine } from "lucide-react";
import { Button } from "../../../shared/components/button";
import type { Ticket } from "../../../shared/types/tickets/ticket-response";
import { formattedId } from "../../../shared/utils/format-id";
import { formattedDate } from "../../../shared/utils/format-date";
import { formattedPrice } from "../../../shared/utils/format-price";
import { getInitials } from "../../../shared/utils/get-initial-name";
import { useNavigate } from "react-router";

export function Container({ data }: { data: Ticket }) {
  const navigate = useNavigate();

  function getButton(status: Ticket["status"]) {
    switch (status) {
      case "IN_PROGRESS":
        return (
          <Button size="sm" className="flex items-center justify-center gap-2">
            <CircleCheckBig height={14} width={14} />
            Encerrar
          </Button>
        );
      case "PENDING":
        return (
          <Button size="xs" className="flex items-center justify-center gap-2">
            <Clock2 height={14} width={14} />
            Iniciar
          </Button>
        );
      case "COMPLETE":
        return null;
      default:
        return null;
    }
  }

  return (
    <div className="w-full md:w-80 border border-gray-500 rounded-2xl p-5">
      <div className="flex justify-between gap-6">
        <span className="font-bold space-y-0.5">
          <p className="text-gray-400 text-xs">{formattedId(data.id)}</p>
          <p className="text-gray-100 text-sm">{data.title}</p>
          <p className="text-gray-200 text-xs font-normal">
            {data.categories[0].category.name}
          </p>
        </span>
        <span className="text-gray-600 text-xs flex items-start  gap-2">
          <Button
            size={"4xs"}
            className="flex items-center justify-center gap-2"
            variant={"secondary"}
            onClick={() =>
              navigate(`/dashboard/tech/ticket-detail/${data.id}`)
            }
          >
            <PenLine width={14} height={14} />
          </Button>
          {getButton(data.status)}
        </span>
      </div>
      <span className="text-sm text-gray-200 flex justify-between pt-4">
        <p>{formattedDate(data.createdAt)}</p>
        <p>{formattedPrice(data.categories[0].category.basePrice)}</p>
      </span>
      <div className="border-t border-gray-500 my-4" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-blue-dark text-gray-600 text-xs">
            {getInitials(data.client.username)}
          </div>
          <p className="font-bold text-gray-200">{data.client.username}</p>
        </div>
        <div className="w-6 h-6 flex justify-center items-center rounded-full bg-feedback-progressBackground text-feedback-progress">
          <Clock2 height={16} width={16} />
        </div>
      </div>
    </div>
  );
}
