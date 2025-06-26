import { Route } from "react-router";
import { ClientPage } from "../../modules/client/page";
import { ClientTickets } from "../../modules/client/tickets/tickets";
import { ClientDetail } from "../../modules/client/tickets/client-detail";
import { CreateTicket } from "../../modules/client/create-ticket/create-ticket";

export function ClientRoutes() {
  return (
    <>
      <Route path="/dashboard/client" element={<ClientPage />}>
        <Route path="tickets" element={<ClientTickets />} />
        <Route path="ticket-detail" element={<ClientDetail />} />
      </Route>
      <Route path="/dashboard/client" element={<ClientPage />}>
        <Route path="create-ticket" element={<CreateTicket />} />
      </Route>
    </>
  );
}
