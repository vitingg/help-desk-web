import { Container } from "../components/container";
import { Status } from "../../../shared/components/status";

export function TechTickets() {
  return (
    <div className="pt-14">
      <p className="text-blue-dark font-semibold text-xl">Meus chamados</p>
      <div className="pt-6">
        <Status status="Fechado" />
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Container navigateTo="tech/ticket-detail" />
        </div>
      </div>
      <div className="pt-6">
        <Status status="Em Atendimento" />
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Container />
          <Container />
          <Container />
        </div>
      </div>
      <div className="pt-6">
        <Status status="Aberto" />
        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Container />
          <Container />
          <Container />
          <Container />
        </div>
      </div>
    </div>
  );
}
