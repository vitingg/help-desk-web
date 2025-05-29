import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../../modules/auth/components/layout";
import { SignIn } from "../../modules/auth/sign-in";
import { SignUp } from "../../modules/auth/sign-up";
import { Page } from "../../modules/admin/page";

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

        <Route path="/admin/dashboard" element={<Page />} />

        
      </Routes>
    </BrowserRouter>
  );
}
