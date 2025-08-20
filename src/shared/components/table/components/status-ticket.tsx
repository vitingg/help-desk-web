import { Clock, Clock2 } from "lucide-react";

export function StatusTicket(status: string) {
  switch (status) {
    case "IN_PROGRESS":
      return (
        <div className="bg-feedback-progressBackground text-feedback-progress w-fit md:w-fit rounded-2xl gap-1 flex">
          <Clock2 /> <p>Em atendimento</p>
        </div>
      );
    case "PENDING":
      return (
        <div className="bg-feedback-openBackground text-feedback-open w-fit md:w-fit rounded-2xl gap-1 p-1">
          <div className="flex flex-row items-center gap-1">
            <Clock className="w-5 h-5" />
            <p>Aberto</p>
          </div>
        </div>
      );
    case "COMPLETE":
      return (
        <div className="bg-feedback-doneBackground text-feedback-done w-fit md:w-fit rounded-2xl gap-1">
          <Clock /> <p>Completo</p>
        </div>
      );
    default:
      return <p>sem status</p>;
  }
}
