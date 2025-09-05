import { Container } from "../components/container";
import { Status } from "../../../shared/components/status";
import { useEffect, useState } from "react";
import { api } from "../../../shared/lib/api";
import type { Ticket } from "../../../shared/types/tickets/ticket-response";

export function TechTickets() {
  const [data, setData] = useState<Ticket[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchClients() {
      try {
        const response = await api.get("/services", {
          signal: controller.signal,
        });
        setData(response.data.tickets);
        console.log(response.data.tickets);
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

  const pending = data.filter((s) => s.status === "PENDING");
  const inProgress = data.filter((s) => s.status === "IN_PROGRESS");
  const done = data.filter((s) => s.status === "COMPLETE");

  const grouped = [
    { label: "Em Atendimento" as const, items: inProgress },
    { label: "Aberto" as const, items: pending },
    { label: "Encerrado" as const, items: done },
  ];

  return (
    <div className="pt-14">
      <p className="text-blue-dark font-semibold text-xl">Meus chamados</p>

      {grouped.map((group) => (
        <div key={group.label} className="pt-6">
          <Status status={group.label} />
          <div
            className="pt-4 grid gap-4 grid-cols-1 "
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gridAutoRows: "auto",
            }}
          >
            {group.items.map((p) => (
              <Container key={p.id} data={p} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
