import { Clock2 } from "lucide-react";
import { Container } from "../components/container";

export function MyTickets() {
  return (
    <div className="pt-14">
      <p className="text-blue-dark font-semibold text-xl">Meus chamados</p>
      <div className="pt-6">
        <div className="bg-feedback-progressBackground rounded-4xl p-3 gap-2 flex w-fit">
          <p><Clock2 /></p>
          <p>Em atendimento</p>
        </div>
        <Container />
      </div>
      <div>
        
      </div>
    </div>
  );
}
 