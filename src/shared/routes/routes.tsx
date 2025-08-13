import { Routes, BrowserRouter, Route } from "react-router";
import { AuthProvider } from "../context/auth-context";
import { ProtectedRoute } from "./protected-routes";
import { Layout } from "../../modules/auth/components/layout";
import { SignUp } from "../../modules/auth/sign-up";
import { SignIn } from "../../modules/auth/sign-in";
import { AdminPage } from "../../modules/admin/page";
import { Ticket } from "../../modules/admin/tickets/ticket";
import { AdminDetail } from "../../modules/admin/tickets/ticket-detail";
import { Technicians } from "../../modules/admin/technicians/technicians";
import {
  Form,
  Profile,
  TechniciansProfile,
} from "../../modules/admin/technicians/technicians-profile";
import { Clients } from "../../modules/admin/clients/client";
import { Service } from "../../modules/admin/services/service";
import { TechPage } from "../../modules/tech/page";
import { TechTickets } from "../../modules/tech/tickets/my-tickets";
import { TechDetail } from "../../modules/tech/tickets/ticket-detail";
import { ClientPage } from "../../modules/client/page";
import { ClientTickets } from "../../modules/client/tickets/tickets";
import { ClientDetail } from "../../modules/client/tickets/ticket-detail";
import { CreateTicket } from "../../modules/client/create-ticket/create-ticket";

export function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<Layout />}>
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>

          <Route
            path="/dashboard"
            element={<ProtectedRoute allowedRoles={[`ADMIN`]} />}
          >
            <Route path="admin" element={<AdminPage />}>
              <Route path="ticket" element={<Ticket />} />
              <Route path="ticket-detail" element={<AdminDetail />} />
              <Route path="tech" element={<Technicians />} />
              <Route path="technicians" element={<TechniciansProfile />}>
                <Route path="profile" element={<Profile />} />
                <Route path="form" element={<Form />} />
                <Route path="client" element={<Clients />} />
                <Route path="services" element={<Service />} />
              </Route>
            </Route>
          </Route>

          <Route
            path="/dashboard"
            element={<ProtectedRoute allowedRoles={[`TECH`]} />}
          >
            <Route path="tech" element={<TechPage />}>
              <Route path="tickets" element={<TechTickets />} />
              <Route path="ticket-detail" element={<TechDetail />} />
            </Route>
          </Route>

          <Route
            path="/dashboard"
            element={<ProtectedRoute allowedRoles={[`CLIENT`]} />}
          >
            <Route path="client" element={<ClientPage />}>
              <Route path="tickets" element={<ClientTickets />} />
              <Route path="ticket-detail" element={<ClientDetail />} />
              <Route path="create-ticket" element={<CreateTicket />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
