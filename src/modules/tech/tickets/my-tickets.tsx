import { Container } from "../components/container";
import { Status } from "../../../shared/components/status";
import { useEffect, useState } from "react";
import { api } from "../../../shared/lib/api";

export function TechTickets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchClients() {
      try {
        const response = await api.get("/services", {
          signal: controller.signal,
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(data);
    fetchClients();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="pt-14">
      <p className="text-blue-dark font-semibold text-xl">Meus chamados</p>

      <div className="pt-6">
        <Status status="Em Atendimento" />
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Container navigateTo="tech/ticket-detail" />
        </div>
      </div>
      <div className="pt-6">
        <Status status="Aberto" />
        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Container navigateTo="tech/ticket-detail" />
          <Container navigateTo="tech/ticket-detail" />
        </div>
      </div>
      <div className="pt-6">
        <Status status="Encerrado" />
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Container navigateTo="tech/ticket-detail" />
          <Container navigateTo="tech/ticket-detail" />
          <Container navigateTo="tech/ticket-detail" />
          <Container navigateTo="tech/ticket-detail" />
        </div>
      </div>
    </div>
  );
}
