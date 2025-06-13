import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../../modules/auth/components/layout";
import { SignIn } from "../../modules/auth/sign-in";
import { SignUp } from "../../modules/auth/sign-up";

import { Page } from "../../modules/admin/page";
import { Ticket } from "../../modules/admin/tickets/ticket";
import { Detail } from "../../modules/admin/tickets/ticket-detail";

import { Technicians } from "../../modules/admin/technicians/technicians";
import { TechniciansProfile, Profile, Form } from "../../modules/admin/technicians/technicians-profile";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/sign-up" replace />} />
        <Route path="/auth" element={<Navigate to="/auth/sign-up" replace />} />

        <Route path="/auth" element={<Layout />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>

        <Route path="/dashboard/admin" element={<Page />}>
          <Route path="ticket" element={<Ticket />} />
          <Route path="ticket-detail" element={<Detail />} />
        </Route>

        <Route path="/dashboard/admin" element={<Page />}>
          <Route path="tech" element={<Technicians />} />
          <Route path="technicians" element={<TechniciansProfile />}>
            <Route path="profile" element={<Profile />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
