import { Route } from "react-router";
import { AdminPage } from "../../modules/admin/page";
import { Ticket } from "../../modules/admin/tickets/ticket";
import { Detail } from "../../modules/admin/tickets/ticket-detail";
import { Technicians } from "../../modules/admin/technicians/technicians";
import {
  Form,
  Profile,
  TechniciansProfile,
} from "../../modules/admin/technicians/technicians-profile";
import { Clients } from "../../modules/admin/clients/client";
import { Service } from "../../modules/admin/services/service";

export function AdminRoutes() {
  return (
    <>
      <Route path="/dashboard/admin" element={<AdminPage />}>
        <Route path="ticket" element={<Ticket />} />
        <Route path="ticket-detail" element={<Detail />} />
      </Route>

      <Route path="/dashboard/admin" element={<AdminPage />}>
        <Route path="tech" element={<Technicians />} />
        <Route path="technicians" element={<TechniciansProfile />}>
          <Route path="profile" element={<Profile />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Route>

      <Route path="/dashboard/admin" element={<AdminPage />}>
        <Route path="client" element={<Clients />} />
      </Route>
      <Route path="/dashboard/admin" element={<AdminPage />}>
        <Route path="services" element={<Service />} />
      </Route>
    </>
  );
}
