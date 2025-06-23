import { Button } from "../../../shared/components/button";
import { HeaderAction } from "../../../shared/components/header-action";
import { TcietDetail } from "../../../shared/components/tickets/ticket-detail";

export function TicketDetail() {
  return (
    <div className="pt-14">
      <div className="flex items-center justify-between">
        <HeaderAction title="ola" />
        <div className="flex  gap-2 items-center ">
          <Button variant={"secondary"} className="font-bold">
            Encerrar
          </Button>
          <Button
            size={"2xl"}
            className="flex items-center justify-center font-bold"
          >
            Iniciar atendimento
          </Button>
        </div>
      </div>
      <div>
        <TcietDetail />
      </div>
      <div>uma box</div>
    </div>
  );
}
