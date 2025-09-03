import { Button } from "../button";
import { Plus } from "lucide-react";
import { TicketLayout } from "./ticket-layout";
import { Icon } from "../edit-icon";
import type { Ticket } from "../../types/tickets/ticket-response";
import { formattedPrice } from "../../utils/format-price";

interface TicketDetailProps {
  data: Ticket;
}

export function AdditionalService({ data }: TicketDetailProps) {
  const additionalServices = data.categories.filter(
    (c) => c.type === "ADDITIONAL"
  );
  return (
    <TicketLayout className="min-w-md">
      <div className="flex justify-between items-center">
        <p className="text-xs font-bold text-gray-400">Serviços adicionais</p>
        <Button size={"4xs"} className="flex items-center justify-center">
          <Plus />
        </Button>
      </div>
      <div className="">
        {additionalServices.length > 0 && (
          <>
            {additionalServices.map((service) => (
              <div
                key={service.categoryId}
                className="flex justify-between items-center pt-3"
              >
                <p className="font-bold text-sm">{service.category.name}</p>
                <div className="flex gap-4 items-center">
                  <p className="text-gray-200 text-sm">
                    {formattedPrice(service.category.basePrice)}
                  </p>
                  <Icon variant="delete" />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </TicketLayout>
  );
}
