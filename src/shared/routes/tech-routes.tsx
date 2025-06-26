import { Route } from "react-router";
import { TechPage } from "../../modules/tech/page";
import { TechTickets } from "../../modules/tech/tickets/my-tickets";
import { TechDetail } from "../../modules/tech/tickets/ticket-detail";

export function TechRoutes() {
  return (
    <>
      <Route path="/dashboard/tech" element={<TechPage />}>
        <Route path="tickets" element={<TechTickets />} />
        <Route path="ticket-detail" element={<TechDetail />} />
      </Route>
    </>
  );
}
