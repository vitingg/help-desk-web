import { Route } from "react-router";
import { TechPage } from "../../modules/tech/page";
import { MyTickets } from "../../modules/tech/tickets/my-tickets";

export function TechRoutes() {
  return (
    <>
      <Route path="/dashboard/tech" element={<TechPage />}>
        <Route path="tickets" element={<MyTickets />} />
      </Route>
    </>
  );
}
