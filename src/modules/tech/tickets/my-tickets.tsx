import { Clock2 } from "lucide-react";
import { Container } from "../components/container";

export function MyTickets() {
  return (
    <div className="pt-14">
      <p className="text-blue-dark font-semibold text-xl">Meus chamados</p>
      <div className="pt-6">
        <div className="bg-feedback-progressBackground rounded-4xl p-2 text-feedback-progress gap-2 flex w-fit mb-4">
          <p><Clock2 /></p>
          <p className="">Em atendimento</p>
        </div>
        <div className="flex gap-4">
        <Container />
        </div>
      </div>
      <div className="pt-6">
        <div className="bg-feedback-progressBackground rounded-4xl p-2 text-feedback-progress gap-2 flex w-fit mb-4">
          <p><Clock2 /></p>
          <p className="">Em atendimento</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
        <Container />
        <Container />
        <Container />
        </div>
      </div>
      <div className="pt-6">
        <div className="bg-feedback-progressBackground rounded-4xl p-2 text-feedback-progress gap-2 flex w-fit mb-4">
          <p><Clock2 /></p>
          <p className="">Em atendimento</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
        <Container />
        <Container />
        <Container />
        <Container />
        </div>
      </div>
    </div>
  );
}
 